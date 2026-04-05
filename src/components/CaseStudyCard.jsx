import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import OptimizedImage from './OptimizedImage'

const CaseStudyCard = ({ caseStudy }) => {
  const {
    slug,
    client,
    clientType,
    title,
    description,
    heroImage,
    district,
    guestCount,
    tags,
    serviceLabels
  } = caseStudy

  return (
    <Link to={`/vaka-analizi/${slug}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
      >
        {/* Gorsel */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <OptimizedImage
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Client Badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
              clientType === 'kurumsal'
                ? 'bg-blue-500/80 text-white'
                : 'bg-purple-500/80 text-white'
            }`}>
              {client}
            </span>
          </div>

          {/* Type Badge */}
          <div className="absolute top-4 right-4">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
              clientType === 'kurumsal'
                ? 'bg-white/20 text-white'
                : 'bg-white/20 text-white'
            }`}>
              {clientType === 'kurumsal' ? 'Kurumsal' : 'Ozel'}
            </span>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{district}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{guestCount} kisi</span>
            </div>
          </div>
        </div>

        {/* Icerik */}
        <div className="p-6">
          {/* Baslik */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
            {title}
          </h3>

          {/* Aciklama */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>

          {/* Hizmetler */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {serviceLabels.slice(0, 3).map((label, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
              >
                {label}
              </span>
            ))}
            {serviceLabels.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                +{serviceLabels.length - 3}
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs text-gray-400 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
            <span>Detaylari Incele</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default CaseStudyCard
