import type { MetadataRoute } from 'next'
import { practiceAreas } from '@/content/practice'
import { site } from '@/content/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', 'about', 'practice-areas', 'public-access', 'fees', 'faq', 'contact', 'complaints', 'privacy', 'disclaimer', 'copyright',
    ...practiceAreas.map((p) => `practice-areas/${p.slug}`)]
  return paths.map((p) => ({ url: `${site.url}/${p ? p + '/' : ''}` }))
}
