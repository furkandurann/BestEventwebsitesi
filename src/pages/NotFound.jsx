import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center px-4">
      <Seo
        title="404 - Sayfa Bulunamadı | Best Event"
        description="Aradığınız sayfa bulunamadı. Best Event ana sayfasına dönün veya organizasyon hizmetlerimize göz atın."
        keywords={['404', 'sayfa bulunamadı', 'best event']}
      />

      <div className="text-center">
        {/* 404 Animasyonu */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl animate-bounce">🎈</span>
          </div>
        </div>

        {/* Mesaj */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Oops! Sayfa Bulunamadı
        </h2>
        <p className="text-gray-400 mb-4 max-w-md mx-auto">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
          Ama endişelenmeyin, sizi doğru yere yönlendirelim!
        </p>

        {/* Teknik Sorun Notu */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-8 max-w-md mx-auto">
          <p className="text-yellow-400 text-sm font-medium">
            Şu an teknik bir sorun yaşanıyor. Bize direkt müşteri iletişim numaramız üzerinden ulaşabilirsiniz:
          </p>
          <a
            href="tel:05349306799"
            className="text-yellow-300 text-lg font-bold hover:text-yellow-200 transition-colors mt-2 inline-block"
          >
            0534 930 67 99 - Best Event
          </a>
        </div>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Ana Sayfa
          </Link>

          <Link
            to="/organizasyonlar/cocuk-etkinlikleri"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Hizmetlerimiz
          </Link>

          <Link
            to="/iletisim"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            İletişim
          </Link>
        </div>

        {/* Popüler Linkler */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4">Popüler Sayfalar</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/organizasyonlar/palyaco-kiralama" className="text-purple-400 hover:text-purple-300 text-sm">
              Palyaço Kiralama
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/organizasyonlar/bubble-show" className="text-purple-400 hover:text-purple-300 text-sm">
              Bubble Show
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/organizasyonlar/magic-show" className="text-purple-400 hover:text-purple-300 text-sm">
              Sihirbaz
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/organizasyonlar/dogum-gunu-organizasyonu" className="text-purple-400 hover:text-purple-300 text-sm">
              Doğum Günü
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
