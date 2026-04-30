import './globals.css'

export const metadata = {
  title: 'Monteví Engenharia',
  description: 'Monteví Engenharia - Soluções em Engenharia Elétrica, Civil e Complementar',
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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
