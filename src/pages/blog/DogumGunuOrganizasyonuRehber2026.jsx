import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'
import GoogleReviews from '../../components/GoogleReviews'
import AuthorExpertise from '../../components/AuthorExpertise'
import TrustSection from '../../components/TrustSection'
import Seo from '../../components/Seo'
import { getReviewsByTags } from '../../data/googleReviews'
import { createBlogPostingSchema, createFAQSchema } from '../../utils/schemaHelpers'

const DogumGunuOrganizasyonuRehber2026 = () => {
  const reviews = getReviewsByTags(['dogumgunu', 'palyaco', 'genel'], 6)

  const faqData = [
    { question: 'Doğum günü organizasyonu ne kadar önceden planlanmalı?', answer: 'İdeal olarak 2-4 hafta öncesinden planlamaya başlanmalıdır. Hafta sonu ve yoğun sezon (Mayıs-Haziran) tarihleri için 3-4 hafta, hafta içi tarihler için 1-2 hafta yeterlidir. Son dakika talepleri de değerlendirilir ancak paket seçenekleri sınırlı kalabilir.' },
    { question: 'Doğum günü organizasyonu ne kadar tutar?', answer: 'Fiyat; seçilen hizmetler (palyaço, sihirbaz, bubble show, pamuk şeker vb.), etkinlik süresi, katılımcı sayısı, mekan tipi ve konsept tercihine göre değişir. Tek palyaço programından full paket organizasyona kadar farklı bütçe seçenekleri mevcuttur. Detaylı teklif için organizasyon senaryonuzu paylaşmanız yeterlidir.' },
    { question: 'Ev partisinde doğum günü organizasyonu yapılabilir mi?', answer: 'Evet ve en çok hizmet verdiğimiz format ev partisidir. Salon büyüklüğü fark etmez; palyaço, sihirbaz, bubble show ve pamuk şeker hizmetleri standart apartman dairelerinde rahatlıkla uygulanır. Villa bahçesi ve site salonu da popüler mekan seçenekleridir.' },
    { question: 'Hangi hizmetleri birlikte alabilirim?', answer: 'Tüm hizmetlerimiz kombine edilebilir: palyaço + sihirbaz, bubble show + pamuk şeker, kostümlü karakter + animatör, üçlü ikram paketi (pamuk şeker + popcorn + çikolata şelalesi) gibi. Kombine paketlerde hem fiyat avantajı hem tek ekiple lojistik kolaylığı sağlanır.' },
    { question: 'Kaç çocuğa kadar hizmet veriyorsunuz?', answer: '5 çocukluk küçük ev partisinden 200+ çocukluk okul ve site etkinliklerine kadar her ölçekte organizasyon yapıyoruz. 20 çocuğa kadar tek ekip, 20-40 çocukta çift ekip, 40+ çocukta tam operasyon planlaması uygulanır.' },
    { question: 'İstanbul dışına hizmet veriyor musunuz?', answer: 'Ağırlıklı olarak İstanbul 39 ilçeye hizmet veriyoruz. İstanbul dışı talepler (Kocaeli, Bursa, Edirne vb.) için özel değerlendirme yapılır. Ulaşım ve konaklama planlaması etkinlik detaylarına göre belirlenir.' }
  ]

  const blogPostSchema = createBlogPostingSchema({
    title: 'Doğum Günü Organizasyonu 2026: Planlama, Hizmet Seçimi ve Bütçe Rehberi',
    excerpt: 'İstanbul\'da doğum günü organizasyonu planlama rehberi. Hizmet seçimi, bütçe planlaması, mekan tercihi, zamanlama ve profesyonel ipuçları.',
    image: '/content/images/cocukdogumgunu/konseptdogumgunistanbul.webp',
    dateISO: '2026-04-10',
    slug: 'dogum-gunu-organizasyonu-2026-rehberi',
    primaryKeyword: 'doğum günü organizasyonu 2026'
  })
  const faqSchema = createFAQSchema(faqData)

  const content = (
    <>
      <Seo
        title="Doğum Günü Organizasyonu İstanbul 2026 | A'dan Z'ye Planlama Rehberi"
        description="İstanbul'da doğum günü organizasyonu planlama rehberi. Palyaço, sihirbaz, bubble show, pamuk şeker, animatör: hizmet seçimi, bütçe ve zamanlama."
        keywords={['doğum günü organizasyonu', 'doğum günü organizasyonu istanbul', 'çocuk doğum günü planlama', 'doğum günü partisi 2026', 'istanbul doğum günü organizasyonu fiyatları']}
        canonicalPath="/blog/dogum-gunu-organizasyonu-2026-rehberi"
        image="/content/images/cocukdogumgunu/konseptdogumgunistanbul.webp"
        schema={[blogPostSchema, faqSchema]}
        publishedTime="2026-04-10"
      />

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl overflow-hidden mb-12">
        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🎂 A'dan Z'ye · 6 Yıl Deneyim · İstanbul 39 İlçe
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Doğum Günü Organizasyonu 2026</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">Planlama, hizmet seçimi, bütçe ve zamanlama: doğum günü organizasyonunun her adımı bu rehberde. 5.000+ başarılı etkinlik deneyimiyle hazırlandı.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+905307309009" className="bg-white text-orange-600 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">📞 Hemen Ara</a>
            <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">💬 WhatsApp Teklif Al</a>
          </div>
        </div>
      </div>

      {/* İÇİNDEKİLER */}
      <nav className="bg-gray-50 rounded-xl p-6 mb-10 border-l-4 border-orange-500" aria-label="İçindekiler">
        <h2 className="text-xl font-bold text-gray-900 mb-3">📋 İçindekiler</h2>
        <ol className="space-y-2 list-decimal list-inside">
          <li><a href="#nereden-baslamali" className="text-orange-600 hover:text-orange-700 font-medium">Doğum Günü Organizasyonu Nereden Başlamalı?</a></li>
          <li><a href="#hizmet-secimi" className="text-orange-600 hover:text-orange-700 font-medium">Hizmet Seçim Rehberi: Hangi Hizmet Ne İşe Yarar?</a></li>
          <li><a href="#mekan-secimi-org" className="text-orange-600 hover:text-orange-700 font-medium">Mekan Seçimi: Ev, Site, Restoran, Açık Alan</a></li>
          <li><a href="#zamanlama-plani" className="text-orange-600 hover:text-orange-700 font-medium">Zamanlama Planı: Haftalık Geri Sayım</a></li>
          <li><a href="#butce-planlama" className="text-orange-600 hover:text-orange-700 font-medium">Bütçe Planlaması ve Paket Karşılaştırması</a></li>
          <li><a href="#checklist-org" className="text-orange-600 hover:text-orange-700 font-medium">Doğum Günü Organizasyonu Kontrol Listesi</a></li>
          <li><a href="#sss" className="text-orange-600 hover:text-orange-700 font-medium">Sık Sorulan Sorular</a></li>
        </ol>
      </nav>

      {/* BÖLÜM 1 */}
      <section id="nereden-baslamali" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Doğum Günü Organizasyonu Nereden Başlamalı?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Doğum günü organizasyonu planlamanın ilk adımı <strong>3 temel soruyu</strong> cevaplamaktır:</p>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500 text-center">
            <span className="text-3xl block mb-3">👶</span>
            <h3 className="font-bold text-gray-900 mb-2">Çocuğun yaşı kaç?</h3>
            <p className="text-gray-700 text-sm">3-5 yaş, 6-8 yaş ve 9-12 yaş grubunda program, aktivite ve enerji yönetimi tamamen farklıdır.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500 text-center">
            <span className="text-3xl block mb-3">👫</span>
            <h3 className="font-bold text-gray-900 mb-2">Kaç çocuk olacak?</h3>
            <p className="text-gray-700 text-sm">10, 20 veya 40 çocuk... Sayı arttıkça ekip yapısı, aktivite çeşitliliği ve mekan gereksinimi değişir.</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500 text-center">
            <span className="text-3xl block mb-3">🏠</span>
            <h3 className="font-bold text-gray-900 mb-2">Nerede yapılacak?</h3>
            <p className="text-gray-700 text-sm">Ev, site salonu, restoran, villa bahçesi veya açık alan... Mekan, seçeceğiniz hizmetleri doğrudan etkiler.</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">Bu üç sorunun cevabı netleştikten sonra hizmet seçimi, bütçe planlaması ve zamanlama çok daha kolay hale gelir. Çoğu ailenin yaptığı hata: önce hizmet seçip sonra mekana uydurmaya çalışmaktır. Doğru sıra: <strong>yaş → kişi sayısı → mekan → hizmet seçimi → bütçe</strong>.</p>
      </section>

      {/* BÖLÜM 2 */}
      <section id="hizmet-secimi" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Hizmet Seçim Rehberi: Hangi Hizmet Ne İşe Yarar?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">Best Event olarak sunduğumuz doğum günü hizmetleri ve her birinin ne işe yaradığı:</p>

        <div className="space-y-4 mb-8">
          {[
            { icon: '🎈', title: 'Doğum Günü Palyaçosu', desc: 'Partinin ana eğlence kaynağı. Oyun, balon, dans, yüz boyama. 3-10 yaş arası en etkili.', link: '/blog/dogum-gunu-palyacosu', ideal: 'Her doğum günü' },
            { icon: '🎩', title: 'Doğum Günü Sihirbazı', desc: 'Şaşkınlık ve hayranlık yaratan görsel gösteri. İnteraktif numaralar. 4-12 yaş arası.', link: '/blog/dogum-gunu-sihirbazi', ideal: 'Görsel etki isteyen partiler' },
            { icon: '🫧', title: 'Doğum Günü Bubble Show', desc: 'Dev baloncuklar, duman efekti, çocuğun baloncuğa girmesi. 2-8 yaş arası hipnotize edici.', link: '/blog/dogum-gunu-bubble-show', ideal: 'Küçük yaş grubu partileri' },
            { icon: '🍬', title: 'Pamuk Şeker ve İkram', desc: 'Retro araba, 8 renk pamuk şeker, popcorn, çikolata şelalesi. Parti boyunca sürekli ikram.', link: '/blog/dogum-gunu-pamuk-seker', ideal: 'Her doğum günü + site etkinlikleri' },
            { icon: '🎯', title: 'Doğum Günü Animatörü', desc: 'Oyun yönetimi, yarışmalar, takım oyunları. Kostümsüz profesyonel format. 8-12 yaş tercih.', link: '/blog/dogum-gunu-animatoru', ideal: 'Büyük çocuk grupları' },
            { icon: '👸', title: 'Kostümlü Karakterler', desc: 'Elsa, Spiderman, Batman, Minnie Mouse. Tema partilerinin yıldızı.', link: '/organizasyonlar/kostumlu-karakterler', ideal: 'Konsept/tema partileri' }
          ].map((item, i) => (
            <Link key={i} to={item.link} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full hidden md:inline">{item.ideal}</span>
                </div>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BÖLÜM 3 */}
      <section id="mekan-secimi-org" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Mekan Seçimi: Ev, Site, Restoran, Açık Alan</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: '🏠 Ev Partisi', pros: 'En samimi format, düşük maliyet, çocuk zaten tanıdık ortamda', cons: 'Alan sınırlı, temizlik sorumluluğu, komşu hassasiyeti', hizmet: 'Palyaço, sihirbaz, yüz boyama, pamuk şeker' },
            { title: '🏢 Site Salonu', pros: 'Geniş alan, esnek kurulum, çocuklar tanıdık ortamda', cons: 'Rezervasyon gerekliliği, dekor sorumluluğu', hizmet: 'Tüm hizmetler uygun, bubble show için ideal' },
            { title: '🍽️ Restoran Özel Alan', pros: 'Yemek ve ikram hazır, temizlik dahil, şık ortam', cons: 'Süre sınırı, gürültü hassasiyeti, ek alan ücreti', hizmet: 'Palyaço, sihirbaz, kompakt ikram setleri' },
            { title: '🌳 Açık Alan / Bahçe', pros: 'Sınırsız alan, çocuklar rahat koşar, gürültü sorunu yok', cons: 'Hava koşulları riski, güneş/gölge planlaması', hizmet: 'Tüm hizmetler + şişme oyun parkı, survivor parkuru' }
          ].map((mekan, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">{mekan.title}</h3>
              <p className="text-green-700 text-sm mb-1"><strong>Avantaj:</strong> {mekan.pros}</p>
              <p className="text-red-600 text-sm mb-1"><strong>Dezavantaj:</strong> {mekan.cons}</p>
              <p className="text-blue-700 text-sm"><strong>Uygun hizmetler:</strong> {mekan.hizmet}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustSection />

      {/* BÖLÜM 4 */}
      <section id="zamanlama-plani" className="mb-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Zamanlama Planı: Haftalık Geri Sayım</h2>
        <div className="space-y-3 mb-8">
          {[
            { hafta: '4 hafta önce', gorev: 'Tarih ve mekan kesinleştir. Hizmet seçimi yap. Best Event\'ten teklif al. Davetiye listesi hazırla.' },
            { hafta: '3 hafta önce', gorev: 'Hizmet rezervasyonunu onayla. Tema/konsept kararı ver. Davetiye gönder.' },
            { hafta: '2 hafta önce', gorev: 'Pasta siparişi ver. Mekan düzenini planla. Dekorasyon malzemelerini al. Katılımcı sayısını netleştir.' },
            { hafta: '1 hafta önce', gorev: 'Best Event ile son detayları paylaş (saat, adres, çocuk sayısı). Mekanı kontrol et (elektrik, alan, park yeri).' },
            { hafta: '1 gün önce', gorev: 'Mekanı hazırla. Dekorasyon kur. Pasta ve ikramları kontrol et. Ekipmanlar için elektrik prizi hazır mı?' },
            { hafta: 'Parti günü', gorev: 'Best Event ekibi 30-60 dk önce gelir. Siz misafirleri karşılayın, gerisini bize bırakın. Fotoğraf çekin, anın tadını çıkarın.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0 mt-0.5 whitespace-nowrap">{item.hafta}</span>
              <p className="text-gray-700 text-sm">{item.gorev}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BÖLÜM 5 */}
      <section id="butce-planlama" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Bütçe Planlaması ve Paket Karşılaştırması</h2>
        <p className="text-gray-700 leading-relaxed mb-6">Doğum günü organizasyonu bütçesi "tek bir rakam" değildir. Seçtiğiniz hizmetlerin kombinasyonuna göre şekillenir:</p>

        <div className="space-y-4 mb-8">
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">🟢 Temel Paket</h3>
            <p className="text-gray-700 text-sm mb-2">Tek hizmet: palyaço VEYA sihirbaz VEYA bubble show. 60-90 dk program. Küçük ev partileri için ideal.</p>
            <p className="text-green-700 text-sm font-semibold">En ekonomik seçenek. 10-20 çocukluk partiler için yeterli.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">🔵 Standart Paket</h3>
            <p className="text-gray-700 text-sm mb-2">İkili kombinasyon: palyaço + sihirbaz VEYA palyaço + bubble show. 90-120 dk program. Pamuk şeker eklenebilir.</p>
            <p className="text-blue-700 text-sm font-semibold">En çok tercih edilen format. Denge: eğlence çeşitliliği + makul bütçe.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">🟣 Premium Paket</h3>
            <p className="text-gray-700 text-sm mb-2">Üçlü gösteri + ikram: palyaço + sihirbaz + bubble show + pamuk şeker + popcorn. 2-3 saat kesintisiz eğlence.</p>
            <p className="text-purple-700 text-sm font-semibold">Unutulmaz parti deneyimi. 20+ çocukluk özel organizasyonlar için.</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
          <p className="text-gray-800"><strong>💰 Tasarruf İpucu:</strong> Kombine paketlerde tek tek kiralama toplamından %15-20 daha avantajlı fiyat uygulanır. Ayrıca tek ekiple koordinasyon, lojistik kolaylığı ve kesintisiz program akışı sağlanır.</p>
        </div>
      </section>

      <div className="mb-12">
        <GoogleReviews reviews={reviews} title="Doğum Günü Organizasyonu Müşteri Yorumları" serviceName="Doğum Günü Organizasyonu" serviceUrl="/organizasyonlar/dogum-gunu-organizasyonu" />
      </div>

      {/* BÖLÜM 6 */}
      <section id="checklist-org" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Doğum Günü Organizasyonu Kontrol Listesi</h2>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📋 Planlama</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {['Tarih ve saat kesinleştirildi', 'Mekan belirlendi ve kontrol edildi', 'Hizmet seçimi yapıldı', 'Rezervasyon onaylandı', 'Davetiyeler gönderildi', 'Katılımcı sayısı netleşti'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🎂 Parti Günü</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {['Pasta ve ikramlar hazır', 'Dekorasyon kuruldu', 'Elektrik ve alan kontrol edildi', 'Best Event ekibi bilgilendirildi', 'Fotoğraf makinesi/telefon şarj edildi', 'Yedek plan (hava durumu) hazır'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AuthorExpertise />

      {/* İLGİLİ HİZMETLER */}
      <section className="mb-12 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tüm Doğum Günü Hizmetlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Doğum Günü Organizasyonu', path: '/organizasyonlar/dogum-gunu-organizasyonu', desc: 'A\'dan Z\'ye planlama' },
            { title: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama', desc: 'Doğum günü palyaçosu' },
            { title: 'Sihirbaz Gösterisi', path: '/organizasyonlar/magic-show', desc: 'Profesyonel illüzyon' },
            { title: 'Bubble Show', path: '/organizasyonlar/bubble-show', desc: 'Dev baloncuk gösterisi' },
            { title: 'Pamuk Şeker', path: '/organizasyonlar/pamuk-seker', desc: 'Pamuk şeker ve ikram' },
            { title: 'Full Paket', path: '/organizasyonlar/full-paket-organizasyon', desc: 'Her şey dahil paketler' },
            { title: 'Konsept Doğum Günü', path: '/organizasyonlar/konsept-dogum-gunu', desc: 'Tema bazlı partiler' },
            { title: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler', desc: 'Elsa, Spiderman vb.' },
            { title: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama', desc: 'Profesyonel yüz boyama' }
          ].map((s, i) => (
            <Link key={i} to={s.path} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Doğum Günü Organizasyonu İstanbul 2026</h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">Çocuğunuzun unutulmaz bir doğum günü geçirmesi için profesyonel organizasyon teklifi alın.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+905307309009" className="bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors">📞 0530 730 90 09</a>
          <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition-colors">💬 WhatsApp ile Teklif Al</a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail content={content} relatedServicePath="/organizasyonlar/dogum-gunu-organizasyonu" relatedServiceName="Doğum Günü Organizasyonu" faqData={faqData} slug="dogum-gunu-organizasyonu-2026-rehberi" />
  )
}

export default DogumGunuOrganizasyonuRehber2026
