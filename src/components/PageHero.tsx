export default function PageHero({
  title,
  lead,
}: {
  title: string
  lead?: string
}) {
  return (
    <section data-hero className="bg-sand">
      <div className="wrap grid-12 py-20 md:py-28">
        <div className="col-hero-title">
          <h1 className="fade-in text-4xl leading-[1.1] md:text-6xl" style={{ '--d': '150ms' } as React.CSSProperties}>{title}</h1>
        </div>
        {lead && (
          <p
            className="fade-in col-hero-blurb text-lg font-bold leading-relaxed text-teal-ink"
            style={{ '--d': '400ms' } as React.CSSProperties}
          >
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}
