import Link from 'next/link'
import { company, companyLink, copyright, nav, site } from '@/content/site'

export default function Footer() {
  return (
    <footer className="relative -mt-px bg-navy-deep text-white/80">
      <div className="wrap grid-12 py-16">
        <div className="col-lead">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt={`Chambers of ${site.name}`}
            width={1250}
            height={291}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-md text-sm leading-relaxed">
            Public Access barrister specialising in building, construction and engineering disputes.
            {' '}{site.regulator}.
          </p>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="eyebrow !text-white/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`tel:${site.phoneHref}`} className="hover:text-white">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
          </ul>
          <p className="eyebrow mt-8 !text-white/50">Construction consultancy</p>
          <p className="mt-3 text-sm">
            <a href={companyLink()} className="link-line hover:text-white">{company.name}</a>
          </p>
        </div>
      </div>

      <div>
        <div className="wrap grid-12 py-6">
          <nav aria-label="Footer" className="col-full flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.16em] text-white/80">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white">{n.label}</Link>
            ))}
          </nav>
        </div>
      </div>

      <div>
        <div className="wrap grid-12 !gap-y-4 py-6 text-xs text-white/55">
          <div className="col-full flex flex-col gap-3 md:flex-row md:justify-between">
            <p className="font-semibold text-white/80">
              © {new Date().getFullYear()} {copyright.holder}. All rights reserved.
              <br />
              <Link href="/copyright/" className="link-line mt-1 inline-block text-[#b9acff] hover:text-white">
                Read copyright notice
              </Link>
            </p>
            <p className="flex flex-wrap gap-x-5 gap-y-1">
              <Link href="/complaints/" className="hover:text-white">Complaints</Link>
              <Link href="/privacy/" className="hover:text-white">Privacy</Link>
              <Link href="/disclaimer/" className="hover:text-white">Disclaimer</Link>
            </p>
          </div>
          <p className="col-full leading-relaxed text-white/45">
            Trevor Drury is a barrister regulated by the Bar Standards Board. Morecraft Drury is a separate
            construction consultancy and does not provide legal services.
          </p>
        </div>
      </div>
    </footer>
  )
}
