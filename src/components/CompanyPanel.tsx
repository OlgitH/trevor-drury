import { company, companyLink } from '@/content/site'

/**
 * Points visitors to the company site for non-legal work. Used wherever the
 * barrister practice stops and Morecraft Drury's services begin.
 */
export default function CompanyPanel({ heading = 'Need something other than legal advice?' }: { heading?: string }) {
  return (
    <section className="slant-band bg-stone">
      <div className="wrap grid-12 py-24">
        <div className="col-lead-offset">
          <span aria-hidden className="bar" />
          <h2 className="text-3xl md:text-4xl">{heading}</h2>
        </div>
        <div className="col-body">
          <p className="leading-relaxed">
            Expert witness reports, claims preparation and defence, project recovery and management
            consultancy are provided by {company.name}, the construction consultancy Trevor founded in
            2003. These are not legal services and are provided separately from this barrister practice.
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {company.services.map((s) => (
              <li key={s.href}>
                <a href={companyLink(s.href)} className="flex items-center justify-between py-4 hover:text-navy">
                  <span>{s.label}</span><span aria-hidden>→</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={companyLink()} className="btn-keyline mt-8">Visit {company.name}</a>
        </div>
      </div>
    </section>
  )
}
