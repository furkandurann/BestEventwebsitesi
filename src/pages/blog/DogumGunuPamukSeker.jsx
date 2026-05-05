import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'
import GoogleReviews from '../../components/GoogleReviews'
import AuthorExpertise from '../../components/AuthorExpertise'
import TrustSection from '../../components/TrustSection'
import Seo from '../../components/Seo'
import { getReviewsByTags } from '../../data/googleReviews'
import { createBlogPostingSchema, createFAQSchema } from '../../utils/schemaHelpers'

const DogumGunuPamukSeker = () => {
  const reviews = getReviewsByTags(['pamukseker', 'dogumgunu'], 6)

  const faqData = [
    { question: 'Doğum gününde pamuk şeker arabası kiralama nasıl çalışır?', answer: 'Profesyonel operatör, retro veya standart pamuk şeker arabası ile etkinlik yerine gelir. Makine kurulumu 15 dakika sürer, sonrasında kesintisiz servis başlar. Her çocuk renk ve aroma seçimi yapar, operatör gözleri önünde taze pamuk şeker hazırlar.' },
    { question: 'Pamuk şeker kaç renk seçeneği var?', answer: '8 farklı renk ve aroma sunuyoruz: pembe (çilek), mavi (tutti frutti), yeşil (elma), sarı (muz), mor (üzüm), turuncu (portakal), kırmızı (vişne), beyaz (vanilya). Doğum günü temasına uygun renk kombinasyonları yapılabilir.' },
    { question: 'Popcorn ve çikolata şelalesi birlikte alınabilir mi?', answer: 'Evet ve bu en popüler üçlü ikram paketimizdir. Pamuk şeker + popcorn + çikolata şelalesi birlikte alındığında hem fiyat avantajı hem tek ekiple lojistik kolaylığı sağlanır.' },
    { question: 'Apartman dairesinde pamuk şeker yapılabilir mi?', answer: 'Evet. Kompakt profesyonel makinemiz standart apartman dairelerinde rahatlıkla çalışır. Sadece elektrik prizi yeterlidir. Havalandırma olan bir alana konumlandırılması önerilir.' },
    { question: 'Pamuk şeker alerjiye neden olur mu?', answer: 'Kullandığımız tüm şekerler ve aromalar gıda onaylıdır. Gluten içermez. Ancak spesifik alerji durumlarında etkinlik öncesinde bilgi paylaşılması önerilir. Şeker yerine doğal tatlandırıcılı alternatifler de mevcuttur.' },
    { question: 'Servis ne kadar sürer?', answer: 'Standart doğum günü paketi 2-3 saat servistir. Bu süre çocuk sayısına ve etkinlik akışına göre planlanır. Dakikada 1 adet pamuk şeker üretilir, 15-20 çocukluk partide tek makine rahat yeterlidir.' }
  ]

  const blogPostSchema = createBlogPostingSchema({
    title: 'Doğum Gününde Pamuk Şeker: Retro Araba, Renkli Şekerler ve İkram Gösterisi',
    excerpt: 'Doğum günü partisinde pamuk şeker arabası kiralama rehberi. Retro araba, renk seçenekleri, popcorn ve çikolata şelalesi kombinasyonları.',
    image: '/content/images/Parti Ekipmanları/pamukseker.webp',
    dateISO: '2026-04-10',
    slug: 'dogum-gunu-pamuk-seker',
    primaryKeyword: 'doğum günü pamuk şeker'
  })
  const faqSchema = createFAQSchema(faqData)

  const content = (
    <>
      <Seo
        title="Doğum Gününde Pamuk Şeker İstanbul 2026 | Retro Araba Kiralama"
        description="Doğum günü partisinde pamuk şeker arabası, popcorn ve çikolata şelalesi kiralama. 8 renk, operatör dahil, İstanbul geneli. Üçlü ikram paketi."
        keywords={['doğum günü pamuk şeker', 'pamuk şeker arabası kiralama doğum günü', 'çocuk partisi pamuk şeker', 'doğum günü ikram', 'istanbul pamuk şeker kiralama']}
        canonicalPath="/blog/dogum-gunu-pamuk-seker"
        image="/content/images/Parti Ekipmanları/pamukseker.webp"
        schema={[blogPostSchema, faqSchema]}
        publishedTime="2026-04-10"
      />

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-pink-500 via-rose-400 to-orange-400 rounded-2xl overflow-hidden mb-12">
        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🍬 8 Renk · Retro Araba · Operatör Dahil
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Doğum Gününde Pamuk Şeker</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">Renkli pamuk şekerlerin havada dönüşünü izlemek hem çocuklar hem yetişkinler için büyüleyici bir deneyim. Retro araba ile doğum gününe nostalji katın.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+905307309009" className="bg-white text-pink-600 font-bold px-6 py-3 rounded-xl hover:bg-pink-50 transition-colors">📞 Hemen Ara</a>
            <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20pamuk%20%C5%9Feker%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">💬 WhatsApp Teklif Al</a>
          </div>
        </div>
      </div>

      {/* İÇİNDEKİLER */}
      <nav className="bg-gray-50 rounded-xl p-6 mb-10 border-l-4 border-pink-500" aria-label="İçindekiler">
        <h2 className="text-xl font-bold text-gray-900 mb-3">📋 İçindekiler</h2>
        <ol className="space-y-2 list-decimal list-inside">
          <li><a href="#neden-pamuk-seker" className="text-pink-600 hover:text-pink-700 font-medium">Doğum Gününde Pamuk Şeker Neden Vazgeçilmez?</a></li>
          <li><a href="#renk-aroma" className="text-pink-600 hover:text-pink-700 font-medium">8 Renk ve Aroma: Tema Uyumlu Seçimler</a></li>
          <li><a href="#retro-araba-vs-makine" className="text-pink-600 hover:text-pink-700 font-medium">Retro Araba mı Standart Makine mi?</a></li>
          <li><a href="#uclu-ikram-paketi" className="text-pink-600 hover:text-pink-700 font-medium">Üçlü İkram Paketi: Pamuk Şeker + Popcorn + Çikolata</a></li>
          <li><a href="#parti-icinde-zamanlama" className="text-pink-600 hover:text-pink-700 font-medium">Parti İçinde Zamanlama: Ne Zaman Başlamalı?</a></li>
          <li><a href="#hikayeler-pamuk" className="text-pink-600 hover:text-pink-700 font-medium">Gerçek Organizasyon Hikayeleri</a></li>
          <li><a href="#sss" className="text-pink-600 hover:text-pink-700 font-medium">Sık Sorulan Sorular</a></li>
        </ol>
      </nav>

      {/* BÖLÜM 1 */}
      <section id="neden-pamuk-seker" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Doğum Gününde Pamuk Şeker Neden Vazgeçilmez?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Pamuk şeker, doğum günü partisinde sadece bir ikram değil, canlı bir <strong>gösteri</strong>dir. Çocuklar makinenin başında sıra bekler, rengini seçer, beyaz şekerin renkli bir puf haline dönüşmesini büyülenmiş gibi izler. Bu süreç tek başına 5-10 dakika boyunca her çocuğun dikkatini çeker.</p>
        <p className="text-gray-700 leading-relaxed mb-6">Doğum günü partilerinde en sık yaşanan sorun "çocuklar sıkıldı, ne yapacağız?" durumudur. Pamuk şeker arabası bu sorunu çözer: palyaço veya sihirbaz gösterisi arasındaki boşlukta, pasta beklentisi sırasında veya serbest oyun zamanında çocukların ilgisini sürekli canlı tutar.</p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-pink-50 rounded-xl p-5 border-l-4 border-pink-500">
            <h3 className="font-bold text-gray-900 mb-2">👀 Görsel Gösteri</h3>
            <p className="text-gray-700 text-sm">Şekerin havada dönüşü, renklerin karışımı, pamuk şekerin büyümesi... Çocuklar makinenin başından ayrılmaz.</p>
          </div>
          <div className="bg-orange-50 rounded-xl p-5 border-l-4 border-orange-500">
            <h3 className="font-bold text-gray-900 mb-2">📸 Fotoğraf Köşesi</h3>
            <p className="text-gray-700 text-sm">Retro pamuk şeker arabası başlı başına bir fotoğraf noktasıdır. Renkli pamuk şekerler Instagram'da en çok paylaşılan doğum günü kareleridir.</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-5 border-l-4 border-yellow-500">
            <h3 className="font-bold text-gray-900 mb-2">🕐 Sürekli İlgi</h3>
            <p className="text-gray-700 text-sm">Parti boyunca kesintisiz servis. Palyaço molasında, pasta beklerken, serbest zamanda... Çocuklar her an pamuk şekere gelebilir.</p>
          </div>
        </div>
      </section>

      {/* BÖLÜM 2 */}
      <section id="renk-aroma" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. 8 Renk ve Aroma: Tema Uyumlu Seçimler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { renk: 'Pembe', aroma: 'Çilek', bg: 'bg-pink-100', border: 'border-pink-300', text: 'text-pink-700' },
            { renk: 'Mavi', aroma: 'Tutti Frutti', bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700' },
            { renk: 'Yeşil', aroma: 'Elma', bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-700' },
            { renk: 'Sarı', aroma: 'Muz', bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-700' },
            { renk: 'Mor', aroma: 'Üzüm', bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-700' },
            { renk: 'Turuncu', aroma: 'Portakal', bg: 'bg-orange-100', border: 'border-orange-300', text: 'text-orange-700' },
            { renk: 'Kırmızı', aroma: 'Vişne', bg: 'bg-red-100', border: 'border-red-300', text: 'text-red-700' },
            { renk: 'Beyaz', aroma: 'Vanilya', bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-700' }
          ].map((item, i) => (
            <div key={i} className={`${item.bg} ${item.border} border rounded-xl p-4 text-center`}>
              <p className={`font-bold ${item.text}`}>{item.renk}</p>
              <p className="text-gray-600 text-xs mt-1">{item.aroma}</p>
            </div>
          ))}
        </div>
        <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-lg">
          <p className="text-gray-800"><strong>🎨 Tema Uyumu:</strong> Elsa partisi için mavi + beyaz, prenses teması için pembe + mor, Spiderman için kırmızı + mavi... Doğum günü konseptine uygun renk kombinasyonları yapılır.</p>
        </div>
      </section>

      {/* BÖLÜM 3 */}
      <section id="retro-araba-vs-makine" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Retro Araba mı Standart Makine mi?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🎪 Retro Pamuk Şeker Arabası</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Nostaljik ahşap tasarım, renkli şeritler, tabela</li>
              <li>✓ Fotoğraf köşesine dönüşür</li>
              <li>✓ Konsept partilerde görsel bütünlük sağlar</li>
              <li>✓ Site etkinlikleri ve düğünlerde çok etkili</li>
              <li>✕ Fiyatı standart makineye göre daha yüksek</li>
            </ul>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ Standart Profesyonel Makine</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Kompakt, her mekana sığar</li>
              <li>✓ Apartman dairelerine rahat girer</li>
              <li>✓ Daha ekonomik seçenek</li>
              <li>✓ Aynı kalitede pamuk şeker üretir</li>
              <li>✕ Görsel dekoratif etkisi daha sınırlı</li>
            </ul>
          </div>
        </div>
      </section>

      <TrustSection />

      {/* BÖLÜM 4 */}
      <section id="uclu-ikram-paketi" className="mb-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Üçlü İkram Paketi: Pamuk Şeker + Popcorn + Çikolata Şelalesi</h2>
        <p className="text-gray-700 leading-relaxed mb-6">İstanbul'daki doğum günü organizasyonlarında en çok talep edilen ikram kombinasyonu üçlü pakettir. Her biri farklı bir duyu deneyimi sunar:</p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Link to="/blog/pamuk-seker-arabasi-kiralama-fiyatlari" className="bg-pink-50 rounded-xl p-5 border border-pink-200 hover:shadow-md transition-all group">
            <span className="text-2xl block mb-2">🍬</span>
            <h3 className="font-bold text-gray-900 group-hover:text-pink-600 mb-1">Pamuk Şeker</h3>
            <p className="text-gray-600 text-sm">Görsel gösteri + tatlı lezzet. 8 renk, tema uyumlu.</p>
          </Link>
          <Link to="/blog/popcorn-arabasi-kiralama-fiyatlari" className="bg-yellow-50 rounded-xl p-5 border border-yellow-200 hover:shadow-md transition-all group">
            <span className="text-2xl block mb-2">🍿</span>
            <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 mb-1">Popcorn Arabası</h3>
            <p className="text-gray-600 text-sm">Taze patlayan mısır kokusu + çıtırtısı. Sinema deneyimi.</p>
          </Link>
          <Link to="/blog/cikolata-selalesi-kiralama-fiyatlari" className="bg-amber-50 rounded-xl p-5 border border-amber-200 hover:shadow-md transition-all group">
            <span className="text-2xl block mb-2">🍫</span>
            <h3 className="font-bold text-gray-900 group-hover:text-amber-600 mb-1">Çikolata Şelalesi</h3>
            <p className="text-gray-600 text-sm">Akan çikolata + meyve tabağı. Premium ikram deneyimi.</p>
          </Link>
        </div>
      </section>

      {/* BÖLÜM 5 */}
      <section id="parti-icinde-zamanlama" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Parti İçinde Zamanlama: Ne Zaman Başlamalı?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Pamuk şeker servisi parti boyunca aktif kalır ancak stratejik zamanlama etkiyi artırır:</p>
        <ul className="space-y-3 mb-8">
          {[
            { zaman: 'Parti başlangıcı (ilk 30 dk)', durum: 'Çocuklar gelirken karşılama ikramı olarak mükemmel. Misafirler toplanırken pamuk şeker arabası ilgi çeker.' },
            { zaman: 'Gösteri arası (palyaço/sihirbaz molası)', durum: 'Performans arasında çocukların enerjisini canlı tutar. Sıra beklerken sıkılma yaşanmaz.' },
            { zaman: 'Pasta öncesi bekleme', durum: 'Pasta hazırlığı sırasında çocukları meşgul eder. Ebeveynler rahat hazırlık yapar.' },
            { zaman: 'Parti sonrası (son 30 dk)', durum: 'Veda ikramı olarak güzel bir kapanış sağlar. Çocuklar ellerinde pamuk şekerle ayrılır.' }
          ].map((item, i) => (
            <li key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <span className="font-bold text-pink-600 text-sm">{item.zaman}</span>
              <p className="text-gray-700 text-sm mt-1">{item.durum}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mb-12">
        <GoogleReviews reviews={reviews} title="Pamuk Şeker Hizmeti Müşteri Yorumları" serviceName="Doğum Günü Pamuk Şeker" serviceUrl="/organizasyonlar/pamuk-seker" />
      </div>

      {/* BÖLÜM 6 */}
      <section id="hikayeler-pamuk" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Gerçek Organizasyon Hikayeleri</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-pink-500">
            <h3 className="font-bold text-gray-900 mb-2">🎀 Beylikdüzü, Site Etkinliği - 6 Yaş, 35 Çocuk</h3>
            <p className="text-gray-700 text-sm italic mb-3">"Site yönetimi olarak yaz şenliği düzenliyorduk. 35 çocuğu eğlendirecek bir çözüm lazımdı."</p>
            <p className="text-gray-700 text-sm">Retro pamuk şeker arabası + popcorn arabası kombinasyonu kurduk. 4 saat kesintisiz servis verdik. Site bahçesinde arabalar bir çekim merkezi oldu. Sadece çocuklar değil, veliler de sıraya girdi. Site yönetimi sonraki etkinlik için hemen tarih aldı.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
            <h3 className="font-bold text-gray-900 mb-2">🏠 Kadıköy, Ev Partisi - 5 Yaş, 12 Çocuk</h3>
            <p className="text-gray-700 text-sm italic mb-3">"Elsa temalı bir parti yapıyorduk. Mavi ve beyaz pamuk şeker istedik."</p>
            <p className="text-gray-700 text-sm">Kompakt makine ile mavi (tutti frutti) ve beyaz (vanilya) pamuk şeker servis ettik. <Link to="/blog/dogum-gunu-palyacosu" className="text-pink-600 hover:text-pink-700 font-semibold underline">Palyaço</Link> gösterisi arasında çocuklar pamuk şeker köşesinde toplandı. Elsa temasıyla renk uyumu mükemmeldi.</p>
          </div>
        </div>
      </section>

      <AuthorExpertise />

      {/* İLGİLİ HİZMETLER */}
      <section className="mb-12 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Hizmetlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Pamuk Şeker Kiralama', path: '/organizasyonlar/pamuk-seker', desc: 'Pamuk şeker ve parti ekipmanları' },
            { title: 'Çikolata Şelalesi', path: '/organizasyonlar/cikolata-selalesi', desc: 'Premium çikolata deneyimi' },
            { title: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama', desc: 'Doğum günü palyaçosu' },
            { title: 'Bubble Show', path: '/organizasyonlar/bubble-show', desc: 'Dev baloncuk gösterisi' },
            { title: 'Doğum Günü Organizasyonu', path: '/organizasyonlar/dogum-gunu-organizasyonu', desc: 'A\'dan Z\'ye planlama' },
            { title: 'Konsept Doğum Günü', path: '/organizasyonlar/konsept-dogum-gunu', desc: 'Tema bazlı parti organizasyonu' }
          ].map((s, i) => (
            <Link key={i} to={s.path} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Doğum Gününde Pamuk Şeker İstanbul</h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">Renkli pamuk şekerler, retro araba ve taze ikram deneyimi. Doğum günü teklifi alın.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+905307309009" className="bg-white text-pink-600 font-bold px-8 py-3 rounded-xl hover:bg-pink-50 transition-colors">📞 0530 730 90 09</a>
          <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20pamuk%20%C5%9Feker%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition-colors">💬 WhatsApp ile Teklif Al</a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail content={content} relatedServicePath="/organizasyonlar/pamuk-seker" relatedServiceName="Pamuk Şeker" faqData={faqData} slug="dogum-gunu-pamuk-seker" />
  )
}

export default DogumGunuPamukSeker
