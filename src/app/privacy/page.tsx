import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Trevor Drury collects, uses and protects personal information under the GDPR.',
}

const collected = [
  'personal details',
  'family details',
  'lifestyle and social circumstances',
  'goods and services',
  'financial details',
  'education, training and employment details',
  'physical or mental health details',
  'racial or ethnic origin',
  'political opinions',
  'religious, philosophical or other beliefs',
  'trade union membership',
  'sex life or sexual orientation',
  'genetic data',
  'biometric data for the purpose of uniquely identifying a natural person',
  'criminal proceedings, outcomes and sentences, and related security measures',
  'other personal data relevant to instructions to provide legal services, including data specific to the instructions in question',
]

const purposes = [
  'to provide legal services to my clients, including the provision of legal advice and representation in courts, tribunals, arbitrations, and mediations',
  'to keep accounting records and carry out office administration',
  'to take or defend legal or regulatory proceedings or to exercise a lien',
  'to respond to potential complaints or make complaints',
  'to check for potential conflicts of interest in relation to future potential cases',
  'to promote and market my services',
  'to carry out anti-money laundering and terrorist financing checks',
  'to train other barristers and when providing work-shadowing opportunities',
  'to respond to requests for references',
  'when procuring goods and services',
  'to publish legal judgments and decisions of courts and tribunals',
  'as required or permitted by law',
]

const sharedWith = [
  'data processors, such as my Chambers staff, IT support staff, email providers, data storage providers and external IT and accountancy firms',
  'other legal professionals',
  'experts and other witnesses',
  'prosecution authorities',
  'courts and tribunals',
  'the staff in my chambers',
  'trainee barristers',
  'lay clients',
  'family and associates of the person whose personal information I am processing',
  'in the event of complaints, the Head of Chambers, other members of Chambers who deal with complaints, the Bar Standards Board, and the Legal Ombudsman',
  'other regulatory authorities',
  'current, past or prospective employers',
  'education and examining bodies',
  'business associates, professional advisers and trade bodies, e.g. the Bar Council',
  'the intended recipient, where you have asked me to provide a reference',
  'the general public in relation to the publication of legal judgments and decisions of courts and tribunals',
]

const sources = [
  'other legal professionals',
  'experts and other witnesses',
  'prosecution authorities',
  'courts and tribunals',
  'trainee barristers',
  'lay clients',
  'family and associates of the person whose personal information I am processing',
  'in the event of complaints, the Head of Chambers, other members of Chambers who deal with complaints, the Bar Standards Board, and the Legal Ombudsman',
  'other regulatory authorities',
  'current, past or prospective employers',
  'education and examining bodies',
  'business associates, professional advisers and trade bodies, e.g. the Bar Council',
  'the intended recipient, where you have asked me to provide a reference',
  'the general public in relation to the publication of legal judgments and decisions of courts and tribunals',
  'data processors, such as my Chambers staff, IT support staff and email and data storage providers',
  'public sources, such as the press, public registers and law reports',
]

const rights = [
  'Ask for access to your personal information and other supplementary information;',
  'Ask for correction of mistakes in your data or to complete missing information I hold on you;',
  'Ask for your personal information to be erased, in certain circumstances;',
  'Receive a copy of the personal information you have provided to me or have this information sent to a third party. This will be provided to you or the third party in a structured, commonly used and machine-readable format, e.g. a Word file;',
  'Object at any time to processing of your personal information for direct marketing;',
  'Object in certain other situations to the continued processing of your personal information;',
  'Restrict my processing of your personal information in certain circumstances;',
  'Request not to be the subject to automated decision-making which produces legal effects that concern you or affects you in a significant way.',
]

function List({ items, style = 'disc' }: { items: string[]; style?: 'disc' | 'alpha' | 'roman' }) {
  const type = style === 'alpha' ? 'list-[lower-alpha]' : style === 'roman' ? 'list-[lower-roman]' : 'list-disc'
  return (
    <ul className={`${type} space-y-2 pl-6`}>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="pt-6 text-2xl md:text-3xl">{children}</h2>
}

export default function Page() {
  return (
    <>
      <PageHero title="Privacy policy" lead="Privacy notice: General Data Protection Regulation (“GDPR”)" />
      <section className="wrap grid-12 py-24">
        <div className="col-inset max-w-3xl space-y-5 leading-relaxed">
          <p>
            Please read the following information carefully. This privacy notice contains information about the
            information collected, stored and otherwise processed about you and the reasons for the processing. It also
            tells you who I share this information with, the security mechanisms I have put in place to protect your
            data and how to contact me in the event you need further information.
          </p>

          <H2>Who am I?</H2>
          <p>
            I am Trevor Drury and a barrister who collects, uses and is responsible for personal information about you.
            When I do this, I am the ‘controller’ of this information for the purposes of the GDPR and the Data
            Protection Act 2018.
          </p>
          <p>
            If you need to contact me about your data or the processing carried out, you can use the contact details at
            the end of this document.
          </p>

          <H2>What do I do with your information?</H2>
          <h3 className="text-xl">Information collected</h3>
          <p>
            When carrying out the provision of legal services or providing a reference I collect some or all of the
            following personal information that you provide:
          </p>
          <List items={collected} style="alpha" />

          <h3 className="pt-2 text-xl">Information collected from other sources</h3>
          <p>
            The same categories of information may also be obtained from third parties, such as other legal
            professionals or experts, members of the public, your family and friends, witnesses, courts and other
            tribunals, investigators, government departments, regulators, public records and registers.
          </p>

          <h3 className="pt-2 text-xl">How I use your personal information: purposes</h3>
          <p>I may use your personal information for the following purposes:</p>
          <List items={purposes} style="roman" />

          <H2>Whether information has to be provided by you, and why</H2>
          <p>
            If I have been instructed by you or on your behalf on a case or if you have asked for a reference, your
            personal information has to be provided, to enable me to provide you with advice or representation or the
            reference, and to enable me to comply with my professional obligations, and to keep accounting records.
          </p>

          <H2>The legal basis for processing your personal information</H2>
          <p>I rely on the following as the lawful bases on which I collect and use your personal information:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              If you have consented to the processing of your personal information, then I may process your information
              for the purposes set out above to the extent to which you have consented to me doing so.
            </li>
            <li>
              If you are a client, processing is necessary for the performance of a contract for legal services or in
              order to take steps at your request prior to entering into a contract.
            </li>
            <li>
              In relation to information which is in categories (g) to (o) above (these being categories which are
              considered to include particularly sensitive information, and which include information about criminal
              convictions or proceedings) I rely on your consent for any processing for the purposes set out in
              purposes (ii), (iv), (vi), (viii) and (ix) above. I need your consent to carry out processing of this data
              for these purposes. However, if you do not consent to processing for purposes (iv) and (ix) (responding to
              potential complaints and providing a reference) I will be unable to take your case or to provide a
              reference. This is because I need to be able to retain all the material about your case until there is no
              prospect of a complaint and to provide an informed and complete reference.
            </li>
            <li>
              In relation to information in categories (g) to (o) above (these being categories which are considered to
              be particularly sensitive information and include information about criminal convictions or proceedings),
              I am entitled by law to process the information where the processing is necessary for legal proceedings,
              legal advice, or otherwise for establishing, exercising or defending legal rights.
            </li>
            <li>
              In relation to information which is not in categories (g) to (o) above, I rely on my legitimate interest
              and/or the legitimate interests of a third party in carrying out the processing for the purposes set out
              above.
            </li>
            <li>
              In certain circumstances processing may be necessary in order that I can comply with a legal obligation to
              which I am subject (including carrying out anti-money laundering or terrorist financing checks).
            </li>
            <li>The processing is necessary to publish judgments or other decisions of courts or tribunals.</li>
          </ul>

          <H2>Who will I share your personal information with?</H2>
          <p>
            If you are a client, some of the information you provide will be protected by legal professional privilege
            unless and until the information becomes public in the course of any proceedings or otherwise. As a
            barrister I have an obligation to keep your information confidential, except where it otherwise becomes
            public or is disclosed as part of the case or proceedings. It may be necessary to share your information with
            the following:
          </p>
          <List items={sharedWith} />
          <p>
            I may be required to provide your information to regulators, such as the Bar Standards Board, the Financial
            Conduct Authority or the Information Commissioner’s Office. In the case of the Information Commissioner’s
            Office, there is a risk that your information may lawfully be disclosed by them for the purpose of any other
            civil or criminal proceedings, without my consent or yours, which includes privileged information.
          </p>
          <p>
            I may also be required to disclose your information to the police or intelligence services, where required
            or permitted by law.
          </p>

          <H2>Sources of information</H2>
          <p>The personal information I obtain may include information which has been obtained from:</p>
          <List items={sources} />

          <H2>Transfer of your information outside the European Economic Area (EEA)</H2>
          <p>
            This privacy notice is of general application and as such it is not possible to state whether it will be
            necessary to transfer your information out of the EEA in any particular case or for a reference. However, if
            you reside outside the EEA or your case or the role for which you require a reference involves persons or
            organisations or courts and tribunals outside the EEA then it may be necessary to transfer some of your data
            to that country outside of the EEA for that purpose. If you are in a country outside the EEA or if the
            instructions you provide come from outside the EEA then it is inevitable that information will be transferred
            to those countries. If this applies to you and you wish additional precautions to be taken in respect of your
            information, please indicate this when providing initial instructions.
          </p>
          <p>
            Some countries and organisations outside the EEA have been assessed by the European Commission and their
            data protection laws and procedures found to show adequate protection. Most do not. If your information has
            to be transferred outside the EEA, then it may not have the same protections, and you may not have the same
            rights as you would within the EEA.
          </p>
          <p>I may transfer your personal information to the following which are located outside the EEA:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              cloud data storage services based in the USA who have agreed to comply with the EU-U.S. Privacy Shield, in
              order to enable me to store your data and/or backup copies of your data so that I may access your data when
              I need to. The USA does not have the same data protection laws as the EU but the EU-U.S. Privacy Shield has
              been recognised by the European Commission as providing adequate protection. To obtain further details of
              that protection see{' '}
              <a
                className="underline"
                href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/eu-us-privacy-shield_en"
              >
                the European Commission’s guidance on the EU-U.S. Privacy Shield
              </a>
              .
            </li>
            <li>
              cloud data storage services based in Switzerland, in order to enable me to store your data and/or backup
              copies of your data so that I may access your data when I need to. Switzerland does not have the same data
              protection laws as the EU but has been recognised by the European Commission as providing adequate
              protection; see{' '}
              <a
                className="underline"
                href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/adequacy-protection-personal-data-non-eu-countries_en"
              >
                the European Commission’s guidance on adequacy decisions
              </a>
              .
            </li>
          </ul>
          <p>
            If I decide to publish a judgment or other decision of a Court or Tribunal containing your information, then
            this will be published to the world.
          </p>
          <p>
            I will not otherwise transfer personal information outside the EEA except as necessary for providing legal
            services or for any legal proceedings.
          </p>
          <p>If you would like any further information, please use the contact details at the end of this document.</p>

          <H2>How long will I store your personal data?</H2>
          <p>I will normally store all your information:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              until at least 1 year after the expiry of any relevant limitation period (which will usually be 6 years,
              but may be 12 years, or longer where the case includes information relating to a minor), from the date of
              the last item of work carried out, the date of the last payment received or the date on which all
              outstanding payments are written off, whichever is the latest. This is because it may be needed for
              potential legal proceedings. At this point any further retention will be reviewed and the data will be
              marked for deletion or marked for retention for a further period. The latter retention period is likely to
              occur only where the information is needed for legal proceedings, regulatory matters or active complaints.
              Deletion will be carried out (without further notice to you) as soon as reasonably practicable after the
              data is marked for deletion.
            </li>
            <li>
              I will store some of your information which I need to carry out conflict checks for the rest of my career.
              However, this is likely to be limited to your name and contact details and the name of the case. This will
              not include any information within categories (g) to (o) above.
            </li>
            <li>
              Information related to anti-money laundering checks will be retained until five years after the completion
              of the transaction or the end of the business relationship, whichever is the later.
            </li>
            <li>
              Names and contact details held for marketing purposes will be stored indefinitely or until I or my clerks
              become aware or are informed that the individual has ceased to be a potential client.
            </li>
          </ul>

          <H2>Consent</H2>
          <p>
            As explained above, I am relying on your explicit consent to process your information in categories (g) to
            (o) above. You provided this consent when you agreed that I would provide legal services or asked me to
            provide a reference.
          </p>
          <p>
            You have the right to withdraw this consent at any time, but this will not affect the lawfulness of any
            processing activity I have carried out prior to you withdrawing your consent. However, where I also rely on
            other bases for processing your information, you may not be able to prevent processing of your data. For
            example, if you have asked me to work for you and I have spent time on your case, you may owe me money which
            I will be entitled to claim.
          </p>
          <p>
            If there is an issue with the processing of your information, please contact my clerks using the contact
            details below.
          </p>

          <H2>Your rights</H2>
          <p>
            Under the GDPR, you have a number of rights that you can exercise in certain circumstances. These are free of
            charge. In summary, you may have the right to:
          </p>
          <List items={rights} />
          <p>
            If you want more information about your rights under the GDPR please see the Information Commissioner’s
            Office guidance on{' '}
            <a className="underline" href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/">
              individual rights under the GDPR
            </a>
            .
          </p>
          <p>If you want to exercise any of these rights, please:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Use the contact details at the end of this document;</li>
            <li>I may need to ask you to provide other information so that you can be identified;</li>
            <li>
              Please provide a contact address so that you can be contacted to request further information to verify your
              identity;
            </li>
            <li>Provide proof of your identity and address;</li>
            <li>State the right or rights that you wish to exercise.</li>
          </ul>
          <p>I will respond to you within one month from when I receive your request.</p>

          <H2>Marketing emails</H2>
          <p>
            If you wish to unsubscribe from any marketing emails that you have signed up for, you can do so by emailing{' '}
            <a className="underline" href="mailto:trevor.drury@trevordrury.co.uk">
              trevor.drury@trevordrury.co.uk
            </a>
            .
          </p>

          <H2>How to make a complaint</H2>
          <p>
            The GDPR also gives you the right to lodge a complaint with the Information Commissioner’s Office if you are
            in the UK, or with the supervisory authority of the Member State where you work, normally live or where the
            alleged infringement of data protection laws occurred. The Information Commissioner’s Office can be contacted
            at{' '}
            <a className="underline" href="https://ico.org.uk/concerns/">
              ico.org.uk/concerns
            </a>
            .
          </p>

          <H2>Future processing</H2>
          <p>
            I do not intend to process your personal information except for the reasons stated within this privacy
            notice. If this changes, this privacy notice will be amended and emailed to you or placed on the website.
          </p>

          <H2>Changes to this privacy notice</H2>
          <p>
            This privacy notice was published on 23/10/23 and last updated on 23/10/23. I continually review my privacy
            practices and may change this policy from time to time. When I do it will be emailed to you or placed on the
            website.
          </p>

          <H2>Contact details</H2>
          <p>If you have any questions about this privacy notice or the information I hold about you, please contact me.</p>
          <p>
            The best way to contact me is to write to me at The Chambers of Trevor Drury, Chapel Cottage, Burnett,
            Bristol, BS31 2TQ or contact by email at{' '}
            <a className="underline" href="mailto:trevor.drury@trevordrury.co.uk">
              trevor.drury@trevordrury.co.uk
            </a>{' '}
            or by phone at <a className="underline" href="tel:+447760294201">07760 294201</a>.
          </p>
        </div>
      </section>
    </>
  )
}
