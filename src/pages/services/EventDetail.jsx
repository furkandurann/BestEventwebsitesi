import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Seo from '../../components/Seo'

const EventDetail = ({ 
  title, 
  description, 
  longDescription,
  features = [],
  photos = [],
  pricing = null,
  faqs = [],
  reviews = [],
  seoKeywords = "",
  compactImageSections = false
}) => {
  const navigate = useNavigate()

  // Parse paragraphs from longDescription
  const paragraphs = longDescription
    ? longDescription.split(/\n\n+/).map(paragraph => paragraph.trim()).filter(Boolean)
    : []

  // All photos available for content sections
  const contentPhotos = photos.slice(0, 6) // Max 6 photos for content

  // SEO schemas
  const keywords = Array.isArray(seoKeywords)
    ? seoKeywords
    : seoKeywords.split(',').map((item) => item.trim()).filter(Boolean)

  const averageRating = reviews.length
    ? reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / reviews.length
    : null

  const faqSchema = faqs.length
    ? {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    : null

  const reviewSchema = reviews.length
    ? {
        '@type': 'AggregateRating',
        ratingValue: averageRating?.toFixed(1),
        reviewCount: reviews.length
      }
    : null

  const serviceSchema = {
    '@type': 'Service',
    name: title,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Best Event',
      url: 'https://www.bestevent.com.tr'
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'İstanbul'
    },
    offers: pricing
      ? {
          '@type': 'Offer',
          priceCurrency: 'TRY',
          price: pricing.startingPrice,
          url: 'https://www.bestevent.com.tr'
        }
      : undefined
  }

  const schemaGraph = [serviceSchema]
  if (faqSchema) schemaGraph.push(faqSchema)
  if (reviewSchema) schemaGraph.push(reviewSchema)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph
  }

  return (
    <div className="min-h-screen">
      <Seo
        title={`${title} | Best Event`}
        description={description}
        keywords={keywords}
        image={photos[0] || undefined}
        type="Service"
        schema={schema}
      />

      {/* Content Section - Vertical Flow with Photos Between Paragraphs */}
      {paragraphs.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {paragraphs.map((paragraph, idx) => (
                <div key={idx}>
                  {/* Paragraph Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="mb-8"
                  >
                    {paragraph.split('\n')[0]?.match(/[🎯✨🎭🎨🎪🔥🫧🤖🦒🏰🎉🍫📸⭐💬💰]/) ? (
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gradient mb-4 leading-tight">
                        {paragraph.split('\n')[0]}
                      </h2>
                    ) : null}
                    <div className="prose prose-lg max-w-none">
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {paragraph}
                      </p>
                    </div>
                  </motion.div>

                  {/* Photo after every 2 paragraphs */}
                  {(idx + 1) % 2 === 0 && contentPhotos[Math.floor(idx / 2)] && (
                    <section className="w-full bg-white py-4">
                      <div className="w-full flex justify-center">
                        <img
                          src={contentPhotos[Math.floor(idx / 2)]}
                          alt={`${title} - Görsel ${Math.floor(idx / 2) + 1}`}
                          loading="lazy"
                          className={`h-auto w-full object-cover ${compactImageSections ? 'max-w-4xl' : 'max-w-full'}`}
                          style={{
                            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)'
                          }}
                        />
                      </div>
                    </section>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features List Section */}
      {features.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient text-center mb-12">
                ✨ Özellikler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="flex-shrink-0 text-2xl" aria-hidden="true">🎯</span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-dark mb-4">
              Hemen Rezervasyon Yapın!
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Etkinliğinizi unutulmaz kılmak için profesyonel ekibimizle iletişime geçin
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/iletisim')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 md:px-14 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transition-all"
              aria-label="Fiyat Teklifi Al"
            >
              Fiyat Teklifi Alın
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      {pricing && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-8">
                Fiyatlandırma
              </h2>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-purple-100">
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  {pricing.description}
                </p>
                {pricing.startingPrice && (
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                    {pricing.startingPrice}₺'den başlayan fiyatlarla
                  </div>
                )}
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  {pricing.note}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/iletisim')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
                  aria-label="Detaylı Fiyat Teklifi Al"
                >
                  Detaylı Fiyat Teklifi Alın
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Neden Best Event? */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-400 mb-4 font-medium">10+ YIL DENEYİM</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Neden Best Event?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              İstanbul'da 10+ yıldır profesyonel etkinlik hizmetleri sunuyoruz. Binlerce başarılı organizasyon, on binlerce mutlu müşteri.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: "⭐",
                title: "Profesyonel Ekip",
                description: "10+ yıl deneyimli, sertifikalı animatörler ve organizatörler. Her etkinlikte profesyonel hizmet garantisi."
              },
              {
                icon: "✨",
                title: "Kaliteli Hizmet",
                description: "Hijyenik, güvenli ve çocuk dostu malzemeler. Tüm ekipmanlar profesyonel standartlarda ve düzenli bakımlı."
              },
              {
                icon: "💯",
                title: "Müşteri Memnuniyeti",
                description: "%98 müşteri memnuniyeti oranı. Binlerce olumlu geri bildirim. Vodafone, Koç Holding gibi kurumsal referanslar."
              },
              {
                icon: "📍",
                title: "Tüm İstanbul'da Hizmet",
                description: "Kadıköy'den Beylikdüzü'ne, Sarıyer'den Maltepe'ye. İstanbul'un her köşesinde profesyonel organizasyon."
              },
              {
                icon: "🚀",
                title: "Hızlı Rezervasyon",
                description: "WhatsApp veya telefon ile anında rezervasyon. Esnek tarih ve saat seçenekleri. 7/24 iletişim desteği."
              },
              {
                icon: "🎁",
                title: "Sürpriz Detaylar",
                description: "Her etkinlikte özel sürprizler ve ekstra aktiviteler. Unutulmaz anılar yaratmak için her detay düşünülmüş."
              },
              {
                icon: "🎯",
                title: "Özelleştirilebilir Paketler",
                description: "İhtiyaçlarınıza özel paketler. Bütçenize uygun, kaliteden ödün vermeden esnek çözümler."
              },
              {
                icon: "🏆",
                title: "Tecrübeli Organizasyon",
                description: "Binlerce başarılı etkinlik deneyimi. Doğum günleri, kurumsal etkinlikler, okul organizasyonları."
              },
              {
                icon: "🎉",
                title: "Geniş Hizmet Yelpazesi",
                description: "Animasyon, showlar, karakterler, catering. Tek çatı altında tüm etkinlik ihtiyaçlarınız."
              },
              {
                icon: "📸",
                title: "Unutulmaz Anılar",
                description: "Profesyonel fotoğraf desteği ve özel anlar. Her etkinlik sizin için özel ve benzersiz."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-white/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-center mb-12">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <motion.article
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <h3 
                      className="text-xl md:text-2xl font-bold text-white mb-4 flex items-start"
                      itemProp="name"
                    >
                      <span className="flex-shrink-0 text-white mr-3" aria-hidden="true">❓</span>
                      <span>{faq.question}</span>
                    </h3>
                    <div 
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p 
                        className="text-base md:text-lg text-white leading-relaxed ml-9"
                        itemProp="text"
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      {reviews.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient text-center mb-12">
                Müşteri Yorumları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {reviews.map((review, idx) => (
                  <motion.article
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    itemScope
                    itemType="https://schema.org/Review"
                  >
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                        aria-hidden="true"
                      >
                        {review.name.charAt(0)}
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="font-bold text-dark" itemProp="author">{review.name}</p>
                        <div 
                          className="flex text-yellow-400"
                          itemProp="reviewRating"
                          itemScope
                          itemType="https://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content={review.rating} />
                          <meta itemProp="bestRating" content="5" />
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <span key={i} aria-hidden="true">⭐</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4" itemProp="reviewBody">
                      "{review.comment}"
                    </p>
                    <p className="text-gray-500 text-sm" itemProp="datePublished">{review.date}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-violet-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Hayalinizdeki Etkinliği Birlikte Yaratalım!
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {title} hizmetimiz hakkında detaylı bilgi almak ve rezervasyon yapmak için bizimle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/iletisim')}
                className="bg-white text-purple-600 px-10 md:px-14 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transition-all w-full sm:w-auto"
                aria-label="İletişime Geç"
              >
                +90 530 730 90 09
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/905307309009"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-10 md:px-14 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold hover:bg-white/10 transition-all w-full sm:w-auto text-center"
                aria-label="WhatsApp ile İletişim"
              >
                WhatsApp ile Yaz
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default EventDetail
