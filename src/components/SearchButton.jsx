import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const SearchButton = () => {
  const location = useLocation()
  const [isHovered, setIsHovered] = useState(false)

  // CostumedCharacters sayfasında butonu gizle
  if (location.pathname === '/organizasyonlar/kostumlu-karakterler') {
    return null
  }

  return (
    <div className="fixed bottom-8 left-8 z-50 animate-fade-in">
      <div className="relative">
        {/* Pulse Ring */}
        {isHovered && (
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 pulse-ring"></div>
        )}
        
        {/* Phone Call Button */}
        <a
          href="tel:+905307309009"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        </a>
      </div>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-dark text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg animate-fade-in">
          Hemen Ara: 05307309009
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 w-2 h-2 bg-dark"></div>
        </div>
      )}
    </div>
  )
}

export default SearchButton
