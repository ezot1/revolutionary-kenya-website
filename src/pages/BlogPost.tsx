import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SocialShare from "@/components/SocialShare";
import { supabase } from "@/lib/supabase";
import { ArrowLeft } from "lucide-react";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image_url: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    const setMeta = (attr: "property" | "name", key: string, value: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };
    const origin = window.location.origin;
    const img = post.image_url
      ? post.image_url.startsWith("http")
        ? post.image_url
        : `${origin}${post.image_url}`
      : `${origin}/images/prc-og.jpg`;
    document.title = `${post.title} | PRC`;
    setMeta("property", "og:title", post.title);
    setMeta("property", "og:image", img);
    setMeta("property", "og:url", window.location.href);
    setMeta("property", "og:type", "article");
    setMeta("name", "twitter:title", post.title);
    setMeta("name", "twitter:image", img);
  }, [post]);

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center text-muted-foreground">Loading...</div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>

          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full rounded-lg object-cover max-h-96 mb-8"
              loading="lazy"
            />
          )}

          <p className="text-sm text-muted-foreground mb-4">
            {new Date(post.date).toLocaleDateString()} · {post.author}
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-8">{post.title}</h1>

          <div className="prose prose-invert max-w-none">
            {post.content.split(/\n\n+/).map((block, i) => {
              const img = block.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
              if (img) {
                return (
                  <figure key={i} className="my-8">
                    <img
                      src={img[2]}
                      alt={img[1]}
                      className="w-full border border-border object-cover"
                      loading="lazy"
                    />
                    {img[1] && (
                      <figcaption className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                        {img[1]}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              const heading = block.trim().match(/^\*\*(.+)\*\*$/);
              if (heading) {
                return (
                  <h2 key={i} className="font-display text-2xl text-foreground mt-10 mb-4">
                    {heading[1]}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>
              );
            })}
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Share this article</p>
            <SocialShare inline title={post.title} image={post.image_url} />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
