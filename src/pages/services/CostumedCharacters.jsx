import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { costumedCharactersData } from '../../data/costumedCharactersData'
import NarrativeSection from '../../components/NarrativeSection'
import FullBleedHero from '../../components/FullBleedHero'
import { useNavigate } from 'react-router-dom'

const CostumedCharacters = () => {
  const [activeSection, setActiveSection] = useState(0)
  const navigate = useNavigate()

  const mainCharacters = [
    costumedCharactersData.girlsCharacters.find((c) => c.id === 'elsa'),
    costumedCharactersData.boysCharacters.find((c) => c.id === 'spiderman'),
    costumedCharactersData.boysCharacters.find((c) => c.id === 'batman'),
    costumedCharactersData.girlsCharacters.find((c) => c.id === 'pamuk-prenses'),
    costumedCharactersData.girlsCharacters.find((c) => c.id === 'minnie-mouse')
  ].filter(Boolean)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.character-hero-section')
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

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowDown' && activeSection < mainCharacters.length - 1) {
        const nextSection = document.querySelectorAll('.character-hero-section')[activeSection + 1]
        nextSection?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'ArrowUp' && activeSection > 0) {
        const prevSection = document.querySelectorAll('.character-hero-section')[activeSection - 1]
        prevSection?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [activeSection, mainCharacters.length])

  const scrollToSection = (index) => {
    const section = document.querySelectorAll('.character-hero-section')[index]
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Helmet>
        <title>Kostümlü Karakterler Kiralama İstanbul | Elsa, Spiderman, Batman | Best Event</title>
        <meta
          name="description"
          content="İstanbul'da kostümlü karakter kiralama. Elsa, Spiderman, Batman, Pamuk Prenses, Minnie Mouse, Deniz Kızı. ☎ 0534 930 67 99"
        />
      </Helmet>

      <main className="overflow-x-hidden scroll-smooth snap-y snap-mandatory">
        {/* Progress Indicators */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
          {mainCharacters.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeSection === index ? 'bg-white scale-150' : 'bg-white/30 hover:bg-white/50'}
              `}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>

        {/* Full-screen character sections */}
        {mainCharacters.map((character, index) => (
          <section
            key={character.id}
            className="character-hero-section relative min-h-screen flex items-start justify-center overflow-hidden snap-start cursor-pointer"
            onClick={() => navigate(`/${character.slug}`)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                navigate(`/${character.slug}`)
              }
            }}
            role="button"
            aria-label={`${character.name} sayfasına git`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${character.heroImage}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[17vh]">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-bold text-white leading-tight tracking-tight"
                style={{
                  textShadow: '0 2px 20px rgba(0,0,0,.45)',
                  fontSize: 'clamp(2.25rem, 6vw, 4rem)',
                  letterSpacing: '-0.035em',
                  lineHeight: '1.25',
                  fontWeight: '700',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                {character.name}
              </motion.h1>
            </div>

            <motion.a
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              href={`/${character.slug}`}
              className="absolute bottom-8 right-8 z-20 min-h-[44px] px-7 py-3.5 bg-white/90 backdrop-blur-md text-purple-600 rounded-full font-semibold text-base hover:shadow-xl transition-all transform hover:scale-105"
            >
              İncele →
            </motion.a>

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

        {/* Narrative sections and images */}
        <NarrativeSection
          eyebrow="10+ YIL DENEYİM"
          title="Hayalleri Gerçeğe Dönüştürüyoruz"
          body="Best Event olarak İstanbul'da 10+ yıldır unutulmaz kostümlü karakter kiralama hizmeti sunuyoruz. Elsa, Spiderman, Batman, Pamuk Prenses ve daha fazlası... Çocuğunuzun en sevdiği karakterle özel anlar yaratıyoruz. Her detayı titizlikle planlıyor, sizin sadece keyif almanızı sağlıyoruz."
        />
        <FullBleedHero
          media={{ type: 'image', src: '/content/images/Kostumlukarakterler/elsaheroo.JPG', alt: 'İstanbul Elsa kiralama hizmeti' }}
          theme="dark"
          fit="cover"
          gradient={false}
        />

        <NarrativeSection
          eyebrow="PROFESYONEL KALİTE"
          title="Lisanslı ve Güvenli Kostümler"
          body="Tüm kostümlerimiz profesyonel standartlarda, hijyenik ve düzenli olarak yenilenir. Karakterlerimiz çocuklarla iletişimde uzman, deneyimli animatörler tarafından canlandırılır. Güvenlik ve hijyen önceliğimizdir."
        />
        <FullBleedHero
          media={{ type: 'image', src: '/content/images/Kostumlukarakterler/spidermanrenkliii.jpg', alt: 'İstanbul Spiderman kiralama' }}
          theme="dark"
          fit="cover"
          gradient={false}
        />

        <NarrativeSection
          eyebrow="GENIŞ PORTFÖY"
          title="Her Çocuğun Favorisi Burada"
          body="Prenseslerden süper kahramanlara, çizgi film karakterlerinden maskot kiralama seçeneklerine kadar geniş bir portföyümüz var. Elsa, Pamuk Prenses, Minnie Mouse, Spiderman, Batman, Sonic ve daha fazlası. İsteğinize özel karakterler de temin edebiliriz."
        />
        <FullBleedHero
          media={{ type: 'image', src: '/content/images/Kostumlukarakterler/pamuksprenseshero.JPG', alt: 'İstanbul Pamuk Prenses kiralama' }}
          theme="dark"
          fit="cover"
          gradient={false}
        />

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              {[
                {
                  question: 'Hangi karakterler mevcut?',
                  answer:
                    'Elsa, Pamuk Prenses, Minnie Mouse, Deniz Kızı, Spiderman, Batman, Sonic ve daha fazlası. Geniş portföyümüz için bizi arayın.'
                },
                {
                  question: 'Kostümlü karakter kiralama kaç saat sürer?',
                  answer: 'Standart paketlerimiz 1-2 saat arası sürmektedir. İhtiyacınıza göre süre uzatılabilir.'
                },
                {
                  question: "İstanbul'un hangi bölgelerinde hizmet veriyorsunuz?",
                  answer:
                    "Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Şişli, Beşiktaş, Beyoğlu, Bakırköy, Başakşehir, Sarıyer, Esenyurt ve İstanbul'un tüm ilçelerinde hizmet veriyoruz."
                },
                {
                  question: 'Fiyatlar nedir?',
                  answer:
                    'Fiyatlarımız karakter, süre ve lokasyona göre değişiklik gösterir. Detaylı fiyat bilgisi için bizi arayın: 0534 930 67 99'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Hemen Rezervasyon Yapın!</h2>
            <p className="text-2xl mb-10 text-white/90">Çocuğunuzun hayalindeki karakterle unutulmaz anlar yaratın</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905349306799?text=Kostümlü karakter kiralama hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+905349306799"
                className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
              >
                📞 0534 930 67 99
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default CostumedCharacters
