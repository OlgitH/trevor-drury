import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ContactCta from '@/components/ContactCta'
import CompanyPanel from '@/components/CompanyPanel'
import { practiceAreas, projectTypes } from '@/content/practice'

export const metadata: Metadata = {
  title: 'Practice areas',
  description: 'Construction adjudication, payment and defects disputes, contracts, mediation and advocacy.',
}

export default function PracticeAreas() {
  return (
    <>
      <PageHero
        title="Building, construction and engineering disputes"
        lead={`I advise and represent clients across ${projectTypes.toLowerCase()}`}
      />
      <section className="wrap grid-12 py-24">
        <ul className="col-inset divide-y divide-line border-y border-line">
          {practiceAreas.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/practice-areas/${p.slug}/`}
                className="grid items-baseline gap-4 py-10 transition-colors hover:text-navy lg:grid-cols-10"
              >
                <h2 className="text-2xl md:text-3xl lg:col-span-4">{p.title}</h2>
                <p className="leading-relaxed lg:col-span-5">{p.summary}</p>
                <span className="text-xs uppercase tracking-[0.16em] lg:col-span-1 lg:text-right">Read more →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CompanyPanel heading="Looking for expert evidence or claims support?" />
      <ContactCta />
    </>
  )
}
