import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const PamukSekerDogumGunu = () => {
  const faqData = [
    {
      question: 'Pamuk şeker makinesini çocuklar kullanabilir mi?',
      answer: 'Hayır, pamuk şeker makinesi profesyonel operatör tarafından kullanılır. Makine yüksek sıcaklıkta çalıştığı için çocukların doğrudan temas etmesi güvenli değildir. Ancak operatörümüz, çocukların gözleri önünde pamuk şekeri hazırlar ve çocuklar çubuğu tutarak şekil verme aşamasına katılabilir. Bu şekilde hem güvenlik sağlanır hem de çocuklar gösterinin bir parçası olur. Tüm operatörlerimiz hijyen sertifikalı ve çocuk etkinlikleri konusunda deneyimlidir.'
    },
    {
      question: 'Çikolata şelalesi kaç kişilik etkinliklere yeter?',
      answer: 'Standart çikolata şelalemiz 50-60 kişilik etkinlikler için uygundur. Daha kalabalık organizasyonlarda büyük boy çikolata şelalesi veya çift şelale kurulumu yapılır. Her şelale için yaklaşık 3-4 kg Belçika çikolatası kullanılır ve etkinlik süresince sürekli erimiş çikolata akışı sağlanır. 100+ kişilik doğum günü partilerinde iki ayrı çikolata şelalesi noktası oluşturarak bekleme süresini minimuma indiriyoruz.'
    },
    {
      question: 'Parti ekipmanları ne zaman kurulur ve toplanır?',
      answer: 'Parti ekipmanlarımız etkinlik başlangıcından 60-90 dakika önce kurulmaya başlar. Pamuk şeker makinesi, popcorn arabası ve çikolata şelalesi gibi ekipmanların ısınma süresi vardır. Kurulum sırasında hijyen kontrolleri yapılır ve her şey çalışır durumda test edilir. Etkinlik bitiminden sonra ekibimiz 30-45 dakika içinde tüm ekipmanları toplar ve mekanı temiz bırakır. Kurulum ve toplama ücreti paket fiyatına dahildir.'
    },
    {
      question: 'Popcorn arabası apartman dairesine sığar mı?',
      answer: 'Evet, kompakt popcorn arabamız standart apartman dairelerine rahatlıkla sığar. Arabanın boyutları 60x45 cm taban alanı ve 130 cm yüksekliktedir. Asansöre sığabilir ve kapı genişliğinden geçebilir. Ancak popcorn hazırlanırken hafif yağ kokusu oluşabilir, bu nedenle mutfak yakınında veya balkon kenarında konumlandırılmasını öneriyoruz. Daha geniş mekanlar için retro tasarımlı büyük popcorn arabamız da mevcuttur.'
    },
    {
      question: 'Pamuk şeker renk ve aroma seçenekleri nelerdir?',
      answer: 'Pamuk şeker makinemizde 8 farklı renk ve aroma sunuyoruz: klasik pembe (çilek), mavi (tutti frutti), yeşil (elma), sarı (muz), mor (üzüm), turuncu (portakal), kırmızı (vişne) ve beyaz (vanilya). Tüm aromalar gıda onaylı, doğal aromalardır. Doğum günü temasına uygun renk kombinasyonları yapılabilir; örneğin Elsa teması için mavi-beyaz, prenses teması için pembe-mor gibi. Özel renk talepleri de değerlendirilir.'
    },
    {
      question: 'Doğum günü paketi ile parti ekipmanı birlikte alınabilir mi?',
      answer: 'Kesinlikle evet! Doğum günü organizasyon paketlerimize pamuk şeker, popcorn ve çikolata şelalesi gibi parti ekipmanlarını ekleyebilirsiniz. Paket halinde alındığında %15-20 indirim uygulanır. Örneğin palyaço + pamuk şeker + popcorn kombinasyonu en popüler paketimizdir. Sihirbaz gösterisi, bubble show veya yüz boyama ile birlikte parti ekipmanı kiralama da mümkündür. Detaylı bilgi ve fiyat teklifi için bizimle iletişime geçebilirsiniz.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-orange-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#neden-vazgecilmez" className="text-orange-600 hover:text-orange-700 font-semibold">1. Doğum Günü Organizasyonunda Parti Ekipmanları Kiralama: Neden Vazgeçilmez?</a></li>
          <li><a href="#pamuk-seker-gosterisi" className="text-orange-600 hover:text-orange-700 font-semibold">2. Pamuk Şeker Kiralama Gösterisi: Çocukların Gözündeki Büyü</a></li>
          <li><a href="#popcorn-kombinasyon" className="text-orange-600 hover:text-orange-700 font-semibold">3. Popcorn Kiralama + Doğum Günü: Mükemmel Kombinasyon</a></li>
          <li><a href="#cikolata-selalesi" className="text-orange-600 hover:text-orange-700 font-semibold">4. Çikolata Şelalesi Kiralama ile Doğum Günü Sofrası</a></li>
          <li><a href="#yas-gruplari" className="text-orange-600 hover:text-orange-700 font-semibold">5. Yaş Gruplarına Göre Parti Ekipmanı Seçimi</a></li>
          <li><a href="#populer-kombinasyonlar" className="text-orange-600 hover:text-orange-700 font-semibold">6. En Popüler Parti Ekipmanı Kiralama Kombinasyonları ve Fiyatları</a></li>
          <li><a href="#sss" className="text-orange-600 hover:text-orange-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Doğum günü organizasyonu denildiğinde aklımıza ilk gelen pasta ve balonlar olsa da, gerçek bir parti atmosferi yaratmanın sırrı doğru parti ekipmanlarında gizlidir. Pamuk şeker makinesi, popcorn arabası ve çikolata şelalesi gibi profesyonel ekipmanlar, sıradanlığı olağanüstü bir deneyime dönüştürür. İstanbul'da her yıl binlerce aile, çocuklarının doğum gününü unutulmaz kılmak için parti ekipmanı <strong>kiralama</strong> hizmetine başvuruyor. Bu rehberde, doğum günü parti ekipmanlarının seçiminden kurulumuna, yaş gruplarına göre önerilere kadar bilmeniz gereken her şeyi bulacaksınız.
      </p>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>İpucu:</strong> Parti ekipmanları sadece atıştırmalık değildir; çocuklar için canlı bir <strong>gösteri</strong> ve interaktif bir deneyimdir. Pamuk şekerin dönmesi, popcornun patlaması, çikolatanın akması... Her biri çocukların gözlerini büyüleyen bir performanstır.
        </p>
      </div>

      {/* Bolum 1 */}
      <h2 id="neden-vazgecilmez" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Doğum Günü Organizasyonunda Parti Ekipmanları Kiralama: Neden Vazgeçilmez?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bir doğum günü partisini sıradandan özel kılacak en büyük etkenlerden biri, çocukların beş duyusuna hitap eden deneyimler sunmaktır. Parti ekipmanları tam da bu noktada devreye girer. Pamuk şekerin tatlı kokusu, popcornun çatırdaması, çikolata şelalesinin görsel şöleni... Tüm bunlar bir araya geldiğinde, çocuklar için sadece bir parti değil, yıllar boyunca hatırlanacak bir macera oluşur.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3">Görsel Şölen</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> Renkli pamuk şekerler, dönerken göz alıyor</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Sonuç:</strong> Çocuklar hayran kalıyor</p>
          <p className="text-gray-700 text-sm"><strong>Fotoğraf:</strong> Instagram'lık kareler oluşur</p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-gray-900 mb-3">Lezzet Deneyimi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> Taze popcorn ve çikolata lezzeti</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Sonuç:</strong> Damak zevkine hitap</p>
          <p className="text-gray-700 text-sm"><strong>Avantaj:</strong> Hazır ürünlerden çok daha lezzetli</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
          <h4 className="font-bold text-gray-900 mb-3">İnteraktif Eğlence</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> Çocuklar sürece dahil oluyor</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Sonuç:</strong> Pasif izleyici değil, aktif katılımcı</p>
          <p className="text-gray-700 text-sm"><strong>Avantaj:</strong> Bekle-sıra sistemiyle sosyal beceri</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Profesyonel parti ekipmanı <strong>kiralama</strong> hizmeti, ev ortamında bile sinema benzeri bir atmosfer yaratmanızı sağlar. Üstelik tüm ekipmanlar operatörüyle birlikte gelir; siz sadece eğlencenin keyfini çıkarır, temizlik ve kurulum gibi işlerle uğraşmazsınız. Doğum günü <strong>organizasyonu</strong> planlarken parti ekipmanlarını da listelerinize eklemenizi şiddetle tavsiye ederiz. Daha kapsamlı bir rehber için <Link to="/blog/dogum-gunu-organizasyonu-rehberi" className="text-orange-600 hover:text-orange-700 font-semibold underline">doğum günü organizasyonu rehberimize</Link> göz atabilirsiniz.
      </p>

      {/* Bolum 2 */}
      <h2 id="pamuk-seker-gosterisi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Pamuk Şeker Kiralama Gösterisi: Çocukların Gözündeki Büyü
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pamuk şeker, çocuklar için sadece bir tatlı değildir; o, gözlerinin önünde şekerin ipliğe dönüştüğü, renklerin dans ettiği canlı bir <strong>gösteri</strong>dir. Profesyonel pamuk şeker operatörü, makinenin başında adeta bir sanatçı gibi çalışır: çubuğu döndürür, renkleri katman katman ekler ve çocukların boyundan büyük dev pamuk şekerler oluşturur.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Pamuk şeker <strong>gösterisi</strong>nin en güzel yanı, her çocuğun kendi pamuk şekerini seçebilmesi ve hatta yapım sürecini yakından izleyebilmesidir. Operatörümüz çocuklara renk ve aroma seçeneklerini sunar, çubuğu tutmalarına yardım eder ve her birinin özel hissetmesini sağlar. Bu interaktif deneyim, pamuk şekeri sıradanlıktan çıkarıp doğum gününün en çok konuşulan anı haline getirir.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
          <h4 className="font-bold text-gray-900 mb-3">Renk Seçenekleri</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Pembe (Çilek):</strong> Klasik favorit, kızların ilk tercihi</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Mavi (Tutti Frutti):</strong> Erkek temaları için ideal</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Yeşil (Elma):</strong> Doğa temalı partiler için</p>
          <p className="text-gray-700 text-sm"><strong>Mor (Üzüm):</strong> Prenses ve unicorn temaları</p>
        </div>

        <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
          <h4 className="font-bold text-gray-900 mb-3">Aroma ve Tatlar</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Portakal:</strong> Citrus sevenler için turuncu pamuk şeker</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Muz:</strong> Sarı renkli, tropikal parti temasına uygun</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Vişne:</strong> Yoğun tatlı, kırmızı renkli</p>
          <p className="text-gray-700 text-sm"><strong>Vanilya:</strong> Beyaz, sade ve zarif görünüm</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Profesyonel pamuk şeker <strong>kiralama</strong> hizmetimiz, makine, operatör, tüm malzemeler ve 50-100 porsiyon pamuk şekeri içerir. Etkinlik süresi boyunca operatör, sınırsız pamuk şeker hazırlar. Tema rengine uygun özel renk kombinasyonları da mümkündür. Pamuk şeker etkinlikleri hakkında daha fazla bilgi için <Link to="/blog/pamuk-seker-etkinlik-rehberi" className="text-orange-600 hover:text-orange-700 font-semibold underline">pamuk şeker etkinlik rehberimizi</Link> inceleyebilirsiniz.
      </p>

      {/* Bolum 3 */}
      <h2 id="popcorn-kombinasyon" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Popcorn Kiralama + Doğum Günü Organizasyonu: Mükemmel Kombinasyon
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Popcorn, doğum günü partilerinin en pratik ve en sevilen atıştırmalığı. Sıcak, taze patlamış mısırın kokusu bir mekana yayıldığında, hem çocuklar hem yetişkinler için dayanılmaz bir atmosfer oluşur. Popcorn arabası <strong>kiralama</strong>, partiye retro bir havası katar ve misafirleri adeta bir sinema lobisine taşır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Popcorn arabasının en büyük avantajı, partinin her anında arka planda çalışabilmesidir. Animasyon gösterileri sırasında, oyun aralarında veya pasta kesimini beklerken çocuklar istedikleri zaman gelip taze popcorn alabilir. Bu da parti akışını bozmadan sürekli bir atıştırmalık kaynağı oluşturur.
      </p>

      <div className="bg-yellow-50 rounded-lg p-6 mb-8 border border-yellow-200">
        <h4 className="font-bold text-gray-900 mb-4">Parti Programında Popcorn Zamanlama Önerisi:</h4>
        <div className="space-y-3 text-gray-700 text-sm">
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 min-w-[120px]">14:00 - 14:30:</span>
            <span>Misafirler gelirken popcorn arabası hazır, ilk ikram yapılır</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 min-w-[120px]">14:30 - 15:30:</span>
            <span>Animasyon/gösteri sırasında arka planda popcorn hazır bekler</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 min-w-[120px]">15:30 - 16:00:</span>
            <span>Oyun molasında çocuklar popcorn stand'ına gelir</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 min-w-[120px]">16:00 - 16:30:</span>
            <span>Pasta kesimi sonrası son popcorn servisi</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-orange-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">Tuzlu Popcorn</h4>
          <p className="text-gray-700 text-sm">Klasik sinema tadında, hem çocukların hem yetişkinlerin favorisi. Tereyağlı ve tuzlu versiyon, partinin her anında tüketilir. Özellikle film gecesi temalı doğum günleri için birebir.</p>
        </div>

        <div className="bg-white border-l-4 border-pink-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">Karamelli Popcorn</h4>
          <p className="text-gray-700 text-sm">Tatlı sevenler için karamel kaplamalı popcorn seçeneği. Özellikle 5-8 yaş arası çocukların gözde tercihi. Doğum günü pastası ile birlikte mükemmel bir tatlı ikili oluşturur.</p>
        </div>

        <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">Renkli Popcorn</h4>
          <p className="text-gray-700 text-sm">Tema rengine uygun boyalı popcorn seçeneği. Gıda boyası ile renklendirilmiş popcornlar, özellikle tematik doğum günlerinde dekoratif bir unsur olarak da kullanılır.</p>
        </div>
      </div>

      {/* Bölüm 4 */}
      <h2 id="cikolata-selalesi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Çikolata Şelalesi Kiralama ile Doğum Günü Sofrası
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Çikolata şelalesi, doğum günü sofrasının tartışmasız yıldızı. Eriyen Belçika çikolatasının katman katman akışı, hem görselle hem lezzette olağanüstü bir deneyim sunar. Çocuklar, çubuğa taktıkları meyveleri veya marshmallow'ları çikolata şelalesinden geçirerek kendi lezzetlerini yaratır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Çikolata şelalesi <strong>kiralama</strong> hizmetimizde, profesyonel 3-4 katlı çikolata şelalesi, Belçika çikolatası (sütlü, bitter veya beyaz seçenekleriyle), batırmalık meyve tabağı ve marshmallow dahildir. Operatör, çikolatanın ideal akışkanlığını ve sıcaklığını etkinlik boyunca kontrol eder.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-amber-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">Meyve Eşleştirmeleri</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Çilek:</strong> En popüler eşleşme, çikolataya muhteşem uyum</li>
            <li><strong>Muz:</strong> Kalın dilimler halinde, doyurucu bir lezzet</li>
            <li><strong>Üzüm:</strong> Pratik, tek lokmalık, çocuklar için ideal</li>
            <li><strong>Ananas:</strong> Tropikal partiler için egzotik seçim</li>
            <li><strong>Kivi:</strong> Renkli görünümü ile sofranın gözde meyvesi</li>
          </ul>
        </div>

        <div className="bg-orange-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">Diğer Batırmalıklar</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Marshmallow:</strong> Çocukların en sevdiği, yumuşacık dokusu ile</li>
            <li><strong>Waffle Çubukları:</strong> Mini waffle parçaları, tok tutar</li>
            <li><strong>Kurabiye:</strong> Butik kurabiyeler, çikolata ile muhteşem</li>
            <li><strong>Pretzel Çubukları:</strong> Tuzlu-tatlı kontrastı sevenler için</li>
            <li><strong>Lokum:</strong> Geleneksel dokunuşlar için</li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Hijyen Notu:</strong> Çikolata şelalemiz her etkinlik öncesi sterilize edilir. Batırmalıklar tek kullanımlık çubuklar ile servis edilir. Operatörümüz gıda güvenliği sertifikasına sahiptir ve eldiven ile çalışır. Alerjisi olan çocuklar için içerik bilgisi önceden paylaşılır.
        </p>
      </div>

      {/* Bölüm 5 */}
      <h2 id="yas-gruplari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Yaş Gruplarına Göre Parti Ekipmanı Kiralama ve Organizasyon Rehberi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Her yaş grubu için doğru parti ekipmanı seçimi, etkinliğin başarısını doğrudan etkiler. Küçük çocuklar için güvenlik ön plandayken, büyük çocuklar için çeşitlilik ve interaktivite önem kazanır. Doğru <strong>organizasyon</strong> planlaması için aşağıdaki yaş grubu önerilerimizi inceleyebilirsiniz.
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
          <h4 className="font-bold text-gray-900 mb-3 text-xl">2-4 Yaş: Minik Kaşifler</h4>
          <p className="text-gray-700 text-sm mb-3">
            Bu yaş grubunda güvenlik en önemli faktör. Çocuklar ekipmanlara dokunmak isteyecektir, bu nedenle sıcak yüzeylerden uzak tutulmalıdır.
          </p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><strong>Önerilen:</strong> Pamuk şeker (küçük porsiyon, yumuşak çubuk)</li>
            <li><strong>Dikkat:</strong> Çikolata şelalesi yerine çikolata fondü (masada, kontrollü)</li>
            <li><strong>Popcorn:</strong> Patlamamış tane riski nedeniyle dikkatli servis</li>
            <li><strong>Ekstra:</strong> Renkli pamuk şeker gösterisi izletme, dokunmadan</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h4 className="font-bold text-gray-900 mb-3 text-xl">5-7 Yaş: Meraklı Kaşifler</h4>
          <p className="text-gray-700 text-sm mb-3">
            Bu yaş grubu en heyecanlı katılımcılardır. Her ekipmanı denemek, yapım sürecini izlemek ve soru sormak isterler. Gösterinin interaktif boyutu ön plana çıkar.
          </p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><strong>Önerilen:</strong> Pamuk şeker gösterisi + popcorn arabası kombinasyonu</li>
            <li><strong>Çikolata Şelalesi:</strong> Rehberli katılım ile meyve batırma</li>
            <li><strong>Ekstra:</strong> Kendi pamuk şekerini şekillendirme etkinliği</li>
            <li><strong>Popüler:</strong> Renkli pamuk şeker yarışması (en büyük pamuk şeker)</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h4 className="font-bold text-gray-900 mb-3 text-xl">8-10 Yaş: Bağımsız Gurmanlar</h4>
          <p className="text-gray-700 text-sm mb-3">
            Bu yaş grubundaki çocuklar artık kendi başına ekipmanlardan faydalanabilir. Çeşitlilik ve seçim özgürlüğü onlar için çok önemlidir.
          </p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><strong>Önerilen:</strong> Tam donanım - pamuk şeker + popcorn + çikolata şelalesi</li>
            <li><strong>Ekstra:</strong> Slushie (buzlu içecek) makinesi eklenmesi</li>
            <li><strong>Popüler:</strong> DIY çikolata fondü istasyonu</li>
            <li><strong>Trend:</strong> Mini waffle makinesi ile kendi waffle'ini yap</li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
          <h4 className="font-bold text-gray-900 mb-3 text-xl">10+ Yaş: Genç Gurmeler</h4>
          <p className="text-gray-700 text-sm mb-3">
            Pre-teen ve ergen çocuklar için sofistike sunumlar ve sosyal medya dostu görüntüler önem kazanır. Arkadaşlarıyla paylaşabilecekleri deneyimler tercih ederler.
          </p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><strong>Önerilen:</strong> Çikolata şelalesi + özel batırmalık menü</li>
            <li><strong>Trend:</strong> Instagram'lık dev pamuk şeker (50 cm+)</li>
            <li><strong>Popüler:</strong> Karamelli popcorn bar (farklı tatlar seçme)</li>
            <li><strong>Ekstra:</strong> Milkshake veya smoothie istasyonu</li>
          </ul>
        </div>
      </div>

      {/* Bölüm 6 */}
      <h2 id="populer-kombinasyonlar" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. En Popüler Parti Ekipmanı Kiralama Kombinasyonları ve Fiyat Avantajları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Parti ekipmanlarını tek tek kiralamak yerine, paket olarak almanız hem bütçenize hem de organizasyon pratikliğine büyük katkı sağlar. İşte İstanbul'da en çok tercih edilen parti ekipmanı kombinasyonları ve fiyat aralıkları:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900 text-xl">Başlangıç Paketi</h4>
            <span className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">Ekonomik</span>
          </div>
          <p className="text-gray-700 text-sm mb-3">Küçük çap doğum günleri için ideal (10-20 çocuk)</p>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li>Pamuk şeker makinesi + operatör (2 saat)</li>
            <li>50 porsiyon pamuk şeker malzemesi</li>
            <li>3 farklı renk/aroma seçeneği</li>
          </ul>
          <p className="text-orange-600 font-bold">En çok tercih edilen giriş seviyesi paket</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-300">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900 text-xl">Standart Paket</h4>
            <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">En Popüler</span>
          </div>
          <p className="text-gray-700 text-sm mb-3">Orta çap doğum günleri için ideal (20-40 çocuk)</p>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li>Pamuk şeker makinesi + operatör (3 saat)</li>
            <li>Popcorn arabası + operatör (3 saat)</li>
            <li>100 porsiyon pamuk şeker + sınırsız popcorn</li>
            <li>5 farklı renk/aroma seçeneği</li>
            <li>Retro tasarımlı popcorn kutuları</li>
          </ul>
          <p className="text-orange-600 font-bold">İstanbul'da en çok tercih edilen parti ekipmanı kombinasyonu</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-amber-400">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900 text-xl">Premium Paket</h4>
            <span className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold">Tam Donanım</span>
          </div>
          <p className="text-gray-700 text-sm mb-3">Büyük çap organizasyonlar için ideal (40-80 çocuk)</p>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li>Pamuk şeker makinesi + operatör (4 saat)</li>
            <li>Popcorn arabası + operatör (4 saat)</li>
            <li>Çikolata şelalesi + operatör (4 saat)</li>
            <li>Sınırsız porsiyon (tüm ekipmanlar)</li>
            <li>8 farklı renk/aroma, 3 çikolata çeşidi</li>
            <li>Meyve tabağı + marshmallow + batırmalıklar dahil</li>
            <li>Kurulum ve toplama ücretsiz</li>
          </ul>
          <p className="text-orange-600 font-bold">Eksiksiz parti deneyimi için en kapsamlı paketimiz</p>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 shadow-md border-2 border-orange-400">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900 text-xl">VIP Paket</h4>
            <span className="bg-orange-200 text-orange-800 px-4 py-1 rounded-full text-sm font-semibold">Özel Tasarım</span>
          </div>
          <p className="text-gray-700 text-sm mb-3">Özel konsept doğum günleri ve kurumsal etkinlikler (80+ kişi)</p>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li>Premium paketteki tüm ekipmanlar</li>
            <li>Slushie (buzlu içecek) makinesi</li>
            <li>Mini waffle istasyonu</li>
            <li>Tema rengi özel pamuk şeker tasarımı</li>
            <li>Kişiselleştirilmiş popcorn kutuları (isim baskılı)</li>
            <li>Profesyonel dekorasyon desteği</li>
            <li>5 saat full hizmet + 1 saat ekstra hediye</li>
          </ul>
          <p className="text-orange-600 font-bold">Unutulmaz bir <strong>organizasyon</strong> için en özel paketimiz</p>
        </div>
      </div>

      {/* Gerçek Hikaye */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-8 border border-orange-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">Gerçek Hikaye: 6 Yaş Doğum Günü - Ataşehir</h4>
        <p className="text-gray-700 text-sm mb-4">
          Ataşehir'de bir site içindeki sosyal tesiste, 6 yaşındaki Defne'nin doğum günü için Standart Paket tercih edildi. Pamuk şeker makinesi ve popcorn arabası yan yana kuruldu. Çocuklar önce pamuk şeker gösterisini izledi, sonra sıra sıra gelip kendi renklerini seçti. Defne, pembe ve mor karışımı bir dev pamuk şeker istedi ve operatörümüz özenle hazırladı. Popcorn arabası ise partinin arka planında sürekli çalıştı; çocuklar oyun aralarında gelip taze popcorn aldı. Annesi Selin Hanım şöyle dedi: "Çocuklar o kadar eğlendi ki, eve gitmek istemediler. Parti ekipmanları partinin yıldızı oldu." Bu geri bildirim, bizim için en değerli ödüldür.
        </p>
        <p className="text-gray-600 text-xs italic">
          -- Parti ekipmanları, doğum gününü sıradanlıktan özel kılmanın en etkili yoludur.
        </p>
      </div>

      {/* Bölüm 7 - SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Sık Sorulan Sorular (SSS)
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Hizmet CTA */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pamuk Şeker ve Parti Ekipmanları Hizmetimiz</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          İstanbul genelinde profesyonel parti ekipmanı <strong>kiralama</strong> hizmeti sunuyoruz. Pamuk şeker makinesi, popcorn arabası, çikolata şelalesi ve daha fazlası için detaylı bilgi alın. Her bir <strong>organizasyon</strong> için özel fiyat teklifi hazırlıyoruz.
        </p>
        <Link
          to="/organizasyonlar/pamuk-seker"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Pamuk Şeker ve Parti Ekipmanları Hizmeti
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Doğum Günü Partinizi Unutulmaz Kılın!</h3>
        <p className="mb-6 leading-relaxed">
          Profesyonel parti ekipmanı <strong>kiralama</strong> ile çocuklarınızın doğum gününü özel kılın. Pamuk şeker gösterisinden çikolata şelalesine, popcorn arabasından özel paketlere kadar her şey dahil. Hemen bizi arayın ve ücretsiz teklif alın!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-orange-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            05307309009
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Do%C4%9Fum%20g%C3%BCn%C3%BC%20parti%20ekipmanlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            WhatsApp ile Bilgi Alin
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="pamuk-seker-dogum-gunu-organizasyonu"
      faqData={faqData}
      relatedServicePath="/organizasyonlar/pamuk-seker"
      relatedServiceName="Pamuk Şeker ve Parti Ekipmanları"
    >
      {content}
    </BlogDetail>
  )
}

export default PamukSekerDogumGunu
