import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Play, Mic, Image as ImageIcon, FileText, Radio } from "lucide-react";
import { toast } from "sonner";

const sections = [
  { icon: Play, title: "Video Gallery", desc: "Speeches, livestreams and documentary shorts from PRC organizing." },
  { icon: Mic, title: "Podcast", desc: "The PRC podcast — weekly conversations on theory, politics and struggle." },
  { icon: ImageIcon, title: "Photo Galleries", desc: "Documentary photography from demonstrations, conferences and branches." },
  { icon: FileText, title: "Press Releases", desc: "Official statements to the press and the public." },
  { icon: Radio, title: "Livestream Archive", desc: "Recordings of public meetings, panels and political education." },
];

export default function Media() {
  return (
    <Layout>
      <PageHero
        kicker="Media Center"
        title="The PRC in pictures, video and audio."
        lede="The visual and audio record of our organizing — and a resource for journalists, organizers and the public."
      />
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {sections.map((s) => (
            <div
              key={s.title}
              onClick={() => toast(`${s.title} — coming soon`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toast(`${s.title} — coming soon`)}
              className="bg-background p-8 group hover:bg-primary transition cursor-pointer"
            >
              <s.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground mb-4 transition" />
              <h2 className="font-display text-2xl text-foreground group-hover:text-primary-foreground mb-2 transition">{s.title}</h2>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/90 transition leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}