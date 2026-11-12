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
          className="flex flex-col font-serif leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="text-2xl font-bold tracking-wide">{site.name}</span>
          <span className="mt-0.5 text-sm tracking-[0.08em] opacity-80">Barrister</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={`text-xs font-semibold uppercase tracking-[0.16em] ${pastHero ? 'text-white/85 hover:text-white' : 'text-navy/80 hover:text-navy'}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="ml-auto flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {/* Solid judge's gavel (tilted head, tapered handle with collar and pommel) striking a sound block */}
          <svg
            viewBox="-3 0 38 35"
            width="38"
            height="35"
            fill="currentColor"
            aria-hidden
            className={`origin-bottom-left transition-transform duration-200 ${open ? '-rotate-12' : ''}`}
          >
            <g transform="translate(0 4) rotate(40 19 10)">
              <rect x="5.5" y="3.5" width="5" height="13" rx="1.6" />
              <rect x="12" y="5" width="15" height="10" rx="1.8" />
              <rect x="27.5" y="3.5" width="5" height="13" rx="1.6" />
              <path d="M16.9 15 H21.1 L20.4 27.5 H17.6 Z" />
              <rect x="16" y="17.4" width="6" height="2" rx="1" />
              <circle cx="19" cy="28.4" r="2.3" />
            </g>
            <rect x="12" y="30" width="20" height="4" rx="1.4" />
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
                className="border-b border-white/15 py-4 font-serif text-2xl text-white"
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
