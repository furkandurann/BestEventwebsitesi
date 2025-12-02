import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Browser'ın otomatik scroll restoration'ını devre dışı bırak
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    
    // Sayfayı hemen en üste scroll et
    window.scrollTo(0, 0)
    
    // Ek güvenlik için document.documentElement'i de sıfırla
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

export default ScrollToTop
