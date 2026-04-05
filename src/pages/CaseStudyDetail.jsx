import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import OptimizedImage from '../components/OptimizedImage'
import { caseStudies } from '../data/caseStudies'
import { createEventSchema, createFAQSchema } from '../utils/schemaHelpers'

const CaseStudyDetail = () => {
  const { slug } = useParams()
  const [activeImage, setActiveImage] = useState(0)

  const caseStudy = caseStudies.find(cs => cs.slug === slug)

  if (!caseStudy) {
    return <Navigate to="/vaka-analizi" replace />
  }

  const {
    client,
    clientType,
    eventName,
    title,
    description,
    date,
    district,
    venueName,
    guestCount,
    childCount,
    duration,
    servicesUsed,
    serviceLabels,
    images,
    heroImage,
    challenge,
    solution,
    results,
    testimonial,
    tags,
    relatedServices
  } = caseStudy

  // Format date
  const formattedDate = new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // FAQ Data for this case study
  const faqData = [
    {
      question: `${client} etkinliginde hangi hizmetler sunuldu?`,
      answer: `${client} icin duzenlenen ${eventName} etkinliginde ${serviceLabels.join(', ')} hizmetleri sunuldu. Toplam ${guestCount} kisi ve ${childCount} cocuk icin ${results.activitiesProvided} farkli aktivite gerceklestirildi.`
    },
    {
      question: `${district}'de kurumsal etkinlik organizasyonu nasil yapilir?`,
      answer: `Best Event olarak ${district} bolgesinde kurumsal etkinlik organizasyonu icin mekan secimi, aktivite planlama, ekipman temini ve profesyonel ekip koordinasyonu hizmetleri sunuyoruz. ${venueName} gibi prestijli mekanlarda ${guestCount} kisiyi agirladigimiz deneyimimiz bulunmaktadir.`
    },
    {
      question: `Best Event kac kisilik etkinlik organize edebilir?`,
      answer: `Best Event olarak 30 kisilik butik organizasyonlardan 500+ kisilik buyuk olcekli festivallere kadar her turlu etkinligi profesyonel olarak organize ediyoruz. ${eventName} etkinliginde ${guestCount} kisilik bir organizasyonu basariyla gerceklestirdik.`
    }
  ]

  // Build schemas
  const eventSchema = createEventSchema(caseStudy)
  const faqSchema = createFAQSchema(faqData)

  const schemas = [eventSchema]
  if (faqSchema) schemas.push(faqSchema)

  // Related case studies (exclude current)
  const relatedCaseStudies = caseStudies
    .filter(cs => cs.slug !== slug)
    .slice(0, 2)

  return (
    <>
      <Seo
        title={`${title} | Best Event Vaka Analizi`}
        description={description.substring(0, 160)}
        keywords={[...tags, 'vaka analizi', 'etkinlik organizasyonu', 'istanbul', client.toLowerCase()]}
        image={heroImage}
        canonicalPath={`/vaka-analizi/${slug}`}
        schema={schemas}
        type="article"
        publishedTime={date}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
            loading="eager"
            sizes="100vw"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
              <span>/</span>
              <Link to="/vaka-analizi" className="hover:text-white transition-colors">Vaka Analizi</Link>
              <span>/</span>
              <span className="text-white/80">{client}</span>
            </nav>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold ${
                clientType === 'kurumsal'
                  ? 'bg-blue-500/80 text-white backdrop-blur-md'
                  : 'bg-purple-500/80 text-white backdrop-blur-md'
              }`}>
                {client}
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-md">
                {clientType === 'kurumsal' ? 'Kurumsal Etkinlik' : 'Ozel Organizasyon'}
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-md">
                {district}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-white font-bold mb-4"
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              {title}
            </h1>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', label: formattedDate },
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', label: `${district}, Istanbul` },
                { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', label: `${guestCount} Davetli` },
                { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: duration }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80 text-sm">
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-16">

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Etkinlik Hakkinda
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {description}
                </p>
              </motion.div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-red-50 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Zorluk</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {challenge}
                  </p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-green-50 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Cozum</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {solution}
                  </p>
                </motion.div>
              </div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Sonuclar
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {results.satisfaction}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">Memnuniyet</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {results.childrenEntertained}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">Mutlu Cocuk</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {results.activitiesProvided}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">Aktivite</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl col-span-2 md:col-span-1">
                    <div className="text-lg font-bold text-red-600 mb-2">
                      {results.highlight.length > 30 ? results.highlight.substring(0, 30) + '...' : results.highlight}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">One Cikan Basari</div>
                  </div>
                </div>
                {results.highlight.length > 30 && (
                  <p className="mt-4 text-gray-600 text-sm italic">
                    * {results.highlight}
                  </p>
                )}
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Etkinlik Galerisi
                </h2>

                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-4">
                  <OptimizedImage
                    src={images[activeImage]}
                    alt={`${eventName} - Fotograf ${activeImage + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-5 gap-3">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-300 ${
                        activeImage === index
                          ? 'ring-2 ring-purple-500 ring-offset-2 opacity-100'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <OptimizedImage
                        src={image}
                        alt={`${eventName} - Kucuk ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <svg className="w-10 h-10 text-purple-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div>
                    <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Sik Sorulan Sorular
                </h2>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-gray-50 rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer p-6 text-gray-900 font-semibold hover:bg-gray-100 transition-colors">
                        <span className="pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-gray-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-8">

              {/* Event Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-6 sticky top-24"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  Etkinlik Bilgileri
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Musteri</p>
                      <p className="text-gray-900 font-semibold">{client}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Tarih</p>
                      <p className="text-gray-900 font-semibold">{formattedDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Mekan</p>
                      <p className="text-gray-900 font-semibold">{venueName}</p>
                      <p className="text-gray-500 text-sm">{district}, Istanbul</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Katilimci</p>
                      <p className="text-gray-900 font-semibold">{guestCount} Kisi</p>
                      <p className="text-gray-500 text-sm">{childCount} Cocuk</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Sure</p>
                      <p className="text-gray-900 font-semibold">{duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Tur</p>
                      <p className="text-gray-900 font-semibold">
                        {clientType === 'kurumsal' ? 'Kurumsal Etkinlik' : 'Ozel Organizasyon'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Used */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Sunulan Hizmetler
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {serviceLabels.map((label, index) => (
                      <Link
                        key={index}
                        to={relatedServices[index] || '/organizasyonlar/cocuk-etkinlikleri'}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Etiketler
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-500 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 space-y-3">
                  <a
                    href={`https://wa.me/905307309009?text=Merhaba%2C%20${encodeURIComponent(eventName)}%20benzeri%20bir%20etkinlik%20organize%20etmek%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Benzer Etkinlik Planlayalim
                  </a>
                  <a
                    href="tel:+905307309009"
                    className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    05307309009
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Bu Etkinlikte Sunulan Hizmetler
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceLabels.map((label, index) => (
                <Link
                  key={index}
                  to={relatedServices[index] || '/organizasyonlar/cocuk-etkinlikleri'}
                  className="group bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-100 transition-colors">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {label}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Diger Vaka Analizleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {relatedCaseStudies.map((cs) => (
                  <Link
                    key={cs.slug}
                    to={`/vaka-analizi/${cs.slug}`}
                    className="group flex gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <OptimizedImage
                        src={cs.heroImage}
                        alt={cs.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${
                        cs.clientType === 'kurumsal'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {cs.client}
                      </span>
                      <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors">
                        {cs.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{cs.district} - {cs.guestCount} Kisi</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  to="/vaka-analizi"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                >
                  <span>Tum Vaka Analizlerini Gor</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-white font-bold mb-6"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                letterSpacing: '-0.02em'
              }}
            >
              Sizin Icin de Unutulmaz Bir Etkinlik Planlayalim
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              {client} gibi prestijli markalara sunulan ayni kalitede hizmeti sizin etkinliginiz icin de sunalim.
            </p>
            <a
              href={`https://wa.me/905307309009?text=Merhaba%2C%20${encodeURIComponent(district)}%20bolgesinde%20etkinlik%20organize%20etmek%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-green-500/25 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Ucretsiz Teklif Alin
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CaseStudyDetail
