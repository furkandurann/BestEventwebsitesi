import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// Path'e göre Türkçe başlık mapping
const pathToTitle = {
  '': 'Ana Sayfa',
  'hakkimizda': 'Hakkımızda',
  'organizasyonlar': 'Organizasyonlar',
  'galeri': 'Galeri',
  'iletisim': 'İletişim',
  'ekibimiz': 'Ekibimiz',
  'referanslar': 'Referanslarımız',
  'hizmet-bolgeleri': 'Hizmet Bölgeleri',
  'organik-pastalar': 'Organik Pastalar',
  
  // Hizmetler
  'cocuk-etkinlikleri': 'Çocuk Etkinlikleri',
  'palyaco-kiralama': 'Palyaço Kiralama',
  'kostumlu-karakterler': 'Kostümlü Karakterler',
  'maskot-kiralama': 'Maskot Kiralama',
  'kiz-maskotlari': 'Kız Maskotları',
  'erkek-maskotlari': 'Erkek Maskotları',
  'yuz-boyama': 'Yüz Boyama',
  'profesyonel-makyaj': 'Profesyonel Makyaj',
  'magic-show': 'Magic Show',
  'sihirbaz': 'Sihirbaz',
  'bubble-show': 'Bubble Show',
  'ates-gosterisi': 'Ateş Gösterisi',
  'jonklor': 'Jonglör',
  'tahtabacak': 'Tahtabacak',
  'dogum-gunu-organizasyonu': 'Doğum Günü Organizasyonu',
  'konsept-dogum-gunu': 'Konsept Doğum Günü',
  'dogum-gunu': 'Doğum Günü',
  'pamuk-seker': 'Pamuk Şeker',
  'cikolata-selalesi': 'Çikolata Şelalesi',
  'karaoke-etkinligi': 'Karaoke Etkinliği',
  'vr-sanal-gerceklik': 'VR Sanal Gerçeklik',
  'gezegen-tanitim': 'Gezegen Tanıtım',
  'transformers-robot': 'Transformers Robot',
  'sisme-oyun-parki': 'Şişme Oyun Parkı',
  'cocuk-masa-sandalye': 'Çocuk Masa Sandalye',
  'atolye-etkinlikleri': 'Atölye Etkinlikleri',
  'muzik-etkinlikleri': 'Müzik Etkinlikleri',
  'dj-kiralama': 'DJ Kiralama',
  'muzisyen-kiralama': 'Müzisyen Kiralama',
  'dans-etkinlikleri': 'Dans Etkinlikleri',
  'dansci-kiralama': 'Dansçı Kiralama',
  'hostes-kiralama': 'Hostes Kiralama',
}

const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  // Ana sayfada breadcrumb gösterme
  if (pathnames.length === 0) return null

  // Breadcrumb items oluştur
  const breadcrumbItems = [
    { name: 'Ana Sayfa', path: '/' },
  ]

  let currentPath = ''
  pathnames.forEach((pathname) => {
    currentPath += `/${pathname}`
    breadcrumbItems.push({
      name: pathToTitle[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1),
      path: currentPath,
    })
  })

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://www.bestevent.com.tr${item.path}`,
    })),
  }

  return (
    <>
      {/* Schema Markup */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Breadcrumb UI - Şık Minimal Design */}
      <nav 
        aria-label="Breadcrumb" 
        className="bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="layout-container py-4">
          <ol className="flex items-center space-x-1 text-sm overflow-x-auto">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1

              return (
                <li key={item.path} className="flex items-center group">
                  {index > 0 && (
                    <span className="text-gray-300 mx-2 select-none">/</span>
                  )}
                  
                  {isLast ? (
                    <span 
                      className="text-gray-900 font-semibold whitespace-nowrap px-3 py-1.5 rounded-md bg-gray-50"
                      aria-current="page"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-primary hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap px-3 py-1.5 rounded-md hover:bg-gray-50 hover:shadow-sm"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}

export default Breadcrumb
