import { Link } from 'react-router-dom'
import { getBlogsBySubCategory, getRelatedBlogObjects } from '../data/blogPosts'

const SiloNavigation = ({ currentSlug, subCategory, relatedBlogSlugs }) => {
  // İlişkili blogları göster (varsa relatedBlogSlugs, yoksa aynı subCategory'den)
  let relatedBlogs = []

  if (relatedBlogSlugs && relatedBlogSlugs.length > 0) {
    relatedBlogs = getRelatedBlogObjects(relatedBlogSlugs)
  } else if (subCategory) {
    relatedBlogs = getBlogsBySubCategory(subCategory)
      .filter(post => post.slug !== currentSlug)
      .slice(0, 4)
  }

  if (relatedBlogs.length === 0) return null

  return (
    <div className="mt-12 pt-8 border-t-2 border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        İlgili Yazılar
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {relatedBlogs.map((blog) => (
          <Link
            key={blog.slug}
            to={`/blog/${blog.slug}`}
            className="group flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-purple-50 border border-gray-100 hover:border-purple-200 transition-all duration-200"
          >
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 line-clamp-2 mb-1">
                {blog.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{blog.date}</span>
                {blog.readTime && <span>· {blog.readTime} dk</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SiloNavigation
