import { Link } from 'react-router-dom'
import ChristmasCountdown from './ChristmasCountdown'
import '../styles/christmas-theme.css'

const SantaClausFeatured = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 py-24 overflow-hidden">
      {/* Kar Animasyonu */}
      <div className="snow-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="snowflake">❄</div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Countdown Banner */}
        <div className="flex justify-center mb-16">
          <ChristmasCountdown />
        </div>

        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            🎅 Noel Baba Kiralama
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yılbaşı Özel - Çocuklarınızın Rüyalarını Gerçeğe Dönüştürün
          </p>
        </div>

        {/* 2 Paket Karşılaştırması */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* PRIVATE NOEL BABA */}
          <div className="christmas-card group hover:scale-105 transition-all duration-300">
            {/* Badge */}
            <div className="absolute -top-4 -right-4 festive-badge">
              ⭐ PREMIUM
            </div>

            {/* Görsel */}
            <div className="relative h-80 rounded-lg overflow-hidden mb-6">
              <img 
                src="/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.44.jpeg"
                alt="Private Noel Baba"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-3xl font-bold">Private Noel Baba</h3>
                <p className="text-white/90 text-sm mt-1">Premium Deneyim</p>
              </div>
            </div>

            {/* Açıklama */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Yeni yıl büyüsüyle çocuklarınız gerçek bir kış masalının içine adım atacak. 
              İstanbul'un tek özel kostümlü Noel Baba'sı, Kar Kızı ve yılbaşı kahramanlarımız; 
              sevilen yeni yıl oyunlarını ve danslarını çocuklarınızla birlikte oynayacak.
            </p>

            {/* Özellikler */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-christmas-red text-xl flex-shrink-0">✨</span>
                <span className="text-gray-700">İstanbul'un tek özel kostümü (premium kalite)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-christmas-red text-xl flex-shrink-0">🎭</span>
                <span className="text-gray-700">Profesyonel sahne sanatçısı</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-christmas-red text-xl flex-shrink-0">🎅</span>
                <span className="text-gray-700">Noel Baba + Kar Kızı + Yılbaşı Karakterleri</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-christmas-red text-xl flex-shrink-0">🎪</span>
                <span className="text-gray-700">Yeni yıl oyunları ve dansları</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-christmas-red text-xl flex-shrink-0">🎁</span>
                <span className="text-gray-700">Hediye dağıtımı + Kar yağdırma + Balon</span>
              </div>
            </div>

            {/* CTA Butonu */}
            <Link 
              to="/organizasyonlar/noel-baba-kiralama"
              className="christmas-button w-full text-center block"
            >
              Detaylı İncele 🎅
            </Link>
          </div>

          {/* STANDART NOEL BABA */}
          <div className="christmas-card group hover:scale-105 transition-all duration-300">
            {/* Badge */}
            <div className="absolute -top-4 -right-4 festive-badge">
              🎄 STANDART
            </div>

            {/* Görsel */}
            <div className="relative h-80 rounded-lg overflow-hidden mb-6">
              <img 
                src="/content/images/noelbaba/noelbabastandart/noelannestandart.jpg"
                alt="Standart Noel Baba"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-3xl font-bold">Standart Noel Baba</h3>
                <p className="text-white/90 text-sm mt-1">Neşeli Kutlama</p>
              </div>
            </div>

            {/* Açıklama */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Çocuklarınızın yüzündeki gülücükleri görmek için ideal paket. 
              Profesyonel animatörümüz Noel Baba kostümüyle çocuklarınıza hediyelerini dağıtacak, 
              balonlar verecek ve büyülü kar yağdıracak. Neşeli bir yılbaşı kutlaması için mükemmel seçenek.
            </p>

            {/* Özellikler */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-christmas-green text-xl flex-shrink-0">🎅</span>
                <span className="text-gray-700">Noel Baba karakteri</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-christmas-green text-xl flex-shrink-0">🎁</span>
                <span className="text-gray-700">Hediye dağıtımı (ebeveynlerin hazırladığı)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-christmas-green text-xl flex-shrink-0">🎈</span>
                <span className="text-gray-700">Balon hediye</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-christmas-green text-xl flex-shrink-0">❄️</span>
                <span className="text-gray-700">Kar yağdırma efekti</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-christmas-green text-xl flex-shrink-0">📸</span>
                <span className="text-gray-700">Fotoğraf çektirme imkanı</span>
              </div>
            </div>

            {/* CTA Butonu */}
            <Link 
              to="/organizasyonlar/noel-baba-kiralama"
              className="christmas-button w-full text-center block"
            >
              Detaylı İncele 🎄
            </Link>
          </div>

        </div>

        {/* Alt Bilgi */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <span className="text-2xl">📞</span>
            <span className="text-gray-700 font-medium">
              Sınırlı Kontenjan! Hemen Rezervasyon Yaptırın
            </span>
            <span className="text-2xl">🎁</span>
          </div>
        </div>
      </div>

      {/* Dekoratif Elementler */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">🎄</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>🎁</div>
    </section>
  )
}

export default SantaClausFeatured
