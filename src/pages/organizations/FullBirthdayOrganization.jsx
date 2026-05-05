import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Seo from "../../components/Seo";
import { createServiceSchema, createImageObjectSchema } from "../../utils/schemaHelpers";
import AdHero from "../../components/AdHero";
import RelatedServices from "../../components/RelatedServices";
import DeferredContentAccordion from "../../components/DeferredContentAccordion";
import TrustSection from "../../components/TrustSection";
import RelatedBlogPosts from "../../components/RelatedBlogPosts";
import { generateSrcSet } from "../../utils/responsiveImage";
import { trackFormSubmit } from "../../utils/tracking";
import AuthorExpertise from "../../components/AuthorExpertise";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

/* ═══════════════════════════════════════════════════════════
   VERİ
   ═══════════════════════════════════════════════════════════ */

const faqs = [
  { q: "Paket içeriğini kendi konseptimize göre uyarlayabiliyor musunuz?", a: "Evet. Konsept renginizi, tema tercihinizi ve özel isteklerinizi bizimle paylaştığınızda süsleme, pasta tasarımı ve sahne düzenini buna göre uyarlıyoruz." },
  { q: "Organizasyon ne kadar sürüyor?", a: "Full Doğum Günü Organizasyonu toplam 3 saat sürer. Karşılama, oyunlar, pasta, bubble show, sihirbazlık ve final akışı bu süreye profesyonelce dağıtılır." },
  { q: "Hangi bölgelerde hizmet veriyorsunuz?", a: "İstanbul'un tüm ilçelerinde hizmet veriyoruz. Uygun tarih ve saat için rezervasyonda adres bilgisiyle birlikte talebinizi iletmeniz yeterli." },
  { q: "Çocukların güvenliği için nasıl önlemler alıyorsunuz?", a: "Ekipteki tüm animatörler çocuklarla iletişim konusunda deneyimli; kullanılan malzemeler çocuklara uygun ve güvenlidir." },
  { q: "Fiyat bilgisi nasıl paylaşılıyor?", a: "Etkinlik tarihi, adresi ve konsept detaylarını ilettiğinizde size özel net bir fiyatlandırma çıkarıyoruz. WhatsApp üzerinden yazılı olarak da iletiyoruz." },
];

const font = {
  display: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
  text: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
};

const heroSlides = [
  { src: '/profesyoneldogumgunucekimleri/anaherodogumgunu.webp', alt: 'Profesyonel doğum günü organizasyonu' },
  { src: '/profesyoneldogumgunucekimleri/dogumgunuonemlı1.webp', alt: 'Doğum günü özel anlar' },
  { src: '/profesyoneldogumgunucekimleri/_DSF8233.webp', alt: 'Doğum günü kutlaması İstanbul' },
  { src: '/profesyoneldogumgunucekimleri/_DSF7332_1.webp', alt: 'Doğum günü partisi profesyonel çekim' },
  { src: '/profesyoneldogumgunucekimleri/_DSF7022.webp', alt: 'Çocuk doğum günü kutlaması' },
  { src: '/profesyoneldogumgunucekimleri/_DSF7051.webp', alt: 'Doğum günü eğlencesi' },
  { src: '/profesyoneldogumgunucekimleri/_DSF7167.webp', alt: 'Doğum günü organizasyonu detay' },
];

/* ── Service Gallery Bileşeni (native yatay scroll + otomatik geçiş) ── */
const ServiceGallery = ({ images }) => {
  const scrollRef = useRef(null);
  const idxRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container || !container.children.length) return;
      idxRef.current = (idxRef.current + 1) % container.children.length;
      const child = container.children[idxRef.current];
      if (child) container.scrollTo({ left: child.offsetLeft - container.offsetLeft, behavior: 'smooth' });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-3 overflow-x-auto snap-x snap-mandatory rounded-2xl"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
    >
      <style>{`.service-gallery-scroll::-webkit-scrollbar { display: none; }`}</style>
      {images.map((img, i) => (
        <div key={i} className="flex-none w-[85%] sm:w-[48%] snap-start">
          <img
            src={img.src}
            srcSet={generateSrcSet(img.src)}
            sizes="(max-width: 768px) 85vw, 48vw"
            alt={img.alt}
            className="w-full aspect-[3/2] object-cover object-center rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
};

/* ── Çerçeveli Ara Slider ── */
const BreathSlider = ({ images }) => (
  <div className="bg-[#050509] px-4 md:px-8 lg:px-12 py-6 md:py-10">
    <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-[0_8px_50px_rgba(0,0,0,0.6)] border border-white/[0.08]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.src}
              srcSet={generateSrcSet(img.src)}
              sizes="100vw"
              alt={img.alt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              width={1920}
              height={1080}
              decoding="async"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

/* ── WhatsApp SVG ── */
const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
);

/* ═══════════════════════════════════════════════════════════
   ANA BİLEŞEN

   PSİKOLOJİK AKIŞ:
   1. HERO → Dikkat yakala (görsel etki)
   2. VAAT → Ne sunuyoruz? (merak)
   3. AKIŞ → Nasıl işliyor? (anlama)
   4. HİZMETLER (tek tek) → Her biri slider + detaylı açıklama (keşif)
      - Araya nefes görselleri serpiştirilmiş
   5. GÜVEN → Neden biz? (ikna)
   6. AKSİYON → Form + SSS (karar)
   ═══════════════════════════════════════════════════════════ */

const FullBirthdayOrganization = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", date: "", time: "", notes: "" });
  const serviceSchema = createServiceSchema("Doğum Günü Organizasyonu", "İstanbul'da profesyonel doğum günü organizasyonu. Konsept süsleme, organik pasta, bubble show, sihirbazlık, palyaço animasyonu tek pakette.", "/organizasyonlar/dogum-gunu-organizasyonu");

  const imageGallerySchema = createImageObjectSchema([
    { src: '/profesyoneldogumgunucekimleri/winnithepohkonseptkapak.webp', alt: 'Kişiye özel tema ve süsleme doğum günü organizasyonu' },
    { src: '/profesyoneldogumgunucekimleri/gumudıscoorganizasyonu.webp', alt: 'Gümüş disco partisi çocuk doğum günü' },
    { src: '/content/images/Kostumlukarakterler/elsaheroo.webp', alt: 'Kostümlü karakter Elsa doğum günü animasyonu' },
    { src: '/profesyoneldogumgunucekimleri/bubbleshowgosterisi.webp', alt: 'Bubble show gösterisi çocuk partisi' },
  ])

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendWhatsAppMessage = () => {
    trackFormSubmit("Full Birthday Organization WhatsApp Form", "dogum-gunu-organizasyonu");
    const msg = `🎉 *Doğum Günü Organizasyonu Talebi*\n\n📝 *Ad Soyad:* ${formData.name || "Belirtilmedi"}\n📞 *Telefon:* ${formData.phone || "Belirtilmedi"}\n📍 *Adres:* ${formData.address || "Belirtilmedi"}\n📅 *Tarih:* ${formData.date || "Belirtilmedi"}\n🕐 *Saat:* ${formData.time || "Belirtilmedi"}\n📋 *Konsept/Notlar:* ${formData.notes || "Belirtilmedi"}`;
    window.open(`https://wa.me/905307309009?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <Seo
        title="Doğum Günü Organizasyonu İstanbul | Full Paket - BestEvent"
        description="İstanbul'da doğum günü organizasyonu. Konsept süsleme, organik pasta, bubble show, sihirbazlık, palyaço animasyonu tek pakette. ☎ 05307309009"
        keywords={["istanbul doğum günü organizasyonu", "doğum günü gösterisi", "doğum günü kiralama", "doğum günü etkinliği", "istanbul doğum günü hizmetleri", "full paket doğum günü"]}
        canonicalPath="/organizasyonlar/dogum-gunu-organizasyonu"
        image="/profesyoneldogumgunucekimleri/anaherodogumgunu.webp"
        schema={[
          serviceSchema,
          imageGallerySchema,
          {
            "@context": "https://schema.org", "@type": "LocalBusiness",
            name: "Best Event - Doğum Günü Organizasyonu",
            image: "https://bestevent.com.tr/profesyoneldogumgunucekimleri/anaherodogumgunu.webp",
            description: "İstanbul'da profesyonel doğum günü organizasyonu hizmeti.",
            address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
            telephone: "+905307309009", priceRange: "$$",
            areaServed: { "@type": "City", name: "İstanbul" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
          },
          {
            "@context": "https://schema.org", "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://bestevent.com.tr" },
              { "@type": "ListItem", position: 2, name: "Çocuk Etkinlikleri", item: "https://bestevent.com.tr/organizasyonlar/cocuk-etkinlikleri" },
              { "@type": "ListItem", position: 3, name: "Doğum Günü Organizasyonu", item: "https://bestevent.com.tr/organizasyonlar/dogum-gunu-organizasyonu" },
            ],
          },
          {
            "@context": "https://schema.org", "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />

      <AdHero
        title="Doğum Günü Organizasyonu İstanbul"
        backgroundImage="/profesyoneldogumgunucekimleri/winniethepoohkonseptdogumgunu.jpg"
        overlay={false}
        imagePosition="center 30%"
      />

      <main className="bg-[#050509] text-white">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           1. HERO KARUSEL — İstanbul'un Her Yerindeyiz
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative overflow-hidden bg-black py-12 md:py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="uppercase tracking-[0.3em] text-xs sm:text-sm text-orange-300 mb-4 font-medium"
              >
                İstanbul'un Her Yerindeyiz
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-bold text-white mb-3"
                style={{
                  fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.025em',
                  fontFamily: font.display
                }}
              >
                Doğum Günü Organizasyonu İstanbul
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white/80 max-w-3xl mx-auto"
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em',
                  fontWeight: '500',
                  fontFamily: font.text
                }}
              >
                Konsept süslemeden organik pastaya, bubble show'dan sihirbazlığa — her şey tek pakette.
              </motion.p>
            </div>

            <Swiper
              modules={[Autoplay]}
              loop
              centeredSlides
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              speed={900}
              spaceBetween={18}
              slidesPerView={1.05}
              breakpoints={{
                768: { slidesPerView: 1.15 },
                1024: { slidesPerView: 1.35 }
              }}
              className="h-[60vh] sm:h-[65vh] md:h-[68vh]"
            >
              {heroSlides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl">
                    <img
                      src={slide.src}
                      srcSet={generateSrcSet(slide.src)}
                      sizes="(max-width: 768px) 95vw, (max-width: 1024px) 85vw, 75vw"
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      fetchPriority={idx === 0 ? 'high' : undefined}
                      decoding="async"
                      width={1200}
                      height={800}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-lg">
                      <p className="text-sm uppercase tracking-[0.25em] text-white/80 mb-2">Doğum Günü Organizasyonu</p>
                      <p className="text-lg font-semibold" style={{ letterSpacing: '-0.01em' }}>
                        {slide.alt}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           2b. BRAND IMPACT — Tek Paket Tek Muhatap
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 sm:py-28 px-6 bg-gradient-to-br from-purple-950/40 via-black to-pink-950/40 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="font-bold mb-8 text-white px-4 text-center"
                style={{
                  fontSize: 'clamp(1.41rem, 3.74vw, 2.48rem)',
                  lineHeight: '1.35',
                  letterSpacing: '-0.015em',
                  fontWeight: '700',
                  fontFamily: font.display
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>
                  Tek Paket.{' '}
                  <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
                    Tek Ekip.
                  </span>
                </span>
                {' '}Tek Muhatap.
              </h2>

              <p
                className="text-white mb-12 text-center mx-auto"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
                  lineHeight: '1.5',
                  letterSpacing: '-0.02em',
                  fontWeight: '600',
                  fontFamily: font.display
                }}
              >
                12 Yıldır Hayalleri Gerçeğe Dönüştürüyoruz
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <div>
                  <p
                    style={{
                      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                      lineHeight: '1.4',
                      letterSpacing: '-0.015em',
                      fontWeight: '500',
                      fontFamily: font.text,
                      color: '#E5E5E5'
                    }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>+5000</span>
                    {' '}Organizasyon
                  </p>
                </div>

                <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                <div className="block sm:hidden w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <div>
                  <p
                    className="text-white font-bold"
                    style={{
                      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                      lineHeight: '1.4',
                      letterSpacing: '-0.015em',
                      fontWeight: '700',
                      fontFamily: font.text
                    }}
                  >
                    Binlerce{' '}
                    <span
                      className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                    >
                      Mutlu Aile
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           3. AKIŞ — 3 saatte neler olur? (Yatay Swiper Kartları)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-[#0a0a0f] border-t border-white/5 py-20 md:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <p className="uppercase tracking-[0.25em] text-xs text-[#FF6B00] mb-4 font-semibold">Etkinlik Akışı</p>
              <h2 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.035em" }}>
                3 Saatte Neler Olur?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.15rem)", lineHeight: 1.7 }}>
                Karşılamadan vedaya, dakikası dakikasına planlanmış profesyonel akış.
              </p>
            </div>

            <div
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {[
                { num: 1, title: "Kişiye Özel Tema & Süsleme", desc: "Balon kemeri, backdrop, masa düzeni ve tema renkleri tek dosyada planlanır; kurulum misafir gelmeden tamamlanır.", img: "/content/images/konsepts/barbiekonseptdogumgunu.webp", href: "/hizmet-detay/kisiye-ozel-tema-ve-susleme" },
                { num: 2, title: "Yüz Boyama, Glitter & Play Doh", desc: "Hızlı yüz boyama, glitter detayları ve küçük yaş grubu için play doh köşesiyle bekleme anları bile eğlenceye dönüşür.", img: "/content/images/profesyonelmakeup/profesyonelyuzboyamasianafoto.webp", href: "/hizmet-detay/yuz-boyama-glitter-ve-play-doh-kosesi" },
                { num: 3, title: "Gümüş Disco Partisi", desc: "Işıklar, dans ve enerji dolu bir parti deneyimi. Çocuklar sahnenin yıldızı olur.", img: "/content/images/fullpaket/hareketlislider4sinirsizoyun.webp", href: "/hizmet-detay/gumus-disco-partisi" },
                { num: 4, title: "Kostümlü Animatörler", desc: "Elsa, Spiderman ve benzeri karakterler karşılama, fotoğraf ve mini sahne anlarında çocuklarla birebir temas kurar.", img: "/content/images/Kostumlukarakterler/elsaheroo.webp", href: "/hizmet-detay/kostumlu-animatorlerle-karsilama" },
                { num: 5, title: "Konsept Doğum Günü Pastası", desc: "%100 organik, Cordon Bleu şefinden temaya özel tasarım pasta.", img: "/content/images/fullpaket/pastanattivee1.webp", href: "/hizmet-detay/konsept-dogum-gunu-pastasi" },
                { num: 6, title: "Grup Oyunları & Konfeti Partisi", desc: "Çuval yarışı, halat çekme, ringo, sandalye kapmaca, deve-cüce, konfeti ve kar show finali tek akışta birleşir.", img: "/content/images/slider/konfeti.webp", href: "/hizmet-detay/grup-oyunlari-konfeti-ve-kar-show" },
                { num: 7, title: "Sihirbazlık Gösterisi", desc: "İllüzyon, kart numaraları, sandalye-masa uçurma ve tavşan-güvercin sürprizleriyle tempolu sihir akışı kurulur.", img: "/content/images/fullpaket/sihirbaznattive.webp", href: "/hizmet-detay/sahne-illuzyonlari-ve-final-numaralari" },
                { num: 8, title: "Bubble Show Partisi", desc: "Dev baloncukların içine girilen, çocuk katılımının yüksek olduğu ve finali ışıkla güçlenen özel bubble show akışı.", img: "/content/images/ahunundogumgunu/bubbleshowgosterisi.webp", href: "/hizmet-detay/dogum-gununde-bubble-show-partisi" },
                { num: 9, title: "Profesyonel Fotoğraf Çekimi", desc: "Duygusal anları, kahkahaları ve vedaları profesyonel karelerle ölümsüzleştiriyoruz.", img: "/content/images/ahunundogumgunu/vedafotografi.webp", href: "/hizmet-detay/dogum-gunu-fotograf-cekimi" },
              ].map((card) => (
                <Link key={card.num} to={card.href} className="flex-none w-[80%] sm:w-[45%] lg:w-[30%] snap-start group rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 block">
                  <div className="relative w-full overflow-hidden">
                    <img
                      src={card.img}
                      srcSet={generateSrcSet(card.img)}
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                      alt={card.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#f8b500] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {card.num}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="uppercase tracking-[0.2em] text-[10px] text-[#FF6B00]/70 mb-2 font-semibold">Etkinlik Akışı</p>
                    <h3 className="text-white font-bold text-base md:text-lg mb-2" style={{ fontFamily: font.display, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                      {card.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: font.text }}>
                      {card.desc}
                    </p>
                    <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f8b500]/85">
                      Detayı Aç
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <TrustSection />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           4. HİZMETLER — Her biri detaylı, araya slider & nefes görselleri
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}

        {/* ── BÖLÜM BAŞLIĞI ── */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-8 text-center">
            <p className="uppercase tracking-[0.25em] text-xs text-[#f8b500] mb-4 font-semibold">Paket Detayları</p>
            <h2 className="font-bold text-white" style={{ fontFamily: font.display, fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Her Hizmet, Ayrı Ayrı Profesyonel
            </h2>
          </div>
        </section>


        {/* ── HİZMET 1: KONSEPT SÜSLEME ── */}
        <section className="bg-[#050509]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="text-xs font-semibold text-[#f8b500] tracking-wider uppercase mb-3 block">01 — Süsleme</span>
                <h3 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  Konsept Doğum Günü Süslemesi
                </h3>
                <p className="text-white/80 mb-4" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", lineHeight: 1.75 }}>
                  Elsa, Safari, Wednesday, Spiderman ve daha fazlası — istediğiniz konsepti detaylarıyla birlikte hayata geçiriyoruz. Balon kemerleri, backdrop, masa düzeni, konsept aksesuarlar ve tema renklerine uygun tüm dekorasyon elementleri profesyonel ekibimiz tarafından kurulur.
                </p>
                <p className="text-white/65 text-sm md:text-base" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                  Her detay fotoğraf çekimleri için kusursuz bir sahne yaratır. Misafirleriniz geldiğinde tam bir konsept dünyasına adım atar.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <ServiceGallery images={[
                  { src: "/content/images/konsepts/barbiekonseptdogumgunu.webp", alt: "Barbie konsept doğum günü süslemesi İstanbul" },
                  { src: "/content/images/konsepts/denizkizidogumgunu.webp", alt: "Deniz kızı konsept doğum günü dekorasyonu İstanbul" },
                  { src: "/content/images/konsepts/galatasaraykonseptdogumgunu.webp", alt: "Galatasaray konsept doğum günü süslemesi" },
                  { src: "/content/images/fullpaket/konseptnattive.webp", alt: "Profesyonel konsept süsleme organizasyonu" },
                ]} />
              </div>
            </div>
          </div>
        </section>


        {/* ── NEFES SLİDER 1 ── */}
        <BreathSlider images={[
          { src: "/profesyoneldogumgunucekimleri/_DSF7332_1.webp", alt: "Profesyonel doğum günü organizasyonu çekim" },
          { src: "/profesyoneldogumgunucekimleri/dogumgunuonemlı1.webp", alt: "Doğum günü organizasyonu önemli anlar" },
          { src: "/profesyoneldogumgunucekimleri/_DSF7022.webp", alt: "Çocuk doğum günü partisi İstanbul" },
        ]} />


        {/* ── HİZMET 2: ORGANİK PASTA ── */}
        <section className="bg-[#0a0a0f]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <ServiceGallery images={[
                  { src: "/content/images/fullpaket/pastanattivee1.webp", alt: "Organik şef pastası doğum günü İstanbul" },
                  { src: "/content/images/fullpaket/hareketlislider1konseptdogumgunubaslikk.webp", alt: "Konsept doğum günü pastası organizasyon" },
                ]} />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#f8b500] tracking-wider uppercase mb-3 block">02 — Pasta</span>
                <h3 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  %100 Organik Şef Pastası
                </h3>
                <p className="text-white/80 mb-4" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", lineHeight: 1.75 }}>
                  Cordon Bleu eğitimi almış şefimiz, her pastayı özel olarak tasarlar ve hazırlar. %100 organik malzemeler kullanılır; ilave şeker, yapay boya veya krem şanti yoktur. Konseptinize özel tasarım, hem görsel hem lezzet açısından unutulmaz.
                </p>
                <p className="text-white/65 text-sm md:text-base" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                  Elsa'dan Spiderman'e, Safari'den Prenses temasına kadar her konsepte uygun pasta tasarımı yapıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ── HİZMET 3: BUBBLE SHOW ── */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="text-xs font-semibold text-[#f8b500] tracking-wider uppercase mb-3 block">03 — Gösteri</span>
                <h3 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  Bubble Show Gösterisi
                </h3>
                <p className="text-white/80 mb-4" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", lineHeight: 1.75 }}>
                  30 dakika süren bubble show gösterimizde dev baloncuklar, sahne efektleri ve çocukların içine girebildiği büyülü anlar var. Profesyonel bubble artist'imiz, müzik eşliğinde görsel bir şölen sunuyor.
                </p>
                <p className="text-white/65 text-sm md:text-base" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                  Çocuklar büyük baloncukların içine girer, rengarenk köpüklerle oynar ve unutulmaz kareler için poz verir. Video çekimi için mükemmel bir show!
                </p>
              </div>
              <div className="order-1 md:order-2">
                <ServiceGallery images={[
                  { src: "/content/images/bubbleshow/bubbleshowhero.webp", alt: "Bubble show gösterisi İstanbul doğum günü" },
                  { src: "/content/images/bubbleshow/bubbleshowslider2.webp", alt: "Bubble show çocuk etkinliği İstanbul" },
                  { src: "/content/images/ahunundogumgunu/bubbleshowgosterisi.webp", alt: "Doğum günü bubble show performansı" },
                  { src: "/content/images/ahunundogumgunu/heryasauygunbubbleshowpartisi.webp", alt: "Her yaşa uygun bubble show partisi" },
                ]} />
              </div>
            </div>
          </div>
        </section>


        {/* ── NEFES SLİDER 2 ── */}
        <BreathSlider images={[
          { src: "/profesyoneldogumgunucekimleri/_DSF7181.webp", alt: "Doğum günü organizasyonu İstanbul profesyonel çekim" },
          { src: "/profesyoneldogumgunucekimleri/anaherodogumgunu.webp", alt: "Ana hero doğum günü organizasyonu" },
          { src: "/profesyoneldogumgunucekimleri/_DSF7051.webp", alt: "Profesyonel doğum günü fotoğrafçılığı" },
        ]} />


        {/* ── HİZMET 4: SİHİRBAZLIK ── */}
        <section className="bg-[#0a0a0f]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <ServiceGallery images={[
                  { src: "/content/images/fullpaket/hareketlislider6osterilersihirbazhero.webp", alt: "Sihirbazlık gösterisi doğum günü İstanbul" },
                  { src: "/content/images/ahunundogumgunu/sihirbazlıkgosterisivekomedishow.webp", alt: "Sihirbaz komedi show çocuk etkinliği" },
                  { src: "/content/images/ahunundogumgunu/inanılmazsihirbazlıkgosterileri.webp", alt: "İnanılmaz sihirbazlık gösterileri İstanbul" },
                ]} />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#f8b500] tracking-wider uppercase mb-3 block">04 — Gösteri</span>
                <h3 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  Sihirbazlık Gösterisi
                </h3>
                <p className="text-white/80 mb-4" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", lineHeight: 1.75 }}>
                  Tavşan, güvercin ve interaktif numaralarla dolu eğlenceli 30 dakikalık performans. Çocuklar sadece izleyen değil, gösterinin parçası olur. Komedi ağırlıklı sahne ile kahkahalar garantili.
                </p>
                <p className="text-white/65 text-sm md:text-base" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                  Profesyonel sihirbazımız yaş grubuna göre numaralarını ayarlar. Küçükler için sevimli, büyükler için şaşırtıcı!
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ── HİZMET 5: PALYAÇO & ANİMASYON ── */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="text-xs font-semibold text-[#f8b500] tracking-wider uppercase mb-3 block">05 — Animasyon</span>
                <h3 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  Palyaço & Animasyon Ekibi
                </h3>
                <p className="text-white/80 mb-4" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", lineHeight: 1.75 }}>
                  Profesyonel palyaço ve animatör ekibimiz etkinlik boyunca grup oyunları, müzikli danslar, kar show'u, konfeti partisi, pinyata ve sosis balon yapımı ile çocukları aktif tutar. Hiçbir çocuk kenarda kalmaz!
                </p>
                <p className="text-white/65 text-sm md:text-base" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                  Yaş grubuna özel oyunlar, komik skeçler ve sürpriz aktivitelerle dolu bir animasyon programı.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <ServiceGallery images={[
                  { src: "/content/images/palyaco/palyacoanaherogrupoyunlari.webp", alt: "Palyaço grup oyunları doğum günü İstanbul" },
                  { src: "/content/images/palyaco/palyacogrupoyunlari.webp", alt: "Çocuk animasyon etkinliği İstanbul" },
                  { src: "/content/images/palyaco/palyaconattiveguleryuz.webp", alt: "Profesyonel palyaço kiralama İstanbul" },
                ]} />
              </div>
            </div>
          </div>
        </section>


        {/* ── NEFES SLİDER 3 ── */}
        <BreathSlider images={[
          { src: "/profesyoneldogumgunucekimleri/_DSF7373.webp", alt: "Çocuk doğum günü partisi profesyonel fotoğraf" },
          { src: "/profesyoneldogumgunucekimleri/_DSF7167.webp", alt: "Doğum günü kutlaması profesyonel çekim" },
          { src: "/profesyoneldogumgunucekimleri/_DSF8163.webp", alt: "Doğum günü organizasyonu mutlu anlar" },
        ]} />


        {/* ── HİZMET 6: KOSTÜMLÜ KARAKTER ── */}
        <section className="bg-[#0a0a0f]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <ServiceGallery images={[
                  { src: "/content/images/Kostumlukarakterler/elsaheroo.webp", alt: "Elsa kostümlü karakter kiralama İstanbul" },
                  { src: "/content/images/Kostumlukarakterler/pamuksprenseshero.webp", alt: "Pamuk Prenses karakter kiralama doğum günü" },
                  { src: "/content/images/Kostumlukarakterler/spidermanonemli.webp", alt: "Spiderman karakter kiralama İstanbul" },
                ]} />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#f8b500] tracking-wider uppercase mb-3 block">06 — Karakter</span>
                <h3 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  Kostümlü Karakter
                </h3>
                <p className="text-white/80 mb-4" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", lineHeight: 1.75 }}>
                  Elsa, Pamuk Prenses, Spiderman, Batman ve daha fazlası! Seçeceğiniz 1 kostümlü karakter etkinlik boyunca çocuklarla birlikte olur, fotoğraf çeker, dans eder ve özel anlar yaratır.
                </p>
                <p className="text-white/65 text-sm md:text-base" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                  Profesyonel kostümler, karaktere uygun davranış ve çocuklarla özel bağ kurma yeteneği ile unutulmaz bir deneyim.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ── HİZMET 7: YÜZ BOYAMA ── */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="text-xs font-semibold text-[#f8b500] tracking-wider uppercase mb-3 block">07 — Makyaj</span>
                <h3 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  Profesyonel Yüz Boyama & Glitter
                </h3>
                <p className="text-white/80 mb-4" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", lineHeight: 1.75 }}>
                  Profesyonel makeup artistlerimiz çocukların en sevdikleri karakterlere dönüşmesini sağlar. Hijyenik, kaliteli ve cilt dostu malzemeler kullanarak her çocuğa özel ilgi gösteriyoruz.
                </p>
                <p className="text-white/65 text-sm md:text-base" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                  Glitter, face painting ve karakter makyajı ile partiye adım atar atmaz çocuklar kendilerini özel hisseder. Hayal gücünün sınırı yok!
                </p>
              </div>
              <div className="order-1 md:order-2">
                <ServiceGallery images={[
                  { src: "/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp", alt: "Profesyonel yüz boyama İstanbul doğum günü" },
                  { src: "/content/images/profesyonelmakeup/profesyonelyuzboyamasianafoto.webp", alt: "Çocuk yüz boyama etkinliği İstanbul" },
                  { src: "/content/images/profesyonelmakeup/profesyonelmakeupistanbul.webp", alt: "Profesyonel makyaj ve yüz boyama İstanbul" },
                ]} />
              </div>
            </div>
          </div>
        </section>


        {/* ── NEFES SLİDER 4 ── */}
        <BreathSlider images={[
          { src: "/profesyoneldogumgunucekimleri/_DSF8163.webp", alt: "Doğum günü organizasyonu mutlu anlar" },
          { src: "/profesyoneldogumgunucekimleri/_DSF7409.webp", alt: "İstanbul doğum günü organizasyonu profesyonel" },
          { src: "/profesyoneldogumgunucekimleri/_DSF8233.webp", alt: "Gümüş disco parti doğum günü çekimi" },
        ]} />


        {/* ── HİZMET 8: SES SİSTEMİ ── */}
        <section className="bg-[#0a0a0f]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <ServiceGallery images={[
                  { src: "/content/images/fullpaket/hareketlislider7popcorn.webp", alt: "Party box ses sistemi doğum günü İstanbul" },
                  { src: "/content/images/fullpaket/hareketlislider3yeni.webp", alt: "Etkinlik kurulumu ses sistemi organizasyon" },
                  { src: "/content/images/fullpaket/hareketlisliderfotograf4.webp", alt: "Profesyonel etkinlik ses ve sahne düzeni" },
                ]} />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#f8b500] tracking-wider uppercase mb-3 block">08 — Ses & Müzik</span>
                <h3 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  Party Box Ses Sistemi
                </h3>
                <p className="text-white/80 mb-4" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", lineHeight: 1.75 }}>
                  Profesyonel party box ses sistemi ve mikrofon ile etkinlik boyunca kaliteli ses deneyimi. Özel playlist hazırlayarak her anın enerjisini doğru müzikle destekliyoruz.
                </p>
                <p className="text-white/65 text-sm md:text-base" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                  Karşılamadan vedaya kadar uygun ses seviyesi ve müzik seçimi. Oyunlar, danslar ve gösteriler için özel ses efektleri dahil!
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           5. GÜVEN — Neden biz?
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.25em] text-xs text-[#f8b500] mb-4 font-semibold">Neden Best Event?</p>
              <h2 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.025em" }}>
                Bir organizasyondan fazlası
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.15rem)", lineHeight: 1.7 }}>
                Doğum günü, yılın tek günü. Biz bu günü detayların uyumlu bir hikâyeye dönüştüğü deneyime çeviriyoruz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-16">
              {[
                { title: "Tek ekip, uyumlu akış", desc: "Süsleme, pasta, gösteriler, animasyon — tüm unsurlar aynı ekip tarafından, birbirine uyumlu planlama ile yönetilir." },
                { title: "Net bütçe, şeffaf süreç", desc: "Paket fiyatınız bellidir. Son dakika sürprizi, ek maliyet ya da karışıklık yaşamazsınız." },
                { title: "Yaşa özel içerik", desc: "Oyunlar, gösteriler ve temponun tümü çocuğun yaşına göre ayarlanır. Enerji doğru anda yükselir, doğru anda dinlenir." },
                { title: "Zamanında kurulum", desc: "Ekibimiz misafirler gelmeden önce alanda olur. Sahne tamamen hazır, siz sadece partinin tadını çıkarırsınız." },
              ].map((v, i) => (
                <div key={i} className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500">
                  <div className="absolute top-5 right-5 text-4xl font-bold text-white/[0.06] group-hover:text-white/[0.1] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-white font-semibold mb-2 relative z-10" style={{ fontFamily: font.display, fontSize: "clamp(1.1rem, 1.75vw, 1.3rem)", letterSpacing: "-0.02em" }}>
                    {v.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed relative z-10" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Güven metni */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0f0f18] via-[#0a0a12] to-[#0f0f18] p-8 md:p-12 border border-white/[0.06] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,181,0,0.08),transparent_50%)] pointer-events-none" />
              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
                <p className="text-white/90 font-medium" style={{ fontFamily: font.text, fontSize: "clamp(1.1rem, 2vw, 1.4rem)", lineHeight: 1.5, letterSpacing: "-0.015em" }}>
                  <strong className="text-white">Best Event</strong>, İstanbul'da yüzlerce başarılı etkinliğe imza atmış profesyonel bir organizasyon firmasıdır. Çocuk doğum günlerinden kurumsal etkinliklere kadar, her organizasyonda deneyimli ekibiyle güvenle tercih edilir.
                </p>
                <p className="text-white/75" style={{ fontFamily: font.text, fontSize: "clamp(1rem, 1.6vw, 1.1rem)", lineHeight: 1.7 }}>
                  Siz konsepti, tarihi ve adresi söylersiniz. Ekibimiz karşılamadan vedaya kadar tüm süreci yönetir. Ortaya, çocuğunuzun ve misafirlerinizin uzun süre hatırlayacağı bir gün çıkar.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           GALERİ — Profesyonel çekimler
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-[#0a0a0f] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <div className="text-center mb-12">
              <h2 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.025em" }}>
                Profesyonel Çekimlerden Kareler
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { src: "/profesyoneldogumgunucekimleri/anaherodogumgunu.webp", alt: "Doğum günü organizasyonu ana görsel" },
                { src: "/profesyoneldogumgunucekimleri/dogumgunuonemlı1.webp", alt: "Doğum günü organizasyonu önemli an" },
                { src: "/profesyoneldogumgunucekimleri/_DSF7022.webp", alt: "Profesyonel doğum günü fotoğrafı" },
                { src: "/profesyoneldogumgunucekimleri/_DSF7051.webp", alt: "Çocuk doğum günü partisi" },
                { src: "/profesyoneldogumgunucekimleri/_DSF7409.webp", alt: "İstanbul doğum günü organizasyonu" },
                { src: "/profesyoneldogumgunucekimleri/_DSF8233.webp", alt: "Profesyonel parti fotoğraf çekimi" },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-white/[0.08]">
                  <img
                    src={img.src}
                    srcSet={generateSrcSet(img.src)}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    alt={img.alt}
                    className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           6. AKSİYON — WhatsApp Form
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="rezervasyon" className="bg-[#050509] border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center mb-10">
              <h2 className="font-bold text-white mb-3" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.025em" }}>
                Hemen Rezervasyon Yapın
              </h2>
              <p className="text-white/70" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.15rem)", lineHeight: 1.7 }}>
                Formu doldurun, anında geri dönüş yapalım.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#128C7E] to-[#075E54] border-2 border-[#25D366]/30 px-6 py-6 md:px-7 md:py-7 shadow-[0_20px_60px_rgba(37,211,102,0.25)] relative">
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <div className="relative">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
                </div>
                <span className="text-[10px] text-[#DCF8C6] font-medium">Çevrimiçi</span>
              </div>

              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-white/20">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
                </div>
                <p className="text-white font-semibold text-base">WhatsApp Rezervasyon</p>
              </div>

              <p className="text-[#DCF8C6] text-xs mb-6 leading-relaxed">
                Formu gönderdiğinizde çevrimiçi rezervasyon sorumlumuza mesaj gelir ve size anında geri dönüş yapılır.
              </p>

              <div className="grid gap-4">
                <div>
                  <label className="block text-xs text-white/90 font-medium mb-1.5">Ad Soyad</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors" placeholder="Adınız ve soyadınız" />
                </div>
                <div>
                  <label className="block text-xs text-white/90 font-medium mb-1.5">Telefon</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors" placeholder="+90 5XX XXX XX XX" />
                </div>
                <div>
                  <label className="block text-xs text-white/90 font-medium mb-1.5">Etkinlik Adresi</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors" placeholder="İlçe, mahalle" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-white/90 font-medium mb-1.5">Tarih</label>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#25D366] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-white/90 font-medium mb-1.5">Saat</label>
                    <input type="time" name="time" value={formData.time} onChange={handleInputChange} className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#25D366] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/90 font-medium mb-1.5">Konsept / Notlar</label>
                  <textarea rows={3} name="notes" value={formData.notes} onChange={handleInputChange} className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors resize-none" placeholder="Örn: Spiderman konsepti, 20 çocuk" />
                </div>
              </div>

              <button type="button" onClick={sendWhatsAppMessage} className="mt-5 w-full rounded-xl bg-white text-[#128C7E] font-bold text-sm md:text-base py-3.5 shadow-lg hover:shadow-xl hover:bg-[#DCF8C6] transition-all duration-300 flex items-center justify-center gap-2 group">
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                WhatsApp'a Gönder ve Anında Yanıt Al
              </button>

              <p className="text-xs text-center text-[#DCF8C6] mt-4">
                Bilgileriniz güvenle saklanır ve sadece rezervasyon için kullanılır
              </p>
            </div>
          </div>
        </section>


        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           SEO Hizmet Detayları — Doğum Günü Organizasyonu
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative bg-[#050509] border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.06),_transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(251,146,60,0.05),_transparent_50%)] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.3em] text-xs text-orange-400 mb-4 font-medium">İstanbul Doğum Günü Organizasyonu</p>
              <h2
                className="font-semibold text-white"
                style={{
                  fontFamily: font.display,
                  fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.025em"
                }}
              >
                Doğum Günü Organizasyonu Hizmetlerimiz
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  num: '01',
                  title: 'Çocuk Doğum Günü Organizasyonu',
                  text: 'Çocuk doğum günü organizasyonu hizmetimiz; palyaço, sihirbaz, bubble show, pamuk şeker arabası, balon süsleme ve animatör oyun ablası dahil tam paket organizasyon sunar. 1 yaş, 2 yaş, 3 yaş ve büyük çocuk doğum günü partileri için özel paketler.',
                  accent: 'border-purple-500/20',
                  tag: 'border-purple-500/30 text-purple-300',
                },
                {
                  num: '02',
                  title: 'Doğum Günü Organizasyon Paketleri',
                  text: 'Doğum günü organizasyon paketleri; etkinlik süresi, misafir sayısı, seçilen aktiviteler ve dekorasyon detaylarına göre belirlenir. Doğum günü organizasyon fiyatları için WhatsApp\'tan hızlı teklif alın. Standart paket, premium paket ve full paket organizasyonu seçenekleri.',
                  accent: 'border-pink-500/20',
                  tag: 'border-pink-500/30 text-pink-300',
                },
                {
                  num: '03',
                  title: 'Tema Bazlı Doğum Günü Partisi',
                  text: 'Tema doğum günü partisi seçenekleri; Frozen, Mickey Mouse, Spiderman, Barbie, Süper Kahramanlar, Atlı Karınca, Futbol gibi onlarca konseptle çocuğunuzun hayal dünyasına uygun bir parti hazırlıyoruz. Tema bazlı dekorasyon, kostümler ve aktiviteler dahil.',
                  accent: 'border-orange-500/20',
                  tag: 'border-orange-500/30 text-orange-300',
                },
                {
                  num: '04',
                  title: 'Doğum Günü Etkinlik Hizmetleri',
                  text: 'Doğum günü etkinlikleri için 10+ yıl deneyim, 5000+ başarılı organizasyon, 5⭐ Google yorumu. Doğum günü partisi, doğum günü kutlama yerleri, doğum günü hazırlıkları konularında uzman ekibimiz; sözleşmeli güvence ile İstanbul\'un her ilçesine hizmet veriyor.',
                  accent: 'border-amber-500/20',
                  tag: 'border-amber-500/30 text-amber-300',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group p-7 rounded-2xl border ${item.accent} bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                      {item.num}
                    </span>
                    <span className={`text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${item.tag} font-medium`}>
                      Hizmet
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 leading-tight" style={{ fontFamily: font.display }}>{item.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: font.text }}>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <p className="text-white/40 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                Doğum günü organizasyonu hizmetimiz İstanbul'un tüm ilçelerine (Kadıköy, Ataşehir, Üsküdar, Beşiktaş, Şişli, Bakırköy, Pendik, Maltepe, Beylikdüzü, Ümraniye) gönderim yapmaktadır.
              </p>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           SSS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-[#0a0a0f] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-semibold text-white mb-8" style={{ fontFamily: font.display, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.025em" }}>
              Sıkça Sorulan Sorular
            </h2>
            <div className="divide-y divide-white/10 border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-sm shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
              {faqs.map((item, idx) => (
                <button key={idx} type="button" onClick={() => setOpenFaq((c) => (c === idx ? -1 : idx))} className="w-full text-left px-5 md:px-6 py-4 md:py-5 focus:outline-none">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-medium text-white text-base md:text-lg" style={{ fontFamily: font.text, lineHeight: 1.5, letterSpacing: "-0.011em" }}>
                      {item.q}
                    </p>
                    <span className="text-lg text-white/70 flex-shrink-0">{openFaq === idx ? "–" : "+"}</span>
                  </div>
                  {openFaq === idx && (
                    <p className="mt-3 text-white/75 text-sm md:text-base leading-relaxed" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                      {item.a}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        <DeferredContentAccordion serviceKey="dogum-gunu-organizasyonu" />

        <RelatedBlogPosts servicePath="/organizasyonlar/dogum-gunu-organizasyonu" />

        <RelatedServices currentService="dogum-gunu-organizasyonu" />

        <AuthorExpertise serviceName="Doğum Günü Organizasyonu" />
      </main>
    </>
  );
};

export default FullBirthdayOrganization;
