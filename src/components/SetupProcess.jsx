import { motion } from 'framer-motion'

const SetupProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Talebini Alıyoruz',
      description: '2 dakikada ne istediğini netleştiriyoruz.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Konsepti Planlıyoruz',
      description: 'Tema, karakter, sahne ve akışı biz planlıyoruz.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Etkinliği Yönetiyoruz',
      description: 'Sen sadece o anın tadını çıkarıyorsun.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <>
      {/* Process Steps Section */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.1),_transparent_70%)] pointer-events-none" />
        
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
              Kurulum Sürecimiz
            </p>
            <h2 
              className="font-display font-bold text-white mb-6" 
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}
            >
              3 Basit Adımda Hazır
            </h2>
            <p 
              className="text-white/70 max-w-3xl mx-auto" 
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.6' }}
            >
              Sıfırdan finale kadar tüm süreci bizimle yönetin
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connecting Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent -translate-x-1/2 z-0" />
                )}
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                    <span className="font-display text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 text-purple-300 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 
                    className="font-display font-bold text-white mb-4" 
                    style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-white/70 leading-relaxed" 
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.6' }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Separator Image */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <img
          src="/content/images/cocukdogumgunu/konseptdogumgunu.JPG"
          alt="Best Event - Etkinlik Anları"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center px-4"
          >
            <h3 
              className="font-display font-bold text-white mb-4" 
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.2' }}
            >
              Her An Bir Hikaye
            </h3>
            <p 
              className="text-white/90 max-w-2xl mx-auto" 
              style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', lineHeight: '1.5' }}
            >
              Profesyonel ekibimizle unutulmaz anlar yaratıyoruz
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default SetupProcess
