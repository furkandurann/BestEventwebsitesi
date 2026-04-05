import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'
import { getBlogBySlugAsync } from '../../data/blogPosts.async'

/**
 * DynamicBlogPost - sections verisi olan blogları otomatik render eder.
 * Her blog için ayrı dosya oluşturmak yerine, blogPosts.js'deki sections verisini kullanır.
 */
const DynamicBlogPost = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    setIsLoading(true)

    getBlogBySlugAsync(slug).then((item) => {
      if (!isMounted) return

      setBlog(item || null)
      setIsLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [slug])

  if (isLoading) {
    return <div className="min-h-[60vh] bg-white" />
  }

  if (!blog) {
    return <BlogDetail blog={null} slug={slug} />
  }

  const sections = Array.isArray(blog.sections) ? blog.sections : []
  const faqItems = Array.isArray(blog.faqItems) ? blog.faqItems : []
  const hasIntroText = typeof blog.introText === 'string' && blog.introText.trim().length > 0
  const hasTipText = typeof blog.tipText === 'string' && blog.tipText.trim().length > 0
  const hasSectionSignal = sections.some((section) => {
    const hasTitle = typeof section.title === 'string' && section.title.trim().length > 0
    const hasParagraph = Array.isArray(section.paragraphs) && section.paragraphs.some((p) => typeof p === 'string' && p.trim().length > 0)
    const hasItems = Array.isArray(section.items) && section.items.some((item) => {
      if (typeof item === 'string') return item.trim().length > 0
      return (
        (typeof item?.bold === 'string' && item.bold.trim().length > 0) ||
        (typeof item?.text === 'string' && item.text.trim().length > 0)
      )
    })
    const hasTipBox = typeof section.tipBox === 'string' && section.tipBox.trim().length > 0
    const hasInfoBox = typeof section.infoBox === 'string' && section.infoBox.trim().length > 0
    return hasTitle || hasParagraph || hasItems || hasTipBox || hasInfoBox
  })
  const hasFaq = faqItems.length > 0
  const isSoft404 = !hasIntroText && !hasTipText && !hasSectionSignal && !hasFaq
  const hasTableOfContents = sections.length > 0 || faqItems.length > 0

  const content = (
    <>
      {/* İçindekiler */}
      {hasTableOfContents && (
        <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
          <ul className="space-y-2">
            {sections.map((section, i) => (
              <li key={i}>
                <a href={`#bolum-${i + 1}`} className="text-red-600 hover:text-red-700 font-semibold">
                  {i + 1}. {section.title}
                </a>
              </li>
            ))}
            {faqItems.length > 0 && (
              <li>
                <a href="#sss" className="text-red-600 hover:text-red-700 font-semibold">
                  {sections.length + 1}. Sık Sorulan Sorular
                </a>
              </li>
            )}
          </ul>
        </div>
      )}

      {!hasTableOfContents && (
        <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">İçerik yapısı</h2>
          <p className="text-gray-700 leading-relaxed">
            Bu yazı için detaylı başlıklar ayrı bir içerik parçası ile hazırlanmış olup, düzenlenmesi aşamasında
            temel bilgiler <span className="font-semibold">giriş</span>, <span className="font-semibold">ipucu</span> ve
            <span className="font-semibold"> SSS</span> bölümleriyle sunulmaktadır.
          </p>
        </div>
      )}

      {/* Giriş paragrafı */}
      {blog.introText && (
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {blog.introText}
        </p>
      )}

      {/* İpucu kutusu */}
      {blog.tipText && (
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
          <p className="text-gray-800 font-semibold">
            💡 <strong>İpucu:</strong> {blog.tipText}
          </p>
        </div>
      )}

      {/* Ana bölümler */}
      {sections.map((section, i) => (
        <div key={i}>
          <h2 id={`bolum-${i + 1}`} className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            {i + 1}. {section.title}
          </h2>

          {section.paragraphs && section.paragraphs.map((p, j) => (
            <p key={j} className="text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}

          {section.items && (
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              {section.items.map((item, j) => (
                <li key={j}>
                  {item.bold ? <><strong>{item.bold}:</strong> {item.text}</> : item}
                </li>
              ))}
            </ul>
          )}

          {section.tipBox && (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
              <p className="text-gray-800 text-sm"><strong>💡 {section.tipBox}</strong></p>
            </div>
          )}

          {section.infoBox && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
              <p className="text-gray-800 text-sm">{section.infoBox}</p>
            </div>
          )}
        </div>
      ))}

      {/* SSS Bölümü */}
      {faqItems.length > 0 && (
        <>
          <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            {sections.length + 1}. Sık Sorulan Sorular
          </h2>
          <div className="space-y-4 mb-12">
            {faqItems.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">❓ {faq.q}</h4>
                <p className="text-gray-700 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎉 Profesyonel Organizasyon İçin Bizi Arayın!</h3>
        <p className="mb-6 leading-relaxed">
          Best Event ekibi olarak İstanbul&apos;un her noktasında profesyonel organizasyon hizmeti sunuyoruz.
          Hayalinizdeki etkinliği birlikte planlayalım!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+905307309009" className="bg-white text-red-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center">
            📞 Hemen Ara: 05307309009
          </a>
          <a href="https://wa.me/905307309009?text=Merhaba, blog yazınızı okudum. Bilgi almak istiyorum." className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center">
            💬 WhatsApp İletişim
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      blog={blog}
      slug={slug}
      indexable={!isSoft404}
      soft404={isSoft404}
      faqData={faqItems ? faqItems.map(f => ({ question: f.q, answer: f.a })) : undefined}
      relatedServicePath={blog.pillarService}
    >
      {content}
    </BlogDetail>
  )
}

export default DynamicBlogPost
