export const dynamic = 'force-static'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://montevi-portfolio-git-main-fernandoaneto2s-projects.vercel.app'

const servicoRoutes = [
  '/servicos/subestacoes-e-geradores',
  '/servicos/redes-de-distribuicao',
  '/servicos/iluminacao-publica',
  '/servicos/projetos-e-analises',
  '/servicos/geracao-distribuida',
]

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...servicoRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
