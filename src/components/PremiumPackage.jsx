import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PremiumPackage = () => {
  const packageItems = [
    'Konsept Doğum Günü',
    'Konsept Pasta',
    'Palyaço + 1 Kostümlü Karakter',
    'Bubble Show veya Sihirbazlık Gösterisi',
    'Profesyonel Yüz Boyama',
    'Yetişkinlere Glitter Party'
  ]

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0a0118] text-white overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(236,72,153,0.15),_transparent_50%)] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-300 mb-4 font-medium">
            Premium Paket
          </p>
          <h2 
            className="font-display font-bold text-white mb-6" 
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}
          >
            Tek Paket, Tam Organizasyon
          </h2>
          <p 
            className="text-white/70 max-w-3xl mx-auto mb-4" 
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', lineHeight: '1.6' }}
          >
            "Senin uğraşmana gerek yok, biz zaten her gün bunu yapıyoruz."
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Package Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Package Items */}
            <div className="space-y-6 mb-10">
              {packageItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p 
                    className="text-white/90 font-medium group-hover:text-white transition-colors"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10"
            >
              <p className="text-white/70 italic" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)', lineHeight: '1.6' }}>
                <span className="text-purple-300 font-semibold">Not:</span> Mekâna ve yaş grubuna göre gösteriyi birlikte belirliyoruz.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/organizasyonlar/tam-paket-organizasyon"
                className="flex-1 inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
              >
                Paketi İncele
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <a
                href="https://wa.me/905349306799?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp'tan Teklif Al
              </a>
            </motion.div>
          </motion.div>

          {/* Full-width Atmosphere Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[70vh] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/content/images/konseptdogumgunu/konseptdogumgunu.JPG"
              alt="Best Event - Premium Paket Organizasyon"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3">
              <p className="text-white font-bold" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                %100 Hizmet Garantisi
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PremiumPackage
