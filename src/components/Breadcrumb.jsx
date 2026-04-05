import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// Path'e göre Türkçe başlık mapping
const pathToTitle = {
  '': 'Ana Sayfa',
  'hakkimizda': 'Hakkımızda',
  'organizasyonlar': 'Organizasyonlar',
  'galeri': 'Galeri',
  'iletisim': 'İletişim',
  'is-ilanlari': 'İş İlanları',
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
  'palyaco-is-ilani': 'Palyaço İş İlanı',
  'animator-is-ilani': 'Animatör İş İlanı',
  'maskot-is-ilani': 'Maskot İş İlanı',
  'oyun-ablasi-abisi-is-ilani': 'Oyun Ablası / Abisi İş İlanı',

  // Local Landing Page - Hizmet Slug'ları
  'bubble-show-kiralama': 'Bubble Show Kiralama',
  'sihirbaz-kiralama': 'Sihirbaz Kiralama',
  'pamuk-seker-arabasi-kiralama': 'Pamuk Şeker Arabası Kiralama',
  'profesyonel-yuz-boyama': 'Profesyonel Yüz Boyama',
  'popcorn-arabasi-kiralama': 'Popcorn Arabası Kiralama',

  // İstanbul Semtleri
  'kadikoy': 'Kadıköy',
  'besiktas': 'Beşiktaş',
  'sisli': 'Şişli',
  'bakirkoy': 'Bakırköy',
  'atasehir': 'Ataşehir',
  'uskudar': 'Üsküdar',
  'maltepe': 'Maltepe',
  'kartal': 'Kartal',
  'pendik': 'Pendik',
  'umraniye': 'Ümraniye',
  'beylikduzu': 'Beylikdüzü',
  'sariyer': 'Sarıyer',
  'fatih': 'Fatih',
  'eyupsultan': 'Eyüpsultan',
  'beyoglu': 'Beyoğlu',
  'basaksehir': 'Başakşehir',
  'kucukcekmece': 'Küçükçekmece',
  'tuzla': 'Tuzla',
  'cekmekoy': 'Çekmeköy',
  'zeytinburnu': 'Zeytinburnu',
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
      'item': `https://bestevent.com.tr${item.path}`,
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

      {/* Breadcrumb UI - Kompakt */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white/80 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="layout-container py-1.5">
          <ol className="flex items-center text-xs overflow-x-auto">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1

              return (
                <li key={item.path} className="flex items-center">
                  {index > 0 && (
                    <span className="text-gray-300 mx-1 select-none">/</span>
                  )}

                  {isLast ? (
                    <span
                      className="text-gray-700 font-medium whitespace-nowrap px-1.5 py-0.5"
                      aria-current="page"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-primary transition-colors duration-200 whitespace-nowrap px-1.5 py-0.5"
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
