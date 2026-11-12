import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = { title: 'Complaints procedure', description: 'How to make a complaint.' }

export default function Page() {
  return (
    <>
      <PageHero title="Complaints procedure" />
      <section className="wrap grid-12 py-24">
      <div className="col-inset max-w-3xl space-y-5 leading-relaxed">
        {/* TODO: replace with Trevor’s BSB-compliant complaints procedure, including Legal Ombudsman details and time limits */}
        <p>I aim to provide a first-class service. If you are unhappy with it, please tell me promptly so I can put it right.</p>
        <p>This page will set out the full complaints procedure, including how to complain to the Legal Ombudsman if we cannot resolve matters.</p>
      </div>
      </section>
    </>
  )
}
