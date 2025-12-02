import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const Services = () => {
  const services = [
    { title: 'Çocuk Etkinlikleri', icon: '🎪', path: '/organizasyonlar/cocuk-etkinlikleri', color: 'from-pink-500 to-rose-500' },
    { title: 'Palyaço Kiralama', icon: '🤡', path: '/organizasyonlar/palyaco-kiralama', color: 'from-red-500 to-pink-500' },
    { title: 'Kostümlü Karakterler', icon: '🦸', path: '/organizasyonlar/kostumlu-karakterler', color: 'from-purple-500 to-pink-500' },
    { title: 'Yüz Boyama', icon: '🎨', path: '/organizasyonlar/yuz-boyama', color: 'from-blue-500 to-cyan-500' },
    { title: 'Sihirbaz Show', icon: '🎩', path: '/organizasyonlar/sihirbaz', color: 'from-indigo-500 to-purple-500' },
    { title: 'Bubble Show', icon: '💧', path: '/organizasyonlar/bubble-show', color: 'from-cyan-500 to-blue-500' },
    { title: 'Konsept Doğum Günü', icon: '🎉', path: '/organizasyonlar/konsept-dogum-gunu', color: 'from-yellow-500 to-orange-500' },
    { title: 'Doğum Günü Organizasyonu', icon: '🎂', path: '/organizasyonlar/dogum-gunu', color: 'from-pink-500 to-purple-500' },
    { title: 'DJ Kiralama', icon: '🎧', path: '/organizasyonlar/dj-kiralama', color: 'from-green-500 to-teal-500' },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <Seo
        title="Best Event Hizmetleri | Çocuk, Kurumsal, Dans ve Müzik Organizasyonları"
        description="Palyaço kiralamadan kurumsal etkinliklere, canlı müzik ve dans gösterilerine kadar tüm hizmetlerimizi keşfedin. İstanbul ve çevresinde anahtar teslim organizasyon çözümleri."
        keywords={[
          'çocuk partisi hizmetleri',
          'kurumsal etkinlik hizmetleri',
          'müzik organizasyonu',
          'palyaço kiralama',
          'dans gösterisi istanbul'
        ]}
      />
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesyonel ekibimizle hayalinizdeki etkinliği gerçeğe dönüştürüyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link to={service.path}>
                <div className={`relative overflow-hidden rounded-3xl p-8 h-full bg-gradient-to-br ${service.color} text-white shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <div className="flex items-center text-sm font-semibold">
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
