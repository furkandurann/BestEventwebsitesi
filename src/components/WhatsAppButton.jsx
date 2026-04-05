import { useLocation } from 'react-router-dom'
import { trackWhatsAppClick, trackPhoneClick } from '../utils/tracking'

const serviceMessages = {
  '/organizasyonlar/palyaco-kiralama': 'Merhabalar, palyaço kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/magic-show': 'Merhabalar, sihirbazlık gösterisi hakkında bilgi alabilir miyim?',
  '/organizasyonlar/bubble-show': 'Merhabalar, bubble show gösterisi hakkında bilgi alabilir miyim?',
  '/organizasyonlar/dogum-gunu-organizasyonu': 'Merhabalar, doğum günü organizasyonu hakkında bilgi alabilir miyim?',
  '/organizasyonlar/dogum-gunu': 'Merhabalar, doğum günü organizasyonu hakkında bilgi alabilir miyim?',
  '/organizasyonlar/konsept-dogum-gunu': 'Merhabalar, konsept doğum günü organizasyonu hakkında bilgi alabilir miyim?',
  '/organizasyonlar/full-paket-organizasyon': 'Merhabalar, full paket organizasyon hakkında bilgi alabilir miyim?',
  '/organizasyonlar/kostumlu-karakterler': 'Merhabalar, kostümlü karakter kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/maskot-kiralama': 'Merhabalar, maskot kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/kiz-maskotlari': 'Merhabalar, kız maskotları kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/erkek-maskotlari': 'Merhabalar, erkek maskotları kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/yuz-boyama': 'Merhabalar, profesyonel yüz boyama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/profesyonel-makyaj': 'Merhabalar, profesyonel yüz boyama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/pamuk-seker': 'Merhabalar, pamuk şeker arabası kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/cocuk-etkinlikleri': 'Merhabalar, çocuk etkinlikleri hakkında bilgi alabilir miyim?',
  '/organizasyonlar/cocuk-masa-sandalye': 'Merhabalar, çocuk masa sandalye kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/transformers-robot': 'Merhabalar, Transformers robot gösterisi hakkında bilgi alabilir miyim?',
  '/organizasyonlar/sisme-oyun-parki': 'Merhabalar, şişme oyun parkı kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/jonklor': 'Merhabalar, jonglör gösterisi hakkında bilgi alabilir miyim?',
  '/organizasyonlar/atolye-etkinlikleri': 'Merhabalar, atölye etkinlikleri hakkında bilgi alabilir miyim?',
  '/organizasyonlar/cikolata-selalesi': 'Merhabalar, çikolata şelalesi kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/ates-gosterisi': 'Merhabalar, ateş gösterisi hakkında bilgi alabilir miyim?',
  '/organizasyonlar/tahtabacak': 'Merhabalar, tahta bacak gösterisi hakkında bilgi alabilir miyim?',
  '/organizasyonlar/dans-etkinlikleri': 'Merhabalar, dans etkinlikleri hakkında bilgi alabilir miyim?',
  '/organizasyonlar/muzik-etkinlikleri': 'Merhabalar, müzik etkinlikleri hakkında bilgi alabilir miyim?',
  '/organizasyonlar/dj-kiralama': 'Merhabalar, DJ kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/muzisyen-kiralama': 'Merhabalar, müzisyen kiralama hakkında bilgi alabilir miyim?',
  '/organizasyonlar/karaoke-etkinligi': 'Merhabalar, karaoke etkinliği hakkında bilgi alabilir miyim?',
  '/organizasyonlar/gezegen-tanitim': 'Merhabalar, gezegen tanıtım etkinliği hakkında bilgi alabilir miyim?',
  '/organizasyonlar/vr-sanal-gerceklik': 'Merhabalar, VR sanal gerçeklik deneyimi hakkında bilgi alabilir miyim?',
  '/organizasyonlar/noel-baba-kiralama': 'Merhabalar, Noel Baba kiralama hakkında bilgi alabilir miyim?',
  '/organik-pastalar': 'Merhabalar, organik pastalar hakkında bilgi alabilir miyim?',
}

const WhatsAppButton = () => {
  const { pathname } = useLocation()
  const phoneNumber = '+905307309009'
  const message = serviceMessages[pathname] || 'Merhabalar, çocuk etkinlikleri hakkında bilgi alabilir miyim?'

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('WhatsApp Button', window.location.href)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handlePhoneClick = () => {
    trackPhoneClick('Phone Button', window.location.href)
  }

  return (
    <>
      {/* Mobile — alt bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden h-14">
        {/* Hemen Ara */}
        <a
          href="tel:+905307309009"
          onClick={handlePhoneClick}
          className="flex items-center justify-center gap-1.5 w-1/2 bg-white text-gray-900 py-3 border-t border-gray-200 font-semibold text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          Hemen Ara
        </a>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center gap-1.5 w-1/2 bg-[#25D366] text-white py-3 font-semibold text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp
        </button>
      </div>

      {/* Desktop — sol telefon (gold), sağ WhatsApp (gold) */}
      <a
        href="tel:+905307309009"
        onClick={handlePhoneClick}
        className="hidden md:flex fixed left-6 bottom-8 z-50 items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-xl border border-amber-500/40"
        style={{
          background: 'linear-gradient(135deg, rgba(30,20,10,0.92) 0%, rgba(45,30,15,0.95) 100%)',
          color: '#daa520',
          boxShadow: '0 4px 24px rgba(218,165,32,0.15), 0 0 0 1px rgba(218,165,32,0.1)',
        }}
        aria-label="Hemen Ara"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#daa520' }}>
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
        <span style={{ letterSpacing: '0.02em' }}>05307309009</span>
      </a>

      <button
        onClick={handleWhatsAppClick}
        className="hidden md:flex fixed right-6 bottom-8 z-50 items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-xl border border-amber-500/40"
        style={{
          background: 'linear-gradient(135deg, rgba(30,20,10,0.92) 0%, rgba(45,30,15,0.95) 100%)',
          color: '#daa520',
          boxShadow: '0 4px 24px rgba(218,165,32,0.15), 0 0 0 1px rgba(218,165,32,0.1)',
        }}
        aria-label="WhatsApp ile iletişime geç"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#daa520' }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span style={{ letterSpacing: '0.02em' }}>WhatsApp</span>
      </button>
    </>
  )
}

export default WhatsAppButton
