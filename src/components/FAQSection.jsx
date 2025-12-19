import { motion } from 'framer-motion'
import { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Kaç gün önce rezervasyon yapmalıyım?',
      answer: 'Hafta sonları yoğun talep olduğu için en az 1-2 hafta önce rezervasyon öneriyoruz. Ancak müsaitlik durumuna göre aynı hafta için de çözüm sunabiliriz. Yoğun sezonlarda (yaz ayları, yılbaşı) daha erken rezervasyon yapmanızı tavsiye ediyoruz.'
    },
    {
      question: 'Mekâna göre içerik değişir mi?',
      answer: 'Evet, kesinlikle. Her mekanın kendine özgü özellikleri vardır. İç mekan, açık alan, bahçe veya salon gibi farklı mekanlara göre etkinlik akışını ve içeriğini özelleştiriyoruz. Mekan keşfi yaparak size en uygun programı planlıyoruz.'
    },
    {
      question: 'Paket dışında ekleme yapabilir miyim?',
      answer: 'Tabii ki! Tüm paketlerimiz esnek yapıdadır. İstediğiniz hizmeti ekleyebilir veya çıkarabilirsiniz. Örneğin palyaçoya ek olarak sihirbaz, bubble show, ekstra kostümlü karakter veya özel dekorasyon ekleyebilirsiniz. Size özel paket oluşturuyoruz.'
    },
    {
      question: 'Yaş grupları için akış nasıl planlanıyor?',
      answer: '3-5 yaş grubu için daha interaktif ve renkli aktiviteler, 6-10 yaş için yarışmalar ve takım oyunları, 10+ yaş için daha dinamik ve eğlenceli içerikler planlıyoruz. Her yaş grubuna özel profesyonel animatörlerimiz var.'
    },
    {
      question: 'İptal veya erteleme durumunda ne oluyor?',
      answer: 'Etkinlik tarihinden 7 gün öncesine kadar ücretsiz iptal veya tarih değişikliği yapabilirsiniz. 7 günden daha kısa sürede yapılan iptallerde kapora iade edilmez ancak tarih değişikliği yapılabilir. Detaylı bilgi için sözleşmemizi inceleyebilirsiniz.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.05),_transparent_50%)] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-purple-600 mb-4 font-medium">
            Sıkça Sorulan Sorular
          </p>
          <h2 
            className="font-display font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6" 
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}
          >
            Merak Ettikleriniz
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto" 
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.6' }}
          >
            En çok sorulan sorulara hızlı cevaplar
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Gradient Glow on Active */}
              {openIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
              )}
              
              {/* Accordion Item */}
              <div className={`relative bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border ${
                openIndex === index ? 'border-purple-200' : 'border-gray-100'
              }`}>
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 group/button"
                >
                  <div className="flex-1">
                    <h3 
                      className={`font-display font-bold transition-colors ${
                        openIndex === index 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' 
                          : 'text-gray-900 group-hover/button:text-purple-600'
                      }`}
                      style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', lineHeight: '1.4' }}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 rotate-180' 
                      : 'bg-gray-100 group-hover/button:bg-purple-50'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-colors ${
                        openIndex === index ? 'text-white' : 'text-gray-600'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="pt-4 border-t border-gray-100">
                      <p 
                        className="text-gray-600 leading-relaxed" 
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
            Başka sorularınız mı var?
          </p>
          <a
            href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp ile Sorun
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
