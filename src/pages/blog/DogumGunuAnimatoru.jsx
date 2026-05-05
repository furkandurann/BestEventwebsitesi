import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'
import GoogleReviews from '../../components/GoogleReviews'
import AuthorExpertise from '../../components/AuthorExpertise'
import TrustSection from '../../components/TrustSection'
import Seo from '../../components/Seo'
import { getReviewsByTags } from '../../data/googleReviews'
import { createBlogPostingSchema, createFAQSchema } from '../../utils/schemaHelpers'

const DogumGunuAnimatoru = () => {
  const reviews = getReviewsByTags(['palyaco', 'dogumgunu', 'genel'], 6)

  const faqData = [
    { question: 'Doğum günü animatörü ne yapar?', answer: 'Doğum günü animatörü, parti boyunca çocukların eğlence akışını yöneten profesyonel bir performanscıdır. Oyunlar organize eder, müzik eşliğinde dans yaptırır, yarışmalar düzenler, yüz boyama ve sosis balon yapar, pasta kesimini koordine eder ve çocukların enerjisini 60-120 dakika boyunca yönetir.' },
    { question: 'Animatör ile palyaço arasındaki fark nedir?', answer: 'Palyaço, komik kostüm ve makyajla gelen animatördür. Animatör ise kostümsüz veya tema kostümüyle (korsan, prenses koçu, sporcu) gelen profesyoneldir. İkisi de aynı yeteneklere sahiptir: oyun yönetimi, balon, yüz boyama, dans. Fark sadece görsel sunumdadır.' },
    { question: 'Kaç yaş grubuna uygun?', answer: 'Doğum günü animatörü 3-12 yaş arası tüm çocuk gruplarına uygun program sunabilir. 3-5 yaş için yumuşak ve müzik ağırlıklı, 6-8 yaş için oyun ve yarışma ağırlıklı, 9-12 yaş için takım bazlı ve rekabetçi format uygulanır.' },
    { question: 'Animatör kaç saat kalır?', answer: 'Standart doğum günü animatör programı 60-90 dakikadır. 2 saate kadar uzatılabilir. Kombine paketlerde (animatör + sihirbaz veya + bubble show) toplam 2-3 saatlik kesintisiz eğlence akışı oluşturulur.' },
    { question: 'Animatör evde çalışabilir mi?', answer: 'Evet, animatörlerimiz en sık ev partilerinde hizmet verir. Salon büyüklüğü fark etmez; profesyonel animatör küçük alanlarda da etkili program yürütür. Müzik sistemi, balon malzemeleri ve yüz boyama seti ile gelir.' },
    { question: 'İki animatör gerekir mi?', answer: '20 çocuğa kadar tek animatör yeterlidir. 20-40 çocukluk etkinliklerde ikinci animatör veya yardımcı operatör önerilir. 40+ çocukta mutlaka ikili ekip çalışması yapılmalıdır.' }
  ]

  const blogPostSchema = createBlogPostingSchema({
    title: 'Doğum Günü Animatörü: Program Akışı, Seçim Kriterleri ve Fiyat Rehberi',
    excerpt: 'İstanbul\'da doğum günü animatörü kiralama rehberi. Animatör ile palyaço farkı, program içerikleri, yaş grubuna göre format ve kombine paketler.',
    image: '/content/images/palyaco/palyacogrupoyunlari.webp',
    dateISO: '2026-04-10',
    slug: 'dogum-gunu-animatoru',
    primaryKeyword: 'doğum günü animatörü'
  })
  const faqSchema = createFAQSchema(faqData)

  const content = (
    <>
      <Seo
        title="Doğum Günü Animatörü İstanbul 2026 | Profesyonel Animatör Kiralama"
        description="İstanbul'da doğum günü animatörü kiralama. Oyun yönetimi, yüz boyama, sosis balon, mini disko, yarışmalar. Palyaço + animatör farkı ve kombine paketler."
        keywords={['doğum günü animatörü', 'animatör kiralama istanbul', 'çocuk animatörü', 'doğum günü animasyon', 'parti animatörü', 'çocuk partisi animatör']}
        canonicalPath="/blog/dogum-gunu-animatoru"
        image="/content/images/palyaco/palyacogrupoyunlari.webp"
        schema={[blogPostSchema, faqSchema]}
        publishedTime="2026-04-10"
      />

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl overflow-hidden mb-12">
        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🎯 Oyun Yönetimi · Yarışmalar · İstanbul Geneli
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Doğum Günü Animatörü</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">Profesyonel animatör ile doğum günü partisini baştan sona enerjik, organize ve unutulmaz kılın. Oyunlar, dans, yarışmalar ve daha fazlası.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+905307309009" className="bg-white text-emerald-600 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors">📞 Hemen Ara</a>
            <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20animat%C3%B6r%C3%BC%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">💬 WhatsApp Teklif Al</a>
          </div>
        </div>
      </div>

      {/* İÇİNDEKİLER */}
      <nav className="bg-gray-50 rounded-xl p-6 mb-10 border-l-4 border-emerald-500" aria-label="İçindekiler">
        <h2 className="text-xl font-bold text-gray-900 mb-3">📋 İçindekiler</h2>
        <ol className="space-y-2 list-decimal list-inside">
          <li><a href="#animtor-nedir" className="text-emerald-600 hover:text-emerald-700 font-medium">Doğum Günü Animatörü Nedir?</a></li>
          <li><a href="#animtor-palyaco-farki" className="text-emerald-600 hover:text-emerald-700 font-medium">Animatör ile Palyaço Arasındaki Fark</a></li>
          <li><a href="#program-icerigi" className="text-emerald-600 hover:text-emerald-700 font-medium">Animatör Program İçeriği</a></li>
          <li><a href="#yas-grubu-animtor" className="text-emerald-600 hover:text-emerald-700 font-medium">Yaş Grubuna Göre Animasyon Formatı</a></li>
          <li><a href="#secim-kriterleri-animtor" className="text-emerald-600 hover:text-emerald-700 font-medium">Profesyonel Animatör Seçim Kriterleri</a></li>
          <li><a href="#kombine-animtor" className="text-emerald-600 hover:text-emerald-700 font-medium">Animatör + Sihirbaz + Bubble Show Paketleri</a></li>
          <li><a href="#sss" className="text-emerald-600 hover:text-emerald-700 font-medium">Sık Sorulan Sorular</a></li>
        </ol>
      </nav>

      {/* BÖLÜM 1 */}
      <section id="animtor-nedir" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Doğum Günü Animatörü Nedir?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Doğum günü animatörü, çocuk partilerinde <strong>eğlence akışını profesyonel olarak yöneten</strong> kişidir. Sadece oyun oynatmak değil; zamanlama yapmak, enerji yönetmek, utangaç çocukları dahil etmek, hiperaktif çocukları kanalize etmek ve 60-120 dakika boyunca kesintisiz eğlence sağlamak animatörün görevidir.</p>
        <p className="text-gray-700 leading-relaxed mb-6">İyi bir doğum günü animatörü, partide ebeveynlerin en büyük yükünü omuzlar: <strong>"Çocuklar sıkılmasın, kavga etmesin ve eğlensin."</strong> Bu üç hedefe ulaşmak için oyun, dans, yarışma, balon ve yüz boyama gibi araçları profesyonelce kullanır.</p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { icon: '🎮', title: 'Oyun Yönetimi', desc: 'Müzikli sandalye, donmuş heykel, renk yarışması, hazine avı gibi grup oyunları organize eder.' },
            { icon: '🎈', title: 'Sosis Balon Şekillendirme', desc: 'Köpek, kılıç, çiçek, taç, kelebek... Her çocuğa özel balon şekli yapılır.' },
            { icon: '🎨', title: 'Yüz Boyama', desc: 'Kelebek, kaplan, prenses, süperman desenleri. Dermatolog onaylı boyalar kullanılır.' },
            { icon: '💃', title: 'Mini Disko ve Dans', desc: 'Popüler çocuk şarkılarıyla dans partisi. Disko ışıkları ve enerji patlaması.' },
            { icon: '🏆', title: 'Yarışmalar ve Ödüller', desc: 'Takım oyunları, bilgi yarışması, en iyi dansçı... Mini ödüllerle motivasyon.' },
            { icon: '🎂', title: 'Pasta Koordinasyonu', desc: 'Doğum günü şarkısı, mum üfleme, alkış ve tezahürat organizasyonu.' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex gap-3">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BÖLÜM 2 */}
      <section id="animtor-palyaco-farki" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Animatör ile Palyaço Arasındaki Fark</h2>
        <p className="text-gray-700 leading-relaxed mb-6">En çok sorulan sorulardan biri: "Animatör mü alsam yoksa palyaço mu?" Cevap basit: <strong>ikisi de aynı yeteneklere sahiptir, fark sadece görsel sunumdadır.</strong></p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Animatör</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Kostümsüz veya tema kostümüyle gelir</li>
              <li>• Daha "abla/abi" formatında yaklaşım</li>
              <li>• 8-12 yaş grubunda daha çok tercih edilir</li>
              <li>• Spor, yarışma ve takım oyunları ağırlıklı</li>
              <li>• Çocuklar "çocuksu" bulmaz</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🎈 Palyaço</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Komik kostüm, peruk ve makyaj ile gelir</li>
              <li>• Renkli ve eğlenceli görsel etki</li>
              <li>• 3-7 yaş grubunda daha çok tercih edilir</li>
              <li>• Komedi, balon ve dans ağırlıklı</li>
              <li>• Fotoğraflarda çok renkli kareler oluşur</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
          <p className="text-gray-800"><strong>💡 Tavsiye:</strong> 3-7 yaş partilerinde <Link to="/blog/dogum-gunu-palyacosu" className="text-emerald-600 font-semibold underline">palyaço</Link> görsel olarak daha etkilidir. 8+ yaş grubunda animatör formatı daha çok tercih edilir. 5-8 yaş kararsızlığında palyaço genellikle doğru seçimdir.</p>
        </div>
      </section>

      {/* BÖLÜM 3 */}
      <section id="program-icerigi" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. 90 Dakikalık Animatör Program İçeriği</h2>
        <div className="space-y-3 mb-8">
          {[
            { time: '0-10 dk', title: 'Karşılama ve Tanışma', desc: 'Animatör çocuklarla tanışır, isimlerini öğrenir. Müzik başlar, enerji yükselir.' },
            { time: '10-25 dk', title: 'Isınma Oyunları', desc: 'Donmuş heykel, renk yarışması, müzikli sandalye. Herkes dahil olur.' },
            { time: '25-40 dk', title: 'Sosis Balon Gösterisi', desc: 'Her çocuğa özel balon şekli. Seçim yapma heyecanı, izleme keyfi.' },
            { time: '40-55 dk', title: 'Yüz Boyama', desc: 'Sırayla yüz boyama. Diğerleri serbest dans ve balon oyunu.' },
            { time: '55-70 dk', title: 'Takım Yarışmaları', desc: 'İki takıma bölünme, mini olimpiyatlar, balon patlatma yarışı. Ödüller.' },
            { time: '70-80 dk', title: 'Mini Disko', desc: 'Disko ışıkları, popüler şarkılar, dans partisi. En iyi dansçı seçimi.' },
            { time: '80-90 dk', title: 'Pasta ve Veda', desc: 'Doğum günü şarkısı, pasta kesimi, toplu fotoğraf, balon hediyeler.' }
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0 mt-0.5">{step.time}</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TrustSection />

      {/* BÖLÜM 4 */}
      <section id="yas-grubu-animtor" className="mb-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Yaş Grubuna Göre Animasyon Formatı</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">3-5 Yaş: Yumuşak ve Müzikli</h3>
            <p className="text-gray-700 text-sm">Müzik ağırlıklı, basit oyunlar, çok sayıda balon. Animatör sakin ve sabırlı. Yüz boyama bu yaşta en sevilen aktivite. 45-60 dakika yeterli.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">6-8 Yaş: Enerjik ve Çeşitli</h3>
            <p className="text-gray-700 text-sm">Grup oyunları, yarışmalar, sosis balon, mini disko. En geniş aktivite yelpazesi bu yaş grubuna sunulur. 60-90 dakika ideal.</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">9-12 Yaş: Rekabetçi ve Sporcu</h3>
            <p className="text-gray-700 text-sm">Takım oyunları, mini olimpiyatlar, bilgi yarışması, dans battle. Ödül mekanizması çok etkili. Animatör "koç" formatında. 60-90 dakika ideal.</p>
          </div>
        </div>
      </section>

      <div className="mb-12">
        <GoogleReviews reviews={reviews} title="Animatör Hizmeti Müşteri Yorumları" serviceName="Doğum Günü Animatörü" serviceUrl="/organizasyonlar/palyaco-kiralama" />
      </div>

      {/* BÖLÜM 5 */}
      <section id="secim-kriterleri-animtor" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Profesyonel Animatör Seçim Kriterleri</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: 'Deneyim', desc: 'Kaç etkinlik yapmış? Farklı yaş gruplarıyla çalışmış mı? Referans ve Google yorumları kontrol edin.' },
            { title: 'Program Çeşitliliği', desc: 'Sadece oyun mu yoksa balon, yüz boyama, dans, yarışma dahil mi? Kapsamlı program = kesintisiz eğlence.' },
            { title: 'Enerji ve İletişim', desc: 'Çocuklarla iletişimi nasıl? Utangaç çocuğu dahil edebilir mi? İlk telefon görüşmesindeki enerji ipucu verir.' },
            { title: 'Malzeme Kalitesi', desc: 'Yüz boyaları dermatolojik mi? Balonlar kaliteli mi? Müzik sistemi çalışır durumda mı? Profesyonellik detaylarda gizlidir.' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BÖLÜM 6 */}
      <section id="kombine-animtor" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Animatör + Sihirbaz + Bubble Show Paketleri</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-r from-emerald-50 to-purple-50 rounded-xl p-6 border border-emerald-200">
            <h3 className="font-bold text-gray-900 mb-2">🎯 + 🎩 Animatör + Sihirbaz</h3>
            <p className="text-gray-700 text-sm mb-2">Animatörün enerjik oyunları + sihirbazın büyülü gösterisi. 90-120 dakika kesintisiz eğlence.</p>
            <Link to="/blog/dogum-gunu-sihirbazi" className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold underline">Doğum günü sihirbazı →</Link>
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200">
            <h3 className="font-bold text-gray-900 mb-2">🎯 + 🫧 Animatör + Bubble Show</h3>
            <p className="text-gray-700 text-sm mb-2">Oyun enerjisi + baloncuk büyüsü. 3-7 yaş grubunda mükemmel kombinasyon.</p>
            <Link to="/blog/dogum-gunu-bubble-show" className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold underline">Doğum günü bubble show →</Link>
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-pink-50 rounded-xl p-6 border border-emerald-200">
            <h3 className="font-bold text-gray-900 mb-2">🎯 + 🍬 Animatör + Pamuk Şeker</h3>
            <p className="text-gray-700 text-sm mb-2">Oyun aralarında pamuk şeker ikramı. Çocukların enerjisini hem oyunla hem lezzetle canlı tutar.</p>
            <Link to="/blog/dogum-gunu-pamuk-seker" className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold underline">Doğum günü pamuk şeker →</Link>
          </div>
        </div>
      </section>

      <AuthorExpertise />

      {/* İLGİLİ HİZMETLER */}
      <section className="mb-12 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Hizmetlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama', desc: 'Doğum günü palyaçosu' },
            { title: 'Sihirbaz Gösterisi', path: '/organizasyonlar/magic-show', desc: 'Profesyonel illüzyon' },
            { title: 'Bubble Show', path: '/organizasyonlar/bubble-show', desc: 'Dev baloncuk gösterisi' },
            { title: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama', desc: 'Profesyonel yüz boyama' },
            { title: 'Doğum Günü Organizasyonu', path: '/organizasyonlar/dogum-gunu-organizasyonu', desc: 'A\'dan Z\'ye planlama' },
            { title: 'Full Paket', path: '/organizasyonlar/full-paket-organizasyon', desc: 'Her şey dahil paketler' }
          ].map((s, i) => (
            <Link key={i} to={s.path} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Doğum Günü Animatörü İstanbul</h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">Profesyonel animatör ile çocukların partisini enerjik ve organize hale getirin.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+905307309009" className="bg-white text-emerald-600 font-bold px-8 py-3 rounded-xl hover:bg-emerald-50 transition-colors">📞 0530 730 90 09</a>
          <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20animat%C3%B6r%C3%BC%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition-colors">💬 WhatsApp ile Teklif Al</a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail content={content} relatedServicePath="/organizasyonlar/palyaco-kiralama" relatedServiceName="Palyaço / Animatör Kiralama" faqData={faqData} slug="dogum-gunu-animatoru" />
  )
}

export default DogumGunuAnimatoru
