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
      {/* Icindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-orange-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Icindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#neden-vazgecilmez" className="text-orange-600 hover:text-orange-700 font-semibold">1. Dogum Gununde Parti Ekipmanlari: Neden Vazgecilmez?</a></li>
          <li><a href="#pamuk-seker-gosterisi" className="text-orange-600 hover:text-orange-700 font-semibold">2. Pamuk Seker Gosterisi: Cocuklarin Gozundeki Buyu</a></li>
          <li><a href="#popcorn-kombinasyon" className="text-orange-600 hover:text-orange-700 font-semibold">3. Popcorn + Dogum Gunu: Mukemmel Kombinasyon</a></li>
          <li><a href="#cikolata-selalesi" className="text-orange-600 hover:text-orange-700 font-semibold">4. Cikolata Selalesi ile Dogum Gunu Sofrasi</a></li>
          <li><a href="#yas-gruplari" className="text-orange-600 hover:text-orange-700 font-semibold">5. Yas Gruplarina Gore Parti Ekipmani Secimi</a></li>
          <li><a href="#populer-kombinasyonlar" className="text-orange-600 hover:text-orange-700 font-semibold">6. En Populer Parti Ekipmani Kombinasyonlari</a></li>
          <li><a href="#sss" className="text-orange-600 hover:text-orange-700 font-semibold">7. Sik Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giris */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Dogum gunu organizasyonu denildiginde aklimiza ilk gelen pasta ve balonlar olsa da, gercek bir parti atmosferi yaratmanin sirri dogru parti ekipmanlarinda gizlidir. Pamuk seker makinesi, popcorn arabasi ve cikolata selalesi gibi profesyonel ekipmanlar, siradanligi olaganustu bir deneyime donusturur. Istanbul'da her yil binlerce aile, cocuklarinin dogum gununu unutulmaz kilmak icin parti ekipmani <strong>kiralama</strong> hizmetine basvuruyor. Bu rehberde, dogum gunu parti ekipmanlarinin seciminden kurulumuna, yas gruplarina gore onerilere kadar bilmeniz gereken her seyi bulacaksiniz.
      </p>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Ipucu:</strong> Parti ekipmanlari sadece atistirmalik degildir; cocuklar icin canli bir <strong>gosteri</strong> ve interaktif bir deneyimdir. Pamuk sekerin donmesi, popcornun patlamasi, cikolatanin akmasi... Her biri cocuklarin gozlerini buyuleyen bir performanstir.
        </p>
      </div>

      {/* Bolum 1 */}
      <h2 id="neden-vazgecilmez" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Dogum Gununde Parti Ekipmanlari: Neden Vazgecilmez?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bir dogum gunu partisini siradandan ozel kilacak en buyuk etkenlerden biri, cocuklarin bes duyusuna hitap eden deneyimler sunmaktir. Parti ekipmanlari tam da bu noktada devreye girer. Pamuk sekerin tatli kokusu, popcornun catirdamasi, cikolata selalesinin gorsel soleni... Tum bunlar bir araya geldiginde, cocuklar icin sadece bir parti degil, yillar boyunca hatirlanacak bir macera olusur.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3">Gorsel Solen</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> Renkli pamuk sekerler, donerken goz aliyor</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Sonuc:</strong> Cocuklar hayran kaliyor</p>
          <p className="text-gray-700 text-sm"><strong>Fotograf:</strong> Instagram'lik kareler olusur</p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-gray-900 mb-3">Lezzet Deneyimi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> Taze popcorn ve cikolata lezzeti</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Sonuc:</strong> Damak zevkine hitap</p>
          <p className="text-gray-700 text-sm"><strong>Avantaj:</strong> Hazir urunlerden cok daha lezzetli</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
          <h4 className="font-bold text-gray-900 mb-3">Interaktif Eglence</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> Cocuklar surece dahil oluyor</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Sonuc:</strong> Pasif izleyici degil, aktif katilimci</p>
          <p className="text-gray-700 text-sm"><strong>Avantaj:</strong> Bekle-sira sistemiyle sosyal beceri</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Profesyonel parti ekipmani <strong>kiralama</strong> hizmeti, ev ortaminda bile sinema benzeri bir atmosfer yaratmanizi saglar. Ustelik tum ekipmanlar operatoruyle birlikte gelir; siz sadece eglencenin keyfini cikarir, temizlik ve kurulum gibi islerle ugrasmazsiniz. Dogum gunu <strong>organizasyonu</strong> planlarken parti ekipmanlarini da listelerinize eklemenizi siddetle tavsiye ederiz. Daha kapsamli bir rehber icin <Link to="/blog/dogum-gunu-organizasyonu-rehberi" className="text-orange-600 hover:text-orange-700 font-semibold underline">dogum gunu organizasyonu rehberimize</Link> goz atabilirsiniz.
      </p>

      {/* Bolum 2 */}
      <h2 id="pamuk-seker-gosterisi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Pamuk Seker Gosterisi: Cocuklarin Gozundeki Buyu
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pamuk seker, cocuklar icin sadece bir tatli degildir; o, gozlerinin onunde sekerin iplige donustugu, renklerin dans ettigi canli bir <strong>gosteri</strong>dir. Profesyonel pamuk seker operatoru, makinenin basinda adeta bir sanatci gibi calisir: cubugu dondurur, renkleri katman katman ekler ve cocuklarin boyundan buyuk dev pamuk sekerler olusturur.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Pamuk seker <strong>gosterisi</strong>nin en guzel yani, her cocugun kendi pamuk sekerini secebilmesi ve hatta yapim surecini yakından izleyebilmesidir. Operatörümüz cocuklara renk ve aroma seceneklerini sunar, cubugu tutmalarina yardim eder ve her birinin ozel hissetmesini saglar. Bu interaktif deneyim, pamuk sekeri siradanliktan cikarip dogum gununun en cok konusulan ani haline getirir.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
          <h4 className="font-bold text-gray-900 mb-3">Renk Secenekleri</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Pembe (Cilek):</strong> Klasik favorit, kizlarin ilk tercihi</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Mavi (Tutti Frutti):</strong> Erkek temalari icin ideal</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Yesil (Elma):</strong> Doga temali partiler icin</p>
          <p className="text-gray-700 text-sm"><strong>Mor (Uzum):</strong> Prenses ve unicorn temalari</p>
        </div>

        <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
          <h4 className="font-bold text-gray-900 mb-3">Aroma ve Tatlar</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Portakal:</strong> Citrus sevenler icin turuncu pamuk seker</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Muz:</strong> Sari renkli, tropikal parti temasina uygun</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Visne:</strong> Yogun tatli, kirmizi renkli</p>
          <p className="text-gray-700 text-sm"><strong>Vanilya:</strong> Beyaz, sade ve zarif gorunum</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Profesyonel pamuk seker <strong>kiralama</strong> hizmetimiz, makine, operator, tum malzemeler ve 50-100 porsiyon pamuk sekeri icerir. Etkinlik suresi boyunca operator, sinirsiz pamuk seker hazirlar. Tema rengine uygun ozel renk kombinasyonlari da mumkundur. Pamuk seker etkinlikleri hakkinda daha fazla bilgi icin <Link to="/blog/pamuk-seker-etkinlik-rehberi" className="text-orange-600 hover:text-orange-700 font-semibold underline">pamuk seker etkinlik rehberimizi</Link> inceleyebilirsiniz.
      </p>

      {/* Bolum 3 */}
      <h2 id="popcorn-kombinasyon" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Popcorn + Dogum Gunu: Mukemmel Kombinasyon
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Popcorn, dogum gunu partilerinin en pratik ve en sevilen atistirmaligi. Sicak, taze patlamis misirin kokusu bir mekana yayildiginda, hem cocuklar hem yetiskinler icin dayanilmaz bir atmosfer olusur. Popcorn arabasi <strong>kiralama</strong>, partiye retro bir havasi katar ve misafirleri adeta bir sinema lobisine tasir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Popcorn arabasinin en buyuk avantaji, partinin her aninda arka planda calisabilmesidir. Animasyon gosterileri sirasinda, oyun aralarinda veya pasta kesimini beklerken cocuklar istedikleri zaman gelip taze popcorn alabilir. Bu da parti akisini bozmadan surekli bir atistirmalik kaynaği olusturur.
      </p>

      <div className="bg-yellow-50 rounded-lg p-6 mb-8 border border-yellow-200">
        <h4 className="font-bold text-gray-900 mb-4">Parti Programinda Popcorn Zamanlama Onerisi:</h4>
        <div className="space-y-3 text-gray-700 text-sm">
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 min-w-[120px]">14:00 - 14:30:</span>
            <span>Misafirler gelirken popcorn arabasi hazir, ilk ikram yapilir</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 min-w-[120px]">14:30 - 15:30:</span>
            <span>Animasyon/gosteri sirasinda arka planda popcorn hazir bekler</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 min-w-[120px]">15:30 - 16:00:</span>
            <span>Oyun molasinda cocuklar popcorn stand'ina gelir</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 min-w-[120px]">16:00 - 16:30:</span>
            <span>Pasta kesimi sonrasi son popcorn servisi</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-orange-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">Tuzlu Popcorn</h4>
          <p className="text-gray-700 text-sm">Klasik sinema tadinda, hem cocuklarin hem yetiskinlerin favorisi. Tereyagli ve tuzlu versiyon, partinin her aninda tuketilir. Ozellikle film gecesi temali dogum gunleri icin birebir.</p>
        </div>

        <div className="bg-white border-l-4 border-pink-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">Karamelli Popcorn</h4>
          <p className="text-gray-700 text-sm">Tatli sevenler icin karamel kaplamali popcorn secenegi. Ozellikle 5-8 yas arasi cocuklarin gozde tercihi. Dogum gunu pastasi ile birlikte mukemmel bir tatli ikili olusturur.</p>
        </div>

        <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">Renkli Popcorn</h4>
          <p className="text-gray-700 text-sm">Tema rengine uygun boyali popcorn secenegi. Gida boyasi ile renklendirilmis popcornlar, ozellikle tematik dogum gunlerinde dekoratif bir unsur olarak da kullanilir.</p>
        </div>
      </div>

      {/* Bolum 4 */}
      <h2 id="cikolata-selalesi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Cikolata Selalesi ile Dogum Gunu Sofrasi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Cikolata selalesi, dogum gunu sofrasinin tartismasiz yildizi. Eriyen Belcika cikolatasinin katman katman akisi, hem gorselle hem lezzette olaganustu bir deneyim sunar. Cocuklar, cubuga taktiklari meyveleri veya marshmallow'lari cikolata selalesinden gecirerek kendi lezzetlerini yaratir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Cikolata selalesi <strong>kiralama</strong> hizmetimizde, profesyonel 3-4 katli cikolata selalesi, Belcika cikolatasi (sutlu, bitter veya beyaz secenekleriyle), batirmalik meyve tabagi ve marshmallow dahildir. Operator, cikolatanin ideal akiskanligini ve sicakligini etkinlik boyunca kontrol eder.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-amber-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">Meyve Eslestirmeleri</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Cilek:</strong> En populer eslesme, cikolataya muhtesem uyum</li>
            <li><strong>Muz:</strong> Kalin dilimler halinde, doyurucu bir lezzet</li>
            <li><strong>Uzum:</strong> Pratik, tek lokmalik, cocuklar icin ideal</li>
            <li><strong>Ananas:</strong> Tropikal partiler icin egzotik secim</li>
            <li><strong>Kivi:</strong> Renkli gorunumu ile sofranin gozde meyvesi</li>
          </ul>
        </div>

        <div className="bg-orange-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">Diger Batirmaliklar</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Marshmallow:</strong> Cocuklarin en sevdigi, yumusacik dokusu ile</li>
            <li><strong>Waffle Cubuklari:</strong> Mini waffle parcalari, tok tutar</li>
            <li><strong>Kurabiye:</strong> Butik kurabiyeler, cikolata ile muhtesem</li>
            <li><strong>Pretzel Cubuklari:</strong> Tuzlu-tatli kontrasti sevenler icin</li>
            <li><strong>Lokum:</strong> Geleneksel dokunuslar icin</li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Hijyen Notu:</strong> Cikolata selalemiz her etkinlik oncesi sterilize edilir. Batirmaliklar tek kullanimlik cubuklar ile servis edilir. Operatorumuz gida guvenligi sertifikasina sahiptir ve eldiven ile calisir. Alerjisi olan cocuklar icin icerik bilgisi onceden paylasılır.
        </p>
      </div>

      {/* Bolum 5 */}
      <h2 id="yas-gruplari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Yas Gruplarina Gore Parti Ekipmani Secimi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Her yas grubu icin dogru parti ekipmani secimi, etkinligin basarisini dogrudan etkiler. Kucuk cocuklar icin guvenlik on plandayken, buyuk cocuklar icin cesitlilik ve interaktivite onem kazanir. Dogru <strong>organizasyon</strong> planlamasi icin asagidaki yas grubu onerilerimizi inceleyebilirsiniz.
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
          <h4 className="font-bold text-gray-900 mb-3 text-xl">2-4 Yas: Minik Kasifler</h4>
          <p className="text-gray-700 text-sm mb-3">
            Bu yas grubunda guvenlik en onemli faktor. Cocuklar ekipmanlara dokunmak isteyecektir, bu nedenle sicak yuzeylerden uzak tutulmalidir.
          </p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><strong>Onerilen:</strong> Pamuk seker (kucuk porsiyon, yumusak cubuk)</li>
            <li><strong>Dikkat:</strong> Cikolata selalesi yerine cikolata fondu (masada, kontollu)</li>
            <li><strong>Popcorn:</strong> Patlamamis tane riski nedeniyle dikkatli servis</li>
            <li><strong>Ekstra:</strong> Renkli pamuk seker gosterisi izletme, dokunmadan</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h4 className="font-bold text-gray-900 mb-3 text-xl">5-7 Yas: Merakli Kasifler</h4>
          <p className="text-gray-700 text-sm mb-3">
            Bu yas grubu en heyecanli katilimcilardir. Her ekipmani denemek, yapim surecini izlemek ve soru sormak isterler. Gosterinin interaktif boyutu on plana cikar.
          </p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><strong>Onerilen:</strong> Pamuk seker gosterisi + popcorn arabasi kombinasyonu</li>
            <li><strong>Cikolata Selalesi:</strong> Rehberli katilim ile meyve batirma</li>
            <li><strong>Ekstra:</strong> Kendi pamuk sekerini sekillendirme etkinligi</li>
            <li><strong>Populer:</strong> Renkli pamuk seker yarismasi (en buyuk pamuk seker)</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h4 className="font-bold text-gray-900 mb-3 text-xl">8-10 Yas: Bagimsiz Gurmanlar</h4>
          <p className="text-gray-700 text-sm mb-3">
            Bu yas grubundaki cocuklar artik kendi basina ekipmanlardan faydalanabilir. Cesitlilik ve secim ozgurlugu onlar icin cok onemlidir.
          </p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><strong>Onerilen:</strong> Tam donanim - pamuk seker + popcorn + cikolata selalesi</li>
            <li><strong>Ekstra:</strong> Slushie (buzlu icecek) makinesi eklenmesi</li>
            <li><strong>Populer:</strong> DIY cikolata fondu istasyonu</li>
            <li><strong>Trend:</strong> Mini waffle makinesi ile kendi waffle'ini yap</li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
          <h4 className="font-bold text-gray-900 mb-3 text-xl">10+ Yas: Genc Gurmeler</h4>
          <p className="text-gray-700 text-sm mb-3">
            Pre-teen ve ergen cocuklar icin sofistike sunumlar ve sosyal medya dostu goruntuler onem kazanir. Arkadaslariyla paylasabilecekleri deneyimler tercih ederler.
          </p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><strong>Onerilen:</strong> Cikolata selalesi + ozel batirmalik menu</li>
            <li><strong>Trend:</strong> Instagram'lik dev pamuk seker (50 cm+)</li>
            <li><strong>Populer:</strong> Karamelli popcorn bar (farkli tatlar secme)</li>
            <li><strong>Ekstra:</strong> Milkshake veya smoothie istasyonu</li>
          </ul>
        </div>
      </div>

      {/* Bolum 6 */}
      <h2 id="populer-kombinasyonlar" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. En Populer Parti Ekipmani Kombinasyonlari
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Parti ekipmanlarini tek tek kiralamak yerine, paket olarak almaniz hem butcenize hem de organizasyon pratikligine buyuk katki saglar. Iste Istanbul'da en cok tercih edilen parti ekipmani kombinasyonlari ve fiyat araliklari:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900 text-xl">Baslangic Paketi</h4>
            <span className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">Ekonomik</span>
          </div>
          <p className="text-gray-700 text-sm mb-3">Kucuk cap dogum gunleri icin ideal (10-20 cocuk)</p>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li>Pamuk seker makinesi + operator (2 saat)</li>
            <li>50 porsiyon pamuk seker malzemesi</li>
            <li>3 farkli renk/aroma secenegi</li>
          </ul>
          <p className="text-orange-600 font-bold">En cok tercih edilen giris seviyesi paket</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-300">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900 text-xl">Standart Paket</h4>
            <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">En Populer</span>
          </div>
          <p className="text-gray-700 text-sm mb-3">Orta cap dogum gunleri icin ideal (20-40 cocuk)</p>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li>Pamuk seker makinesi + operator (3 saat)</li>
            <li>Popcorn arabasi + operator (3 saat)</li>
            <li>100 porsiyon pamuk seker + sinirsiz popcorn</li>
            <li>5 farkli renk/aroma secenegi</li>
            <li>Retro tasarimli popcorn kutulari</li>
          </ul>
          <p className="text-orange-600 font-bold">Istanbul'da en cok tercih edilen parti ekipmani kombinasyonu</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-2 border-amber-400">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900 text-xl">Premium Paket</h4>
            <span className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold">Tam Donanim</span>
          </div>
          <p className="text-gray-700 text-sm mb-3">Buyuk cap organizasyonlar icin ideal (40-80 cocuk)</p>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li>Pamuk seker makinesi + operator (4 saat)</li>
            <li>Popcorn arabasi + operator (4 saat)</li>
            <li>Cikolata selalesi + operator (4 saat)</li>
            <li>Sinirsiz porsiyon (tum ekipmanlar)</li>
            <li>8 farkli renk/aroma, 3 cikolata cesidi</li>
            <li>Meyve tabagi + marshmallow + batirmaliklar dahil</li>
            <li>Kurulum ve toplama ucretsiz</li>
          </ul>
          <p className="text-orange-600 font-bold">Eksiksiz parti deneyimi icin en kapsamli paketimiz</p>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 shadow-md border-2 border-orange-400">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900 text-xl">VIP Paket</h4>
            <span className="bg-orange-200 text-orange-800 px-4 py-1 rounded-full text-sm font-semibold">Ozel Tasarim</span>
          </div>
          <p className="text-gray-700 text-sm mb-3">Ozel konsept dogum gunleri ve kurumsal etkinlikler (80+ kisi)</p>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li>Premium paketteki tum ekipmanlar</li>
            <li>Slushie (buzlu icecek) makinesi</li>
            <li>Mini waffle istasyonu</li>
            <li>Tema rengi ozel pamuk seker tasarimi</li>
            <li>Kisisellestirilmis popcorn kutulari (isim baskili)</li>
            <li>Profesyonel dekorasyon destegi</li>
            <li>5 saat full hizmet + 1 saat ekstra hediye</li>
          </ul>
          <p className="text-orange-600 font-bold">Unutulmaz bir <strong>organizasyon</strong> icin en ozel paketimiz</p>
        </div>
      </div>

      {/* Gercek Hikaye */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-8 border border-orange-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">Gercek Hikaye: 6 Yas Dogum Gunu - Atasehir</h4>
        <p className="text-gray-700 text-sm mb-4">
          Atasehir'de bir site icindeki sosyal tesiste, 6 yasindaki Defne'nin dogum gunu icin Standart Paket tercih edildi. Pamuk seker makinesi ve popcorn arabasi yan yana kuruldu. Cocuklar once pamuk seker gosterisini izledi, sonra sira sira gelip kendi renklerini secti. Defne, pembe ve mor karisimi bir dev pamuk seker istedi ve operatörümüz ozenle hazirladi. Popcorn arabasi ise partinin arka planinda surekli calisti; cocuklar oyun aralarinda gelip taze popcorn aldi. Annesi Selin Hanim soyle dedi: "Cocuklar o kadar eglendi ki, eve gitmek istemediler. Parti ekipmanlari partinin yildizi oldu." Bu geri bildirim, bizim icin en degerli oduldur.
        </p>
        <p className="text-gray-600 text-xs italic">
          -- Parti ekipmanlari, dogum gununu siradanliktan ozel kilmanin en etkili yoludur.
        </p>
      </div>

      {/* Bolum 7 - SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Sik Sorulan Sorular (SSS)
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
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pamuk Seker ve Parti Ekipmanlari Hizmetimiz</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Istanbul genelinde profesyonel parti ekipmani <strong>kiralama</strong> hizmeti sunuyoruz. Pamuk seker makinesi, popcorn arabasi, cikolata selalesi ve daha fazlasi icin detayli bilgi alin. Her bir <strong>organizasyon</strong> icin ozel fiyat teklifi hazirliyoruz.
        </p>
        <Link
          to="/organizasyonlar/pamuk-seker"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Pamuk Seker ve Parti Ekipmanlari Hizmeti
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Dogum Gunu Partinizi Unutulmaz Kilin!</h3>
        <p className="mb-6 leading-relaxed">
          Profesyonel parti ekipmani <strong>kiralama</strong> ile cocuklarinizin dogum gununu ozel kilin. Pamuk seker gosterisinden cikolata selalesine, popcorn arabasindan ozel paketlere kadar her sey dahil. Hemen bizi arayin ve ucretsiz teklif alin!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-orange-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            +90 530 730 90 09
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
      faqData={faqData}
      relatedServicePath="/organizasyonlar/pamuk-seker"
      relatedServiceName="Pamuk Seker ve Parti Ekipmanlari"
    >
      {content}
    </BlogDetail>
  )
}

export default PamukSekerDogumGunu
