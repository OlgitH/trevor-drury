import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = { title: 'Privacy policy', description: 'How personal data is handled.' }

export default function Page() {
  return (
    <>
      <PageHero title="Privacy policy" />
      <section className="wrap grid-12 py-24">
      <div className="col-inset max-w-3xl space-y-5 leading-relaxed">
        {/* TODO: UK GDPR privacy notice. Check the company site policy and adapt for the barrister practice */}
        <p>This page will set out how personal data is collected, used and protected.</p>
      </div>
      </section>
    </>
  )
}
