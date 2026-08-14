import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabase";
import { LogOut, Download, RefreshCw, FileText } from "lucide-react";
import { toast } from "sonner";

type Row = Record<string, string | null>;

const TABS = [
  { key: "contacts", label: "Contact Messages", table: "contacts", cols: ["created_at", "name", "email", "message"] },
  { key: "memberships", label: "Membership Applications", table: "memberships", cols: ["created_at", "full_name", "email", "phone", "city", "occupation", "motivation"] },
  { key: "event_rsvps", label: "Event RSVPs", table: "event_rsvps", cols: ["created_at", "event_title", "full_name", "email"] },
  { key: "subscribers", label: "Newsletter Subscribers", table: "subscribers", cols: ["created_at", "email"] },
] as const;

const labelize = (c: string) =>
  c === "created_at" ? "Received" : c.replace(/_/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

const AdminEnquiries = () => {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("contacts");
  const [rows, setRows] = useState<Row[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const check = async (session: Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"]) => {
      if (!session) {
        navigate("/auth", { replace: true });
        return;
      }
      setUserEmail(session.user.email ?? null);
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!data);
      setAuthChecked(true);
    };
    supabase.auth.getSession().then(({ data }) => check(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => check(session));
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const current = TABS.find((t) => t.key === tab)!;

  const fetchRows = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from(current.table)
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error("Failed to load records");
      return;
    }
    setRows((data ?? []) as Row[]);
    setCounts((c) => ({ ...c, [current.key]: data?.length ?? 0 }));
  };

  useEffect(() => {
    if (isAdmin) fetchRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin, tab]);

  useEffect(() => {
    if (!isAdmin) return;
    TABS.forEach(async (t) => {
      const { count } = await supabase.from(t.table).select("id", { count: "exact", head: true });
      setCounts((c) => ({ ...c, [t.key]: count ?? 0 }));
    });
  }, [isAdmin]);

  const exportCsv = () => {
    const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = [
      current.cols.map(esc).join(","),
      ...rows.map((r) => current.cols.map((c) => esc(r[c])).join(",")),
    ].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `prc-${current.key}-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  if (!authChecked) {
    return (
      <Layout>
        <section className="py-16 text-center text-muted-foreground">Loading...</section>
      </Layout>
    );
  }

  if (!isAdmin) {
    return (
      <Layout>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-md text-center space-y-4">
            <h1 className="text-2xl font-black text-foreground">Access denied</h1>
            <p className="text-muted-foreground text-sm">
              You're signed in as <span className="font-semibold">{userEmail}</span>, but this account does not have admin privileges.
            </p>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-foreground text-sm hover:bg-secondary/80 transition"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-black text-foreground">Enquiries</h1>
              <p className="text-sm text-muted-foreground">All submissions from the website</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/admin/blog"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-secondary text-foreground text-sm hover:bg-secondary/80 transition"
              >
                <FileText className="w-4 h-4" /> Blog
              </Link>
              <button
                onClick={fetchRows}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-secondary text-foreground text-sm hover:bg-secondary/80 transition"
              >
                <RefreshCw className="w-4 h-4" /> Refresh
              </button>
              <button
                onClick={exportCsv}
                disabled={!rows.length}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition disabled:opacity-50"
              >
                <Download className="w-4 h-4" /> CSV
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-secondary text-foreground text-sm hover:bg-secondary/80 transition"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-4 py-2 rounded-md text-sm font-bold border transition ${
                  tab === t.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {t.label}
                <span className="ml-2 opacity-70">{counts[t.key] ?? 0}</span>
              </button>
            ))}
          </div>

          <div className="border border-border rounded-lg overflow-x-auto bg-card">
            {loading ? (
              <p className="p-6 text-sm text-muted-foreground">Loading...</p>
            ) : rows.length === 0 ? (
              <p className="p-6 text-sm text-muted-foreground">No records yet.</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {current.cols.map((c) => (
                      <th key={c} className="text-left font-bold text-foreground px-4 py-3 whitespace-nowrap">
                        {labelize(c)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.id ?? i} className="border-b border-border/60 last:border-0 align-top">
                      {current.cols.map((c) => (
                        <td key={c} className="px-4 py-3 text-muted-foreground max-w-md">
                          {c === "created_at" ? (
                            new Date(r[c] as string).toLocaleString()
                          ) : c === "email" ? (
                            <a href={`mailto:${r[c]}`} className="text-primary hover:underline">
                              {r[c]}
                            </a>
                          ) : (
                            <span className="whitespace-pre-wrap break-words">{r[c] || "-"}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminEnquiries;
