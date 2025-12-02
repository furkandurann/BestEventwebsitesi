import { motion } from 'framer-motion'
import { useState } from 'react'
import Seo from '../components/Seo'

const Team = () => {
  const [uploadedImages, setUploadedImages] = useState({})

  const teamMembers = [
    {
      id: 1,
      title: 'Kurucu',
      name: 'Ekip Üyesi',
      icon: '👔',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Yönetici Asistanı',
      name: 'Ekip Üyesi',
      icon: '💼',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 3,
      title: 'Eğitim Sorumlusu',
      name: 'Ekip Üyesi',
      icon: '📚',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Konsept Görsel Süsleme Sorumlusu',
      name: 'Ekip Üyesi',
      icon: '🎨',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 5,
      title: 'Teknik',
      name: 'Ekip Üyesi',
      icon: '🔧',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Magic Artist',
      name: 'Ekip Üyesi',
      icon: '🎩',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 7,
      title: 'Shower',
      name: 'Ekip Üyesi',
      icon: '⭐',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 8,
      title: 'Lojistik',
      name: 'Ekip Üyesi',
      icon: '🚚',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 9,
      title: 'Ekip Üyesi',
      name: 'Ekip Üyesi',
      icon: '👥',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ]

  const handleImageUpload = (id, event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImages(prev => ({
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
        title="Best Event Ekibi | Profesyonel Organizasyon Kadrosu"
        description="Best Event organizasyon ajansının kurucu, eğitim, teknik ve sahne ekiplerinden oluşan profesyonel kadrosunu tanıyın."
        keywords={[
          'best event ekibi',
          'etkinlik ekibi',
          'organizasyon kadrosu',
          'profesyonel sahne ekibi'
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Best Event Ekibi',
          description:
            'Best Event organizasyon ajansının kurucu, eğitim, teknik ve sahne ekiplerinden oluşan profesyonel kadrosu.',
          url: 'https://www.bestevent.com.tr/ekibimiz'
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
              Ekibimiz
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesyonel ve deneyimli ekibimizle unutulmaz anlar yaratıyoruz
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Photo Area */}
                <div className={`relative h-80 bg-gradient-to-br ${member.gradient} flex items-center justify-center overflow-hidden`}>
                  {uploadedImages[member.id] ? (
                    <img
                      src={uploadedImages[member.id]}
                      alt={member.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-8xl mb-4 filter drop-shadow-2xl">
                        {member.icon}
                      </div>
                      <p className="text-white/70 text-sm px-4">
                        Fotoğraf eklemek için tıklayın
                      </p>
                    </div>
                  )}
                  
                  {/* Upload Button Overlay */}
                  <label
                    htmlFor={`upload-${member.id}`}
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 cursor-pointer flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
                        <svg
                          className="w-8 h-8 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </label>
                  
                  <input
                    id={`upload-${member.id}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(member.id, e)}
                    className="hidden"
                  />
                </div>

                {/* Info Area */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {member.title}
                  </h3>
                  <p className="text-gray-600">
                    {member.name}
                  </p>
                  
                  {/* Social Links (optional) */}
                  <div className="flex justify-center space-x-3 mt-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8"
        >
          <p className="text-gray-600 text-lg mb-4">
            💡 <strong>Not:</strong> Her kartın üzerine gelip tıklayarak ekip üyelerinin fotoğraflarını yükleyebilirsiniz.
          </p>
          <p className="text-gray-500">
            Fotoğraflar tarayıcınızda geçici olarak saklanır. Kalıcı olması için fotoğrafları assets/images/team/ klasörüne kaydetmeniz gerekir.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Team
