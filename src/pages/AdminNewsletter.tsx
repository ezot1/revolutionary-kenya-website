import { useState, useEffect } from "react";
import { Link, useNavigate } from "@/lib/router-compat";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Trash2, Edit2, X, Upload, LogOut, Inbox, FileText } from "lucide-react";

interface Issue {
  id: string;
  title: string;
  slug: string;
  issue_number: number | null;
  summary: string | null;
  content: string;
  image_url: string | null;
  published: boolean;
  date: string;
}

const AdminNewsletter = () => {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [editing, setEditing] = useState<Issue | null>(null);
  const [form, setForm] = useState({
    title: "",
    issue_number: "",
    summary: "",
    content: "",
    image_url: "",
    date: new Date().toISOString().slice(0, 10),
    published: false,
  });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    const check = async (
      session: Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"]
    ) => {
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  const fetchIssues = async () => {
    const { data } = await supabase
      .from("newsletter_issues")
      .select("*")
      .order("date", { ascending: false });
    if (data) setIssues(data as Issue[]);
  };

  useEffect(() => {
    if (isAdmin) fetchIssues();
  }, [isAdmin]);

  const uploadImage = async (file: File): Promise<string | null> => {
    const ext = file.name.split(".").pop();
    const fileName = `newsletter-${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from("blog-images").upload(fileName, file);
    if (error) {
      toast.error("Image upload failed: " + error.message);
      return null;
    }
    const { data } = supabase.storage.from("blog-images").getPublicUrl(fileName);
    return data.publicUrl;
  };

  const resetForm = () => {
    setForm({
      title: "",
      issue_number: "",
      summary: "",
      content: "",
      image_url: "",
      date: new Date().toISOString().slice(0, 10),
      published: false,
    });
    setEditing(null);
    setImageFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    let imageUrl = form.image_url;
    if (imageFile) {
      setUploading(true);
      const url = await uploadImage(imageFile);
      setUploading(false);
      if (url) imageUrl = url;
    }

    const slug = form.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const payload = {
      title: form.title,
      slug,
      issue_number: form.issue_number ? Number(form.issue_number) : null,
      summary: form.summary || null,
      content: form.content,
      image_url: imageUrl || null,
      date: form.date,
      published: form.published,
    };

    const { error } = editing
      ? await supabase.from("newsletter_issues").update(payload).eq("id", editing.id)
      : await supabase.from("newsletter_issues").insert([payload]);

    setSaving(false);
    if (error) {
      toast.error("Failed to save issue: " + error.message);
      return;
    }
    toast.success(editing ? "Issue updated!" : "Issue created!");
    resetForm();
    fetchIssues();
  };

  const handleEdit = (issue: Issue) => {
    setEditing(issue);
    setForm({
      title: issue.title,
      issue_number: issue.issue_number ? String(issue.issue_number) : "",
      summary: issue.summary || "",
      content: issue.content,
      image_url: issue.image_url || "",
      date: issue.date,
      published: issue.published,
    });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this newsletter issue?")) return;
    const { error } = await supabase.from("newsletter_issues").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete issue");
    } else {
      toast.success("Issue deleted");
      fetchIssues();
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary";

  if (!authChecked) {
    return (
      <AdminLayout title="The Revolutionary Review" section="newsletter" email={userEmail} onSignOut={handleLogout} authenticated={authChecked && isAdmin}>
        <section className="py-16 text-center text-muted-foreground">Loading...</section>
      </AdminLayout>
    );
  }

  if (!isAdmin) {
    return (
      <AdminLayout title="The Revolutionary Review" section="newsletter" email={userEmail} onSignOut={handleLogout} authenticated={authChecked && isAdmin}>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-md text-center space-y-4">
            <h1 className="text-2xl font-black text-foreground">Access denied</h1>
            <p className="text-muted-foreground text-sm">
              You're signed in as <span className="font-semibold">{userEmail}</span>, but this account does not have
              admin privileges.
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
    <AdminLayout title="The Revolutionary Review" section="newsletter" email={userEmail} onSignOut={handleLogout} authenticated={authChecked && isAdmin}>
      <section>
        <div>
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase text-primary">Monthly publication</p>
            <h1 className="text-3xl font-bold text-foreground">The Revolutionary Review</h1>
          </div>
          <div className="mb-8 grid grid-cols-3 divide-x divide-border border-y border-border bg-card py-5">
            {[{ label: "Total issues", value: issues.length }, { label: "Published", value: issues.filter((item) => item.published).length }, { label: "Drafts", value: issues.filter((item) => !item.published).length }].map((stat) => <div key={stat.label} className="px-4 sm:px-6"><p className="text-2xl font-semibold">{stat.value}</p><p className="mt-1 text-xs text-muted-foreground">{stat.label}</p></div>)}
          </div>
          <div className="admin-editor">
          <form onSubmit={handleSubmit} className="space-y-5 bg-card border border-border rounded-lg p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground">{editing ? "Edit Issue" : "New Issue"}</h2>
              {editing && (
                <Button type="button" onClick={resetForm} variant="ghost" size="icon" aria-label="Cancel editing" className="text-muted-foreground">
                  <X className="w-5 h-5" />
                </Button>
              )}
            </div>

            <label className="block space-y-2"><span className="text-sm font-semibold">Issue title</span><input
              type="text"
              placeholder="Issue title"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={inputClass}
            /></label>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block space-y-2"><span className="text-sm font-semibold">Issue number</span><input
                type="number"
                placeholder="Issue number"
                value={form.issue_number}
                onChange={(e) => setForm({ ...form, issue_number: e.target.value })}
                className={inputClass}
              /></label>
              <label className="block space-y-2"><span className="text-sm font-semibold">Publication date</span><input
                aria-label="Publication date"
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputClass}
              /></label>
            </div>
            <label className="block space-y-2"><span className="text-sm font-semibold">Summary</span><input
              type="text"
              placeholder="Summary (short standfirst)"
              value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
              className={inputClass}
            /></label>
            <label className="block space-y-2"><span className="text-sm font-semibold">Issue content</span><textarea
              placeholder="Issue content (use double line breaks between paragraphs)"
              required
              rows={14}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className={inputClass}
            /></label>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground">Cover Image</label>
              <div className="flex flex-wrap items-center gap-3">
                <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-secondary text-foreground text-sm hover:bg-secondary/80 transition">
                  <Upload className="w-4 h-4" />
                  {imageFile ? imageFile.name : "Upload Image"}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setImageFile(file);
                    }}
                  />
                </label>
                <span className="text-xs text-muted-foreground">or</span>
                <input
                  type="text"
                  placeholder="Paste image URL"
                  value={form.image_url}
                  onChange={(e) => {
                    setForm({ ...form, image_url: e.target.value });
                    setImageFile(null);
                  }}
                  aria-label="Cover image URL" className={`${inputClass} min-w-0 flex-1 basis-40`}
                />
              </div>
              {(form.image_url || imageFile) && (
                <img
                  src={imageFile ? URL.createObjectURL(imageFile) : form.image_url}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-md border border-border mt-2"
                />
              )}
            </div>

            <label className="flex items-center justify-between gap-3 border-y border-border py-4 text-sm font-medium text-foreground">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => setForm({ ...form, published: e.target.checked })}
                className="accent-primary"
              />
              Published
            </label>

            <Button
              type="submit"
              disabled={saving}
              className="w-full py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition disabled:opacity-50"
            >
              {saving ? (uploading ? "Uploading image..." : "Saving...") : editing ? "Update Issue" : "Create Issue"}
            </Button>
          </form>

          <aside className="min-w-0">
          <h2 className="text-xl font-bold text-foreground mb-4">Issues ({issues.length})</h2>
          <div className="space-y-3">
            {issues.length === 0 && <div className="border-y border-border py-10 text-center text-sm text-muted-foreground">No issues yet.</div>}
            {issues.map((issue) => (
              <div key={issue.id} className="flex flex-wrap items-center gap-3 bg-card border border-border rounded-lg p-4">
                {issue.image_url && (
                  <img src={issue.image_url} alt="" className="w-14 h-14 shrink-0 object-cover rounded" />
                )}
                <div className="w-full min-w-0 flex-1 basis-40">
                  <p className="font-semibold text-foreground text-sm break-words">
                    {issue.issue_number ? `#${issue.issue_number} · ` : ""}
                    {issue.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {issue.published ? "Published" : "Draft"} · {new Date(issue.date).toLocaleDateString("en-GB")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={() => handleEdit(issue)} variant="ghost" size="icon" className="text-primary" title="Edit" aria-label="Edit">
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(issue.id)}
                    variant="ghost" size="icon" className="text-destructive"
                    title="Delete" aria-label="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          </aside>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminNewsletter;
