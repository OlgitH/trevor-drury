import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CompanyPanel from '@/components/CompanyPanel'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Make an enquiry about a construction dispute.',
}

export default function Contact() {
  const subject = encodeURIComponent('Barrister enquiry')
  return (
    <>
      <PageHero
        title="Make an enquiry"
        lead="Tell me briefly what the dispute is about, who the parties are, and the date of any deadline or notice."
      />
      <section className="wrap grid-12 py-24">
        <dl className="col-lead-offset space-y-8">
          <div>
            <dt className="eyebrow mb-2">Email</dt>
            <dd className="whitespace-nowrap font-serif text-xl text-navy">
              <a href={`mailto:${site.email}?subject=${subject}`} className="link-line">{site.email}</a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow mb-2">Telephone</dt>
            <dd className="whitespace-nowrap font-serif text-xl text-navy">
              <a href={`tel:${site.phoneHref}`} className="link-line">{site.phone}</a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow mb-2">Address</dt>
            <dd className="leading-relaxed">{site.address.map((l) => <span key={l} className="block">{l}</span>)}</dd>
          </div>
        </dl>
        <div className="col-body space-y-4 text-sm leading-relaxed">
          <h2 className="text-2xl">Before you write</h2>
          <p>
            Please do not send confidential papers until I have confirmed there is no conflict of
            interest and agreed terms.
          </p>
          <p>
            Enquiries for expert witness, claims or project recovery work should go to Morecraft Drury,
            which can be contacted separately below.
          </p>
        </div>
      </section>
      <CompanyPanel heading="Contacting the consultancy" />
    </>
  )
}
