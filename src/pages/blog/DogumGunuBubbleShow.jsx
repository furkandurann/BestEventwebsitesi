import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'
import GoogleReviews from '../../components/GoogleReviews'
import AuthorExpertise from '../../components/AuthorExpertise'
import TrustSection from '../../components/TrustSection'
import Seo from '../../components/Seo'
import { getReviewsByTags } from '../../data/googleReviews'
import { createBlogPostingSchema, createFAQSchema } from '../../utils/schemaHelpers'

const DogumGunuBubbleShow = () => {
  const reviews = getReviewsByTags(['bubbleshow', 'dogumgunu'], 6)

  const faqData = [
    { question: 'Doğum günü bubble show ne kadar sürer?', answer: 'Standart doğum günü bubble show gösterisi 25-35 dakikadır. Gösteri; küçük baloncuklar, dev baloncuklar, duman baloncukları, ışıklı baloncuklar ve büyük finale (çocuğun dev baloncuğun içine girmesi) kadar ilerler. Kombine paketlerde toplam 90-120 dk program oluşturulur.' },
    { question: 'Bubble show kapalı mekanda yapılabilir mi?', answer: 'Evet. Tavan yüksekliği en az 2.5 metre ve zeminin kaygan olmayan bir yüzeyde olması yeterlidir. Ev salonu, site salonu, restoran özel alanı ve okul spor salonunda güvenle uygulanır. Zemine koruyucu örtü serilir.' },
    { question: 'Bubble show çocukları ıslatır mı?', answer: 'Hayır. Profesyonel bubble show solüsyonu su bazlı değil, gliserin bazlıdır. Baloncuklar patlasa bile ıslaklık oluşturmaz. Zemine dökülen küçük miktardaki solüsyon operatörümüz tarafından temizlenir.' },
    { question: 'Kaç yaş grubuna uygun?', answer: 'Bubble show 2-99 yaş arasında herkesi büyüler. Özellikle 2-6 yaş grubunda hipnotize edici bir etkisi vardır. Büyük çocuklar ve yetişkinler de baloncukların içine girme deneyimini çok sever.' },
    { question: 'Dev baloncuğun içine gerçekten girilebilir mi?', answer: 'Evet! Bu, gösterinin en heyecan verici anıdır. Doğum günü çocuğu özel olarak dev baloncuğun içine girer ve arkadaşları izler. Fotoğraf için mükemmel bir andır. Her etkinlikte en az 3-4 çocuk bu deneyimi yaşar.' },
    { question: 'Bubble show ile pamuk şeker birlikte alınabilir mi?', answer: 'Evet ve harika bir kombinasyondur. Bubble show görsel büyü, pamuk şeker ise lezzet deneyimi sunar. İkisi birlikte doğum gününe hem gösteri hem ikram boyutu katar. Kombine paketlerde indirim uygulanır.' }
  ]

  const blogPostSchema = createBlogPostingSchema({
    title: 'Doğum Günü Bubble Show: Dev Baloncuklarla Büyülü Parti',
    excerpt: 'İstanbul\'da doğum günü bubble show kiralama rehberi. Gösteri akışı, mekan gereksinimleri, yaş grubuna göre etki ve gerçek organizasyon hikayeleri.',
    image: '/content/images/bubbleshow/bubbleshowhero.webp',
    dateISO: '2026-04-10',
    slug: 'dogum-gunu-bubble-show',
    primaryKeyword: 'doğum günü bubble show'
  })
  const faqSchema = createFAQSchema(faqData)

  const content = (
    <>
      <Seo
        title="Doğum Günü Bubble Show İstanbul 2026 | Köpük Gösterisi Kiralama"
        description="İstanbul'da doğum günü bubble show kiralama. Dev baloncuklar, duman efektli köpük gösterisi, çocuğun baloncuğa girmesi. 6 yıl deneyim, 5.000+ etkinlik."
        keywords={['doğum günü bubble show', 'bubble show kiralama', 'köpük gösterisi doğum günü', 'istanbul bubble show', 'dev baloncuk gösterisi', 'çocuk partisi bubble show']}
        canonicalPath="/blog/dogum-gunu-bubble-show"
        image="/content/images/bubbleshow/bubbleshowhero.webp"
        schema={[blogPostSchema, faqSchema]}
        publishedTime="2026-04-10"
      />

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[url('/content/images/bubbleshow/bubbleshowhero.webp')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🫧 Dev Baloncuklar · Duman Efekti · İstanbul Geneli
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Doğum Günü Bubble Show</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">Çocukların gözlerinin büyüdüğü an: dev baloncukların içine girmek. Doğum gününü büyülü bir deneyime dönüştürün.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+905307309009" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">📞 Hemen Ara</a>
            <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20bubble%20show%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">💬 WhatsApp Teklif Al</a>
          </div>
        </div>
      </div>

      {/* İÇİNDEKİLER */}
      <nav className="bg-gray-50 rounded-xl p-6 mb-10 border-l-4 border-blue-500" aria-label="İçindekiler">
        <h2 className="text-xl font-bold text-gray-900 mb-3">📋 İçindekiler</h2>
        <ol className="space-y-2 list-decimal list-inside">
          <li><a href="#bubble-show-nedir" className="text-blue-600 hover:text-blue-700 font-medium">Doğum Günü Bubble Show Nedir?</a></li>
          <li><a href="#gosteri-akisi" className="text-blue-600 hover:text-blue-700 font-medium">30 Dakikalık Gösteri Akışı</a></li>
          <li><a href="#mekan-gereksinimleri" className="text-blue-600 hover:text-blue-700 font-medium">İç Mekan vs Dış Mekan: Hangisi Daha İyi?</a></li>
          <li><a href="#yas-grubu-etkisi" className="text-blue-600 hover:text-blue-700 font-medium">Yaş Grubuna Göre Bubble Show Etkisi</a></li>
          <li><a href="#kombine-bubble" className="text-blue-600 hover:text-blue-700 font-medium">Bubble Show Kombine Paketler</a></li>
          <li><a href="#hikayeler-bubble" className="text-blue-600 hover:text-blue-700 font-medium">Gerçek Organizasyon Hikayeleri</a></li>
          <li><a href="#sss" className="text-blue-600 hover:text-blue-700 font-medium">Sık Sorulan Sorular</a></li>
        </ol>
      </nav>

      {/* BÖLÜM 1 */}
      <section id="bubble-show-nedir" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Doğum Günü Bubble Show Nedir?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Doğum günü bubble show, özel formülasyonlu sabun solüsyonu ile dev baloncuklar, duman baloncukları, ışıklı baloncuklar ve çocuğun baloncuğun içine girdiği interaktif bir gösteridir. Diğer tüm eğlence türlerinden farklı olarak bubble show <strong>hem görsel hem dokunsal bir deneyim</strong> sunar.</p>
        <p className="text-gray-700 leading-relaxed mb-6">Bir çocuğun yüzündeki ifade, dev baloncuğun yavaşça şiştiği ve parlak renklere büründüğü anda tarif edilemez. Bu an, doğum günü partisinin en çok fotoğraflanan ve en çok hatırlanan anıdır.</p>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: '🫧', title: 'Dev Baloncuklar', desc: '1-2 metre çapında dev sabun baloncukları. Yavaşça süzülür, rengarenk parıldar.' },
            { icon: '💨', title: 'Duman Baloncukları', desc: 'İçi dumanla dolu baloncuklar: patladığında gizemli bir sis bulutu oluşur.' },
            { icon: '✨', title: 'Işıklı Baloncuklar', desc: 'UV ışık altında parlayan neon baloncuklar. Karanlık ortamda büyüleyici.' },
            { icon: '🧒', title: 'İçine Girme', desc: 'Doğum günü çocuğu dev baloncuğun içine girer. Partinin zirvesi.' }
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-5 text-center border border-blue-200">
              <span className="text-3xl block mb-2">{item.icon}</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
              <p className="text-gray-600 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BÖLÜM 2 */}
      <section id="gosteri-akisi" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. 30 Dakikalık Doğum Günü Bubble Show Akışı</h2>
        <div className="space-y-4 mb-8">
          {[
            { time: '0-5 dk', title: 'Açılış: Küçük Baloncuk Yağmuru', desc: 'Yüzlerce küçük baloncuk havaya salınır. Çocuklar yakalamaya çalışır, enerji yükselir.', color: 'cyan' },
            { time: '5-12 dk', title: 'Dev Baloncuk Gösterisi', desc: 'Profesyonel aletlerle 1-2 metre çapında dev baloncuklar üretilir. Çocuklar hayretle izler.', color: 'blue' },
            { time: '12-18 dk', title: 'Duman Baloncukları', desc: 'İçi dumanla dolu baloncuklar oluşturulur. Patladığında sis bulutu çıkar. Çocuklar çığlık atar.', color: 'indigo' },
            { time: '18-24 dk', title: 'İnteraktif Bölüm', desc: 'Çocuklar sırayla baloncuk yapmayı dener. Dev baloncuğun içine girme deneyimi başlar.', color: 'violet' },
            { time: '24-30 dk', title: 'Büyük Final', desc: 'Doğum günü çocuğu dev baloncuğun içine girer. Fotoğraf çekimi. Baloncuk yağmuru ile kapanış.', color: 'purple' }
          ].map((step, i) => (
            <div key={i} className={`bg-${step.color}-50 rounded-xl p-5 border-l-4 border-${step.color}-500`}>
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-${step.color}-600 font-bold text-sm bg-${step.color}-100 px-3 py-1 rounded-full`}>{step.time}</span>
                <h3 className="font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BÖLÜM 3 */}
      <section id="mekan-gereksinimleri" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. İç Mekan vs Dış Mekan: Hangisi Daha İyi?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🏠 İç Mekan Bubble Show</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Rüzgar olmadığı için baloncuklar daha uzun dayanır</li>
              <li>✓ Işık kontrolü ile UV efekt uygulanabilir</li>
              <li>✓ Tavan yüksekliği min. 2.5 metre olmalı</li>
              <li>✓ Zeminin kaygan olmamasına dikkat edilmeli</li>
              <li>✓ Koruyucu zemin örtüsü Best Event tarafından sağlanır</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🌳 Dış Mekan Bubble Show</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Daha geniş alan, daha büyük baloncuklar</li>
              <li>✓ Güneş ışığında baloncuklar gökkuşağı renkleri alır</li>
              <li>✕ Rüzgarlı havalarda gösteri kalitesi düşebilir</li>
              <li>✕ Yağmur durumunda iptal/erteleme riski</li>
              <li>✓ Site bahçesi ve villa partileri için ideal</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
          <p className="text-gray-800"><strong>💡 Tavsiye:</strong> İstanbul'da rüzgar ve hava koşulları değişken olduğu için iç mekan bubble show daha garanti sonuç verir. Açık havada yapılacaksa mutlaka yedek plan oluşturulmalıdır.</p>
        </div>
      </section>

      <TrustSection />

      {/* BÖLÜM 4 */}
      <section id="yas-grubu-etkisi" className="mb-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Yaş Grubuna Göre Bubble Show Etkisi</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">👶 2-4 Yaş: Hipnotize Edici</h3>
            <p className="text-gray-700 text-sm">Bu yaş grubunda bubble show neredeyse meditasyon etkisi yapar. Çocuklar sessizce ve hayranlıkla izler. Dev baloncuklar gözlerinin önünde süzülürken ağızları açık kalır. Dokunma ve yakalama isteği güçlüdür.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🧒 5-7 Yaş: Heyecan Patlaması</h3>
            <p className="text-gray-700 text-sm">En heyecanlı yaş grubu. Çığlık atar, koşar, baloncukları yakalamaya çalışır. Dev baloncuğun içine girme deneyimi bu yaşta en büyük etkiyi yapar. Parti boyunca "bir daha yap!" derler.</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🧑 8-10 Yaş: Bilimsel Merak</h3>
            <p className="text-gray-700 text-sm">"Nasıl bu kadar büyük oluyor?", "İçinde ne var?" sorularını sorarlar. Duman baloncukları bu yaşta en çok ilgi çeker. Kendi baloncuklarını yapmayı denemek isterler.</p>
          </div>
        </div>
      </section>

      <div className="mb-12">
        <GoogleReviews reviews={reviews} title="Bubble Show Müşteri Yorumları" serviceName="Doğum Günü Bubble Show" serviceUrl="/organizasyonlar/bubble-show" />
      </div>

      {/* BÖLÜM 5 */}
      <section id="kombine-bubble" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Bubble Show Kombine Paketler</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-2">🫧 + 🎈 Bubble Show + Palyaço</h3>
            <p className="text-gray-700 text-sm mb-2">Bubble show'un görsel büyüsü + palyaçonun enerjik eğlencesi. 3-6 yaş grubunda en çok tercih edilen kombinasyon.</p>
            <Link to="/blog/dogum-gunu-palyacosu" className="text-blue-600 hover:text-blue-700 text-sm font-semibold underline">Doğum günü palyaçosu →</Link>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-2">🫧 + 🎩 Bubble Show + Sihirbaz</h3>
            <p className="text-gray-700 text-sm mb-2">İki farklı görsel şaşkınlık deneyimi. Baloncuklar + illüzyonlar birlikte çalıştığında çocukların gözleri ekrandan ayrılmaz.</p>
            <Link to="/blog/dogum-gunu-sihirbazi" className="text-blue-600 hover:text-blue-700 text-sm font-semibold underline">Doğum günü sihirbazı →</Link>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-2">🫧 + 🍬 Bubble Show + Pamuk Şeker</h3>
            <p className="text-gray-700 text-sm mb-2">Görsel büyü + tatlı ikram. Bubble show izlerken pamuk şeker yemek = çocukların rüyası.</p>
            <Link to="/blog/dogum-gunu-pamuk-seker" className="text-blue-600 hover:text-blue-700 text-sm font-semibold underline">Doğum günü pamuk şeker →</Link>
          </div>
        </div>
      </section>

      {/* BÖLÜM 6 */}
      <section id="hikayeler-bubble" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Gerçek Organizasyon Hikayeleri</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-900 mb-2">🏠 Ümraniye, Site Salonu - 4 Yaş, 20 Çocuk</h3>
            <p className="text-gray-700 text-sm italic mb-3">"Kızım Ada bubble show'u televizyonda görmüştü ve 'ben de istiyorum' dedi. Acaba gerçeği de bu kadar etkili mi diye merak ediyorduk."</p>
            <p className="text-gray-700 text-sm">İlk dev baloncuk şiştiğinde Ada'nın gözleri kocaman açıldı ve "anne bak!" diye bağırdı. 20 çocuğun tamamı 25 dakika boyunca hipnotize olmuş gibi izledi. Ada dev baloncuğun içine girdiğinde salon alkışa boğuldu. Velilerin ortak yorumu: "En iyi yatırım bu oldu."</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-cyan-500">
            <h3 className="font-bold text-gray-900 mb-2">🌳 Bakırköy, Villa Bahçesi - 6 Yaş, 15 Çocuk</h3>
            <p className="text-gray-700 text-sm italic mb-3">"Açık havada yapılacağı için rüzgar konusunda endişeliydik."</p>
            <p className="text-gray-700 text-sm">Neyse ki o gün İstanbul'da havasız bir akşamüstüydü. Bahçede kurulan bubble show alanında güneş ışığında baloncuklar gökkuşağı renklerine büründü. Çocuklar bahçede koşarak baloncukları yakalamaya çalıştı. Fotoğraflar o kadar güzel çıktı ki birçok veli bizi Instagram'da etiketledi.</p>
          </div>
        </div>
      </section>

      <AuthorExpertise />

      {/* İLGİLİ HİZMETLER */}
      <section className="mb-12 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Hizmetlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Bubble Show', path: '/organizasyonlar/bubble-show', desc: 'Dev baloncuk ve köpük gösterisi' },
            { title: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama', desc: 'Doğum günü palyaçosu' },
            { title: 'Sihirbaz Gösterisi', path: '/organizasyonlar/magic-show', desc: 'Profesyonel illüzyon' },
            { title: 'Pamuk Şeker', path: '/organizasyonlar/pamuk-seker', desc: 'Pamuk şeker ve popcorn arabası' },
            { title: 'Doğum Günü Organizasyonu', path: '/organizasyonlar/dogum-gunu-organizasyonu', desc: 'A\'dan Z\'ye planlama' },
            { title: 'Full Paket', path: '/organizasyonlar/full-paket-organizasyon', desc: 'Her şey dahil paketler' }
          ].map((s, i) => (
            <Link key={i} to={s.path} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Doğum Günü Bubble Show İstanbul</h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">Dev baloncukların büyüsünü doğum gününe taşıyın. Profesyonel bubble show teklifi alın.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+905307309009" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">📞 0530 730 90 09</a>
          <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20bubble%20show%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition-colors">💬 WhatsApp ile Teklif Al</a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail content={content} relatedServicePath="/organizasyonlar/bubble-show" relatedServiceName="Bubble Show" faqData={faqData} slug="dogum-gunu-bubble-show" />
  )
}

export default DogumGunuBubbleShow
