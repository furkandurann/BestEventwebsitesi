import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Seo from "../../components/Seo";
import { createServiceSchema } from "../../utils/schemaHelpers";
import AdHero from "../../components/AdHero";
import BirthdayHeroSlider from "../../components/BirthdayHeroSlider";
import RelatedServices from "../../components/RelatedServices";
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

/* ── Mini Slider Bileşeni ── */
const MiniSlider = ({ images, height = "h-[400px] md:h-[500px]" }) => (
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    pagination={{ clickable: true, dynamicBullets: true }}
    loop={true}
    className={`w-full rounded-2xl overflow-hidden ${height}`}
  >
    {images.map((img, i) => (
      <SwiperSlide key={i}>
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover"
          loading="lazy"
          width={1200}
          height={800}
          decoding="async"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

/* ── Çerçeveli Ara Slider ── */
const BreathSlider = ({ images }) => (
  <div className="bg-[#050509] px-4 md:px-8 lg:px-12 py-6 md:py-10">
    <div className="relative w-full h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-[0_8px_50px_rgba(0,0,0,0.6)] border border-white/[0.08]">
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
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
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

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendWhatsAppMessage = () => {
    const msg = `🎉 *Doğum Günü Organizasyonu Talebi*\n\n📝 *Ad Soyad:* ${formData.name || "Belirtilmedi"}\n📞 *Telefon:* ${formData.phone || "Belirtilmedi"}\n📍 *Adres:* ${formData.address || "Belirtilmedi"}\n📅 *Tarih:* ${formData.date || "Belirtilmedi"}\n🕐 *Saat:* ${formData.time || "Belirtilmedi"}\n📋 *Konsept/Notlar:* ${formData.notes || "Belirtilmedi"}`;
    window.open(`https://wa.me/905307309009?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <Seo
        title="Doğum Günü Organizasyonu İstanbul | Full Paket - BestEvent"
        description="İstanbul'da doğum günü organizasyonu. Konsept süsleme, organik pasta, bubble show, sihirbazlık, palyaço animasyonu tek pakette. ☎ 0530 730 90 09"
        keywords={["istanbul doğum günü organizasyonu", "doğum günü gösterisi", "doğum günü kiralama", "doğum günü etkinliği", "istanbul doğum günü hizmetleri", "full paket doğum günü"]}
        canonicalPath="/organizasyonlar/dogum-gunu-organizasyonu"
        image="/profesyoneldogumgunucekimleri/anaherodogumgunu.webp"
        schema={[
          serviceSchema,
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
              { "@type": "ListItem", position: 2, name: "Doğum Günü Organizasyonu", item: "https://bestevent.com.tr/organizasyonlar/dogum-gunu-organizasyonu" },
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
        backgroundImage="/profesyoneldogumgunucekimleri/anaherodogumgunu.webp"
      />

      <main className="bg-[#050509] text-white">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           1. HERO SLIDER — Dikkat yakala
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <BirthdayHeroSlider />


        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           2. VAAT — Ne sunuyoruz?
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050509] to-[#0a0a10] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,122,24,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12), transparent 35%)" }} />

          <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-40 text-center">
            <h1
              className="font-bold text-white mb-6"
              style={{ fontFamily: font.display, fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)", lineHeight: 1.05, letterSpacing: "-0.04em" }}
            >
              Doğum Günü Organizasyonu
            </h1>

            <h2
              className="font-semibold text-white/90 mb-10"
              style={{ fontFamily: font.display, fontSize: "clamp(1.35rem, 3.2vw, 2.25rem)", lineHeight: 1.2, letterSpacing: "-0.025em" }}
            >
              Tek Paket. Tek Ekip. Tek Muhatap.
            </h2>

            <p className="text-white/80 mb-6 max-w-3xl mx-auto" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", lineHeight: 1.75 }}>
              Best Event olarak her detayı düşündük, planladık, yüzlerce defa uyguladık. Konsept süslemeden organik pastaya, bubble show'dan sihirbazlık gösterisine, yüz boyamadan profesyonel fotoğraf çekimine kadar — her şey tek pakette.
            </p>

            <p className="text-white/60 mb-14 max-w-2xl mx-auto" style={{ fontFamily: font.text, fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", lineHeight: 1.65 }}>
              Konsept Süsleme · Organik Pasta · Bubble Show · Sihirbazlık · Kostümlü Karakter · Palyaço · Yüz Boyama · Party Box Ses Sistemi
            </p>

            <a
              href="#rezervasyon"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-10 py-4 font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105"
              style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}
            >
              <WhatsAppIcon />
              Hemen Bilgi Al
            </a>
          </div>
        </section>


        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           3. AKIŞ — 3 saatte neler olur?
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-[#0a0a0f] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.25em] text-xs text-[#FF6B00] mb-4 font-semibold">Etkinlik Akışı</p>
              <h2 className="font-bold text-white mb-4" style={{ fontFamily: font.display, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.035em" }}>
                3 Saatte Neler Olur?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto" style={{ fontFamily: font.text, fontSize: "clamp(1.05rem, 1.6vw, 1.15rem)", lineHeight: 1.7 }}>
                Karşılamadan vedaya, dakikası dakikasına planlanmış profesyonel akış.
              </p>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { time: "0–40 dk", title: "Karşılama + Yüz Boyama", desc: "Çocuklar karakterlerle tanışır, profesyonel yüz boyama ile parti havasına girer. Aileler rahatça yerleşir." },
                { time: "40–80 dk", title: "Oyunlar + Danslar", desc: "Yaş grubuna göre seçilen grup oyunları, müzikli aktiviteler ve yarışmalarla enerji yükselir. Hiçbir çocuk kenarda kalmaz." },
                { time: "80–100 dk", title: "Pasta Seremonisi", desc: "Konsept pastayla mumlar üflenir, aile fotoğrafları çekilir. Işıklar, müzik ve konfetilerle duygusal bir an." },
                { time: "100–130 dk", title: "Bubble Show – 30 dk", desc: "Dev baloncukların içine giren çocuklar, rengarenk köpükler ve sahne efektleri. Videoluk anlar garanti." },
                { time: "130–160 dk", title: "Sihirbazlık – 30 dk", desc: "Tavşan, güvercin ve interaktif numaralarla dolu komedi ağırlıklı bir şov. Çocuklar gösterinin parçası olur." },
                { time: "160–180 dk", title: "Final + Veda", desc: "Pinyata, sosis balon dağıtımı, toplu fotoğraf ve güçlü bir finalle etkinlik tamamlanır." },
              ].map((step, i) => (
                <div key={i} className="flex gap-5 items-start group">
                  <div className="flex-shrink-0 w-20 md:w-24 text-right pt-1">
                    <span className="text-xs font-bold text-[#FF6B00] tracking-wider">{step.time}</span>
                  </div>
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF6B00] border-2 border-[#0a0a0f] z-10" />
                    {i < 5 && <div className="w-px flex-1 bg-white/10 mt-1" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-white font-semibold text-lg md:text-xl mb-1.5" style={{ fontFamily: font.display, letterSpacing: "-0.02em" }}>
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed" style={{ fontFamily: font.text, lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


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
                <MiniSlider images={[
                  { src: "/content/images/konseptdogumgunu/karkonsept.webp", alt: "Kar konsept doğum günü süslemesi İstanbul" },
                  { src: "/content/images/konseptdogumgunu/karkonsept2.webp", alt: "Konsept doğum günü dekorasyonu İstanbul" },
                  { src: "/content/images/konseptdogumgunu/kirazkonsept.webp", alt: "Kiraz konsept doğum günü süslemesi" },
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
                <MiniSlider images={[
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
                <MiniSlider images={[
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
                <MiniSlider images={[
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
                <MiniSlider images={[
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
                <MiniSlider images={[
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
                <MiniSlider images={[
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
                <MiniSlider images={[
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
                  <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
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

        <RelatedServices currentService="dogum-gunu-organizasyonu" />
      </main>
    </>
  );
};

export default FullBirthdayOrganization;
