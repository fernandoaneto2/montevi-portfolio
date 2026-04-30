import Image from 'next/image'

const logos = [
  { src: '/logos/logo-comtermica.png', alt: 'Comtérmica' },
  { src: '/logos/logo-construdantas.jpg', alt: 'Construdantas' },
  { src: '/logos/Logo-DER-PB.png', alt: 'DER-PB' },
  { src: '/logos/logo-distribuidora.jpg', alt: 'Distribuidora' },
  { src: '/logos/logo-governo-da-paraiba.png', alt: 'Governo da Paraíba' },
  { src: '/logos/logo-mecol.webp', alt: 'Mecol' },
  { src: '/logos/logo-montemorsp.png', alt: 'Montemor' },
  { src: '/logos/logo-neoenergia.svg', alt: 'Neoenergia' },
  { src: '/logos/Logo-pbsaude.png', alt: 'PBSaúde' },
  { src: '/logos/logo-santenge.jpg', alt: 'Santenge' },
  { src: '/logos/logo-sindivarejista.png', alt: 'Sindivarejista' },
  { src: '/logos/logo-uchoa.avif', alt: 'Uchoa' },
]

export default function ClientesCarousel() {
  return (
    <section className="montevi-clientes">
      <div className="montevi-container">
        <div className="montevi-titulo">
          <h2>
            EMPRESAS E SEGMENTOS QUE <strong>CONFIAM NA MONTEVÍ</strong>
          </h2>
        </div>

        <div className="clientes-scroll-container">
          <div className="clientes-scroll">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="cliente-item">
                <div className="cliente-logo">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={70}
                    style={{ width: 'auto', height: 'auto', maxWidth: '180px', maxHeight: '70px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
