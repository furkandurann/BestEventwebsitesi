import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { mascotsData } from '../../data/mascotsData'
import NarrativeSection from '../../components/NarrativeSection'
import FullBleedHero from '../../components/FullBleedHero'

const BoysMascots = () => {
  const [activeSection, setActiveSection] = useState(0)

  // Erkek maskotları
  const boysMascots = mascotsData.boysMascots

  // Scroll observer for progress indicators
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.mascot-hero-section')
      const scrollPos = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const top = section.offsetTop
        const bottom = top + section.offsetHeight
        
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard navigation (↑↓ arrows)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowDown' && activeSection < boysMascots.length - 1) {
        const nextSection = document.querySelectorAll('.mascot-hero-section')[activeSection + 1]
        nextSection?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'ArrowUp' && activeSection > 0) {
        const prevSection = document.querySelectorAll('.mascot-hero-section')[activeSection - 1]
        prevSection?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [activeSection, boysMascots.length])

  const scrollToSection = (index) => {
    const section = document.querySelectorAll('.mascot-hero-section')[index]
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Helmet>
        <title>Erkek Çocuk Maskotları Kiralama İstanbul | Sonic, Super Mario | Best Event</title>
        <meta 
          name="description" 
          content="İstanbul'da erkek çocuk maskot organizasyon. Sonic, Super Mario, Paw Patrol, Mickey Mouse maskotları. ☎ 0534 930 67 99" 
        />
      </Helmet>

      <main className="overflow-x-hidden scroll-smooth snap-y snap-mandatory">
        {/* Progress Indicators */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
          {boysMascots.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeSection === index 
                  ? 'bg-white scale-150' 
                  : 'bg-white/30 hover:bg-white/50'
                }
              `}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>

        {/* FULL-SCREEN MASCOT SECTIONS */}
        {boysMascots.map((mascot, index) => (
          <section
            key={mascot.id}
            className="mascot-hero-section relative min-h-screen flex items-center justify-center overflow-hidden snap-start"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${mascot.heroImage}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/5"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-bold text-white leading-tight tracking-tight whitespace-nowrap"
                style={{ 
                  textShadow: '0 2px 20px rgba(0,0,0,.45)',
                  fontSize: 'clamp(2.25rem, 6vw, 4rem)',
                  letterSpacing: '-0.035em',
                  lineHeight: '1.25',
                  fontWeight: '700',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                {mascot.name}
              </motion.h1>
            </div>

            {/* İncele button - Her section'un sağ alt köşesi */}
            <motion.a
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              href={`/${mascot.slug}`}
              className="absolute bottom-8 right-8 z-20 min-h-[44px] px-7 py-3.5 bg-white/90 backdrop-blur-md text-purple-600 rounded-full font-semibold text-base hover:shadow-xl transition-all transform hover:scale-105"
            >
              İncele →
            </motion.a>

            {/* Scroll indicator (sadece ilk section'da) */}
            {index === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-white rounded-full"
                  />
                </div>
              </motion.div>
            )}
          </section>
        ))}

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Sıkça Sorulan Sorular
            </h2>
            
            <div className="space-y-6">
              {(() => {
                const faqs = [
                  {
                    question: "Hangi erkek maskotları mevcut?",
                    answer: "Sonic, Super Mario, Paw Patrol, Mickey Mouse, Pikachu, Aslan ve Köpekbalığı maskotlarımız mevcuttur."
                  },
                  {
                    question: "Erkek çocuk maskot organizasyon kaç saat sürer?",
                    answer: "Hizmetimiz 60-90 dakika arası sürmektedir. İhtiyacınıza göre süre uzatılabilir."
                  },
                  {
                    question: "İstanbul'un hangi bölgelerinde hizmet veriyorsunuz?",
                    answer: "Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Şişli, Beşiktaş, Beyoğlu, Bakırköy, Başakşehir, Sarıyer, Esenyurt ve İstanbul'un tüm ilçelerinde hizmet veriyoruz."
                  },
                  {
                    question: "Maskot içindeki kişi profesyonel mi?",
                    answer: "Evet! Tüm maskotlarımız deneyimli performans sanatçıları tarafından canlandırılır. Dans, hareket, çocuklarla etkileşim konularında eğitimlidirler."
                  },
                  {
                    question: "Maskotlar kaliteli mi?",
                    answer: "Evet, tüm maskotlarımız profesyonel standartlarda, profesyonel, temiz ve düzenli olarak bakımı yapılmış koca kafalı kostümlerdir."
                  },
                  {
                    question: "Ulaşım size mi ait?",
                    answer: "Evet, maskot organizasyon hizmetimizde ulaşım bize aittir. Ekibimiz tüm ekipmanlarla birlikte adresinize gelir."
                  },
                  {
                    question: "İç ve dış mekanda kullanılabilir mi?",
                    answer: "Evet, hem kapalı hem açık alanlarda hizmet veriyoruz. Ev, bahçe, düğün salonu, AVM gibi her mekanda."
                  },
                  {
                    question: "Fiyatlar nedir?",
                    answer: "Fiyatlarımız maskot, süre ve lokasyona göre değişiklik gösterir. Detaylı fiyat bilgisi için bizi arayın: 0534 930 67 99"
                  }
                ];
                return faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h3 className="font-bold text-xl text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
                ));
              })()}
            </div>
          </div>

          {/* FAQPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Hangi erkek maskotları mevcut?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sonic, Super Mario, Paw Patrol, Mickey Mouse, Pikachu, Aslan ve Köpekbalığı maskotlarımız mevcuttur."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Erkek çocuk maskot organizasyon kaç saat sürer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hizmetimiz 60-90 dakika arası sürmektedir. İhtiyacınıza göre süre uzatılabilir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "İstanbul'un hangi bölgelerinde hizmet veriyorsunuz?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Şişli, Beşiktaş, Beyoğlu, Bakırköy, Başakşehir, Sarıyer, Esenyurt ve İstanbul'un tüm ilçelerinde hizmet veriyoruz."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Maskot içindeki kişi profesyonel mi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet! Tüm maskotlarımız deneyimli performans sanatçıları tarafından canlandırılır. Dans, hareket, çocuklarla etkileşim konularında eğitimlidirler."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Maskotlar kaliteli mi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, tüm maskotlarımız profesyonel standartlarda, profesyonel, temiz ve düzenli olarak bakımı yapılmış koca kafalı kostümlerdir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ulaşım size mi ait?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, maskot organizasyon hizmetimizde ulaşım bize aittir. Ekibimiz tüm ekipmanlarla birlikte adresinize gelir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "İç ve dış mekanda kullanılabilir mi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, hem kapalı hem açık alanlarda hizmet veriyoruz. Ev, bahçe, düğün salonu, AVM gibi her mekanda."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Fiyatlar nedir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fiyatlarımız maskot, süre ve lokasyona göre değişiklik gösterir. Detaylı fiyat bilgisi için bizi arayın: 0534 930 67 99"
                  }
                }
              ]
            })}
          </script>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-500">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>Hemen Rezervasyon Yapın!</h2>
            <p className="text-xl mb-10 text-white/95 text-center max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
              Çocuğunuzun hayalindeki maskotla unutulmaz anlar yaratın
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905349306799?text=Erkek çocuk maskot organizasyon hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all"
              >
                WhatsApp
              </a>
              <a
                href="tel:+905349306799"
                className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all"
              >
                0534 930 67 99
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default BoysMascots
