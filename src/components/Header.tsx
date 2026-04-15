import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RedStar from "./RedStar";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/history", label: "History" },
  { to: "/program", label: "Party Program" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <RedStar className="w-7 h-7 text-primary" />
          <span className="text-xl font-black tracking-tight text-foreground">PRC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/#donate"
            className="inline-flex items-center px-5 py-2 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition"
          >
            Donate
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-muted-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/#donate"
            onClick={() => setOpen(false)}
            className="block text-sm font-bold text-primary"
          >
            Donate
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
