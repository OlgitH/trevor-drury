'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { nav, site } from '@/content/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const pathname = usePathname()

  // Always land at the very top of a new page (Next otherwise aligns the page content to the top, leaving the
  // in-flow header scrolled out of view)
  useEffect(() => {
    const id = requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }))
    return () => cancelAnimationFrame(id)
  }, [pathname])

  // Show the full name once the hero (the first [data-hero] element) has scrolled out from under the header
  useEffect(() => {
    const check = () => {
      const hero = document.querySelector('[data-hero]')
      setPastHero(hero ? hero.getBoundingClientRect().bottom <= 80 : window.scrollY > 200)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [pathname])
  return (
    // The wrapper keeps the header's 5rem of space so the page doesn't jump when the header becomes fixed
    <div className="h-20 bg-sand">
    <header
      className={`z-40 ${pastHero ? 'header-fixed fixed inset-x-0 top-0 bg-navy text-white' : 'relative bg-sand text-navy'}`}
    >
      <div className="wrap flex h-20 items-center justify-between gap-12">
        <Link
          href="/"
          aria-label={`${site.name}, Barrister`}
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt={`Chambers of ${site.name}`}
            width={1250}
            height={291}
            className={`h-12 w-auto ${pastHero ? 'brightness-0 invert' : ''}`}
          />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={`font-sans text-xs font-bold uppercase tracking-[0.16em] ${pastHero ? 'text-white/85 hover:text-white' : 'text-navy/80 hover:text-navy'}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="ml-auto grid h-11 w-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {/* Gavel icon (public/images/gavel-icon.svg). Navy on the sand header; white on the navy fixed header */}
          <svg
            viewBox="0 0 279.93 330.03"
            width="37"
            height="44"
            fill="currentColor"
            aria-hidden
            className={`gavel col-start-1 row-start-1 ${open ? 'gavel-open' : ''}`}
          >
            <polygon points="138.43 177.58 55.48 254.44 36.56 235.52 113.41 152.57 138.43 177.58" />
            <circle cx="38.93" cy="252.07" r="23.76" />
            <path d="M167.6,213.6l62.87-62.87c.77-.77,2.07-.57,2.58.39l11.51,21.63-55.35,55.35-21.12-11.24C166.88,216.22,166.63,214.58,167.6,213.6Z" />
            <path d="M140.58,60.21l-62.03,62.03c-1.55,1.54-4.16,1.16-5.19-.78l-10.46-19.67,55.35-55.35,22.02,11.71C141.04,58.56,141.19,59.59,140.58,60.21Z" />
            <rect x="86.47" y="98.7" width="133.49" height="76.11" transform="translate(141.57 -68.28) rotate(45)" />
            <g className={pastHero ? 'fill-navy' : 'fill-sand'}>
              <path d="M161.1,220.11l39.82-39.82-42.98,36.65S162.28,220.11,161.1,220.11Z" />
              <path d="M23.83,263.69c-7.67-6.74-6.62-19.28,1.72-25C19.74,246.54,18.92,255.15,23.83,263.69H23.83Z" />
            </g>
          </svg>
          {/* Cross, revealed once the gavel has struck */}
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            aria-hidden
            className={`cross col-start-1 row-start-1 ${open ? 'cross-open' : ''}`}
          >
            <path d="M5 5L19 19M19 5L5 19" />
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/15 bg-navy-deep text-white lg:hidden">
          <div className="wrap flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/15 py-4 font-sans text-2xl font-bold text-white"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
    </div>
  )
}
