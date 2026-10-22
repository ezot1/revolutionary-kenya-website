import { useEffect, useState } from "react";
import { Link, useNavigate } from "@/lib/router-compat";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { LogOut, Download, RefreshCw, FileText, Reply, X } from "lucide-react";
import { toast } from "sonner";

type Row = Record<string, string | null> & {
  id: string | null;
  email: string | null;
  name?: string | null;
  full_name?: string | null;
  event_title?: string | null;
};

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
  const [replyTo, setReplyTo] = useState<Row | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [repliedTo, setRepliedTo] = useState<Set<string>>(new Set());

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
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setTimeout(() => check(session), 0);
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const current = TABS.find((t) => t.key === tab) ?? TABS[0];

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

  const fetchReplies = async () => {
    const { data } = await supabase.from("enquiry_replies").select("to_email");
    setRepliedTo(new Set((data ?? []).map((r) => (r.to_email as string).toLowerCase())));
  };

  useEffect(() => {
    if (isAdmin) fetchReplies();
  }, [isAdmin]);

  const openReply = (r: Row) => {
    setReplyTo(r);
    const subj =
      current.key === "contacts"
        ? "Re: Your message to the Permanent Revolutionary Congress"
        : current.key === "memberships"
          ? "Re: Your PRC membership application"
          : current.key === "event_rsvps"
            ? `Re: Your RSVP for ${r.event_title ?? "our event"}`
            : "Re: PRC newsletter";
    const name = (r.name || r.full_name || "Comrade") as string;
    setSubject(subj);
    setMessage(`Dear ${name},\n\nThank you for reaching out to the Permanent Revolutionary Congress.\n\n\n\nIn solidarity,\nPRC\ninfo@prca.world`);
  };

  const sendReply = async () => {
    if (!replyTo?.email || !subject.trim() || !message.trim()) return;
    setSending(true);
    const { data, error } = await supabase.functions.invoke("send-reply", {
      body: {
        to: replyTo.email,
        subject: subject.trim(),
        body: message.trim(),
        sourceTable: current.table,
        sourceId: replyTo.id,
      },
    });
    setSending(false);
    const err = (error as unknown as { message?: string })?.message ?? (data as { error?: string } | null)?.error;
    if (err || error) {
      toast.error((data as { error?: string } | null)?.error || "Could not send the reply.");
      return;
    }
    toast.success(`Reply sent to ${replyTo.email}`);
    setRepliedTo((s) => new Set(s).add((replyTo.email as string).toLowerCase()));
    setReplyTo(null);
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
      <AdminLayout title="Enquiries" section="enquiries" email={userEmail} onSignOut={handleLogout} authenticated={authChecked && isAdmin}>
        <section className="py-16 text-center text-muted-foreground">Loading...</section>
      </AdminLayout>
    );
  }

  if (!isAdmin) {
    return (
      <AdminLayout title="Enquiries" section="enquiries" email={userEmail} onSignOut={handleLogout} authenticated={authChecked && isAdmin}>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-md text-center space-y-4">
            <h1 className="text-2xl font-black text-foreground">Access denied</h1>
            <p className="text-muted-foreground text-sm">
              You're signed in as <span className="font-semibold">{userEmail}</span>, but this account does not have admin privileges.
            </p>
            <Button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-foreground text-sm hover:bg-secondary/80 transition"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </Button>
          </div>
        </section>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Enquiries" section="enquiries" email={userEmail} onSignOut={handleLogout} authenticated={authChecked && isAdmin}>
      <section>
        <div className="min-w-0">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div><p className="mb-2 text-xs font-semibold uppercase text-primary">Correspondence</p><h1 className="text-3xl font-bold">Enquiries</h1></div>
            <div className="flex gap-2"><Button variant="outline" onClick={fetchRows} disabled={loading}><RefreshCw className={loading ? "animate-spin" : ""} />Refresh</Button><Button onClick={exportCsv} disabled={!rows.length}><Download />Export CSV</Button></div>
          </div>
          <div className="mb-7 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {TABS.map((t) => (
              <Button
                key={t.key}
                onClick={() => setTab(t.key)}
                aria-pressed={tab === t.key}
                className={`h-auto min-h-24 flex-col items-start justify-between gap-3 whitespace-normal rounded-md px-4 py-4 text-left text-sm font-medium border transition ${
                  tab === t.key
                    ? "bg-accent text-accent-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:text-foreground hover:bg-secondary"
                }`}
              >
                {t.label}
                <span className="text-2xl font-semibold">{counts[t.key] ?? 0}</span>
              </Button>
            ))}
          </div>

          <div className="mb-3 flex items-center justify-between gap-3"><h2 className="text-lg font-semibold">{current.label}</h2><span className="text-xs text-muted-foreground">{rows.length} records</span></div>
          <div className="border border-border rounded-lg overflow-x-auto bg-card">
            {loading ? (
              <p className="py-16 px-6 text-center text-sm text-muted-foreground">Loading...</p>
            ) : rows.length === 0 ? (
              <p className="py-16 px-6 text-center text-sm text-muted-foreground">No records yet.</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {current.cols.map((c) => (
                      <th key={c} className="text-left font-bold text-foreground px-4 py-3 whitespace-nowrap">
                        {labelize(c)}
                      </th>
                    ))}
                    <th className="text-left font-bold text-foreground px-4 py-3">Reply</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.id ?? i} className="border-b border-border/60 last:border-0 align-top">
                      {current.cols.map((c) => (
                        <td key={c} className="px-4 py-4 text-muted-foreground min-w-36 max-w-md">
                          {c === "created_at" ? (
                            new Date(r[c] as string).toLocaleString("en-GB")
                          ) : c === "email" ? (
                            <a href={`mailto:${r[c]}`} className="text-primary hover:underline">
                              {r[c]}
                            </a>
                          ) : (
                            <span className="whitespace-pre-wrap break-words">{r[c] || "-"}</span>
                          )}
                        </td>
                      ))}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <Button
                          onClick={() => openReply(r)}
                          disabled={!r.email}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition disabled:opacity-50"
                        >
                          <Reply className="w-3.5 h-3.5" />
                          {r.email && repliedTo.has(r.email.toLowerCase()) ? "Reply again" : "Reply"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>

      {replyTo && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div role="dialog" aria-modal="true" aria-labelledby="reply-heading" className="w-full max-w-xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="reply-heading" className="text-xl font-bold text-foreground">Reply</h2>
                <p className="text-xs text-muted-foreground">
                  From info@prca.world to <span className="text-primary">{replyTo.email}</span>
                </p>
              </div>
              <Button onClick={() => setReplyTo(null)} variant="ghost" size="icon" aria-label="Cancel editing" className="text-muted-foreground">
                <X className="w-5 h-5" />
              </Button>
            </div>
            <input
              aria-label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm text-foreground focus:outline-none focus:border-primary"
            />
            <textarea
              aria-label="Reply message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={10}
              className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm text-foreground focus:outline-none focus:border-primary"
            />
            <div className="flex justify-end gap-2">
              <Button asChild variant="secondary"><a
                href={`mailto:${replyTo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
                className="px-4 py-2 rounded-md bg-secondary text-foreground text-sm hover:bg-secondary/80 transition"
              >
                Open in mail app
              </a></Button>
              <Button
                onClick={sendReply}
                disabled={sending}
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send reply"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminEnquiries;
