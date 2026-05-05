import { Link } from 'react-router-dom'

const PillarLink = ({ servicePath, serviceName }) => {
  if (!servicePath || !serviceName) return null

  return (
    <div className="mt-10 mb-6">
      <Link
        to={servicePath}
        className="group block p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-purple-600 mb-1">Detaylı Hizmet Sayfamız</p>
            <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
              {serviceName} İstanbul — Fiyat ve Rezervasyon
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Detaylı bilgi, paket seçenekleri ve online teklif
            </p>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 group-hover:bg-purple-200 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-purple-600 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PillarLink
