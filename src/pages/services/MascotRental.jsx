import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { createServiceSchema, createFAQSchema } from '../../utils/schemaHelpers'

const MascotRental = () => {
  // FAQ
  const faqs = [
    {
      question: 'Maskot organizasyon süresi ne kadar?',
      answer: 'Standart maskot organizasyon 60-90 dakika arasıdır. Kostüm içinde sıcaklık ve yorulma nedeniyle 15-20 dakikalık molalar verilir. Detaylı bilgi için 0530 730 90 09 numarasından bize ulaşabilirsiniz.'
    },
    {
      question: 'Hangi maskot karakterleri mevcut?',
      answer: '23 farklı maskot koleksiyonumuz var: Hello Kitty, Kuromi, Sonic, Super Mario, Paw Patrol, Mickey Mouse, Minnie Mouse, Winnie the Pooh ve daha fazlası. Her yaş grubuna uygun maskotlarımız mevcuttur.'
    },
    {
      question: 'İstanbul\'un hangi bölgelerinde hizmet veriyorsunuz?',
      answer: 'Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Şişli, Beşiktaş, Beyoğlu, Bakırköy, Başakşehir, Sarıyer, Esenyurt ve İstanbul\'un tüm ilçelerinde maskot organizasyon hizmeti veriyoruz.'
    },
    {
      question: 'Maskotlar kaliteli mi?',
      answer: 'Evet, tüm maskotlarımız profesyonel ve kaliteli. Profesyonel standartlarda, temiz ve düzenli olarak bakımı yapılmış koca kafalı kostümler kullanıyoruz.'
    },
    {
      question: 'Maskot içindeki kişi profesyonel mi?',
      answer: 'Evet! Tüm maskot performanslarımız deneyimli performans sanatçıları tarafından gerçekleştirilir. Dans, hareket, çocuklarla etkileşim ve fotoğraf pozu verme konularında eğitimlidirler.'
    },
    {
      question: 'Fiyatlandırma nasıl yapılıyor?',
      answer: 'Fiyatlandırma maskot tipi, organizasyon süresi ve lokasyona göre değişiklik gösterir. Detaylı fiyat teklifi için 0530 730 90 09 numarasından bize ulaşabilirsiniz.'
    },
    {
      question: 'Maskotlar çocuklarla nasıl etkileşim kurar?',
      answer: 'Profesyonel ekibimiz çocuklarla oyunlar oynar, fotoğraf çektirir, dans eder ve eğlenceli aktiviteler yapar. Her maskot karakterine uygun davranır.'
    },
    {
      question: 'İç ve dış mekanda kullanılabilir mi?',
      answer: 'Evet, her iki ortamda da kullanılabilir. Hem kapalı hem açık alanlarda hizmet veriyoruz. Ev, bahçe, düğün salonu, AVM, park gibi her mekanda organizasyon yapabiliyoruz.'
    }
  ]

  const serviceSchema = createServiceSchema(
    'Maskot Kiralama İstanbul',
    'Maskot kiralama İstanbul. Sonic, Paw Patrol, Hello Kitty, Unicorn, Mickey Mouse ve tüm maskotlar. Kurumsal ve özel etkinlikler.',
    '/organizasyonlar/maskot-kiralama',
    'Maskot Kiralama'
  )
  const faqSchema = createFAQSchema(faqs)

  return (
    <>
      <Seo
        title="Maskot Kiralama İstanbul | Sonic Paw Patrol Hello Kitty Unicorn"
        description="Maskot kiralama İstanbul. Sonic, Paw Patrol, Hello Kitty, Unicorn, Mickey Mouse ve tüm maskotlar. Kurumsal ve özel etkinlikler. ☎ 0530 730 90 09"
        keywords={[
          'maskot kiralama istanbul',
          'sonic maskot',
          'paw patrol maskot',
          'hello kitty maskot',
          'unicorn maskot',
          'mickey mouse maskot'
        ]}
        canonicalPath="/organizasyonlar/maskot-kiralama"
        schema={[
          serviceSchema,
          faqSchema
        ]}
      />

      {/* 2 BIG HERO SECTIONS */}
      
      {/* Hero 1: KIZ ÇOCUK MASKOTLARI */}
      <Link to="/organizasyonlar/kiz-maskotlari">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-pointer group"
        >
          {/* Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('/content/images/maskotlar/kizanahero.webp')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/5"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white group-hover:scale-105 transition-transform"
              style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}
            >
              Maskot Kiralama İstanbul
            </motion.h1>
          </div>

          {/* İncele button - Sağ alt köşe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-8 right-8 z-20 min-h-[44px] px-7 py-3.5 bg-white/90 backdrop-blur-md text-purple-600 rounded-full font-semibold text-base hover:shadow-xl transition-all transform hover:scale-105"
          >
            İncele →
          </motion.div>
        </motion.section>
      </Link>

      {/* Hero 2: ERKEK ÇOCUK MASKOTLARI */}
      <Link to="/organizasyonlar/erkek-maskotlari">
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-pointer group"
        >
          {/* Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('/content/images/maskotlar/erkekanahero.webp')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/5"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white group-hover:scale-105 transition-transform"
              style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}
            >
              Erkek Çocuk Maskotları
            </motion.h1>
          </div>

          {/* İncele button - Sağ alt köşe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-8 right-8 z-20 min-h-[44px] px-7 py-3.5 bg-white/90 backdrop-blur-md text-purple-600 rounded-full font-semibold text-base hover:shadow-xl transition-all transform hover:scale-105"
          >
            İncele →
          </motion.div>
        </motion.section>
      </Link>

      {/* Neden Best Event? */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-blue-400 mb-4 font-medium">10+ YIL DENEYİM</p>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2' }}>
              Neden Best Event?
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
              İstanbul'da 10+ yıldır maskot organizasyon hizmeti sunuyoruz. 800+ başarılı etkinlik, 2500+ mutlu çocuk. Profesyonel maskotlarımız ve deneyimli ekibimizle yanınızdayız.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎭",
                title: "23 Farklı Maskot",
                description: "Hello Kitty, Sonic, Mickey Mouse, Paw Patrol ve daha fazlası. Kız ve erkek çocuklar için geniş maskot portföyü."
              },
              {
                icon: "⭐",
                title: "Profesyonel Performans",
                description: "Deneyimli performans sanatçıları. Dans, etkileşim, fotoğraf pozu verme konularında uzman ekip."
              },
              {
                icon: "✨",
                title: "Yüksek Kalite Kostümler",
                description: "Profesyonel standartlarda koca kafalı maskotlar. Temiz, bakımlı ve görsel olarak etkileyici kostümler."
              },
              {
                icon: "🎉",
                title: "İnteraktif Aktiviteler",
                description: "Oyunlar, dans, fotoğraf çekimi. Maskotlarımız çocuklarla aktif etkileşim kurar ve eğlenceyi doruğa çıkarır."
              },
              {
                icon: "📸",
                title: "Unutulmaz Anılar",
                description: "Çocukların en sevdiği karakterlerle fotoğraf çekimi. Her etkinlikte özel anılar yaratıyoruz."
              },
              {
                icon: "💯",
                title: "Müşteri Memnuniyeti",
                description: "%98 müşteri memnuniyeti oranı. Binlerce olumlu geri bildirim. Kurumsal ve bireysel referanslar."
              },
              {
                icon: "📍",
                title: "Tüm İstanbul'da Hizmet",
                description: "Kadıköy'den Beylikdüzü'ne, Sarıyer'den Maltepe'ye. İstanbul'un her köşesinde maskot organizasyon."
              },
              {
                icon: "🚀",
                title: "Hızlı Rezervasyon",
                description: "WhatsApp veya telefon ile anında rezervasyon. Esnek tarih ve saat seçenekleri. 7/24 iletişim."
              },
              {
                icon: "🎁",
                title: "Ekstra Sürprizler",
                description: "Balon hediyeler ve sürpriz aktiviteler. Her etkinlikte özel anlar ve eğlence garantisi."
              },
              {
                icon: "🏆",
                title: "Tecrübeli Organizasyon",
                description: "800+ başarılı maskot organizasyon deneyimi. Doğum günleri, kurumsal etkinlikler, okul aktiviteleri."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-white/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Sıkça Sorulan Sorular
          </h2>
          
          {/* İlk 2 FAQ açık */}
          <div className="space-y-6 mb-6">
            {faqs.slice(0, 2).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-bold text-xl text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {faq.question}
                </h3>
                <p className="text-white leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Kalan FAQ accordion */}
          <div className="space-y-4">
            {faqs.slice(2).map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all shadow-md"
              >
                <summary className="font-bold text-lg text-white cursor-pointer list-none flex justify-between items-center">
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>{faq.question}</span>
                  <span className="text-white group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-white leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Hizmet Bölgelerimiz
          </h2>
          <p className="text-xl text-white mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            İstanbul'un tüm ilçelerinde maskot organizasyon hizmeti
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Kadıköy', 'Beşiktaş', 'Şişli', 'Bakırköy',
              'Üsküdar', 'Maltepe', 'Kartal', 'Ataşehir',
              'Pendik', 'Sarıyer', 'Beyoğlu', 'Fatih',
              'Başakşehir', 'Küçükçekmece', 'Esenyurt', 've daha fazlası...'
            ].map((district, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="py-3 px-4 bg-gray-800 text-white rounded-lg shadow-sm font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {district}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
            Hemen Rezervasyon Yapın!
          </h2>
          <p className="text-xl mb-10 text-white/95 text-center max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
            Çocuğunuzun hayalindeki maskotla unutulmaz bir doğum günü
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all transform hover:scale-105"
            >
              WhatsApp
            </a>
            <a
              href="tel:+905307309009"
              className="min-h-[44px] bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all transform hover:scale-105"
            >
              0530 730 90 09
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default MascotRental
