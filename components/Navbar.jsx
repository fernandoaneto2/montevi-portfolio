'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const servicoLinks = [
  { href: '/servicos/subestacoes-e-geradores', label: 'Subestações e Geradores' },
  { href: '/servicos/geracao-fotovoltaica', label: 'Geração Fotovoltaica' },
  { href: '/servicos/projetos-de-engenharia', label: 'Projetos de Engenharia' },
  { href: '/servicos/carregadores-eletricos', label: 'Carregadores Elétricos' },
  { href: '/servicos/redes-de-distribuicao', label: 'Redes de Distribuição' },
  { href: '/servicos/iluminacao-publica', label: 'Iluminação Pública' },
]

// Ordem espelha a sequência das seções na home page
const navItems = [
  { type: 'link', href: '/#home', label: 'Início', section: 'home' },
  { type: 'link', href: '/#about', label: 'Sobre', section: 'about' },
  { type: 'dropdown' },
  { type: 'link', href: '/#pilares', label: 'Qualidades', section: 'pilares' },
  { type: 'link', href: '/#portfolio', label: 'Portfólio', section: 'portfolio' },
  { type: 'link', href: '/#contact', label: 'Contato', section: 'contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const containerRef = useRef(null)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isServicePage = pathname.startsWith('/servicos/')

  const closeAll = () => { setMenuOpen(false); setDropOpen(false) }
  const toggleMenu = () => setMenuOpen((o) => !o)
  const toggleDrop = (e) => { e.stopPropagation(); setDropOpen((o) => !o) }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setMenuOpen(false)
        setDropOpen(false)
      }
    }
    const handleKeydown = (e) => {
      if (e.key === 'Escape') { setMenuOpen(false); setDropOpen(false) }
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) { setMenuOpen(false); setDropOpen(false) }
    }
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleKeydown)
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        navbar.style.boxShadow =
          window.scrollY > 50 ? '0 2px 10px rgba(10, 36, 99, 0.1)' : 'none'
      }
      if (!isHome) return
      let current = ''
      document.querySelectorAll('section[id]').forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          current = section.getAttribute('id')
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  useEffect(() => { closeAll() }, [pathname])

  return (
    <nav className="navbar" role="navigation" aria-label="Navegação Principal">
      <div className="navbar-container" ref={containerRef}>
        <div className="navbar-logo">
          <Link href="/" onClick={closeAll}>
            <Image
              className="logo-icon"
              src="/Images/logo-branca-removebg.png"
              alt="Montevi Engenharia — Início"
              width={32}
              height={32}
            />
          </Link>
          <span className="logo-text"></span>
        </div>

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          aria-controls="navMenu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu${menuOpen ? ' active' : ''}`} id="navMenu">
          {navItems.map((item, i) => {
            if (item.type === 'link') {
              const isActive = isHome && activeSection === item.section
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link${isActive ? ' active' : ''}`}
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            }

            // Dropdown de serviços
            return (
              <li key="servicos" className="nav-item-drop">
                <button
                  className={`nav-link nav-drop-trigger${isServicePage ? ' active' : ''}`}
                  aria-haspopup="true"
                  aria-expanded={dropOpen}
                  onClick={toggleDrop}
                >
                  Serviços
                  <svg
                    className={`nav-drop-arrow${dropOpen ? ' open' : ''}`}
                    aria-hidden="true"
                    width="10"
                    height="10"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {dropOpen && (
                  <ul className="nav-dropdown" role="menu">
                    <li role="none">
                      <Link
                        href="/#services"
                        className="nav-dropdown__anchor"
                        role="menuitem"
                        onClick={closeAll}
                      >
                        Ver todos os serviços
                      </Link>
                    </li>
                    <li className="nav-dropdown__divider" role="none" />
                    {servicoLinks.map((s) => (
                      <li key={s.href} role="none">
                        <Link
                          href={s.href}
                          className={`nav-dropdown__item${pathname === s.href ? ' nav-dropdown__item--active' : ''}`}
                          role="menuitem"
                          onClick={closeAll}
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
