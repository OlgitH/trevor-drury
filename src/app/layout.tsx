import type { Metadata } from 'next'
import { Source_Serif_4, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { copyright, site } from '@/content/site'

const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' })
const sourceSerif = Source_Serif_4({ subsets: ['latin'], variable: '--font-source-serif' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.title} | Construction Disputes`, template: `%s | ${site.name}, Barrister` },
  description:
    'Public Access barrister specialising in building, construction and engineering disputes: adjudication, payment and defects disputes, contracts and mediation.',
  authors: [{ name: site.name }],
  other: {
    copyright: `© ${new Date().getFullYear()} ${copyright.holder}. ${copyright.short}`,
    // W3C TDM Reservation Protocol: text and data mining rights are reserved
    'tdm-reservation': '1',
    'tdm-policy': `${site.url}/copyright/`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.title,
  url: site.url,
  copyrightHolder: { '@type': 'Person', name: copyright.holder },
  copyrightYear: new Date().getFullYear(),
  copyrightNotice: `© ${new Date().getFullYear()} ${copyright.holder}. ${copyright.short}`,
  license: `${site.url}/copyright/`,
  usageInfo: `${site.url}/copyright/`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
