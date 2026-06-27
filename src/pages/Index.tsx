import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import NewsletterForm from "@/components/NewsletterForm";
import { supabase } from "@/lib/supabase";
import { useReveal, useRevealGroup } from "@/hooks/use-reveal";
import {
  Hammer, GraduationCap, Users, Leaf, Globe2, Building2,
  Wifi, Heart, ArrowRight, Calendar, MapPin
} from "lucide-react";
import heroRally from "@/assets/hero-rally.jpg";

interface Post {
  id: string; title: string; slug: string; excerpt: string;
  author: string; date: string; image_url: string;
}

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-black">
    <img
      src={heroRally}
      alt="Workers and youth at a militant socialist rally with red flags raised"
      className="absolute inset-0 w-full h-full object-cover opacity-50 animate-ken-burns"
      width={1920}
      height={1080}
      fetchPriority="high"
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
    <div className="absolute inset-0 grain" />
    <div className="relative z-10 container mx-auto px-4 py-20 lg:py-28">
      <p className="kicker mb-6 opacity-0 animate-fade-in-up">PRC · International Socialist League</p>
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground max-w-5xl mb-6 opacity-0 animate-fade-in-up [animation-delay:150ms]">
        Workers' Power.<br />
        Socialist Democracy.<br />
        <span className="text-primary">Permanent Revolution.</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-in-up [animation-delay:350ms]">
        The Permanent Revolutionary Congress is building a revolutionary socialist alternative to capitalism, imperialism and oppression.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-in-up [animation-delay:550ms]">
        <Link to="/join" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/90 transition group">
          Join the Movement <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </Link>
        <Link to="/program" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition">
          Read Our Program
        </Link>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 z-10 bg-primary text-primary-foreground overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-2 text-xs font-bold tracking-[0.2em] uppercase">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="px-8">★ Workers' Power ★ Socialist Democracy ★ Anti-Imperialism ★ Women's Liberation ★ Climate Justice ★ Permanent Revolution</span>
        ))}
      </div>
    </div>
  </section>
);

const About = () => {
  const ref = useRevealGroup<HTMLDivElement>();
  const pillars = [
    "Workers' Power", "Socialist Democracy", "Internationalism",
    "Permanent Revolution", "Anti-Imperialism", "Women's Liberation", "Climate Justice",
  ];
  return (
    <section className="py-24 border-b border-border" ref={ref}>
      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5" data-reveal>
          <p className="kicker mb-4">Who We Are</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            A revolutionary socialist organization for our time.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 reveal" data-reveal>
          <p className="font-serif-editorial text-xl text-foreground/90 leading-relaxed">
            PRC is rooted in the <strong className="text-primary">revolutionary socialist tradition</strong>. We organize workers, youth, women and the oppressed for the socialist transformation of society.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Capitalism cannot deliver dignified jobs, housing, healthcare or a livable planet. Imperialism plunders the Global South. Patriarchy and racism are wielded to divide us. We fight for a different world — one organized by and for the working class.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {pillars.map((p) => (
              <span key={p} className="text-xs font-bold uppercase tracking-wider border border-border px-3 py-2 text-foreground hover:border-primary hover:text-primary transition">{p}</span>
            ))}
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm story-link pt-2">
            More about PRC <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const campaigns = [
  { icon: Hammer, title: "Workers' Rights", desc: "Fighting for living wages, dignified jobs and the right to organize." },
  { icon: Wifi, title: "Gig Economy Organizing", desc: "Building power among riders, drivers and platform workers." },
  { icon: GraduationCap, title: "Youth & Students", desc: "Mobilizing the next generation against austerity and repression." },
  { icon: Heart, title: "Women's Liberation", desc: "A socialist feminist struggle against patriarchy and capital." },
  { icon: Leaf, title: "Climate Justice", desc: "System change, not climate change — for a just transition." },
  { icon: Globe2, title: "Anti-Imperialism", desc: "Solidarity with Palestine, Sudan, Congo and the oppressed nations." },
  { icon: Users, title: "Trade Union Building", desc: "Reclaiming the unions as fighting organizations of the class." },
  { icon: Building2, title: "Digital Workers", desc: "Organizing tech, BPO and digital labor across the continent." },
];

const Campaigns = () => {
  const ref = useRevealGroup<HTMLDivElement>();
  return (
    <section className="py-24 bg-secondary/30 border-b border-border" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div data-reveal>
            <p className="kicker mb-3">Campaigns</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Where the struggle is.</h2>
          </div>
          <Link to="/campaigns" className="text-sm font-bold uppercase tracking-wider text-primary story-link" data-reveal>All campaigns →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {campaigns.map((c, i) => (
            <Link
              key={c.title}
              to="/campaigns"
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className="reveal group bg-background p-8 hover:bg-primary transition-all duration-300 relative overflow-hidden"
            >
              <c.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground mb-4 transition" />
              <h3 className="font-display text-xl text-foreground group-hover:text-primary-foreground mb-2 transition">{c.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition leading-relaxed">{c.desc}</p>
              <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground mt-6 group-hover:translate-x-2 transition" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestPosts = ({ posts }: { posts: Post[] }) => {
  const ref = useRevealGroup<HTMLDivElement>();
  const [featured, ...rest] = posts;
  return (
    <section className="py-24 border-b border-border" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12" data-reveal>
          <div>
            <p className="kicker mb-3">News & Analysis</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Latest from the front lines.</h2>
          </div>
          <Link to="/blog" className="hidden sm:inline-block text-sm font-bold uppercase tracking-wider text-primary story-link">All articles →</Link>
        </div>
        {posts.length === 0 ? (
          <p className="text-muted-foreground font-serif-editorial italic">No dispatches yet. The press machine is warming up.</p>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8">
            {featured && (
              <Link to={`/blog/${featured.slug}`} className="lg:col-span-7 group block" data-reveal>
                {featured.image_url && (
                  <div className="aspect-[16/10] overflow-hidden mb-5 bg-secondary">
                    <img src={featured.image_url} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                )}
                <p className="kicker mb-3">Featured</p>
                <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition leading-tight mb-3">{featured.title}</h3>
                <p className="text-muted-foreground font-serif-editorial text-lg leading-relaxed mb-3">{featured.excerpt}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{featured.author} · {new Date(featured.date).toLocaleDateString()}</p>
              </Link>
            )}
            <div className="lg:col-span-5 space-y-8" data-reveal>
              {rest.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="block group border-b border-border pb-6 last:border-0">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-primary mb-2 font-bold">{p.author}</p>
                  <h4 className="font-display text-xl text-foreground group-hover:text-primary transition leading-tight mb-2">{p.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 grain" />
    <div className="container mx-auto px-4 text-center max-w-3xl relative">
      <p className="text-[10px] uppercase tracking-[0.3em] mb-4 opacity-80">The PRC Weekly</p>
      <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight">Get revolutionary analysis delivered weekly.</h2>
      <p className="text-primary-foreground/80 text-lg mb-8">Theory, strategy and dispatches from struggles across Kenya, Africa and the world.</p>
      <NewsletterForm />
    </div>
  </section>
);

const events = [
  { date: "Jul 12", title: "Marxist School: Imperialism Today", type: "Education", location: "Nairobi + online" },
  { date: "Jul 19", title: "Public Meeting: Organizing the Gig Economy", type: "Public Meeting", location: "Mombasa" },
  { date: "Aug 02", title: "PRC Branch Launch — Kisumu", type: "Campaign Launch", location: "Kisumu" },
];

const Events = () => {
  const ref = useRevealGroup<HTMLDivElement>();
  return (
    <section className="py-24 border-b border-border" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12" data-reveal>
          <div>
            <p className="kicker mb-3">What's On</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Upcoming events.</h2>
          </div>
          <Link to="/events" className="text-sm font-bold uppercase tracking-wider text-primary story-link">All events →</Link>
        </div>
        <div className="space-y-px bg-border">
          {events.map((e, i) => (
            <Link
              key={i}
              to="/events"
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal grid grid-cols-12 gap-4 items-center bg-background p-6 hover:bg-secondary transition group"
            >
              <div className="col-span-3 sm:col-span-2 font-display text-2xl text-primary">{e.date}</div>
              <div className="col-span-9 sm:col-span-7">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">{e.type}</p>
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition">{e.title}</h3>
              </div>
              <div className="col-span-12 sm:col-span-3 flex items-center gap-2 text-sm text-muted-foreground sm:justify-end">
                <MapPin className="w-4 h-4" /> {e.location}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const MembershipCTA = () => (
  <section className="relative py-32 bg-[hsl(0_0%_3%)] overflow-hidden">
    <div className="absolute inset-0 grain" />
    <div className="absolute inset-y-0 left-0 w-2 bg-primary" />
    <div className="container mx-auto px-4 relative">
      <p className="kicker mb-6">Membership</p>
      <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] max-w-5xl mb-8">
        History is made by those who <span className="text-primary">organize.</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mb-10 font-serif-editorial italic">
        Join a disciplined, democratic revolutionary organization fighting for a socialist future.
      </p>
      <Link to="/join" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold uppercase tracking-[0.18em] hover:bg-primary/90 transition group">
        Become a Member <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
      </Link>
    </div>
  </section>
);

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    supabase
      .from("posts")
      .select("id, title, slug, excerpt, author, date, image_url")
      .eq("published", true)
      .order("date", { ascending: false })
      .limit(4)
      .then(({ data }) => data && setPosts(data));
  }, []);

  return (
    <Layout>
      <SEO title={"Workers' Power. Socialist Democracy. Permanent Revolution."} description={"PRC organizes workers, youth and the oppressed for socialist transformation in Kenya and across Africa."} path={"/"} />
      
      <Hero />
      <About />
      <Campaigns />
      <LatestPosts posts={posts} />
      <Newsletter />
      <Events />
      <MembershipCTA />
    </Layout>
  );
};

export default Index;