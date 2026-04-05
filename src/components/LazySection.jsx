import { useEffect, useRef, useState } from 'react'

const LazySection = ({
  children,
  className = '',
  minHeight = 160,
  rootMargin = '320px 0px',
}) => {
  const ref = useRef(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (shouldRender) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [rootMargin, shouldRender])

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : <div aria-hidden="true" style={{ minHeight }} />}
    </div>
  )
}

export default LazySection
