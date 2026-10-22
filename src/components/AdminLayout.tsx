import type { ReactNode } from "react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, FileText, Inbox, LogOut, Newspaper, ShieldCheck } from "lucide-react";

const sections = [
  { key: "blog", to: "/admin/blog", label: "News & articles", icon: FileText },
  { key: "newsletter", to: "/admin/newsletter", label: "Revolutionary Review", icon: Newspaper },
  { key: "enquiries", to: "/admin/enquiries", label: "Enquiries", icon: Inbox },
];

export default function AdminLayout({ children, title, section, email, onSignOut, authenticated = false }: {
  children: ReactNode;
  title: string;
  section: string;
  email: string | null;
  onSignOut: () => void;
  authenticated?: boolean;
}) {
  return (
    <div className="admin-workspace min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[248px_minmax(0,1fr)]">
      <aside className="admin-sidebar flex flex-col border-b border-border lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
        <Link to="/" className="flex items-center gap-3 px-6 py-7">
          <img src="/images/prc-logo.jpg" alt="PRC" className="h-12 w-12 rounded-md object-cover" />
          <div><p className="font-bold text-lg">PRC</p><p className="text-xs text-muted-foreground">Editorial office</p></div>
        </Link>
        {authenticated && <nav aria-label="Admin navigation" className="flex flex-wrap gap-1 px-3 pb-4 lg:flex-col lg:pt-5">
          {sections.map(({ key, to, label, icon: Icon }) => <Button key={key} asChild variant={section === key ? "default" : "ghost"} className="h-auto min-h-11 justify-start whitespace-normal px-3 py-3 text-left">
            <Link to={to} aria-current={section === key ? "page" : undefined}><Icon className="shrink-0" />{label}</Link>
          </Button>)}
        </nav>}
        <div className="hidden lg:block lg:flex-1" />
        <div className="space-y-4 border-t border-border px-6 py-5">
          <Button asChild variant="ghost" className="w-full justify-between px-0 hover:bg-transparent"><Link to="/">View website<ArrowUpRight /></Link></Button>
          {authenticated && <><div className="flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" />Administrator</div><p className="break-all text-xs text-muted-foreground">{email}</p><Button variant="secondary" className="w-full justify-start" onClick={onSignOut}><LogOut />Sign out</Button></>}
        </div>
      </aside>
      <div className="min-w-0">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-6 py-5 lg:px-10">
          <p className="text-sm text-muted-foreground">Administration <span className="mx-2 text-border">/</span><span className="text-foreground">{title}</span></p>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground"><ShieldCheck className="h-4 w-4" />Private workspace</span>
        </header>
        <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">{children}</main>
      </div>
    </div>
  );
}