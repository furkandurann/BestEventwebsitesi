import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TargetSegments = () => {
  const segments = [
    {
      title: 'Çocuk Etkinlikleri',
      description: 'Doğum günleri, okul şenlikleri ve özel günlerde çocuklarınızı büyüleyen eğlenceli organizasyonlar.',
      features: [
        'Konsept Doğum Günleri',
        'Palyaço ve Animasyon',
        'Bubble & Sihir Gösterileri',
        'Kostümlü Karakterler'
      ],
      image: '/content/images/cocukdogumgunu/konseptdogumgunu.JPG',
      link: '/organizasyonlar/cocuk-etkinlikleri',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-500/20 to-orange-500/20'
    },
    {
      title: 'Kurumsal Etkinlikler',
      description: 'Şirket etkinlikleri, lansmanlar ve team building organizasyonlarında profesyonel çözümler.',
      features: [
        'Lansman ve Gala',
        'Team Building',
        'Açılış Organizasyonu',
        'Kurumsal Kutlamalar'
      ],
      image: '/content/images/kurumsal/kurumsal1.JPG',
      link: '/organizasyonlar/kurumsal-etkinlik',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      title: 'Yetişkin Kutlamaları',
      description: 'Doğum günleri, evlilik yıldönümleri ve özel günlerinizde unutulmaz anlar yaratıyoruz.',
      features: [
        'Doğum Günü Partileri',
        'Evlilik Yıldönümü',
        'Bekarlığa Veda',
        'Özel Kutlamalar'
      ],
      image: '/content/images/yetiskindogumgunu/yetiskin1.JPG',
      link: '/organizasyonlar/yetiskin-etkinlikleri',
      gradient: 'from-fuchsia-500 to-pink-500',
      bgGradient: 'from-fuchsia-500/20 to-pink-500/20'
    }
  ]

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.05),_transparent_50%)] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-600 mb-4 font-medium">
            Hedef Kitlelerimiz
          </p>
          <h2 
            className="font-display font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6" 
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}
          >
            Kimler İçin Tasarlıyoruz?
          </h2>
          <p 
            className="text-gray-600 max-w-3xl mx-auto" 
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.6' }}
          >
            Her yaş grubu ve her etkinlik türü için özel çözümler sunuyoruz
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${segment.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${segment.bgGradient} via-transparent to-transparent opacity-60`} />
                  
                  {/* Title Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 
                      className={`font-display font-bold text-white mb-2 bg-gradient-to-r ${segment.gradient} bg-clip-text text-transparent`}
                      style={{ 
                        fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                        WebkitTextFillColor: 'white',
                        WebkitTextStroke: '0px'
                      }}
                    >
                      {segment.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <p 
                    className="text-gray-600 mb-6 leading-relaxed" 
                    style={{ fontSize: 'clamp(0.95rem, 2vw, 1.0625rem)', lineHeight: '1.6' }}
                  >
                    {segment.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {segment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${segment.gradient} flex items-center justify-center`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to={segment.link}
                    className={`block w-full text-center px-6 py-4 rounded-full bg-gradient-to-r ${segment.gradient} text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    style={{ fontSize: 'clamp(0.95rem, 2vw, 1.0625rem)' }}
                  >
                    Detaylı Bilgi
                    <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TargetSegments
