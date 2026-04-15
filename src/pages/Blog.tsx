import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabase";
import { Search } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  image_url: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    supabase
      .from("posts")
      .select("id, title, slug, excerpt, author, date, image_url")
      .eq("published", true)
      .order("date", { ascending: false })
      .then(({ data }) => {
        if (data) setPosts(data);
      });
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-foreground text-center mb-4">Blog</h1>
          <p className="text-muted-foreground text-center mb-10">News, analysis and reports from the PRC.</p>

          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground">No posts found.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition group"
                >
                  {p.image_url && (
                    <img src={p.image_url} alt={p.title} className="w-full h-48 object-cover" loading="lazy" />
                  )}
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground mb-2">
                      {new Date(p.date).toLocaleDateString()} · {p.author}
                    </p>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
