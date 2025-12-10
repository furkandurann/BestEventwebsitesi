import { Link } from 'react-router-dom'

const BlogCard = ({ slug, title, excerpt, category, date, image }) => {
  return (
    <Link to={`/blog/${slug}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Fotoğraf */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* İçerik */}
        <div className="p-6">
          {/* Meta Bilgiler */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <span>📅</span>
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🏷️</span>
              <span className="text-red-600 font-medium">{category}</span>
            </div>
          </div>

          {/* Başlık */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
            {title}
          </h3>

          {/* Açıklama */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {excerpt}
          </p>

          {/* CTA Butonu */}
          <div className="flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
            <span>Devamını Oku</span>
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
