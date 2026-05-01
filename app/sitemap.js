export const dynamic = 'force-static'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://montevi-portfolio-git-main-fernandoaneto2s-projects.vercel.app'

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/servicos/geracao-e-distribuicao`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
