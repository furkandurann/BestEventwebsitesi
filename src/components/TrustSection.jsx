import { motion } from 'framer-motion'

const dontItems = [
  'Geç kalmaz',
  'Eksik yapmaz',
  'Erken çıkmaz',
  'Kötü iletişim kurmaz',
]

const doItems = [
  'Zamanında gelir',
  'Hediyeler ekler',
  'Sizinle iyi bir iletişim kurar',
  'Çocuklarınızı mutlu eder',
]

const TrustSection = () => {
  return (
    <section className="py-12 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-black via-zinc-900/80 to-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-14"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-orange-400 mb-3 sm:mb-4 font-medium">
            Neden Best Event?
          </p>
          <h2
            className="font-bold text-white"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              lineHeight: '1.15',
              letterSpacing: '-0.025em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Güvenin Adresi
          </h2>
        </motion.div>

        {/* Two Column Grid - always side by side */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {/* Ne Yapmaz */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-red-950/20 backdrop-blur-sm border border-red-500/20"
          >
            <div className="p-4 sm:p-8">
              <h3
                className="font-bold text-white mb-4 sm:mb-8"
                style={{
                  fontSize: 'clamp(0.875rem, 2.5vw, 1.75rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                Ne <span className="text-red-400">Yapmaz?</span>
              </h3>

              <ul className="space-y-3 sm:space-y-5">
                {dontItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-2 sm:gap-4"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span
                      className="text-zinc-200"
                      style={{
                        fontSize: 'clamp(0.75rem, 1.8vw, 1.125rem)',
                        fontWeight: '500',
                        letterSpacing: '-0.01em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Ne Yapar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-green-950/20 backdrop-blur-sm border border-green-500/20"
          >
            <div className="p-4 sm:p-8">
              <h3
                className="font-bold text-white mb-4 sm:mb-8"
                style={{
                  fontSize: 'clamp(0.875rem, 2.5vw, 1.75rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                Ne <span className="text-green-400">Yapar?</span>
              </h3>

              <ul className="space-y-3 sm:space-y-5">
                {doItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-2 sm:gap-4"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span
                      className="text-zinc-200"
                      style={{
                        fontSize: 'clamp(0.75rem, 1.8vw, 1.125rem)',
                        fontWeight: '500',
                        letterSpacing: '-0.01em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
