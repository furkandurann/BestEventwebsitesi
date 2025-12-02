import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const themeMap = [
  { test: /hizmetler\/cocuk|palyaco|bubble|yuz-boyama|kostumlu/i, theme: 'theme-kids' },
  { test: /hizmetler\/kurumsal|sirket|hostes|organizasyon/i, theme: 'theme-corporate' },
  { test: /hizmetler\/muzik|dj|sahne|ses-isik/i, theme: 'theme-music' },
  { test: /hizmetler\/yetiskin|dogum-gunu|party/i, theme: 'theme-adult' },
]

export default function ThemeProvider({ children }) {
  const { pathname } = useLocation()
  
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('theme-kids', 'theme-corporate', 'theme-music', 'theme-adult')
    
    const found = themeMap.find(m => m.test.test(pathname))
    root.classList.add(found?.theme || 'theme-kids')
  }, [pathname])
  
  return children
}
