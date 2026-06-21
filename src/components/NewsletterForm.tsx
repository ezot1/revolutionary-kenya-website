import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const NewsletterForm = ({ compact = false }: { compact?: boolean }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const { error } = await supabase.from("subscribers").insert([{ email: email.trim().toLowerCase() }]);
    setLoading(false);
    if (error) {
      if (error.code === "23505") toast.error("You're already subscribed.");
      else toast.error("Subscription failed. Try again.");
    } else {
      toast.success("Subscribed. Solidarity!");
      setEmail("");
    }
  };

  if (compact) {
    return (
      <form onSubmit={submit} className="space-y-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-3 py-2 bg-card border border-border text-sm focus:outline-none focus:border-primary"
        />
        <button disabled={loading} className="w-full py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:bg-primary/90 disabled:opacity-50 transition">
          {loading ? "..." : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="flex-1 px-5 py-4 bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary"
      />
      <button
        disabled={loading}
        className="px-6 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/90 disabled:opacity-50 transition inline-flex items-center justify-center gap-2 group"
      >
        {loading ? "Sending..." : <>Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></>}
      </button>
    </form>
  );
};

export default NewsletterForm;