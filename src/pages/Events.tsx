import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { MapPin, Calendar } from "lucide-react";

const upcoming = [
  { date: "Jul 12, 2026", title: "Marxist School: Imperialism Today", type: "Education", location: "Nairobi + Online" },
  { date: "Jul 19, 2026", title: "Public Meeting: Organizing the Gig Economy", type: "Public Meeting", location: "Mombasa" },
  { date: "Aug 02, 2026", title: "PRC Branch Launch - Kisumu", type: "Campaign Launch", location: "Kisumu" },
  { date: "Aug 16, 2026", title: "Women's Liberation Conference", type: "Conference", location: "Nairobi" },
];

const past = [
  { date: "Jun 01, 2026", title: "PRC Founding Congress", location: "Nairobi" },
  { date: "May 10, 2026", title: "Anti-Imperialism Panel with ISL Comrades", location: "Online" },
];

export default function Events() {
  const [active, setActive] = useState<string | null>(null);
  const [form, setForm] = useState({ full_name: "", email: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!active) return;
    setLoading(true);
    const { error } = await supabase.from("event_rsvps").insert([{ event_title: active, ...form }]);
    setLoading(false);
    if (error) toast.error("RSVP failed.");
    else { toast.success("RSVP confirmed. See you there."); setActive(null); setForm({ full_name: "", email: "" }); }
  };

  return (
    <Layout>
      <PageHero kicker="Events" title="Calendar of struggle." lede="Conferences, public meetings, political education and campaign launches." />

      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="kicker mb-3">Upcoming</p>
          <h2 className="font-display text-4xl text-foreground mb-10">What's next.</h2>
          <div className="space-y-px bg-border">
            {upcoming.map((e) => (
              <div key={e.title} className="bg-background p-6 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 sm:col-span-3 flex items-center gap-3 text-primary">
                  <Calendar className="w-5 h-5" />
                  <span className="font-display text-lg">{e.date}</span>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">{e.type}</p>
                  <h3 className="font-display text-xl text-foreground">{e.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.location}</p>
                </div>
                <div className="col-span-12 sm:col-span-3 sm:text-right">
                  <button onClick={() => setActive(e.title)} className="px-5 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition">RSVP</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="kicker mb-3">Past Events</p>
          <div className="space-y-px bg-border">
            {past.map((e) => (
              <div key={e.title} className="bg-background p-6 grid grid-cols-12 gap-4 items-center">
                <p className="col-span-3 text-muted-foreground text-sm">{e.date}</p>
                <p className="col-span-6 font-display text-foreground">{e.title}</p>
                <p className="col-span-3 text-right text-xs text-muted-foreground">{e.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur grid place-items-center p-4 animate-fade-in" onClick={() => setActive(null)}>
          <form onClick={(e) => e.stopPropagation()} onSubmit={submit} className="bg-background border border-border max-w-md w-full p-8 space-y-4">
            <p className="kicker mb-2">RSVP</p>
            <h3 className="font-display text-2xl text-foreground">{active}</h3>
            <input required placeholder="Full name" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className="w-full px-4 py-3 bg-card border border-border focus:outline-none focus:border-primary" />
            <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-card border border-border focus:outline-none focus:border-primary" />
            <div className="flex gap-2">
              <button type="button" onClick={() => setActive(null)} className="flex-1 py-3 border border-border text-foreground text-xs font-bold uppercase tracking-wider">Cancel</button>
              <button disabled={loading} className="flex-1 py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider disabled:opacity-50">{loading ? "..." : "Confirm RSVP"}</button>
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
}