import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const timeline = [
  {
    time: "0–40 dk",
    title: "Karşılama + Yüz Boyama",
    desc: "Çocuklar karakterlerle tanışır, yüz boyama ile parti havasına girer.",
    image: "/content/images/fullpaket/istanbulprofesyonelyuzboyasietkinligibakirkoy.JPG",
  },
  {
    time: "40–80 dk",
    title: "Oyunlar + Danslar",
    desc: "Yaş grubuna göre seçilen grup oyunları ve müzikli aktivitelerle enerji yükselir.",
    image: "/content/images/palyaco/palyacoanaherogrupoyunlari.JPG",
  },
  {
    time: "80–100 dk",
    title: "Pasta Seremonisi",
    desc: "Konsept pastayla mumlar üflenir, aile fotoğrafları için sahne hazırlanır.",
    image: "/content/images/fullpaket/pastanattivee1.jpg",
  },
  {
    time: "100–130 dk",
    title: "Bubble Show – 30 Dakika",
    desc: "Çocuklar dev baloncukların içine girer; videoluk kareler garanti.",
    image: "/content/images/fullpaket/hareketlislider5bubbleshowgosteriler.jpeg",
  },
  {
    time: "130–160 dk",
    title: "Sihirbazlık Gösterisi – 30 Dakika",
    desc: "Tavşan, güvercin ve interaktif numaralarla dolu komedi ağırlıklı bir şov.",
    image: "/content/images/fullpaket/hareketlislider6osterilersihirbazhero.jpeg",
  },
  {
    time: "160–180 dk",
    title: "Final: Pinyata + Sosis Balon + Veda Fotoğrafı",
    desc: "Hediye dağıtımı, toplu fotoğraf ve güçlü bir finalle etkinlik tamamlanır.",
    image: "/content/images/fullpaket/hareketlisliderfotograf4.jpeg",
  },
];

const packageItems = [
  {
    title: "Konsept Doğum Günü Süslemesi",
    desc: "Balon kemeri, backdrop, masa düzeni ve konseptin tüm detayları. Fotoğraflar için kusursuz bir sahne kuruyoruz.",
    image: "/content/images/fullpaket/konseptnattive.jpg",
  },
  {
    title: "Organik Şef Pastası",
    desc: "Cordon bleu eğitimli şefimizin hazırladığı, konseptinize özel, %100 organik pasta. Hem lezzeti hem görünümüyle günün yıldızı.",
    image: "/content/images/fullpaket/pastanattivee1.jpg",
  },
  {
    title: "Bubble Show – 30 Dakika",
    desc: "Dev baloncuklar, sahne efektleri ve çocukların içine girebildiği büyülü anlar. Çocuklar için saf mutluluk.",
    image: "/content/images/fullpaket/hareketlislider5bubbleshowgosteriler.jpeg",
  },
  {
    title: "Sihirbazlık Gösterisi – 30 Dakika",
    desc: "Tavşan, güvercin ve interaktif numaralarla dolu eğlenceli bir performans. Çocuklar sadece izleyen değil, gösterinin parçası olur.",
    image: "/content/images/fullpaket/hareketlislider6osterilersihirbazhero.jpeg",
  },
  {
    title: "Palyaço & Kostümlü Karakter Animasyonu",
    desc: "Tüm etkinlik boyunca oyunlar, danslar, kar spreyi ve pinyata akışını profesyonel animatör ekibimiz yönetir.",
    image: "/content/images/palyaco/palyacoanaherogrupoyunlari.JPG",
  },
  {
    title: "Profesyonel Yüz Boyama & Glitter",
    desc: "Hijyenik, kaliteli malzemelerle yapılan yüz boyama ve glitter detaylarıyla herkes sahneye hazır hale gelir.",
    image: "/content/images/fullpaket/istanbulprofesyonelyuzboyasietkinligibakirkoy.JPG",
  },
  {
    title: "Party Box Ses Sistemi (Hediye)",
    desc: "Etkinliğe özel playlist ve güçlü ses sistemiyle, ortamın enerjisi her an yüksek kalır.",
    image: "/content/images/fullpaket/hareketlislider7popcorn.jpeg",
  },
  {
    title: "Tam Zamanında Kurulum",
    desc: "Ekip, misafirler gelmeden önce alanda olur, tüm sahne kurulumu zamanında ve eksiksiz tamamlar.",
    image: "/content/images/fullpaket/hareketlislider3yeni.JPG",
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

  return (
    <>
      <Helmet>
        <title>Full Doğum Günü Organizasyonu | Best Event</title>
        <meta
          name="description"
          content="Konsept süsleme, organik şef pastası, bubble show, sihirbazlık, palyaço ve kostümlü karakter, yüz boyama ve party box ses sistemi tek pakette. Full doğum günü organizasyonu Best Event ile."
        />
      </Helmet>

      <main className="bg-[#050509] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-black">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/content/images/fullpaket/fullpaketanahero.jpg')] bg-cover bg-center opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/75 to-black/90" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-28 md:pt-40 md:pb-36">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Full Doğum Günü Organizasyonu
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
                Tüm günü tek pakette, kusursuz bir akışla yönetiyoruz.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/905349306799"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-semibold bg-white text-black shadow-lg shadow-black/40 hover:bg-white/90 transition-colors"
                >
                  💬 WhatsApp’tan Fiyat Öğren
                </a>
                <a
                  href="#flow"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-medium border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors"
                >
                  Paketin Akışını Gör
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tek Paket blok */}
        <section className="relative overflow-hidden bg-[#0a0a10] border-t border-white/5">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(255,122,24,0.25), transparent 35%), radial-gradient(circle at 90% 20%, rgba(255,255,255,0.14), transparent 30%)'
              }}
            />
          </div>
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20 space-y-8 text-center">
            <div className="space-y-4">
              <h2
                className="font-semibold text-white leading-tight"
                style={{ fontSize: 'clamp(2.35rem, 5vw, 3.25rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
              >
                Tek Paket. Tek Ekip. Tek muhattap.
              </h2>
              <p className="text-sm md:text-base text-white/85 leading-relaxed">
                Konsept süsleme | %100 Organik Pasta | Bubble show | Magic Show | Kostümlü karakter | Palyaço
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Sen uğraşma , Bi bunu her gün yapıyoruz ;)
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center">
              {[
                'Kurulum + sahne 2 saat önce hazır',
                'Organik pasta + konsept süsleme tek ekipte',
                'Yaşa göre oyun dili ve tempo planlaması',
                'Tek paket, net bütçe, sürpriz masraf yok'
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-3 rounded-full border border-white/15 bg-gradient-to-r from-primary to-secondary text-sm md:text-base text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 SAATLİK AKIŞ */}
        <section id="flow" className="bg-[#0a0a0f] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                3 Saatlik Profesyonel Akış
              </h2>
              <p className="mt-3 text-sm md:text-base text-white/80">
                Üç saat boyunca her şey, doğru sırayla ve doğru tempoda ilerler.
              </p>
            </div>

            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.4)]"
                >
                  {item.image && (
                    <div className="w-full sm:w-24 h-24 rounded-xl overflow-hidden border border-white/10 bg-black/40">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                  <div className="shrink-0">
                    <div className="inline-flex items-center justify-center rounded-full bg-white/15 text-xs font-semibold px-3 py-1 text-white">
                      ⏱ {item.time}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAKET İÇERİĞİ */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Paket İçinde Neler Var?
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
              Doğum gününü baştan sona taşıyan tüm içerikler, tek pakette ve tek ekip
              kontrolünde.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {packageItems.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white/6 border border-white/10 px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-sm"
                >
                  {item.image && (
                    <div className="mb-3 rounded-2xl overflow-hidden border border-white/10 bg-black/30">
                      <img src={item.image} alt={item.title} className="w-full h-44 object-cover" loading="lazy" />
                    </div>
                  )}
                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-[15px] text-white/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEDEN FULL PAKET */}
        <section className="bg-[#07070c] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Neden Full Paket Doğum Günü?
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {reasons.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white/6 border border-white/10 px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm md:text-[15px] text-white/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DUYGUSAL STORY BLOĞU */}
        <section className="bg-gradient-to-b from-[#f8b500]/18 via-[#0a0a0f] to-[#050509] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 space-y-4">
            <p className="text-2xl md:text-3xl font-semibold leading-snug text-white">
              Doğum günü, çocuğunuz için yılın en özel günü.  
              Biz de bu günü, eksiksiz ve unutulmaz bir hikâyeye dönüştürüyoruz.
            </p>
            <p className="text-sm md:text-base text-white/85 leading-relaxed">
              Konsept süsleme, organik şef pastası, bubble show, sihirbazlık, palyaço ve
              kostümlü karakter animasyonu, yüz boyama, glitter ve party box ses sistemi…
              Hepsi aynı ekip tarafından, birbirine uyumlu bir akışla planlanır.  
              Siz sadece tarihi, adresi ve konsepti söylersiniz; biz tanışmadan veda fotoğrafına kadar
              tüm düzeni yönetiriz.
            </p>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Ortaya, misafirlerin uzun süre anlattığı; sizin ise sadece keyfini sürdüğünüz,
              eksiksiz ve hatırlanır bir doğum günü çıkar.
            </p>
          </div>
        </section>

        {/* Görsel seçki */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Görsellerden Kareler</h2>
            <p className="text-sm md:text-base text-white/75 mb-8 max-w-3xl">
              Konsept süsleme, pasta, bubble show ve animasyonlardan seçilen kareler. Tüm görseller paket içeriğinden.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { src: '/content/images/fullpaket/hareketlislider1konseptdogumgunubaslikk.jpg', alt: 'konsept doğum günü süsleme' },
                { src: '/content/images/fullpaket/pastanattivee1.jpg', alt: 'organik şef pastası' },
                { src: '/content/images/fullpaket/hareketlislider5bubbleshowgosteriler.jpeg', alt: 'bubble show doğum günü' },
                { src: '/content/images/fullpaket/hareketlislider6osterilersihirbazhero.jpeg', alt: 'sihirbazlık gösterisi' },
                { src: '/content/images/palyaco/palyacoanaherogrupoyunlari.JPG', alt: 'palyaço ve oyunlar' },
                { src: '/content/images/fullpaket/elsaheroo.JPG', alt: 'kostümlü karakter animasyonu' }
              ].map((img) => (
                <div key={img.src} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + FORM */}
        <section id="rezervasyon" className="bg-black border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">
              {/* Sol: Başlık */}
              <div>
                <p className="text-xs tracking-[0.25em] text-[#f8b500] uppercase">
                  İSTANBUL’UN HER YERİNDEYİZ
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                  Hızlı Bilgi ve Rezervasyon
                </h2>
                <p className="mt-3 text-sm md:text-base text-white/80 max-w-md">
                  Tarih, adres ve konseptinizi kısaca yazın; ekibimiz size en kısa sürede
                  net fiyat ve uygun saat seçenekleriyle dönüş yapsın.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/905349306799"
                    className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-semibold bg-white text-black shadow-lg shadow-black/40 hover:bg-white/90 transition-colors"
                  >
                    💬 WhatsApp’tan Gönder
                  </a>
                  <a
                    href="tel:05349306799"
                    className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-medium border border-white/30 text-white hover:bg-white/10 transition-colors"
                  >
                    📞 Hemen Ara: 0534 930 67 99
                  </a>
                </div>
                <p className="mt-3 text-xs text-white/50">
                  Telefon görüşmeleri çoğu zaman %40 daha hızlı sonuçlanıyor.
                </p>
              </div>

              {/* Sağ: Form */}
              <div className="rounded-3xl bg-[#0f0f14] border border-white/10 px-6 py-6 md:px-7 md:py-7 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-sm">
                <p className="text-sm md:text-base text-white/80 mb-4">
                  Bilgilerinizi yazın; formu gönderdiğinizde WhatsApp’tan detayları konuşmak için hemen dönüş yapıyoruz.
                </p>
                <div className="grid gap-4">
                  <div>
                    <label className="block text-xs text-white/60 mb-1">Ad Soyad</label>
                    <input
                      type="text"
                      className="w-full rounded-2xl bg-black/50 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1">Telefon</label>
                    <input
                      type="tel"
                      className="w-full rounded-2xl bg-black/50 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1">Etkinlik Adresi</label>
                    <input
                      type="text"
                      className="w-full rounded-2xl bg-black/50 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40"
                      placeholder="İlçe, mahalle, mekan adı"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Tarih</label>
                      <input
                        type="date"
                        className="w-full rounded-2xl bg-black/50 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Saat</label>
                      <input
                        type="time"
                        className="w-full rounded-2xl bg-black/50 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1">Konsept / Notlar</label>
                    <textarea
                      rows={4}
                      className="w-full rounded-2xl bg-black/50 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40 resize-none"
                      placeholder="Örneğin: Barbie, Spiderman, prenses konsepti, katılacak çocuk sayısı vb."
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-5 w-full rounded-full bg-white text-black font-semibold text-sm md:text-base py-3 shadow-lg shadow-black/40 hover:bg-white/90 transition-colors"
                  onClick={() =>
                    window.open(
                      "https://wa.me/905349306799?text=Merhaba! Full doğum günü organizasyonu için bilgi almak istiyorum.",
                      "_blank"
                    )
                  }
                >
                  WhatsApp’a Gönder ve Fiyat Al
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="bg-[#050509] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
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
                    <p className="font-medium text-sm md:text-[15px] text-white">
                      {item.q}
                    </p>
                    <span className="text-lg text-white/70">
                      {openFaq === idx ? "–" : "+"}
                    </span>
                  </div>
                  {openFaq === idx && (
                    <p className="mt-3 text-xs md:text-sm text-white/80 leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FullBirthdayOrganization;
