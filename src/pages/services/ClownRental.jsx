import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../../components/Seo'
import { createServiceSchema, createFAQSchema, createImageObjectSchema, createHowToSchema } from '../../utils/schemaHelpers'
import AuthorExpertise from '../../components/AuthorExpertise'
import AdHero from '../../components/AdHero'
import LocationHeroShowcase from '../../components/LocationHeroShowcase'
import HorizontalPhotoSlider from '../../components/HorizontalPhotoSlider'
import RelatedServices from '../../components/RelatedServices'
import TrustSection from '../../components/TrustSection'
import GoogleReviews from '../../components/GoogleReviews'
import { getReviewsByTags } from '../../data/googleReviews'
import DistrictLinksGrid from '../../components/DistrictLinksGrid'
import RelatedBlogPosts from '../../components/RelatedBlogPosts'
import DeferredContentAccordion from '../../components/DeferredContentAccordion'
import { generateSrcSet } from '../../utils/responsiveImage'

// Clown FAQ Section Component
function ClownFAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.05),_transparent_50%)] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-400 mb-4 font-medium">
            Sıkça Sorulan Sorular
          </p>
          <h2 
            className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.025em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Merak Ettikleriniz
          </h2>
          <p 
            className="text-gray-300 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.6',
              letterSpacing: '-0.015em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
            }}
          >
            Palyaço kiralama hakkında en çok sorulan sorular
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Gradient Glow on Active */}
              {openIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
              )}
              
              {/* Accordion Item */}
              <div className={`relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border ${
                openIndex === index ? 'border-purple-500/30' : 'border-white/10'
              }`}>
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 group/button"
                >
                  <div className="flex-1">
                    <h3 
                      className={`font-bold transition-colors ${
                        openIndex === index 
                          ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                          : 'text-white group-hover/button:text-purple-400'
                      }`}
                      style={{
                        fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                        lineHeight: '1.4',
                        letterSpacing: '-0.015em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 rotate-180' 
                      : 'bg-white/10 group-hover/button:bg-purple-500/20'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-colors ${
                        openIndex === index ? 'text-white' : 'text-gray-300'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="pt-4 border-t border-white/10">
                      <p 
                        className="text-gray-300 leading-relaxed"
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                          lineHeight: '1.7',
                          letterSpacing: '-0.01em',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p 
            className="text-gray-300 mb-6"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
            }}
          >
            Başka sorularınız mı var?
          </p>
          <a
            href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
            }}
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp ile Sorun
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const ClownRental = () => {
  const faqData = [
    {
      question: 'Palyaço kiralama hizmetinizde deneyiminiz nedir?',
      answer: 'İstanbul\'da 10 yılı aşkın süredir yüzlerce ailenin doğum günü ve etkinliklerini başarıyla tasarlıyoruz. 5.000\'den fazla etkinlik deneyimimizle her yaş grubuna uygun aktiviteleri planlıyor, çocukları ilk karşılamadan son fotoğrafa kadar mutlu bir deneyime taşıyoruz.'
    },
    {
      question: 'Etkinliğe ne zaman gelirsiniz?',
      answer: 'Ekiplerimiz etkinlik başlangıcından 15 dakika önce alanda olur. Hazırlıklarını sessizce tamamlar ve çocukları karşılamaya hazır bekler. Söz verdiğimiz saatlerde, her zaman.'
    },
    {
      question: 'İki saatlik palyaço etkinliğinde neler var?',
      answer: 'Hizmetimiz sadece bir gösteri değil; uçtan uca bir deneyimdir: Tanışma & Yüz Boyama, Yaş Grubuna Uygun Grup Oyunları, Kar Spreyi & Konfeti Gösterisi, Sosis Balonlar ve Pinyata Finali, Veda Fotoğrafı. Her etkinlik atmosferi, çocukların yaş aralığına göre özelleştirilir.'
    },
    {
      question: 'Hangi yaş gruplarına hizmet veriyorsunuz?',
      answer: '3–5 Yaş, 6–8 Yaş ve 9–12 Yaş grupları için özel aktivite planlarımız var. Yumuşak ve sevimli oyunlardan, enerjik grup aktivitelerine ve interaktif mini şovlara kadar tüm içerikler yaşa göre tasarlanır.'
    },
    {
      question: 'Yüz boyama malzemeleriniz güvenli mi?',
      answer: 'Playdoh\'un en yüksek kalitede serilerini kullanmaktayız. Hijyen ve kalite önceliğimizdir. Her etkinlikten sonra tüm malzemeler yıkanır ve temizlenir.'
    },
    {
      question: 'Animatörleriniz deneyimli mi?',
      answer: 'Çalışanlarımız 19-28 yaş aralığında, güler yüzlü ve profesyonel ekip üyelerimizdir. Yüksek iletişim becerisi ve enerjik yapılarıyla çocuklarınıza unutulmaz anlar yaşatırlar.'
    },
    {
      question: 'Hangi bölgelere hizmet veriyorsunuz?',
      answer: 'Tüm İstanbul\'a palyaço kiralama hizmeti sunuyoruz. Kadıköy, Beşiktaş, Şişli, Bakırköy, Ataşehir ve İstanbul\'un tüm ilçelerinde profesyonel palyaço organizasyonu yapıyoruz.'
    },
    {
      question: 'Palyaço kiralama fiyatları ne kadar?',
      answer: 'Palyaço kiralama hizmetimiz ₺2.500\'den başlayan fiyatlarla sunulmaktadır. Fiyat; etkinlik süresi, çocuk sayısı, lokasyon ve ek hizmet taleplerine (yüz boyama, balon şekillendirme, kar show vb.) göre değişmektedir. Sihirbaz ekleme ₺7.000\'den, bubble show ekleme ₺7.000\'den, profesyonel yüz boyama ve glitter ₺6.000\'den başlayan fiyatlarla kombine edilebilir. Size özel teklif almak için 05307309009 numarasından bize ulaşabilirsiniz.'
    }
  ]

  // Slider 1: Yüz Boyama ve Balon Show
  const slider1Images = [
    { src: '/content/images/palyaco/yuzboyamapalyaco.webp', alt: 'Yüz boyama palyaço etkinliği İstanbul' },
    { src: '/content/images/palyaco/palyacoboyama.webp', alt: 'Profesyonel yüz boyama hizmeti' },
    { src: '/content/images/palyaco/palyacoyuzboyama2.webp', alt: 'Çocuk yüz boyama aktivitesi' },
    { src: '/content/images/palyaco/palyacososisbalon.webp', alt: 'Sosis balon şekillendirme gösterisi' },
  ]

  // Slider 2: İnteraktif Oyunlar
  const slider2Images = [
    { src: '/content/images/palyaco/palyacoanaherogrupoyunlari.webp', alt: 'Palyaço grup oyunları İstanbul' },
    { src: '/content/images/palyaco/palyacogrupoyunlari.webp', alt: 'İnteraktif çocuk oyunları' },
    { src: '/content/images/palyaco/palyacogrupoyunlarii.webp', alt: 'Eğlenceli grup aktiviteleri' },
    { src: '/content/images/palyaco/cocuklarinyuzundekiheyecan.webp', alt: 'Çocukların yüzündeki heyecan' },
  ]

  // Slider 3: Komedi ve Eğlence
  const slider3Images = [
    { src: '/content/images/palyaco/palyaconattiveguleryuz.webp', alt: 'Palyaço güler yüz gösterisi' },
    { src: '/content/images/palyaco/palyacoonemlifoto.webp', alt: 'Palyaço komedi gösterisi' },
    { src: '/content/images/palyaco/palyacokarsoleni2.webp', alt: 'Palyaço kar şöleni finali' },
    { src: '/content/images/palyaco/palyacosevgidoluonemli.webp', alt: 'Sevgi dolu palyaço etkinliği' },
  ]

  const showcaseSlides = [
    slider2Images[0],
    slider1Images[0],
    slider3Images[1],
    slider2Images[3],
    slider1Images[3]
  ].filter(Boolean)

  const eventFlow = [
    {
      id: 'tanisma-ve-karsilama',
      number: '1',
      title: 'Tanışma ve Karşılama',
      description: 'Palyaço ekibimiz çocuklarla samimi bir karşılama seremonisi ile tanışır',
      image: '/content/images/palyaco/palyacoonemlifoto.webp',
      alt: 'Palyaço kiralama İstanbul tanışma seremonisi - Best Event',
      href: '/organizasyonlar/palyaco-kiralama#tanisma-ve-karsilama'
    },
    {
      id: 'yuz-boyama-glitter-play-doh',
      number: '2',
      title: 'Yüz Boyama, Glitter ve Play Doh',
      description: 'Hızlı yüz boyama, parlak glitter detayları ve küçük yaş grupları için play doh masasıyla sıra beklerken akış bozulmaz',
      image: '/content/images/palyaco/yuzboyamapalyaco.webp',
      alt: 'Palyaço etkinliği yüz boyama İstanbul - Best Event',
      href: '/organizasyonlar/palyaco-kiralama#yuz-boyama-glitter-play-doh'
    },
    {
      id: 'grup-oyunlari',
      number: '3',
      title: 'Eğlenceli Grup Oyunları',
      description: 'Çuval yarışı, halat çekme, ringo, sandalye kapmaca, deve-cüce ve yaşa göre uyarlanan yarışmalarla tempo yükselir',
      image: '/content/images/palyaco/palyacogrupoyunlari.webp',
      alt: 'Palyaço kiralama grup oyunları İstanbul - Best Event',
      href: '/organizasyonlar/palyaco-kiralama#grup-oyunlari'
    },
    {
      id: 'sosis-balon-sekillendirme',
      number: '4',
      title: 'Sosis Balon Şekillendirme',
      description: 'Renkli sosis balon ile kedi, köpek, kalp, kılıç yapımı',
      image: '/content/images/palyaco/palyacososisbalon.webp',
      alt: 'Palyaço organizasyonu balon şekillendirme - Best Event',
      href: '/organizasyonlar/palyaco-kiralama#sosis-balon-sekillendirme'
    },
    {
      id: 'palyaconun-guler-yuzu',
      number: '5',
      title: 'Palyaçonun Güler Yüzü',
      description: 'Çocukların mutluluğunu yansıtan neşeli anlar',
      image: '/content/images/palyaco/palyacooguleryuzzafotograf.webp',
      alt: 'Palyaço kiralama fotoğraf çekimi İstanbul - Best Event',
      href: '/organizasyonlar/palyaco-kiralama#palyaconun-guler-yuzu'
    },
    {
      id: 'kar-show-finali',
      number: '6',
      title: 'Kar Show\'u Finali',
      description: 'Büyülü kar show gösterisi ile etkinliğin en heyecanlı anı',
      image: '/content/images/palyaco/palyacokarsoleni.webp',
      alt: 'Palyaço etkinliği kar show İstanbul - Best Event',
      href: '/organizasyonlar/palyaco-kiralama#kar-show-finali'
    },
    {
      id: 'son-hatira-fotografi',
      number: '7',
      title: 'Son Hatıra Fotoğrafı',
      description: 'Unutulmaz günün son fotoğrafı ile duygusal veda',
      image: '/content/images/palyaco/palyacoonemlifotografa.webp',
      alt: 'Palyaço etkinliği veda fotoğrafı İstanbul - Best Event',
      href: '/organizasyonlar/palyaco-kiralama#son-hatira-fotografi'
    }
  ]

  const serviceSchema = createServiceSchema(
    'Palyaço Kiralama | Palyaço Organizasyonu İstanbul',
    'Istanbul\'da palyaço kiralama ve organizasyonu. Profesyonel palyaço gösterisi, animatör hizmetleri. +5000 başarılı etkinlik.',
    '/organizasyonlar/palyaco-kiralama',
    'Palyaço Kiralama ve Organizasyonu',
    '2500'
  )
  const faqSchema = createFAQSchema(faqData)
  const howToSchema = createHowToSchema(
    'Palyaço Kiralama Etkinlik Akışı — 7 Adımda Unutulmaz Parti',
    'İstanbul\'da profesyonel palyaço kiralama etkinliğinin tanışmadan vedaya kadar 7 adımlık akışı. Yüz boyama, grup oyunları, balon şekillendirme ve kar show dahil.',
    eventFlow,
    'PT2H'
  )

  const imageGallerySchema = createImageObjectSchema([
    { src: '/content/images/palyaco/palyacoanaherogrupoyunlari.webp', alt: 'Palyaço kiralama İstanbul grup oyunları' },
    { src: '/content/images/palyaco/palyacoonemlifoto.webp', alt: 'Profesyonel palyaço gösterisi' },
    { src: '/content/images/palyaco/yuzboyamapalyaco.webp', alt: 'Yüz boyama palyaço etkinliği' },
  ])

  return (
    <div className="min-h-screen bg-black text-white">
      <Seo
        title="Palyaço Kiralama | Palyaço Organizasyonu İstanbul"
        description="Istanbul'da palyaço kiralama ve organizasyonu. Profesyonel palyaço gösterisi, animatör hizmetleri. +5000 başarılı etkinlik. ☎ 05307309009"
        keywords={[
          'istanbul palyaço gösterisi',
          'palyaço organizasyonu',
          'palyaço kiralama',
          'palyaço etkinliği',
          'istanbul palyaço hizmetleri',
          'animatör',
          'çocuk eğlencesi',
          'sosis balon',
          'balon süsleme',
          'doğum günü animasyonu',
          'parti animatörü',
          'yüz boyama',
          'çocuk partisi'
        ]}
        canonicalPath="/organizasyonlar/palyaco-kiralama"
        image="/content/images/palyaco/palyacoanaherogrupoyunlari.webp"
        schema={[
          serviceSchema,
          faqSchema,
          howToSchema,
          imageGallerySchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bestevent.com.tr" },
              { "@type": "ListItem", "position": 2, "name": "Çocuk Etkinlikleri", "item": "https://bestevent.com.tr/organizasyonlar/cocuk-etkinlikleri" },
              { "@type": "ListItem", "position": 3, "name": "Palyaço Kiralama", "item": "https://bestevent.com.tr/organizasyonlar/palyaco-kiralama" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BestEvent",
            "url": "https://bestevent.com.tr",
            "logo": "https://bestevent.com.tr/content/images/slider/konfeti.webp",
            "sameAs": [
              "https://www.instagram.com/besteventorganizasyon/",
              "https://www.instagram.com/palyacogezegenii/",
              "https://www.facebook.com/besteventorganizasyon",
              "https://www.linkedin.com/company/besteventorganizasyon",
              "https://g.co/kgs/bestevent"
            ]
          }
        ]}
      />

      <AdHero
        title="Palyaço Kiralama İstanbul"
        backgroundImage="/content/images/palyaco/palyacoanaherogrupoyunlari.webp"
        subtitle="Doğum günü ve çocuk partileri için profesyonel palyaço hizmeti"
        primaryLabel="WhatsApp'tan Teklif Al"
        whatsappMessage="Merhaba, palyaço kiralama hakkında bilgi almak istiyorum."
        quickFacts={['10+ Yıl Tecrübe', '5000+ Etkinlik', '5⭐ Google Yorumu', 'Aynı Gün Rezervasyon']}
        ctaNote="📞 Hızlı yanıt — mesajınıza dakikalar içinde dönüş"
      />

      <LocationHeroShowcase
        title="Palyaço Kiralama İstanbul"
        description="Yüz boyamadan grup oyunlarına, sosis balondan mini şovlara; çocukları etkinliğin içine alan palyaço akışı tek pakette."
        slides={showcaseSlides}
        eyebrow="İstanbul Palyaço Organizasyonu"
      />

      {/* Why Us Section - Orange Background with White Card */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-orange-950 via-black to-yellow-950">
        <div className="max-w-4xl mx-auto px-6">
          {/* White Card/Frame */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 
              className="font-extrabold text-gray-900 mb-8"
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.025em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Neden İstanbul'un En Çok Tercih Edilen Palyaço Gösterisiyiz?
            </h2>
            
            <div className="space-y-6">
              <p 
                className="text-gray-800 font-medium"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  lineHeight: '1.5',
                  letterSpacing: '-0.015em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                <span className="font-bold text-gray-900">Best Event</span>, İstanbul'da yıllardır yüzlerce başarılı etkinliğe imza atmış profesyonel bir organizasyon firmasıdır. 
                Çocuk doğum günlerinden kurumsal etkinliklere kadar, her organizasyonda deneyimli ekibiyle güvenle tercih edilir.
              </p>
              
              <p 
                className="text-gray-800 font-medium"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  lineHeight: '1.5',
                  letterSpacing: '-0.015em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                <span className="font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Palyaço Organizasyonu ve Kiralama</span> kapsamımız, klasik palyaço anlayışının ötesine geçerek{' '}
                <span className="font-bold text-gray-900">grup oyunları, yüz boyama ve interaktif aktiviteler</span>{' '}
                ile zenginleştirilmiş özel bir çocuk eğlencesi deneyimi sunar. Deneyimli parti animatörü kadromuz, doğum günü animasyonu sürecinde sadece eğlendirmekle kalmaz, aynı zamanda çocukları{' '}
                <span className="font-bold text-gray-900">aktif katılıma teşvik eden</span>{' '}
                profesyonel bir performans sergiler. Kar şöleni, konfeti partisi, sosis balon yapımı, balon süsleme ve pinyata finali ile profesyonel sunumla birleşerek bugüne kadar %100 memnuniyetle sunulmuş, her çocuk partisinde unutulmaz anlar yaşatmıştır. İster doğum günü etkinliği, ister kurumsal organizasyon olsun, palyaço ve animatör kiralama talebinizi deneyimli ekibimizle karşılıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-gradient-to-b from-black via-orange-950/35 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              'Müzikli Danslar',
              'APT Dansı',
              'Heykel Dansı',
              'Manifest Dansları'
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-orange-400/25 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-orange-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2
            className="font-bold text-white mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Palyaço Etkinliğinde Ritimli Dans Akışı
          </h2>

          <p
            className="text-zinc-300 max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 1.9vw, 1.125rem)',
              lineHeight: '1.75',
              letterSpacing: '-0.01em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
            }}
          >
            Palyaço kiralama akışımızda müzikli danslar, APT dansı, heykel dansı ve manifest dansları gibi kısa ama enerjisi yüksek animasyon geçişleri kullanıyoruz; bu bölüm çocukların ritme katıldığı, fotoğraf ve video anlarının doğal biçimde çoğaldığı, sayfa bütünlüğüne uygun bir eğlence temposu oluşturuyor.
          </p>
        </div>
      </section>

      {/* Event Flow Section */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-orange-900/40 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-400 mb-4 font-medium">
              Etkinlik Süreci
            </p>
            <h2 
              className="font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(1.875rem, 5vw, 3rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.025em',
                fontWeight: '700',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Palyaço Etkinliği Nasıl İlerler?
            </h2>
            <p 
              className="text-zinc-300 max-w-3xl mx-auto"
              style={{
                fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                lineHeight: '1.6',
                letterSpacing: '-0.01em',
                fontWeight: '500',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              Tanışmadan vedaya kadar unutulmaz anlar
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventFlow.map((step, idx) => (
              <motion.div
                key={step.id}
                id={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <a
                  href={step.href}
                  className="block relative rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500"
                >
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Image */}
                  <figure className="aspect-[4/3] w-full bg-black/60 overflow-hidden">
                    <img
                      src={step.image}
                      srcSet={generateSrcSet(step.image)}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      alt={step.alt}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <figcaption className="sr-only">{step.title}</figcaption>
                  </figure>

                  {/* Content */}
                  <div className="p-6">
                    <h3 
                      className="text-white font-bold mb-3"
                      style={{
                        fontSize: 'clamp(1.3125rem, 2vw, 1.5625rem)',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2',
                        fontWeight: '700',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-zinc-300"
                      style={{
                        fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                        lineHeight: '1.55',
                        letterSpacing: '-0.005em',
                        fontWeight: '500',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tematik Slider 2: İnteraktif Oyunlar */}
      <HorizontalPhotoSlider images={slider2Images} title="İnteraktif Oyunlar" />

      {/* Tematik Slider 3: Komedi ve Eğlence */}
      <HorizontalPhotoSlider images={slider3Images} title="Komedi ve Eğlence" />

      {/* Palyaço Etkinliği Fotoğraf Şeridi - CinemaStrip */}
      <section className="w-full bg-black/90 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* H2 */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            Binlerce palyaço etkinliğini başarıyla
          </h2>

          {/* H3 */}
          <p className="text-lg md:text-xl text-gray-300 mb-20 text-center">
            Tam zamanında<br />
            Tam yerinde<br />
            Eksiksiz
          </p>

          {/* Yaptık */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-10">
            Yaptık ;
          </h2>
        </div>

        {/* Cinema-Strip */}
        <PalyacoCinemaStrip />
      </section>

      <TrustSection />

      {/* SEO Hizmet Detayları — Palyaço Kırmızı/Turuncu Tema */}
      <section className="relative py-24 sm:py-28 bg-gradient-to-b from-black via-red-950/20 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.08),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(251,146,60,0.06),_transparent_50%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-red-400 mb-4 font-medium">İstanbul Palyaço Hizmetleri</p>
            <h2
              className="font-bold text-white"
              style={{
                fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              Palyaço Kiralama Hizmetlerimiz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                num: '01',
                title: 'Doğum Günü Palyaço Kiralama',
                text: 'Çocuğunuzun doğum günü partisi için profesyonel doğum günü palyaço kiralama hizmetimiz, 3-12 yaş arası misafirleri 60 dakika boyunca eğlendirir. Doğum günü palyaçosu; balon şekillendirme, sihir numaraları, dans ve interaktif oyunları tek programda birleştirir. İstanbul\'un her ilçesine gönderim yapar.',
                accent: 'border-red-500/20',
                tag: 'border-red-500/30 text-red-300',
              },
              {
                num: '02',
                title: 'Profesyonel Palyaço Organizasyonu',
                text: 'Palyaço organizasyonu için profesyonel ekibimizle çocuk parti palyaço kiralama, kreş etkinliği, AVM organizasyonu ve kurumsal aile günü hizmeti sunuyoruz. Hijyenik kostüm garantisi, sözleşmeli güvence ve 5⭐ Google yorumu — palyaço kirala dediğinizde ilk akla gelen marka.',
                accent: 'border-orange-500/20',
                tag: 'border-orange-500/30 text-orange-300',
              },
              {
                num: '03',
                title: 'Palyaço Kiralama Fiyatları',
                text: 'Palyaço kiralama fiyatları; gösteri süresi, etkinlik tipi, misafir sayısı ve tercih edilen palyaço şovu paketine göre belirlenir. Palyaço fiyatları ve palyaço hizmeti detayları için WhatsApp\'tan hızlı teklif alın. Standart 60 dakikalık, premium animasyon ve kurumsal organizasyon paketleri.',
                accent: 'border-yellow-500/20',
                tag: 'border-yellow-500/30 text-yellow-300',
              },
              {
                num: '04',
                title: 'Animatör Palyaço & Çocuk Etkinliği',
                text: 'Animatör palyaço hizmetimiz; çocuk etkinliği animasyonu, oyun ablası ve eğlence organizasyonu öğelerini birleştirir. İstanbul palyaço kiralama tercih edilme sebebimiz: profesyonel kadro, hijyenik kostüm ve animatör eğitimi. Doğum günü için palyaço, ev için palyaço, uygun fiyat palyaço seçenekleri.',
                accent: 'border-pink-500/20',
                tag: 'border-pink-500/30 text-pink-300',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group p-7 rounded-2xl border ${item.accent} bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-black bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    {item.num}
                  </span>
                  <span className={`text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${item.tag} font-medium`}>
                    Hizmet
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3 leading-tight">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-white/40 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Palyaço kiralama İstanbul hizmetimiz tüm ilçelere (Kadıköy, Ataşehir, Üsküdar, Beşiktaş, Şişli, Bakırköy, Pendik, Maltepe, Beylikdüzü, Ümraniye, Çekmeköy, Esenyurt) gönderim yapmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Google Müşteri Yorumları */}
      <GoogleReviews reviews={getReviewsByTags(['palyaco', 'genel'])} title="Palyaço Kiralama Müşteri Yorumları" serviceName="Palyaço Kiralama İstanbul" serviceUrl="/organizasyonlar/palyaco-kiralama" />

      <DeferredContentAccordion serviceKey="palyaco-kiralama" />

      <RelatedServices currentService="palyaco-kiralama" />

      {/* Apple-Style Contact Section */}
      <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Eyebrow Text */}
            <p 
              className="uppercase tracking-[0.3em] text-orange-400 mb-6 font-medium"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              İstanbul'un her yerindeyiz
            </p>

            {/* Premium Title with Orange Gradient */}
            <h2 
              className="font-bold mb-16"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                fontWeight: '700',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                background: 'linear-gradient(to right, #FFFFFF, #FF7F50)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Hemen Rezervasyon Yap
            </h2>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                  {/* Orange Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center justify-center gap-3">
                    {/* Icon with Orange Accent */}
                    <svg className="w-7 h-7 flex-shrink-0 text-orange-400 transition-colors group-hover:text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    
                    {/* Text */}
                    <span 
                      className="font-semibold text-white"
                      style={{
                        fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                        letterSpacing: '-0.01em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      WhatsApp
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Phone Button */}
              <motion.a
                href="tel:+905307309009"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                  {/* Orange Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center justify-center gap-3">
                    {/* Icon with Orange Accent */}
                    <svg className="w-7 h-7 flex-shrink-0 text-orange-400 transition-colors group-hover:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    
                    {/* Text */}
                    <span 
                      className="font-semibold text-white"
                      style={{
                        fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                        letterSpacing: '-0.01em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      05307309009
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <ClownFAQSection faqs={faqData} />

      {/* Service Areas Section */}
      <DistrictLinksGrid
        lpServiceSlug="palyaco-kiralama"
        serviceName="Palyaço Kiralama"
        title="İstanbul'da Palyaço Kiralama Hizmet Bölgelerimiz"
      />

      {/* Antalya & Tatil Bölgeleri */}
      <section className="py-8 px-6 bg-black/60">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 1.9vw, 1.0625rem)',
              lineHeight: '1.7',
              color: '#9CA3AF',
              fontWeight: '500',
              letterSpacing: '-0.01em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
            }}
          >
            Ayrıca <strong className="text-white">Antalya</strong> ve yaz sezonunda <strong className="text-white">Bodrum, Çeşme, Alanya, Side</strong> gibi tatil bölgelerinde de hizmet vermekteyiz.
          </p>
        </div>
      </section>

      {/* Related Blog Posts Section */}
      <section className="py-12 sm:py-16 px-6 bg-black/80 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p
              className="uppercase tracking-[0.2em] text-xs text-purple-400/80 mb-6 font-medium"
            >
              İlgili Blog Yazıları
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/blog/palyaco-kiralama-istanbul"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 rounded-xl px-5 py-3 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span
                  className="text-white/80 hover:text-white text-sm font-medium"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
                >
                  Palyaço Kiralama Rehberi
                </span>
              </Link>
              <Link
                to="/blog/palyaco-kiz-kulesi-organizasyonu"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 rounded-xl px-5 py-3 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span
                  className="text-white/80 hover:text-white text-sm font-medium"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
                >
                  Kız Kulesi'nde Palyaço Organizasyonu
                </span>
              </Link>
              <Link
                to="/blog/palyaco-dogum-gunu-rehberi"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 rounded-xl px-5 py-3 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span
                  className="text-white/80 hover:text-white text-sm font-medium"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
                >
                  Palyaço Doğum Günü Rehberi
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RelatedBlogPosts servicePath="/organizasyonlar/palyaco-kiralama" />

      <AuthorExpertise serviceName="Palyaço Kiralama" />
    </div>
  )
}

// Cinema Strip Component
function PalyacoCinemaStrip() {
  const stripRef = useRef(null)
  const isPausedRef = useRef(false)
  const translateXRef = useRef(0)

  const scrollImages = [
    { file: 'palyacoanaherogrupoyunlari.webp', alt: 'Palyaço etkinliği grup oyunları İstanbul - Best Event' },
    { file: 'yuzboyamapalyaco.webp', alt: 'Palyaço yüz boyama etkinliği İstanbul - Best Event' },
    { file: 'palyacogrupoyunlari.webp', alt: 'Palyaço kiralama grup oyunları - Best Event' },
    { file: 'palyacososisbalon.webp', alt: 'Palyaço sosis balon şekillendirme İstanbul - Best Event' },
    { file: 'palyacooguleryuzzafotograf.webp', alt: 'Palyaço etkinliği güler yüz fotoğrafları - Best Event' },
    { file: 'palyacokarsoleni.webp', alt: 'Palyaço kar show gösterisi İstanbul - Best Event' },
    { file: 'palyacoonemlifotografa.webp', alt: 'Palyaço etkinliği hatıra fotoğrafı - Best Event' },
    { file: 'palyacoonemlifotografguleryız.webp', alt: 'Palyaço organizasyonu mutlu çocuklar - Best Event' },
    { file: 'palyacosevgidoluonemli.webp', alt: 'Palyaço kiralama sevgi dolu anlar - Best Event' },
    { file: 'palyaconattiveguleryuz.webp', alt: 'Palyaço etkinliği pozitif enerji - Best Event' },
    { file: 'palyacogrupoyunlarii.webp', alt: 'Palyaço grup aktiviteleri İstanbul - Best Event' },
    { file: 'MST04316.webp', alt: 'Palyaço organizasyonu profesyonel hizmet - Best Event' },
    { file: 'MST04321.webp', alt: 'Palyaço kiralama etkinlik fotoğrafları - Best Event' },
    { file: 'MST04344.webp', alt: 'Palyaço etkinliği çocuk mutluluğu - Best Event' },
    { file: 'IMG_1881.webp', alt: 'Palyaço kiralama İstanbul başarılı organizasyon - Best Event' }
  ]

  const IMAGE_WIDTH = 450
  const GAP = 24
  const imageCount = scrollImages.length
  const totalWidth = (IMAGE_WIDTH * imageCount) + (GAP * (imageCount - 1))

  // Triple images for seamless infinite scroll
  const allImages = [...scrollImages, ...scrollImages, ...scrollImages]

  // Auto-scroll with translate3d (GPU-accelerated)
  useEffect(() => {
    const scrollSpeed = 2.0
    let animationFrameId

    const autoScroll = () => {
      if (!isPausedRef.current && stripRef.current) {
        translateXRef.current -= scrollSpeed

        if (Math.abs(translateXRef.current) >= totalWidth) {
          translateXRef.current = 0
        }

        stripRef.current.style.transform = `translate3d(${translateXRef.current}px, 0, 0)`
      }

      animationFrameId = requestAnimationFrame(autoScroll)
    }

    animationFrameId = requestAnimationFrame(autoScroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [totalWidth])

  return (
    <div className="relative w-screen -mx-6 md:-mx-10">
      <div
        className="overflow-hidden"
        onMouseEnter={() => { isPausedRef.current = true }}
        onMouseLeave={() => { isPausedRef.current = false }}
        onTouchStart={() => { isPausedRef.current = true }}
        onTouchEnd={() => { isPausedRef.current = false }}
      >
        <div
          ref={stripRef}
          className="flex gap-6"
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)'
          }}
        >
          {allImages.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
            >
              <img
                src={`/content/images/palyaco/${item.file}`}
                srcSet={generateSrcSet(`/content/images/palyaco/${item.file}`)}
                sizes="450px"
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width={450}
                height={288}
                className="h-72 w-[450px] object-cover rounded-2xl brightness-[1.15] contrast-[1.08] saturate-[1.1]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClownRental
