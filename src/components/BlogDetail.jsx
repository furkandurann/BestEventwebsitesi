import { useParams, Link } from 'react-router-dom'
import Seo from './Seo'
import { getBlogBySlug } from '../data/blogPosts'

const BlogDetail = ({ children, content }) => {
  const { slug } = useParams()
  const blog = getBlogBySlug(slug)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog bulunamadı</h1>
          <Link to="/blog" className="text-red-600 hover:text-red-700 font-semibold">
            ← Blog sayfasına dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Seo 
        title={`${blog.title} | Best Event Blog`}
        description={blog.excerpt}
        keywords={`${blog.title}, ${blog.category}, istanbul, etkinlik, organizasyon, kiralama, gösteri`}
        ogImage={blog.image}
      />

      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
              <span className="text-white/80 text-sm">
                📅 {blog.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {blog.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div>
              {children || content}
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
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
              href="https://wa.me/905349306799?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            İlgili Blog Yazıları
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/blog" className="bg-white text-gray-700 px-5 py-2.5 rounded-full shadow hover:shadow-lg transition-all text-sm font-semibold hover:bg-gray-100">
              ← Tüm Bloglar
            </Link>
            <Link to="/organizasyonlar/cocuk-etkinlikleri" className="bg-white text-gray-700 px-5 py-2.5 rounded-full shadow hover:shadow-lg transition-all text-sm font-semibold hover:bg-gray-100">
              🎪 Çocuk Etkinlikleri
            </Link>
            <Link to="/iletisim" className="bg-red-600 text-white px-5 py-2.5 rounded-full shadow hover:shadow-lg transition-all text-sm font-semibold hover:bg-red-700">
              📞 İletişim
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetail
