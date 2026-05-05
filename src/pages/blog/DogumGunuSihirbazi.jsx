import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'
import GoogleReviews from '../../components/GoogleReviews'
import AuthorExpertise from '../../components/AuthorExpertise'
import TrustSection from '../../components/TrustSection'
import Seo from '../../components/Seo'
import { getReviewsByTags } from '../../data/googleReviews'
import { createBlogPostingSchema, createFAQSchema } from '../../utils/schemaHelpers'

const DogumGunuSihirbazi = () => {
  const reviews = getReviewsByTags(['sihirbaz', 'dogumgunu'], 6)

  const faqData = [
    { question: 'Doğum günü sihirbazı kaç yaş grubuna uygun?', answer: 'Doğum günü sihirbazı 4-12 yaş arası çocuklar için idealdir. 4-6 yaş grubunda renkli ve görsel ağırlıklı numaralar, 7-12 yaş grubunda ise interaktif katılımlı ve şaşırtıcı illüzyonlar tercih edilir. Yetişkin partilerinde de sahne formatında gösteri sunulabilir.' },
    { question: 'Sihirbaz gösterisi ne kadar sürer?', answer: 'Doğum günü sihirbaz gösterisi standart olarak 30-45 dakikadır. Bu süre; açılış numarası, kart illüzyonları, çocuk katılımlı numaralar, komedi sahneleri ve büyük final numarasını kapsar. Kombine paketlerde palyaço veya bubble show ile birlikte toplam 90-120 dakikalık program oluşturulur.' },
    { question: 'Sihirbaz gösterisi evde yapılabilir mi?', answer: 'Evet, doğum günü sihirbazımız ev partilerinde yakın plan (close-up) formatında gösteri sunar. Sahne gerekmez, salon ortasında veya bir köşede 2x2 metrelik alan yeterlidir. Çocuklar yarım daire şeklinde oturur ve numaralara çok yakından şahit olur.' },
    { question: 'Sihirbaz gösterisi fiyatları neye göre değişir?', answer: 'Fiyat; gösteri formatı (yakın plan / sahne), süre, numara çeşitliliği, etkinlik tipi (doğum günü / okul / kurumsal) ve İstanbul içi lokasyona göre değişir. Detaylı teklif için etkinlik bilgilerinizi paylaşmanız yeterlidir.' },
    { question: 'Çocuklar numaralara katılabilir mi?', answer: 'Kesinlikle. Doğum günü sihirbazının en güçlü yanı çocukları sahneye davet etmesidir. Kart seçtirme, ip kesme, renk tahmin etme gibi interaktif numaralarda çocuklar sihirbazın asistanı olur. Özellikle doğum günü çocuğu için özel bir numara yapılır.' },
    { question: 'Sihirbaz ile palyaço birlikte alınabilir mi?', answer: 'Evet, palyaço + sihirbaz en popüler kombine paketimizdir. Genellikle önce palyaço programı (45 dk), sonra sihirbaz gösterisi (30 dk) formatında uygulanır. Tek fiyattan daha avantajlı kombine paket indirimi uygulanır.' }
  ]

  const blogPostSchema = createBlogPostingSchema({
    title: 'Doğum Günü Sihirbazı: Çocukları Büyüleyen Gösteri Rehberi',
    excerpt: 'İstanbul\'da doğum günü sihirbazı kiralama rehberi. Numara türleri, yaş grubuna göre gösteri formatı, sahne vs yakın plan farkı ve gerçek etkinlik hikayeleri.',
    image: '/content/images/sihirbaz/sihirbazhero.webp',
    dateISO: '2026-04-10',
    slug: 'dogum-gunu-sihirbazi',
    primaryKeyword: 'doğum günü sihirbazı'
  })
  const faqSchema = createFAQSchema(faqData)

  const content = (
    <>
      <Seo
        title="Doğum Günü Sihirbazı İstanbul 2026 | Profesyonel Sihirbaz Kiralama"
        description="İstanbul'da doğum günü sihirbazı kiralama. Yakın plan illüzyon, interaktif çocuk numaraları, komedi sihirbazlık. 6 yıllık deneyim, 5.000+ etkinlik."
        keywords={['doğum günü sihirbazı', 'doğum günü sihirbaz kiralama', 'çocuk sihirbaz gösterisi', 'istanbul sihirbaz kiralama', 'doğum günü illüzyon gösterisi']}
        canonicalPath="/blog/dogum-gunu-sihirbazi"
        image="/content/images/sihirbaz/sihirbazhero.webp"
        schema={[blogPostSchema, faqSchema]}
        publishedTime="2026-04-10"
      />

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-600 rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[url('/content/images/sihirbaz/sihirbazhero.webp')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🎩 Profesyonel İllüzyon · Çocuk Katılımlı · İstanbul Geneli
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Doğum Günü Sihirbazı
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
            Çocukların gözlerindeki şaşkınlık ve hayranlık... Profesyonel sihirbaz gösterisi ile doğum gününü büyülü bir deneyime dönüştürün.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+905307309009" className="bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors">📞 Hemen Ara</a>
            <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20sihirbaz%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">💬 WhatsApp Teklif Al</a>
          </div>
        </div>
      </div>

      {/* İÇİNDEKİLER */}
      <nav className="bg-gray-50 rounded-xl p-6 mb-10 border-l-4 border-purple-500" aria-label="İçindekiler">
        <h2 className="text-xl font-bold text-gray-900 mb-3">📋 İçindekiler</h2>
        <ol className="space-y-2 list-decimal list-inside">
          <li><a href="#sihirbaz-neden-etkili" className="text-purple-600 hover:text-purple-700 font-medium">Doğum Günü Sihirbazı Neden Bu Kadar Etkili?</a></li>
          <li><a href="#numara-turleri" className="text-purple-600 hover:text-purple-700 font-medium">Çocuk Doğum Gününde Hangi Numaralar Yapılır?</a></li>
          <li><a href="#yakin-plan-vs-sahne" className="text-purple-600 hover:text-purple-700 font-medium">Yakın Plan mı Sahne Gösterisi mi?</a></li>
          <li><a href="#yas-grubu-formati" className="text-purple-600 hover:text-purple-700 font-medium">Yaş Grubuna Göre Gösteri Formatı</a></li>
          <li><a href="#kombine-paketler-sihirbaz" className="text-purple-600 hover:text-purple-700 font-medium">Sihirbaz + Palyaço + Bubble Show Kombinasyonları</a></li>
          <li><a href="#gercek-hikayeler-sihirbaz" className="text-purple-600 hover:text-purple-700 font-medium">Gerçek Organizasyon Hikayeleri</a></li>
          <li><a href="#sss" className="text-purple-600 hover:text-purple-700 font-medium">Sık Sorulan Sorular</a></li>
        </ol>
      </nav>

      {/* BÖLÜM 1 */}
      <section id="sihirbaz-neden-etkili" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Doğum Günü Sihirbazı Neden Bu Kadar Etkili?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Doğum günü sihirbazı, çocuklarda <strong>"nasıl yaptı?"</strong> sorusunu uyandıran tek performans türüdür. Palyaço eğlendirir, bubble show büyüler, ancak sihirbaz <strong>şaşırtır</strong>. Bu şaşkınlık duygusu çocukların hafızasına kazınır ve doğum gününü yıllarca hatırlamalarını sağlar.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Profesyonel doğum günü sihirbazı sadece numara yapan biri değildir. Çocuk psikolojisini bilen, sahne hakimiyeti olan, komedi zamanlamasını ayarlayabilen ve her çocuğu dahil edebilen bir performanscıdır.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-purple-50 rounded-xl p-5 border-l-4 border-purple-500">
            <h3 className="font-bold text-gray-900 mb-2">🧠 Merak ve Şaşkınlık</h3>
            <p className="text-gray-700 text-sm">Bir kart kaybolur, bir eşarp renk değiştirir, boş kutundan tavşan çıkar... Çocukların merak duygusu doruk noktasına çıkar.</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-5 border-l-4 border-indigo-500">
            <h3 className="font-bold text-gray-900 mb-2">🤝 Aktif Katılım</h3>
            <p className="text-gray-700 text-sm">Çocuklar seyirci değil, asistan olur. Kart seçer, ip keser, sihirli kelimeyi söyler. Bu katılım çocukların özgüvenini artırır.</p>
          </div>
          <div className="bg-violet-50 rounded-xl p-5 border-l-4 border-violet-500">
            <h3 className="font-bold text-gray-900 mb-2">😂 Komedi Zamanlaması</h3>
            <p className="text-gray-700 text-sm">İyi bir doğum günü sihirbazı aynı zamanda komedyendir. Numaralar arasına komik sahneler, espri ve mizah yerleştirir.</p>
          </div>
        </div>
      </section>

      {/* BÖLÜM 2 */}
      <section id="numara-turleri" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Çocuk Doğum Gününde Hangi Numaralar Yapılır?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">Best Event sihirbazlarının doğum günü gösterisinde kullandığı temel numara kategorileri:</p>

        <div className="space-y-4 mb-8">
          {[
            { icon: '🃏', title: 'Kart İllüzyonları', desc: 'Çocuğun seçtiği kart kaybolur ve beklenmedik bir yerde bulunur. Doğum günü çocuğunun adı kartın üzerinde belirir. En popüler ve en çok alkış alan numara türüdür.', level: 'Her yaş grubu' },
            { icon: '🪢', title: 'İp ve Halka Numaraları', desc: 'Kırpılan ip tekrar birleşir, metal halkalar birbirine geçer ve ayrılır. Görsel olarak çok etkileyici, çocuklar "nasıl oldu" diye çığlık atar.', level: '5+ yaş' },
            { icon: '🎨', title: 'Renk Değiştirme Gösterileri', desc: 'Beyaz eşarp kırmızıya döner, boş bardaktan renkli toplar çıkar. Görsel zenginlik ve hız: küçük çocukların favorisi.', level: '3+ yaş' },
            { icon: '📦', title: 'Kutu ve Sandık İllüzyonları', desc: 'Boş kutudan nesne çıkartma, sandıkta kaybolan obje. Sahne gösterisinin gösterişli finali: çocuklar ayağa kalkıp alkışlar.', level: '6+ yaş ideal' },
            { icon: '🎈', title: 'Balon İçinde Sihir', desc: 'Balonun içine yerleştirilen nesne kaybolur veya dönüşür. Görsel efekt ve şaşkınlık bir arada: doğum günü çocuğuna özel performans.', level: 'Her yaş grubu' },
            { icon: '🔥', title: 'Komedi Sihirbazlık Sahneleri', desc: 'Sihirbaz "yanlışlıkla" numarayı bozar, çocuklar düzeltir, sonra asıl sürpriz ortaya çıkar. Gülme + şaşkınlık = en güçlü anı.', level: '5+ yaş' }
          ].map((numara, i) => (
            <div key={i} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <span className="text-3xl flex-shrink-0">{numara.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{numara.title}</h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">{numara.level}</span>
                </div>
                <p className="text-gray-700 text-sm">{numara.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BÖLÜM 3 */}
      <section id="yakin-plan-vs-sahne" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Yakın Plan mı Sahne Gösterisi mi?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🔍 Yakın Plan (Close-Up)</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Ev partileri ve küçük mekanlar için ideal</li>
              <li>✓ 2x2 m alan yeterli, sahne gerekmez</li>
              <li>✓ Çocuklar numaralara çok yakından şahit olur</li>
              <li>✓ 10-25 kişilik etkinliklerde mükemmel</li>
              <li>✓ Kart, madeni para ve küçük obje illüzyonları</li>
            </ul>
          </div>
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🎭 Sahne Gösterisi</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Okul, site salonu, AVM etkinlikleri için ideal</li>
              <li>✓ Mini sahne kurulumu + ışık + müzik</li>
              <li>✓ Büyük illüzyonlar ve görsel efektler</li>
              <li>✓ 30-200+ kişilik etkinliklerde etkili</li>
              <li>✓ Kutu illüzyonları, kaybolan obje gösterileri</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
          <p className="text-gray-800"><strong>💡 Tavsiye:</strong> Ev doğum gününde yakın plan format en etkili sonucu verir. Çocuklar numaralara santimetre uzaklıktan bakar ve etkileşim çok daha güçlü olur. Sahne gösterisi 30+ kişilik etkinliklerde tercih edilmelidir.</p>
        </div>
      </section>

      <TrustSection />

      {/* BÖLÜM 4 */}
      <section id="yas-grubu-formati" className="mb-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Yaş Grubuna Göre Gösteri Formatı</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">4-6 Yaş: Görsel ve Renkli</h3>
            <p className="text-gray-700 text-sm">Renkli eşarplar, balonlar, renk değiştiren toplar. Kısa dikkat süresi için hızlı geçişler. Komedi ağırlıklı, basit ama etkileyici numaralar. 25-35 dakika ideal süre.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">7-9 Yaş: İnteraktif ve Şaşırtıcı</h3>
            <p className="text-gray-700 text-sm">Kart illüzyonları, ip numaraları, çocuk katılımlı sahneler. "Nasıl yaptı?" sorusunu en çok bu yaş grubu sorar. Doğum günü çocuğuna özel numara. 35-45 dakika ideal süre.</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">10-12 Yaş: İllüzyon ve Mantık Bulmacası</h3>
            <p className="text-gray-700 text-sm">Daha sofistike numaralar, zihin okuma illüzyonları, matematiksel sihir. Bu yaş grubunda "sırrını çözmeye" çalışırlar ve bu da eğlencenin parçası olur. 30-40 dakika ideal süre.</p>
          </div>
        </div>
      </section>

      {/* GOOGLE YORUMLARI */}
      <div className="mb-12">
        <GoogleReviews reviews={reviews} title="Sihirbaz Gösterisi Müşteri Yorumları" serviceName="Doğum Günü Sihirbazı" serviceUrl="/organizasyonlar/magic-show" />
      </div>

      {/* BÖLÜM 5 */}
      <section id="kombine-paketler-sihirbaz" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Sihirbaz + Palyaço + Bubble Show Kombinasyonları</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-red-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-2">🎩 + 🎈 Sihirbaz + Palyaço</h3>
            <p className="text-gray-700 text-sm mb-2">İlk 45 dk palyaço (oyunlar, balonlar, dans), sonra 30 dk sihirbaz gösterisi. İki farklı enerji, iki farklı deneyim. En çok tercih edilen ikili paket.</p>
            <Link to="/blog/dogum-gunu-palyacosu" className="text-purple-600 hover:text-purple-700 text-sm font-semibold underline">Doğum günü palyaçosu rehberi →</Link>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-2">🎩 + 🫧 Sihirbaz + Bubble Show</h3>
            <p className="text-gray-700 text-sm mb-2">Sihirbazın şaşkınlığı + bubble show'un büyüsü. Özellikle 4-7 yaş grubunda harika çalışır. Görsel zenginlik maksimum seviyede.</p>
            <Link to="/blog/dogum-gunu-bubble-show" className="text-purple-600 hover:text-purple-700 text-sm font-semibold underline">Doğum günü bubble show rehberi →</Link>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-2">🎪 Üçlü Premium Paket</h3>
            <p className="text-gray-700 text-sm mb-2">Palyaço + sihirbaz + bubble show. 2+ saatlik kesintisiz eğlence. 20+ çocukluk partiler ve özel organizasyonlar için ideal.</p>
            <Link to="/organizasyonlar/full-paket-organizasyon" className="text-purple-600 hover:text-purple-700 text-sm font-semibold underline">Full paket organizasyon →</Link>
          </div>
        </div>
      </section>

      {/* BÖLÜM 6 */}
      <section id="gercek-hikayeler-sihirbaz" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Gerçek Organizasyon Hikayeleri</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-500">
            <h3 className="font-bold text-gray-900 mb-2">🏠 Maltepe, Ev Partisi - 8 Yaş, 14 Çocuk</h3>
            <p className="text-gray-700 text-sm italic mb-3">"Oğlum Can'ın arkadaşları hep tablet ve telefonla oynuyor. Sihirbaz onları ekranlardan koparabilir mi diye merak ediyordum."</p>
            <p className="text-gray-700 text-sm">Sihirbaz ilk kartı havaya fırlattığında telefonlar yere düştü. 35 dakika boyunca 14 çocuğun gözü sihirbazdan ayrılmadı. Can'ın seçtiği kart sihirbazın cebinden çıktığında salon inledi. Gösteri sonunda çocuklar "bir daha yap" diye 10 dakika boyunca yalvardı.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-500">
            <h3 className="font-bold text-gray-900 mb-2">🎓 Şişli, Özel Okul - 6 Yaş Sınıfı, 22 Çocuk</h3>
            <p className="text-gray-700 text-sm italic mb-3">"Sınıf partisine sihirbaz istedik. Öğretmen biraz endişeliydi: 'Çocuklar çok hareketli, sessiz durmazlar.'"</p>
            <p className="text-gray-700 text-sm">Sihirbazımız sahne gösterisi formatında geldi. Mini ışık sistemi ve müzik ile 30 dakikalık gösteri sundu. Öğretmenin yorumu: "6 yıllık meslek hayatımda bu kadar sessiz ve odaklanmış gördüğüm tek an."</p>
          </div>
        </div>
      </section>

      <AuthorExpertise />

      {/* İLGİLİ HİZMETLER */}
      <section className="mb-12 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Hizmetlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Sihirbaz Gösterisi', path: '/organizasyonlar/magic-show', desc: 'Yakın plan ve sahne illüzyon gösterileri' },
            { title: 'Palyaço Kiralama', path: '/organizasyonlar/palyaco-kiralama', desc: 'Doğum günü palyaçosu ve animasyon' },
            { title: 'Bubble Show', path: '/organizasyonlar/bubble-show', desc: 'Dev baloncuk gösterisi' },
            { title: 'Doğum Günü Organizasyonu', path: '/organizasyonlar/dogum-gunu-organizasyonu', desc: 'A\'dan Z\'ye planlama' },
            { title: 'Kostümlü Karakterler', path: '/organizasyonlar/kostumlu-karakterler', desc: 'Elsa, Spiderman ve daha fazlası' },
            { title: 'Full Paket Organizasyon', path: '/organizasyonlar/full-paket-organizasyon', desc: 'Her şey dahil paketler' }
          ].map((s, i) => (
            <Link key={i} to={s.path} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* İLGİLİ BLOGLAR */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Blog Yazıları</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Sihirbaz Gösterisi Fiyatları 2026', slug: '/blog/sihirbaz-gosterisi-fiyatlari' },
            { title: 'Doğum Günü Palyaçosu Rehberi', slug: '/blog/dogum-gunu-palyacosu' },
            { title: 'Doğum Günü Bubble Show', slug: '/blog/dogum-gunu-bubble-show' },
            { title: 'Palyaço mı Sihirbaz mı?', slug: '/blog/palyaco-mu-sihirbaz-mi' },
            { title: 'Sihirbaz Kiralama Rehberi', slug: '/blog/sihirbaz-kiralama-rehberi' },
            { title: 'Doğum Günü Animatörü', slug: '/blog/dogum-gunu-animatoru' }
          ].map((b, i) => (
            <Link key={i} to={b.slug} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 hover:bg-purple-50 transition-colors group">
              <span className="text-purple-500 group-hover:text-purple-600">→</span>
              <span className="text-gray-700 group-hover:text-purple-700 font-medium text-sm">{b.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Doğum Günü Sihirbazı İstanbul</h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">Çocuğunuzun gözlerinde o büyülü şaşkınlığı görmek için profesyonel sihirbaz gösterisi teklifi alın.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+905307309009" className="bg-white text-purple-700 font-bold px-8 py-3 rounded-xl hover:bg-purple-50 transition-colors">📞 0530 730 90 09</a>
          <a href="https://wa.me/905307309009?text=Merhaba%2C%20do%C4%9Fum%20g%C3%BCn%C3%BC%20sihirbaz%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition-colors">💬 WhatsApp ile Teklif Al</a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail content={content} relatedServicePath="/organizasyonlar/magic-show" relatedServiceName="Sihirbaz Gösterisi" faqData={faqData} slug="dogum-gunu-sihirbazi" />
  )
}

export default DogumGunuSihirbazi
