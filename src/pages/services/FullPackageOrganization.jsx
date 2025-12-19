import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import NarrativeSection from '../../components/NarrativeSection'
import 'swiper/css'
import 'swiper/css/effect-fade'

const FullPackageOrganization = () => {
  const faqs = [
    {
      question: 'Full paket organizasyonu nedir?',
      answer:
        'Doğum günü için ihtiyaç duyacağınız her şeyi (dekorasyon, animatör, show, catering, karakterler) tek pakette sunduğumuz anahtar teslim hizmettir. Siz sadece gelin, eğlenin!'
    },
    {
      question: 'Fiyata tam olarak neler dahil?',
      answer:
        'Konsept doğum günü ve süsleme, konsept pasta, profesyonel yüz boyama, palyaço, kostümlü karakter, sahne showu (sihirbazlık veya bubble show), popcorn & pamuk şeker arabası, profesyonel ses sistemi ve mikrofon dahildir.'
    },
    {
      question: 'Minimum kaç kişilik organizasyon yapılabilir?',
      answer: 'Full paket organizasyonlar minimum 30 kişi için hazırlanır. Maksimum 150 kişiye kadar organizasyon yapabiliyoruz.'
    },
    {
      question: 'Ne kadar önceden rezervasyon yapmalıyım?',
      answer:
        'Full paket organizasyonlar için minimum 3-4 hafta önceden rezervasyon öneriyoruz. Özel günlerde (hafta sonları, bayramlar) daha erken rezervasyon gerekebilir.'
    }
  ]

  const heroSlides = [
    '/content/images/fullpaket/hareketlislider1konseptdogumgunubaslikk.webp',
    '/content/images/fullpaket/hareketlislider3kostumlukkarakterler.webp',
    '/content/images/fullpaket/hareketlislider6osterilersihirbazhero.webp',
    '/content/images/fullpaket/hareketlislider6osterilerbubblshow.webp',
    '/content/images/fullpaket/hareketlisliderfotograf4.webp',
    '/content/images/fullpaket/hareketlislider5bubbleshowgosteriler.webp',
    '/content/images/fullpaket/hareketlislider6cikolataselalsi.webp',
    '/content/images/fullpaket/hareketlislider7popcorn.webp'
  ]

  const badgeItems = [
    { icon: '🎨', text: 'Konsept Süsleme' },
    { icon: '🎂', text: 'Özel Pasta' },
    { icon: '✨', text: 'Sahne Showu' },
    { icon: '🤡', text: 'Palyaço & Animasyon' },
    { icon: '🦸', text: 'Kostümlü Karakter' },
    { icon: '🍿', text: 'Popcorn & Pamuk Şeker' },
    { icon: '📸', text: 'Profesyonel Fotoğraf' },
    { icon: '🎤', text: 'Ses Sistemi' }
  ]

  const regions = [
    'Kadıköy', 'Beşiktaş', 'Şişli', 'Beylikdüzü', 'Üsküdar', 'Maltepe', 'Kartal', 'Ataşehir',
    'Pendik', 'Sarıyer', 'Beyoğlu', 'Fatih', 'Başakşehir', 'Esenyurt', 'Bakırköy', 've daha fazlası...'
  ]

  return (
    <>
      <Helmet>
        <title>Full Paket Doğum Günü Organizasyonu | Anahtar Teslim | Best Event</title>
        <meta
          name="description"
          content="Siz sadece gelin eğlenin! Dekorasyon, animatör, catering, show - her şey dahil anahtar teslim doğum günü organizasyonu. İstanbul genelinde profesyonel hizmet."
        />
        <meta
          name="keywords"
          content="full paket doğum günü, anahtar teslim organizasyon, her şey dahil doğum günü istanbul, profesyonel çocuk etkinliği"
        />
      </Helmet>

      {/* Hero Section - Full Screen */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={1100}
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false
            }}
            loop
            className="h-full w-full bg-black"
          >
            {heroSlides.map((img, index) => (
              <SwiperSlide key={index} className="relative h-full w-full bg-black">
                <div
                  className={`absolute inset-0 bg-cover ${index === 0 ? '' : 'bg-center'}`}
                  style={{
                    backgroundImage: `url('${img}')`,
                    backgroundPosition: index === 0 ? 'center 70%' : undefined
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}
          >
            Doğum Günü Organizasyonu
          </motion.h1>
        </div>

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

      {/* Paket özet banner */}
      <section className="py-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <span className="inline-block w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-500/50" />
              <span className="inline-block w-3 h-3 bg-green-300 rounded-full animate-pulse animation-delay-100 shadow-lg shadow-green-500/50" />
              <span className="inline-block w-3 h-3 bg-blue-300 rounded-full animate-pulse animation-delay-200 shadow-lg shadow-blue-500/50" />
              <span className="mx-2">DOĞUM GÜNÜ ORGANİZASYON PAKETİ</span>
              <span className="inline-block w-3 h-3 bg-blue-300 rounded-full animate-pulse animation-delay-200 shadow-lg shadow-blue-500/50" />
              <span className="inline-block w-3 h-3 bg-green-300 rounded-full animate-pulse animation-delay-100 shadow-lg shadow-green-500/50" />
              <span className="inline-block w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-500/50" />
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {badgeItems.map((item, idx) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30 hover:bg-white/30 transition-all"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-white font-semibold text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center">
              <p className="text-white font-bold mb-2 text-lg">Detaylar Aşağıda 👇</p>
              <div className="flex flex-col gap-1">
                {[0, 0.2, 0.4].map((delay) => (
                  <motion.div
                    key={delay}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay }}
                    className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-white/80"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Konsept süsleme */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/konseptnattive.webp"
          alt="Konsept doğum günü süsleme - İstanbul"
          className="w-full h-auto"
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Konsept Doğum Günü & Süsleme"
        body="Seçeceğiniz tema ile doğum gününüz unutulmaz bir hale gelecek, aradan yıllar geçse bile fotoğraf albümünüzde bu yaş günü unutulmaz yaş günü olarak hatırlanacak; MineCraft, Sonic, Unicorn, Süper Kahramanlar ve çok daha fazlası. Best Event olarak İstanbul'da 10+ yıldır profesyonel konsept doğum günü organizasyonu hizmeti sunuyoruz. Çocuğunuzun hayal ettiği temayı gerçeğe dönüştürüyor, özel süsleme ve profesyonel fotoğraf çekimi ile her anı ölümsüzleştiriyoruz."
      />

      {/* Pasta */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/pastanattivee1.webp"
          alt="Konsept pasta - Le Cordon Bleu kalitesi"
          className="w-full h-auto"
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Konsept Pasta - Le Cordon Bleu Kalitesi"
        body="Temaya özel tasarlanmış, görsel olarak etkileyici ve lezzetli pastalarımız ile doğum gününüzün vazgeçilmez detayı. Patisserie Le Cordon Bleu mezunu ustamızın ellerinde %100 organik malzemeler ve doğal tatlandırıcılar kullanılarak hazırlanan el yapımı pastalarımız, hem göze hem damağa hitap ediyor. Özel tasarım ve temaya uygun dekorasyon ile pastanız doğum gününüzün yıldızı olacak."
      />

      {/* Yüz boyama */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp"
          alt="Profesyonel yüz boyama - İstanbul"
          className="w-full h-auto"
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Profesyonel Yüz Boyaması + Yetişkinler için Glitter"
        subtitle="Herkes Rengarenk Olmalı"
        body="Profesyonel yüz boyama sanatçımız, en kaliteli marka olan Playdoh'un cilt sağlığını önemseyen modellerini kullanarak çocukların yüzlerini büyülü tasarımlarla renklendiriyor. Kelebek, kaplan, prenses, süper kahraman ve daha fazla seçenek! Sadece çocuklar değil, yetişkinler için de özel glitter uygulamaları ile herkes doğum gününün bir parçası olacak. Cilt dostu boyalarımız kolayca temizlenir ve tüm gün boyunca kalıcıdır. Rengarenk yüzlerle fotoğraflarınız unutulmaz olacak!"
      />

      {/* Sihirbaz */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/sihirbaznattive.webp"
          alt="Sihirbazlık gösterisi - İstanbul"
          className="w-full h-auto"
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="İnteraktif Sihirbazlık Gösterisi"
        body="İstanbul'un en iyi sihirbazlık gösterisi ile doğum gününüzün en unutulmaz anını yaşayın! Profesyonel sihirbazımız tavşan ve güvercin ile büyülü anlar yaratırken, çocukların katılımıyla interaktif numaralar sunar. 20-25 dakika süren gösterimizde çocuklar büyülenecek, kahkahalar atılacak ve sihrin gerçek olduğuna inanacaklar."
      />

      {/* Bubble */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/bubbleshownattive2.webp"
          alt="Bubble Show - İstanbul"
          className="w-full h-auto"
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Bubble Show - Binlerce Baloncuk"
        body="İstanbul'un en etkileyici Bubble Show gösterisi! Alternatif olarak dev köpük balonları ile görsel şölen sunan profesyonel gösterimizi tercih edebilirsiniz. 20-25 dakika süren gösterimizde binlerce baloncuğun havada uçuşması, dev köpük balonları ve tünelleri, LED ışık efektleri eşliğinde büyülü atmosfer. Çocukların mest olacağı, renkli ve büyülü köpük gösterisi ile doğum gününüzü unutulmaz kılıyoruz."
      />

      {/* Palyaço */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/palyaco/palyacoanaherogrupoyunlari.webp"
          alt="Palyaço ve animasyon - İstanbul"
          className="w-full h-auto"
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Palyaço & Eğlence Dolu Aktiviteler"
        body="Profesyonel palyaço ekibimiz ile kahkaha dolu anlar ve eğlence dolu aktiviteler. Yüz boyama sanatçımız en kaliteli marka olan Playdoh'un cilt sağlığını önemseyen modellerini kullanarak çocukların yüzlerini renklendirirken, balon şekillendirme ustamız köpek, kılıç, çiçek ve kalp gibi renkli tasarımlar yapıyor. Müzikli danslar, grup oyunları ve ödüllü yarışmalarla çocukları bir arada tutuyoruz. Kar spreyi showu ile büyülü anlar, renkli konfeti yağmuru ve volkan efektleri ile görsel şölen yaratıyoruz. Temaya özel hazırlanmış pinyata ile çocukların en sevdiği sürpriz anını gerçekleştiriyoruz."
      />

      {/* Kostümlü */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/elsaheroo.webp"
          alt="Kostümlü karakter - İstanbul"
          className="w-full h-auto"
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Kostümlü Animatör"
        body="İstediğiniz temaya uygun kostümlü karakter ile çocukların hayallerini gerçeğe dönüştürüyoruz. Elsa'dan Spider-Man'e, Mickey Mouse'dan Paw Patrol'e kadar geniş karakter seçeneklerimiz var. Profesyonel animatörlerimiz tarafından canlandırılan karakterlerimiz çocuklarla etkileşime girer, oyunlar oynar ve unutulmaz anlar yaratır."
      />

      {/* Ek hizmetler */}
      <div className="max-w-7xl mx-auto">
        <img
          src="/content/images/fullpaket/68978382-5a6b-414b-875c-06b29db251fc.webp"
          alt="Ek hizmetler - Popcorn arabası"
          className="w-full h-auto"
          style={{ maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      <NarrativeSection
        title="Profesyonel Ek Hizmetler"
        body="Doğum gününüzü daha da özel kılmak için ek hizmetler sunuyoruz. Profesyonel fotoğrafçı ile etkinliğinizin her anını ölümsüzleştirin. Canlı yapım popcorn ve pamuk şeker arabası ile misafirlerinize sınırsız lezzet ikramı yapın. Alternatif olarak meyveler ve tatlılarla birlikte sınırsız çikolata keyfi sunan çikolata şelalesini tercih edebilirsiniz."
      />

      <NarrativeSection
        title="Profesyonel Ses Sistemi"
        body="Etkinliğiniz için profesyonel ses sistemi ve mikrofon kurulumu. Müzik, anons ve konuşmalar için kristal netliğinde ses kalitesi garantisi. Tüm etkinlik boyunca konuklarınızın her şeyi net bir şekilde duymasını sağlıyoruz."
      />

      {/* Metrics */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: '10+ Yıl Deneyim' },
              { label: '5000+ Başarılı Organizasyon' },
              { label: 'Vodafone, Metro Güvencesi' },
              { label: '%100 Mutluluk Garantisi' }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="text-3xl">✅</div>
                <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-6">
            {faqs.map((item, idx) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-xl text-white mb-3">{item.question}</h3>
                <p className="text-white leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
            Hizmet Bölgelerimiz
          </h2>
          <p className="text-xl text-white mb-8" style={{ lineHeight: '1.7' }}>
            İstanbul genelinde full paket organizasyon hizmeti
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map((area, idx) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="py-3 px-4 bg-gray-900 text-white rounded-lg font-medium"
              >
                {area}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.25' }}>
            Hemen Rezervasyon Yapın!
          </h2>
          <p className="text-2xl mb-10 text-white/90">Hayalinizi gerçeğe dönüştürmenin zamanı geldi</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://wa.me/905307309009?text=Merhaba Çocuk etkinlikleri hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+905307309009"
              className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
            >
              📞 0530 730 90 09
            </a>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-4">
            <span className="text-2xl">🎯</span>
            <span className="font-bold text-lg">%100 Mutluluk Garantisi</span>
          </div>
          <p className="text-sm text-white/80">Siz mutlu değilseniz, biz mutlu değiliz.</p>
          <p className="mt-8 text-base text-white/80">
            veya{' '}
            <Link to="/iletisim" className="underline font-bold">
              iletişim formunu
            </Link>{' '}
            doldurun
          </p>
        </div>
      </section>
    </>
  )
}

export default FullPackageOrganization
