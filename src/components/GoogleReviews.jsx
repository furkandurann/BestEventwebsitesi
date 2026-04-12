import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const GOOGLE_MAPS_URL = 'https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14cac7846fc72791:0xcebaffefd8589476'

// İsme göre benzersiz gradient renk üret
const avatarGradients = [
  'from-blue-500 to-cyan-400',
  'from-purple-500 to-pink-500',
  'from-emerald-500 to-teal-400',
  'from-orange-500 to-amber-400',
  'from-rose-500 to-pink-400',
  'from-indigo-500 to-blue-400',
  'from-violet-500 to-purple-400',
  'from-sky-500 to-blue-300',
  'from-fuchsia-500 to-pink-400',
  'from-teal-500 to-emerald-400',
  'from-red-500 to-orange-400',
  'from-lime-500 to-green-400',
]

const getAvatarGradient = (name) => {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return avatarGradients[Math.abs(hash) % avatarGradients.length]
}

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

const ReviewCard = ({ review }) => (
  <a
    href={GOOGLE_MAPS_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white/[0.07] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-6 h-full flex flex-col hover:bg-white/[0.12] transition-all duration-300 cursor-pointer group"
  >
    {/* Header */}
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getAvatarGradient(review.name)} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
        {review.name.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-sm truncate">{review.name}</p>
        <div className="flex items-center gap-2">
          <StarRating />
          <GoogleIcon />
        </div>
      </div>
    </div>

    {/* Comment */}
    <p className="text-gray-300 text-sm leading-relaxed flex-1">
      &ldquo;{review.comment}&rdquo;
    </p>

    {/* Date */}
    <p className="text-gray-500 text-xs mt-3">{review.date}</p>
  </a>
)

const GoogleReviews = ({ reviews, title = 'Müşterilerimiz Ne Diyor?', serviceName = '', serviceUrl = '' }) => {
  if (!reviews || reviews.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] rounded-full px-5 py-2.5 mb-6 hover:bg-white/[0.15] transition-all duration-300"
          >
            <GoogleIcon />
            <span className="text-white font-semibold text-sm">5.0</span>
            <StarRating />
            <span className="text-gray-400 text-xs ml-1">Google Yorumları</span>
            <svg className="w-3.5 h-3.5 text-gray-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
            {title}
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
          }}
          className="google-reviews-swiper !pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="!h-auto">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Google'da Tüm Yorumları Gör */}
        <div className="text-center mt-6">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300"
          >
            <GoogleIcon />
            <span>Google'da Tüm Yorumları Gör</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .google-reviews-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
        }
        .google-reviews-swiper .swiper-pagination-bullet-active {
          background: #a855f7;
        }
      `}</style>
    </section>
  )
}

export default GoogleReviews
