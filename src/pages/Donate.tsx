import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Heart } from "lucide-react";

const tiers = [
  { amount: "KSh 500", label: "Solidarity", desc: "Funds printing of pamphlets and posters." },
  { amount: "KSh 2,000", label: "Cadre", desc: "Supports political education and study materials." },
  { amount: "KSh 5,000", label: "Organizer", desc: "Sustains branch organizing across the country." },
  { amount: "KSh 10,000+", label: "Internationalist", desc: "Funds Africa-wide and international work." },
];

export default function Donate() {
  return (
    <Layout>
      <SEO title={"Donate"} description={"Support the work of the Permanent Revolutionary Congress."} path={"/donate"} />
      
      <PageHero kicker="Donate" title="The PRC runs on worker contributions." lede="We take no money from corporations, governments or NGOs. Every shilling comes from workers and supporters of the struggle." />
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {tiers.map((t) => (
            <div key={t.label} className="bg-background p-8 group hover:bg-primary transition cursor-pointer">
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary group-hover:text-primary-foreground font-bold mb-3 transition">{t.label}</p>
              <p className="font-display text-3xl text-foreground group-hover:text-primary-foreground mb-3 transition">{t.amount}</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/90 transition">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-display text-4xl text-foreground mb-6">Give now.</h2>
          <a href="https://www.paypal.com/paypalme/prcdonate" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.18em] hover:bg-primary/90 transition">
            Donate via PayPal
          </a>
          <p className="text-muted-foreground text-sm mt-4">PayPal: prcdonate@gmail.com</p>
          <p className="text-xs text-muted-foreground mt-8 font-serif-editorial italic">M-Pesa, bank transfer and recurring options coming soon.</p>
        </div>
      </section>
    </Layout>
  );
}