import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { getCharacterBySlug } from '../../data/costumedCharactersData'
import { getMascotBySlug } from '../../data/mascotsData'
import NarrativeSection from '../../components/NarrativeSection'
import FullBleedHero from '../../components/FullBleedHero'

const CharacterDetail = () => {
  const { slug } = useParams()
  
  // Try character first, then mascot
  let character = getCharacterBySlug(slug)
  let isMascot = false
  
  if (!character) {
    character = getMascotBySlug(slug)
    isMascot = true
  }

  // 404 if neither character nor mascot found
  if (!character) {
    return <Navigate to="/hizmetler" replace />
  }

  return (
    <>
      <Helmet>
        <title>{character.name} Organizasyonu İstanbul | Doğum Günü Animatörü | Best Event</title>
        <meta 
          name="description" 
          content={`İstanbul'da ${character.name} organizasyonu. ${character.description} ☎ 0534 930 67 99`}
        />
      </Helmet>

      {/* Hero Section - Full Screen */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {character.id === 'palyaco' ? (
          /* Palyaço Hero Slider */
          <div className="absolute inset-0">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              speed={1100}
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              loop
              className="h-full w-full bg-black"
            >
              {[
                '/content/images/palyaco/palyacoanaherogrupoyunlari.JPG',
                '/content/images/palyaco/palyaconattiveenbas.jpeg',
                '/content/images/palyaco/palyaconattive3yuzboyamasi.JPG',
                '/content/images/palyaco/cocuklarinyuzundekiheyecan.JPG',
                '/content/images/palyaco/palyacogrupoyunlari.jpg',
                '/content/images/palyaco/palyaconattive1.JPG'
              ].map((img, index) => (
                <SwiperSlide key={index} className="relative h-full w-full bg-black">
                  <div 
                    className="absolute inset-0 bg-cover bg-center hero-image-mobile-wide"
                    style={{ backgroundImage: `url('${img}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div 
            className={`absolute inset-0 bg-cover hero-image-mobile-wide ${character.id === 'minnie-mouse' ? 'minnie-mouse-hero-bg' : 'bg-center'}`}
            style={{ 
              backgroundImage: `url('${character.heroImage}')`,
              ...(character.id === 'minnie-mouse' && { backgroundPosition: 'center 25%' })
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
          </div>
        )}
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}
          >
            {character.name}
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
      {character.images && character.images.map((image, index) => {
        // Palyaço için özel içerikler
        const palyacoSections = [
          {
            eyebrow: "PROFESYONEL ORGANİZASYON",
            title: "İstanbul'un En İyi Palyaço Organizasyonu",
            body: "Best Event olarak İstanbul'da 10+ yıldır profesyonel palyaço organizasyonu sunuyoruz. Deneyimli animatörlerimiz çocukları güldürüyor, eğlendiriyor ve unutulmaz anlar yaratıyor. Kadıköy, Üsküdar, Ataşehir, Beylikdüzü ve İstanbul'un tüm ilçelerinde faaliyet gösteriyoruz."
          },
          {
            eyebrow: "YÜZ BOYAMA",
            title: "Profesyonel Yüz Boyama Aktivitesi",
            body: "Palyaçomuz profesyonel yüz boyama sanatçısıdır. Kelebek, kaplan, süper kahraman, prenses ve daha birçok tasarımla çocukların yüzlerini renklendiriyoruz. En kaliteli marka olan Playdoh'un cilt sağlığını önemseyen modellerini kullanıyoruz."
          },
          {
            eyebrow: "GRUP OYUNLARI",
            title: "Eğlenceli Grup Oyunları",
            body: "Müzikli sandalye, balon patlatma, hazine avı, dans yarışması ve daha birçok eğlenceli grup oyunu ile çocukları bir arada tutuyoruz. Her yaş grubuna uygun oyunlarla partinizi hareketlendiriyoruz."
          },
          {
            eyebrow: "AKTİVİTELER",
            title: "Eğlenceli Aktiviteler",
            body: "Balon şekillendirme, sihir gösterileri, komik gösteriler ve interaktif oyunlarla çocukları eğlendiriyoruz. Her aktivite profesyonel animatörlerimiz tarafından güvenli bir şekilde gerçekleştirilir."
          },
          {
            eyebrow: "ÇOCUKLARIN MUTLULUĞU",
            title: "Gözlerindeki Işıltı",
            body: "Çocukların yüzündeki heyecan ve mutluluk bizim en büyük ödülümüzdür. Palyaçomuz her çocukla özel ilgilenir, onları güldürür ve unutulmaz anlar yaşatır. Çocukların hayallerini gerçekleştirmek bizim önceliğimizdir."
          },
          {
            eyebrow: "BALON ŞEKİLLENDİRME",
            title: "Rengarenk Balon Sanatı",
            body: "Palyaçomuz balon şekillendirme ustasıdır. Köpek, kılıç, çiçek, kalp ve daha birçok şekil yaparak çocuklara hediye ediyoruz. Her çocuk partiden elinde bir balon hediyesiyle ayrılır."
          },
          {
            eyebrow: "MÜZİKLİ OYUNLAR",
            title: "Dans ve Müzik Eşliğinde Eğlence",
            body: "Müzikli dans oyunları, şarkılar ve ritim oyunlarıyla partinizi renklendiriyoruz. Çocuklar hem eğleniyor hem de enerji atıyor. Profesyonel ses sistemi ile kaliteli müzik garantisi sunuyoruz."
          },
          {
            eyebrow: "DENEYİMLİ EKİP",
            title: "Çocuklarla İletişimde Uzman",
            body: "Palyaçomuz çocuklarla iletişimde uzman, deneyimli bir animatördür. Her yaş grubuna uygun aktiviteler ve oyunlar düzenler. Güler yüzlü, pozitif ve neşeli performansıyla çocukları büyüler."
          },
          {
            eyebrow: "İSTANBUL GENELİ",
            title: "İstanbul'da Her Bölgeye",
            body: "Palyaço organizasyonumuz İstanbul'un her bölgesinde mevcuttur. Kadıköy, Kartal, Maltepe, Üsküdar, Ataşehir, Şişli, Maslak, Beylikdüzü, Başakşehir, Sarıyer ve daha fazlası."
          },
          {
            eyebrow: "HİJYEN VE GÜVENLİK",
            title: "Yüksek Standartlar",
            body: "Tüm malzemelerimiz her etkinlik öncesi dezenfekte edilir. Yüz boyama malzemelerimiz dermatolojik olarak test edilmiştir. Çocukların sağlığını ön planda tutarak profesyonel standartlar sunuyoruz."
          },
          {
            eyebrow: "PROFESYONEL ORGANİZASYON",
            title: "Kalite ve Mükemmellik",
            body: "Palyaço organizasyonumuzda profesyonel standartlar ve kusursuz kalite garantisi sunuyoruz. Erken rezervasyonlarda özel indirimler mevcuttur."
          },
          {
            eyebrow: "MÜŞTERİ MEMNUNİYETİ",
            title: "5000+ Mutlu Müşteri",
            body: "Palyaço organizasyonumuzdan yararlanan binlerce ailenin memnuniyeti bizim en büyük motivasyonumuzdur. %98 müşteri memnuniyeti oranıyla İstanbul'un en çok tercih edilen palyaço organizasyon firmasıyız."
          },
          {
            eyebrow: "ÖZEL ANLAR",
            title: "Unutulmaz Doğum Günleri",
            body: "Palyaçomuz her doğum gününü özel kılar. Pasta kesimi, şarkılar, hediye dağıtımı ve fotoğraf çekimi dahil tüm özel anlarda yanınızdayız."
          },
          {
            eyebrow: "KOMPLE PAKET",
            title: "Her Şey Dahil",
            body: "Palyaço, yüz boyama, balon şekillendirme, grup oyunları ve müzikli aktiviteler tek pakette. Siz sadece rezervasyon yapın, gerisini biz halledelim."
          },
          {
            eyebrow: "REZERVASYON",
            title: "Hemen Rezervasyon Yapın",
            body: "Çocuğunuzun doğum gününü unutulmaz kılmak için hemen rezervasyon yapın. Erken rezervasyonlarda özel indirimler mevcuttur. 0534 930 67 99"
          }
        ];

        const sections = character.id === 'palyaco' ? palyacoSections : [
          {
            eyebrow: "PROFESYONEL ORGANİZASYON",
            title: "İstanbul'un En İyi Kostümlü Karakter Organizasyonu",
            body: `Best Event olarak İstanbul'da 10+ yıldır profesyonel kostümlü karakter organizasyonu sunuyoruz. ${character.name} organizasyonumuz, kaliteli kostümler, deneyimli animatörler ve unutulmaz performanslarla çocukların doğum günlerini masala dönüştürür. Kadıköy, Üsküdar, Ataşehir, Beylikdüzü ve İstanbul'un tüm ilçelerinde faaliyet gösteriyoruz.`
          },
          {
            eyebrow: "DENEYİMLİ EKİP",
            title: "Çocuklarla İletişimde Uzman",
            body: `Karakterlerimiz, çocuklarla etkileşimde deneyimli profesyonel animatörler tarafından canlandırılır. ${character.name} kostümümüz hijyenik, güvenli ve her etkinlik öncesi dezenfekte edilir. Doğum günü, açılış organizasyonu, kurumsal etkinlik - her türlü organizasyonda profesyonel standart garantisi veriyoruz.`
          },
          {
            eyebrow: "İSTANBUL GENELİ",
            title: "İstanbul'da Her Bölgeye",
            body: `${character.name} organizasyonumuz İstanbul'un her bölgesinde mevcuttur. Kadıköy, Kartal, Maltepe, Üsküdar, Ataşehir, Şişli, Maslak, Beylikdüzü, Başakşehir, Sarıyer ve daha fazlası. Yaz sezonunda Bodrum, Yalıkavak ve Antalya'da da çalışıyoruz.`
          },
          {
            eyebrow: "HİJYEN VE GÜVENLİK",
            title: "Yüksek Standartlar",
            body: `${character.name} kostümlerimiz her etkinlik öncesi profesyonel standartlarda temizlenir ve dezenfekte edilir. Çocukların sağlığını ön planda tutarak, tüm malzemelerimiz sertifikalı ve güvenlidir. Etkinlik ekibimiz CPR ve ilk yardım eğitimi almıştır.`
          },
          {
            eyebrow: "PROFESYONEL ORGANİZASYON",
            title: "Kalite ve Mükemmellik",
            body: `${character.name} organizasyonumuzda profesyonel standartlar ve kusursuz kalite garantisi sunuyoruz. Erken rezervasyonlarda özel indirimler mevcuttur. Detaylı bilgi için bizimle iletişime geçin.`
          },
          {
            eyebrow: "ÇOCUK DOSTU",
            title: "Mutlu Çocuklar, Mutlu Aileler",
            body: `${character.name} karakterimiz çocuklarla dostane ve sevecen bir şekilde iletişim kurar. Her yaş grubuna uygun aktiviteler ve oyunlar düzenlenir. Çocukların hayallerini gerçekleştirmek bizim önceliğimizdir.`
          },
          {
            eyebrow: "MÜŞTERİ MEMNUNİYETİ",
            title: "5000+ Mutlu Müşteri",
            body: `${character.name} organizasyonumuzdan yararlanan binlerce ailenin memnuniyeti bizim en büyük motivasyonumuzdur. %98 müşteri memnuniyeti oranıyla İstanbul'un en çok tercih edilen etkinlik firmasıyız.`
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
            <div className="w-full flex justify-center items-center bg-white py-8">
              <img 
                src={image}
                alt={`${character.name} organizasyon İstanbul - ${section.title}`}
                className="object-contain max-h-[80vh] w-auto"
              />
            </div>
          </div>
        );
      })}


      {/* Apple-Style Reservation CTA - SADECE PALYAÇO İÇİN */}
      {character.id === 'palyaco' && (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, sans-serif', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                Hemen Rezervasyon Yaptır
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', lineHeight: '1.5', fontWeight: '400' }}>
                Çocuğunuzun doğum gününü unutulmaz kılmak için profesyonel ekibimizle hemen iletişime geçin
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* WhatsApp Button */}
                <motion.a
                  href="https://wa.me/905349306799?text=Merhaba! Palyaço kiralama hakkında bilgi almak istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-12 py-5 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3 min-h-[60px]"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </motion.a>

                {/* Phone Icon */}
                <motion.a
                  href="tel:+905349306799"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 hover:bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                  aria-label="Telefon ile Ara"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.a>
              </div>

              <p className="text-base text-gray-400 mt-8" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: '400' }}>
                0534 930 67 99
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section - Apple Estetiğinde */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="relative overflow-hidden bg-[#0b0b0f] rounded-[32px] border border-gray-200/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-16 text-center">
              <p
                className="uppercase tracking-[0.3em] text-orange-400 mb-6 font-medium"
                style={{
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                İstanbul'un her yerindeyiz
              </p>

              <h2
                className="font-bold mb-14"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '700',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  background: 'linear-gradient(to right, #FFFFFF, #FF7F50)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Hemen Rezervasyon Yap
              </h2>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
                <motion.a
                  href={`https://wa.me/905349306799?text=Merhaba! ${character.name} organizasyonu hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full sm:w-auto"
                >
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center gap-3">
                      <svg className="w-7 h-7 flex-shrink-0 text-orange-400 transition-colors group-hover:text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span
                      className="font-semibold text-white"
                      style={{
                        fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                        letterSpacing: '-0.01em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      WhatsApp
                    </span>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+905349306799"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto"
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-orange-400/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-3">
                    <svg className="w-7 h-7 flex-shrink-0 text-orange-400 transition-colors group-hover:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span
                      className="font-semibold text-white"
                      style={{
                        fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                        letterSpacing: '-0.01em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                      }}
                    >
                      0534 930 67 99
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

          <div className="space-y-4">
            {[
              {
                question: "Hizmetinizde ne kadar deneyim var?",
                answer: "İstanbul'da 10+ yıldır profesyonel palyaço organizasyonu sunuyoruz. 5.000+ etkinlik deneyimimiz ile her yaş grubuna uygun aktiviteler planlıyor, çocukları ilk karşılamadan son fotoğrafa kadar mutlu bir deneyime taşıyoruz."
              },
              {
                question: "Ekibiniz zamanında gelir mi?",
                answer: "Her zaman tam zamanında! Ekiplerimiz etkinlik başlangıcından 15 dakika önce alanda olur, hazırlıklarını sessizce tamamlar ve çocukları karşılamaya hazır bekler. Söz verdiğimiz saatlerde, her zaman."
              },
              {
                question: "İki saatlik akış nasıl işliyor?",
                answer: "Hizmetimiz sadece bir gösteri değil; uçtan uca bir deneyimdir:\n\n• Tanışma & Yüz Boyama\n• Yaş Grubuna Uygun Grup Oyunları\n• Kar Spreyi & Konfeti Gösterisi\n• Sosis Balonlar ve Pinyata Finali\n• Veda Fotoğrafı\n\nHer etkinlik atmosferi, çocukların yaş aralığına göre özelleştirilir."
              },
              {
                question: "Hangi yaş grupları için uygun aktiviteler var?",
                answer: "3–5 Yaş • 6–8 Yaş • 9–12 Yaş için özel aktivite planlarımız bulunmaktadır.\n\nYumuşak ve sevimli oyunlardan, enerjik grup aktivitelerine ve interaktif mini şovlara kadar tüm içerikler yaşa göre tasarlanır. Her çocuk grubunun ihtiyaçlarına özel deneyim sunuyoruz."
              },
              {
                question: "Etkinlik planlaması nasıl yapılıyor?",
                answer: "Her yaş grubuna uygun aktiviteleri özenle planlıyoruz. Çocukları ilk karşılamadan son fotoğrafa kadar her anı unutulmaz kılmak için profesyonel bir akış oluşturuyoruz."
              },
              {
                question: "Ulaşım ve ekipmanlar dahil mi?",
                answer: "Evet, tüm ulaşım ve ekipmanlar hizmetimize dahildir. Ekibimiz tüm malzemeleri ile birlikte adresinize gelir ve kurulumu yapar. Siz sadece rezervasyon yapın, gerisini biz halledelim."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line" style={{ fontSize: 'clamp(0.938rem, 2vw, 1.063rem)', lineHeight: '1.7' }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faaliyet Bölgeleri */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
            İstanbul'un Her Bölgesinde Faaliyet Gösteriyoruz
          </h2>
          <p className="text-xl text-white mb-8" style={{ lineHeight: '1.7' }}>
            {character.name} organizasyonumuz İstanbul'un tüm ilçelerinde mevcuttur
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Kadıköy', 'Beşiktaş', 'Şişli', 'Beylikdüzü',
              'Üsküdar', 'Maltepe', 'Kartal', 'Ataşehir',
              'Pendik', 'Sarıyer', 'Beyoğlu', 'Fatih',
              'Başakşehir', 'Küçükçekmece', 'Esenyurt', 've daha fazlası...'
            ].map((district, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="py-3 px-4 bg-white/20 backdrop-blur-sm text-white rounded-lg shadow-sm font-medium hover:bg-white/30 transition-all"
              >
                {district}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EK SEO BÖLÜMÜ - SADECE PALYAÇO İÇİN */}
      {character.id === 'palyaco' && (
        <>
          {/* Palyaço Aktiviteleri Detay */}
          <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  🎪 Palyaço Kiralama Aktiviteleri
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
                  Palyaço kiralama hizmetimizde grup oyunları, yüz boyama, sosis balon ve birçok eğlenceli aktivite bulunmaktadır
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Grup Oyunları */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <img 
                    src="/content/images/palyaco/palyacogrupoyunlari.jpg" 
                    alt="Palyaço Kiralama Grup Oyunları İstanbul"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Grup Oyunları
                    </h3>
                    <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                      <strong>Palyaço kiralama</strong> hizmetimizde çocuklar <strong>grup oyunları</strong> ile birlikte eğlenir. 
                      Müzikli sandalye, balon patlatma, yarışmalar ve daha fazlası!
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✅ Müzikli sandalye oyunu</li>
                      <li>✅ Balon patlatma yarışması</li>
                      <li>✅ Dans ve hareket oyunları</li>
                      <li>✅ Takım oyunları ve yarışmalar</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Yüz Boyama */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <img 
                    src="/content/images/palyaco/palyaconattive3yuzboyamasi.JPG" 
                    alt="Palyaço Yüz Boyama İstanbul"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Yüz Boyama
                    </h3>
                    <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                      Profesyonel <strong>yüz boyama</strong> ile çocuklar sevdikleri karakterlere dönüşürler. 
                      Hijyenik ve cilt dostu boyalarla güvenli hizmet.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✅ Kelebek, kaplan, prenses tasarımları</li>
                      <li>✅ Dermatolojik test edilmiş boyalar</li>
                      <li>✅ Her çocuğa özel tasarım</li>
                      <li>✅ Profesyonel yüz boyama sanatçısı</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Sosis Balon */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <img 
                    src="/content/images/palyaco/palyaconattive1.JPG" 
                    alt="Palyaço Sosis Balon İstanbul"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Sosis Balon Şekillendirme
                    </h3>
                    <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                      <strong>Sosis balon</strong> şekillendirme ile çocuklara köpek, kılıç, çiçek gibi şekiller yapıyoruz. 
                      Her çocuk partiden balon hediye ile ayrılır!
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✅ Köpek, kedi, tavşan şekilleri</li>
                      <li>✅ Kılıç, taç ve kalp tasarımları</li>
                      <li>✅ Rengarenk balon seçenekleri</li>
                      <li>✅ Her çocuğa hediye balon</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Palyaço Organizasyon */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <img 
                    src="/content/images/palyaco/palyacoonemlifotografguleryız.jpg" 
                    alt="Palyaço Güler Yüz İstanbul - Mutlu Çocuklar"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Palyaço Organizasyon
                    </h3>
                    <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
                      Profesyonel <strong>palyaço organizasyon</strong> ekibimiz ile doğum günlerinizi unutulmaz kılıyoruz. 
                      10+ yıl deneyim ve 5000+ mutlu müşteri!
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✅ Deneyimli palyaço ekibi</li>
                      <li>✅ Komple organizasyon hizmeti</li>
                      <li>✅ İstanbul'un her bölgesinde</li>
                      <li>✅ %98 müşteri memnuniyeti</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Palyaço Kiralama Süreci */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25', background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  ⚡ Palyaço Kiralama Süreci
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
                  4 basit adımda palyaço kiralama ile unutulmaz bir doğum günü organizasyonu yapabilirsiniz
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ background: 'linear-gradient(to right, #9333ea, #ec4899)' }}>
                      1
                    </div>
                    <h3 className="text-2xl font-bold ml-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Rezervasyon</h3>
                  </div>
                  <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
                    <strong>Palyaço kiralama</strong> için bizimle iletişime geçin. Tarih, saat ve mekan bilgilerinizi paylaşın.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ background: 'linear-gradient(to right, #3b82f6, #9333ea)' }}>
                      2
                    </div>
                    <h3 className="text-2xl font-bold ml-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Program Hazırlama</h3>
                  </div>
                  <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
                    Çocuğun yaşına göre <strong>grup oyunları</strong>, <strong>yüz boyama</strong> ve aktiviteler planlıyoruz.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ background: 'linear-gradient(to right, #ec4899, #f97316)' }}>
                      3
                    </div>
                    <h3 className="text-2xl font-bold ml-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Etkinlik Günü</h3>
                  </div>
                  <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
                    <strong>Palyaço organizasyon</strong> ekibimiz gelir ve çocukları profesyonel aktivitelerle eğlendirir.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ background: 'linear-gradient(to right, #10b981, #14b8a6)' }}>
                      4
                    </div>
                    <h3 className="text-2xl font-bold ml-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Mutlu Son</h3>
                  </div>
                  <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
                    Mutlu çocuklar, memnun aileler. 5000+ başarılı <strong>palyaço kiralama</strong> deneyimi!
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Palyaço Kiralama Fiyatları */}
          <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
                  💰 Palyaço Kiralama Paketleri
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
                  İhtiyacınıza uygun palyaço organizasyon paketlerimizi keşfedin
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-2xl"
                >
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Temel Paket</h3>
                  <div className="text-4xl font-bold mb-6" style={{ background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    900₺'den
                  </div>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li>✅ 45-60 dakika palyaço gösterisi</li>
                    <li>✅ Grup oyunları</li>
                    <li>✅ Temel aktiviteler</li>
                    <li>✅ Pasta töreni animasyonu</li>
                  </ul>
                  <a
                    href="tel:+905349306799"
                    className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Hemen Ara
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl transform scale-105"
                >
                  <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full inline-block mb-4 font-bold">
                    EN POPÜLER
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Standart Paket</h3>
                  <div className="text-4xl font-bold text-white mb-6">
                    ₺₺₺
                  </div>
                  <ul className="space-y-3 text-white mb-8">
                    <li>✅ 60 dakika palyaço gösterisi</li>
                    <li>✅ Yüz boyama</li>
                    <li>✅ Sosis balon şekillendirme</li>
                    <li>✅ Grup oyunları</li>
                    <li>✅ Ses sistemi</li>
                  </ul>
                  <a
                    href={`https://wa.me/905349306799?text=Merhaba! Standart Palyaço Kiralama paketi hakkında bilgi almak istiyorum`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    WhatsApp ile Sor
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-2xl"
                >
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Premium Paket</h3>
                  <div className="text-4xl font-bold mb-6" style={{ background: 'linear-gradient(to right, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    ₺₺₺₺
                  </div>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li>✅ 90 dakika palyaço gösterisi</li>
                    <li>✅ 2 profesyonel palyaço</li>
                    <li>✅ Yüz boyama + Sosis balon</li>
                    <li>✅ Kapsamlı grup oyunları</li>
                    <li>✅ Profesyonel ses sistemi</li>
                    <li>✅ Sürpriz hediyeler</li>
                  </ul>
                  <a
                    href="tel:+905349306799"
                    className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Hemen Ara
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <p className="text-white/90 text-lg" style={{ lineHeight: '1.7' }}>
                  * Fiyatlar lokasyona ve etkinlik süresine göre değişiklik gösterebilir. Detaylı bilgi için: <strong>0534 930 67 99</strong>
                </p>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* Final CTA - Shared with palyaço sayfası */}
      {/* Final CTA removed as CTA moved above FAQ */}

    </>
  )
}

export default CharacterDetail
