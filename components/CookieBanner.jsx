'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p className="cookie-banner__text">
        Utilizamos cookies para analisar o uso do site e melhorar sua
        experiência.{' '}
        <Link href="/politica-de-privacidade" className="cookie-banner__link">
          Saiba mais
        </Link>
        .
      </p>
      <div className="cookie-banner__btns">
        <button onClick={decline} className="cookie-banner__btn cookie-banner__btn--secondary">
          Recusar
        </button>
        <button onClick={accept} className="cookie-banner__btn cookie-banner__btn--primary">
          Aceitar
        </button>
      </div>
    </div>
  )
}
