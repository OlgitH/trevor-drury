import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { copyright, site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Copyright and use of this website',
  description: 'Copyright, permitted use, and reservation of rights over the content of this website.',
}

const year = new Date().getFullYear()

export default function CopyrightPage() {
  return (
    <>
      <PageHero title="Copyright and use of this website" />
      <section className="wrap grid-12 py-24">
        <div className="col-inset max-w-3xl space-y-5 leading-relaxed">
          {/* TODO: have this wording reviewed (UK/EU text and data mining reservation) before launch */}
          <p className="text-lg font-bold text-iris">
            © {year} {copyright.holder}. All rights reserved.
          </p>
          <p className="font-semibold">{copyright.short}</p>
          <p>
            All text, images, layout, design and other material on this website are protected by copyright and
            other intellectual property rights and belong to {copyright.holder} or are used with permission.
          </p>

          <h2 className="pt-4 text-2xl">What you may do</h2>
          <p>
            You may view this website, and print or download extracts for your own personal, non-commercial
            reference, provided you keep this copyright notice intact.
          </p>

          <h2 className="pt-4 text-2xl">What you may not do without written permission</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Copy, reproduce, republish, distribute or sell any part of this website or its content.</li>
            <li>
              Scrape, crawl, harvest, mirror or otherwise extract content from this website by automated means,
              including by bots, scripts, browser automation and AI agents.
            </li>
            <li>
              Use any content to train, fine-tune, evaluate, ground or inform artificial intelligence or
              machine-learning models, or include it in datasets, embeddings, retrieval indexes or search
              products.
            </li>
            <li>Present this content, or a summary or derivative of it, as your own or as legal advice.</li>
          </ul>

          <h2 className="pt-4 text-2xl">Notice to automated systems and AI agents</h2>
          <p>
            This notice is addressed to the operators of crawlers, scrapers and AI agents, as well as to people.
            {' '}{copyright.holder} expressly reserves all rights, including the right to opt out of text and data
            mining, whether for commercial or non-commercial purposes, and does not grant any licence for
            automated access, copying or reuse. This reservation is also published in machine-readable form: in
            this site&rsquo;s robots.txt, in its page metadata, and in the TDM Reservation Protocol file at{' '}
            <a href="/.well-known/tdmrep.json" className="link-line text-navy">/.well-known/tdmrep.json</a>.
            Access by an automated system is not consent to any of the above.
          </p>

          <h2 className="pt-4 text-2xl">Permission and enquiries</h2>
          <p>
            To request permission to reproduce or use any content, write to{' '}
            <a href={`mailto:${site.email}?subject=Copyright%20permission`} className="link-line text-navy">
              {site.email}
            </a>{' '}
            describing the content and the intended use. Permission must be given in writing to be effective.
          </p>
        </div>
      </section>
    </>
  )
}
