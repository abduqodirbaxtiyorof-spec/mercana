import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <Reveal>
          <p className="text-[10px] uppercase tracking-luxury text-accent">About</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Architecture as a quiet luxury.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-sm leading-relaxed text-muted md:text-base">
            MERCANA crafts interior environments where material honesty, calibrated
            lighting, and precise proportions converge. Each visualization is
            composed like architecture — with restraint, rhythm, and permanence.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
            From intimate bedrooms to spa-grade bathrooms and sculptural kitchens,
            our work reflects a singular pursuit: spaces that feel inevitable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
