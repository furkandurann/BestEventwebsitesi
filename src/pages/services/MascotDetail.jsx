import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getMascotBySlug } from '../../data/mascotsData'
import Seo from '../../components/Seo'
import NarrativeSection from '../../components/NarrativeSection'

const MascotDetail = () => {
  const { slug } = useParams()
  const mascot = getMascotBySlug(slug)

  // 404 if mascot not found
  if (!mascot) {
    return <Navigate to="/hizmetler/maskot-organizasyon" replace />
  }

  return (
    <>
      <Seo
        title={`${mascot.name} Maskot Kiralama İstanbul | BestEvent`}
        description={`İstanbul'da ${mascot.name} koca kafalı maskot kiralama. Profesyonel performans sanatçısı, hijyenik kostüm. Doğum günü ve etkinlikler.`}
        keywords={[`${mascot.name.toLowerCase()} maskot kiralama istanbul`, 'koca kafalı maskot kiralama', 'maskot organizasyonu istanbul', 'doğum günü maskot', `${mascot.name.toLowerCase()} organizasyon`]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${mascot.name} Maskot Kiralama İstanbul`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "BestEvent",
            "telephone": "+905307309009",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressCountry": "TR"
            }
          },
          "serviceType": "Maskot Organizasyonu",
          "areaServed": {
            "@type": "City",
            "name": "İstanbul"
          }
        }}
      />

      {/* Hero Section - Full Screen */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${mascot.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}
          >
            {mascot.name}
          </motion.h1>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Narrative Sections + Images (Dynamic) */}
      {mascot.images && mascot.images.map((image, index) => {
        const sections = [
          {
            eyebrow: "PROFESYONEL ORGANİZASYON",
            title: "İstanbul'un En İyi Maskot Organizasyonu",
            body: `Best Event olarak İstanbul'da 10+ yıldır profesyonel maskot organizasyonu sunuyoruz. ${mascot.name} maskot organizasyonumuz, koca kafalı kaliteli kostümler, deneyimli performans sanatçıları ve unutulmaz performanslarla çocukların doğum günlerini masala dönüştürür. Kadıköy, Üsküdar, Ataşehir, Beylikdüzü ve İstanbul'un tüm ilçelerinde faaliyet gösteriyoruz.`
          },
          {
            eyebrow: "DENEYİMLİ EKİP",
            title: "Çocuklarla İletişimde Uzman",
            body: `Maskotlarımız, çocuklarla etkileşimde deneyimli profesyonel performans sanatçıları tarafından canlandırılır. ${mascot.name} kostümümüz hijyenik, güvenli ve her etkinlik öncesi dezenfekte edilir. Doğum günü, açılış organizasyonu, kurumsal etkinlik - her türlü organizasyonda profesyonel standart garantisi veriyoruz.`
          },
          {
            eyebrow: "İSTANBUL GENELİ",
            title: "Tüm İstanbul'da Kapınıza Geliyoruz",
            body: `${mascot.name} maskot organizasyonumuz İstanbul'un her bölgesinde mevcuttur. Kadıköy, Kartal, Maltepe, Üsküdar, Ataşehir, Şişli, Maslak, Beylikdüzü, Başakşehir, Sarıyer ve daha fazlası. Yaz sezonunda Bodrum, Yalıkavak ve Antalya'da da çalışıyoruz.`
          },
          {
            eyebrow: "HİJYEN VE GÜVENLİK",
            title: "Yüksek Standartlar",
            body: `${mascot.name} maskot kostümlerimiz her etkinlik öncesi profesyonel standartlarda temizlenir ve dezenfekte edilir. Çocukların sağlığını ön planda tutarak, tüm malzemelerimiz sertifikalı ve güvenlidir. Etkinlik ekibimiz CPR ve ilk yardım eğitimi almıştır.`
          },
          {
            eyebrow: "PROFESYONEL ORGANİZASYON",
            title: "Kalite ve Profesyonellik",
            body: `${mascot.name} maskot organizasyonumuzda profesyonel standartlar ve kusursuz kalite garantisi sunuyoruz. Erken rezervasyonlarda özel indirimler mevcuttur. Detaylı bilgi için bizimle iletişime geçin.`
          },
          {
            eyebrow: "ÇOCUK DOSTU",
            title: "Mutlu Çocuklar, Mutlu Aileler",
            body: `${mascot.name} maskotumuz çocuklarla dostane ve sevecen bir şekilde etkileşim kurar. Her yaş grubuna uygun aktiviteler ve oyunlar düzenlenir. Çocukların hayallerini gerçekleştirmek bizim önceliğimizdir.`
          },
          {
            eyebrow: "MÜŞTERİ MEMNUNİYETİ",
            title: "5000+ Mutlu Müşteri",
            body: `${mascot.name} maskot organizasyonumuzdan yararlanan binlerce ailenin memnuniyeti bizim en büyük motivasyonumuzdur. %98 müşteri memnuniyeti oranıyla İstanbul'un en çok tercih edilen etkinlik firmasıyız.`
          }
        ];

        const section = sections[index] || sections[sections.length - 1];

        return (
          <div key={index}>
            <NarrativeSection
              eyebrow={section.eyebrow}
              title={section.title}
              body={section.body}
            />
            <section className="w-full bg-white py-4">
              <div className="max-w-7xl mx-auto px-4">
                <img 
                  src={image}
                  alt={`${mascot.name} maskot organizasyon İstanbul - ${section.title}`}
                  className="w-full h-auto rounded-lg"
                  style={{
                    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)'
                  }}
                />
              </div>
            </section>
          </div>
        );
      })}

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Sıkça Sorulan Sorular
          </h2>
          
          <div className="space-y-6">
            {(() => {
              const faqs = [
                {
                  question: `${mascot.name} maskot organizasyonu kaç saat sürer?`,
                  answer: `${mascot.name} maskot organizasyonu standart olarak 60-90 dakika sürmektedir. İhtiyacınıza göre süre uzatılabilir.`
                },
                {
                  question: `İstanbul'un hangi bölgelerinde ${mascot.name} maskot organizasyonu veriyorsunuz?`,
                  answer: `Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Şişli, Beylikdüzü ve İstanbul'un tüm ilçelerinde ${mascot.name} maskot organizasyonu veriyoruz.`
                },
                {
                  question: `${mascot.name} maskot kostümü kaliteli mi?`,
                  answer: `Evet, tüm ${mascot.name} maskot kostümlerimiz profesyonel standartlarda, hijyenik ve düzenli olarak yenilenir.`
                },
                {
                  question: 'Maskot içindeki kişi profesyonel mi?',
                  answer: `Evet! ${mascot.name} maskotumuz deneyimli performans sanatçıları tarafından canlandırılır. Dans, hareket, çocuklarla etkileşim konularında eğitimlidirler.`
                },
                {
                  question: 'Ulaşım size mi ait?',
                  answer: `Evet, ${mascot.name} maskot organizasyonunda ulaşım bize aittir. Ekibimiz tüm ekipmanlarla birlikte adresinize gelir.`
                },
                {
                  question: 'İç ve dış mekanda kullanılabilir mi?',
                  answer: 'Evet, hem kapalı hem açık alanlarda hizmet veriyoruz. Ev, bahçe, düğün salonu, AVM gibi her mekanda.'
                },
                {
                  question: 'Erken rezervasyon indirimi var mı?',
                  answer: 'Evet, erken rezervasyonlarda özel indirimler mevcuttur. Detaylı bilgi için bizimle iletişime geçin.'
                },
                {
                  question: 'Fiyatlar nedir?',
                  answer: `${mascot.name} maskot organizasyon fiyatları süre ve lokasyona göre değişir. Detaylı fiyat bilgisi için: 0530 730 90 09`
                }
              ];
              return faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-xl text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-white leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
              ));
            })()}
          </div>
        </div>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `${mascot.name} maskot organizasyonu kaç saat sürer?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `${mascot.name} maskot organizasyonu standart olarak 60-90 dakika sürmektedir. İhtiyacınıza göre süre uzatılabilir.`
                }
              },
              {
                "@type": "Question",
                "name": `İstanbul'un hangi bölgelerinde ${mascot.name} maskot organizasyonu veriyorsunuz?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Kadıköy, Üsküdar, Ataşehir, Maltepe, Kartal, Şişli, Beylikdüzü ve İstanbul'un tüm ilçelerinde ${mascot.name} maskot organizasyonu veriyoruz.`
                }
              },
              {
                "@type": "Question",
                "name": `${mascot.name} maskot kostümü kaliteli mi?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Evet, tüm ${mascot.name} maskot kostümlerimiz profesyonel standartlarda, hijyenik ve düzenli olarak yenilenir.`
                }
              },
              {
                "@type": "Question",
                "name": "Maskot içindeki kişi profesyonel mi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Evet! ${mascot.name} maskotumuz deneyimli performans sanatçıları tarafından canlandırılır. Dans, hareket, çocuklarla etkileşim konularında eğitimlidirler.`
                }
              },
              {
                "@type": "Question",
                "name": "Ulaşım size mi ait?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Evet, ${mascot.name} maskot organizasyonunda ulaşım bize aittir. Ekibimiz tüm ekipmanlarla birlikte adresinize gelir.`
                }
              },
              {
                "@type": "Question",
                "name": "İç ve dış mekanda kullanılabilir mi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet, hem kapalı hem açık alanlarda hizmet veriyoruz. Ev, bahçe, düğün salonu, AVM gibi her mekanda."
                }
              },
              {
                "@type": "Question",
                "name": "Erken rezervasyon indirimi var mı?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet, erken rezervasyonlarda özel indirimler mevcuttur. Detaylı bilgi için bizimle iletişime geçin."
                }
              },
              {
                "@type": "Question",
                "name": "Fiyatlar nedir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `${mascot.name} maskot organizasyon fiyatları süre ve lokasyona göre değişir. Detaylı fiyat bilgisi için: 0530 730 90 09`
                }
              }
            ]
          })}
        </script>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>Hemen {mascot.name} Rezervasyonu Yapın!</h2>
          <p className="text-xl mb-10 text-white/95 text-center max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
            {mascot.name} ile çocuğunuzun hayalindeki doğum gününü gerçekleştirin
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/905307309009?text=Merhaba! ${mascot.name} maskot organizasyon hakkında bilgi almak istiyorum`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+905307309009"
              className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all"
            >
              📞 0530 730 90 09
            </a>
          </div>
        </div>
      </section>

    </>
  )
}

export default MascotDetail
