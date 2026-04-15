import { Link } from "react-router-dom";
import RedStar from "./RedStar";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <RedStar className="w-6 h-6 text-primary" />
            <span className="font-black text-lg text-foreground">PRC</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            For a Socialist Kenya, a Socialist Africa, a Socialist World.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Pages</h4>
          <div className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/history", label: "Our History" },
              { to: "/program", label: "Party Program" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm text-muted-foreground hover:text-primary transition">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">International</h4>
          <p className="text-sm text-muted-foreground mb-2">
            The PRC is the Kenyan section of the International Socialist League.
          </p>
          <a
            href="https://isl-isl.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:underline"
          >
            Visit the ISL →
          </a>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2025 Permanent Revolutionary Congress. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
