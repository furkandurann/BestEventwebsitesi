import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBlogsByPillarServiceAsync } from '../data/blogPosts.async'

const RelatedBlogPosts = ({ servicePath, maxPosts = 3 }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    let isMounted = true

    if (!servicePath) {
      setBlogs([])
      return () => {
        isMounted = false
      }
    }

    getBlogsByPillarServiceAsync(servicePath).then((items) => {
      if (isMounted) {
        setBlogs(items || [])
      }
    })

    return () => {
      isMounted = false
    }
  }, [servicePath])

  if (!blogs || blogs.length === 0) return null

  const displayBlogs = blogs.slice(0, maxPosts)

  return (
    <section className="py-16 sm:py-20 px-6 bg-gradient-to-b from-zinc-900 to-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-bold text-white mb-3 text-center"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            letterSpacing: '-0.02em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
          }}
        >
          Bu Konudaki Rehberlerimiz
        </h2>
        <p
          className="text-center mb-10 text-white/60"
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
          }}
        >
          Detaylı rehberler, ipuçları ve deneyimlerimiz
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBlogs.map((blog) => (
            <Link
              key={blog.slug}
              to={`/blog/${blog.slug}`}
              className="group block rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                    {blog.category}
                  </span>
                  {blog.readTime && (
                    <span className="text-xs text-white/40">{blog.readTime} dk okuma</span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-white/90 group-hover:text-white line-clamp-2 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-white/50 line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-200 text-sm font-medium"
          >
            Tüm Blog Yazılarını Gör
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RelatedBlogPosts
