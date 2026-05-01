import './globals.css'
import CookieBanner from '@/components/CookieBanner'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://montevi-portfolio-git-main-fernandoaneto2s-projects.vercel.app'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Montevi Engenharia — Engenharia Elétrica em João Pessoa/PB',
    template: '%s | Montevi Engenharia',
  },
  description:
    'Projeto, execução e manutenção em subestações, geração distribuída e redes elétricas em João Pessoa/PB. Domínio completo das normas e ferramentas da Energisa.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Montevi Engenharia',
    title: 'Montevi Engenharia — Engenharia Elétrica em João Pessoa/PB',
    description:
      'Projeto, execução e manutenção em subestações, geração distribuída e redes elétricas em João Pessoa/PB.',
    images: [
      {
        url: '/Images/subestacao-predial.png',
        width: 1200,
        height: 630,
        alt: 'Montevi Engenharia — Subestações e Engenharia Elétrica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Montevi Engenharia — Engenharia Elétrica em João Pessoa/PB',
    description:
      'Projeto, execução e manutenção em subestações, geração distribuída e redes elétricas em João Pessoa/PB.',
    images: ['/Images/subestacao-predial.png'],
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: [
      { url: '/logos/logo-montevi-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/logos/logo-montevi-48x48.png', sizes: '96x96', type: 'image/png' },
      { url: '/logos/logo-montevi-48x48.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/logos/logo-montevi-48x48.png', sizes: '180x180' }],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a2463',
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_URL,
  name: 'Montevi Engenharia',
  legalName: 'Metta Engenharia LTDA',
  description:
    'Projeto, execução e manutenção em subestações, geração distribuída e redes elétricas em João Pessoa/PB.',
  url: SITE_URL,
  telephone: '+55-11-92276-3114',
  email: 'contato@montevi.eng.br',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'João Pessoa',
    addressRegion: 'PB',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -7.1195,
    longitude: -34.845,
  },
  foundingDate: '2024-03',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo principal
        </a>
        {children}
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </body>
    </html>
  )
}
