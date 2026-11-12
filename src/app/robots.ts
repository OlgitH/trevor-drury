import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

export const dynamic = 'force-static'

/** Known AI-training and AI-retrieval crawlers. Ordinary search engines remain welcome. robots.txt is advisory. */
const aiCrawlers = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'PerplexityBot',
  'Perplexity-User',
  'Bytespider',
  'Amazonbot',
  'meta-externalagent',
  'FacebookBot',
  'cohere-ai',
  'Diffbot',
  'ImagesiftBot',
  'Omgilibot',
  'DuckAssistBot',
  'MistralAI-User',
  'YouBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiCrawlers, disallow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  }
}
