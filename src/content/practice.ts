export type PracticeArea = {
  slug: string
  title: string
  summary: string
  intro: string[]
  helps: string[]
  clients?: string[]
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'construction-adjudication',
    title: 'Construction adjudication',
    summary:
      'Referral and response documents and representation in the main form of dispute resolution in the UK construction industry.',
    intro: [
      'A considerable volume of my work is construction adjudication. Timescales are tight and the paperwork decides the outcome, so early advice matters, whether you are referring a dispute or responding to one.',
      'I am also a panel adjudicator, so I know what an adjudicator needs to see, and what they do not.',
    ],
    helps: [
      'Advice on whether and how to commence, including jurisdiction and Construction Act payment notice issues',
      'Drafting the Notice of Adjudication and referral',
      'Responses, rejoinders and correspondence with the adjudicator',
      'Representation at adjudication meetings and hearings',
      'Advice on enforcement of a decision',
    ],
  },
  {
    slug: 'payment-disputes',
    title: 'Payment and final account disputes',
    summary: 'Unpaid applications, valuations, variations, set-off and final accounts.',
    intro: [
      'Most construction disputes come back to money: work done and not paid for, or payment withheld. I advise on the contractual and statutory position, and on the most proportionate route to recovery or defence.',
      'I nearly always advocate negotiation and alternative dispute resolution first. Court proceedings are the last resort, not the first.',
    ],
    helps: [
      'Interim applications, payment and pay less notices',
      'Valuation of variations and loss and expense',
      'Withholding, set-off and retention',
      'Final account disputes between employers, contractors and subcontractors',
    ],
  },
  {
    slug: 'defects-design-and-delay',
    title: 'Defects, design and delay',
    summary: 'Defective work, design responsibility, delay and its financial consequences.',
    intro: [
      'I advise on disputes over defective work and its rectification, design responsibility, and delay to projects and the financial consequences that follow.',
      'My background as a chartered surveyor and chartered construction manager means I can read a programme, a specification and a set of valuations as well as the contract.',
    ],
    helps: [
      'Defects, remedial works and the measure of recovery',
      'Design and build and professional appointment issues',
      'Extension of time and delay claims',
      'Planning permission and building control issues arising in a dispute',
    ],
  },
  {
    slug: 'contracts-and-settlements',
    title: 'Contracts and settlement agreements',
    summary: 'Drafting and amending building contracts, and recording a negotiated settlement.',
    intro: [
      'I draft contracts and amendments to contracts, and settlement agreements once a deal has been negotiated, so that what was agreed is what is enforceable.',
    ],
    helps: [
      'Bespoke contract amendments to standard forms',
      'Settlement and Tomlin-style agreements',
      'Advice on interpreting an existing contract before a dispute starts',
    ],
  },
  {
    slug: 'mediation-and-adr',
    title: 'Mediation and ADR',
    summary: 'Representing clients in mediation and negotiation, and appearing as an accredited mediator.',
    intro: [
      'Where it is possible, I advocate negotiation and alternative dispute resolution to avoid court proceedings. I represent clients in mediations and I am an accredited mediator.',
      'Acting for a party and acting as a neutral are separate roles. I will not do both on the same dispute.',
    ],
    helps: [
      'Preparing a position paper and mediation strategy',
      'Representation at mediation',
      'Settlement negotiation and drafting',
      'Appointment as mediator or adjudicator in a separate matter',
    ],
  },
  {
    slug: 'court-advocacy',
    title: 'Advocacy and legal opinion',
    summary: 'Written opinion and representation at hearings, where you or your solicitors conduct the proceedings.',
    intro: [
      'I provide written advice and legal opinion on the merits and strategy of a dispute, and I represent clients at hearings.',
      'I do not conduct litigation. If court proceedings are needed, you can bring them yourself as a litigant in person with my advice and advocacy behind you, or instruct a solicitor, and I will work alongside them. See the Public Access page for how this works.',
    ],
    helps: [
      'Advice on prospects, evidence and costs',
      'Drafting statements of case and legal documents (for you to issue and serve)',
      'Representation at hearings',
      'Working with your solicitor where proceedings are issued',
    ],
  },
]

export const workFor = [
  'Private individuals and homeowners in disputes with their builder over payment, defective work and its rectification',
  'Builders, main contractors, trade contractors and subcontractors, over payment, delay, defects, planning and building control',
  'Property developers in disputes with a contractor or trade contractor',
  'Local authorities in disputes with their contractors or design consultants',
]

export const projectTypes =
  'Housing, offices, commercial and warehouse, schools, recreation, roads and engineering projects.'
