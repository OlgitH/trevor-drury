import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactCta from '@/components/ContactCta'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Fees',
  description: 'Transparent fees for Public Access work.',
}

export default function Fees() {
  return (
    <>
      <PageHero
        title="Transparent fees, agreed up front"
        lead="You will know what you are paying for, and roughly what it will cost, before work starts."
      />
      <section className="wrap grid-12 py-24">
        <div className="col-lead-offset">
          <span aria-hidden className="bar" />
          <h2 className="text-3xl md:text-4xl">How fees are agreed</h2>
        </div>
        <div className="space-y-5 leading-relaxed col-body">
          <p>
            My fees are charged at an hourly rate of {site.rate}, depending on the nature and
            complexity of the work. VAT is payable in addition where applicable.{' '}
            {/* TODO: confirm VAT status */}
          </p>
          <p>
            After I have seen the papers I will confirm the scope of work, my fees and an estimate in
            writing. Where it makes sense for the type of work, I can agree a fixed fee.{' '}
            {/* TODO: confirm fixed fee offering */}
          </p>
          <p>
            Because you instruct me directly, you do not pay a solicitor’s fees as well, though you will
            do more of the case management yourself. For some disputes it is sensible to involve a
            solicitor, and I will say so if so.
          </p>
        </div>
        <div className="col-lead-offset">
          <span aria-hidden className="bar" />
          <h2 className="text-3xl md:text-4xl">Other costs</h2>
        </div>
        <div className="space-y-5 leading-relaxed col-body">
          <p>
            Adjudicator and mediator fees, and the fees of any experts, are separate. In an adjudication
            the adjudicator’s fees are often borne by the losing party, and I will advise on this. Expert
            evidence from Morecraft Drury is charged separately under its own terms.
          </p>
        </div>
      </section>
      <ContactCta heading="Ask for an estimate" />
    </>
  )
}
