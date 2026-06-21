const PageHero = ({ kicker, title, lede }: { kicker: string; title: string; lede?: string }) => (
  <section className="relative border-b border-border py-20 md:py-28 overflow-hidden bg-[hsl(0_0%_5%)]">
    <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
    <div className="absolute inset-0 grain" />
    <div className="container mx-auto px-4 relative">
      <p className="kicker mb-5">{kicker}</p>
      <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[0.95] max-w-4xl">{title}</h1>
      {lede && <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-serif-editorial">{lede}</p>}
    </div>
  </section>
);

export default PageHero;