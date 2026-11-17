import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import ContactCta from '@/components/ContactCta'
import CompanyPanel from '@/components/CompanyPanel'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'About Trevor Drury',
  description: 'Barrister, chartered surveyor, chartered construction manager, accredited mediator and panel adjudicator.',
}

const quals = [
  'Barrister (called 2011)',
  'MBA, PG Dip Project Management',
  'FRICS, Chartered Surveyor',
  'FCIOB, Chartered Construction Manager',
  'MCIArb, Accredited Mediator',
  'Registered Panel Adjudicator',
]

export default function About() {
  return (
    <>
      <PageHero title="A barrister who has run the projects" />
      <section className="wrap grid-12 py-24">
        <div className="col-lead-offset">
          <Image
            src="/images/trevor-drury-head.jpg"
            alt="Trevor Drury"
            width={452}
            height={470}
            className="portrait-trapezoid portrait-flush-bottom w-full object-cover"
          />
          <ul className="mt-8 divide-y divide-line border-y border-line text-sm">
            {quals.map((q) => <li key={q} className="py-3">{q}</li>)}
          </ul>
        </div>
        <div className="space-y-5 text-lg leading-relaxed col-body">
          <p>
            I specialise in building, construction and engineering disputes. I was called to the Bar in{' '}
            {site.calledToBar}, and I am also a chartered surveyor and construction professional with
            decades of experience in the construction industry, working for contractors and consultancies.
          </p>
          <p>
            That background means I understand the issues frequently encountered on real projects, and I
            can read a programme, a valuation or a specification as readily as a contract.
          </p>
          <p>
            A great deal of my work is construction adjudication, and I sit as an adjudicator myself.
            I also represent clients in mediations and at hearings. Where possible I advocate negotiation
            and alternative dispute resolution to avoid court proceedings.
          </p>
          <p>
            Beyond the Bar, I am Chairman of the Consultant Quantity Surveyors Association and of the CIOB
            Bristol Hub, a committee member of the Western Counties branch of the Chartered Institute of
            Arbitrators, and a member of the Society of Construction Law and the Adjudication Society.
          </p>
          <p>
            I have many repeat clients who have benefited from my involvement in the resolution of their
            dispute.
          </p>
        </div>
      </section>
      <section className="slant-band bg-stone">
        <div className="wrap grid-12 py-24">
          <div className="col-lead-offset">
            <span aria-hidden className="bar" />
            <h2 className="text-3xl md:text-4xl">Morecraft Drury</h2>
          </div>
          <p className="col-body leading-relaxed">
            In 2003 I established Morecraft Drury, a construction consultancy based in Bristol. It is a
            separate business from my barrister practice and does not provide legal services.
          </p>
        </div>
      </section>
      <CompanyPanel heading="Work with the wider team" />
      <ContactCta />
    </>
  )
}
