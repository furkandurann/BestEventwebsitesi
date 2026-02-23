import { useState, useEffect } from 'react'
import Seo from '../../components/Seo'
import { costumedCharactersData } from '../../data/costumedCharactersData'
import NarrativeSection from '../../components/NarrativeSection'
import FullBleedHero from '../../components/FullBleedHero'
import { useNavigate } from 'react-router-dom'

const faqData = [
  {
    question: 'Hangi karakterler mevcut?',
    answer: 'Elsa, Pamuk Prenses, Minnie Mouse, Deniz Kızı, Spiderman, Batman, Sonic ve daha fazlası. Geniş portföyümüz için bizi arayın.'
  },
  {
    question: 'Kostümlü karakter kiralama kaç saat sürer?',
    answer: 'Standart paketlerimiz 1-2 saat arası sürmektedir. İhtiyacınıza göre süre uzatılabilir.'
  },
  {
    question: "İstanbul'un hangi bölgelerinde hizmet veriyorsunuz?",
    answer: "Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Şişli, Beşiktaş, Beyoğlu, Bakırköy, Başakşehir, Sarıyer, Esenyurt ve İstanbul'un tüm ilçelerinde hizmet veriyoruz."
  },
  {
    question: 'Fiyatlar nedir?',
    answer: 'Fiyatlarımız karakter, süre ve lokasyona göre değişiklik gösterir. Detaylı fiyat bilgisi için bizi arayın: 0530 730 90 09'
  }
]

const CostumedCharacters = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const allMainCharacters = [
    costumedCharactersData.girlsCharacters.find((c) => c.id === 'elsa'),
    costumedCharactersData.boysCharacters.find((c) => c.id === 'spiderman'),
    costumedCharactersData.boysCharacters.find((c) => c.id === 'batman'),
    costumedCharactersData.girlsCharacters.find((c) => c.id === 'pamuk-prenses'),
    costumedCharactersData.girlsCharacters.find((c) => c.id === 'minnie-mouse')
  ].filter(Boolean)

  // Filter characters based on search term
  const mainCharacters = allMainCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

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

    window.addEventListener('scroll', handleScroll, { passive: true })
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
      <Seo
        title="Kostümlü Karakter Kiralama İstanbul | Elsa Prenses Spiderman Batman Minnie"
        description="Kostümlü karakter kiralama İstanbul. Elsa, Pamuk Prenses, Spiderman, Batman, Minnie Mouse, Mickey Mouse, Paw Patrol animasyonu. ☎ 0530 730 90 09"
        keywords={[
          'kostümlü karakter kiralama istanbul',
          'elsa kiralama',
          'spiderman kiralama',
          'batman kiralama',
          'prenses kiralama',
          'minnie mouse kiralama'
        ]}
        canonicalPath="/organizasyonlar/kostumlu-karakterler"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Kostümlü Karakterler Kiralama İstanbul",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BestEvent",
              "areaServed": ["Kadıköy", "Üsküdar", "Ataşehir", "Maltepe", "Kartal", "Şişli", "Beşiktaş", "Beyoğlu", "Bakırköy", "Başakşehir", "Sarıyer", "Esenyurt", "İstanbul"]
            },
            "serviceType": "Kostümlü Karakter Kiralama",
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

      <main className="overflow-x-hidden scroll-smooth snap-y snap-mandatory">
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/905307309009?text=Merhaba Kostümlü karakter hakkında bilgi almak istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
          aria-label="WhatsApp ile iletişime geç"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Search Bar - Fixed Position */}
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Karakter ara... (Elsa, Spiderman, Batman...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 pr-12 rounded-full bg-white/90 backdrop-blur-md border-2 border-white/50 shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 placeholder-gray-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Aramayı temizle"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

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
        {mainCharacters.length === 0 ? (
          <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
            <div className="text-center px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Karakter bulunamadı</h2>
              <p className="text-gray-600 mb-8">Arama kriterinize uygun karakter bulunamadı. Lütfen farklı bir arama yapın.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Tüm Karakterleri Göster
              </button>
            </div>
          </section>
        ) : (
          mainCharacters.map((character, index) => (
            <section
              key={character.id}
              className="character-hero-section relative min-h-screen flex items-start justify-center overflow-hidden snap-start"
            >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${character.heroImage}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
            </div>

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
                {index === 0 ? 'Kostümlü Karakter Kiralama İstanbul' : character.name}
              </h1>
            </div>

            {index === 0 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                </div>
              </div>
            )}
            </section>
          ))
        )}

        {/* Narrative sections and images */}
        <NarrativeSection
          eyebrow="10+ YIL DENEYİM"
          title="Hayalleri Gerçeğe Dönüştürüyoruz"
          body="Best Event olarak İstanbul'da 10+ yıldır unutulmaz kostümlü karakter kiralama hizmeti sunuyoruz. Elsa, Spiderman, Batman, Pamuk Prenses ve daha fazlası... Çocuğunuzun en sevdiği karakterle özel anlar yaratıyoruz. Her detayı titizlikle planlıyor, sizin sadece keyif almanızı sağlıyoruz."
        />
        <FullBleedHero
          media={{ type: 'image', src: '/content/images/Kostumlukarakterler/elsaheroo.webp', alt: 'İstanbul Elsa kiralama hizmeti' }}
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
          media={{ type: 'image', src: '/content/images/Kostumlukarakterler/spidermanrenkliii.webp', alt: 'İstanbul Spiderman kiralama' }}
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
          media={{ type: 'image', src: '/content/images/Kostumlukarakterler/pamuksprenseshero.webp', alt: 'İstanbul Pamuk Prenses kiralama' }}
          theme="dark"
          fit="cover"
          gradient={false}
        />

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm animate-fade-in"
                >
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
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

export default CostumedCharacters
