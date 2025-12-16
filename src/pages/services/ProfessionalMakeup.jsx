import { motion } from 'framer-motion'
import Seo from '../../components/Seo'

const heroImages = [
  '/content/images/profesyonelmakeup/profesyonelmakeupistanbul.webp',
  '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligi.webp',
  '/content/images/profesyonelmakeup/profesyonelkopyasiistanbul.webp',
  '/content/images/profesyonelmakeup/profesyonel.webp',
  '/content/images/profesyonelmakeup/IMG_7513.webp',
  '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp',
  '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligibeyoglu.webp',
  '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligii.webp',
  '/content/images/profesyonelmakeup/bdffc833-ebbf-4a9f-9395-c2b8d75520ed.webp'
]

const faqs = [
  {
    question: 'Profesyonel makyaj ne kadar sürer?',
    answer:
      'Organizasyonda ki çocuk sayısına göre değişmekle birlikte bir çocuk için ortalama 5-6 dk sürmektedir.'
  },
  {
    question: 'Kullandığınız ürünler alerjik mi?',
    answer:
      'Dermatolojik olarak test edilmiş, premium markalar kullanıyoruz. Hassas ciltler için hipoalerjenik ürünler tercih ediyoruz; alerjinizi önceden belirtmeniz yeterli.'
  },
  {
    question: 'Gelin makyajı provası yapıyor musunuz?',
    answer:
      'Evet, gelin makyajı paketlerinde prova dahildir. Büyük gün öncesi stilinizi deneyip son dokunuşları netleştiriyoruz.'
  },
  {
    question: 'Rötuş hizmeti var mı?',
    answer:
      'Uzun süren etkinlikler için rötuş desteği opsiyoneldir. Paketlere eklenebilir veya ayrı talep edilebilir.'
  },
  {
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer:
      "İstanbul'un tüm ilçelerine; Kadıköy, Üsküdar, Maltepe, Ataşehir, Şişli, Beşiktaş, Sarıyer, Göktürk, Beylikdüzü ve çevresine yerinde hizmet."
  }
]

const highlights = [
  'Sertifikalı makeup artist kadrosu',
  'MAC, NARS, Urban Decay gibi premium ürünler',
  'Cilt tipine özel ürün seçimi ve hijyen protokolü',
  'Gelin, nişan, davet, kurumsal ve çekim için özel stiller',
  '8-12 saat kalıcılık için primer + fiksatör kullanımı'
]

const serviceAreas = [
  'Kadıköy', 'Üsküdar', 'Maltepe', 'Ataşehir',
  'Şişli', 'Beşiktaş', 'Sarıyer', 'Göktürk',
  'Beylikdüzü', 'Bakırköy', 'Levent', 'Nişantaşı',
  'Pendik', 'Kartal', 'Çekmeköy', 'Maslak'
]

const ProfessionalMakeup = () => {
  return (
    <>
      <Seo
        title="Profesyonel Makyaj | İstanbul Makeup Artist | Best Event"
        description="İstanbul'da profesyonel makyaj: gelin, davet, kurumsal etkinlik ve fotoğraf çekimi için sertifikalı makeup artist kadrosu. Premium ürünler, hijyenik uygulama."
        keywords={[
          'profesyonel makyaj istanbul',
          'gelin makyajı',
          'makeup artist kadıköy',
          'düğün makyajı',
          'nişan makyajı',
          'kurumsal etkinlik makyajı',
          'istanbul makeup artist',
          'profesyonel makyaj hizmeti'
        ]}
        canonicalPath="/organizasyonlar/profesyonel-makyaj"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Profesyonel Makyaj İstanbul",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BestEvent",
              "areaServed": serviceAreas.map(area => area)
            },
            "serviceType": "Profesyonel Makyaj",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
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

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="bg-black py-10 px-6">
          <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[28px] shadow-[0_25px_70px_rgba(0,0,0,0.55)] min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
              <img
                src={heroImages[0]}
                alt="Profesyonel makyaj uygulaması"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/60" />
              <div className="absolute inset-0 border border-white/10 rounded-[28px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-16">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-bold text-white mb-3"
                style={{
                  fontSize: 'clamp(2.6rem, 6vw, 4.6rem)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.03em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                profesyonel makyaj
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 px-6 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)', letterSpacing: '-0.02em' }}
            >
              Uygulama Görselleri
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {heroImages.map((src, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={src}
                    alt="Profesyonel makyaj görseli"
                    className="w-full h-56 object-cover"
                    loading="lazy"
                    style={idx === 4 ? { transform: 'translateY(-15%)', objectPosition: 'center' } : undefined}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-gradient-to-br from-[#0b0b0f] via-[#0d0d13] to-[#08080c] py-16 px-6 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="uppercase tracking-[0.26em] text-xs text-orange-300 mb-3 font-medium">Neden Biz?</p>
                <h2
                  className="font-bold text-white mb-4"
                  style={{
                    fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
                    lineHeight: '1.15',
                    letterSpacing: '-0.02em',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                  }}
                >
                  Apple düzeyinde netlik, hijyen ve kalıcılık
                </h2>
                <p className="text-white/80" style={{ lineHeight: '1.7', fontSize: '1rem' }}>
                  Gelin, davet, kurumsal etkinlik veya çekimler için yüz hatlarınıza uygun, uzun süre kalıcı makyaj tasarlıyoruz.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="rounded-2xl border border-white/15 bg-white/8 p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-sm"
                  >
                    <h3 className="font-semibold text-lg mb-1" style={{ letterSpacing: '-0.01em' }}>
                      {item}
                    </h3>
                    <p className="text-white/75 text-sm" style={{ lineHeight: '1.6' }}>
                      Özel içerik, hijyen protokolü ve kişiselleştirilmiş uygulamalarla desteklenir.
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet Kapsamı */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#0c0c0f] to-black border-t border-white/10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="uppercase tracking-[0.26em] text-xs text-orange-300 mb-3 font-medium">Hizmetler</p>
              <h2
                className="font-bold text-white mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.7rem)', letterSpacing: '-0.02em' }}
              >
                Gelin, davet, kurumsal ve çekim için özel paketler
              </h2>
              <p className="text-white/80" style={{ lineHeight: '1.7' }}>
                Gelin ve yakınları için prova seçenekleri; davet, gala, çekim ve kurumsal etkinlikler için kamera dostu makyaj.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <h3 className="text-white font-semibold text-lg mb-2">Premium Ürünler</h3>
                <p className="text-white/80 text-sm" style={{ lineHeight: '1.6' }}>
                  MAC, NARS, Urban Decay; cilt tipinize göre seçilir.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <h3 className="text-white font-semibold text-lg mb-2">Hijyen Protokolü</h3>
                <p className="text-white/80 text-sm" style={{ lineHeight: '1.6' }}>
                  Tek kullanımlık ped, fırça sterilizasyonu ve hipoalerjenik alternatifler.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <h3 className="text-white font-semibold text-lg mb-2">Kalıcılık</h3>
                <p className="text-white/80 text-sm" style={{ lineHeight: '1.6' }}>
                  Primer + fiksatör ile 8-12 saat taze görünüm; çekim ve uzun etkinliklere uygun.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <h3 className="text-white font-semibold text-lg mb-2">Yerinde Hizmet</h3>
                <p className="text-white/80 text-sm" style={{ lineHeight: '1.6' }}>
                  İstanbul geneli adrese geliyoruz; ekipman ve ürünler bizimle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet Bölgeleri */}
        <section className="py-16 px-6 bg-black border-t border-white/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', letterSpacing: '-0.02em' }}>
              İstanbul Genelinde Yerinde Hizmet
            </h2>
            <p className="text-white/70 mb-8" style={{ lineHeight: '1.6' }}>
              Adrese geliyoruz; planlama, ürün ve ekipman tarafımızdan sağlanır.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-white/20 bg-white/8 text-white py-3 px-3 text-sm font-semibold shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Hemen Rezervasyon */}
        <section className="relative overflow-hidden bg-[#0b0b0f] py-20 border-t border-white/10">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.3em] text-orange-300 mb-4 text-sm font-medium"
            >
              İstanbul'un Her Yerindeyiz
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white mb-4"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Hemen Rezervasyon Yap
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: '1.6', letterSpacing: '-0.01em' }}
            >
              Etkinlik tarihi, lokasyon ve kişi sayısını paylaşın; aynı gün içinde size dönüş yapalım.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
              <motion.a
                href="https://wa.me/905349306799?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-3">
                    <svg className="w-7 h-7 flex-shrink-0 text-orange-300 transition-colors group-hover:text-orange-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span
                      className="font-semibold text-white"
                      style={{
                        fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                        letterSpacing: '-0.01em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      WhatsApp
                    </span>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+905349306799"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-3">
                    <svg className="w-7 h-7 flex-shrink-0 text-orange-300 transition-colors group-hover:text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span
                      className="font-semibold text-white"
                      style={{
                        fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                        letterSpacing: '-0.01em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      0534 930 67 99
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-18 px-6 bg-gradient-to-br from-gray-50 to-white text-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-display font-bold text-gray-900 mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)', lineHeight: '1.2' }}
            >
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-gray-600 mb-8" style={{ lineHeight: '1.7' }}>
              Hijyen, ürün seçimi ve hizmet kapsamıyla ilgili merak edilenler.
            </p>
            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ProfessionalMakeup
