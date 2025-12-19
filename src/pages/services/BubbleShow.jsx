import { useState, useEffect } from 'react'
import Seo from '../../components/Seo'
import NarrativeSection from '../../components/NarrativeSection'
import OptimizedImage from '../../components/OptimizedImage'

const BubbleShow = () => {
  const faqData = [
    {
      question: "Bubble show gösterisi ne kadar sürer?",
      answer: "Standart bubble show gösterilerimiz 20-30 dakika arası sürmektedir. Talebe göre 40 dakikaya kadar uzatılabilir. Küçük etkinlikler için 15 dakikalık express versiyonlar da mevcuttur."
    },
    {
      question: "Bubble show için hangi yaş grubu uygundur?",
      answer: "Bubble show gösterileri 2-12 yaş arası çocuklar için idealdir. Küçük bebekler için pasif izleme, büyük çocuklar için interaktif katılım şeklinde özelleştirilir. Yetişkin etkinlikleri için de özel gösteriler yapabiliyoruz."
    },
    {
      question: "İç mekanda bubble show yapılabilir mi?",
      answer: "Evet! Bubble show hem iç hem dış mekanlarda yapılabilir. İç mekan için minimum 4x4 metre alan ve 2.5 metre tavan yüksekliği yeterlidir. Zemin su geçirmez veya silinebilir olmalıdır."
    },
    {
      question: "Sabun köpükleri zararlı mı? Alerjik reaksiyona neden olur mu?",
      answer: "Kullandığımız sabun köpüğü solüsyonları tamamen çocuk dostu, toksik olmayan ve alerjik reaksiyon riski minimum ürünlerdir. Hassas cildi olan çocuklar için önceden bilgi vermenizi öneriyoruz."
    },
    {
      question: "Hangi bölgelere hizmet veriyorsunuz?",
      answer: "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine gidiyoruz."
    },
    {
      question: "Fiyatlar nedir?",
      answer: "Fiyatlarımız gösteri süresine, mekan tipine ve katılımcı sayısına göre değişiklik gösterir. Detaylı fiyat bilgisi için bizi arayın: 0530 730 90 09"
    }
  ]

  return (
    <>
      <Seo
        title="İstanbul Bubble Show Organizasyonu | Köpük Şov Kiralama | Best Event"
        description="İstanbul'un en iyi bubble show organizasyonu. Tüm İstanbul'da profesyonel köpük şov kiralama. Kadıköy, Maltepe, Üsküdar. ☎ 0530 730 90 09"
        keywords={[
          'bubble show istanbul',
          'köpük şov kiralama',
          'bubble show organizasyonu',
          'çocuk bubble show',
          'dev sabun köpükleri',
          'bubble show doğum günü',
          'istanbul köpük gösterisi'
        ]}
        canonicalPath="/organizasyonlar/bubble-show"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Bubble Show İstanbul",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BestEvent",
              "areaServed": [
                "Kadıköy", "Üsküdar", "Maltepe", "Kartal", "Ataşehir", "Pendik", "Erenköy",
                "Beylikdüzü", "Sarıyer", "Beşiktaş", "Şişli", "Bakırköy", "İstanbul"
              ]
            },
            "serviceType": "Bubble Show Organizasyonu",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }
        ]}
      />

      <main className="overflow-x-hidden scroll-smooth">
        {/* Full-Screen Hero Section */}
        <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/content/images/bubbleshow/anabubblee.webp')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[17vh]">
            <h1
              className="font-bold text-white leading-tight tracking-tight animate-fade-in"
              style={{ 
                textShadow: '0 2px 20px rgba(0,0,0,.45)',
                fontSize: 'clamp(2.25rem, 6vw, 4rem)',
                letterSpacing: '-0.035em',
                lineHeight: '1.25',
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              İstanbul'un En İyi Bubble Show Organizasyonu
            </h1>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* Section 1: Tüm İstanbul Bubble Show */}
        <NarrativeSection
          eyebrow="10+ YIL DENEYİM"
          title="Tüm İstanbul Bubble Show Organizasyonu"
          body="Best Event olarak İstanbul'un her bölgesinde profesyonel bubble show hizmeti sunuyoruz. Dev sabun köpükleri, LED ışıklar ve çocuk dostu ritmler ile unutulmaz anlar yaratıyoruz. Kadıköy'den Beylikdüzü'ne, Üsküdar'dan Sarıyer'e kadar tüm İstanbul'da hizmetinizdeyiz."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <img 
            src="/content/images/bubbleshow/anabubble.webp"
            alt="İstanbul bubble show organizasyonu"
            className="object-contain max-h-[80vh] w-auto"
          />
        </div>

        {/* Section 2: İstanbul'un En İyi Bubble Show */}
        <NarrativeSection
          eyebrow="PROFESYONEL EKİP"
          title="İstanbul'un En İyi Bubble Show Gösterileri"
          body="10+ yıllık deneyimimiz ve 5000+ başarılı etkinliğimiz ile İstanbul'un en güvenilir bubble show organizasyon firmasıyız. Dev sabun köpükleri (3+ metre çap), renkli LED ışık efektleri ve interaktif deneyimlerle çocuklarınızı büyülüyoruz. Her gösteri 20-40 dakika sürer ve yaş grubuna göre özelleştirilir."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <img 
            src="/content/images/bubbleshow/anabubbleee.webp"
            alt="İstanbul'un en iyi bubble show gösterileri"
            className="object-contain max-h-[80vh] w-auto"
          />
        </div>

        {/* Section 3: Çocuk Dostu Güvenli Köpük */}
        <NarrativeSection
          eyebrow="GÜVENLİK ÖNCELİĞİMİZ"
          title="Çocuk Dostu ve Güvenli Köpük Solüsyonları"
          body="Kullandığımız sabun köpüğü solüsyonları tamamen çocuk dostu, toksik olmayan ve FDA onaylı ürünlerdir. Alerjik reaksiyon riski minimum düzeydedir. Hassas cildi olan çocuklar için önceden bilgi vermenizi öneriyoruz. Tüm ekipmanlarımız her etkinlik öncesi hijyenik temizlik ve dezenfekte işleminden geçirilir."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <img 
            src="/content/images/bubbleshow/anabuble.webp"
            alt="Çocuk dostu güvenli köpük solüsyonları"
            className="object-contain max-h-[80vh] w-auto"
          />
        </div>

        {/* Section 5: Dev Sabun Köpükleri */}
        <NarrativeSection
          eyebrow="DEV KÖPÜKLER"
          title="Dev Sabun Köpükleri ve LED Işıklar"
          body="3+ metre çapında dev sabun köpükleri, çocukların içine girebileceği dev balonlar ve renkli LED ışık efektleri ile görsel bir şölen sunuyoruz. Köpük tünelleri, 3D köpük figürleri (kalp, yıldız, hayvan temaları) ve müzik eşliğinde senkronize gösteri. Her gösteri profesyonel ekipmanlar ve deneyimli gösterici ile gerçekleştirilir."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <img 
            src="/content/images/bubbleshow/bubbleshowslider2.webp"
            alt="Dev sabun köpükleri ve LED ışıklar"
            className="object-contain max-h-[80vh] w-auto"
          />
        </div>

        {/* Section 6: İnteraktif Bubble Show */}
        <NarrativeSection
          eyebrow="İNTERAKTİF DENEYİM"
          title="İnteraktif Bubble Show Deneyimi"
          body="Çocukların aktif katılımıyla interaktif bubble show deneyimi sunuyoruz. Çocuklar dev balonların içine girip, köpük tünellerinden geçip, köpük patlatma oyunları oynayabilirler. Her yaş grubu için uygun (2-12 yaş) özel aktiviteler düzenliyoruz. Yetişkin etkinlikleri için de özel gösteriler yapabiliyoruz."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <img 
            src="/content/images/bubbleshow/bubbleshowslider3.webp"
            alt="İnteraktif bubble show deneyimi"
            className="object-contain max-h-[80vh] w-auto"
          />
        </div>

        {/* Section 7: Bubble Show ile Doğum Günü Süsleme */}
        <NarrativeSection
          eyebrow="DEKORASYON PAKETİ"
          title="Bubble Show ile Doğum Günü Süsleme"
          body="Doğum günü organizasyonu bubble show hizmetimiz, profesyonel süsleme ve dekorasyon ile birlikte sunulur. Balon süslemeleri, masa düzenleme, arka plan panosu ve özel bubble show dekorasyonları ile doğum günü mekanınızı tamamen dönüştürüyoruz. Her yaş grubu için özel tema alternatifleri ve renkli bubble show gösterileri ile doğum günü organizasyonunuz mükemmel olacak."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <img 
            src="/content/images/bubbleshow/bubbleshowslider5.webp"
            alt="Bubble show ile doğum günü süsleme"
            className="object-contain max-h-[80vh] w-auto"
          />
        </div>

        {/* Section 8: Profesyonel Ekipman */}
        <NarrativeSection
          eyebrow="PROFESYONEL KALİTE"
          title="Profesyonel Bubble Show Ekipmanları"
          body="En kaliteli bubble show makineleri, FDA onaylı köpük solüsyonları ve profesyonel LED ışık sistemleri kullanıyoruz. Tüm ekipmanlarımız düzenli bakım ve kontrolden geçer. Mobile-first metrikleri karşılayan düşük latency set-up ve contrast uyumlu renk paleti ile kusursuz performans garantisi sunuyoruz."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <img 
            src="/content/images/bubbleshow/bubbleshowslideranahero.webp"
            alt="Profesyonel bubble show ekipmanları"
            className="object-contain max-h-[80vh] w-auto"
          />
        </div>

        {/* Section 9: Organizasyon Dahil Bubble Show */}
        <NarrativeSection
          eyebrow="KOMPLE HİZMET"
          title="Organizasyon Dahil Bubble Show Doğum Günü"
          body="Doğum günü organizasyonu bubble show paketimiz ile baştan sona tam organizasyon hizmeti sunuyoruz. Mekan temini, catering, animasyon, bubble show gösterisi, fotoğraf çekimi ve tüm teknik ekipmanlar dahil. Siz sadece gelip eğlenin, gerisi bizden! Her detay profesyonelce planlanır ve doğum günü organizasyonunuz kusursuz gerçekleştirilir. Bubble show ile birlikte yüz boyama, balon şekillendirme ve sihirbazlık gösterileri de eklenebilir."
        />
        <div className="w-full flex justify-center items-center bg-white py-8">
          <img 
            src="/content/images/bubbleshow/bubbleshownattive.webp"
            alt="Organizasyon dahil bubble show doğum günü"
            className="object-contain max-h-[80vh] w-auto"
          />
        </div>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Sıkça Sorulan Sorular
            </h2>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm animate-fade-in"
                >
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Hemen Rezervasyon Yapın!</h2>
            <p className="text-2xl mb-10 text-white/90">
              Çocuklarınız için unutulmaz bubble show deneyimi yaratın
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+905307309009"
                className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
              >
                📞 0530 730 90 09
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default BubbleShow
