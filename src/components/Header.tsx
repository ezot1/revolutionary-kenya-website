import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const primaryNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/program", label: "Program" },
  { to: "/campaigns", label: "Campaigns" },
  { to: "/education", label: "Education" },
  { to: "/publications", label: "Publications" },
  { to: "/blog", label: "News" },
  { to: "/international", label: "International" },
  { to: "/media", label: "Media" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="bg-primary text-primary-foreground text-[11px] font-bold tracking-[0.18em] uppercase">
        <div className="container mx-auto px-4 h-7 flex items-center justify-between">
          <span className="hidden sm:inline">Workers of all countries, unite.</span>
          <span className="sm:hidden">Workers, unite.</span>
          <Link to="/join" className="hover:underline">Become a member →</Link>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/prc-logo.jpg"
            alt="PRC"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-primary/50 transition-transform duration-500 group-hover:rotate-[360deg]"
          />
          <div className="leading-tight">
            <span className="block font-display text-lg text-foreground">PRC</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Permanent Revolutionary Congress</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {primaryNav.slice(0, 8).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-[13px] font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="text-[13px] font-bold uppercase tracking-wider text-foreground/80 hover:text-primary flex items-center gap-1">
              More <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
              <div className="bg-card border border-border rounded-md shadow-xl min-w-[180px] py-2">
                {primaryNav.slice(8).map((l) => (
                  <Link key={l.to} to={l.to} className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/donate"
            className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider border border-border text-foreground hover:border-primary hover:text-primary transition"
          >
            Donate
          </Link>
          <Link
            to="/join"
            className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            Join PRC
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-4 space-y-2 animate-fade-in-down max-h-[80vh] overflow-y-auto">
          {primaryNav.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-bold uppercase tracking-wider border-b border-border/50 ${
                location.pathname === l.to ? "text-primary" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-3">
            <Link to="/donate" onClick={() => setOpen(false)} className="flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider border border-border">Donate</Link>
            <Link to="/join" onClick={() => setOpen(false)} className="flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground">Join PRC</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;