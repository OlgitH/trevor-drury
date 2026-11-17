import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactCta from '@/components/ContactCta'
import CompanyPanel from '@/components/CompanyPanel'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Public Access',
  description: 'How to instruct a Public Access barrister directly, and what I can and cannot do for you.',
}

const can = [
  'Give you legal advice and written opinion',
  'Draft contracts, settlement agreements and other legal documents',
  'Negotiate on your behalf',
  'Represent you in adjudication and mediation',
  'Represent you at court hearings',
  'Draft statements of case and other court documents for you to issue and serve',
]
const cannot = [
  'Conduct litigation: issue court proceedings or serve documents',
  'Deal with the court or the other side’s solicitors on your behalf in that capacity',
  'Handle client money',
  'Provide expert witness evidence in a matter where I am your barrister',
]
const steps = [
  ['Make contact', 'Send a short summary of the dispute and any deadlines.'],
  ['Suitability and conflicts', 'I check for conflicts and whether Public Access is appropriate for your matter.'],
  ['Terms and fees', 'I confirm the scope, my fees and an estimate in writing, with my client care information.'],
  ['Instruction', 'You send me the papers and I get to work.'],
]

export default function PublicAccess() {
  return (
    <>
      <PageHero
        title="Instruct a barrister directly"
        lead="Since 2004 the public has been able to instruct a barrister without going through a solicitor first. It can reduce cost and put you in direct contact with the person doing the work."
      />

      <section className="wrap grid-12 py-24">
        <div className="col-lead-offset">
          <span aria-hidden className="bar" />
          <h2 className="text-3xl md:text-4xl">What I can and cannot do</h2>
        </div>
        <div className="col-inset grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-teal-ink p-8 text-white md:p-10">
            <h3 className="text-2xl !text-white">I can</h3>
            <ul className="mt-6 space-y-3 text-sm font-medium leading-relaxed">
              {can.map((c) => <li key={c} className="border-b border-white/30 pb-3">{c}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl bg-iris p-8 text-white md:p-10">
            <h3 className="text-2xl !text-white">I cannot</h3>
            <ul className="mt-6 space-y-3 text-sm font-medium leading-relaxed">
              {cannot.map((c) => <li key={c} className="border-b border-white/30 pb-3">{c}</li>)}
            </ul>
          </div>
        </div>
        <div className="col-lead-offset">
          <span aria-hidden className="bar" />
          <h2 className="text-3xl">If your dispute needs to go to court</h2>
        </div>
        <div className="col-body space-y-4 leading-relaxed">
          <p>
            I am not authorised to conduct litigation. You have two options: bring the proceedings
            yourself as a litigant in person, with my advice and advocacy behind you, or instruct a
            solicitor to conduct the case, with me instructed as your barrister alongside them. I will
            talk you through both before you decide.
          </p>
          <p>
            In practice most construction disputes are resolved by negotiation, adjudication or
            mediation, none of which is litigation, and I can act for you throughout.
          </p>
        </div>
      </section>

      <section className="slant-band bg-stone">
        <div className="wrap grid-12 py-24">
          <div className="col-lead-offset">
            <span aria-hidden className="bar" />
            <h2 className="text-3xl md:text-4xl">How to instruct me</h2>
          </div>
          <ol className="col-inset grid gap-8 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t border-navy pt-5">
                <span className="eyebrow">Step {i + 1}</span>
                <h3 className="mt-2 text-xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
          <p className="col-body text-sm leading-relaxed">
            You can also find me on the Bar Council’s{' '}
            <a href={site.portalUrl} className="link-line text-navy" rel="noopener noreferrer" target="_blank">
              Direct Access Portal
            </a>.
          </p>
        </div>
      </section>

      <section className="wrap grid-12 py-24">
        <div className="col-lead-offset">
          <span aria-hidden className="bar" />
          <h2 className="text-3xl md:text-4xl">Barrister or consultancy?</h2>
        </div>
        <p className="col-body leading-relaxed">
          Legal advice and advocacy come from this practice. Work that is not legal services, such as
          expert witness reports, claims preparation, project recovery and management consultancy, is
          provided by Morecraft Drury, a separate company. Many disputes benefit from both, and I will
          tell you plainly when you need the other.
        </p>
      </section>
      <CompanyPanel heading="Non-legal construction support" />
      <ContactCta />
    </>
  )
}
