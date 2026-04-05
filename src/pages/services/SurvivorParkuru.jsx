import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { createServiceSchema, createFAQSchema } from '../../utils/schemaHelpers'
import Seo from '../../components/Seo'

const SurvivorParkuru = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const features = [
    {
      icon: '🏝️',
      title: 'Macera Dolu Parkur',
      description: '15+ farklı engel ile zorlu ve eğlenceli survivor deneyimi'
    },
    {
      icon: '🏆',
      title: 'Takım Oyunları',
      description: 'Ekip ruhu geliştiren yarışmalar ve görevler'
    },
    {
      icon: '🎯',
      title: 'Profesyonel Ekipman',
      description: 'Güvenli ve kaliteli survivor parkur ekipmanları'
    },
    {
      icon: '👨‍🏫',
      title: 'Deneyimli Rehber',
      description: 'Çocuklarla iletişimde uzman survivor eğitmeni'
    }
  ]

  const faqs = [
    {
      question: 'Survivor parkuru kaç yaş için uygun?',
      answer: '6-16 yaş arası çocuklar için uygundur. Engeller yaş grubuna göre düzenlenebilir ve zorluk seviyesi ayarlanabilir.'
    },
    {
      question: 'Parkur kaç kişi için düzenlenebilir?',
      answer: 'Minimum 10, maksimum 50 çocuk için organize edilebilir. Grup büyüklüğüne göre parkur istasyonu sayısı arttırılır.'
    },
    {
      question: 'Hangi engeller var?',
      answer: 'Denge köprüsü, engel duvarı, ip atlama, slalom, halat tırmanma, hedef vurma, labirent ve daha fazlası! 15+ farklı engel.'
    },
    {
      question: 'Etkinlik kaç saat sürer?',
      answer: 'Standart süre 3-4 saattir. Açılış, parkur yarışması ve ödül töreni dahildir.'
    },
    {
      question: 'Açık havada mı yapılır?',
      answer: 'Evet! Survivor parkuru açık alanda (bahçe, park, okul bahçesi) kurulur. Yağmur durumunda iptal/erteleme söz konusudur.'
    },
    {
      question: 'Güvenlik önlemleri neler?',
      answer: 'Tüm ekipmanlar güvenlik sertifikalıdır. Zemin koruyucular, yumuşak bariyerler ve sürekli gözetim vardır.'
    },
    {
      question: 'Rezervasyon için ne kadar önceden haber vermem gerek?',
      answer: 'En az 2 hafta önceden rezervasyon yapmanızı öneriyoruz. Ekipman hazırlığı ve kurulum için süre gerekir.'
    },
    {
      question: 'Ödül ve madalya dahil mi?',
      answer: 'Evet! Tüm katılımcılara katılım belgesi, kazananlara özel madalyalar ve kupa hediye ediyoruz.'
    }
  ]

  const serviceSchema = createServiceSchema(
    'Çocuklar İçin Survivor Parkuru | İstanbul Survivor Organizasyonu',
    'İstanbul\'da çocuklar için profesyonel survivor parkuru! 15+ engel, takım yarışmaları, ödüller. Doğum günü ve okul etkinlikleri için survivor kiralama.',
    '/organizasyonlar/survivor-parkuru',
    'Survivor Parkuru Organizasyonu'
  )
  const faqSchema = createFAQSchema(faqs)

  return (
    <>
      <Seo
        title="Çocuklar İçin Survivor Parkuru | İstanbul En İyi Survivor Organizasyonu | Best Event"
        description="İstanbul'da çocuklar için profesyonel survivor parkuru! 15+ engel, takım yarışmaları, ödüller. Doğum günü ve okul etkinlikleri için survivor kiralama."
        keywords="survivor parkuru, çocuk survivor, survivor kiralama istanbul, survivor etkinliği, macera parkuru"
        canonicalPath="/organizasyonlar/survivor-parkuru"
        type="service"
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-r from-green-600 to-blue-600 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm md:text-base font-medium mb-6"
            >
              🏝️ İstanbul'un En Heyecanlı Survivor Parkuru
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Çocuklar İçin<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-200">
                Survivor Parkuru
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              15+ farklı engel, takım yarışmaları ve ödüllerle çocuklarınız gerçek bir survivor deneyimi yaşasın!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:+905307309009"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center"
              >
                <span className="mr-2">📞</span>
                Hemen Ara: 05307309009
              </motion.a>
              
              <motion.a
                href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center"
              >
                <span className="mr-2">💬</span>
                WhatsApp
              </motion.a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center">
                <span className="text-3xl mr-2">🏆</span>
                <div>
                  <div className="font-bold text-xl">15+</div>
                  <div className="text-sm">Farklı Engel</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-3xl mr-2">🎉</span>
                <div>
                  <div className="font-bold text-xl">300+</div>
                  <div className="text-sm">Mutlu Çocuk</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-3xl mr-2">⭐</span>
                <div>
                  <div className="font-bold text-xl">%100</div>
                  <div className="text-sm">Eğlence</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Neden Best Event Survivor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesyonel ekipman ve deneyimli rehberlerimizle unutulmaz macera
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                İstanbul'da Çocuklar İçin Profesyonel Survivor Parkuru
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Best Event</strong> olarak İstanbul'da çocuklar için <strong>profesyonel survivor parkuru</strong> hizmeti sunuyoruz. Doğum günleri, okul etkinlikleri, yaz kampları ve özel günlerinizde çocuklarınız TV'deki gibi gerçek bir survivor macerası yaşasın!
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Survivor Parkurumuz Neler İçerir?
              </h3>
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>15+ Farklı Engel:</strong> Denge köprüsü, halat tırmanma, slalom, hedef vurma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Takım Yarışmaları:</strong> Gruplar halinde yarışma ve görevler</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Profesyonel Ekipman:</strong> Güvenli ve dayanıklı survivor malzemeleri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Deneyimli Rehber:</strong> Çocuklarla iletişimde uzman eğitmen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Ödüller ve Madalyalar:</strong> Tüm katılımcılara sertifika</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Fotoğraf Çekimi:</strong> Özel anların fotoğrafları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span><strong>Güvenlik Ekipmanları:</strong> Zemin koruyucular ve bariyerler</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Hangi Engeller Var?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: '🌉', title: 'Denge Köprüsü', desc: 'Sallanmadan geçiş' },
                  { icon: '🧗', title: 'Engel Duvarı', desc: 'Tırmanma becerisi' },
                  { icon: '🎯', title: 'Hedef Vurma', desc: 'Nişan alma' },
                  { icon: '🪢', title: 'Halat Tırmanma', desc: 'Güç ve denge' },
                  { icon: '🏃', title: 'Slalom', desc: 'Hız ve çeviklik' },
                  { icon: '🧩', title: 'Labirent', desc: 'Problem çözme' }
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Etkinlik Nasıl İşler?
              </h3>
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                    <div>
                      <strong className="text-gray-900">Kurulum:</strong>
                      <span className="text-gray-700"> Ekibimiz etkinlikten 3-4 saat önce gelir ve parkuru kurar.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                    <div>
                      <strong className="text-gray-900">Açılış:</strong>
                      <span className="text-gray-700"> Rehberimiz kuralları anlatır ve ısınma yaptırır.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                    <div>
                      <strong className="text-gray-900">Takım Oluşturma:</strong>
                      <span className="text-gray-700"> Çocuklar gruplara ayrılır ve takım isimleri belirlenir.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                    <div>
                      <strong className="text-gray-900">Parkur Yarışması:</strong>
                      <span className="text-gray-700"> Her takım sırayla engelleri aşar ve puan toplar!</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
                    <div>
                      <strong className="text-gray-900">Final ve Ödül:</strong>
                      <span className="text-gray-700"> Ödül töreni, madalyalar ve toplu fotoğraf!</span>
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Fiyatlandırma
              </h3>
              
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white mb-8">
                <div className="text-center">
                  <p className="text-lg mb-2">Survivor Parkuru Paketleri</p>
                  <p className="text-4xl font-bold mb-4">₺5.000'den Başlayan Fiyatlarla</p>
                  <p className="text-white/90">Tüm ekipman, kurulum, rehber ve ödüller dahil</p>
                  <div className="mt-6 inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                    <span className="mr-2">🎁</span>
                    <span>Grup indirimlerimiz hakkında bilgi alın!</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Hizmet Verdiğimiz Bölgeler
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>İstanbul'un tüm ilçelerine</strong> profesyonel survivor parkuru hizmeti veriyoruz:
              </p>

              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Anadolu Yakası:</h4>
                    <p className="text-gray-700">Kadıköy, Üsküdar, Maltepe, Ataşehir, Kartal, Pendik, Tuzla, Ümraniye, Beykoz...</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Avrupa Yakası:</h4>
                    <p className="text-gray-700">Beşiktaş, Şişli, Bakırköy, Beylikdüzü, Başakşehir, Sarıyer, Avcılar, Esenyurt...</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  <strong>Diğer İller:</strong> Antalya, Muğla (Bodrum, Fethiye), Kocaeli (İzmit, Gebze)
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Survivor parkuru hakkında merak ettikleriniz
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-6 text-left transition-all duration-300 border border-gray-200"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <span className={`text-2xl text-green-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </div>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 text-gray-700 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hemen Rezervasyon Yapın!
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Çocuklarınız unutulmaz bir survivor macerası yaşasın! Bugün arayın, fiyat teklifi alın.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+905307309009"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center justify-center"
              >
                <span className="mr-2">📞</span>
                05307309009
              </motion.a>
              
              <motion.a
                href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center justify-center"
              >
                <span className="mr-2">💬</span>
                WhatsApp ile Yaz
              </motion.a>
            </div>

            <p className="text-white/80 mt-8">
              <Link to="/hizmet-bolgeleri" className="underline hover:text-white">
                Hizmet verdiğimiz tüm bölgeleri görün →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default SurvivorParkuru
