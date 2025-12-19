import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import CountUp from 'react-countup'
import Seo from '../components/Seo'

const Home = () => {
  const highlightBadges = [
    {
      title: 'Konsept & Tasarım',
      description: 'Markanıza özel ışık, dekor ve hikâye kurgusu ile etkinliğinizi unutulmaz kılıyoruz',
      gradient: 'from-purple-500/20 via-pink-500/10 to-purple-500/20'
    },
    {
      title: 'Sahne & Altyapı',
      description: 'Profesyonel ses, ışık, DJ ve canlı müzik prodüksiyonu ile mükemmel atmosfer',
      gradient: 'from-pink-500/20 via-purple-500/10 to-pink-500/20'
    },
    {
      title: 'Ekip Yönetimi',
      description: 'Deneyimli animasyon, dans ve koordinasyon ekibi ile kusursuz organizasyon',
      gradient: 'from-indigo-500/20 via-purple-500/10 to-indigo-500/20'
    },
    {
      title: '360° Deneyim',
      description: 'Ön planlamadan raporlamaya kadar her detayda sizinle birlikte',
      gradient: 'from-purple-500/20 via-indigo-500/10 to-purple-500/20'
    }
  ]

  const signatureServices = [
    {
      title: 'Çocuk Etkinlikleri',
      description: 'Konsept doğum günleri, palyaço ve sahne şovlarıyla küçük misafirlerinizi büyüleyin. Her yaş grubuna özel aktiviteler ve profesyonel animasyon ekibi.',
      link: '/hizmetler/cocuk-etkinlikleri',
      gradient: 'from-amber-400 via-orange-400 to-pink-400',
      textGradient: 'from-amber-500 to-pink-500'
    },
    {
      title: 'Kurumsal Organizasyonlar',
      description: 'Lansman, gala ve team building etkinliklerinde profesyonel yönetim. Kurumsal kimliğinize uygun, etkileyici organizasyonlar.',
      link: '/hizmetler/kurumsal-etkinlik',
      gradient: 'from-blue-400 via-indigo-400 to-purple-400',
      textGradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Müzik & Performans',
      description: 'Canlı müzik ve sahne performansları ile etkinliğinize değer katın. Trio, piyanist, saksafon ve DJ ekibimizle unutulmaz anlar.',
      link: '/hizmetler/muzik-etkinlikleri',
      gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
      textGradient: 'from-emerald-500 to-cyan-500'
    },
    {
      title: 'Dans ve Sahne Şovları',
      description: 'Oryantal, efe dansı ve konsept koreografilerle sahneyi ateşleyin. Profesyonel dansçılar ve etkileyici performanslar.',
      link: '/hizmetler/dans-etkinlikleri',
      gradient: 'from-fuchsia-400 via-purple-400 to-pink-400',
      textGradient: 'from-fuchsia-500 to-pink-500'
    }
  ]

  const stats = [
    { number: 5000, suffix: '+', label: 'Mutlu Misafir' },
    { number: 10, suffix: '+', label: 'Yıl Tecrübe' },
    { number: 500, suffix: '+', label: 'Etkinlik/Yıl' },
    { number: 98, suffix: '%', label: 'Memnuniyet' }
  ]

  const processSteps = [
    {
      title: 'Keşif ve Konsept',
      description: 'Brief toplantısı, mekan analizi ve moodboard ile sahnenizi kurguluyoruz. Hayalinizdeki etkinliği birlikte tasarlıyoruz.',
      number: '01'
    },
    {
      title: 'Prodüksiyon Planı',
      description: 'Sahne, ekipman ve cast planlamasını tek timeline\'da topluyoruz. Her detay özenle planlanır.',
      number: '02'
    },
    {
      title: 'Sahada Koordinasyon',
      description: 'Kurulumdan canlı yönetim ve final raporuna kadar tek ekip yönetimi. Siz etkinliğin tadını çıkarın.',
      number: '03'
    }
  ]

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Best Event',
    url: 'https://www.bestevent.com.tr',
    logo: 'https://www.bestevent.com.tr/content/images/slider/konfeti.jpg',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+90-530-730-90-09',
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: ['Turkish', 'English']
      }
    ],
    sameAs: ['https://instagram.com/palyacogezegenii']
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Best Event',
    url: 'https://www.bestevent.com.tr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.bestevent.com.tr/hizmetler?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <div>
      <Seo
        title="Best Event | İstanbul Etkinlik ve Organizasyon Ajansı"
        description="Palyaço kiralama, çocuk etkinlikleri, kurumsal organizasyonlar, canlı müzik ve dans gösterileriyle İstanbul'da anahtar teslim etkinlik çözümleri sunuyoruz."
        keywords={[
          'etkinlik ajansı istanbul',
          'çocuk etkinlikleri',
          'kurumsal organizasyon',
          'palyaço kiralama',
          'canlı müzik organizasyonu',
          'dans gösterisi'
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [organizationSchema, websiteSchema]
        }}
      />
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* Highlights Section - Apple Style */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-[#09040f] via-[#120a1c] to-[#09040f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.15),_transparent_70%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-300 mb-4 font-medium">Best Event Experience</p>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2' }}>
              Her Detayında Mükemmellik
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
              Konsept tasarımından sahne prodüksiyonuna kadar her adımı tek ekip olarak yönetiyor, misafirlerinizin hafızasına kazınacak anlar yaratıyoruz.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlightBadges.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="relative z-10">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed" style={{ lineHeight: '1.7' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Services - Premium Cards */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-[#110b1d] via-[#0f0316] to-[#1a0d2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-pink-300 mb-4 font-medium">Signature Services</p>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2' }}>
              Sizin İçin Tasarladık
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
              Her biri yüzlerce etkinlikte test edilmiş, markanıza göre özelleştirilen organizasyon paketleri.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {signatureServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r ${service.textGradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-8 min-h-[4.5rem]" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: '1.7' }}>
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/90 hover:bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
                  >
                    Detayları Keşfet
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section - Enhanced */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-r from-[#1b0f2d] via-[#100820] to-[#1b0f2d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.2),_transparent_70%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', lineHeight: '1.2' }}>
              Rakamlarla Best Event
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
              Onlarca yıllık deneyimimiz ve binlerce mutlu müşterimiz bizim en büyük referansımız
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 sm:p-8 text-center shadow-xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="font-display font-bold text-white mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1' }}>
                    <CountUp end={stat.number} duration={2.5} separator="." />
                    {stat.suffix}
                  </div>
                  <p className="text-white/70 uppercase tracking-wider font-medium" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline Style */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-purple-900/75 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white mb-16 sm:mb-20"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-300 mb-4 font-medium">Nasıl Çalışıyoruz?</p>
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2' }}>
              Brifingden Sahne Finaline Kusursuz Akış
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
              Etkinliğinizi hayal ettiğiniz gibi yaşatmak için tüm departmanlarımız aynı timeline üzerinde buluşuyor.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 h-full text-white hover:border-white/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="font-display text-6xl sm:text-7xl font-bold text-white/10 mb-4">{step.number}</div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: '1.7' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              to="/iletisim"
              className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
            >
              Etkinliğinizi Planlayalım
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - WhatsApp */}
      <section
        id="rezervasyon"
        className="relative py-20 sm:py-28 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2' }}>
                Hayalinizdeki Etkinliği Birlikte Planlayalım
              </h2>
              <p className="text-white/90 mb-10" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.7' }}>
                Profesyonel ekibimiz sizinle iletişime geçmek için hazır. Hemen WhatsApp'tan ulaşın, size özel teklifimizi alalım!
              </p>
              
              <motion.a
                href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full font-bold shadow-2xl transition-all"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
              >
                <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp ile İletişime Geç
              </motion.a>

              <p className="mt-8 text-white/80" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                veya <Link to="/iletisim" className="underline hover:text-white font-medium">iletişim formunu</Link> doldurun
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Trust Signals */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2' }}>
              Neden Best Event?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}>
              İstanbul'un önde gelen etkinlik organizasyon şirketlerinden biri olmanın gururunu yaşıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: 'Deneyimli Ekip',
                description: '10 yılı aşkın tecrübemiz ve profesyonel ekibimizle her etkinlikte mükemmel sonuçlar',
                stat: '10+ Yıl'
              },
              {
                title: 'Kalite Garantisi',
                description: 'Her detayda profesyonel standartlar ve kusursuz hizmet kalitesi ile %98 müşteri memnuniyeti',
                stat: '%98'
              },
              {
                title: 'Hızlı Hizmet',
                description: '7/24 destek hattımız ve hızlı rezervasyon sistemi ile anında çözüm üretiyoruz',
                stat: '7/24'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="font-display text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                  {item.stat}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: '1.7' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
