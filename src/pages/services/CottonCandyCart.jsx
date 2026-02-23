import { motion } from 'framer-motion'
import Seo from '../../components/Seo'

const CottonCandyCart = () => {
  const services = [
    {
      id: 'chocolate-fountain',
      title: 'Çikolata Şelalesi Kiralama',
      description: 'Etkinlikleriniz için profesyonel çikolata şelalesi kiralama hizmeti. İstanbul genelinde hijyenik ve kaliteli çikolata şelalesi kiralama.',
      image: '/content/images/Parti Ekipmanları/hareketlislider6cikolataselalsi.webp',
      alt: 'Çikolata şelalesi kiralama İstanbul - Best Event'
    },
    {
      id: 'popcorn',
      title: 'Popcorn Kiralama',
      description: 'Nostaljik popcorn arabası kiralama ile taze mısır patlatma hizmeti. Profesyonel popcorn kiralama İstanbul.',
      image: '/content/images/Parti Ekipmanları/hareketlislider7popcorn.jpeg',
      alt: 'Popcorn arabası kiralama İstanbul - Best Event'
    },
    {
      id: 'cotton-candy',
      title: 'Pamuk Şeker Kiralama',
      description: 'Renkli ve lezzetli pamuk şeker arabası kiralama hizmeti. İstanbul genelinde pamuk şeker kiralama.',
      image: '/content/images/Parti Ekipmanları/pamukseker.jpeg',
      alt: 'Pamuk şeker arabası kiralama İstanbul - Best Event'
    },
    {
      id: 'sound-system',
      title: 'Ses Sistemi Kiralama',
      description: 'Etkinlikleriniz için profesyonel ses sistemi kiralama hizmeti. Kaliteli ses ekipmanları kiralama.',
      image: '/content/images/music/bando.webp',
      alt: 'Ses sistemi kiralama İstanbul - Best Event'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Seo
        title="Çikolata Şelalesi Kiralama, Popcorn Kiralama, Pamuk Şeker Kiralama İstanbul | Best Event"
        description="Profesyonel çikolata şelalesi kiralama, popcorn kiralama, pamuk şeker kiralama ve ses sistemi kiralama hizmetleri. İstanbul genelinde hijyenik ve kaliteli parti ekipmanları kiralama."
        keywords={[
          'çikolata şelalesi kiralama',
          'çikolata şelalesi kiralama istanbul',
          'popcorn kiralama',
          'popcorn arabası kiralama',
          'pamuk şeker kiralama',
          'pamuk şeker arabası kiralama',
          'ses sistemi kiralama',
          'ses sistemi kiralama istanbul',
          'parti ekipmanları kiralama istanbul',
          'etkinlik ikram servisi'
        ]}
        canonicalPath="/hizmetler/pamuk-seker"
      />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/content/images/Parti Ekipmanları/popcornpamukseker.JPG" 
            alt="Popcorn ve pamuk şeker kiralama İstanbul - Best Event parti ekipmanları"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
            loading="eager"
            fetchpriority="high"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.025em',
                fontWeight: '700',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Parti Ekipmanları
            </h1>
            <p 
              className="text-white/90 max-w-3xl mx-auto"
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.5',
                letterSpacing: '-0.015em',
                fontWeight: '500',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              Çikolata şelalesi, popcorn ve pamuk şeker arabası ile<br />
              etkinliklerinize lezzet katıyoruz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-pink-400 mb-4 font-medium">
              Hizmetlerimiz
            </p>
            <h2 
              className="font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(1.875rem, 5vw, 3rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.025em',
                fontWeight: '700',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              İkram Seçeneklerimiz
            </h2>
            <p 
              className="text-zinc-300 max-w-3xl mx-auto"
              style={{
                fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                lineHeight: '1.6',
                letterSpacing: '-0.01em',
                fontWeight: '500',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
              }}
            >
              Her etkinlik için özel ikram ve parti ekipmanları
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-[4/3] w-full bg-black/60 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 
                      className="text-white font-bold mb-3"
                      style={{
                        fontSize: 'clamp(1.3125rem, 2vw, 1.5625rem)',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2',
                        fontWeight: '700',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                      }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="text-zinc-300"
                      style={{
                        fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                        lineHeight: '1.55',
                        letterSpacing: '-0.005em',
                        fontWeight: '500',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - Pink Background with White Card */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-pink-950 via-black to-purple-950">
        <div className="max-w-4xl mx-auto px-6">
          {/* White Card/Frame */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 
              className="font-extrabold text-gray-900 mb-8"
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.025em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
              }}
            >
              Neden İstanbul'un En Çok Tercih Edilen Parti Ekipmanları Kiralama Hizmetiyiz?
            </h2>
            
            <div className="space-y-6">
              <p 
                className="text-gray-800 font-medium"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  lineHeight: '1.5',
                  letterSpacing: '-0.015em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                <span className="font-bold text-gray-900">Best Event</span>, İstanbul'da yıllardır yüzlerce başarılı etkinliğe imza atmış profesyonel bir organizasyon firmasıdır. 
                Çocuk doğum günlerinden kurumsal etkinliklere kadar, her organizasyonda deneyimli ekibiyle güvenle tercih edilir.
              </p>
              
              <p 
                className="text-gray-800 font-medium"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  lineHeight: '1.5',
                  letterSpacing: '-0.015em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                <span className="font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Parti Ekipmanları Organizasyonu ve Kiralama</span> kapsamımız, klasik ikram anlayışının ötesine geçerek{' '}
                <span className="font-bold text-gray-900">çikolata şelalesi, popcorn arabası ve pamuk şeker arabası</span>{' '}
                ile zenginleştirilmiş özel bir etkinlik deneyimi sunar. Profesyonel parti ekipmanları kiralama ve organizasyon sürecinde sadece ikram sunmakla kalmaz, aynı zamanda{' '}
                <span className="font-bold text-gray-900">nostaljik ve eğlenceli anlar</span>{' '}
                yaratan profesyonel bir performans sergiler. Hijyenik koşullar, kaliteli malzemeler ve profesyonel sunumla birleşerek bugüne kadar %100 memnuniyetle sunulmuş, misafirlerinize unutulmaz lezzetler yaşatmıştır. İster doğum günü etkinliği, ister kurumsal organizasyon olsun, parti ekipmanları kiralama talebinizi deneyimli ekibimizle karşılıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10"
          >
            <h3 
              className="font-bold text-white mb-6 text-center"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: '1.2'
              }}
            >
              Profesyonel İkram Hizmetleri
            </h3>
            
            <div className="space-y-4 text-zinc-300" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: '1.8' }}>
              <p>
                <strong className="text-white">Çikolata şelalesi kiralama</strong> hizmetimiz ile etkinliklerinize lezzet katın. Profesyonel <strong className="text-white">çikolata şelalesi kiralama İstanbul</strong> genelinde hijyenik koşullarda sunulmaktadır. Çikolata fondue servisi ile misafirlerinize unutulmaz bir deneyim yaşatın.
              </p>
              <p>
                <strong className="text-white">Popcorn kiralama</strong> ve <strong className="text-white">pamuk şeker kiralama</strong> hizmetlerimiz ile nostaljik lezzetleri etkinliğinize taşıyın. Popcorn arabası kiralama ve pamuk şeker arabası kiralama hizmetlerimiz doğum günü, düğün, nişan, kına gecesi, açılış organizasyonu ve kurumsal etkinliklerde tercih edilmektedir.
              </p>
              <p>
                <strong className="text-white">Ses sistemi kiralama</strong> hizmetimiz ile etkinliklerinizde kaliteli ses deneyimi yaşatın. Profesyonel ses ekipmanları kiralama hizmetimiz ile müzik, konuşma ve sunum ihtiyaçlarınızı karşılıyoruz. DJ ekipmanları ve kablosuz mikrofon sistemleri de hizmetimiz kapsamındadır.
              </p>
              <p className="text-zinc-400">
                İstanbul genelinde <strong className="text-white">çikolata şelalesi kiralama, popcorn kiralama, pamuk şeker kiralama ve ses sistemi kiralama</strong> için bizimle iletişime geçin. Size özel paketlerimizi ve uygun fiyatlarımızı öğrenin.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-10 text-center">
              <a
                href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Bilgi Al & Rezervasyon
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 sm:py-20 px-6 bg-gradient-to-br from-pink-950/30 to-purple-950/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 
              className="font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                letterSpacing: '-0.02em'
              }}
            >
              Hizmet Bölgelerimiz
            </h3>
            
            <div className="max-w-5xl mx-auto text-center space-y-4">
              <p 
                className="text-zinc-300 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: '1.8' }}
              >
                İstanbul'un her bölgesinde profesyonel parti ekipmanları kiralama hizmeti sunuyoruz: 
                <strong className="text-white"> Kadıköy, Kartal, Maltepe, Sarıyer, Göktürk, Beylikdüzü, Ümraniye, Çekmeköy, İstinye, Maslak, Üsküdar, Şişli, Beşiktaş, Bakırköy</strong> ve İstanbul'un tüm ilçelerinde yanınızdayız.
              </p>
              <p 
                className="text-zinc-300 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: '1.8' }}
              >
                <strong className="text-white">Antalya</strong>'da yıl boyunca kesintisiz hizmet vermekteyiz. Ayrıca yaz sezonunda: 
                <strong className="text-white"> Bodrum, Yalıkavak, Turgutreis, Gümüşlük, Belek, Alanya, Side</strong> ve çevre tatil bölgelerinde etkinliklerinizi unutulmaz kılmak için buradayız.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CottonCandyCart
