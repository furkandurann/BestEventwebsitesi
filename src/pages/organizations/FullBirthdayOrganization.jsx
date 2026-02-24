import React, { useState, useRef, useEffect } from "react";
import Seo from "../../components/Seo";
import BirthdayHeroSlider from "../../components/BirthdayHeroSlider";
import RelatedServices from "../../components/RelatedServices";

const timeline = [
  {
    time: "0–40 dk",
    title: "Karşılama + Yüz Boyama",
    desc: "Çocuklar karakterlerle tanışır, yüz boyama ile parti havasına girer.",
    image: "/content/images/fullpaket/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp",
  },
  {
    time: "40–80 dk",
    title: "Oyunlar + Danslar",
    desc: "Yaş grubuna göre seçilen grup oyunları ve müzikli aktivitelerle enerji yükselir.",
    image: "/content/images/palyaco/palyacoanaherogrupoyunlari.webp",
  },
  {
    time: "80–100 dk",
    title: "Pasta Seremonisi",
    desc: "Konsept pastayla mumlar üflenir, aile fotoğrafları için sahne hazırlanır.",
    image: "/content/images/fullpaket/pastanattivee1.webp",
  },
  {
    time: "100–130 dk",
    title: "Bubble Show – 30 Dakika",
    desc: "Çocuklar dev baloncukların içine girer; videoluk kareler garanti.",
    image: "/content/images/fullpaket/hareketlislider5bubbleshowgosteriler.webp",
  },
  {
    time: "130–160 dk",
    title: "Sihirbazlık Gösterisi – 30 Dakika",
    desc: "Tavşan, güvercin ve interaktif numaralarla dolu komedi ağırlıklı bir şov.",
    image: "/content/images/fullpaket/hareketlislider6osterilersihirbazhero.webp",
  },
  {
    time: "160–180 dk",
    title: "Final: Pinyata + Sosis Balon + Veda Fotoğrafı",
    desc: "Hediye dağıtımı, toplu fotoğraf ve güçlü bir finalle etkinlik tamamlanır.",
    image: "/content/images/fullpaket/hareketlisliderfotograf4.webp",
  },
];

const packageItems = [
  {
    title: "Konsept Doğum Günü Süslemesi",
    desc: "Balon kemeri, backdrop, masa düzeni ve konseptin tüm detayları. Fotoğraflar için kusursuz bir sahne kuruyoruz.",
    image: "/content/images/fullpaket/konseptnattive.webp",
  },
  {
    title: "Organik Şef Pastası",
    desc: "Cordon bleu eğitimli şefimizin hazırladığı, konseptinize özel, %100 organik pasta. Hem lezzeti hem görünümüyle günün yıldızı.",
    image: "/content/images/fullpaket/pastanattivee1.webp",
  },
  {
    title: "Bubble Show – 30 Dakika",
    desc: "Dev baloncuklar, sahne efektleri ve çocukların içine girebildiği büyülü anlar. Çocuklar için saf mutluluk.",
    image: "/content/images/fullpaket/hareketlislider5bubbleshowgosteriler.webp",
  },
  {
    title: "Sihirbazlık Gösterisi – 30 Dakika",
    desc: "Tavşan, güvercin ve interaktif numaralarla dolu eğlenceli bir performans. Çocuklar sadece izleyen değil, gösterinin parçası olur.",
    image: "/content/images/fullpaket/hareketlislider6osterilersihirbazhero.webp",
  },
  {
    title: "Palyaço & Kostümlü Karakter Animasyonu",
    desc: "Tüm etkinlik boyunca oyunlar, danslar, kar spreyi ve pinyata akışını profesyonel animatör ekibimiz yönetir.",
    image: "/content/images/palyaco/palyacoanaherogrupoyunlari.webp",
  },
  {
    title: "Profesyonel Yüz Boyama & Glitter",
    desc: "Hijyenik, kaliteli malzemelerle yapılan yüz boyama ve glitter detaylarıyla herkes sahneye hazır hale gelir.",
    image: "/content/images/fullpaket/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp",
  },
  {
    title: "Party Box Ses Sistemi (Hediye)",
    desc: "Etkinliğe özel playlist ve güçlü ses sistemiyle, ortamın enerjisi her an yüksek kalır.",
    image: "/content/images/fullpaket/hareketlislider7popcorn.webp",
  },
  {
    title: "Tam Zamanında Kurulum",
    desc: "Ekip, misafirler gelmeden önce alanda olur, tüm sahne kurulumu zamanında ve eksiksiz tamamlar.",
    image: "/content/images/fullpaket/hareketlislider3yeni.webp",
  },
];

const reasons = [
  {
    title: "Tek Noktadan Tüm Organizasyon",
    desc: "Süsleme, pasta, oyunlar, şovlar ve teknik detaylar için farklı kişilerle uğraşmazsınız. Her şeyi tek ekip yönetir.",
  },
  {
    title: "Sabit Bütçe, Sürpriz Masraf Yok",
    desc: "Dağınık hizmetler yerine tek bir net paket alırsınız. Ekstra maliyet, karışıklık veya son dakika sürprizi yaşamazsınız.",
  },
  {
    title: "Yaş Grubuna Göre Planlanan İçerik",
    desc: "Her oyun, her gösteri ve ritim; çocuğun yaşına göre ayarlanır. Enerji doğru anda yükselir, doğru anda dinlenir.",
  },
  {
    title: "Tam Zamanında Hazır Kurulum",
    desc: "Ekip, etkinlik başlamadan önce alanda olur. Tüm kurulum misafirler gelmeden tamamlanır.",
  },
];

// Caption Arrays - Her slider fotoğrafı için vurucu metinler
const makeupCaptions = [
  "KARAKTERİNE HAZIR OL",
  "PRENSES GİBİ HISSET",
  "KAHRAMAN OLMA ZAMANI",
  "HİJYENİK VE GÜVENLİ",
  "RENKLER VE GLİTTER",
  "HER YAŞA UYGUN",
  "PROFESYONEL ELİSİYLE",
  "CİLT DOSTU BOYALAR",
  "HAYALLERIN GERÇEK OLDU",
  "SAHNEYE HAZIR"
];

const pastaCaptions = [
  "SAĞLIKLI LEZZET",
  "KONSEPTE ÖZEL TASARIM"
];

const konseptCaptions = [
  "HAYALİNDEKİ TEMA",
  "KUSURSUZ SAHNE",
  "BALON KEMERLERİ",
  "RENKLER VE DETAYLAR",
  "FOTOĞRAF İÇİN HAZIR",
  "PROFESYONEL KURULUM",
  "BACKDROP DÜNYASI",
  "KONSEPT AKSESUARLAR",
  "MİSAFİRLER HAYRAN KALACAK",
  "UNUTULMAZ DEKORASYON"
];

const bubbleCaptions = [
  "COŞKUYA HAZIR OL",
  "BİNLERCE BALONCUK ALTINDA ÇOCUKLARIN ÇIĞLIKLARI",
  "ÇOK COŞKULU",
  "DEV BALONCUKLARIN İÇİNDE",
  "BÜYÜLÜ ANLAR",
  "HER YAŞA UYGUN EĞLENCE",
  "RENGARENK KÖPÜKLER",
  "UNUTULMAZ KARELER",
  "VİDEOLUK ANLAR",
  "SAF MUTLULUK"
];

const palyacoCaptions = [
  "KAHKAHA ZAMANIDA",
  "GRUP OYUNLARI",
  "DANS VE MÜZİK",
  "GÜLÜCÜKLER",
  "ÖZEL FOTOĞRAFLAR",
  "SEVGİ DOLU ANLAR",
  "SOSİS BALON YAPIMI",
  "KAR ŞÖLENI",
  "YÜZ BOYAMA",
  "RENKLER VE NEŞEler"
];

const karakterCaptions = [
  "EN SEVDİĞİN KARAKTER",
  "PRENSES BURADA",
  "KAHRAMAN COŞKUSU",
  "MINNIE İLE DANS",
  "BATMAN BURADA",
  "ELSA'NIN DÜNÜASI",
  "PAMUK PRENSES MASALI",
  "PAW PATROL MACERASI",
  "SPIDERMAN ENERJİSİ",
  "MICKEY İLE EĞLENCE"
];

const fotoCaptions = [
  "ÖZEL ANLAR",
  "VEDA FOTOĞRAFI",
  "GRUP EĞLENCE",
  "KONSEPT KARELER",
  "PROFESYONEL KARE",
  "DUYGUSAL ANLAR",
  "MUTLULUK KARELERI",
  "AİLE FOTOĞRAFLARI",
  "UNUTULMAZ ANLAR",
  "YILLARCA HATIRLANACAK"
];

const sesCaptions = [
  "ENERJİ YÜKSEK",
  "PROFESYONEL SES",
  "DOĞRU MÜZİK",
  "OYUNLAR İÇİN",
  "SAHNE DÜZENİ",
  "MÜZİKLİ AKTİVİTELER",
  "PASTA SERMONİSİ MÜZİĞİ",
  "KAR ŞÖLENI SOUNDTRACK",
  "PARTİ ATMOSFER",
  "GÖSTERİ MÜZİKLERİ"
];

const faqs = [
  {
    q: "Paket içeriğini kendi konseptimize göre uyarlayabiliyor musunuz?",
    a: "Evet. Konsept renginizi, tema tercihinizi ve özel isteklerinizi bizimle paylaştığınızda süsleme, pasta tasarımı ve sahne düzenini buna göre uyarlıyoruz.",
  },
  {
    q: "Organizasyon ne kadar sürüyor?",
    a: "Full Doğum Günü Organizasyonu toplam 3 saat sürer. Karşılama, oyunlar, pasta, bubble show, sihirbazlık ve final akışı bu süreye profesyonelce dağıtılır.",
  },
  {
    q: "Hangi bölgelerde hizmet veriyorsunuz?",
    a: "İstanbul’un tüm ilçelerinde hizmet veriyoruz. Uygun tarih ve saat için rezervasyonda adres bilgisiyle birlikte talebinizi iletmeniz yeterli.",
  },
  {
    q: "Çocukların güvenliği için nasıl önlemler alıyorsunuz?",
    a: "Ekipteki tüm animatörler çocuklarla iletişim konusunda deneyimli; kullanılan malzemeler çocuklara uygun ve güvenlidir. Akış boyunca sahne güvenliği ve alan düzenini de biz kontrol ederiz.",
  },
  {
    q: "Fiyat bilgisi nasıl paylaşılıyor?",
    a: "Etkinlik tarihi, adresi ve konsept detaylarını ilettiğinizde size özel net bir fiyatlandırma çıkarıyoruz. Fiyatı WhatsApp üzerinden yazılı olarak da iletiyoruz.",
  },
];

const FullBirthdayOrganization = () => {
  const [openFaq, setOpenFaq] = useState(0);
  
  // Slider Active Index States
  const [activeMakeupSlide, setActiveMakeupSlide] = useState(0);
  const [activePastaSlide, setActivePastaSlide] = useState(0);
  const [activeKonseptSlide, setActiveKonseptSlide] = useState(0);
  const [activeBubbleSlide, setActiveBubbleSlide] = useState(0);
  const [activePalyacoSlide, setActivePalyacoSlide] = useState(0);
  const [activeKarakterSlide, setActiveKarakterSlide] = useState(0);
  const [activeFotoSlide, setActiveFotoSlide] = useState(0);
  const [activeSesSlide, setActiveSesSlide] = useState(0);
  
  // WhatsApp Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Bubble Show - Basit Scroll Tracking
  const handleBubbleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.scrollWidth / 10; // 10 foto var
    const activeIndex = Math.round(scrollLeft / itemWidth);
    setActiveBubbleSlide(activeIndex);
  };

  const sendWhatsAppMessage = () => {
    const message = `🎉 *Doğum Günü Organizasyonu Talebi*

📝 *Ad Soyad:* ${formData.name || 'Belirtilmedi'}
📞 *Telefon:* ${formData.phone || 'Belirtilmedi'}
📍 *Adres:* ${formData.address || 'Belirtilmedi'}
📅 *Tarih:* ${formData.date || 'Belirtilmedi'}
🕐 *Saat:* ${formData.time || 'Belirtilmedi'}
📋 *Konsept/Notlar:* ${formData.notes || 'Belirtilmedi'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905307309009?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Seo
        title="Doğum Günü Organizasyonu İstanbul | Full Paket - BestEvent"
        description="İstanbul'da doğum günü organizasyonu. Konsept süsleme, organik pasta, bubble show, sihirbazlık, palyaço animasyonu tek pakette. ☎ 0530 730 90 09"
        keywords={['istanbul doğum günü organizasyonu', 'doğum günü gösterisi', 'doğum günü kiralama', 'doğum günü etkinliği', 'istanbul doğum günü hizmetleri', 'full paket doğum günü']}
        canonicalPath="/organizasyonlar/dogum-gunu-organizasyonu"
        image="/content/images/fullpaket/hareketlislider1konseptdogumgunubaslikk.webp"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Best Event - Doğum Günü Organizasyonu",
            "image": "https://bestevent.com.tr/content/images/fullpaket/hareketlislider1konseptdogumgunubaslikk.webp",
            "description": "İstanbul'da profesyonel doğum günü organizasyonu hizmeti. Konsept süsleme, organik pasta, bubble show, sihirbazlık gösterisi ve animasyon.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressCountry": "TR"
            },
            "telephone": "+905307309009",
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": "İstanbul"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Doğum Günü Organizasyon Hizmetleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full Doğum Günü Organizasyonu",
                    "description": "Konsept süsleme, organik pasta, bubble show, sihirbazlık, palyaço animasyonu, kostümlü karakter, yüz boyama ve ses sistemi dahil tam paket organizasyon."
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://bestevent.com.tr" },
              { "@type": "ListItem", "position": 2, "name": "Doğum Günü Organizasyonu", "item": "https://bestevent.com.tr/organizasyonlar/dogum-gunu-organizasyonu" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          }
        ]}
      />

      <main className="bg-[#050509] text-white">
        {/* CINEMATIK HERO SLIDER */}
        <BirthdayHeroSlider />

        {/* Tek Paket blok */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0a10] via-[#050509] to-[#0a0a10]">
          <div className="absolute inset-0 opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,122,24,0.3), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15), transparent 35%)'
              }}
            />
          </div>
          
          <div className="relative">
            {/* Apple Minimal Hero Section */}
            <div className="min-h-[85vh] flex items-center justify-center px-6 py-24 md:py-32">
              <div className="max-w-5xl mx-auto text-center">
                {/* Ana Başlık - H1 */}
                <h1 
                  className="font-semibold text-white mb-6 md:mb-8"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                    fontSize: 'clamp(2.75rem, 7vw, 6rem)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.04em',
                    fontWeight: '700'
                  }}
                >
                  Doğum Günü Organizasyonu İstanbul
                </h1>

                {/* Alt Başlık - H2 */}
                <h2 
                  className="font-medium text-white/95 mb-8 md:mb-12"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.025em',
                    fontWeight: '600'
                  }}
                >
                  Tek Paket. Tek Ekip. Tek Muhattap.
                </h2>

                {/* ,Etkinlik Listesi */}
                <p 
                  className="text-white/75 mb-16 md:mb-20 px-4"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                    fontSize: 'clamp(1rem, 1.85vw, 1.25rem)',
                    lineHeight: '1.6',
                    letterSpacing: '-0.011em',
                    fontWeight: '400'
                  }}
                >
                  Konsept Süsleme • %100 Organik Pasta • Bubble Show • Magic Show<br className="hidden sm:block" />
                  Kostümlü Karakter • Palyaço • Yüz Boyama • Party Box
                </p>

                {/* AKIŞ BAŞLIYOR - Turuncu Büyük */}
                <h3 
                  className="font-bold mb-12 md:mb-16"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                    fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.035em',
                    fontWeight: '700',
                    color: '#FF6B00'
                  }}
                >
                  AKIŞ BAŞLIYOR
                </h3>

                {/* Akış Açıklaması */}
                <div className="max-w-3xl mx-auto">
                  <p 
                    className="text-white mb-4"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                      fontSize: 'clamp(1.25rem, 2.25vw, 1.625rem)',
                      lineHeight: '1.4',
                      letterSpacing: '-0.018em',
                      fontWeight: '500'
                    }}
                  >
                    Best Event olarak her detayı düşündük, planladık, yıllardır yüzlerce defa uyguladık.
                  </p>
                  <p 
                    className="text-white/75"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                      fontSize: 'clamp(1rem, 1.65vw, 1.1875rem)',
                      lineHeight: '1.6',
                      letterSpacing: '-0.011em',
                      fontWeight: '400'
                    }}
                  >
                    Tüm aileler halen daha konuşulan unutulmaz doğum günleri yaşattık
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* MODÜL 1: PROFESYONEL MAKEUP & YÜZ BOYAMA */}
        <section className="bg-[#0a0a0f] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            {/* Başlık + Slogan */}
            <div className="text-center mb-12">
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '700'
                }}
              >
                Profesyonel Makeup & Yüz Boyama
              </h2>
              <h3 
                className="text-[#f8b500]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                  fontWeight: '500'
                }}
              >
                Karakterine Hazır Ol!
              </h3>
            </div>

            {/* Horizontal Scroll Galeri */}
            <div className="relative mb-12">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                  {[
                    'istanbulprofesyonelyuzboyasietkinligibakirkoy.webp',
                    'profesyonelyuzboyamasianafoto.webp',
                    'profesyonelmakeupistanbul.webp',
                    'istanbulprofesyonelyuzboyasietkinligi.webp',
                    'profesyonelyuzboyamasiacu4.webp',
                    'istanbulprofesyonelyuzboyasietkinligibeyoglu.webp',
                    'profesyonelyuzboyamasıacu.webp',
                    'profesyonelyuzboyamasıacu2.webp',
                    'profesyonelyuzboyamasıacu3.webp',
                    'profesyonel.webp'
                  ].map((img, idx) => (
                    <div
                      key={idx}
                      className="flex-none w-[95vw] md:w-[90vw] lg:w-[85vw] rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <img
                        src={`/content/images/profesyonelmakeup/${img}`}
                        alt={`Profesyonel yüz boyama ${idx + 1}`}
                        className="w-full h-[450px] md:h-[520px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Apple Style Açıklama - Slider Altı */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h4 
                className="text-white font-semibold mb-3"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.5rem, 3.25vw, 2.125rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.024em',
                  fontWeight: '600'
                }}
              >
                Her çocuk, hayalindeki karaktere dönüşüyor.
              </h4>
              <p 
                className="text-white/75"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.0625rem, 1.85vw, 1.1875rem)',
                  lineHeight: '1.6',
                  letterSpacing: '-0.011em',
                  fontWeight: '400'
                }}
              >
                Hijyenik malzemeler ve cilt dostu boyalarla profesyonel makyaj. Prenses, kahraman ya da hayvan karakteri. Hayal gücünün sınırı yok.
              </p>
            </div>

            {/* SEO Açıklama */}
            <div className="max-w-4xl mx-auto text-center">
              <p 
                className="text-white/85 mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.0625rem, 1.75vw, 1.125rem)',
                  lineHeight: '1.65',
                  letterSpacing: '-0.011em',
                  fontWeight: '400'
                }}
              >
                Profesyonel makeup artistlerimiz ve yüz boyama uzmanlarımız, çocukların en sevdikleri karakterlere dönüşmesini sağlar. Hijyenik, kaliteli ve cilt dostu malzemeler kullanarak, her çocuğa özel ilgi gösteriyoruz.
              </p>
              <p 
                className="text-white/70"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  letterSpacing: '-0.008em',
                  fontWeight: '400'
                }}
              >
                Glitter, face painting ve karakter makyajı ile doğum günü partiniz başlar başlamaz çocuklar kendilerini özel hisseder. Prenses, kahraman, hayvan karakterleri ve daha fazlası... Hayal gücünün sınırı yok!
              </p>
            </div>
          </div>
        </section>

        {/* MODÜL 2: %100 ORGANİK PASTA */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '700'
                }}
              >
                %100 Organik Şef Pastası
              </h2>
              <h3 
                className="text-[#f8b500]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                  fontWeight: '500'
                }}
              >
                Cordon Bleu Şef'ten, Sağlıklı Lezzet
              </h3>
            </div>

            <div className="relative mb-12">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                  {[
                    'pastanattivee1.webp',
                    'hareketlislider1konseptdogumgunubaslikk.webp'
                  ].map((img, idx) => (
                    <div
                      key={idx}
                      className="flex-none w-[95vw] md:w-[90vw] lg:w-[85vw] rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <img
                        src={`/content/images/fullpaket/${img}`}
                        alt={`Organik pasta ${idx + 1}`}
                        className="w-full h-[450px] md:h-[520px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p 
                className="text-white/85 mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.0625rem, 1.75vw, 1.125rem)',
                  lineHeight: '1.65',
                  letterSpacing: '-0.011em',
                  fontWeight: '400'
                }}
              >
                Cordon Bleu eğitimi almış şefimiz, her pastayı özel olarak tasarlar ve hazırlar. %100 organik malzemeler kullanılır; ilave şeker, yağ veya krem şanti yoktur. Konseptinize özel tasarım, hem görsel hem de lezzet açısından unutulmaz bir deneyim sunar.
              </p>
              <p 
                className="text-white/70"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  letterSpacing: '-0.008em',
                  fontWeight: '400'
                }}
              >
                Elsa'dan Spiderman'e, Safari'den Prenses temasına kadar her konsepte uygun pasta tasarımı yapıyoruz. Sağlıklı, lezzetli ve estetik - tam da aradığınız pasta!
              </p>
            </div>
          </div>
        </section>

        {/* MODÜL 3: KONSEPT DOĞUM GÜNÜ + SÜSLEME */}
        <section className="bg-[#0a0a0f] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '700'
                }}
              >
                Konsept Doğum Günü & Süsleme
              </h2>
              <h3 
                className="text-[#f8b500]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                  fontWeight: '500'
                }}
              >
                Hayalindeki Tema, Gerçek Oluyor
              </h3>
            </div>

            <div className="relative mb-12">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                  {[
                    'karkonsept.webp',
                    'karkonsept2.webp',
                    'karkonısept3.webp',
                    'kirazkonsept.webp',
                    'kirazkonsept3.webp',
                    'kirazkonsept4.webp',
                    'lolbebekkonsept.webp',
                    'one1.webp',
                    'one11.webp',
                    'one12.webp'
                  ].map((img, idx) => (
                    <div
                      key={idx}
                      className="flex-none w-[95vw] md:w-[90vw] lg:w-[85vw] rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <img
                        src={`/content/images/konseptdogumgunu/${img}`}
                        alt={`Konsept süsleme ${idx + 1}`}
                        className="w-full h-[450px] md:h-[520px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p 
                className="text-white/85 mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.0625rem, 1.75vw, 1.125rem)',
                  lineHeight: '1.65',
                  letterSpacing: '-0.011em',
                  fontWeight: '400'
                }}
              >
                Elsa, Safari, Wednesday, Spiderman ve daha fazlası! İstediğiniz konsepti detaylarıyla birlikte hayata geçiriyoruz. Balon kemerleri, backdrop, masa düzeni, konsept aksesuarlar ve tema renklerine uygun tüm dekorasyon elementleri profesyonel ekibimiz tarafından kurulur.
              </p>
              <p 
                className="text-white/70"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  letterSpacing: '-0.008em',
                  fontWeight: '400'
                }}
              >
                Her detay fotoğraf çekimleri için kusursuz bir sahne yaratır. Misafirleriniz geldiklerinde, tam bir konsept dünyasına adım atacaklar.
              </p>
            </div>
          </div>
        </section>

        {/* MODÜL 4: BUBBLE SHOW GÖSTERİSİ */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '700'
                }}
              >
                Bubble Show Gösterisi
              </h2>
              <h3 
                className="text-[#f8b500]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                  fontWeight: '500'
                }}
              >
                Dev Baloncuklarla Büyülü 30 Dakika
              </h3>
            </div>

            {/* Bubble Show - Basit Çözüm: Scroll Event */}
            <div className="relative mb-6">
              <div className="overflow-x-auto scrollbar-hide" onScroll={handleBubbleScroll}>
                <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                  {[
                    { src: 'bubbleshow/bubbleshowhero.webp', alt: 'Bubble show hero' },
                    { src: 'ahunundogumgunu/minniebubblegosterisi.webp', alt: 'Minnie bubble gösterisi' },
                    { src: 'bubbleshow/bubbleshowslider2.webp', alt: 'Bubble show slider 2' },
                    { src: 'ahunundogumgunu/anaherobubbleshowgosterisi.webp', alt: 'Ana hero bubble show gösterisi' },
                    { src: 'bubbleshow/IMG_1797.webp', alt: 'Bubble show çocuklar' },
                    { src: 'ahunundogumgunu/heryasauygunbubbleshowpartisi.webp', alt: 'Her yaşa uygun bubble show partisi' },
                    { src: 'bubbleshow/bubbleshowslider3.webp', alt: 'Bubble show slider 3' },
                    { src: 'ahunundogumgunu/bubbleshowgosterisi.webp', alt: 'Bubble show gösterisi' },
                    { src: 'bubbleshow/bubbleshowslider5.webp', alt: 'Bubble show slider 5' },
                    { src: 'bubbleshow/bubbleshowslider.webp', alt: 'Bubble show slider 1' }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex-none w-[95vw] md:w-[90vw] lg:w-[85vw] rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <img
                        src={`/content/images/${item.src}`}
                        alt={item.alt}
                        className="w-full h-[450px] md:h-[520px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Apple Style Caption Bar */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f8b500]"></div>
                  <p 
                    className="text-white/90"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                      fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)',
                      letterSpacing: '-0.011em',
                      fontWeight: '500'
                    }}
                  >
                    {bubbleCaptions[activeBubbleSlide]}
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p 
                className="text-white/85 mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.0625rem, 1.75vw, 1.125rem)',
                  lineHeight: '1.65',
                  letterSpacing: '-0.011em',
                  fontWeight: '400'
                }}
              >
                30 dakika süren bubble show gösterimizde, dev baloncuklar, sahne efektleri ve çocukların içine girebildiği büyülü anlar var. Profesyonel bubble artist'imiz, müzik eşliğinde görsel bir şölen sunuyor.
              </p>
              <p 
                className="text-white/70"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  letterSpacing: '-0.008em',
                  fontWeight: '400'
                }}
              >
                Çocuklar büyük baloncukların içine girer, rengarenk köpüklerle oynar ve unutulmaz kareler için poz verir. Video çekimi için mükemmel bir show!
              </p>
            </div>
          </div>
        </section>

        {/* MODÜL 5: PALYAÇO & ANİMASYON */}
        <section className="bg-[#0a0a0f] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '700'
                }}
              >
                Palyaço & Animasyon Ekibi
              </h2>
              <h3 
                className="text-[#f8b500]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                  fontWeight: '500'
                }}
              >
                Oyun, Dans, Kahkaha!
              </h3>
            </div>

            <div className="relative mb-12">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                  {[
                    'palyacoanaherogrupoyunlari.webp',
                    'palyacogrupoyunlari.webp',
                    'palyacogrupoyunlarii.webp',
                    'palyaconattiveguleryuz.webp',
                    'palyacoonemlifotografguleryız.webp',
                    'palyacosevgidoluonemli.webp',
                    'palyacososisbalon.webp',
                    'palyacokarsoleni.webp',
                    'palyacoyuzboyama2.webp',
                    'palyacoboyama.webp'
                  ].map((img, idx) => (
                    <div
                      key={idx}
                      className="flex-none w-[95vw] md:w-[90vw] lg:w-[85vw] rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <img
                        src={`/content/images/palyaco/${img}`}
                        alt={`Palyaço animasyon ${idx + 1}`}
                        className="w-full h-[450px] md:h-[520px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p 
                className="text-white/85 mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.0625rem, 1.75vw, 1.125rem)',
                  lineHeight: '1.65',
                  letterSpacing: '-0.011em',
                  fontWeight: '400'
                }}
              >
                Profesyonel palyaço ve animatör ekibimiz, etkinlik boyunca grup oyunları, müzikli danslar, kar show'u, konfeti partisi, pinyata ve sosis balon yapımı ile çocukları aktif tutar. Hiçbir çocuk kenarda kalmaz!
              </p>
              <p 
                className="text-white/70"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  letterSpacing: '-0.008em',
                  fontWeight: '400'
                }}
              >
                Yaş grubuna özel oyunlar, komik skečler ve sürpriz aktivitelerle dolu bir animasyon programı. Enerjisi yüksek, güvenli ve eğlenceli!
              </p>
            </div>
          </div>
        </section>

        {/* MODÜL 6: KOSTÜMLÜ KARAKTER */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '700'
                }}
              >
                Kostümlü Karakter
              </h2>
              <h3 
                className="text-[#f8b500]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                  fontWeight: '500'
                }}
              >
                En Sevdiğin Karakter Yanında
              </h3>
            </div>

            <div className="relative mb-12">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                  {[
                    'elsaheroo.webp',
                    'pamuksprenseshero.webp',
                    'spidermanonemli.webp',
                    'minniemausekiralamaheroo.webp',
                    'batmanistan.webp',
                    'elsavodafone2ikincihero.webp',
                    'pamukprensesistanbul.webp',
                    'pawpetrolkesinhero.webp',
                    'spidermancosku.webp',
                    'minniemickeyyenii.webp'
                  ].map((img, idx) => (
                    <div
                      key={idx}
                      className="flex-none w-[95vw] md:w-[90vw] lg:w-[85vw] rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <img
                        src={`/content/images/Kostumlukarakterler/${img}`}
                        alt={`Kostümlü karakter ${idx + 1}`}
                        className="w-full h-[450px] md:h-[520px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p 
                className="text-white/85 mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.0625rem, 1.75vw, 1.125rem)',
                  lineHeight: '1.65',
                  letterSpacing: '-0.011em',
                  fontWeight: '400'
                }}
              >
                Elsa, Pamuk Prenses, Spiderman, Batman ve daha fazlası! Seçeceğiniz 1 kostümlü karakter, etkinlik boyunca çocuklarla birlikte olur, fotoğraf çeker, dans eder ve özel anlar yaratır.
              </p>
              <p 
                className="text-white/70"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  letterSpacing: '-0.008em',
                  fontWeight: '400'
                }}
              >
                Profesyonel kostümler, karaktere uygun davranış ve çocuklarla özel bağ kurma yeteneği ile unutulmaz bir deneyim sunuyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* MODÜL 7: PROFESYONEL FOTOĞRAF & VİDEO ÇEKİMİ */}
        <section className="bg-[#0a0a0f] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '700'
                }}
              >
                Profesyonel Fotoğraf & Video Çekimi
              </h2>
              <h3 
                className="text-[#f8b500]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                  fontWeight: '500'
                }}
              >
                Unutulmaz Anlar, Sonsuza Dek Kayıt Altında
              </h3>
            </div>

            <div className="relative mb-12">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                  {[
                    { src: 'ahunundogumgunu/dogumgunucocugunaozelfotorafcekimleri.jpg', alt: 'Doğum günü çocuğuna özel fotoğraf çekimleri' },
                    { src: 'ahunundogumgunu/vedafotografi.jpg', alt: 'Veda fotoğrafı' },
                    { src: 'ahunundogumgunu/grupoyunları.jpg', alt: 'Grup oyunları fotoğrafları' },
                    { src: 'ahunundogumgunu/konseptdogumgunu.jpg', alt: 'Konsept doğum günü fotoğrafları' },
                    { src: 'ahunundogumgunu/_DSF4779.jpg', alt: 'Profesyonel fotoğraf karesi 1' },
                    { src: 'ahunundogumgunu/_DSF4827.jpg', alt: 'Profesyonel fotoğraf karesi 2' },
                    { src: 'ahunundogumgunu/_DSF5285.jpg', alt: 'Profesyonel fotoğraf karesi 3' },
                    { src: 'ahunundogumgunu/_DSF4904.jpg', alt: 'Profesyonel fotoğraf karesi 4' },
                    { src: 'ahunundogumgunu/_DSF5125.jpg', alt: 'Profesyonel fotoğraf karesi 5' },
                    { src: 'ahunundogumgunu/_DSF6181.jpg', alt: 'Profesyonel fotoğraf karesi 6' }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex-none w-[95vw] md:w-[70vw] lg:w-[45vw] rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <img
                        src={`/content/images/${item.src}`}
                        alt={item.alt}
                        className="w-full h-[450px] md:h-[520px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p 
                className="text-white/85 mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.0625rem, 1.75vw, 1.125rem)',
                  lineHeight: '1.65',
                  letterSpacing: '-0.011em',
                  fontWeight: '400'
                }}
              >
                Profesyonel fotoğraf ve video çekimi hizmeti ile tüm özel anları kaydediyoruz. Her kareden duygular taşar; çocukların mutluluğu, ailenin sevinci ve unutulmaz anlar profesyonel ekipmanlarla ölümsüzleşir.
              </p>
              <p 
                className="text-white/70"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  letterSpacing: '-0.008em',
                  fontWeight: '400'
                }}
              >
                Etkinlik sonunda size özel 1 dakikalık unutulmaz doğum günü klibi hazırlıyoruz. Bu anılar, yıllarca izlenecek ve tekrar tekrar hatırlanacak!
              </p>
            </div>
          </div>
        </section>

        {/* MODÜL 8: PARTY BOX SES SİSTEMİ */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '700'
                }}
              >
                Party Box Ses Sistemi
              </h2>
              <h3 
                className="text-[#f8b500]"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                  fontWeight: '500'
                }}
              >
                Her Anın Enerjisi, Doğru Müzikle!
              </h3>
            </div>

            <div className="relative mb-12">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                  {[
                    { src: 'fullpaket/hareketlislider7popcorn.webp', alt: 'Party box ses sistemi' },
                    { src: 'fullpaket/hareketlislider3yeni.webp', alt: 'Etkinlik kurulumu ses sistemi' },
                    { src: 'fullpaket/konseptnattive.webp', alt: 'Konsept organizasyon ses' },
                    { src: 'palyaco/palyacoanaherogrupoyunlari.webp', alt: 'Oyunlar ses sistemi' },
                    { src: 'fullpaket/hareketlisliderfotograf4.webp', alt: 'Sahne düzeni' },
                    { src: 'palyaco/palyacogrupoyunlari.webp', alt: 'Grup aktiviteleri müzik' },
                    { src: 'fullpaket/pastanattivee1.webp', alt: 'Pasta seremonisi müzik' },
                    { src: 'palyaco/palyacokarsoleni.webp', alt: 'Kar şöleni müzik' },
                    { src: 'profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp', alt: 'Etkinlik atmosferi' },
                    { src: 'fullpaket/hareketlislider5bubbleshowgosteriler.webp', alt: 'Gösteri müziği' }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex-none w-[95vw] md:w-[70vw] lg:w-[45vw] rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <img
                        src={`/content/images/${item.src}`}
                        alt={item.alt}
                        className="w-full h-[450px] md:h-[520px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p 
                className="text-white/85 mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1.0625rem, 1.75vw, 1.125rem)',
                  lineHeight: '1.65',
                  letterSpacing: '-0.011em',
                  fontWeight: '400'
                }}
              >
                Profesyonel party box ses sistemi ve mikrofon ile etkinlik boyunca kaliteli ses deneyimi yaşatıyoruz. Özel playlist hazırlayarak, her anın enerjisini doğru müzikle destekliyoruz.
              </p>
              <p 
                className="text-white/70"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  letterSpacing: '-0.008em',
                  fontWeight: '400'
                }}
              >
                Karşılamadan vedaya kadar tüm etkinlik boyunca uygun ses seviyesi ve müzik seçimi ile misafirlerinize keyifli bir deneyim sunuyoruz. Oyunlar, danslar ve gösteriler için özel ses efektleri de dahil!
              </p>
            </div>
          </div>
        </section>

        {/* Why Us Section - White Background with Navy/Indigo Card */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-indigo-950 via-black to-navy-950">
          <div className="max-w-4xl mx-auto px-6">
            {/* White Card/Frame */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 
                className="font-extrabold text-gray-900 mb-8"
                style={{
                  fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                  lineHeight: '1.15',
                  letterSpacing: '-0.025em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
                }}
              >
                Neden İstanbul'un En Çok Tercih Edilen Doğum Günü Organizasyonuyuz?
              </h2>
              
              <div className="space-y-6">
                <p 
                  className="text-gray-800 font-medium"
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                    lineHeight: '1.5',
                    letterSpacing: '-0.015em',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                  }}
                >
                  <span className="font-bold text-gray-900">Best Event</span>, İstanbul'da yıllardır yüzlerce başarılı etkinliğe imza atmış profesyonel bir organizasyon firmasıdır. 
                  Çocuk doğum günlerinden kurumsal etkinliklere kadar, her organizasyonda deneyimli ekibiyle güvenle tercih edilir.
                </p>
                
              <p 
                className="text-gray-800 font-medium"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  lineHeight: '1.5',
                  letterSpacing: '-0.015em',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif'
                }}
              >
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Full Paket Doğum Günü Organizasyonu ve Kiralama</span> kapsamımız, klasik doğum günü anlayışının ötesine geçerek{' '}
                <span className="font-bold text-gray-900">sihirbaz, palyaço, maskot, müzik, ikram ve süsleme</span>{' '}
                ile zenginleştirilmiş özel bir etkinlik deneyimi sunar. Profesyonel full paket doğum günü kiralama ve organizasyon sürecinde sadece eğlendirmekle kalmaz, aynı zamanda{' '}
                <span className="font-bold text-gray-900">A'dan Z'ye profesyonel planlama</span>{' '}
                ile kusursuz bir performans sergiler. Konuksuz süsleme, profesyonel fotoğraf ve video çekimi, müzik, ikram servisleri ve profesyonel sunumla birleşerek bugüne kadar %100 memnuniyetle sunulmuş, çocuklara unutulmaz anlar yaşatmıştır. İster küçük bir parti, ister büyük bir organizasyon olsun, full paket doğum günü kiralama talebinizi deneyimli ekibimizle karşılıyoruz.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* YENİ: Güven & Değer Bölümü - Sofistike Design */}
        <section className="bg-gradient-to-b from-white via-gray-50 to-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            {/* Ana Başlık */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 
                className="text-black font-semibold mb-4"
                style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)', 
                  lineHeight: '1.15',
                  letterSpacing: '-0.025em'
                }}
              >
                Bir organizasyondan fazlası
              </h2>
              <p 
                className="text-gray-600 max-w-2xl mx-auto"
                style={{ 
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  lineHeight: '1.6',
                  letterSpacing: '-0.011em'
                }}
              >
                Doğum günü, yılın tek günü. Biz bu günü, detayların uyumlu bir hikâyeye dönüştüğü deneyime çeviriyoruz.
              </p>
            </div>

            {/* 4 Değer Kartı */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
              {[
                {
                  title: 'Tek ekip, uyumlu akış',
                  desc: 'Süsleme, pasta, gösteriler, animasyon — tüm unsurlar aynı ekip tarafından, birbirine uyumlu planlama ile.'
                },
                {
                  title: 'Net bütçe, şeffaf süreç',
                  desc: 'Paket fiyatınız bellidir. Son dakika sürprizi, ek maliyet ya da karışıklık yaşamazsınız.'
                },
                {
                  title: 'Yaşa özel içerik',
                  desc: 'Oyunlar, gösteriler ve temponun tümü çocuğun yaşına göre ayarlanır. Enerji doğru anda yükselir, doğru anda dinlenir.'
                },
                {
                  title: 'Zamanında kurulum',
                  desc: 'Ekibimiz, misafirler gelmeden önce alanda olur. Sahne tamamen hazır, siz sadece partinin tadını çıkarırsınız.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="absolute top-5 right-5 text-5xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="relative z-10">
                    <h3 
                      className="text-gray-900 font-semibold mb-2"
                      style={{ 
                        fontSize: 'clamp(1.125rem, 1.75vw, 1.375rem)',
                        lineHeight: '1.3',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-gray-600"
                      style={{ 
                        fontSize: 'clamp(0.9375rem, 1.25vw, 1rem)',
                        lineHeight: '1.6',
                        letterSpacing: '-0.011em'
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Duygusal Mesaj - Merkezi Vurgu */}
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,181,0,0.1),transparent_50%)]"></div>
                
                <div className="relative z-10 space-y-6">
                  <p 
                    className="text-white font-medium"
                    style={{ 
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      lineHeight: '1.4',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Siz konsepti, tarihi ve adresi söylersiniz.
                  </p>
                  
                  <p 
                    className="text-white/80"
                    style={{ 
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.6',
                      letterSpacing: '-0.011em'
                    }}
                  >
                    Ekibimiz karşılamadan vedaya kadar tüm süreci yönetir. Ortaya, çocuğunuzun ve misafirlerinizin uzun süre hatırlayacağı, sizin ise sadece keyifle yaşadığınız bir gün çıkar.
                  </p>

                  <div className="pt-2">
                    <div className="inline-block px-3 py-1.5 rounded-full bg-[#f8b500]/20 border border-[#f8b500]/30">
                      <p className="text-xs font-medium text-[#f8b500] tracking-wide uppercase">
                        Tüm İstanbul'dayız
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Görsel seçki - Elegant Slider */}
        <section className="bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="text-center mb-16">
              <h2 
                className="text-black font-semibold mb-5"
                style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: '1.15',
                  letterSpacing: '-0.025em'
                }}
              >
                Görsellerden Kareler
              </h2>
              <p 
                className="text-gray-700 max-w-2xl mx-auto"
                style={{ 
                  fontSize: 'clamp(1.0625rem, 1.5vw, 1.125rem)',
                  lineHeight: '1.6',
                  letterSpacing: '-0.011em'
                }}
              >
                Konsept süsleme, pasta, bubble show ve animasyonlardan seçilen kareler. Tüm görseller paket içeriğinden.
              </p>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                  {[
                    { src: '/content/images/fullpaket/hareketlislider1konseptdogumgunubaslikk.webp', alt: 'konsept doğum günü süsleme' },
                    { src: '/content/images/fullpaket/pastanattivee1.webp', alt: 'organik şef pastası' },
                    { src: '/content/images/fullpaket/hareketlislider5bubbleshowgosteriler.webp', alt: 'bubble show doğum günü' },
                    { src: '/content/images/fullpaket/hareketlislider6osterilersihirbazhero.webp', alt: 'sihirbazlık gösterisi' },
                    { src: '/content/images/palyaco/palyacoanaherogrupoyunlari.webp', alt: 'palyaço ve oyunlar' },
                    { src: '/content/images/Kostumlukarakterler/elsaheroo.webp', alt: 'kostümlü karakter animasyonu' },
                    { src: '/content/images/profesyonelmakeup/istanbulprofesyonelyuzboyasietkinligibakirkoy.webp', alt: 'profesyonel yüz boyama' },
                    { src: '/content/images/fullpaket/konseptnattive.webp', alt: 'konsept organizasyon' },
                    { src: '/content/images/bubbleshow/bubbleshowhero.webp', alt: 'bubble show gösterisi' },
                    { src: '/content/images/konseptdogumgunu/karkonsept.webp', alt: 'konsept süsleme detay' }
                  ].map((img, idx) => (
                    <div 
                      key={idx} 
                      className="flex-none w-[85vw] md:w-[70vw] lg:w-[60vw] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{ 
                        scrollSnapAlign: 'center',
                        border: '1px solid rgba(0,0,0,0.08)'
                      }}
                    >
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-[400px] md:h-[500px] object-contain" 
                        loading="lazy" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA + FORM - WhatsApp Theme */}
        <section id="rezervasyon" className="bg-[#0a0a0f] border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
            {/* WhatsApp Form - Tek Kolon */}
            <div className="rounded-3xl bg-gradient-to-br from-[#128C7E] to-[#075E54] border-2 border-[#25D366]/30 px-6 py-6 md:px-7 md:py-7 shadow-[0_20px_60px_rgba(37,211,102,0.25)] relative">
              {/* Online Badge - Blinking */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <div className="relative">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-[#25D366] rounded-full animate-ping"></div>
                </div>
                <span className="text-[10px] text-[#DCF8C6] font-medium">Çevrimiçi</span>
              </div>

              {/* Form Header */}
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-white/20">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-base">WhatsApp Rezervasyon</p>
                </div>
              </div>

              {/* Bilgi Mesajı - Direkt Form Üstünde */}
              <p className="text-[#DCF8C6] text-xs mb-6 leading-relaxed">
                WhatsApp Rezervasyon formunu gönderdiğinizde çevrimiçi rezervasyon sorumlumuza mesaj gelir ve size anında geri dönüş yapılır
              </p>

                <div className="grid gap-4">
                  <div>
                    <label className="block text-xs text-white/90 font-medium mb-1.5">Ad Soyad</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs text-white/90 font-medium mb-1.5">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs text-white/90 font-medium mb-1.5">Etkinlik Adresi</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors"
                      placeholder="İlçe, mahalle"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-white/90 font-medium mb-1.5">Tarih</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#25D366] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/90 font-medium mb-1.5">Saat</label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#25D366] transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs text-white/90 font-medium mb-1.5">Konsept / Notlar</label>
                    <textarea
                      rows={3}
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-white/95 border-2 border-transparent px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-[#25D366] transition-colors resize-none"
                      placeholder="Örn: Spiderman konsepti, 20 çocuk"
                    />
                  </div>
                </div>
                
              <button
                type="button"
                className="mt-5 w-full rounded-xl bg-white text-[#128C7E] font-bold text-sm md:text-base py-3.5 shadow-lg hover:shadow-xl hover:bg-[#DCF8C6] transition-all duration-300 flex items-center justify-center gap-2 group"
                onClick={sendWhatsAppMessage}
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp'a Gönder ve Anında Yanıt Al
              </button>

              <p className="text-xs text-center text-[#DCF8C6] mt-4">
                🔒 Bilgileriniz güvenle saklanır ve sadece rezervasyon için kullanılır
              </p>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 
              className="text-white mb-6"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.025em',
                fontWeight: '600'
              }}
            >
              Sıkça Sorulan Sorular
            </h2>

            <div className="divide-y divide-white/10 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
              {faqs.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() =>
                    setOpenFaq((current) => (current === idx ? -1 : idx))
                  }
                  className="w-full text-left px-5 md:px-6 py-4 md:py-5 focus:outline-none"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p 
                      className="font-medium text-white"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                        fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                        lineHeight: '1.5',
                        letterSpacing: '-0.011em',
                        fontWeight: '500'
                      }}
                    >
                      {item.q}
                    </p>
                    <span className="text-lg text-white/70">
                      {openFaq === idx ? "–" : "+"}
                    </span>
                  </div>
                  {openFaq === idx && (
                    <p 
                      className="mt-3 text-white/80"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                        fontSize: 'clamp(0.875rem, 1.35vw, 0.9375rem)',
                        lineHeight: '1.7',
                        letterSpacing: '-0.008em',
                        fontWeight: '400'
                      }}
                    >
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
