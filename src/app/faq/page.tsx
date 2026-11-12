import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactCta from '@/components/ContactCta'
import { faqs } from '@/content/faq'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about instructing a Public Access barrister for a construction dispute.',
}

export default function Faq() {
  return (
    <>
      <PageHero title="Frequently asked questions" />
      <section className="wrap grid-12 py-24">
        <div className="col-inset divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-navy md:text-2xl">
                {f.q}
                <span aria-hidden className="text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <ContactCta heading="Still have a question?" />
    </>
  )
}
