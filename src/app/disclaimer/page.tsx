import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = { title: 'Disclaimer', description: 'Important information about this website.' }

export default function Page() {
  return (
    <>
      <PageHero title="Disclaimer" />
      <section className="wrap grid-12 py-24">
      <div className="col-inset max-w-3xl space-y-5 leading-relaxed">
        <p>The information on this website is general and is not legal advice. A barrister-client relationship is created only when I have confirmed in writing that I have accepted your instructions.</p>
        <p>Trevor Drury is a barrister regulated by the Bar Standards Board. Morecraft Drury is a separate company which does not provide legal services.</p>
        <p>This site is not a substitute for advice on your particular circumstances. Time limits apply to many construction disputes, so seek advice promptly.</p>
      </div>
      </section>
    </>
  )
}
