import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const themeMap = [
  { test: /(?:hizmetler|organizasyonlar)\/(cocuk|palyaco|bubble|yuz-boyama|kostumlu|maskot|konsept|dogum-gunu|sihirbaz|magic-show|pamuk-seker|cocuk-etkinlikleri)/i, theme: 'theme-kids' },
  { test: /(?:hizmetler|organizasyonlar)\/(kurumsal|sirket|hostes|organizasyon|acilis)/i, theme: 'theme-corporate' },
  { test: /(?:hizmetler|organizasyonlar)\/(muzik|dj|sahne|ses-isik|dans|dansci)/i, theme: 'theme-music' },
  { test: /(?:hizmetler|organizasyonlar)\/(yetiskin|dogum-gunu|party)/i, theme: 'theme-adult' },
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
