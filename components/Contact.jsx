'use client'

import { useState, useRef } from 'react'

export default function Contact() {
  const [notification, setNotification] = useState(null)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  function showNotification(message, type = 'info') {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const name = nameRef.current.value.trim()
    const email = emailRef.current.value.trim()
    const message = messageRef.current.value.trim()

    if (!name) {
      showNotification('Por favor, insira seu nome', 'error')
      nameRef.current.focus()
      return
    }
    if (!email) {
      showNotification('Por favor, insira seu e-mail', 'error')
      emailRef.current.focus()
      return
    }
    if (!isValidEmail(email)) {
      showNotification('Por favor, insira um e-mail válido', 'error')
      emailRef.current.focus()
      return
    }
    if (!message) {
      showNotification('Por favor, insira uma mensagem', 'error')
      messageRef.current.focus()
      return
    }

    const mailtoLink = `mailto:montevi.comercial@gmail.com?subject=Novo Contato de ${encodeURIComponent(
      name
    )}&body=Nome: ${encodeURIComponent(name)}%0AE-mail: ${encodeURIComponent(
      email
    )}%0A%0AMensagem:%0A${encodeURIComponent(message)}`

    showNotification('✓ Mensagem preparada! Abrindo cliente de e-mail...', 'success')

    setTimeout(() => {
      window.location.href = mailtoLink
    }, 1500)

    e.target.reset()
  }

  const notifColors = { success: '#10b981', error: '#ef4444', info: '#0a2463' }

  return (
    <section id="contact" className="contact" role="region" aria-label="Contato">
      <h2 className="section-title">Entre em Contato</h2>
      <p className="section-subtitle">
        Estamos prontos para levar excelência ao seu próximo projeto
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Telefone</h3>
            <p><strong>Comercial</strong></p>
            <p><a href="tel:+5583986280101">(83) 98628-0101</a></p>
            <p><strong>Suporte técnico</strong></p>
            <p><a href="tel:+5511922763114">(11) 92276-3114</a></p>
            <p><a href="tel:+5583998177249">(83) 99817-7249</a></p>
          </div>
          <div className="contact-item">
            <h3>E-mail</h3>
            <p>
              <a href="mailto:montevi.comercial@gmail.com">montevi.comercial@gmail.com</a>
            </p>
          </div>
          <div className="contact-item">
            <h3>Redes Sociais</h3>
            <p>
              <a
                href="https://instagram.com/montevieng"
                target="_blank"
                rel="noopener noreferrer"
              >
                @montevieng
              </a>
            </p>
          </div>
          <div className="contact-item">
            <h3>Localização</h3>
            <p>João Pessoa - PB</p>
          </div>
        </div>

        <form className="contact-form" id="contactForm" noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Seu Nome"
              required
              aria-label="Nome"
              ref={nameRef}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Seu E-mail"
              required
              aria-label="E-mail"
              ref={emailRef}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Sua Mensagem"
              rows="5"
              required
              aria-label="Mensagem"
              ref={messageRef}
            ></textarea>
          </div>
          <button type="submit" className="cta-button" aria-label="Enviar mensagem">
            Enviar Mensagem
          </button>
        </form>
      </div>

      {notification && (
        <div
          role="alert"
          aria-live="polite"
          className={`notification notification-${notification.type}`}
          style={{
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1rem 1.5rem',
            backgroundColor: notifColors[notification.type] || notifColors.info,
            color: 'white',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 2000,
            fontWeight: 500,
            maxWidth: '90vw',
            fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
          }}
        >
          {notification.message}
        </div>
      )}
    </section>
  )
}
