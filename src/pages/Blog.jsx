import { useState } from 'react'
import Seo from '../components/Seo'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')

  // Kategori filtreleme
  const filteredPosts = selectedCategory === 'Tümü' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <>
      <Seo 
        title="Blog - Etkinlik Organizasyonu Rehberi | Best Event"
        description="İstanbul'da çocuk etkinlikleri, doğum günü organizasyonu, maskot kiralama ve daha fazlası hakkında detaylı rehberler ve ipuçları."
        keywords="etkinlik organizasyonu, blog, rehber, istanbul, çocuk etkinlikleri"
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Etkinlik Rehberi
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            İstanbul'da organizasyon, kiralama, etkinlik ve gösteri hizmetleri hakkında her şey
          </p>
        </div>
      </section>

      {/* Kategori Filtreleri */}
      <section className="bg-gray-50 py-6 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {['Tümü', 'Etkinlik', 'Bölge'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
                {category === 'Tümü' && ` (${blogPosts.length})`}
                {category === 'Etkinlik' && ` (${blogPosts.filter(p => p.category === 'Etkinlik').length})`}
                {category === 'Bölge' && ` (${blogPosts.filter(p => p.category === 'Bölge').length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid - People Dergisi Stili */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          {/* Boş Durum */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Bu kategoride henüz blog yazısı bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Etkinliğinizi Planlayalım!
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Profesyonel organizasyon, kiralama ve gösteri hizmetleri için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905551234567"
              className="bg-white text-red-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              📞 Hemen Ara
            </a>
            <a 
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
