import { useState } from 'react'
import { motion } from 'framer-motion'

const ContentAccordion = ({ sections = [], title = 'Detayli Bilgi', initialOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState(sections.length > 0 ? initialOpenIndex : null)

  if (!sections || sections.length === 0) return null

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          {title}
        </h2>

        <div className="space-y-3">
          {sections.map((section, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`content-accordion-panel-${index}`}
                  id={`content-accordion-trigger-${index}`}
                >
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-purple-400 transition-colors pr-4">
                    {section.title}
                  </h3>
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-purple-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <motion.div
                  id={`content-accordion-panel-${index}`}
                  role="region"
                  aria-labelledby={`content-accordion-trigger-${index}`}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="text-white text-sm md:text-base leading-relaxed space-y-4 border-t border-white/5 pt-4">
                      {section.content.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {section.tips && section.tips.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {section.tips.map((tip, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2 text-white text-sm">
                            <span className="text-purple-400 mt-0.5">&#10003;</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContentAccordion
