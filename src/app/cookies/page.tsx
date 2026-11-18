import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Cookie notice',
  description: 'How this website uses cookies.',
}

export default function Page() {
  return (
    <>
      <PageHero title="Cookie notice" />
      <section className="wrap grid-12 py-24">
        <div className="col-inset max-w-3xl space-y-5 leading-relaxed">
          <h2 className="text-2xl md:text-3xl">What are cookies?</h2>
          <p>
            Cookies are small text files that a website can store on your device. They are often used to remember
            your preferences, to measure how a site is used, or to show advertising.
          </p>

          <h2 className="pt-6 text-2xl md:text-3xl">How this website uses them</h2>
          <p>
            This website does not use cookies for analytics, advertising or tracking, and it does not ask you to log
            in. Because of that, there is no cookie banner and nothing for you to accept or refuse.
          </p>
          <p>
            Fonts are served from this website itself and not from a third party, and the site does not embed
            third-party content such as maps, videos or social media feeds that would set their own cookies.
          </p>
          <p>
            Like most websites, the server that hosts this site may keep short-term technical logs, for example your IP
            address and the pages requested, for security and to keep the site running.
          </p>

          <h2 className="pt-6 text-2xl md:text-3xl">If this changes</h2>
          <p>
            If I add analytics or any other non-essential cookies in future, I will ask for your consent before they are
            set and will update this notice.
          </p>

          <h2 className="pt-6 text-2xl md:text-3xl">Controlling cookies in your browser</h2>
          <p>
            You can choose to block or delete cookies at any time in your browser settings. Guidance is available from
            the{' '}
            <a className="underline" href="https://ico.org.uk/for-the-public/online/cookies/">
              Information Commissioner’s Office
            </a>
            .
          </p>

          <h2 className="pt-6 text-2xl md:text-3xl">More information</h2>
          <p>
            For how I handle personal information, see the <Link className="underline" href="/privacy/">privacy policy</Link>. If you have any
            questions, contact me at{' '}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
