import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import FAQSection from '../../components/FAQSection'
import SantaClausHeroSlider from '../../components/SantaClausHeroSlider'
import '../../styles/christmas-theme.css'

const SantaClausRental = () => {
  const [selectedTab, setSelectedTab] = useState('standard')

  // FAQ Verileri
  const faqs = [
    {
      question: 'Noel Baba kiralama hizmeti nasıl çalışır?',
      answer: 'İletişim numaramızdan rezervasyon yaparak etkinlik tarihinizi, saatinizi ve paket tercihinizi belirtebilirsiniz. Ekibimiz size özel bir organizasyon planı hazırlar.'
    },
    {
      question: 'Private ve Standart paket arasındaki fark nedir?',
      answer: 'Private pakette İstanbul\'un tek özel kostümlü Noel Baba\'sı, profesyonel sahne sanatçısı, Kar Kızı ve yeni yıl oyunları bulunur. Standart pakette ise animatör eşliğinde Noel Baba karakteri, hediye dağıtımı ve kar yağdırma hizmeti verilir.'
    },
    {
      question: 'Hediyeleri kim hazırlıyor?',
      answer: 'Hediyeler ebeveynler tarafından hazırlanır. Noel Baba\'mız bu hediyeleri büyük bir coşku ve tören eşliğinde çocuklarınıza dağıtır.'
    },
    {
      question: 'Hangi bölgelere hizmet veriyorsunuz?',
      answer: 'İstanbul\'un tüm ilçelerine hizmet vermekteyiz. Detaylı bilgi için bizimle iletişime geçebilirsiniz.'
    },
    {
      question: 'Kaç kişilik etkinliklere hizmet veriyorsunuz?',
      answer: 'Küçük aile kutlamalarından büyük kurumsal etkinliklere kadar her ölçekte hizmet vermekteyiz.'
    },
    {
      question: 'Rezervasyon için ne kadar önceden başvurmalıyım?',
      answer: 'Yılbaşı dönemi çok yoğun geçtiği için en az 1-2 hafta önceden rezervasyon yapmanızı öneriyoruz. Kontenjan dolmadan yerini ayırtmak için hemen iletişime geçin!'
    },
    {
      question: 'Süsleme hizmeti de veriyor musunuz?',
      answer: 'Evet! Noel Baba kiralama hizmetimize ek olarak Noel temalı süsleme hizmeti de sunuyoruz. Çam ağacı, ışıklandırma ve dekorasyon malzemeleriyle mekanınızı büyülü bir atmosfere dönüştürüyoruz.'
    },
    {
      question: 'Etkinlik ne kadar sürer?',
      answer: 'Standart etkinlikler genellikle 1-2 saat arası sürer. Private paket için süre ihtiyaca göre özelleştirilebilir.'
    }
  ]

  // Fotoğraf Galerisi
  const privatePhotos = [
    '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.44.jpeg',
    '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45.jpeg',
    '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45 (1).jpeg'
  ]

  const standardPhotos = [
    '/content/images/noelbaba/noelbabastandart/noelannestandart.webp',
    '/content/images/noelbaba/noelbabastandart/7BDA73F5-5BE9-419C-AD20-98CB8A679C51.webp',
    '/content/images/noelbaba/noelbabastandart/8B071122-174A-4DFE-AFBB-E1A5108E1009 2.jpg',
    '/content/images/noelbaba/noelbabastandart/8211BF23-166D-4080-B7CD-AA8C757CDB59 2.jpg'
  ]

  const decorationPhotos = [
    '/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.44.jpeg',
    '/content/images/noelbaba/noelbabastandart/7BDA73F5-5BE9-419C-AD20-98CB8A679C51.webp'
  ]

  return (
    <>
      <Seo 
        title="🎅 Noel Baba Kiralama İstanbul | Yılbaşı Özel Hizmet - Best Event"
        description="İstanbul'un en özel Noel Baba kiralama hizmeti. Private ve Standart paketlerle çocuklarınızın rüyalarını gerçeğe dönüştürün. Kar Kızı, hediye dağıtımı, kar yağdırma ve daha fazlası!"
        keywords="noel baba kiralama istanbul, noel baba, yılbaşı etkinliği, çocuk etkinliği, noel süsleme"
        ogImage="/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45.jpeg"
      />

      {/* Hero Slider - Doğum Günü Organizasyonu Gibi */}
      <SantaClausHeroSlider />

      {/* Kampanya Banner - %25 İndirim */}
      <section className="py-6 bg-gradient-to-r from-red-600 via-green-700 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-bold text-lg md:text-xl animate-pulse">
            %25 indirim son 4 gün
          </p>
        </div>
      </section>

      {/* Paket Seçimi - Başlık Kaldırıldı */}
      <section className="py-16 bg-gradient-to-b from-red-900 via-green-900 to-red-800">
        <div className="container mx-auto px-4">
          {/* Tab Seçimi - Daha Net Tıklanabilir */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full shadow-2xl p-2 border-2 border-white/30">
              <button
                onClick={() => setSelectedTab('standard')}
                className={`px-8 py-4 rounded-full font-bold text-base transition-all duration-300 relative ${
                  selectedTab === 'standard'
                    ? 'bg-white text-red-700 shadow-2xl scale-110'
                    : 'text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                <span className="relative z-10">🎄 Standart Noel Baba</span>
                {selectedTab === 'standard' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-700/20 rounded-full blur-xl"></div>
                )}
              </button>
              <button
                onClick={() => setSelectedTab('private')}
                className={`px-8 py-4 rounded-full font-bold text-base transition-all duration-300 relative $

{
                  selectedTab === 'private'
                    ? 'bg-white text-red-700 shadow-2xl scale-110'
                    : 'text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                <span className="relative z-10">⭐ Private Noel Baba</span>
                {selectedTab === 'private' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-full blur-xl"></div>
                )}
              </button>
            </div>
          </div>

          {/* Paket İçeriği - Apple Standartları */}
          <div className="max-w-6xl mx-auto">
            {selectedTab === 'standard' && (
              <div className="space-y-12">
                {/* Standart Kart */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Görsel */}
                    <div>
                      <img 
                        src="/content/images/noelbaba/noelbabastandart/noelannestandart.webp"
                        alt="Standart Noel Baba"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                      />
                    </div>

                    {/* İçerik */}
                    <div className="flex flex-col justify-center">
                      <div className="inline-block self-start bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-lg">
                        🎄 STANDART
                      </div>
                      
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Standart Noel Baba
                      </h2>
                      
                      <h3 className="text-lg font-medium text-green-600 mb-6">
                        Neşeli Kutlama
                      </h3>
                      
                      <p className="text-sm text-gray-700 leading-relaxed mb-8">
                        Çocuklarınızın yüzündeki gülücükleri görmek için ideal paket. 
                        Profesyonel animatörümüz Noel Baba kostümüyle çocuklarınıza hediyelerini dağıtacak, 
                        balonlar verecek ve büyülü kar yağdıracak.
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 text-xl flex-shrink-0">🎅</span>
                          <span className="text-gray-700 text-sm">Noel Baba karakteri</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 text-xl flex-shrink-0">🎁</span>
                          <span className="text-gray-700 text-sm">Hediye dağıtımı</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 text-xl flex-shrink-0">🎈</span>
                          <span className="text-gray-700 text-sm">Balon hediye</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 text-xl flex-shrink-0">❄️</span>
                          <span className="text-gray-700 text-sm">Kar yağdırma efekti</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 text-xl flex-shrink-0">📸</span>
                          <span className="text-gray-700 text-sm">Fotoğraf çektirme</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery - Sadece Standart Fotoğraflar */}
                <div>
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    📸 Standart Galeri
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {standardPhotos.map((photo, index) => (
                      <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-square bg-white/10 backdrop-blur-sm">
                        <img 
                          src={photo}
                          alt={`Standart Noel Baba ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'private' && (
              <div className="space-y-12">
                {/* Ana Kart */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Görsel */}
                    <div>
                      <img 
                        src="/content/images/noelbaba/privatenoelbaba/WhatsApp Image 2025-12-05 at 12.05.45.jpeg"
                        alt="Private Noel Baba"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                        style={{ objectPosition: '40% center' }}
                      />
                    </div>

                    {/* İçerik - Apple Tipografi */}
                    <div className="flex flex-col justify-center">
                      <div className="inline-block self-start bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-lg">
                        ⭐ PREMIUM
                      </div>
                      
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Private Noel Baba
                      </h2>
                      
                      <h3 className="text-lg font-medium text-red-600 mb-6">
                        Kostüm değil Kaftan!
                      </h3>
                      
                      <p className="text-sm text-gray-700 leading-relaxed mb-8">
                        Yeni yıl tatillerinde Noel Baba ve Kar Kızı'nın size misafir olmasını istiyorsanız — hemen arayın!
                      </p>

                      <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-6 mb-6">
                        <h4 className="font-bold text-base text-gray-900 mb-4">
                          🎄 Programda sizi neler bekliyor?
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Yeni yıl karakterleriyle çocuklarınız gerçek bir kış masalına adım atacak. 
                          Noel Baba, Kar Kızı ve yılbaşı kahramanımız; sevilen yeni yıl oyunlarını ve 
                          danslarını birlikte oynatacak, kendi masalsı sırlarını paylaşacak, çocukların 
                          şiirlerini ve şarkılarını dinleyecek ve ebeveynlerin hazırladığı hediyeleri dağıtacak.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">✨</span>
                          <span className="text-gray-700 text-sm">İstanbul'un tek özel kaftanı</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">🎭</span>
                          <span className="text-gray-700 text-sm">Profesyonel sahne sanatçısı</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">🎅</span>
                          <span className="text-gray-700 text-sm">Noel Baba + Kar Kızı</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">🎪</span>
                          <span className="text-gray-700 text-sm">Yeni yıl oyunları ve dansları</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">🎁</span>
                          <span className="text-gray-700 text-sm">Hediye dağıtımı</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 text-xl flex-shrink-0">❄️</span>
                          <span className="text-gray-700 text-sm">Kar yağdırma efekti</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Private Fotoğraf Kartları - Farklı Açıklamalar */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Fotoğraf 1 */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                    <img 
                      src={privatePhotos[0]}
                      alt="Özel Kaftan Detayı"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-base text-gray-900 mb-2">
                        Özel Kaftan Detayı
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        İstanbul'da sadece bizde olan özel dikim kaftan. Premium kumaş 
                        ve el işçiliği ile hazırlanmış, çocukların gözlerini kamaştıracak 
                        muhteşem detaylar.
                      </p>
                    </div>
                  </div>

                  {/* Fotoğraf 2 */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                    <img 
                      src={privatePhotos[1]}
                      alt="Sahne Sanatçısı Performansı"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-base text-gray-900 mb-2">
                        Sahne Sanatçısı Performansı
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Animatör değil, profesyonel sahne sanatçısı. Yılların deneyimi 
                        ve tiyatro eğitimi ile çocuklarınıza unutulmaz bir performans sunuyor.
                      </p>
                    </div>
                  </div>

                  {/* Fotoğraf 3 */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                    <img 
                      src={privatePhotos[2]}
                      alt="Kar Kızı ile Büyülü Anlar"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-base text-gray-900 mb-2">
                        Kar Kızı ile Büyülü Anlar
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Noel Baba'nın yanında Kar Kızı da etkinliğinizde. İkili performans 
                        ile çocukların hayal dünyası gerçeğe dönüşüyor, masalsı anlar yaşanıyor.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gallery - Sadece Private Fotoğraflar */}
                <div>
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    📸 Private Galeri
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {privatePhotos.map((photo, index) => (
                      <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-square bg-white/10 backdrop-blur-sm">
                        <img 
                          src={photo}
                          alt={`Private Noel Baba ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Süsleme Hizmeti - Kırmızı Temalı */}
      <section className="py-16 bg-gradient-to-b from-red-800 via-green-800 to-red-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              🎀 Noel Süsleme Hizmeti
            </h2>
            <p className="text-base text-white/80 max-w-2xl mx-auto">
              Mekanınızı yılbaşı büyüsüyle süsleyin
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {decorationPhotos.map((photo, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <img 
                    src={photo}
                    alt={`Noel Süsleme ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-white/90 text-sm mb-6 max-w-xl mx-auto">
                Profesyonel ekibimiz, etkinlik alanınızı Noel temalı süslemelerle donatsın.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl mb-1">🎄</div>
                  <div className="text-white text-xs font-medium">Noel Ağacı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">✨</div>
                  <div className="text-white text-xs font-medium">Işıklandırma</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">🎀</div>
                  <div className="text-white text-xs font-medium">Dekorasyon</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">❄️</div>
                  <div className="text-white text-xs font-medium">Kar Efektleri</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Kırmızı Temalı */}
      <section className="py-16 bg-gradient-to-b from-red-700 via-green-800 to-red-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              ❓ Sıkça Sorulan Sorular
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-base text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Kırmızı Temalı */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-green-700 to-red-800 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🎅 Hemen Rezervasyon Yaptırın!
          </h2>
          <p className="text-base text-white/90 mb-8 max-w-xl mx-auto">
            Sınırlı kontenjan! Çocuklarınızın rüyalarını gerçeğe dönüştürmek için bugün iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905307309009"
              className="bg-white text-red-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              📞 Hemen Ara
            </a>
            <a 
              href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* İlgili Hizmetler - Kırmızı Temalı */}
      <section className="py-12 bg-gradient-to-b from-red-950 to-green-950">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-center text-white mb-6">
            Diğer Çocuk Etkinlikleri
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/organizasyonlar/cocuk-etkinlikleri" className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full shadow hover:bg-white/20 transition-all text-sm">
              🎪 Çocuk Etkinlikleri
            </Link>
            <Link to="/organizasyonlar/palyaco-kiralama" className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full shadow hover:bg-white/20 transition-all text-sm">
              🤡 Palyaço Kiralama
            </Link>
            <Link to="/organizasyonlar/maskot-kiralama" className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full shadow hover:bg-white/20 transition-all text-sm">
              🐻 Maskot Kiralama
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default SantaClausRental
