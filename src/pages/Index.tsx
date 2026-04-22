import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import RedStar from "@/components/RedStar";
import { supabase } from "@/lib/supabase";
import { Users, Flame, Globe } from "lucide-react";
import { useReveal, useRevealGroup } from "@/hooks/use-reveal";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  image_url: string;
}

const HeroSection = () => (
  <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
    <img
      src="/images/prc-congress.jpg"
      alt="PRC Congress"
      className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
      <img
        src="/images/prc-logo.jpg"
        alt="PRC Logo"
        className="w-16 h-16 rounded-full object-cover mx-auto mb-6 animate-float ring-2 ring-primary/40"
      />
      <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-foreground opacity-0 animate-fade-in-up [animation-delay:150ms]">
        Build the Revolutionary Party.{" "}
        <span className="text-primary">Fight for a Socialist Kenya.</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:350ms]">
        The Permanent Revolutionary Congress organizes workers, youth, and the oppressed for socialist transformation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up [animation-delay:550ms]">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 animate-pulse-glow"
        >
          Join Us
        </Link>
        <Link
          to="/program"
          className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-foreground text-foreground font-bold text-lg hover:bg-foreground/10 transition-all duration-300 hover:scale-105"
        >
          Read Our Program
        </Link>
      </div>
    </div>
  </section>
);

const AboutSection = () => {
  const ref = useRevealGroup<HTMLDivElement>();
  return (
    <section className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 data-reveal className="reveal text-3xl md:text-4xl font-black text-center mb-4 text-foreground">
          Who We Are
        </h2>
        <p data-reveal className="reveal text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-lg">
          The PRC is a revolutionary socialist party in Kenya, fighting for a workers' government and the socialist transformation of society. We stand with the oppressed against capitalism, imperialism and all forms of exploitation.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Workers Power", desc: "Building a mass movement rooted in the workplaces and trade unions of Kenya." },
            { icon: Flame, title: "Youth Struggle", desc: "Organizing students and young workers as the revolutionary vanguard of change." },
            { icon: Globe, title: "International Solidarity", desc: "Part of the International Socialist League, fighting capitalism on every continent." },
          ].map((c, i) => (
            <div
              key={c.title}
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
              className="reveal bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover-lift group"
            >
              <c.icon className="w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <h3 className="font-bold text-lg mb-2 text-foreground">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnersSection = () => {
  const ref = useRevealGroup<HTMLDivElement>();
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 data-reveal className="reveal text-3xl md:text-4xl font-black text-center mb-12 text-foreground">
          Our International Partners
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div data-reveal className="reveal bg-card border-l-4 border-l-primary border border-border rounded-lg p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-primary animate-float" />
            <h3 className="font-black text-xl text-foreground">International Socialist League</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {["🌍 Africa", "🌍 Europe", "🌎 Latin America", "🌏 Asia", "🌍 Middle East", "🌎 North America"].map((r) => (
              <span key={r} className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground border border-border transition-all duration-300 hover:border-primary hover:text-foreground hover:-translate-y-0.5">
                {r}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            The International Socialist League is a worldwide revolutionary socialist organization uniting parties and groups across six continents in the common struggle against capitalism, imperialism and oppression. The PRC is the Kenyan section of the ISL.
          </p>
          <a
            href="https://lis-isl.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 rounded-md bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-all duration-300 hover:scale-105"
          >
            Visit Website
          </a>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Affiliated since the PRC's founding congress.
          </p>
          </div>
          <div data-reveal className="reveal border-2 border-dashed border-border rounded-lg p-6 flex items-center justify-center transition-colors duration-300 hover:border-primary/50">
            <p className="text-muted-foreground text-sm text-center">More partners coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const DonateSection = () => {
  return (
    <section id="donate" className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-primary-foreground reveal" ref={useReveal<HTMLHeadingElement>()}>
          Support the Struggle
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-lg">
          The PRC runs on the contributions of workers and supporters. Every shilling funds organizing, education, and political work.
        </p>
        <a
          href="https://www.paypal.com/paypalme/prcdonate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-foreground text-background font-bold text-lg hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Donate via PayPal
        </a>
        <p className="text-primary-foreground/60 text-sm mt-4">PayPal: prcdonate@gmail.com</p>
      </div>
    </section>
  );
};

const LatestPosts = ({ posts }: { posts: Post[] }) => {
  const ref = useRevealGroup<HTMLDivElement>();
  return (
    <section className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 data-reveal className="reveal text-3xl md:text-4xl font-black text-center mb-12 text-foreground">
          Latest from the Blog
        </h2>
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                data-reveal
                style={{ transitionDelay: `${i * 120}ms` }}
                className="reveal bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover-lift group"
              >
                {p.image_url && (
                  <div className="overflow-hidden">
                    <img
                      src={p.image_url}
                      alt={p.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
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
  );
};

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    supabase
      .from("posts")
      .select("id, title, slug, excerpt, author, date, image_url")
      .eq("published", true)
      .order("date", { ascending: false })
      .limit(3)
      .then(({ data }) => {
        if (data) setPosts(data);
      });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <DonateSection />
      <LatestPosts posts={posts} />
    </Layout>
  );
};

export default Index;
