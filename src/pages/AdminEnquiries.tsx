import { useEffect, useState } from "react";
import { useNavigate } from "@/lib/router-compat";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { LogOut, Download, RefreshCw, Reply, Search, Mail, Check } from "lucide-react";
import { toast } from "sonner";
import EmailReplyComposer from "@/components/EmailReplyComposer";

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
  const [search, setSearch] = useState("");
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
            <div><p className="mb-2 text-xs font-semibold uppercase text-primary">Correspondence</p><h1 className="text-3xl font-bold">Email inbox</h1></div>
            <div className="flex gap-2"><Button variant="outline" onClick={fetchRows} disabled={loading}><RefreshCw className={loading ? "animate-spin" : ""} />Refresh</Button><Button onClick={exportCsv} disabled={!rows.length}><Download />Export CSV</Button></div>
          </div>
          <div className="mb-7 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {TABS.map((t) => (
              <Button
                key={t.key}
                onClick={() => { setTab(t.key); setSearch(""); }}
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

          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">{current.label} <span className="ml-2 text-sm font-normal text-muted-foreground">{rows.length}</span></h2>
            <label className="relative w-full sm:w-72"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><input aria-label="Search enquiries" placeholder="Search name, email or message" value={search} onChange={(event) => setSearch(event.target.value)} className="w-full rounded-md border border-input bg-card py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></label>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            {loading ? <p className="px-6 py-16 text-center text-sm text-muted-foreground">Loading...</p> : rows.filter((row) => Object.values(row).some((value) => value?.toLowerCase().includes(search.toLowerCase()))).length === 0 ? <div className="px-6 py-16 text-center"><Mail className="mx-auto mb-3 h-8 w-8 text-muted-foreground" /><p className="text-sm text-muted-foreground">{search ? "No matching enquiries." : "No enquiries yet."}</p></div> : rows.filter((row) => Object.values(row).some((value) => value?.toLowerCase().includes(search.toLowerCase()))).map((r, index) => {
              const name = r.name || r.full_name || r.email || "Enquiry";
              const replied = !!r.email && repliedTo.has(r.email.toLowerCase());
              return <div key={r.id ?? index} className="flex min-w-0 flex-wrap items-center gap-4 border-b border-border px-5 py-5 last:border-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold">{name.slice(0, 1).toUpperCase()}</span>
                <div className="min-w-0 flex-1 basis-48"><div className="flex flex-wrap items-center gap-x-3 gap-y-1"><p className="break-all font-semibold">{name}</p><span className="text-xs text-muted-foreground">{r.created_at ? new Date(r.created_at).toLocaleDateString("en-GB") : ""}</span></div><p className="mt-1 break-all text-xs text-muted-foreground">{r.email}</p><p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{r.message || r.motivation || r.event_title || r.city || "Newsletter subscription"}</p></div>
                <div className="flex shrink-0 items-center gap-3">{replied && <span className="flex items-center gap-1 text-xs text-muted-foreground"><Check className="h-3 w-3" />Replied</span>}<Button onClick={() => openReply(r)} disabled={!r.email} variant="outline" size="sm"><Reply />{replied ? "Reply again" : "Reply"}</Button></div>
              </div>;
            })}
          </div>
        </div>
      </section>

      {replyTo?.email && (
        <EmailReplyComposer
          recipient={replyTo.email}
          name={replyTo.name || replyTo.full_name || "Comrade"}
          details={current.cols.filter((column) => column !== "email" && column !== "name" && column !== "full_name").flatMap((column) => {
            const value = replyTo[column];
            return value ? [{ label: labelize(column), value: column === "created_at" ? new Date(value).toLocaleString("en-GB") : value }] : [];
          })}
          subject={subject} message={message} sending={sending}
          onSubjectChange={setSubject} onMessageChange={setMessage}
          onClose={() => setReplyTo(null)} onSend={sendReply}
        />
      )}
    </AdminLayout>
  );
};

export default AdminEnquiries;
