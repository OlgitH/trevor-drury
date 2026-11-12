/**
 * Single source of truth for contact details, regulatory wording and
 * cross-links to the company site. Search for TODO before launch.
 */
export const site = {
  name: 'Trevor Drury',
  title: 'Trevor Drury, Barrister',
  tagline: 'Construction and engineering disputes. Public Access Barrister.',
  url: 'https://www.trevordrury.co.uk', // TODO: confirm final domain
  calledToBar: 2011,
  rate: '£400 to £500 per hour', // Per Bar Council Direct Access Portal; TODO confirm and add fixed-fee options
  // TODO: replace with Trevor's own barrister contact details if different from the company's
  email: 'enquiries@morecraft-drury.com',
  phone: '0117 986 0552',
  phoneHref: '+441179860552',
  address: ['1 Temple Quay', 'Temple Back East', 'Bristol', 'BS1 6DZ'],
  // TODO: chambers / BSB entity details, BSB number, indemnity insurance wording
  regulator: 'Regulated by the Bar Standards Board',
  portalUrl: 'https://www.directaccessportal.co.uk/barristers/trevor-keith-drury.html',
  linkedin: '', // TODO
}

/** Copyright wording, reused in the footer, metadata and the /copyright page */
export const copyright = {
  holder: 'Trevor Drury',
  short:
    'All rights reserved. The content of this website may not be copied, scraped, harvested, reproduced or used to train or inform AI or machine-learning systems without written permission.',
}

export const company = {
  name: 'Morecraft Drury',
  url: 'https://www.morecraft-drury.com',
  services: [
    { label: 'Expert witness (quantum and project management)', href: '/services/expert-witness' },
    { label: 'Claims, dispute avoidance and resolution', href: '/services/claims-and-disputes' },
    { label: 'Project recovery and turnaround', href: '/services/project-recovery' },
    { label: 'Management consultancy', href: '/services/management-consultancy' },
  ],
}

export const companyLink = (path = '') => `${company.url}${path}`

export const nav = [
  { label: 'Practice areas', href: '/practice-areas/' },
  { label: 'Public Access', href: '/public-access/' },
  { label: 'About', href: '/about/' },
  { label: 'Fees', href: '/fees/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
]
