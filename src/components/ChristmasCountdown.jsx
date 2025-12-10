import { useState, useEffect } from 'react'

const ChristmasCountdown = () => {
  const [days, setDays] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const checkVisibility = () => {
      const now = new Date()
      const start = new Date('2025-12-05T00:00:00')
      const end = new Date('2026-01-07T23:59:59')
      
      if (now >= start && now <= end) {
        const diff = end - now
        const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24))
        setDays(daysLeft)
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    checkVisibility()
    
    // Her gün güncelle
    const interval = setInterval(checkVisibility, 1000 * 60 * 60) // Her saat kontrol
    
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white px-8 py-4 rounded-full shadow-2xl inline-flex items-center gap-3 animate-pulse">
      <span className="text-2xl">⏰</span>
      <span className="font-bold text-lg">
        Son {days} Gün! Yılbaşı Özel Kampanya
      </span>
      <span className="text-2xl">🎄</span>
    </div>
  )
}

export default ChristmasCountdown
