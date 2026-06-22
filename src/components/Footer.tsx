import { Link } from "react-router-dom";
import RedStar from "./RedStar";
import { Twitter, Facebook, Instagram, Youtube, Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const columns = [
  {
    title: "Organization",
    links: [
      { to: "/about", label: "About PRC" },
      { to: "/program", label: "Programmatic Bases" },
      { to: "/history", label: "Our History" },
      { to: "/international", label: "International" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { to: "/join", label: "Join PRC" },
      { to: "/campaigns", label: "Campaigns" },
      { to: "/events", label: "Events" },
      { to: "/donate", label: "Donate" },
    ],
  },
  {
    title: "Read & Watch",
    links: [
      { to: "/blog", label: "News & Analysis" },
      { to: "/publications", label: "Publications" },
      { to: "/education", label: "Marxist School" },
      { to: "/media", label: "Media Center" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-[hsl(0_0%_3%)] border-t border-primary/60">
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <RedStar className="w-8 h-8 text-primary" />
            <div>
              <p className="font-display text-2xl text-foreground leading-none">PRC</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">Permanent Revolutionary Congress</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
            A revolutionary socialist organization building workers' power, socialist democracy and permanent revolution — in Kenya, Africa and across the world.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Twitter, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Youtube, href: "#" },
              { Icon: Mail, href: "mailto:info@prca.world" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="w-9 h-9 grid place-items-center border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            <a href="mailto:info@prca.world" className="hover:text-primary transition">info@prca.world</a>
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-[0.18em]">{col.title}</h4>
            <div className="space-y-2.5">
              {col.links.map((l) => (
                <Link key={l.to} to={l.to} className="block text-sm text-muted-foreground hover:text-primary transition">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-[0.18em]">Newsletter</h4>
          <p className="text-xs text-muted-foreground mb-3">Revolutionary analysis, weekly.</p>
          <NewsletterForm compact />
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Permanent Revolutionary Congress. All rights reserved.</p>
        <p className="uppercase tracking-[0.18em]">Workers of all countries, unite.</p>
      </div>
    </div>
  </footer>
);

export default Footer;