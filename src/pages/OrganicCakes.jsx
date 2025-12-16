import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { organicCakes, cakeCategories } from '../data/organicCakesData'
import Seo from '../components/Seo'

const OrganicCakes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCakes = selectedCategory === 'all'
    ? organicCakes
    : organicCakes.filter(cake => cake.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Seo
        title="%100 Organik Pasta | Best Event"
        description="Organik malzemelerle hazırlanan, koruyucu madde içermeyen, glütensiz seçenekleriyle sağlıklı ve lezzetli pastalarımızı keşfedin."
        keywords={[
          'organik pasta',
          'doğal pasta',
          'sağlıklı pasta',
          'glütensiz pasta',
          'özel pasta',
          'doğum günü pastası'
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/content/images/konseptpasta/pasta-pattern.webp')] opacity-5 bg-cover bg-center"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
              %100 Organik <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Pastalar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              Doğal malzemelerle, koruyucu madde kullanmadan, sevdikleriniz için özenle hazırlanan lezzetler
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold text-gray-800">%100 Organik</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold text-gray-800">Glütensiz Seçenekler</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold text-gray-800">El Yapımı</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {cakeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cakes Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCakes.map((cake, index) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/content/images/konseptpasta/default-cake.webp'
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {cake.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {cake.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {cake.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Özellikler:</h4>
                    <ul className="space-y-1">
                      {cake.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sizes */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Boyut Seçenekleri:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cake.sizes.map((size, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/iletisim"
                    className="block w-full text-center bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Sipariş Ver
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Organic Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Neden Organik Pasta?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sevdiklerinizin sağlığını düşünerek, doğal ve kaliteli malzemelerle hazırlıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌿',
                title: 'Doğal Malzemeler',
                description: 'Sadece organik, doğal ve taze malzemeler kullanıyoruz'
              },
              {
                icon: '🚫',
                title: 'Koruyucu Madde Yok',
                description: 'Hiçbir kimyasal koruyucu madde içermez'
              },
              {
                icon: '✨',
                title: 'El Yapımı',
                description: 'Her pasta özenle, el emeği ile hazırlanır'
              },
              {
                icon: '🎨',
                title: 'Kişiye Özel',
                description: 'İstediğiniz tasarımda özel siparişler'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hayalinizdeki Pastayı Birlikte Tasarlayalım
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Özel günleriniz için size özel organik pastalar hazırlıyoruz
          </p>
          <Link
            to="/iletisim"
            className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Hemen İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  )
}

export default OrganicCakes
