import { useState } from "react";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabase";
import { Mail, MapPin, Twitter } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const { error } = await supabase.from("contacts").insert([form]);
    setSending(false);
    if (error) {
      toast.error("Failed to send message. Try again.");
    } else {
      toast.success("Message sent! We will be in touch.");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black text-foreground text-center mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-center mb-12">
            Get in touch with the PRC. Join the struggle.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-bold text-foreground text-sm">Email</p>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:info@prca.world" className="hover:text-primary transition">info@prca.world</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Twitter className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-bold text-foreground text-sm">Twitter / X</p>
                  <p className="text-muted-foreground text-sm">@PRC_Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-bold text-foreground text-sm">Location</p>
                  <p className="text-muted-foreground text-sm">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
