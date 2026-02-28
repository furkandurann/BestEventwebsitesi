import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const SonicMaskotParti = () => {
  const faqData = [
    {
      question: 'Sonic maskot hangi yaş grubuna uygun?',
      answer: 'Sonic maskot gösterisi özellikle 4-10 yaş aralığındaki erkek çocukları için idealdir. 4-6 yaş grubunda Sonic\'in mavi rengi ve hız teması büyük ilgi görürken, 7-10 yaş grubunda video oyun bağlantısı ve rekabetçi oyunlar ekstra heyecan yaratır. Kız çocuklarının da katıldığı karma gruplarda Sonic evrensel çekiciliğiyle tüm çocukları eğlendirir.'
    },
    {
      question: 'Sonic gösterisinde hız temalı oyunlar nelerdir?',
      answer: 'Sonic temalı oyunlarımız arasında süper hız koşusu yarışması, altın yüzük toplama parkuru, Dr. Eggman engel kaçış oyunu, Sonic spin dash dans yarışması ve zamana karşı görev tamamlama bulunur. Tüm oyunlar hız, refleks ve çeviklik temellidir. Kazanan çocuklara "Hız Şampiyonu" madalyası ve sertifikası verilir.'
    },
    {
      question: 'Sonic ve Mario birlikte gelebilir mi?',
      answer: 'Evet! Sonic ve Super Mario çift maskot paketi en popüler erkek çocuk kombinasyonlarımızdan biridir. İki karakter birlikte sahne alarak "Sonic vs Mario" yarışması düzenler. Çocuklar iki takıma ayrılır: Takım Sonic ve Takım Mario. Hız yarışları, engel parkurları ve dans düelloları ile rekabetçi ve eğlenceli bir gösteri sunulur. İkili paketlerde özel fiyat avantajı sağlanır.'
    },
    {
      question: 'Sonic maskot kostümü kaliteli mi?',
      answer: 'Sonic maskot kostümümüz yüksek kaliteli polyester kumaştan üretilmiş olup orijinal Sega tasarımına sadıktır. Mavi renk tonları, kırmızı ayakkabılar, beyaz eldiven detayları ve Sonic\'in ikonik dikenli saç modeli birebir yansıtılır. Kostüm havalandırma sistemi ile donatılmıştır ve her kullanım öncesi profesyonel temizlik yapılır. Sanatçımız çocuk psikolojisi eğitimli profesyonel bir performansçıdır.'
    },
    {
      question: 'Sonic gösterisi ne kadar sürer?',
      answer: 'Standart Sonic maskot gösterisi 45-55 dakika sürer. Bu süre sürpriz giriş (5-8 dk), hız dansı gösterisi (10-12 dk), altın yüzük parkuru (12-15 dk), interaktif oyunlar (10-12 dk) ve fotoğraf çekimi (10-12 dk) aşamalarından oluşur. Sonic + Mario çift maskot paketinde gösteri süresi 70-80 dakikaya uzar. Ek hizmetlerle birlikte organizasyon 120 dakikaya kadar çıkabilir.'
    },
    {
      question: 'Sonic maskot kiralama fiyatı ne kadar?',
      answer: 'Sonic maskot kiralama fiyatları gösteri süresine, ek maskot tercihine (Mario ekleme), süsleme paketi ve ek hizmetlere göre değişiklik gösterir. Tek maskot gösterisinden, çift maskot + tema süsleme + hız parkuru organizasyonu dahil komple paketlere kadar farklı seçenekler mevcuttur. Güncel fiyat bilgisi ve kişiye özel teklif almak için bizimle iletişime geçmenizi öneriyoruz.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#sonic-maskot-nedir" className="text-blue-600 hover:text-blue-700 font-semibold">1. Sonic Maskot ile Doğum Günü Organizasyonu</a></li>
          <li><a href="#hiz-temali-oyunlar" className="text-blue-600 hover:text-blue-700 font-semibold">2. Hız Temalı Oyunlar ve Aktiviteler</a></li>
          <li><a href="#erkek-cocuk-parti" className="text-blue-600 hover:text-blue-700 font-semibold">3. Erkek Çocuk Doğum Günü: Sonic Dünyası</a></li>
          <li><a href="#sonic-vs-mario" className="text-blue-600 hover:text-blue-700 font-semibold">4. Sonic vs Mario Yarışması: Çift Maskot Gösterisi</a></li>
          <li><a href="#gosteri-akisi" className="text-blue-600 hover:text-blue-700 font-semibold">5. Sonic Maskot Gösteri Akışı</a></li>
          <li><a href="#susleme-tema" className="text-blue-600 hover:text-blue-700 font-semibold">6. Sonic Tema Süsleme ve Parti Detayları</a></li>
          <li><a href="#sss" className="text-blue-600 hover:text-blue-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Sonic the Hedgehog, video oyun tarihinin en ikonik karakterlerinden biri olarak 1991'den bu yana milyonlarca çocuğun ve gencin favorisi olmaya devam etmektedir. Mavi rengi, süper hız yeteneği ve cesur kişiliğiyle Sonic, erkek çocuklarının doğum günü partilerinde en çok talep edilen maskot karakterleri arasında yer almaktadır. İstanbul'da Sonic maskot kiralama ile çocuğunuzun doğum gününü hız dolu bir maceraya dönüştürüyoruz. Bu rehberde, Sonic maskot performansını, hız temalı oyunları, Mario ile yarışma konseptini ve erkek çocuk doğum günü fikirlerini kapsamlı olarak ele alacağız.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          💨 <strong>İpucu:</strong> Sonic temalı doğum günü organizasyonunun en büyük avantajı, çocukların fiziksel aktivitesini en üst düzeyde tutmasıdır. Hız temalı oyunlar, koşu yarışları ve engel parkurları sayesinde çocuklar parti boyunca hareket halindedir. Bu hem eğlenceyi artırır hem de çocukların enerjisini sağlıklı bir şekilde harcamasını sağlar.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="sonic-maskot-nedir" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Sonic Maskot ile Doğum Günü Organizasyonu
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Sonic maskot organizasyonu, hız ve macera temasını çocuğunuzun doğum gününe taşıyan dinamik bir etkinlik konseptidir. Mavi rengin hakim olduğu dekorasyon, altın yüzük detayları, hız çizgisi efektleri ve Sonic maskot performansı ile parti adrenalin dolu bir deneyime dönüşür. Çocuklar, oyunlardan tanıdıkları Sonic'i gerçek hayatta karşılarında gördüklerinde büyük bir coşku yaşar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Sonic organizasyonunun güçlü yanı, hem eğlenceli hem de fiziksel açıdan aktif bir parti sunmasıdır. Koşu yarışları, engel parkurları ve hız testleri çocukların motor becerilerini geliştirirken, takım yarışmaları sosyal becerilerini destekler. Altın yüzük toplama ve Dr. Eggman'dan kaçış oyunları ise stratejik düşünmeyi teşvik eder.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚡</span> Sonic Organizasyonunun Avantajları:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <div>
                <strong>Fiziksel Aktivite:</strong> Hız temalı oyunlar çocukları sürekli hareket halinde tutar. Parti boyunca sıkılma ihtimali sıfıra yakındır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <div>
                <strong>Rekabetçi Eğlence:</strong> Yarış ve skor tabanlı oyunlar erkek çocuklarının rekabet ruhunu besler ve motivasyonlarını yüksek tutar.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <div>
                <strong>Video Oyun Bağlantısı:</strong> Sonic'i oyunlardan tanıyan çocuklar, gerçek hayatta Sonic ile buluşmanın heyecanını yaşar.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <div>
                <strong>Çift Maskot Potansiyeli:</strong> Sonic + Mario kombinasyonu, iki efsanevi karakterin bir arada olduğu benzersiz bir gösteri sunar.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Sonic maskot kiralama hizmetimiz hakkında detaylı bilgi almak ve fotoğrafları görmek için <Link to="/maskot/sonic-maskot-istanbul" className="text-blue-600 hover:text-blue-700 font-semibold underline">Sonic maskot kiralama</Link> sayfamızı ziyaret edebilirsiniz.
      </p>

      {/* Bölüm 2 */}
      <h2 id="hiz-temali-oyunlar" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Hız Temalı Oyunlar ve Aktiviteler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Sonic organizasyonunun kalbi, hız temalı oyunlar ve aktivitelerdir. Sonic'in süper hız yeteneğinden ilham alan bu oyunlar, çocukların reflekslerini, çevikliklerini ve takım çalışması becerilerini test eder. Her oyun profesyonel ekibimiz tarafından güvenlik öncelikli olarak planlanır ve Sonic maskotu tarafından enerjik bir şekilde yönetilir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🏃 Oyun 1: Süper Hız Koşusu</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 10-12 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Katılım:</strong> 2-4 kişilik gruplar halinde</p>
          <p className="text-gray-700 text-sm">Mekanda belirlenen parkurda çocuklar sırayla koşu yarışı yapar. Sonic maskotu "3-2-1 Koş!" komutuyla yarışı başlatır. Her tur sonunda kronometreyle süre ölçülür. En hızlı koşucu "Sonic Hız Şampiyonu" unvanını kazanır. Sonic, her yarışçıya tezahürat yaparak moral verir. Parkur güvenlik bariyerleri ve yumuşak zemin ile donatılır.</p>
        </div>

        <div className="bg-white border border-yellow-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">💍 Oyun 2: Altın Yüzük Toplama Parkuru</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 12-15 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Katılım:</strong> Bireysel veya çift halinde</p>
          <p className="text-gray-700 text-sm">Mekana yerleştirilen altın renkli plastik yüzükler, engeller arasından geçilerek toplanır. Tünel geçişi, balon atlama ve slalom koşusu bariyerleri arasında saçılmış yüzükler bir bir toplanır. Her yüzüğün 10 puanlık değeri vardır. Sonic özel yüzükler gizleyerek bonus puan fırsatı sunar. En çok yüzük toplayan "Altın Koleksiyoncu" ödülünü alır.</p>
        </div>

        <div className="bg-white border border-red-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🎯 Oyun 3: Dr. Eggman Engel Kaçışı</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 10-12 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Katılım:</strong> Tüm çocuklar birlikte</p>
          <p className="text-gray-700 text-sm">Müzik çalarken çocuklar serbest hareket eder. "Dr. Eggman geliyor!" anonsu yapıldığında herkes belirlenen güvenli bölgeye koşar. En son kalan çocuk elenilir. Sonic maskotu çocuklara yardım eder ve kaçış rotalarını gösterir. Final turunda Sonic, Dr. Eggman'ı "yener" ve tüm çocuklar kazanır. Bu oyun refleks, hız ve dikkat gerektiren heyecanlı bir aktivitedir.</p>
        </div>

        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">💫 Oyun 4: Spin Dash Dans Yarışması</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 8-10 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Katılım:</strong> Tüm çocuklar</p>
          <p className="text-gray-700 text-sm">Sonic'in ünlü "spin dash" hareketinden esinlenilen dans yarışması. Çocuklar yerinde dönerek, zıplayarak ve hız figürleri yaparak dans eder. Sonic maskotu koreografi gösterir, çocuklar taklit eder. En iyi dans figürünü sergileyen "Spin Dash Ustası" seçilir. Popüler müzikler eşliğinde herkesin dans ettiği enerji dolu bir bölümdür.</p>
        </div>
      </div>

      {/* Bölüm 3 */}
      <h2 id="erkek-cocuk-parti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Erkek Çocuk Doğum Günü: Sonic Dünyası
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Sonic teması, erkek çocuk doğum günü partileri için mükemmel bir seçimdir. Hız, macera ve kahramanlık unsurlarını bir arada barındıran Sonic, süper kahraman temalarına alternatif olarak büyük ilgi görmektedir. Mavi rengin hakim olduğu dekorasyon, erkek çocuklarının enerjisine uygun aktif oyunlar ve rekabetçi yarışmalar ile parti adrenalin dolu geçer.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h4 className="font-bold text-gray-900 mb-3">🎮 4-6 Yaş: Mini Sonic Macerası</h4>
          <p className="text-gray-700 text-sm mb-3">Bu yaş grubunda hız temalı oyunlar basit tutulur ve eğlence ön plandadır.</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Basit koşu yarışı (kısa mesafe)</li>
            <li>&#8226; Kolay altın yüzük toplama</li>
            <li>&#8226; Sonic ile dans partisi</li>
            <li>&#8226; Balon patlatma oyunu</li>
            <li>&#8226; Sonic boyama etkinliği</li>
          </ul>
          <p className="text-blue-600 text-xs font-semibold mt-3">Gösteri süresi: 30-40 dakika</p>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
          <h4 className="font-bold text-gray-900 mb-3">🏆 7-10 Yaş: Hız Şampiyonası</h4>
          <p className="text-gray-700 text-sm mb-3">Bu yaş grubunda rekabetçi oyunlar ve strateji tabanlı aktiviteler ön plandadır.</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Zamana karşı süper hız koşusu</li>
            <li>&#8226; Engel parkuru şampiyonası</li>
            <li>&#8226; Dr. Eggman kaçış stratejisi</li>
            <li>&#8226; Sonic vs Mario takım yarışması</li>
            <li>&#8226; DJ eşliğinde dans düellosu</li>
          </ul>
          <p className="text-blue-600 text-xs font-semibold mt-3">Gösteri süresi: 50-65 dakika</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Sonic teması, erkek çocuk doğum günlerinde süper kahraman temalarına güçlü bir alternatif sunar. Hız ve macera konsepti, çocukların fiziksel enerjisini kanalize etmek için idealdir. Farklı erkek çocuk doğum günü temaları hakkında bilgi almak için <Link to="/blog/kostumlu-karakter-dogum-gunu" className="text-blue-600 hover:text-blue-700 font-semibold underline">kostümlü karakter doğum günü rehberimizi</Link> incelemenizi öneriyoruz.
      </p>

      {/* Bölüm 4 */}
      <h2 id="sonic-vs-mario" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Sonic vs Mario Yarışması: Çift Maskot Gösterisi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Sonic ve Super Mario, video oyun tarihinin en büyük rakipleridir. Bu efsanevi rekabeti doğum günü partinize taşıyarak çocuklara benzersiz bir deneyim sunuyoruz. Çift maskot gösterisi, tek maskot organizasyonunun iki katı eğlence, heyecan ve etkileşim barındırır. Çocuklar iki takıma ayrılarak destekledikleri karakterle birlikte yarışır.
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-6 mb-8 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 text-xl text-center">🏁 Sonic vs Mario Yarışma Formatı</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-100 rounded-lg p-4">
            <h5 className="font-bold text-blue-800 mb-2 text-center">💨 Takım Sonic</h5>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>&#8226; Mavi takım tişörtü veya bandana</li>
              <li>&#8226; "Hız" odaklı yarışmalarda avantaj</li>
              <li>&#8226; Sonic maskotu takım kaptanı</li>
              <li>&#8226; Savaş naraları: "Sonic Hızı!"</li>
            </ul>
          </div>
          <div className="bg-red-100 rounded-lg p-4">
            <h5 className="font-bold text-red-800 mb-2 text-center">🍄 Takım Mario</h5>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>&#8226; Kırmızı takım tişörtü veya bandana</li>
              <li>&#8226; "Güç" odaklı yarışmalarda avantaj</li>
              <li>&#8226; Mario maskotu takım kaptanı</li>
              <li>&#8226; Savaş naraları: "It's-a Me, Mario!"</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🏁 Yarışma 1: Süper Hız Koşusu</h4>
          <p className="text-gray-700 text-sm">Her takımdan birer temsilci, Sonic ve Mario maskotlarıyla birlikte koşu yarışı yapar. Sonic süper hız efektleriyle, Mario zıplama efektleriyle koşar. Takımlar sırayla yarışır ve en iyi süreyi yapan takım turu kazanır.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">💎 Yarışma 2: Altın Yüzük vs Yıldız Toplama</h4>
          <p className="text-gray-700 text-sm">Takım Sonic altın yüzükleri, Takım Mario yıldızları toplar. Her iki takım aynı anda parkura girer ve kendi rengindeki objeleri toplamaya çalışır. Yanlış obje toplayan puan kaybeder. En çok obje toplayan takım kazanır.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">💃 Yarışma 3: Dans Düellosu</h4>
          <p className="text-gray-700 text-sm">Sonic ve Mario maskotları karşılıklı dans düellosu yapar, çocuklar kendi takımlarının maskotunu destekler. Ardından her takımdan gönüllü çocuklar dans pistine çıkarak takımlarını temsil eder. En iyi dans figürünü sergileyen takım bu turu kazanır.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🏆 Final: Büyük Yarışma</h4>
          <p className="text-gray-700 text-sm">Tüm turların skorları toplanır ve kazanan takım ilan edilir. Ancak final sürprizi olarak Sonic ve Mario el sıkışır ve "Gerçek kazanan herkes!" mesajı verilir. Tüm çocuklara katılım sertifikası, kazanan takıma ise özel kupa verilir. Dostluk ve sporcukluk vurgusu yapılarak gösteri tamamlanır.</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Super Mario maskot kiralama hizmetimiz hakkında detaylı bilgi almak ve çift maskot paket fiyatlarını öğrenmek için <Link to="/maskot/super-mario-maskot-istanbul" className="text-blue-600 hover:text-blue-700 font-semibold underline">Super Mario maskot kiralama</Link> sayfamızı ziyaret edebilirsiniz.
      </p>

      {/* Bölüm 5 */}
      <h2 id="gosteri-akisi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Sonic Maskot Gösteri Akışı
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Profesyonel Sonic maskot gösterisi, her anı planlanmış dinamik bir performanstır. Hız temasına uygun olarak gösteri tempolu ve enerjiktir. İşte standart bir 50 dakikalık Sonic maskot gösteri akışı:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">0-5 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Sürpriz Giriş: "Sonic Hızda!"</h4>
              <p className="text-gray-700 text-sm">Sonic tema müziği yükselir, mavi ışık efektleri başlar. "Dikkat! Süper hızda bir şey geliyor!" anonsu yapılır. Sonic maskotu koşarak sahneye fırlar ve hız pozu verir. Çocuklar büyük bir coşkuyla karşılar. Doğum günü çocuğuyla el çırpma ve hız selamlaşması yapılır. Altın yüzük sesi efekti salonda yankılanır.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">5-15 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Hız Dansı ve Isınma</h4>
              <p className="text-gray-700 text-sm">Sonic tema şarkıları eşliğinde hız dansı başlar. Spin dash hareketi, süper koşu figürü ve altın yüzük toplama dansı gibi özel koreografiler sergilenir. Çocuklar Sonic'in hareketlerini taklit eder. Tempo giderek artar ve çocukların enerjisi doruk noktasına çıkar. Bu bölüm ısınma egzersizi görevi de görür.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">15-32 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Hız Temalı Oyunlar ve Yarışmalar</h4>
              <p className="text-gray-700 text-sm">Gösterinin ana bölümüdür. Süper hız koşusu, altın yüzük toplama parkuru, Dr. Eggman engel kaçışı ve spin dash dans yarışması sırayla oynanır. Sonic maskotu her oyunu enerjik bir şekilde yönetir. Kazanan çocuklara madalya ve rozet verilir. Bu bölüm en rekabetçi ve heyecanlı kısımdır.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">32-43 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Fotoğraf Çekimi ve Ödül Töreni</h4>
              <p className="text-gray-700 text-sm">Tüm çocuklara "Sonic Hız Takımı" sertifikası dağıtılır. Doğum günü çocuğuna "Hız Şampiyonu" kupası verilir. Sonic maskotu ile tek tek ve grup fotoğrafları çekilir. Hız pozu, spin dash pozu ve kahraman pozu gibi özel pozlar verilir. Aileler de fotoğraf seansına dahil olur.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-blue-300 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">43-50 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Veda: "Hızla Görüşürüz!"</h4>
              <p className="text-gray-700 text-sm">Sonic doğum günü çocuğuyla son bir el çırpma ve hız selamlaşması yapar. Tüm çocuklara veda eder ve "Hızlı kalın, cesur olun!" mesajı verir. Sonic tema müziği eşliğinde koşarak sahneden ayrılır. Mavi konfetiler ve altın yüzük efekti eşliğinde görkemli bir kapanış yapılır.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bölüm 6 */}
      <h2 id="susleme-tema" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Sonic Tema Süsleme ve Parti Detayları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Sonic temalı partinin atmosferini tamamlayan süsleme, mavi rengin hakim olduğu dinamik bir görsel düzen sunar. Hız çizgileri, altın yüzükler ve yeşil tepe motifli dekorasyon ile mekan bir Sonic oyun dünyasına dönüşür.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h4 className="font-bold text-gray-900 mb-3">🎨 Süsleme Detayları</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Mavi-sarı-kırmızı balon kemeri (hız çizgisi efekti)</li>
            <li>&#8226; Sonic figürlü arka plan panosu (Green Hill Zone)</li>
            <li>&#8226; Altın yüzük şeklinde asma süsler</li>
            <li>&#8226; Sonic temalı tabak, bardak, peçete seti</li>
            <li>&#8226; Mavi LED şerit aydınlatma</li>
            <li>&#8226; Hız çizgisi sticker dekorasyonu</li>
            <li>&#8226; Dr. Eggman figürlü hedef tahtası</li>
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-gray-900 mb-3">🎂 İkram Fikirleri</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Sonic figürlü fondant pasta</li>
            <li>&#8226; Altın yüzük şeklinde kurabiyeler</li>
            <li>&#8226; Mavi glazürlü cupcake'ler</li>
            <li>&#8226; "Sonic Hız Suyu" etiketli mavi limonata</li>
            <li>&#8226; Altın renkli çikolata paraları (yüzük temsili)</li>
            <li>&#8226; Yeşil renkli jöle bardakları (Green Hill)</li>
            <li>&#8226; Hız temalı parti çantası hediyeleri</li>
          </ul>
        </div>
      </div>

      {/* Gerçek Hikaye */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🎉 Gerçek Hikaye: 8 Yaş Sonic vs Mario Partisi - Ümraniye</h4>
        <p className="text-gray-700 text-sm mb-4">
          Küçük Kaan'ın 8. yaş doğum gününde Sonic vs Mario temalı çift maskot organizasyonu planladık. Ümraniye'de bir spor salonunda gerçekleştirilen partiye 40 çocuk katıldı. Salon bir tarafı mavi (Sonic), diğer tarafı kırmızı (Mario) olacak şekilde ikiye bölündü. Ortada altın yüzükler ve yıldızlarla süslenmiş yarışma pisti hazırlanmıştı.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Sonic ve Mario aynı anda farklı kapılardan koşarak sahneye girdiğinde salon adeta inledi. Çocuklar iki takıma ayrıldı ve yarışmalar başladı. Süper hız koşusunda Takım Sonic önde iken, altın yüzük vs yıldız toplama yarışında Takım Mario geri döndü. Dans düellosunda ise çocuklar en komik figürleri sergileyerek jüriyi güldürdü. Final yarışmasını Takım Sonic kazandı ama Kaan'ın en çok keyif aldığı an, Sonic ve Mario'nun el sıkışıp birlikte dans etmesiydi. "Baba, en iyi doğum günüm!" diyen Kaan, hız şampiyonu kupasını gururla taşıdı.
        </p>
        <p className="text-gray-600 text-xs italic">
          — Sonic vs Mario çift maskot organizasyonu, rekabetin ve dostluğun bir arada yaşandığı, çocukların adrenalinle dolu bir parti deneyimidir.
        </p>
      </div>

      {/* SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Sık Sorulan Sorular
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">&#10067; {faq.question}</h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Service CTA */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">💨 Sonic Maskot Kiralama Hizmetimiz</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Sonic maskot kiralama ile çocuğunuzun doğum gününü hız dolu bir maceraya dönüştürün. Hız temalı oyunlar, altın yüzük parkuru, dans gösterisi ve fotoğraf seansı dahil profesyonel organizasyon paketleri sunuyoruz. Sonic + Mario çift maskot paketi de mevcuttur. İstanbul'un tüm semtlerinde hizmetinizdeyiz.
        </p>
        <Link
          to="/maskot/sonic-maskot-istanbul"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Sonic Maskot Kiralama Sayfasına Git →
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🏁 Hız Dolu Sonic Partisi Planlayın!</h3>
        <p className="mb-6 leading-relaxed">
          Sonic maskotu ile çocuğunuzun doğum gününü adrenalin dolu bir yarışmaya dönüştürün. Hız koşusu, altın yüzük parkuru ve Sonic vs Mario yarışması dahil komple organizasyon paketleri için hemen bizi arayın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            📞 Hemen Ara: 0530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Sonic%20maskot%20kiralama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            💬 WhatsApp ile Bilgi Alın
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="sonic-maskot-parti"
      faqData={faqData}
      relatedServicePath="/maskot/sonic-maskot-istanbul"
      relatedServiceName="Sonic Maskot Kiralama"
    >
      {content}
    </BlogDetail>
  )
}

export default SonicMaskotParti
