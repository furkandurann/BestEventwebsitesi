import { Link } from 'react-router-dom'

const AuthorExpertise = ({ serviceName = 'Etkinlik Organizasyonu' }) => {
  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://bestevent.com.tr/#author',
    'name': 'Furkan Duran',
    'jobTitle': 'Best Event Manager & Sektör Uzmanı',
    'alumniOf': {
      '@type': 'CollegeOrUniversity',
      'name': 'Okan Üniversitesi',
      'department': 'Tiyatro ve Sahne Sanatları'
    },
    'worksFor': {
      '@type': 'Organization',
      '@id': 'https://bestevent.com.tr/#organization',
      'name': 'Best Event'
    },
    'knowsAbout': [
      'Çocuk Etkinlikleri',
      'Doğum Günü Organizasyonu',
      'Palyaço Kiralama',
      'Sihirbaz Gösterisi',
      'Bubble Show',
      'Etkinlik Yönetimi',
      serviceName
    ],
    'description': '18 yıllık sektör deneyimi ve 5.000+ başarılı etkinlik ile İstanbul\'un önde gelen organizasyon uzmanı.',
    'url': 'https://bestevent.com.tr/hakkimizda',
    'sameAs': [
      'https://www.instagram.com/besteventorganizasyon/',
      'https://www.linkedin.com/company/besteventorganizasyon'
    ]
  }

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-black to-zinc-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
        />

        <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4 sm:gap-5">
            {/* Avatar initials */}
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
              FD
            </div>

            <div className="flex-1 min-w-0">
              {/* Author name + title */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-white font-semibold text-lg">Furkan Duran</h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Doğrulanmış Uzman
                </span>
              </div>

              <p className="text-purple-400 text-sm font-medium mb-3">
                Best Event Manager — Okan Üniversitesi Tiyatro ve Sahne Sanatları Mezunu
              </p>

              {/* Expertise description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Bu sayfa, {serviceName.toLowerCase()} alanında <strong className="text-white">18 yıllık sektör deneyimine</strong> sahip, Okan Üniversitesi Tiyatro ve Sahne Sanatları mezunu Furkan Duran tarafından hazırlanmıştır. İstanbul genelinde <strong className="text-white">5.000'den fazla başarılı etkinlik</strong> organize eden Best Event ekibinin bilgi birikimi ve sahadan edinilen deneyimler bu içeriğe yansıtılmıştır.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">18 yıl</strong> deneyim</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span><strong className="text-white">5.000+</strong> etkinlik</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">İstanbul</strong> geneli</span>
                </div>
              </div>

              {/* Link to about page */}
              <Link
                to="/hakkimizda"
                className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Hakkımızda daha fazla bilgi
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthorExpertise
