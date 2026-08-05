import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "A democratic, disciplined revolutionary organization.",
  "Marxist political education and cadre training.",
  "Active campaigns rooted in workplaces and communities.",
  "International collaboration through the ISL.",
];

export default function Join() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", city: "", occupation: "", motivation: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("memberships").insert([form]);
    setLoading(false);
    if (error) toast.error("Submission failed. Try again.");
    else { setDone(true); toast.success("Application received. A comrade will be in touch."); }
  };

  return (
    <Layout>
      <PageHero kicker="Join PRC" title="Become a member." lede="Membership in the PRC means joining a disciplined revolutionary organization. We organize together. We study together. We fight together." />
      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <p className="kicker">Why join</p>
            <h2 className="font-display text-3xl text-foreground">What you'll find inside.</h2>
            <ul className="space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex gap-3 text-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="font-serif-editorial italic text-muted-foreground border-l-2 border-primary pl-4 mt-6">
              "The philosophers have only interpreted the world, in various ways; the point is to change it." - Marx
            </p>
          </div>
          <div className="lg:col-span-7">
            {done ? (
              <div className="border border-primary bg-primary/5 p-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-3xl text-foreground mb-2">Application received.</h3>
                <p className="text-muted-foreground">A comrade from your nearest branch will be in touch. Solidarity.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 bg-card border border-border p-6 md:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" required value={form.full_name} onChange={(v) => setForm({ ...form, full_name: v })} />
                  <Field label="Email" required type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                  <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                  <Field label="City / Town" value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
                </div>
                <Field label="Occupation" value={form.occupation} onChange={(v) => setForm({ ...form, occupation: v })} />
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Why do you want to join?</label>
                  <textarea rows={5} value={form.motivation} onChange={(e) => setForm({ ...form, motivation: e.target.value })} className="mt-1 w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-primary resize-none" />
                </div>
                <button disabled={loading} className="w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.18em] hover:bg-primary/90 disabled:opacity-50 transition">
                  {loading ? "Submitting…" : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, value, onChange, type = "text", required = false }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{label}{required && " *"}</label>
      <input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-primary" />
    </div>
  );
}