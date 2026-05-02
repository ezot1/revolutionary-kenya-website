import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Trash2, Edit2, X, Upload, LogOut } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  author: string;
  image_url: string | null;
  published: boolean;
  date: string;
}

const AdminBlog = () => {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<Post | null>(null);
  const [form, setForm] = useState({
    title: "",
    author: "PRC Editorial",
    excerpt: "",
    content: "",
    image_url: "",
    published: false,
  });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("date", { ascending: false });
    if (data) setPosts(data);
  };

  useEffect(() => {
    if (isAdmin) fetchPosts();
  }, [isAdmin]);

  const uploadImage = async (file: File): Promise<string | null> => {
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, file);
    if (error) {
      toast.error("Image upload failed: " + error.message);
      return null;
    }
    const { data } = supabase.storage.from("blog-images").getPublicUrl(fileName);
    return data.publicUrl;
  };

  const resetForm = () => {
    setForm({ title: "", author: "PRC Editorial", excerpt: "", content: "", image_url: "", published: false });
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

    const payload = { ...form, image_url: imageUrl || null, slug };

    if (editing) {
      const { error } = await supabase.from("posts").update(payload).eq("id", editing.id);
      setSaving(false);
      if (error) {
        toast.error("Failed to update post: " + error.message);
      } else {
        toast.success("Post updated!");
        resetForm();
        fetchPosts();
      }
    } else {
      const { error } = await supabase.from("posts").insert([payload]);
      setSaving(false);
      if (error) {
        toast.error("Failed to create post: " + error.message);
      } else {
        toast.success("Post created!");
        resetForm();
        fetchPosts();
      }
    }
  };

  const handleEdit = (post: Post) => {
    setEditing(post);
    setForm({
      title: post.title,
      author: post.author,
      excerpt: post.excerpt || "",
      content: post.content,
      image_url: post.image_url || "",
      published: post.published,
    });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete post");
    } else {
      toast.success("Post deleted");
      fetchPosts();
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary";

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
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-black text-foreground">Blog Admin</h1>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-foreground text-xs hover:bg-secondary/80 transition"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign out
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-12 bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground">
                {editing ? "Edit Post" : "New Post"}
              </h2>
              {editing && (
                <button type="button" onClick={resetForm} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <input
              type="text"
              placeholder="Title"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Author"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Excerpt (short summary)"
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              className={inputClass}
            />
            <textarea
              placeholder="Content (use double line breaks for paragraphs)"
              required
              rows={12}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className={`${inputClass} resize-none`}
            />

            {/* Image upload */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground">Cover Image</label>
              <div className="flex items-center gap-3">
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
                  onChange={(e) => { setForm({ ...form, image_url: e.target.value }); setImageFile(null); }}
                  className={`${inputClass} flex-1`}
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

            <label className="flex items-center gap-2 text-sm text-foreground">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => setForm({ ...form, published: e.target.checked })}
                className="accent-primary"
              />
              Published
            </label>
            <button
              type="submit"
              disabled={saving}
              className="w-full py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition disabled:opacity-50"
            >
              {saving
                ? uploading
                  ? "Uploading image..."
                  : "Saving..."
                : editing
                ? "Update Post"
                : "Create Post"}
            </button>
          </form>

          <h2 className="text-xl font-bold text-foreground mb-4">Existing Posts ({posts.length})</h2>
          <div className="space-y-3">
            {posts.map((p) => (
              <div key={p.id} className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
                {p.image_url && (
                  <img src={p.image_url} alt="" className="w-16 h-16 object-cover rounded" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-sm truncate">{p.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.published ? "✅ Published" : "📝 Draft"} · {new Date(p.date).toLocaleDateString()} · {p.author}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="text-accent hover:text-accent/80 transition"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-destructive hover:text-destructive/80 transition"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminBlog;
