import { Link } from 'react-router-dom'
import { districts } from '../data/districts'

const DistrictLinksGrid = ({ lpServiceSlug, serviceName, maxDistricts = 20, title }) => {
  const displayDistricts = districts.slice(0, maxDistricts)
  const heading = title || `${serviceName} Hizmet Bölgelerimiz`

  return (
    <section className="py-16 sm:py-20 px-6 bg-gradient-to-b from-black to-zinc-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-bold text-white mb-4 text-center"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
          }}
        >
          {heading}
        </h2>
        <p
          className="text-center mb-10 text-white/60"
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
          }}
        >
          İstanbul genelinde {serviceName.toLowerCase()} hizmeti için semtinizi seçin
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {displayDistricts.map((district) => (
            <Link
              key={district.slug}
              to={`/organizasyonlar/${lpServiceSlug}/${district.slug}`}
              className="block px-4 py-3 rounded-xl text-center text-sm font-medium transition-all duration-200 bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10"
            >
              {district.name} {serviceName}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DistrictLinksGrid
