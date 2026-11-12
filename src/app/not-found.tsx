import Link from 'next/link'
import PageHero from '@/components/PageHero'

export default function NotFound() {
  return (
    <>
      <PageHero title="Page not found" lead="The page you are looking for does not exist." />
      <div className="wrap grid-12 py-24"><div className="col-lead-offset"><Link href="/" className="btn-keyline">Back to home</Link></div></div>
    </>
  )
}
