import { motion } from 'framer-motion'
import { useState } from 'react'
import Seo from '../components/Seo'

const Clients = () => {
  const [uploadedLogos, setUploadedLogos] = useState({})

  const clients = [
    { id: 1, name: 'Koç Holding', category: 'Holding', logo: 'https://logo.clearbit.com/koc.net' },
    { id: 2, name: 'Fenerbahçe Spor Kulübü', category: 'Spor', logo: 'https://logo.clearbit.com/fenerbahce.org' },
    { id: 3, name: 'Galatasaray Spor Kulübü', category: 'Spor', logo: 'https://logo.clearbit.com/galatasaray.org' },
    { id: 4, name: 'Vodafone', category: 'Telekomünikasyon', logo: 'https://logo.clearbit.com/vodafone.com.tr' },
    { id: 5, name: 'Turkcell', category: 'Telekomünikasyon', logo: 'https://logo.clearbit.com/turkcell.com.tr' },
    { id: 6, name: 'Katılım Evim', category: 'Finans', logo: 'https://logo.clearbit.com/katilimevim.com' },
    { id: 7, name: 'Sencard', category: 'Finans', logo: 'https://logo.clearbit.com/sencard.com.tr' },
    { id: 8, name: 'Halkbank', category: 'Banka', logo: 'https://logo.clearbit.com/halkbank.com.tr' },
    { id: 9, name: 'Çırağan Palace', category: 'Otel', logo: 'https://logo.clearbit.com/ciraganpalace.com' },
    { id: 10, name: 'Porsche', category: 'Otomotiv', logo: 'https://logo.clearbit.com/porsche.com' },
    { id: 11, name: 'Sinpaş', category: 'İnşaat', logo: 'https://logo.clearbit.com/sinpas.com.tr' },
    { id: 12, name: 'Civil', category: 'Marka', logo: 'https://logo.clearbit.com/civil.com.tr' },
    { id: 13, name: 'İBB', category: 'Belediye', logo: 'https://logo.clearbit.com/ibb.istanbul' },
    { id: 14, name: 'Ataşehir Belediyesi', category: 'Belediye', logo: 'https://logo.clearbit.com/atasehir.bel.tr' },
    { id: 15, name: 'Küçükçekmece Belediyesi', category: 'Belediye', logo: 'https://logo.clearbit.com/kucukcekmece.bel.tr' },
    { id: 16, name: 'Beykoz Belediyesi', category: 'Belediye', logo: 'https://logo.clearbit.com/beykoz.bel.tr' },
    { id: 17, name: 'Tüm Bankalar', category: 'Finans', logo: 'https://logo.clearbit.com/bankalar.org' },
    { id: 18, name: 'Gülben Ergen', category: 'Ünlü', logo: 'https://via.placeholder.com/200x100/f3f4f6/9333ea?text=Gülben+Ergen' }
  ]

  const handleLogoUpload = (id, event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedLogos(prev => ({
          ...prev,
          [id]: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50">
      <Seo
        title="Best Event Referansları | Kurumsal İş Ortaklarımız"
        description="Koç Holding, Vodafone, Turkcell, İBB gibi önde gelen markalarla gerçekleştirdiğimiz etkinlik projelerine göz atın."
        keywords={[
          'best event referans',
          'kurumsal etkinlik referansları',
          'organizasyon firması müşteri listesi'
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Best Event Referanslar',
          description:
            'Best Event organizasyon ajansının hizmet verdiği kurumsal marka ve kurumların listesi.',
          url: 'https://www.bestevent.com.tr/referanslar'
        }}
      />
      <div className="layout-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 bg-clip-text text-transparent">
              Referanslarımız
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Türkiye'nin önde gelen kurumlarına hizmet vermenin gururunu yaşıyoruz
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 shadow-lg text-center"
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">18+</div>
            <p className="text-gray-600">Prestijli Marka</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg text-center"
          >
            <div className="text-4xl font-bold text-pink-600 mb-2">100+</div>
            <p className="text-gray-600">Başarılı Proje</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg text-center"
          >
            <div className="text-4xl font-bold text-violet-600 mb-2">10+</div>
            <p className="text-gray-600">Yıllık Deneyim</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg text-center"
          >
            <div className="text-4xl font-bold text-amber-600 mb-2">%98</div>
            <p className="text-gray-600">Müşteri Memnuniyeti</p>
          </motion.div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Logo Area */}
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://via.placeholder.com/200x100/f3f4f6/9333ea?text=${encodeURIComponent(client.name)}`
                    }}
                  />
                </div>

                {/* Info Area */}
                <div className="p-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 mb-2 text-sm">
                      {client.name}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full">
                      {client.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              ✨ Onlarca Başarılı Proje
            </h3>
            <p className="text-gray-600">
              Türkiye'nin önde gelen kurumlarıyla çalışmanın gururunu yaşıyoruz
            </p>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            "Profesyonel ve Güvenilir Hizmet"
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Best Event ile çalışmak her zaman keyifli ve sorunsuz geçiyor. Ekipleri çok profesyonel!
          </p>
          <div className="flex justify-center space-x-1 text-2xl">
            ⭐⭐⭐⭐⭐
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Clients
