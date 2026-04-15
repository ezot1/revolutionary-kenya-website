import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  date: string;
}

const AdminBlog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState({
    title: "",
    author: "PRC Editorial",
    excerpt: "",
    content: "",
    image_url: "",
    published: false,
  });
  const [saving, setSaving] = useState(false);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("posts")
      .select("id, title, slug, published, date")
      .order("date", { ascending: false });
    if (data) setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const slug = form.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const { error } = await supabase.from("posts").insert([{ ...form, slug }]);
    setSaving(false);
    if (error) {
      toast.error("Failed to create post: " + error.message);
    } else {
      toast.success("Post created!");
      setForm({ title: "", author: "PRC Editorial", excerpt: "", content: "", image_url: "", published: false });
      fetchPosts();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete post");
    } else {
      toast.success("Post deleted");
      fetchPosts();
    }
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-black text-foreground mb-8">Blog Admin</h1>

          <form onSubmit={handleSubmit} className="space-y-4 mb-12">
            <input
              type="text"
              placeholder="Title"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Author"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Excerpt"
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Content"
              required
              rows={10}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
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
              {saving ? "Saving..." : "Create Post"}
            </button>
          </form>

          <h2 className="text-xl font-bold text-foreground mb-4">Existing Posts</h2>
          <div className="space-y-3">
            {posts.map((p) => (
              <div key={p.id} className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
                <div>
                  <p className="font-bold text-foreground text-sm">{p.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.published ? "Published" : "Draft"} · {new Date(p.date).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-destructive hover:text-destructive/80 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminBlog;
