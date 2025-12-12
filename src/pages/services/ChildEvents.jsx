import SeoHead from '../../components/SeoHead'
import KidsSection from '../../components/KidsSection'
import OptimizedImage from '../../components/OptimizedImage'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { kidsSections } from '../../data/kidsSections'

// DİĞER HİZMETLER (Split Screen)
const OTHER_SERVICES = [
  { name: 'Karaoke Etkinliği', image: '/content/images/bidolu/karaoke.jpg', link: '/organizasyonlar/karaoke-etkinligi' },
  { name: 'Gezegen Tanıtım', image: '/content/images/bidolu/gezegentanıtım.jpeg', link: '/organizasyonlar/gezegen-tanitim' },
  { name: 'Maskot Kiralama', image: '/content/images/cocukdogumgunu/maskotistanbul.JPG', link: '/organizasyonlar/maskot-kiralama' },
  { name: 'Çocuk Masa Sandalye', image: '/content/images/cocukdogumgunu/IMG_0777.JPG', link: '/organizasyonlar/cocuk-masa-sandalye' },
  { name: 'Transformers Robot', image: '/content/images/bidolu/transformers.jpeg', link: '/organizasyonlar/transformers-robot' },
  { name: 'Şişme Oyun Parkları', image: '/content/images/cocukdogumgunu/IMG_0777.JPG', link: '/organizasyonlar/sisme-oyun-parki' },
  { name: 'Atölye Etkinlikleri', image: '/content/images/cocukdogumgunu/7dbaca4e-d254-4663-b4bd-b106207970c8.JPG', link: '/organizasyonlar/atolye-etkinlikleri' },
  { name: 'Çikolata Şelalesi', image: '/content/images/bidolu/cikolataselalesikartfoto.jpeg', link: '/organizasyonlar/cikolata-selalesi' },
  { name: 'Ateş Gösterisi', image: '/content/images/gosteriler/tesbaz.jpg', link: '/organizasyonlar/ates-gosterisi' }
]

const ChildEvents = () => {
  const [activeSection, setActiveSection] = useState(0)

  // Scroll observer for progress indicators
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.full-screen-section')
      const scrollPos = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const top = section.offsetTop
        const bottom = top + section.offsetHeight
        
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard navigation (↑↓ arrows)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowDown' && activeSection < kidsSections.length - 1) {
        const nextSection = document.querySelectorAll('.full-screen-section')[activeSection + 1]
        nextSection?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'ArrowUp' && activeSection > 0) {
        const prevSection = document.querySelectorAll('.full-screen-section')[activeSection - 1]
        prevSection?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [activeSection])

  const scrollToSection = (index) => {
    const section = document.querySelectorAll('.full-screen-section')[index]
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  const page = {
    title: 'Çocuk Etkinlikleri | BestEvent',
    description: 'Çocuk doğum günü, palyaço, bubble ve sihirli gösterilerde profesyonel ekip. Kadıköy\'den Beylikdüzü\'ne, Bodrum ve Antalya\'ya yerinde hizmet.',
    url: 'https://www.bestevent.com/organizasyonlar/cocuk-etkinlikleri',
    image: {
      src640: '/content/images/cocukdogumgunu/konseptdogumgunu.JPG',
      src1280: '/content/images/cocukdogumgunu/konseptdogumgunu.JPG',
      src1920: '/content/images/cocukdogumgunu/konseptdogumgunu.JPG',
      src1200: '/content/images/cocukdogumgunu/konseptdogumgunu.JPG'
    },
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Çocuk Etkinlikleri",
        "provider": {
          "@type": "LocalBusiness",
          "name": "BestEvent",
          "areaServed": [
            "Kadıköy", "Kartal", "Maltepe", "Göktürk", "Sarıyer", "Beylikdüzü", "Ümraniye", "Çekmeköy", "İstinye", "Maslak", "Üsküdar",
            "Bodrum", "Yalıkavak", "Antalya"
          ]
        },
        "serviceType": "Çocuk Etkinlikleri",
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Çocuk etkinlikleri ne kadar sürer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Çocuk etkinliklerimiz genellikle 1-2 saat arası sürmektedir. Palyaço ve sihirbaz gösterileri 45-60 dakika, bubble show 30-45 dakika, yüz boyama ise çocuk sayısına göre değişkenlik gösterir. İhtiyacınıza göre özel süreler de düzenlenebilir."
            }
          },
          {
            "@type": "Question",
            "name": "Hangi yaş grubu için uygundur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Çocuk etkinliklerimiz 2-12 yaş arası çocuklar için idealdir. Palyaço ve bubble show 2-8 yaş, sihirbazlık gösterisi 4-12 yaş, kostümlü karakterler tüm yaş grupları için uygundur. Özel yaş grupları için özelleştirilmiş programlar sunuyoruz."
            }
          },
          {
            "@type": "Question",
            "name": "Hangi bölgelere hizmet veriyorsunuz?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Kartal, Maltepe, Üsküdar, Beylikdüzü, Sarıyer, Maslak, İstinye başta olmak üzere her bölgeye gidiyoruz. Ayrıca Bodrum, Yalıkavak ve Antalya'da da hizmet vermekteyiz."
            }
          },
          {
            "@type": "Question",
            "name": "Fiyatlar ne kadar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fiyatlarımız etkinlik türüne, süresine ve lokasyona göre değişiklik gösterir. Palyaço kiralama 1500₺'den, sihirbaz gösterisi 2000₺'den, bubble show 1200₺'den başlamaktadır. Detaylı fiyat bilgisi için bizi arayın: 0534 930 67 99"
            }
          },
          {
            "@type": "Question",
            "name": "Kaç gün önceden rezervasyon yapmalıyım?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yoğun sezonlarda (hafta sonları, özel günler) en az 2-3 hafta önceden rezervasyon yapmanızı öneririz. Hafta içi günlerde ise 1 hafta önceden rezervasyon yeterli olabilir. Acil durumlar için de elimizden geleni yaparız."
            }
          },
          {
            "@type": "Question",
            "name": "İç mekan mı dış mekan mı tercih edilmeli?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hem iç hem de dış mekanlarda hizmet verebiliyoruz. Palyaço ve sihirbaz gösterileri her iki mekana da uygundur. Bubble show için iç mekan tercih edilir (rüzgar etkilemez). Yüz boyama her ortamda yapılabilir. Mekan önerileri için danışabilirsiniz."
            }
          },
          {
            "@type": "Question",
            "name": "Ekipmanları siz mi getiriyorsunuz?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet, tüm ekipmanları biz getiriyoruz. Ses sistemi, müzik, gösterim malzemeleri, yüz boyama boyaları, kostümler - her şey dahildir. Sizin sadece etkinlik alanını sağlamanız yeterlidir. Ekstra ses sistemi gerekirse önceden belirtiniz."
            }
          },
          {
            "@type": "Question",
            "name": "İptal ve değişiklik politikanız nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Etkinlikten 7 gün öncesine kadar ücretsiz iptal veya tarih değişikliği yapılabilir. 3-7 gün arası %50 ücret, 3 gün ve altında %100 ücret alınır. Hastalık, vefat gibi özel durumlarda esnek davranılır. Detaylar için sözleşme şartlarımızı inceleyebilirsiniz."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <SeoHead
        title={page.title}
        description={page.description}
        url={page.url}
        image={page.image}
        schema={page.schema}
      />
      
      <main className="overflow-x-hidden scroll-smooth snap-y snap-mandatory">
        {/* Progress Indicators - Optimized for Mobile */}
        <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
          {kidsSections.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeSection === index 
                  ? 'bg-white scale-150 shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50'
                }
              `}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>

        {/* 7 FULL-SCREEN SECTIONS - REFACTORED with KidsSection Component */}
        {kidsSections.map((section, index) => (
          <KidsSection
            key={section.key}
            title={section.title}
            subtitle={section.subtitle}
            img={section.img}
            alt={section.alt}
            cta={section.cta}
            index={index}
          />
        ))}

        {/* DİĞER HİZMETLER - Enhanced Apple Style */}
        <section className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-20"
            >
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-amber-600 mb-4 font-medium">Daha Fazla Eğlence</p>
              <h2 className="font-display font-bold text-gray-900 mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2' }}>
                Diğer Hizmetlerimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
                Çocuklarınız için daha fazla eğlence ve unutulmaz anılar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {OTHER_SERVICES.map((service, index) => (
                <motion.div
                  key={service.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="block cursor-default">
                    <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg transition-all duration-500">
                      {/* Image */}
                      <OptimizedImage
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Best Event? Bölümü */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-600 mb-4 font-medium">10+ YIL DENEYİM</p>
              <h2 className="font-display font-bold text-gray-900 mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2' }}>
                Neden Best Event?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
                İstanbul'da 10+ yıldır çocuk etkinlikleri organizasyonu yapıyoruz. 5000+ mutlu çocuk, 2000+ başarılı etkinlik. Profesyonel ekibimiz ve kaliteli hizmet anlayışımızla yanınızdayız.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "⭐",
                  title: "Profesyonel Ekip",
                  description: "10+ yıl deneyimli, sertifikalı animatörler ve gösterici sanatçılar. Her etkinlikte profesyonel hizmet garantisi."
                },
                {
                  icon: "🎭",
                  title: "Geniş Hizmet Yelpazesi",
                  description: "Palyaço, sihirbaz, bubble show, kostümlü karakterler, yüz boyama ve daha fazlası. Tek çatı altında tüm etkinlik ihtiyaçlarınız."
                },
                {
                  icon: "📍",
                  title: "Tüm İstanbul'da Hizmet",
                  description: "Kadıköy'den Beylikdüzü'ne, Sarıyer'den Maltepe'ye. İstanbul'un her köşesine profesyonel hizmet sunuyoruz."
                },
                {
                  icon: "✨",
                  title: "Kaliteli Malzemeler",
                  description: "FDA onaylı, çocuk dostu, güvenli malzemeler. Tüm ekipmanlar hijyenik ve sertifikalıdır."
                },
                {
                  icon: "🎨",
                  title: "Özelleştirilebilir Paketler",
                  description: "İhtiyaçlarınıza göre özel paketler. Bütçenize uygun, kaliteden ödün vermeden çözümler."
                },
                {
                  icon: "💯",
                  title: "Müşteri Memnuniyeti",
                  description: "%98 müşteri memnuniyeti oranı. Binlerce olumlu geri bildirim ve referans. Güvenle tercih edebilirsiniz."
                },
                {
                  icon: "🚀",
                  title: "Hızlı Rezervasyon",
                  description: "WhatsApp veya telefon ile anında rezervasyon. Esnek tarih ve saat seçenekleri."
                },
                {
                  icon: "🎁",
                  title: "Ekstra Hediyeler",
                  description: "Bazı paketlerde ücretsiz süprizler ve hediyeler. Çocuklarınız için özel anlar yaratıyoruz."
                },
                {
                  icon: "📞",
                  title: "7/24 İletişim",
                  description: "Her zaman ulaşılabilir ekip. Etkinlik öncesi ve sonrası destek hizmeti."
                },
                {
                  icon: "🏆",
                  title: "Tecrübeli Organizasyon",
                  description: "2000+ başarılı etkinlik deneyimi. Kurumsal firmalardan bireysel etkinliklere geniş portföy."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-indigo-600 mb-4 font-medium">MERAK EDİLENLER</p>
              <h2 className="font-display font-bold text-gray-900 mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2' }}>
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
                Çocuk etkinlikleri hakkında en çok merak edilen soruların yanıtları
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Çocuk etkinlikleri ne kadar sürer?",
                  answer: "Çocuk etkinliklerimiz genellikle 1-2 saat arası sürmektedir. Palyaço ve sihirbaz gösterileri 45-60 dakika, bubble show 30-45 dakika, yüz boyama ise çocuk sayısına göre değişkenlik gösterir. İhtiyacınıza göre özel süreler de düzenlenebilir."
                },
                {
                  question: "Hangi yaş grubu için uygundur?",
                  answer: "Çocuk etkinliklerimiz 2-12 yaş arası çocuklar için idealdir. Palyaço ve bubble show 2-8 yaş, sihirbazlık gösterisi 4-12 yaş, kostümlü karakterler tüm yaş grupları için uygundur. Özel yaş grupları için özelleştirilmiş programlar sunuyoruz."
                },
                {
                  question: "Hangi bölgelere hizmet veriyorsunuz?",
                  answer: "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Kartal, Maltepe, Üsküdar, Beylikdüzü, Sarıyer, Maslak, İstinye başta olmak üzere her bölgeye gidiyoruz. Ayrıca Bodrum, Yalıkavak ve Antalya'da da hizmet vermekteyiz."
                },
                {
                  question: "Fiyatlar ne kadar?",
                  answer: "Fiyatlarımız etkinlik türüne, süresine ve lokasyona göre değişiklik gösterir. Palyaço kiralama 1500₺'den, sihirbaz gösterisi 2000₺'den, bubble show 1200₺'den başlamaktadır. Detaylı fiyat bilgisi için bizi arayın: 0534 930 67 99"
                },
                {
                  question: "Kaç gün önceden rezervasyon yapmalıyım?",
                  answer: "Yoğun sezonlarda (hafta sonları, özel günler) en az 2-3 hafta önceden rezervasyon yapmanızı öneririz. Hafta içi günlerde ise 1 hafta önceden rezervasyon yeterli olabilir. Acil durumlar için de elimizden geleni yaparız."
                },
                {
                  question: "İç mekan mı dış mekan mı tercih edilmeli?",
                  answer: "Hem iç hem de dış mekanlarda hizmet verebiliyoruz. Palyaço ve sihirbaz gösterileri her iki mekana da uygundur. Bubble show için iç mekan tercih edilir (rüzgar etkilemez). Yüz boyama her ortamda yapılabilir. Mekan önerileri için danışabilirsiniz."
                },
                {
                  question: "Ekipmanları siz mi getiriyorsunuz?",
                  answer: "Evet, tüm ekipmanları biz getiriyoruz. Ses sistemi, müzik, gösterim malzemeleri, yüz boyama boyaları, kostümler - her şey dahildir. Sizin sadece etkinlik alanını sağlamanız yeterlidir. Ekstra ses sistemi gerekirse önceden belirtiniz."
                },
                {
                  question: "İptal ve değişiklik politikanız nedir?",
                  answer: "Etkinlikten 7 gün öncesine kadar ücretsiz iptal veya tarih değişikliği yapılabilir. 3-7 gün arası %50 ücret, 3 gün ve altında %100 ücret alınır. Hastalık, vefat gibi özel durumlarda esnek davranılır. Detaylar için sözleşme şartlarımızı inceleyebilirsiniz."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(0.938rem, 2vw, 1.063rem)' }}>
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Lokasyon Bilgisi - Text Only (No Links) */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 to-orange-50 border-t border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Hizmet Bölgelerimiz
              </h3>
              <div className="max-w-5xl mx-auto text-center">
                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: '1.8' }}>
                  İstanbul'un her bölgesinde profesyonel çocuk etkinlikleri hizmeti sunuyoruz: 
                  <strong className="text-gray-900"> Kadıköy, Kartal, Maltepe, Sarıyer, Göktürk, Beylikdüzü, Ümraniye, Çekmeköy, İstinye, Maslak, Üsküdar, Şişli, Beşiktaş, Bakırköy</strong> ve İstanbul'un tüm ilçelerinde yanınızdayız.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: '1.8' }}>
                  <strong className="text-gray-900">Antalya</strong>'da yıl boyunca kesintisiz hizmet vermekteyiz. Ayrıca yaz sezonunda: 
                  <strong className="text-gray-900"> Bodrum, Yalıkavak, Turgutreis, Gümüşlük, Belek, Alanya, Side</strong> ve çevre tatil bölgelerinde etkinliklerinizi unutulmaz kılmak için buradayız.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="mt-10">
                <a
                  href="https://wa.me/905349306799?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Hemen Rezervasyon Yapın
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ChildEvents
