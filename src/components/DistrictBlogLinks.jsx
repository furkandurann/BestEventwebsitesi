import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDistrictBlogsAsync } from '../data/blogPosts.async'

const DistrictBlogLinks = ({ districtSlug, maxPosts = 4 }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([])

  useEffect(() => {
    let isMounted = true

    if (!districtSlug) {
      setRelatedBlogs([])
      return () => {
        isMounted = false
      }
    }

    getDistrictBlogsAsync(districtSlug, maxPosts).then((blogs) => {
      if (isMounted) {
        setRelatedBlogs(blogs || [])
      }
    })

    return () => {
      isMounted = false
    }
  }, [districtSlug, maxPosts])

  if (!districtSlug) return null

  if (relatedBlogs.length === 0) return null

  return (
    <section className="py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
          Bu Bolge Icin Rehber Icerikler
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedBlogs.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-purple-500/30 transition-all"
            >
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-500" />
              <div className="min-w-0">
                <p className="text-sm md:text-base font-medium text-white group-hover:text-purple-400 transition-colors line-clamp-1">
                  {post.title}
                </p>
                {post.readTime && (
                  <p className="text-xs text-white/40 mt-0.5">{post.readTime} dk okuma</p>
                )}
              </div>
              <svg className="w-4 h-4 text-white/30 group-hover:text-purple-400 flex-shrink-0 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DistrictBlogLinks
