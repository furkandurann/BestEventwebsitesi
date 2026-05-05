import { useState, Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { createServiceSchema, createFAQSchema, createHowToSchema } from '../../utils/schemaHelpers'
import AdHero from '../../components/AdHero'
import LocationHeroShowcase from '../../components/LocationHeroShowcase'
import GoogleReviews from '../../components/GoogleReviews'
import { getReviewsByTags } from '../../data/googleReviews'
import DistrictLinksGrid from '../../components/DistrictLinksGrid'
import AuthorExpertise from '../../components/AuthorExpertise'

const RelatedServices = lazy(() => import('../../components/RelatedServices'))
const RelatedBlogPosts = lazy(() => import('../../components/RelatedBlogPosts'))
const DeferredContentAccordion = lazy(() => import('../../components/DeferredContentAccordion'))

const CottonCandyCart = () => {
  const [openFaq, setOpenFaq] = useState(0)

  // ── Hero Showcase Slides ──
  const showcaseSlides = [
    {
      src: '/content/images/Parti Ekipmanları/pamukseker.webp',
      alt: 'Pamuk şeker arabası kiralama İstanbul doğum günü etkinliği',
      tag: 'Pamuk Şeker',
      title: 'Taze taze, sıcak sıcak pamuk şeker',
      description: 'Etkinlik alanında o an üretilen renkli pamuk şekerler, en kaliteli şeker ürünleriyle tüm katılımcılara sınırsız dağıtılır.',
    },
    {
      src: '/content/images/Parti Ekipmanları/hareketlislider7popcorn.webp',
      alt: 'Popcorn arabası kiralama İstanbul organizasyon',
      tag: 'Popcorn Arabası',
      title: 'Taze patlatılan sıcak popcorn servisi',
      description: 'En kaliteli mısır ürünleriyle etkinlik alanında canlı olarak hazırlanan popcornlar, nostaljik arabayla sınırsız ikram edilir.',
    },
    {
      src: '/content/images/Parti Ekipmanları/hareketlislider6cikolataselalsi.webp',
      alt: 'Çikolata şelalesi kiralama İstanbul belçika çikolatası',
      tag: 'Çikolata Şelalesi',
      title: 'Orijinal Belçika çikolatası ile şelale deneyimi',
      description: 'Orijinal Belçika çikolatası kademeli olarak akar; mevsimsel çilek, muz ve marşmelov ile servis edilir. Muhteşem lezzet.',
    },
    {
      src: '/content/images/Parti Ekipmanları/popcornpamukseker.webp',
      alt: 'Pamuk şeker popcorn çikolata şelalesi komple ikram servisi İstanbul',
      tag: 'Komple İkram',
      title: 'Üçü bir arada komple ikram paketi',
      description: 'Pamuk şeker, popcorn ve çikolata şelalesi tek pakette — etkinliğinize tatlı bir dokunuş.',
    },
  ]

  // ── FAQ Data ──
  const faqs = [
    { question: 'Pamuk şeker ve popcorn etkinlikte nasıl hazırlanır?', answer: 'Tüm ikramlar etkinlik alanına profesyonel ekipmanlarımızla gelir ve o an canlı olarak hazırlanır. Pamuk şeker makinesi ile sıcak sıcak, taze taze üretim yapılır. Popcorn en kaliteli mısırla yerinde patlatılır. Tüm katılımcılara sınırsız dağıtılır.' },
    { question: 'Çikolata şelalesinde hangi çikolata kullanılıyor?', answer: 'Çikolata şelalemizde orijinal Belçika çikolatası kullanıyoruz. Mevsimsel çilek, muz, ananas gibi taze meyveler ve marşmelov ile servis edilir. Lezzeti ve kalitesi her etkinlikte fark yaratır.' },
    { question: 'Kaç kişilik etkinlikler için uygundur?', answer: '20 kişilik doğum gününden 500 kişilik kurumsal etkinliğe kadar her ölçekte hizmet veriyoruz. Büyük organizasyonlarda birden fazla ekipman ve personel ile geniş kapasiteli servis sunuyoruz.' },
    { question: 'Ekipman ve malzemeleri siz mi getiriyorsunuz?', answer: 'Evet, tüm ekipmanlar, hammaddeler ve servis personeli tarafımızdan sağlanır. Sizin hiçbir hazırlık yapmanıza gerek yoktur. Etkinlik alanına gelir, kurar, servis eder ve toplarız.' },
    { question: 'Hangi etkinliklerde hizmet veriyorsunuz?', answer: 'Doğum günleri, düğünler, nişanlar, sünnet düğünleri, kurumsal etkinlikler, AVM organizasyonları, okul festivalleri, açılış organizasyonları ve her türlü özel gün etkinliğinde hizmet veriyoruz.' },
    { question: 'Ne kadar önceden rezervasyon yapmalıyım?', answer: 'Hafta sonu etkinlikleri için en az 1 hafta, yoğun dönemlerde 2 hafta önceden rezervasyon öneriyoruz. WhatsApp veya telefon ile anında teklif alabilirsiniz: 05307309009' },
    { question: 'Hijyen koşullarına dikkat ediyor musunuz?', answer: 'Kesinlikle evet. Tüm ekipmanlarımız her etkinlik öncesi ve sonrası dezenfekte edilir. Personelimiz hijyen sertifikalıdır. FDA onaylı, çocuk dostu, toksik olmayan malzemeler kullanıyoruz.' },
    { question: 'İstanbul dışına da geliyor musunuz?', answer: 'İstanbul genelinde hizmet vermekteyiz. Yaz sezonunda Antalya, Bodrum, Belek ve çevre tatil bölgelerinde de etkinliklere katılıyoruz.' },
  ]

  // ── Schema Markup ──
  const serviceSchema = createServiceSchema(
    'Pamuk Şeker, Popcorn Arabası, Çikolata Şelalesi Kiralama İstanbul',
    'İstanbul\'da pamuk şeker arabası, popcorn arabası ve çikolata şelalesi kiralama. Etkinlik alanında taze üretim, sınırsız ikram. Doğum günü, düğün ve kurumsal organizasyonlar.',
    '/organizasyonlar/pamuk-seker',
    'İkram Servisi ve Parti Ekipmanları Kiralama'
  )
  const faqSchema = createFAQSchema(faqs)
  const howToSchema = createHowToSchema(
    'Pamuk Şeker & Popcorn İkram Servisi Nasıl Çalışır?',
    'Etkinliğinize profesyonel ikram arabalarıyla gelir, canlı üretim yapar ve sınırsız servis sunarız.',
    [
      { name: 'Tarih ve Mekan Belirleme', text: 'WhatsApp veya telefon ile tarih, ilçe ve kişi sayısını bildirin. Anında fiyat teklifi alın.' },
      { name: 'Ekipman Kurulumu', text: 'Ekibimiz etkinlik saatinden önce mekanınıza gelir, pamuk şeker, popcorn ve çikolata şelalesi ekipmanlarını kurar.' },
      { name: 'Canlı Üretim ve Sınırsız İkram', text: 'Tüm ikramlar etkinlik alanında o an taze üretilir. En kaliteli mısır, şeker ve Belçika çikolatası kullanılır. Tüm katılımcılara sınırsız dağıtılır.' },
      { name: 'Toplama ve Temizlik', text: 'Etkinlik sonunda ekipmanlar toplanır, alan temizlenir. Sizin hiçbir şey yapmanıza gerek kalmaz.' },
    ]
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <Seo
        title="Pamuk Şeker, Popcorn Arabası, Çikolata Şelalesi Kiralama İstanbul | Best Event"
        description="İstanbul'da pamuk şeker arabası, popcorn arabası ve çikolata şelalesi kiralama. Etkinlikte taze üretim, sınırsız ikram. Orijinal Belçika çikolatası. ☎ 05307309009"
        keywords={[
          'pamuk şeker arabası kiralama istanbul',
          'pamuk şeker kiralama',
          'popcorn arabası kiralama istanbul',
          'popcorn kiralama',
          'çikolata şelalesi kiralama istanbul',
          'çikolata şelalesi kiralama',
          'çikolata fondue kiralama',
          'parti ekipmanları kiralama istanbul',
          'etkinlik ikram servisi',
          'doğum günü ikram servisi',
          'düğün ikram servisi',
          'kurumsal etkinlik ikram',
          'pamuk şeker makinesi kiralama',
          'renkli pamuk şeker',
          'taze popcorn servisi',
          'belçika çikolatası şelale',
        ]}
        canonicalPath="/organizasyonlar/pamuk-seker"
        image="/content/images/Parti Ekipmanları/popcornpamukseker.webp"
        schema={[
          serviceSchema,
          faqSchema,
          howToSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bestevent.com.tr" },
              { "@type": "ListItem", "position": 2, "name": "Çocuk Etkinlikleri", "item": "https://bestevent.com.tr/organizasyonlar/cocuk-etkinlikleri" },
              { "@type": "ListItem", "position": 3, "name": "Pamuk Şeker & Popcorn & Çikolata Şelalesi", "item": "https://bestevent.com.tr/organizasyonlar/pamuk-seker" },
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BestEvent",
            "url": "https://bestevent.com.tr",
            "logo": "https://bestevent.com.tr/logo.png",
            "sameAs": [
              "https://www.instagram.com/besteventorganizasyon/",
              "https://www.instagram.com/palyacogezegenii/",
              "https://www.facebook.com/besteventorganizasyon",
              "https://www.linkedin.com/company/besteventorganizasyon",
              "https://g.co/kgs/bestevent"
            ]
          },
        ]}
      />

      {/* ── 1. HERO ── */}
      <AdHero
        title="Pamuk Şeker, Popcorn & Çikolata Şelalesi Kiralama İstanbul"
        backgroundImage="/content/images/Parti Ekipmanları/popcornpamukseker.webp"
        subtitle="Etkinliğinizde taze üretim, sınırsız ikram — İstanbul'un her semtine"
        primaryLabel="WhatsApp'tan Teklif Al"
        whatsappMessage="Merhaba, pamuk şeker / popcorn / çikolata şelalesi kiralama hakkında bilgi almak istiyorum."
        quickFacts={['Taze Üretim', 'Sınırsız Servis', '5⭐ Google Yorumu', 'Aynı Gün Rezervasyon']}
        ctaNote="📞 Hızlı yanıt — mesajınıza dakikalar içinde dönüş"
      />

      {/* ── 2. HERO SHOWCASE SLIDER ── */}
      <LocationHeroShowcase
        title="Pamuk Şeker, Popcorn & Çikolata Şelalesi İstanbul"
        description="Pamuk şekerden popcorn standına, çikolata şelalesinden komple ikram paketine; etkinliğinize tatlı dokunuşu tek kurulumda getiriyoruz."
        slides={showcaseSlides}
        eyebrow="Profesyonel İkram Servisi"
      />

      <main className="overflow-x-hidden scroll-smooth">

        {/* ── 3. NASIL ÇALIŞIR — Canlı Üretim Akışı ── */}
        <section className="py-20 sm:py-28 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.06),_transparent_50%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.3em] text-xs text-pink-400 mb-4 font-medium">Canlı Üretim — Sınırsız İkram</p>
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.025em' }}>
                Etkinliğinize Nasıl Geliyoruz?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: 'Tarih & Mekan Bildirin', text: 'WhatsApp veya telefon ile tarih, ilçe ve kişi sayısını paylaşın. Anında net fiyat teklifi alın.', accent: 'border-pink-500/20' },
                { num: '02', title: 'Ekipman Kurulumu', text: 'Ekibimiz etkinlik saatinden önce mekanınıza gelir. Pamuk şeker arabası, popcorn makinesi ve çikolata şelalesi profesyonelce kurulur.', accent: 'border-purple-500/20' },
                { num: '03', title: 'Canlı Üretim Başlar', text: 'Tüm ikramlar o an, etkinlik alanında taze taze üretilir. En kaliteli mısır, şeker ve orijinal Belçika çikolatası kullanılır. Sıcak sıcak servis edilir.', accent: 'border-orange-500/20' },
                { num: '04', title: 'Sınırsız İkram & Toplama', text: 'Tüm katılımcılara sınırsız dağıtım yapılır. Etkinlik sonunda ekipmanlar toplanır, alan temizlenir. Sizin hiçbir şey yapmanıza gerek kalmaz.', accent: 'border-green-500/20' },
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${item.accent} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300`}>
                  <span className="text-3xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">{item.num}</span>
                  <h3 className="text-white font-bold text-lg mt-3 mb-2">{item.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. PAMUK ŞEKER DETAY ── */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-black via-pink-950/10 to-black">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-pink-400 mb-4 font-medium">Pamuk Şeker Arabası</p>
                <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
                  Pamuk Şeker Arabası Kiralama İstanbul
                </h2>
                <div className="space-y-4 text-white text-sm leading-relaxed">
                  <p>
                    Pamuk şeker arabamız etkinlik alanınıza gelir ve <strong className="text-white">o an, gözlerinizin önünde</strong> taze pamuk şeker üretilir. Renkli, yumuşacık şeker ipliği çubuğa sarılırken çocukların gözleri parlar.
                  </p>
                  <p>
                    <strong className="text-white">En kaliteli şeker ürünlerini</strong> kullanıyoruz. Klasik beyaz, pembe, mavi ve karışık renkli pamuk şeker seçenekleriyle etkinliğinize renk katıyoruz. Tüm katılımcılara <strong className="text-white">sınırsız</strong> dağıtılır.
                  </p>
                  <p>
                    Doğum günlerinden düğünlere, AVM etkinliklerinden kurumsal organizasyonlara kadar her ölçekte hizmet veriyoruz. Hijyenik koşullar ve profesyonel sunum standart hizmetimizdir.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/content/images/Parti Ekipmanları/pamukseker.webp" alt="Pamuk şeker arabası kiralama İstanbul - Best Event taze üretim" loading="lazy" width={600} height={450} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. POPCORN DETAY ── */}
        <section className="py-20 sm:py-28 bg-black">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden">
                <img src="/content/images/Parti Ekipmanları/hareketlislider7popcorn.webp" alt="Popcorn arabası kiralama İstanbul - taze patlatılmış mısır servisi" loading="lazy" width={600} height={450} className="w-full h-auto object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="uppercase tracking-[0.3em] text-xs text-orange-400 mb-4 font-medium">Popcorn Arabası</p>
                <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
                  Popcorn Arabası Kiralama İstanbul
                </h2>
                <div className="space-y-4 text-white text-sm leading-relaxed">
                  <p>
                    Nostaljik popcorn arabamız etkinlik mekanınıza gelir ve <strong className="text-white">en kaliteli mısır ürünleriyle</strong> yerinde, sıcak sıcak patlatılır. Mis gibi mısır kokusu etkinlik alanını sarar.
                  </p>
                  <p>
                    Tuzlu ve karamelli seçeneklerle tüm katılımcılara <strong className="text-white">sınırsız popcorn</strong> ikram edilir. Profesyonel personelimiz hijyenik koşullarda servis yapar.
                  </p>
                  <p>
                    Çocuk doğum günlerinde, okul şenliklerinde, kurumsal etkinliklerde ve AVM organizasyonlarında en çok talep edilen ikram hizmetimizdir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. ÇİKOLATA ŞELALESİ DETAY ── */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-black via-amber-950/10 to-black">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-amber-400 mb-4 font-medium">Çikolata Şelalesi</p>
                <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
                  Çikolata Şelalesi Kiralama İstanbul
                </h2>
                <div className="space-y-4 text-white text-sm leading-relaxed">
                  <p>
                    Çikolata şelalemizde <strong className="text-white">orijinal Belçika çikolatası</strong> kullanıyoruz. Erimiş çikolata kademeli olarak akar, muhteşem bir görsel şov oluşturur.
                  </p>
                  <p>
                    <strong className="text-white">Mevsimsel taze çilek, muz, ananas</strong> gibi meyveler ve marşmelov ile servis edilir. Her lokma, premium bir lezzet deneyimidir. Misafirleriniz meyveyi çikolataya batırıp tadını çıkarır.
                  </p>
                  <p>
                    Düğünlerde, nişanlarda, kurumsal etkinliklerde ve özel davetlerde <strong className="text-white">en çok tercih edilen premium ikram</strong> hizmetimizdir. Hijyenik koşullar ve profesyonel sunum garantimizdir.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/content/images/Parti Ekipmanları/hareketlislider6cikolataselalsi.webp" alt="Çikolata şelalesi kiralama İstanbul - orijinal Belçika çikolatası" loading="lazy" width={600} height={450} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. İSTATİSTİK BANDI ── */}
        <section className="py-12 bg-gradient-to-r from-pink-950/40 via-black to-orange-950/40 border-y border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center">
              <div>
                <p className="text-3xl font-black text-white">5.000+</p>
                <p className="text-white text-xs uppercase tracking-widest mt-1">Başarılı Etkinlik</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-black text-white">Taze</p>
                <p className="text-white text-xs uppercase tracking-widest mt-1">Canlı Üretim</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-black text-white">Sınırsız</p>
                <p className="text-white text-xs uppercase tracking-widest mt-1">İkram Servisi</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-black text-white">Belçika</p>
                <p className="text-white text-xs uppercase tracking-widest mt-1">Orijinal Çikolata</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. ÖZELLİKLER ── */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-black via-purple-950/10 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.05),_transparent_50%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.3em] text-xs text-purple-400 mb-4 font-medium">Neden Bizi Tercih Etmelisiniz</p>
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.025em' }}>
                İkram Servisimizin Farkları
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Etkinlik Alanında Canlı Üretim', text: 'Hiçbir şey hazır gelmez — pamuk şeker, popcorn ve çikolata şelalesi etkinlik alanınızda o an üretilir. Taze lezzet, canlı gösteri.', accent: 'from-pink-500 to-rose-400' },
                { title: 'En Kaliteli Hammaddeler', text: 'En kaliteli mısır ve şeker ürünleri, orijinal Belçika çikolatası, mevsimsel taze meyveler. Premium malzeme = premium lezzet.', accent: 'from-orange-500 to-amber-400' },
                { title: 'Sınırsız İkram Garantisi', text: 'Kişi sayısı fark etmez — tüm katılımcılara sınırsız dağıtım yapılır. İkram bitme riski yoktur, ekipmanımız sürekli üretir.', accent: 'from-green-500 to-emerald-400' },
                { title: 'Profesyonel Kurulum & Temizlik', text: 'Ekibimiz gelir, kurar, servis eder ve toplar. Hijyen sertifikalı personel, FDA onaylı malzemeler. Size sadece keyfini çıkarmak kalır.', accent: 'from-blue-500 to-cyan-400' },
                { title: 'Her Etkinlik Türüne Uygun', text: 'Doğum günleri, düğünler, nişanlar, sünnet düğünleri, kurumsal etkinlikler, AVM organizasyonları, okul festivalleri ve açılış organizasyonlarında hizmet veriyoruz.', accent: 'from-purple-500 to-pink-400' },
              ].map((f, i) => (
                <div key={i} className="group flex items-start gap-5 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-pink-500/20 transition-all duration-300">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${f.accent} flex items-center justify-center text-white font-bold text-sm`}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">{f.title}</h3>
                    <p className="text-white text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. NEDEN BİZ — White Card ── */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-pink-950 via-black to-purple-950">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="font-extrabold text-gray-900 mb-8" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', lineHeight: '1.15', letterSpacing: '-0.025em' }}>
                Neden İstanbul'un En Çok Tercih Edilen İkram Servisi Biziz?
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
                <p>
                  <strong className="text-gray-900">Best Event</strong>, İstanbul'da 5.000'den fazla başarılı etkinliğe imza atmış profesyonel bir organizasyon firmasıdır. Pamuk şeker arabası, popcorn arabası ve çikolata şelalesi kiralama hizmetlerimiz, klasik ikram anlayışının çok ötesindedir.
                </p>
                <p>
                  Her ikramımız etkinlik alanınızda <strong className="text-gray-900">o an, taze taze, sıcak sıcak</strong> üretilir. Misafirleriniz pamuk şekerin şekillenişini, mısırın patlamasını, çikolatanın akışını canlı olarak izler — bu bir ikram değil, bir <strong className="text-gray-900">gösteri deneyimidir</strong>.
                </p>
                <p>
                  Çikolata şelalemizde <strong className="text-gray-900">orijinal Belçika çikolatası</strong> kullanıyoruz. Mevsimsel taze çilek, muz ve marşmelov ile servis edilen çikolata fondue, etkinliğinizin <strong className="text-gray-900">en premium dokunuşu</strong> olacak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Hizmet Detayları — Pamuk Şeker Pembe/Amber Tema */}
        <section className="relative py-24 sm:py-28 bg-gradient-to-b from-black via-pink-950/15 to-black overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(236,72,153,0.08),_transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.06),_transparent_50%)] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.3em] text-xs text-pink-400 mb-4 font-medium">İstanbul Pamuk Şeker & Popcorn</p>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Pamuk Şeker & Popcorn Arabası Kiralama
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  num: '01',
                  title: 'Pamuk Şeker Arabası Kiralama',
                  text: 'Pamuk şeker arabası kiralama hizmetimiz, doğum günü partileri, çocuk etkinlikleri ve kurumsal organizasyonlar için ideal. Antika tarzı pamuk şeker makinesi arabamız; pembe, mavi, mor renklerde taze pamuk şeker üretir. Pamuk şeker kiralama paketlerimiz İstanbul\'un her ilçesine gönderim yapar.',
                  accent: 'border-pink-500/20',
                  tag: 'border-pink-500/30 text-pink-300',
                },
                {
                  num: '02',
                  title: 'Popcorn Arabası Kiralama',
                  text: 'Popcorn arabası kiralama hizmetimiz; sinema atmosferi yaratan klasik popcorn makinesi arabasıyla geliyor. Mısır patlatma süreci canlı izlenir, taze tereyağlı popcorn anında servis edilir. Çocuk doğum günü, AVM organizasyonu, mağaza açılışı ve okul etkinliği için popcorn kiralama paketleri.',
                  accent: 'border-amber-500/20',
                  tag: 'border-amber-500/30 text-amber-300',
                },
                {
                  num: '03',
                  title: 'Pamuk Şeker & Popcorn Fiyatları',
                  text: 'Pamuk şeker arabası fiyatları ve popcorn arabası kiralama fiyatları; etkinlik süresi, misafir sayısı ve seçilen pakete göre belirlenir. Pamuk şeker fiyat ve popcorn fiyat detayları için WhatsApp\'tan hızlı teklif alın. Sınırsız servis seçeneği ve premium paket dahil farklı seviyelerde paketlerimiz mevcut.',
                  accent: 'border-orange-500/20',
                  tag: 'border-orange-500/30 text-orange-300',
                },
                {
                  num: '04',
                  title: 'Çikolata Şelalesi & Premium Paket',
                  text: 'Çikolata şelalesi kiralama hizmetimizde orijinal Belçika çikolatası kullanıyoruz; taze çilek, muz ve marşmelov ile servis edilen çikolata fondue etkinliğinizin premium dokunuşu olur. Pamuk şeker, popcorn ve çikolata şelalesi üçlüsü ile tam paket organizasyon — düğün, nişan, kurumsal etkinlikte tercih ediliyor.',
                  accent: 'border-rose-500/20',
                  tag: 'border-rose-500/30 text-rose-300',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group p-7 rounded-2xl border ${item.accent} bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black bg-gradient-to-br from-pink-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                      {item.num}
                    </span>
                    <span className={`text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${item.tag} font-medium`}>
                      Hizmet
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 leading-tight">{item.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <p className="text-white/40 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                Pamuk şeker arabası ve popcorn arabası kiralama hizmetimiz İstanbul'un tüm ilçelerine (Kadıköy, Ataşehir, Üsküdar, Beşiktaş, Şişli, Bakırköy, Pendik, Maltepe) gönderim yapmaktadır.
              </p>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ ── */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.05),_transparent_50%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.3em] text-xs text-pink-400 mb-4 font-medium">Sıkça Sorulan Sorular</p>
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.025em' }}>
                Pamuk Şeker, Popcorn & Çikolata Şelalesi Hakkında
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`rounded-2xl border transition-all duration-300 ${openFaq === idx ? 'border-pink-500/30 bg-white/[0.04]' : 'border-white/[0.06] bg-white/[0.02]'}`}>
                  <button onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)} className="w-full text-left p-6 flex items-center justify-between gap-4">
                    <h3 className={`font-bold transition-colors text-base ${openFaq === idx ? 'text-pink-400' : 'text-white'}`}>{faq.question}</h3>
                    <span className={`text-xl transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-45 text-pink-400' : 'text-white'}`}>+</span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-white text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. SEMT SAYFALARI TABLOSU ── */}
        <DistrictLinksGrid
          lpServiceSlug="pamuk-seker-arabasi-kiralama"
          serviceName="Pamuk Şeker & Popcorn Kiralama"
          title="Hangi Bölgelerde Hizmet Veriyoruz?"
        />

        {/* ── 12. İLGİLİ BLOG YAZILARI ── */}
        <section className="py-10 bg-black border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[0.2em] text-xs text-pink-400/70 mb-4 font-medium">İlgili Blog Yazıları</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/blog/pamuk-seker-etkinlik-rehberi" className="text-white hover:text-pink-400 transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-pink-400/50 text-sm">
                Pamuk Şeker Kiralama Rehberi
              </Link>
              <span className="text-white/30 hidden sm:inline">|</span>
              <Link to="/blog/pamuk-seker-dogum-gunu-organizasyonu" className="text-white hover:text-pink-400 transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-pink-400/50 text-sm">
                Doğum Gününde Pamuk Şeker Organizasyonu
              </Link>
            </div>
          </div>
        </section>

        {/* ── 13. GOOGLE YORUMLARI ── */}
        <GoogleReviews reviews={getReviewsByTags(['pamukseker', 'genel'])} title="Pamuk Şeker & Popcorn Müşteri Yorumları" serviceName="Pamuk Şeker Kiralama İstanbul" serviceUrl="/organizasyonlar/pamuk-seker" />

        {/* ── 14. DEFERRED CONTENT ── */}
        <Suspense fallback={null}>
          <DeferredContentAccordion serviceKey="pamuk-seker" />
        </Suspense>

        {/* ── 15. İLGİLİ HİZMETLER ── */}
        <Suspense fallback={null}>
          <RelatedServices currentService="pamuk-seker" />
        </Suspense>

        {/* ── 16. İLGİLİ BLOG ── */}
        <Suspense fallback={null}>
          <RelatedBlogPosts servicePath="/organizasyonlar/pamuk-seker" />
        </Suspense>

        {/* ── 17. UZMAN YORUMU (E-E-A-T) ── */}
        <AuthorExpertise serviceName="Pamuk Şeker, Popcorn & Çikolata Şelalesi Kiralama" />
      </main>
    </div>
  )
}

export default CottonCandyCart
