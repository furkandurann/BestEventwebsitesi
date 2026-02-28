import { trackWhatsAppClick, trackPhoneClick } from '../utils/tracking'

const AdHero = ({
  title,
  backgroundImage,
  subtitle = 'İstanbul\'un Her Semtine Gönderim',
}) => {
  const handleWhatsApp = () => {
    trackWhatsAppClick('Ad Hero', window.location.href)
    window.open(
      `https://wa.me/905307309009?text=${encodeURIComponent(`Merhaba, ${title} hakkında bilgi almak istiyorum`)}`,
      '_blank'
    )
  }

  const handlePhone = () => {
    trackPhoneClick('Ad Hero', window.location.href)
    window.location.href = 'tel:+905307309009'
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sabit arka plan görseli */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* Koyu overlay — alt kısımda güçlü fade-out geçişi */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* İçerik — dikeyde ortalanmış */}
      <div className="relative z-10 w-full text-center max-w-5xl px-6">
        {/* Ana başlık */}
        <p
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
        >
          {title}
        </p>

        {/* Alt yazı */}
        <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
          {subtitle}
        </p>

        {/* CTA Butonları */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
          {/* WhatsApp - Hemen Bilgi Al */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Hemen Bilgi Al
          </button>

          {/* Telefon - Hemen Ara */}
          <button
            onClick={handlePhone}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-amber-500/60 w-full sm:w-auto justify-center"
            style={{
              background: 'linear-gradient(135deg, #b8860b 0%, #daa520 25%, #ffd700 50%, #daa520 75%, #b8860b 100%)',
              color: '#1a0f00',
              boxShadow: '0 0 12px rgba(218,165,32,0.25), 0 0 24px rgba(218,165,32,0.12)'
            }}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Hemen Ara
          </button>
        </div>
      </div>

      {/* Scroll indicator — aşağı kaydır ipucu */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  )
}

export default AdHero
