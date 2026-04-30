'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const containerRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((o) => !o)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeMenu()
      }
    }
    const handleKeydown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        navbar.style.boxShadow =
          window.scrollY > 50 ? '0 2px 10px rgba(10, 36, 99, 0.1)' : 'none'
      }
      let current = ''
      document.querySelectorAll('section[id]').forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          current = section.getAttribute('id')
        }
      })
      document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active')
        }
      })
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu()
    }

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleKeydown)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="navbar" role="navigation" aria-label="Navegação Principal">
      <div className="navbar-container" ref={containerRef}>
        <div className="navbar-logo">
          <Image
            className="logo-icon"
            src="/Images/logo-branca-removebg.png"
            alt="logo da Monteví Engenharia"
            width={32}
            height={32}
          />
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
          <li>
            <a href="#home" className="nav-link" onClick={closeMenu}>
              Início
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link" onClick={closeMenu}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#pilares" className="nav-link" onClick={closeMenu}>
              Qualidades
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link" onClick={closeMenu}>
              Portfólio
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
