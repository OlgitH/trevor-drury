import Link from 'next/link'
import { site } from '@/content/site'

export default function ContactCta({ heading = 'Discuss your dispute' }: { heading?: string }) {
  return (
    <section className="slant-top bg-navy text-white">
      <div className="wrap grid-12 py-24">
        <div className="col-lead-offset">
          <span aria-hidden className="bar bar-light" />
          <h2 className="text-3xl !text-white md:text-4xl">{heading}</h2>
        </div>
        <div className="col-body">
          <p className="max-w-xl leading-relaxed text-white/80">
            Time limits in construction disputes are short. Tell me what has happened and when the next
            deadline falls.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-keyline btn-keyline-inverse">Make an enquiry</Link>
            <a href={`tel:${site.phoneHref}`} className="btn-keyline btn-keyline-inverse" aria-label={`Call ${site.phone}`}>Call</a>
          </div>
        </div>
      </div>
    </section>
  )
}
