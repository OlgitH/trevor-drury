import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import ContactCta from '@/components/ContactCta'
import { practiceAreas } from '@/content/practice'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false
export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = practiceAreas.find((x) => x.slug === slug)
  return p ? { title: p.title, description: p.summary } : {}
}

export default async function PracticeArea({ params }: Props) {
  const { slug } = await params
  const p = practiceAreas.find((x) => x.slug === slug)
  if (!p) notFound()
  const others = practiceAreas.filter((x) => x.slug !== slug)
  return (
    <>
      <PageHero title={p.title} lead={p.summary} />
      <section className="wrap grid-12 py-24">
        <aside className="col-lead-offset">
          <span aria-hidden className="bar" />
          <h2 className="text-3xl">How I can help</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {p.helps.map((h) => <li key={h} className="py-4 text-sm leading-relaxed">{h}</li>)}
          </ul>
        </aside>
        <div className="col-body space-y-5 text-lg leading-relaxed max-lg:order-first">
          {p.intro.map((t) => <p key={t}>{t}</p>)}
        </div>
      </section>
      <section className="slant-band bg-stone">
        <div className="wrap grid-12 py-24">
          <div className="col-lead-offset">
            <span aria-hidden className="bar" />
            <h2 className="text-3xl">Other practice areas</h2>
          </div>
          <div className="col-body">
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}><Link href={`/practice-areas/${o.slug}/`} className="link-line text-navy">{o.title}</Link></li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed">
              Not sure whether you need a barrister or construction consultancy support? See{' '}
              <Link href="/public-access/" className="link-line text-navy">what a Public Access barrister can do</Link>.
            </p>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}
