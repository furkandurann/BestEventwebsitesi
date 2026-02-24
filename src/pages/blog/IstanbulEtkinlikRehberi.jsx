import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../../components/Seo'
import OptimizedImage from '../../components/OptimizedImage'
import { istanbulEtkinlikHubData } from '../../data/istanbulEtkinlikData'

const IstanbulEtkinlikRehberi = () => {
  const { seo, hero, giris, hizmetler, oneCikanSemtler, faq, cta } = istanbulEtkinlikHubData

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": seo.title,
      "description": seo.description,
      "image": `https://bestevent.com.tr${seo.image}`,
      "author": {
        "@type": "Organization",
        "name": "BestEvent"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BestEvent",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bestevent.com.tr/logo.png"
        }
      },
      "datePublished": "2025-01-01",
      "dateModified": "2025-01-01"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.soru,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.cevap
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://bestevent.com.tr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://bestevent.com.tr/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "İstanbul Etkinlik Rehberi"
        }
      ]
    }
  ]

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        image={seo.image}
        schema={schema}
        type="article"
      />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {hero.title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
                {hero.subtitle}
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {hero.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Giriş Bölümü */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                {giris.baslik}
              </h2>
              {giris.paragraflar.map((paragraf, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {paragraf}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Hizmetler Bölümü */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                İstanbul genelinde sunduğumuz profesyonel çocuk etkinliği hizmetleri
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hizmetler.map((hizmet, index) => (
                <motion.div
                  key={hizmet.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <OptimizedImage
                      src={hizmet.gorsel}
                      alt={`${hizmet.isim} İstanbul`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                      {hizmet.isim}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {hizmet.kisa}
                    </p>
                    <p className="text-gray-700 mb-4 text-sm">
                      {hizmet.detay}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-600 font-bold text-lg">
                        {hizmet.fiyatBaslangic}'den
                      </span>
                      <Link
                        to={hizmet.link}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Detaylı Bilgi →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Öne Çıkan Semtler */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                İstanbul'da Hizmet Verdiğimiz Semtler
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                İstanbul'un her köşesinde profesyonel çocuk etkinliği organizasyonu
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oneCikanSemtler.map((semt, index) => (
                <motion.div
                  key={semt.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                    {semt.semt}
                  </h3>
                  <p className="text-amber-600 font-semibold mb-3 text-sm">
                    {semt.ozellik}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {semt.kisa}
                  </p>
                  <Link
                    to={semt.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    {semt.semt} Detayları →
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 text-lg mb-6">
                <strong>Tüm İstanbul semtlerinde hizmet vermekteyiz:</strong> Kadıköy, Ataşehir, Üsküdar, Beylikdüzü, Sarıyer, Ümraniye, Maltepe, Kartal, Beşiktaş, Şişli, Bakırköy, Bahçelievler, Avcılar, Esenyurt, Başakşehir ve daha fazlası...
              </p>
            </div>
          </div>
        </section>

        {/* ProfesyonelDetaylar - Perde Arkası */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Profesyonel Etkinlik Hazırlığının Perde Arkası
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                10+ yıllık deneyimimizle her detayı titizlikle planlıyoruz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Palyaço Hazırlığı */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">🎪</span>
                  Palyaço Hazırlık Süreci
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Profesyonel palyaço ekibimiz etkinlikten 2 saat önce hazırlığa başlar. Kostümlerimiz Rusya'dan özel olarak diktirilen, UV ışığında parlayan premium kumaşlardan üretilir. Her palyaço, çocuk psikolojisi eğitimi almış deneyimli sanatçılardır.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Makyaj malzemelerimiz Almanya menşeili, cilt dostu, hipoalerjenik profesyonel ürünlerdir. Sosis balon şekillerimiz 150+ farklı modelden oluşur: hayvanlar, çiçekler, kahramanlar ve özel tasarımlar. Her palyaço mobil ses sistemi, yedek kostüm ve acil durum ekipmanı ile gelir.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Palyaço çantamızda:</strong> 500+ sosis balon, profesyonel pompa sistemi, yüz boyama seti (12 renk, dermatolog onaylı), sihir malzemeleri, müzik ekipmanı ve ödül setleri bulunur.
                </p>
              </motion.div>

              {/* Sihirbaz Malzemeleri */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">🎩</span>
                  Sihirbaz Ekipman Deposu
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Sihirbazlık malzemelerimiz Amerika ve İngiltere'den ithal profesyonel magic ekipmanlarıdır. Her sihirbazımız minimum 5 yıl sahne deneyimine sahiptir ve yılda 200+ gösteride performans sergiler.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>İllüzyon çeşitlerimiz:</strong> Kaybolma numaraları (15+ varyasyon), canlı hayvan gösterileri (tavşan, güvercin, etik yöntemlerle), kartpostal sihirleri, inanılmaz metamorfozlar ve interaktif büyüler. Tüm canlı hayvanlarımız veteriner gözetiminde, stressiz ortamda bakılır.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sahne ekipmanımız profesyonel ışık sistemi, duman makinesi, müzik kontrolü ve güvenlik sertifikalı aksesuralardan oluşur. Her gösteri senaryosu yaş grubuna özel hazırlanır. 3-5 yaş için daha basit, 6-12 yaş için kompleks illüzyonlar kullanılır.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bubble Show Formülü */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">🫧</span>
                  Bubble Show Köpük Sırrı
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Bubble show köpüğümüz özel formüllü, çevre dostu, toksik olmayan bir karışımdır. İçeriği: %40 distile su, %30 gliserin (farmasötik kalite), %25 organik sabun bazı ve %5 guar gam (doğal kıvam verici). Formula İtalyan bubble show şampiyonlarından lisanslanmıştır.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Ekipmanlarımız:</strong> 2 metre çapında dev balon halkası, lazer kesim paslanmaz çelik spiral çubuklar, profesyonel köpük üfleyici (sessiz motor), UV reaktif köpük katkıları ve yedek formül tankları. Her etkinlik için 25 litre taze karışım hazırlanır.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Gösterimiz çocukların baloncukların içine girmesini sağlar (güvenlik protokolü ile). Müzikle senkronize ışık sistemi, duman efekti ve interaktif balon yakalama oyunları içerir. Zemin kaymaz, balonlar insan derisine zararsız, kıyafetlere leke yapmaz formülasyondadır.
                </p>
              </motion.div>

              {/* Kostüm Üretimi */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">👗</span>
                  Rusya'dan Özel Kostümler
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Maskot ve karakter kostümlerimiz Moskova'daki özel atölyede diktiriliyor. Rus kostüm sanatçıları dünya çapında tanınan kaliteleri sayesinde tercihimizdir. Her kostüm 3-4 ay süren el işçiliği ile üretilir.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Kostüm özellikleri:</strong> Çift katmanlı hava geçirgen kumaş (içten serinletme sistemi), anti-bakteriyel astar, ergonomik baş tasarımı (180° görüş açısı), dahili fan sistemi ve terlemeyi önleyen nem emici iç katman. Ağırlık: 2-3 kg (geleneksel kostümlere göre %40 daha hafif).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Kostüm envanterimiz 80+ farklı karakterden oluşur. Her kostüm etkinlik sonrası profesyonel temizleme ve dezenfeksiyon sürecinden geçer. Yılda 2 kez Rusya'ya bakım için gönderilir, 5 yıl garantili kullanım ömrü vardır. LED ışık sistemli, özel gün kostümlerimiz de mevcuttur.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Organizasyon Süreci */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
                Organizasyon Süreci: Aramadan Etkinliğe
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
                İstanbul genelinde yıllık 1500+ etkinlik deneyimimizle süreci mükemmelleştirdik. İlk aramadan etkinlik sonrasına kadar her adım profesyonelce planlanır.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">1. İlk İletişim</h3>
                <p className="text-gray-700 leading-relaxed">
                  Telefon ya da WhatsApp ile iletişime geçiyorsunuz. Deneyimli organizatörümüz etkinlik tarihini, yaş grubunu, mekan bilgilerini ve bütçenizi alır. 15 dakika içinde kişiselleştirilmiş teklif sunulur.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">2. Detaylı Planlama</h3>
                <p className="text-gray-700 leading-relaxed">
                  Anlaşma sonrası etkinlik koordinatörü atanır. Mekan keşfi yapılır, zaman çizelgesi oluşturulur, yedek plan hazırlanır. Çocuk sayısı, tema tercihi, özel istekler kaydedilir. Sözleşme ve sigorta düzenlenir.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">3. Etkinlik Günü</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ekip etkinlikten 90 dakika önce gelir. Ses sistemi, dekor, sahne kurulur. Son kontroller yapılır. Etkinlik boyunca 2 yedek animatör, 1 koordinatör ve 1 teknik destek ekibi hazır bekler. Olası sorunlara anında müdahale edilir.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                İstanbul Trafik Planlaması ve Lojistik Uzmanlığımız
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                İstanbul'un trafik dinamiğini 10 yıldır analiz ediyoruz. Her semt için en uygun varış saati, alternatif rotalar ve acil durum planları database'imizde kayıtlı. Kadıköy'den Sarıyer'e, Maltepe'den Başakşehir'e her bölge için özel lojistik stratejimiz var.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Ekipman nakil sistemimiz:</strong> 3 ton kapasiteli, klimalı, soğutma üniteli nakliye araçları kullanılır. Tüm ekipman etkinlikten sonra temizlenir, dezenfekte edilir, bakımı yapılır ve depoya kaldırılır. Depolarımız Anadolu yakasında (Kartal) ve Avrupa yakasında (Başakşehir) konumlanmıştır.
              </p>
              <p className="text-gray-700 leading-relaxed">
                GPS takipli araçlarımız sayesinde ailelere real-time konum güncellemesi yapılır. Etkinlik öncesi 1 saat ve 30 dakika kala hatırlatma mesajı gönderilir. Ekibimiz her zaman belirtilen saatten 15 dakika önce mekanda hazır olur. İstanbul genelinde trafik yoğunluğuna rağmen %99.2 zamanında varış oranına sahibiz.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-lg text-gray-600">
                İstanbul'da çocuk etkinliği hakkında merak edilenler
              </p>
            </motion.div>

            <div className="space-y-6">
              {faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {item.soru}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.cevap}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-500 to-orange-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                {cta.baslik}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {cta.aciklama}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${cta.telefon.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {cta.telefon}
                </a>
                <a
                  href={cta.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default IstanbulEtkinlikRehberi
