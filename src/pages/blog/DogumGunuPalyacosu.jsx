import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'
import GoogleReviews from '../../components/GoogleReviews'
import AuthorExpertise from '../../components/AuthorExpertise'
import TrustSection from '../../components/TrustSection'
import Seo from '../../components/Seo'
import { getReviewsByTags } from '../../data/googleReviews'
import { createBlogPostingSchema, createFAQSchema } from '../../utils/schemaHelpers'

const DogumGunuPalyacosu = () => {
  const reviews = getReviewsByTags(['palyaco', 'dogumgunu'], 6)

  const faqData = [
    { question: 'Doğum günü palyaçosu kaç yaş grubuna uygun?', answer: 'Profesyonel doğum günü palyaçosu 3-10 yaş arası çocuklar için idealdir. 3 yaş altı çocuklarda ilk temasda çekinme olabilir ancak deneyimli palyaçolar bunu birkaç dakikada aşar. 10 yaş üzeri çocuklarda ise interaktif sihirbazlık numaraları ve yarışma formatları daha etkili olur.' },
    { question: 'Doğum günü palyaçosu ne kadar süre kalır?', answer: 'Standart doğum günü palyaçosu programı 60-90 dakikadır. Bu süre; karşılama, ısınma oyunları, sosis balon gösterisi, yüz boyama, grup oyunları ve final dansını kapsar. Çocuk sayısı ve yaş grubuna göre süre 45 dakikaya kısaltılabilir veya 120 dakikaya uzatılabilir.' },
    { question: 'Doğum günü palyaçosu fiyatları neye göre değişir?', answer: 'Fiyat; etkinlik süresi, paket içeriği (yüz boyama, sosis balon, mini disko dahil mi), çocuk sayısı, mekan tipi ve İstanbul içi lokasyona göre değişir. Doğru teklif için tarih, saat, semt, çocuk sayısı ve yaş grubunu birlikte paylaşmanız yeterlidir.' },
    { question: 'Ev partisinde palyaço kiralayabilir miyim?', answer: 'Evet, doğum günü palyaçomuz ev partilerinde en sık hizmet verdiğimiz formattır. Salon büyüklüğü fark etmez; palyaçomuz küçük alanlarda da akıcı bir program yürütür. Apartman dairesi, villa, site salonu hepsinde deneyimimiz var.' },
    { question: 'Palyaço çocukları korkutur mu?', answer: 'Profesyonel doğum günü palyaçosu çocukları korkutmaz. Best Event palyaçoları yumuşak makyaj, dostça yaklaşım ve kademeli tanışma tekniği kullanır. İlk 3-5 dakika uzaktan el sallama ve komik seslerle başlar, çocuk hazır olduğunda yakınlaşır. 6 yıllık deneyimimizde korku yaşanan etkinlik oranı %2 nin altındadır.' },
    { question: 'Palyaço hangi aktiviteleri yapar?', answer: 'Doğum günü palyaçosu programı: sosis balon şekillendirme (köpek, kılıç, çiçek, taç), yüz boyama, grup oyunları (müzikli sandalye, donmuş heykel, renk yarışması), mini disko, dans gösterisi ve doğum günü şarkısı eşliğinde pasta kesimi koordinasyonunu içerir.' },
    { question: 'Palyaço ile birlikte sihirbaz veya bubble show alabilir miyim?', answer: 'Evet, kombine paketler en çok tercih edilen formattır. Palyaço + sihirbaz, palyaço + bubble show veya üçlü paket seçenekleri mevcuttur. Kombine paketlerde hem fiyat avantajı hem de kesintisiz eğlence akışı sağlanır.' },
    { question: 'İstanbul\'un her semtine palyaço gönderebilir misiniz?', answer: 'Evet, İstanbul\'un Anadolu ve Avrupa yakasında tüm semtlere hizmet veriyoruz. Kadıköy, Maltepe, Kartal, Beşiktaş, Şişli, Bakırköy, Ümraniye, Beylikdüzü dahil 39 ilçeye ulaşım planlaması yapıyoruz.' }
  ]

  const blogPostSchema = createBlogPostingSchema({
    title: 'Doğum Günü Palyaçosu: Çocuğunuzun Partisini Unutulmaz Kılmanın Yolu',
    excerpt: 'İstanbul\'da doğum günü palyaçosu kiralama rehberi. Yaş grubuna göre program akışı, palyaço seçim kriterleri, ebeveyn rehberi ve gerçek organizasyon hikayeleri.',
    image: '/content/images/palyaco/palyacoanaherogrupoyunlari.webp',
    dateISO: '2026-04-10',
    slug: 'dogum-gunu-palyacosu',
    primaryKeyword: 'doğum günü palyaçosu'
  })
  const faqSchema = createFAQSchema(faqData)

  const content = (
    <>
      <Seo
        title="Doğum Günü Palyaçosu İstanbul 2026 | Profesyonel Palyaço Kiralama"
        description="İstanbul'da doğum günü palyaçosu kiralama. Yaş grubuna göre program, sosis balon, yüz boyama, grup oyunları dahil. 6 yıllık deneyim, 5.000+ mutlu çocuk."
        keywords={['doğum günü palyaçosu', 'doğum günü palyaçosu kiralama', 'çocuk doğum günü palyaço', 'istanbul palyaço kiralama', 'palyaço organizasyonu', 'doğum günü eğlencesi']}
        canonicalPath="/blog/dogum-gunu-palyacosu"
        image="/content/images/palyaco/palyacoanaherogrupoyunlari.webp"
        schema={[blogPostSchema, faqSchema]}
        publishedTime="2026-04-10"
      />

      {/* HERO BÖLÜMÜ */}
      <div className="relative bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🎈 6 Yıl · 5.000+ Mutlu Çocuk · İstanbul Geneli
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Doğum Günü Palyaçosu
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
            Çocuğunuzun yüzündeki o gülümseme için profesyonel doğum günü palyaçosu. Sosis balon, yüz boyama, grup oyunları ve mini disko dahil.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+905307309009" className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors">
              📞 Hemen Ara
            </a>
            <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20palya%C3%A7osu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">
              💬 WhatsApp Teklif Al
            </a>
          </div>
        </div>
      </div>

      {/* İÇİNDEKİLER */}
      <nav className="bg-gray-50 rounded-xl p-6 mb-10 border-l-4 border-red-500" aria-label="İçindekiler">
        <h2 className="text-xl font-bold text-gray-900 mb-3">📋 İçindekiler</h2>
        <ol className="space-y-2 list-decimal list-inside">
          <li><a href="#neden-dogum-gunu-palyacosu" className="text-red-600 hover:text-red-700 font-medium">Doğum Günü Palyaçosu Nedir, Neden Bu Kadar Etkili?</a></li>
          <li><a href="#yas-grubuna-gore-program" className="text-red-600 hover:text-red-700 font-medium">Yaş Grubuna Göre Palyaço Program Akışı</a></li>
          <li><a href="#90-dakikalik-program" className="text-red-600 hover:text-red-700 font-medium">90 Dakikalık Örnek Doğum Günü Palyaçosu Programı</a></li>
          <li><a href="#palyaco-secim-kriterleri" className="text-red-600 hover:text-red-700 font-medium">Profesyonel Palyaço Seçerken Dikkat Edilecek 7 Kriter</a></li>
          <li><a href="#ebeveyn-rehberi" className="text-red-600 hover:text-red-700 font-medium">Ebeveyn Rehberi: Palyaço Varken Siz Ne Yapmalısınız?</a></li>
          <li><a href="#kombine-paketler" className="text-red-600 hover:text-red-700 font-medium">Palyaço + Sihirbaz + Bubble Show: Kombine Paketler</a></li>
          <li><a href="#gercek-hikayeler" className="text-red-600 hover:text-red-700 font-medium">Gerçek Organizasyon Hikayeleri</a></li>
          <li><a href="#sss" className="text-red-600 hover:text-red-700 font-medium">Sık Sorulan Sorular</a></li>
        </ol>
      </nav>

      {/* BÖLÜM 1 */}
      <section id="neden-dogum-gunu-palyacosu" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          1. Doğum Günü Palyaçosu Nedir, Neden Bu Kadar Etkili?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Doğum günü palyaçosu, çocuk partilerinde eğlence akışını baştan sona yöneten profesyonel bir performanscıdır. Sadece komik bir kostüm giyen biri değil; çocuk psikolojisini bilen, dikkat yönetimi yapabilen, enerjiyi kontrol eden ve 60-90 dakika boyunca kesintisiz eğlence sunan bir uzmandır.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Bir doğum günü partisinde palyaço olmasaydı ne olurdu? Çocuklar ilk 15 dakika oynar, sonra sıkılır. Ebeveynler pasta kesimini ayarlamaya çalışırken kaos başlar. Doğum günü palyaçosu tam bu noktada devreye girer: <strong>zamanlama, enerji yönetimi ve çocukların dikkat süresine göre akış kontrolü</strong> yapar.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-500">
            <h3 className="font-bold text-gray-900 mb-2">🎪 Enerji Kontrolü</h3>
            <p className="text-gray-700 text-sm">Çocukların enerjisini doğru zamanda yukarı çeker (oyunlar) ve doğru zamanda yatıştırır (yüz boyama). Parti boyunca kaos yerine kontrollü eğlence sağlar.</p>
          </div>
          <div className="bg-orange-50 rounded-xl p-5 border-l-4 border-orange-500">
            <h3 className="font-bold text-gray-900 mb-2">🎨 Çok Yönlü Program</h3>
            <p className="text-gray-700 text-sm">Sosis balon, yüz boyama, grup oyunları, mini disko, dans gösterisi... Tek bir kişi ile saatler süren çeşitli aktiviteler. Her çocuk ilgisini çeken bir şey bulur.</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-5 border-l-4 border-yellow-500">
            <h3 className="font-bold text-gray-900 mb-2">📸 Fotoğraf Anları</h3>
            <p className="text-gray-700 text-sm">Renkli kostüm, balonlar ve çocukların gülümsemesi = Instagram'lık kareler. Ebeveynler parti yönetmek yerine o anları yakalayabilir.</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
          <p className="text-gray-800"><strong>Bilgi:</strong> Best Event doğum günü palyaçoları ortalama <strong>250+ etkinlik deneyimine</strong> sahiptir. Her palyaço, çocuk gelişimi ve grup dinamikleri konusunda eğitim almıştır.</p>
        </div>
      </section>

      {/* BÖLÜM 2 */}
      <section id="yas-grubuna-gore-program" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          2. Yaş Grubuna Göre Palyaço Program Akışı
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Her yaş grubunun dikkat süresi, enerji seviyesi ve beklentisi farklıdır. Profesyonel doğum günü palyaçosu programı bu farka göre şekillenir. İşte yaş grubuna göre ideal program yapısı:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">👶 3-4 Yaş: Yumuşak Başlangıç</h3>
            <p className="text-gray-700 mb-3">Bu yaş grubunda dikkat süresi 10-15 dakikadır. Palyaço yavaş ve sakin başlar. Yüksek ses ve ani hareketler yerine <strong>müzikle dans, basit balon şekilleri ve yüz boyama</strong> ağırlıklı program uygulanır.</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
              <li>Süre: 45-60 dakika ideal</li>
              <li>Ağırlık: Yüz boyama + basit balonlar + müzikli dans</li>
              <li>Dikkat: Kademeli yakınlaşma, uzaktan el sallama ile başlangıç</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🧒 5-7 Yaş: Altın Yaş Grubu</h3>
            <p className="text-gray-700 mb-3">Doğum günü palyaçosunun en etkili olduğu yaş aralığıdır. Çocuklar hem etkileşime açıktır hem de kurallı oyunları anlayabilir. <strong>Sosis balon yarışması, müzikli sandalye, donmuş heykel ve mini disko</strong> bu yaş grubunda harika çalışır.</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
              <li>Süre: 60-90 dakika ideal</li>
              <li>Ağırlık: Grup oyunları + sosis balon + yüz boyama + mini disko</li>
              <li>Dikkat: Yüksek enerji, çok çeşitli aktivite rotasyonu</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🧑 8-10 Yaş: Rekabetçi Format</h3>
            <p className="text-gray-700 mb-3">Bu yaş grubunda çocuklar "çocuksu" bulmadığı sürece palyaçoyu sever. Anahtar kelime: <strong>yarışma ve ödül</strong>. Takım oyunları, bilgi yarışması, balon patlatma yarışması ve sihirbazlık numaralarına katılım bu yaşta çok etkilidir.</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
              <li>Süre: 60-90 dakika ideal</li>
              <li>Ağırlık: Yarışma formatı + sihirbazlık etkileşimi + takım oyunları</li>
              <li>Dikkat: Ödül mekanizması, rekabetçi enerji kullanımı</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BÖLÜM 3 */}
      <section id="90-dakikalik-program" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          3. 90 Dakikalık Örnek Doğum Günü Palyaçosu Programı
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Aşağıdaki program 5-7 yaş, 15-20 çocuk, ev veya site salonu formatı için hazırlanmıştır. Bu akış Best Event'in en çok talep edilen standart programıdır:
        </p>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-red-200" />
          <div className="space-y-6">
            {[
              { time: '0-10 dk', title: 'Karşılama ve Isınma', desc: 'Palyaço kapıdan enerjik giriş yapar. Çocuklarla tek tek el sıkışır, komik sesler çıkarır. Müzik başlar, herkes daire olur.', color: 'red' },
              { time: '10-25 dk', title: 'Sosis Balon Gösterisi', desc: 'Her çocuğa özel balon şekli yapılır: köpek, kılıç, çiçek, taç, kelebek. Çocuklar sırayla seçer, izlerken eğlenir.', color: 'orange' },
              { time: '25-40 dk', title: 'Grup Oyunları', desc: 'Müzikli sandalye, donmuş heykel, renk yarışması. Kazananlara mini ödüller. Enerji zirveye çıkar.', color: 'yellow' },
              { time: '40-55 dk', title: 'Yüz Boyama', desc: 'Çocuklar sırayla yüz boyatır: kelebek, kaplan, prenses, süperman. Diğerleri serbest dans eder veya balonlarla oynar.', color: 'green' },
              { time: '55-70 dk', title: 'Mini Disko ve Dans Partisi', desc: 'Işıklar söner, disko topu yanar. Popüler çocuk şarkılarıyla dans partisi. Herkes dans eder, en iyi dansçıya ödül.', color: 'blue' },
              { time: '70-80 dk', title: 'Pasta Kesimi Koordinasyonu', desc: 'Palyaço doğum günü şarkısını yönetir, çocukları organize eder. Mum üfleme, alkış ve tezahürat.', color: 'purple' },
              { time: '80-90 dk', title: 'Final ve Veda', desc: 'Son bir grup oyunu, toplu fotoğraf çekimi. Palyaço her çocuğa balon hediye ederek veda eder.', color: 'pink' }
            ].map((step, i) => (
              <div key={i} className="relative pl-14">
                <div className={`absolute left-4 w-5 h-5 rounded-full bg-${step.color}-500 border-2 border-white shadow`} />
                <div className={`bg-${step.color}-50 rounded-xl p-5 border border-${step.color}-200`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-${step.color}-600 font-bold text-sm`}>{step.time}</span>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg mt-6">
          <p className="text-gray-800"><strong>💡 İpucu:</strong> Bu program şablon değil, çerçevedir. Palyaçomuz etkinlik anında çocukların enerjisine göre akışı esnetir. Örneğin çocuklar grup oyunlarını çok sevdiyse süre uzatılır, yüz boyamada sıkılıyorlarsa mini diskoya erken geçilir.</p>
        </div>
      </section>

      {/* GÜVEN SİNYALLERİ */}
      <TrustSection />

      {/* BÖLÜM 4 */}
      <section id="palyaco-secim-kriterleri" className="mb-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          4. Profesyonel Palyaço Seçerken Dikkat Edilecek 7 Kriter
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          İstanbul'da palyaço kiralama seçenekleri çok fazla. Ancak doğum günü palyaçosu seçerken fiyattan önce bakmanız gereken kriterler var:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { num: '01', title: 'Deneyim ve Referans', desc: 'Kaç yıldır aktif? Kaç etkinlik yapmış? Google yorumları gerçek mi? Sahte olmayan, doğrulanabilir referans isteyin.' },
            { num: '02', title: 'Çocuk Psikolojisi Bilgisi', desc: 'Ağlayan çocuğa nasıl yaklaşır? Utangaç çocuğu nasıl dahil eder? Bu soruların cevabını bilmeyen palyaço risklidir.' },
            { num: '03', title: 'Program Çeşitliliği', desc: 'Sadece balon mu yapıyor yoksa tam program mı sunuyor? Yüz boyama, grup oyunları, mini disko dahil mi?' },
            { num: '04', title: 'Hijyen ve Güvenlik', desc: 'Yüz boyası dermatolog onaylı mı? Balonlar lateks alerjisi riski taşıyor mu? Profesyonel palyaço bunları bilir.' },
            { num: '05', title: 'Zamanında Gelme Garantisi', desc: 'Doğum gününde palyaçonun geç kalması kabul edilemez. Erken varış politikası olan firmayı tercih edin.' },
            { num: '06', title: 'Kostüm ve Ekipman Kalitesi', desc: 'Yıpranmış kostüm, patlak balonlar, bozuk müzik çalar... Bunlar partinin kalitesini düşürür. Ekipman durumunu sorun.' },
            { num: '07', title: 'İletişim ve Esneklik', desc: 'Teklif aşamasından itibaren iletişim kalitesi, etkinlik günündeki esnekliğin habercisidir. Hızlı ve net cevap veren firmayı seçin.' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE YORUMLARI */}
      <div className="mb-12">
        <GoogleReviews
          reviews={reviews}
          title="Doğum Günü Palyaçosu Müşteri Yorumları"
          serviceName="Doğum Günü Palyaçosu"
          serviceUrl="/organizasyonlar/palyaco-kiralama"
        />
      </div>

      {/* BÖLÜM 5 */}
      <section id="ebeveyn-rehberi" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          5. Ebeveyn Rehberi: Palyaço Varken Siz Ne Yapmalısınız?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Doğum günü palyaçosu varken ebeveynlerin en sık yaptığı hatalar ve yapılması gerekenler:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="text-lg font-bold text-red-700 mb-4">❌ Yapmamanız Gerekenler</h3>
            <ul className="space-y-3">
              {[
                '"Gel palyaçoyla fotoğraf çektir" diye çocuğu zorlamayın',
                'Palyaçonun oyun akışını kesip "şimdi pasta keselim" demeyin',
                '"Çok gürültü yapıyorsun, sessiz ol" diye çocukları susturmayın',
                'Palyaçonun yerine oyun önermekten kaçının'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-bold text-green-700 mb-4">✅ Yapmanız Gerekenler</h3>
            <ul className="space-y-3">
              {[
                'Palyaçoya güvenin ve akışına bırakın',
                'Arka planda kalın, fotoğraf çekin, anın tadını çıkarın',
                'Pasta kesim zamanını önceden palyaçoyla koordine edin',
                'Sadece acil durumlarda (tuvalet, düşme vb.) müdahale edin'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BÖLÜM 6 */}
      <section id="kombine-paketler" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          6. Palyaço + Sihirbaz + Bubble Show: Kombine Paketler
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Doğum günü palyaçosu tek başına harika bir seçimdir. Ancak 20+ çocukluk partilerde veya 2 saatten uzun etkinliklerde kombine paketler çok daha etkili sonuç verir:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
            <h3 className="font-bold text-gray-900 mb-2">🎈 Palyaço + Sihirbaz Paketi</h3>
            <p className="text-gray-700 text-sm mb-2">En popüler ikili kombinasyon. Palyaço etkileşimli eğlence sunarken, sihirbaz görsel şaşkınlık yaratır. İki farklı enerji, iki farklı dikkat çekici. Özellikle 5-8 yaş grubunda mükemmel sonuç verir.</p>
            <Link to="/organizasyonlar/magic-show" className="text-red-600 hover:text-red-700 text-sm font-semibold underline">Sihirbaz gösterisi detayları →</Link>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-2">🫧 Palyaço + Bubble Show Paketi</h3>
            <p className="text-gray-700 text-sm mb-2">Palyaçonun enerjisi + bubble show'un görsel büyüsü = unutulmaz parti. Bubble show özellikle 3-6 yaş grubunda hipnotize edici bir etki yaratır. Dev baloncukların içine girme deneyimi çocukları büyüler.</p>
            <Link to="/organizasyonlar/bubble-show" className="text-red-600 hover:text-red-700 text-sm font-semibold underline">Bubble show detayları →</Link>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-2">🎪 Üçlü Paket: Palyaço + Sihirbaz + Bubble Show</h3>
            <p className="text-gray-700 text-sm mb-2">Tam gün veya 2+ saatlik etkinlikler için ideal. 3 farklı performans türü kesintisiz eğlence akışı sağlar. Çocuklar asla sıkılmaz, ebeveynler endişelenmez.</p>
            <Link to="/organizasyonlar/full-paket-organizasyon" className="text-red-600 hover:text-red-700 text-sm font-semibold underline">Full paket organizasyon detayları →</Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
          <p className="text-gray-800"><strong>💰 Fiyat Avantajı:</strong> Kombine paketlerde tek tek kiralamanın toplamından daha avantajlı fiyatlar uygulanır. Ayrıca tek ekiple koordinasyon sağlandığı için lojistik de kolaylaşır.</p>
        </div>
      </section>

      {/* BÖLÜM 7 */}
      <section id="gercek-hikayeler" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          7. Gerçek Organizasyon Hikayeleri
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500">
            <h3 className="font-bold text-gray-900 mb-2">🏠 Kadıköy, Ev Partisi - 5 Yaş, 12 Çocuk</h3>
            <p className="text-gray-700 text-sm italic mb-3">"Oğlum Efe için palyaço kiralayacağımızda çok heyecanlıydım ama bir o kadar da endişeliydim. Acaba çocuklar korkar mı? Ev küçük, sığar mı?"</p>
            <p className="text-gray-700 text-sm">Palyaçomuz 30 dakika önce geldi, salonu hazırladı. Efe ilk başta biraz çekindi ama 3 dakika içinde palyaçonun en yakın arkadaşı oldu. 75 dakikalık program boyunca tek bir çocuk bile sıkılmadı. En çok sosis balon köpeğini sevdiler.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
            <h3 className="font-bold text-gray-900 mb-2">🏫 Ataşehir, Site Salonu - 7 Yaş, 28 Çocuk</h3>
            <p className="text-gray-700 text-sm italic mb-3">"28 çocuğu 90 dakika boyunca eğlendirebilir mi diye şüphem vardı. Kombine paket aldık: palyaço + sihirbaz."</p>
            <p className="text-gray-700 text-sm">İlk 45 dakika palyaço programı, sonraki 30 dakika sihirbaz gösterisi, son 15 dakika pasta kesimi ve veda. Çocuklar o kadar eğlendi ki "bir daha ne zaman gelecek" diye sordular. Site yönetimi bile gelecek yıl için tarih sordu.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-900 mb-2">🎂 Beşiktaş, Villa Bahçesi - 4 Yaş, 18 Çocuk</h3>
            <p className="text-gray-700 text-sm italic mb-3">"Kızım Elif küçük olduğu için yumuşak başlangıç istedik. Palyaçonun ilk 5 dakika uzaktan el sallaması harika bir yaklaşımdı."</p>
            <p className="text-gray-700 text-sm">Açık havada güneşli bir parti. Palyaço + <Link to="/blog/pamuk-seker-arabasi-kiralama-fiyatlari" className="text-red-600 hover:text-red-700 font-semibold underline">pamuk şeker arabası</Link> kombinasyonu aldık. Çocuklar hem oyun oynadı hem pamuk şeker yedi. Elif'in en sevdiği an: palyaçonun ona özel yaptığı prenses tacı balonu.</p>
          </div>
        </div>
      </section>

      {/* UZMAN BİLGİSİ */}
      <AuthorExpertise />

      {/* İLGİLİ HİZMETLER LİNKLEME */}
      <section className="mb-12 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Hizmetlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama', desc: 'Doğum günü, okul, site, kurumsal etkinlik' },
            { title: 'Sihirbaz Gösterisi', path: '/organizasyonlar/magic-show', desc: 'Yakın plan ve sahne illüzyon gösterileri' },
            { title: 'Bubble Show', path: '/organizasyonlar/bubble-show', desc: 'Dev baloncuk gösterisi ve köpük partisi' },
            { title: 'Yüz Boyama', path: '/organizasyonlar/yuz-boyama', desc: 'Profesyonel yüz boyama sanatı' },
            { title: 'Doğum Günü Organizasyonu', path: '/organizasyonlar/dogum-gunu-organizasyonu', desc: 'A\'dan Z\'ye doğum günü planlama' },
            { title: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler', desc: 'Elsa, Spiderman, Batman ve daha fazlası' }
          ].map((service, i) => (
            <Link key={i} to={service.path} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-red-300 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* İLGİLİ BLOG YAZILARI */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Blog Yazıları</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Palyaço Kiralama Fiyatları 2026', slug: '/blog/palyaco-kiralama-fiyatlari' },
            { title: 'Doğum Günü Sihirbazı Rehberi', slug: '/blog/dogum-gunu-sihirbazi' },
            { title: 'Doğum Günü Bubble Show', slug: '/blog/dogum-gunu-bubble-show' },
            { title: 'Palyaço mı Sihirbaz mı?', slug: '/blog/palyaco-mu-sihirbaz-mi' },
            { title: 'Doğum Günü Organizasyonu 10 Hata', slug: '/blog/dogum-gunu-organizasyonu-10-hata' },
            { title: 'Doğum Günü Animatörü Rehberi', slug: '/blog/dogum-gunu-animatoru' }
          ].map((blog, i) => (
            <Link key={i} to={blog.slug} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 hover:bg-red-50 transition-colors group">
              <span className="text-red-500 group-hover:text-red-600">→</span>
              <span className="text-gray-700 group-hover:text-red-700 font-medium text-sm">{blog.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Doğum Günü Palyaçosu İstanbul</h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">Çocuğunuzun unutulmaz bir doğum günü geçirmesi için hemen teklif alın. 6 yıllık deneyim, 5.000+ mutlu çocuk.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+905307309009" className="bg-white text-red-600 font-bold px-8 py-3 rounded-xl hover:bg-red-50 transition-colors">
            📞 0530 730 90 09
          </a>
          <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20palya%C3%A7osu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition-colors">
            💬 WhatsApp ile Teklif Al
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      content={content}
      relatedServicePath="/organizasyonlar/palyaco-kiralama"
      relatedServiceName="Palyaço Kiralama"
      faqData={faqData}
      slug="dogum-gunu-palyacosu"
    />
  )
}

export default DogumGunuPalyacosu
