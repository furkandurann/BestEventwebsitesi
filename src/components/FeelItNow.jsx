import { motion } from 'framer-motion'

const FeelItNow = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1),_transparent_70%)] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Manifesto Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-300 mb-6 font-medium">
            Hemen Hisset
          </p>
          <h2 
            className="font-display font-bold text-white mb-8 max-w-5xl mx-auto" 
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: '1.2' }}
          >
            Bir etkinlik sadece eğlence değil; atmosfer, ritim ve detay işidir.
          </h2>
          <p 
            className="text-white/70 max-w-3xl mx-auto" 
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', lineHeight: '1.6' }}
          >
            Biz bunları her gün yapıyoruz.
          </p>
        </motion.div>

        {/* Full-width Narrative Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[70vh] lg:h-[80vh] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/content/images/fullpaket/fullpaket1.JPG"
            alt="Best Event - Etkinlik Atmosferi"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Bottom Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white font-display font-semibold"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.5' }}
            >
              Her detayda mükemmellik, her anda profesyonellik.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeelItNow
