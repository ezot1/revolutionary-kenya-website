import { Send, ExternalLink, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Props = {
  recipient: string;
  name: string;
  details: { label: string; value: string }[];
  subject: string;
  message: string;
  sending: boolean;
  onSubjectChange: (value: string) => void;
  onMessageChange: (value: string) => void;
  onClose: () => void;
  onSend: () => void;
};

export default function EmailReplyComposer({ recipient, name, details, subject, message, sending, onSubjectChange, onMessageChange, onClose, onSend }: Props) {
  return (
    <Dialog open onOpenChange={(open) => { if (!open && !sending) onClose(); }}>
      <DialogContent className="admin-workspace max-w-[calc(100%_-_2rem)] gap-0 overflow-hidden rounded-lg border-border bg-card p-0 text-foreground sm:max-w-5xl">
        <header className="border-b border-border px-6 py-5 pr-12">
          <DialogTitle className="flex items-center gap-3 text-xl tracking-normal"><Mail className="h-5 w-5 text-primary" />Reply to {name}</DialogTitle>
          <DialogDescription className="mt-2">{recipient}</DialogDescription>
        </header>
        <div className="grid max-h-[70vh] overflow-y-auto md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <section className="min-w-0 border-b border-border bg-secondary/40 px-6 py-6 md:border-b-0 md:border-r" aria-label="Original enquiry">
            <h3 className="mb-5 text-xs font-semibold uppercase text-muted-foreground">Original enquiry</h3>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-semibold text-primary">{name.slice(0, 1).toUpperCase()}</span>
              <div className="min-w-0"><p className="font-semibold">{name}</p><p className="break-all text-xs text-muted-foreground">{recipient}</p></div>
            </div>
            <dl className="space-y-5">
              {details.map(({ label, value }) => <div key={label}><dt className="mb-1 text-xs font-medium text-muted-foreground">{label}</dt><dd className="whitespace-pre-wrap break-words text-sm leading-relaxed">{value}</dd></div>)}
            </dl>
          </section>
          <form id="email-reply-form" className="min-w-0 px-6 py-6" onSubmit={(event) => { event.preventDefault(); onSend(); }}>
            <div className="mb-5 space-y-3 border-b border-border pb-5 text-sm">
              <div className="flex gap-4"><span className="w-10 shrink-0 text-muted-foreground">From</span><span>PRC &lt;info@prca.world&gt;</span></div>
              <div className="flex gap-4"><span className="w-10 shrink-0 text-muted-foreground">To</span><span className="break-all">{recipient}</span></div>
            </div>
            <label className="mb-5 block space-y-2"><span className="text-sm font-semibold">Subject</span><input aria-label="Subject" required value={subject} disabled={sending} onChange={(event) => onSubjectChange(event.target.value)} className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></label>
            <label className="block space-y-2"><span className="text-sm font-semibold">Your reply</span><textarea aria-label="Reply message" required rows={12} value={message} disabled={sending} onChange={(event) => onMessageChange(event.target.value)} className="w-full resize-y rounded-md border border-input bg-card px-3 py-3 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-ring" /></label>
          </form>
        </div>
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-card px-6 py-4">
          <Button asChild variant="ghost" size="sm"><a href={`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}><ExternalLink />Open in mail app</a></Button>
          <div className="flex gap-2"><Button variant="outline" onClick={onClose} disabled={sending}>Cancel</Button><Button type="submit" form="email-reply-form" disabled={sending || !subject.trim() || !message.trim()}>{sending ? <Loader2 className="animate-spin" /> : <Send />}{sending ? "Sending…" : "Send reply"}</Button></div>
        </footer>
      </DialogContent>
    </Dialog>
  );
}