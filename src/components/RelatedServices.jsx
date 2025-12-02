import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Hizmet ilişkilendirme mantığı
const serviceRelationships = {
  'magic-show': [
    { name: 'Bubble Show', path: '/organizasyonlar/bubble-show', description: 'Büyülü sabun köpüğü gösterisi' },
    { name: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama', description: 'Profesyonel yüz boyama hizmeti' },
    { name: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama', description: 'Eğlenceli palyaço gösterileri' },
  ],
  'bubble-show': [
    { name: 'Magic Show', path: '/organizasyonlar/magic-show', description: 'Büyülü sihirbaz gösterileri' },
    { name: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama', description: 'Profesyonel yüz boyama' },
    { name: 'Dans Etkinlikleri', path: '/organizasyonlar/dans-etkinlikleri', description: 'Profesyonel dans gösterileri' },
  ],
  'yuz-boyama': [
    { name: 'Magic Show', path: '/organizasyonlar/magic-show', description: 'Büyülü sihirbaz gösterileri' },
    { name: 'Bubble Show', path: '/organizasyonlar/bubble-show', description: 'Sabun köpüğü gösterisi' },
    { name: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler', description: 'Karakter kiralama hizmeti' },
  ],
  'palyaco-kiralama': [
    { name: 'Magic Show', path: '/organizasyonlar/magic-show', description: 'Sihirbazlık gösterileri' },
    { name: 'Bubble Show', path: '/organizasyonlar/bubble-show', description: 'Bubble show gösterisi' },
    { name: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama', description: 'Yüz boyama hizmeti' },
  ],
  'kostumlu-karakterler': [
    { name: 'Maskot Kiralama', path: '/organizasyonlar/maskot-kiralama', description: 'Maskot kiralama hizmetleri' },
    { name: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama', description: 'Palyaço kiralama' },
    { name: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama', description: 'Yüz boyama hizmeti' },
  ],
  'maskot-kiralama': [
    { name: 'Kız Maskotları', path: '/organizasyonlar/kiz-maskotlari', description: 'Kız maskot seçenekleri' },
    { name: 'Erkek Maskotları', path: '/organizasyonlar/erkek-maskotlari', description: 'Erkek maskot seçenekleri' },
    { name: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler', description: 'Karakter kiralama' },
  ],
  'kiz-maskotlari': [
    { name: 'Maskot Kiralama', path: '/organizasyonlar/maskot-kiralama', description: 'Tüm maskot seçenekleri' },
    { name: 'Erkek Maskotları', path: '/organizasyonlar/erkek-maskotlari', description: 'Erkek maskotlar' },
    { name: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler', description: 'Karakter kiralama' },
  ],
  'erkek-maskotlari': [
    { name: 'Maskot Kiralama', path: '/organizasyonlar/maskot-kiralama', description: 'Tüm maskot seçenekleri' },
    { name: 'Kız Maskotları', path: '/organizasyonlar/kiz-maskotlari', description: 'Kız maskotlar' },
    { name: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler', description: 'Karakter kiralama' },
  ],
  'dogum-gunu-organizasyonu': [
    { name: 'Konsept Doğum Günü', path: '/organizasyonlar/konsept-dogum-gunu', description: 'Temalı doğum günleri' },
    { name: 'Organik Pastalar', path: '/organik-pastalar', description: 'El yapımı organik pastalar' },
    { name: 'Magic Show', path: '/organizasyonlar/magic-show', description: 'Doğum günü için magic show' },
  ],
  'konsept-dogum-gunu': [
    { name: 'Doğum Günü Organizasyonu', path: '/organizasyonlar/dogum-gunu-organizasyonu', description: 'Tam paket organizasyon' },
    { name: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler', description: 'Tema karakterleri' },
    { name: 'Organik Pastalar', path: '/organik-pastalar', description: 'Özel tasarım pastalar' },
  ],
  'cocuk-etkinlikleri': [
    { name: 'Magic Show', path: '/organizasyonlar/magic-show', description: 'Çocuklar için sihir gösterisi' },
    { name: 'Bubble Show', path: '/organizasyonlar/bubble-show', description: 'Eğlenceli bubble show' },
    { name: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama', description: 'Yüz boyama etkinliği' },
  ],
  'muzik-etkinlikleri': [
    { name: 'DJ Kiralama', path: '/organizasyonlar/dj-kiralama', description: 'Profesyonel DJ hizmeti' },
    { name: 'Karaoke Etkinliği', path: '/organizasyonlar/karaoke-etkinligi', description: 'Karaoke eğlencesi' },
    { name: 'Dans Etkinlikleri', path: '/organizasyonlar/dans-etkinlikleri', description: 'Dans gösterileri' },
  ],
  'dans-etkinlikleri': [
    { name: 'Müzik Etkinlikleri', path: '/organizasyonlar/muzik-etkinlikleri', description: 'Canlı müzik hizmetleri' },
    { name: 'DJ Kiralama', path: '/organizasyonlar/dj-kiralama', description: 'DJ kiralama' },
    { name: 'Bubble Show', path: '/organizasyonlar/bubble-show', description: 'Bubble show gösterisi' },
  ],
  'karaoke-etkinligi': [
    { name: 'Müzik Etkinlikleri', path: '/organizasyonlar/muzik-etkinlikleri', description: 'Canlı müzik' },
    { name: 'DJ Kiralama', path: '/organizasyonlar/dj-kiralama', description: 'DJ hizmeti' },
    { name: 'Dans Etkinlikleri', path: '/organizasyonlar/dans-etkinlikleri', description: 'Dans gösterileri' },
  ],
  'vr-sanal-gerceklik': [
    { name: 'Transformers Robot', path: '/organizasyonlar/transformers-robot', description: 'Robot gösterileri' },
    { name: 'Şişme Oyun Parkı', path: '/organizasyonlar/sisme-oyun-parki', description: 'Oyun parkı kiralama' },
    { name: 'Atölye Etkinlikleri', path: '/organizasyonlar/atolye-etkinlikleri', description: 'Çeşitli atölyeler' },
  ],
  'transformers-robot': [
    { name: 'VR Sanal Gerçeklik', path: '/organizasyonlar/vr-sanal-gerceklik', description: 'VR deneyimi' },
    { name: 'Gezegen Tanıtım', path: '/organizasyonlar/gezegen-tanitim', description: 'Eğitici gezegen gösterisi' },
    { name: 'Şişme Oyun Parkı', path: '/organizasyonlar/sisme-oyun-parki', description: 'Oyun parkları' },
  ],
  'sisme-oyun-parki': [
    { name: 'Çocuk Masa Sandalye', path: '/organizasyonlar/cocuk-masa-sandalye', description: 'Masa sandalye kiralama' },
    { name: 'Atölye Etkinlikleri', path: '/organizasyonlar/atolye-etkinlikleri', description: 'Eğitici atölyeler' },
    { name: 'VR Sanal Gerçeklik', path: '/organizasyonlar/vr-sanal-gerceklik', description: 'VR oyunları' },
  ],
  'ates-gosterisi': [
    { name: 'Magic Show', path: '/organizasyonlar/magic-show', description: 'Sihir gösterileri' },
    { name: 'Jonglör', path: '/organizasyonlar/jonklor', description: 'Jonglörlük gösterileri' },
    { name: 'Tahtabacak', path: '/organizasyonlar/tahtabacak', description: 'Tahtabacak gösterileri' },
  ],
  'jonklor': [
    { name: 'Ateş Gösterisi', path: '/organizasyonlar/ates-gosterisi', description: 'Ateş gösterileri' },
    { name: 'Magic Show', path: '/organizasyonlar/magic-show', description: 'Magic show' },
    { name: 'Tahtabacak', path: '/organizasyonlar/tahtabacak', description: 'Tahtabacak gösterileri' },
  ],
  'tahtabacak': [
    { name: 'Jonglör', path: '/organizasyonlar/jonklor', description: 'Jonglör gösterileri' },
    { name: 'Ateş Gösterisi', path: '/organizasyonlar/ates-gosterisi', description: 'Ateş gösterileri' },
    { name: 'Magic Show', path: '/organizasyonlar/magic-show', description: 'Sihir gösterileri' },
  ],
}

const RelatedServices = ({ currentService }) => {
  const relatedServices = serviceRelationships[currentService] || []

  if (relatedServices.length === 0) return null

  return (
    <section className="bg-gray-50 py-16">
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            İlgili <span className="text-gradient">Hizmetlerimiz</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                      Detaylı Bilgi
                      <svg 
                        className="w-5 h-5 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RelatedServices
