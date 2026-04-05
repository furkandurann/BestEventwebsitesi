import { useEffect, useRef, useState } from 'react'
import { getServiceDeepContentByKeyAsync } from '../data/serviceDeepContent.async'

let contentAccordionModulePromise

const loadContentAccordionComponent = async () => {
  if (!contentAccordionModulePromise) {
    contentAccordionModulePromise = import('./ContentAccordion')
  }

  const module = await contentAccordionModulePromise
  return module.default
}

const DeferredContentAccordion = ({
  serviceKey,
  initialOpenIndex = 0,
  minHeight = 320,
  rootMargin = '640px 0px',
}) => {
  const ref = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [accordionEntry, setAccordionEntry] = useState(null)
  const [AccordionComponent, setAccordionComponent] = useState(null)

  useEffect(() => {
    if (shouldLoad) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [rootMargin, shouldLoad])

  useEffect(() => {
    if (!shouldLoad) return undefined

    let isMounted = true

    Promise.all([
      getServiceDeepContentByKeyAsync(serviceKey),
      loadContentAccordionComponent(),
    ]).then(([entry, component]) => {
      if (!isMounted) return

      setAccordionEntry(entry)
      setAccordionComponent(() => component)
    })

    return () => {
      isMounted = false
    }
  }, [serviceKey, shouldLoad])

  const shouldRenderAccordion = AccordionComponent && accordionEntry?.sections?.length

  return (
    <div ref={ref}>
      {shouldRenderAccordion ? (
        <AccordionComponent
          title={accordionEntry.title}
          sections={accordionEntry.sections}
          initialOpenIndex={initialOpenIndex}
        />
      ) : (
        <div
          aria-hidden="true"
          className="bg-gradient-to-b from-gray-950 to-black"
          style={{ minHeight }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="mx-auto mb-8 h-8 w-64 animate-pulse rounded bg-white/10" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
                >
                  <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DeferredContentAccordion
