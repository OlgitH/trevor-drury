import Image from 'next/image'
import Link from 'next/link'
import CompanyPanel from '@/components/CompanyPanel'
import ContactCta from '@/components/ContactCta'
import { practiceAreas, workFor } from '@/content/practice'
import { site } from '@/content/site'

export default function Home() {
  return (
    <>
      <section data-hero className="slant-bottom relative isolate overflow-hidden bg-sand">
        {/* Navy panel (laptop up): sharp top-left corner; its top edge runs out to the hero's top-right corner and the shape bleeds off the bottom of the hero. Previously the top and bottom edges ran out to the hero's
            top-right and bottom-right corners. Its left edge sits 2.5rem inside the portrait (col 7 starts at 50% + 1rem).
            The polygon's stroke has round joins, so corners are rounded; the stroke is 48px wide, so the
            polygon is inset by 24px. */}
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="fade-only pointer-events-none absolute inset-y-0 -z-10 hidden overflow-visible lg:block"
          style={{ '--d': '0ms', left: 'calc(50% + 80px)', width: 'calc(50% - 56px)', height: '100%' } as React.CSSProperties}
        >
          <polygon
            points="0,10 100,5 100,130 0,130"
            fill="var(--color-navy)"
            stroke="var(--color-navy)"
            strokeWidth="48"
            strokeLinejoin="miter"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="wrap grid-12 items-center pt-14 md:pt-12">
          <div className="col-lead lg:self-end lg:pb-14">
            <h1 style={{ '--d': '450ms' } as React.CSSProperties} className="fade-in text-4xl leading-[1.05] sm:text-5xl xl:text-6xl">Public access barrister</h1>
            <p style={{ '--d': '600ms' } as React.CSSProperties} className="fade-in mt-2 font-serif text-xl font-bold text-teal-ink">Expert in Construction Dispute Resolution</p>
            <div style={{ '--d': '750ms' } as React.CSSProperties} className="fade-in mt-7 flex flex-col items-start gap-3 lg:mt-10 font-serif text-lg font-semibold text-navy lg:text-xl">
              <Link href="/contact/" className="link-line">Make an enquiry →</Link>
              <Link href="/public-access/" className="link-line">How Public Access works →</Link>
            </div>
          </div>
          <div className="hero-band col-main relative mt-3 self-end lg:mt-0">
          <div className="flex items-end gap-6">
            <Image
              src="/images/trevor-drury-head.jpg"
              alt="Trevor Drury, barrister"
              width={452}
              height={470}
              priority
              className="fade-in portrait-trapezoid portrait-flush-bottom block min-w-0 w-full max-w-sm object-cover"
              style={{ '--d': '250ms' } as React.CSSProperties}
            />
            <a
              href={site.linkedin || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--d': '900ms' } as React.CSSProperties}
              className="fade-in group mb-14 flex shrink-0 flex-col items-start gap-2 text-sm font-bold text-white"
            >
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-base font-bold text-navy"
              >
                in
              </span>
              <span className="whitespace-nowrap border-b border-white/60 pb-[2px] group-hover:border-white">
                Follow on LinkedIn
              </span>
            </a>
          </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap grid-12 pt-20 pb-0">
          <div className="col-wide-shifted">
            <p className="text-left text-2xl font-bold leading-snug text-iris lg:text-[1.65rem]">
              Direct access to a barrister who is also a chartered surveyor and construction manager,
              with decades in the industry. Advice, adjudication, mediation and advocacy, without first
              instructing a solicitor.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap grid-12 pt-20 pb-24">
        <div className="col-shift-lead">
          <span aria-hidden className="bar" />
          <h2 className="text-3xl md:text-4xl">The law and the building site</h2>
        </div>
        <div className="space-y-5 leading-relaxed col-shift-body">
          <p>
            I was called to the Bar in {site.calledToBar}, having spent decades as a chartered surveyor,
            chartered construction manager and project manager. I have seen the problems your project
            faces from the contractor’s side, the consultant’s side and the employer’s.
          </p>
          <p>
            I am an accredited mediator and a panel adjudicator. I always advocate negotiation and
            alternative dispute resolution where possible, to avoid court proceedings.
          </p>
          <Link href="/about/" className="btn-keyline mt-3">About Trevor</Link>
        </div>
      </section>

      <section className="slant-band bg-rich-black text-white">
        <div className="wrap grid-12 py-24">
          <div className="col-lead">
            <h2 className="text-3xl !text-white md:text-4xl">Practice areas</h2>
          </div>
          <div className="col-end">
            <Link href="/practice-areas/" className="link-line font-serif text-xl font-semibold text-white">View all →</Link>
          </div>
          <div className="col-inset mt-6 grid gap-x-10 gap-y-14 md:grid-cols-3">
            {practiceAreas.map((p) => (
              <Link
                key={p.slug}
                href={`/practice-areas/${p.slug}/`}
                className="group flex flex-col text-white"
              >
                <span aria-hidden className="mb-4 block h-[6px] w-[60px] bg-teal-soft" />
                <h3 className="text-2xl !font-bold !text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-snug text-white/85">{p.summary}</p>
                <span className="mt-3 text-sm font-semibold text-[#b9acff] group-hover:underline">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap grid-12 py-24">
        <div className="col-lead-offset">
          <span aria-hidden className="bar" />
          <h2 className="text-3xl md:text-4xl">Individuals, contractors, developers and local authorities</h2>
        </div>
        <ul className="divide-y divide-line border-y border-line col-body">
          {workFor.map((w) => (
            <li key={w} className="py-5 leading-relaxed">{w}</li>
          ))}
        </ul>
      </section>

      <section className="slant-band bg-navy text-white">
        <div className="wrap grid-12 py-24">
          <div className="col-lead-offset">
            <span aria-hidden className="bar bar-light" />
            <h2 className="text-3xl !text-white md:text-4xl">What a barrister can and cannot do for you</h2>
          </div>
          <div className="space-y-6 leading-relaxed text-white/85 col-body">
            <p>
              I can advise, draft, negotiate and represent you in adjudication, mediation and at
              hearings. I do not conduct litigation, so I cannot issue court proceedings or serve
              documents for you. If your dispute needs to go to court, I will explain your options.
            </p>
            <Link href="/public-access/" className="btn-keyline btn-keyline-inverse">Read the Public Access guide</Link>
          </div>
        </div>
      </section>

      <CompanyPanel />
      <ContactCta />
    </>
  )
}
