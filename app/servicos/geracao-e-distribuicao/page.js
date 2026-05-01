'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Redirect 301 configurado também em vercel.json (CDN-level).
// Este componente serve de fallback para o HTML estático.
export default function OldRoute() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/servicos/subestacoes-e-geradores')
  }, [router])
  return null
}
