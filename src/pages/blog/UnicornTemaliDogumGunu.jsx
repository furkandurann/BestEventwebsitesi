import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const UnicornTemaliDogumGunu = () => {
  const faqData = [
    {
      question: 'Unicorn temalı parti hangi yaş grubuna uygun?',
      answer: 'Unicorn temalı doğum günü partisi özellikle 3-8 yaş aralığındaki çocuklar için idealdir. En yoğun talep 4-7 yaş grubundan gelmektedir. Kız çocuklarında çok popüler olan bu tema, son yıllarda erkek çocuklarının da ilgisini çekmeye başlamıştır. Pastel renkler, gökkuşağı ve sihirli atmosfer tüm çocukları büyüler.'
    },
    {
      question: 'Unicorn kostümlü karakter nasıl bir performans sergiler?',
      answer: 'Unicorn kostümlü karakter, sihirli bir müzik eşliğinde gökkuşağı efektleriyle sahneye girer. Dans gösterisi, hikaye anlatımı, dilek tutma töreni ve sihirli boynuz oyunları performansın ana bileşenleridir. Karakter, çocuklarla tek tek etkileşim kurarak onlara sihirli toz serper, dilek yıldızı dağıtır ve birlikte dans eder. Gösteri sonunda fotoğraf çekimi yapılır.'
    },
    {
      question: 'Gökkuşağı süsleme paketi neleri kapsar?',
      answer: 'Gökkuşağı süsleme paketimiz; pastel renk balon kemeri, gökkuşağı arka plan panosu, unicorn figürlü masa düzeni, tematik tabak-bardak-peçete seti, tavan asma süsleri (yıldız ve bulut), LED peri ışıkları, zemin dekorasyonu ve fotoğraf köşesi aksesuar setini kapsar. Tüm süslemeler profesyonel ekibimiz tarafından etkinlik öncesinde kurulur.'
    },
    {
      question: 'Unicorn partisinde hangi oyunlar oynanır?',
      answer: 'Unicorn temalı partilerde sihirli boynuz fırlatma oyunu, gökkuşağı renk avı, unicorn yürüyüşü dansı, dilek yıldızı toplama yarışması, büyülü orman macerası ve peri tozu hazırlama atölyesi gibi aktiviteler yapılır. Her oyun sihir temasına uygun olarak tasarlanmıştır ve çocukların hayal gücünü besler.'
    },
    {
      question: 'Unicorn temalı parti ile Elsa teması birleştirilebilir mi?',
      answer: 'Evet, Unicorn ve Elsa temaları harika bir kombinasyon oluşturur. Her iki tema da sihir, parıltı ve fantastik dünya unsurları barındırdığından mükemmel uyum sağlar. Organizasyonumuzda Unicorn karakteri ve Elsa kostümlü karakter birlikte sahne alabilir. Süsleme pastel tonlar ve buz mavisi karışımıyla hazırlanır. Bu kombinasyon kız çocuklarının en çok talep ettiği ikili temadır.'
    },
    {
      question: 'Unicorn kiralama fiyatı ne kadar?',
      answer: 'Unicorn karakter kiralama fiyatları gösteri süresine, ek hizmetlere, süsleme paketi tercihine ve mekan konumuna göre değişiklik gösterir. Tek karakter gösterisi ile başlayan paketlerden, süsleme + karakter + oyun organizasyonu + fotoğraf çekimi dahil komple paketlere kadar farklı seçenekler sunuyoruz. Kişiye özel fiyat teklifi almak için bizi aramanızı veya WhatsApp üzerinden ulaşmanızı öneririz.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-purple-500">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#unicorn-parti-nedir" className="text-purple-600 hover:text-purple-700 font-semibold">1. Unicorn Temalı Doğum Günü Organizasyonu Nedir?</a></li>
          <li><a href="#gokkusagi-dekorasyon" className="text-purple-600 hover:text-purple-700 font-semibold">2. Gökkuşağı Dekorasyonu ve Sihirli Atmosfer</a></li>
          <li><a href="#sihirli-boynuz-oyunlari" className="text-purple-600 hover:text-purple-700 font-semibold">3. Sihirli Boynuz Oyunları ve Aktiviteler</a></li>
          <li><a href="#kiz-cocuk-parti" className="text-purple-600 hover:text-purple-700 font-semibold">4. Kız Çocuk Parti Fikirleri: Unicorn Dünyası</a></li>
          <li><a href="#gosteri-akisi" className="text-purple-600 hover:text-purple-700 font-semibold">5. Unicorn Gösteri Akışı: Büyülü Anlar</a></li>
          <li><a href="#kombinasyon-tema" className="text-purple-600 hover:text-purple-700 font-semibold">6. Unicorn + Diğer Tema Kombinasyonları</a></li>
          <li><a href="#sss" className="text-purple-600 hover:text-purple-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Unicorn, çocukların hayal dünyasının en büyülü ve en sevilen yaratığıdır. Gökkuşağı yelesi, parlayan boynuzu ve sihirli güçleriyle her çocuğun kalbinde özel bir yere sahip olan unicorn, doğum günü partilerinin de en popüler temalarından biri haline gelmiştir. İstanbul'da unicorn temalı doğum günü organizasyonu ile çocuğunuzun hayallerini gerçeğe dönüştürüyoruz. Pastel renkli gökkuşağı dekorasyonu, sihirli boynuz oyunları ve profesyonel unicorn karakter gösterisi ile partinizi masalsı bir deneyime dönüştürün. Bu rehberde, unicorn temalı doğum günü organizasyonunun her aşamasını detaylı olarak ele alacağız.
      </p>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          🦄 <strong>İpucu:</strong> Unicorn temalı organizasyonun sihri, detaylarda gizlidir. Pastel renklerin uyumu, simli aksesuarlar, peri ışıkları ve gökkuşağı efektleri bir araya geldiğinde mekan gerçek bir unicorn diyarına dönüşür. Profesyonel organizasyonumuzda her detay titizlikle planlanır ve çocuklar masalın içine adım atmış gibi hisseder.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="unicorn-parti-nedir" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Unicorn Temalı Doğum Günü Organizasyonu Nedir?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Unicorn temalı doğum günü organizasyonu, masalsı bir atmosferde çocukların hayal gücünü canlandıran kapsamlı bir etkinlik konseptidir. Pastel pembe, lavanta, bebe mavisi ve altın renklerin hakim olduğu dekorasyon, gökkuşağı efektleri, simli detaylar ve sihirli oyunlarla mekan tamamen bir unicorn krallığına dönüştürülür. Organizasyonun merkezinde ise profesyonel unicorn kostümlü karakter performansı yer alır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Unicorn partisinin diğer temalardan farkı, tamamen sihir ve hayal dünyası üzerine kurulu olmasıdır. Çocuklar, partiye geldiklerinde kendilerini başka bir dünyada bulur. Gökkuşağı renkli kapıdan giren misafirler, bulut şeklinde süslemeler, yıldızlı zemin ve peri ışıklarıyla büyülü bir yolculuğa çıkar. Unicorn karakteri sahneye çıktığında ise bu sihirli atmosfer doruk noktasına ulaşır.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">✨</span> Unicorn Partisinin Sihirli Unsurları:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">1.</span>
              <div>
                <strong>Masalsı Atmosfer:</strong> Pastel renkler, gökkuşağı süslemeler ve peri ışıkları ile mekan bir masal diyarına dönüşür.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">2.</span>
              <div>
                <strong>Sihirli Etkileşim:</strong> Unicorn karakteri çocuklara sihirli toz serper, dilek tutturur ve büyülü hikayeler anlatır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">3.</span>
              <div>
                <strong>Yaratıcı Aktiviteler:</strong> Peri tozu hazırlama, gökkuşağı boyama ve dilek yıldızı yapımı gibi el becerisi aktiviteleri.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">4.</span>
              <div>
                <strong>Görsel Şölen:</strong> Gökkuşağı pasta, unicorn cupcake, pastel renkli şekerlemeler ile ikram masası görsel bir şölen sunar.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Unicorn temalı organizasyonumuz hakkında detaylı bilgi almak ve karakter seçeneklerini incelemek için <Link to="/karakter/unicorn-kiralama-istanbul" className="text-purple-600 hover:text-purple-700 font-semibold underline">Unicorn karakter kiralama</Link> sayfamızı ziyaret edebilirsiniz.
      </p>

      {/* Bölüm 2 */}
      <h2 id="gokkusagi-dekorasyon" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Gökkuşağı Dekorasyonu ve Sihirli Atmosfer
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Unicorn temalı partinin ruhunu belirleyen en önemli unsur, gökkuşağı dekorasyonudur. Pastel tonlarda hazırlanan süsleme, mekanı gerçek bir unicorn krallığına dönüştürür. Her detay birbiriyle uyum içinde olmalı ve bütüncül bir görsel deneyim sunmalıdır. İşte profesyonel unicorn dekorasyon paketimizin detayları:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🎈</span> Balon ve Süsleme
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Balon Kemeri:</strong> Pastel pembe, lavanta, bebe mavisi, şeftali ve altın balonlardan oluşan gökkuşağı kemeri</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Tavan Süsleri:</strong> Bulut şeklinde tül süsler, yıldız şeklinde asma dekorlar, gökkuşağı streamer</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Zemin:</strong> Yapay çim veya simli zemin örtüsü, pati izi ve yıldız çıkartmaları</p>
          <p className="text-gray-700 text-sm"><strong>Işıklandırma:</strong> Pastel LED peri ışıkları, yıldız şeklinde spot aydınlatma</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">📸</span> Fotoğraf Köşesi
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Arka Plan:</strong> Gökkuşağı ve bulutlu unicorn temalı banner</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aksesuarlar:</strong> Unicorn tacı, sihirli değnek, gökkuşağı kanatları, yıldız gözlükleri</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Çerçeve:</strong> Altın yaldızlı polaroid çerçeve, unicorn şeklinde selfie çerçevesi</p>
          <p className="text-gray-700 text-sm"><strong>Detaylar:</strong> Simli zemin, yapay çiçek dekorasyonu, mini unicorn heykelleri</p>
        </div>
      </div>

      <div className="bg-white border border-purple-200 rounded-lg p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-3">🎨 Renk Paleti Rehberi</h4>
        <p className="text-gray-700 text-sm mb-3">
          Unicorn temalı dekorasyonda renk seçimi son derece önemlidir. Doğru pastel tonların bir arada kullanılması, mekanın büyülü atmosferini belirler.
        </p>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>&#8226; <strong>Ana Renk:</strong> Pastel pembe - tüm süslemelerin temelini oluşturur</li>
          <li>&#8226; <strong>Vurgu Renk 1:</strong> Lavanta / açık mor - derinlik ve sihir hissi katar</li>
          <li>&#8226; <strong>Vurgu Renk 2:</strong> Bebe mavisi - gökkuşağı bütünlüğünü sağlar</li>
          <li>&#8226; <strong>Aksesuar Renk:</strong> Altın veya gümüş - unicorn boynuzu ve yıldızlarda kullanılır</li>
          <li>&#8226; <strong>Nötr Renk:</strong> Beyaz ve krem - dengeli bir görünüm için</li>
        </ul>
      </div>

      {/* Bölüm 3 */}
      <h2 id="sihirli-boynuz-oyunlari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Sihirli Boynuz Oyunları ve Aktiviteler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Unicorn partisinin en eğlenceli bölümü, sihirli boynuz temalı oyunlar ve yaratıcı aktivitelerdir. Bu oyunlar çocukların hayal gücünü beslerken, fiziksel aktivitelerini de destekler. Her oyun unicorn evrenine uygun olarak tasarlanmıştır ve profesyonel karakter tarafından yönetilir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-pink-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🦄 Oyun 1: Sihirli Boynuz Fırlatma</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 8-12 dakika</p>
          <p className="text-gray-700 text-sm">Yumuşak unicorn boynuz şekilli halkaları hedef unicorn figürüne fırlatma oyunu. Her halkanın farklı rengi farklı puan değerine sahiptir. Gökkuşağının tüm renklerini toplayan "Gökkuşağı Şampiyonu" unvanını kazanır. Çocuklar sırayla atış yapar ve Unicorn karakteri tezahürat ederek moral verir.</p>
        </div>

        <div className="bg-white border border-purple-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🌈 Oyun 2: Gökkuşağı Renk Avı</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 10-15 dakika</p>
          <p className="text-gray-700 text-sm">Mekana gizlenmiş 7 farklı renkte yıldız kartlarını bulma oyunu. Her çocuk gökkuşağının tüm renklerini tamamlamaya çalışır: kırmızı, turuncu, sarı, yeşil, mavi, lacivert ve mor. Tüm renkleri ilk tamamlayan çocuk "Gökkuşağı Avcısı" ödülünü alır. Bu oyun gözlem yeteneği, renk bilgisi ve hız gerektiren eğitici bir aktivitedir.</p>
        </div>

        <div className="bg-white border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">✨ Oyun 3: Peri Tozu Hazırlama Atölyesi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 12-18 dakika</p>
          <p className="text-gray-700 text-sm">Çocuklar kendi sihirli peri tozlarını hazırlar. Renkli simler, yıldız konfetileri ve parıltılı tozlar küçük şişelere konularak kişisel bir "dilek şişesi" oluşturulur. Unicorn karakteri her çocuğun şişesine "sihirli nefes" üfler ve dilek tutturur. Hazırlanan peri tozu şişeleri çocuklara hatıra olarak hediye edilir. Bu atölye hem yaratıcılığı hem de ince motor becerilerini geliştirir.</p>
        </div>

        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">💃 Oyun 4: Unicorn Yürüyüşü Dansı</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 8-10 dakika</p>
          <p className="text-gray-700 text-sm">Müzik çalarken çocuklar unicorn gibi dans ederek yürür. Müzik durduğunda herkes sihirli bir poz verir ve donar. En yaratıcı pozu veren çocuk her turda puan kazanır. Unicorn karakteri de dansa katılarak çocuklara ilham verir. Oyun, koordinasyon, yaratıcılık ve müzik duygusu geliştiren eğlenceli bir aktivitedir.</p>
        </div>
      </div>

      {/* Bölüm 4 */}
      <h2 id="kiz-cocuk-parti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Kız Çocuk Parti Fikirleri: Unicorn Dünyası
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Unicorn teması, kız çocukları için hazırlanan doğum günü partilerinin en popüler konseptlerinden biridir. Pembe, mor ve pastel tonların hakim olduğu bu tema, prenses partisinin modern ve yaratıcı bir alternatifi olarak büyük ilgi görmektedir. İşte unicorn temalı kız çocuk partisi için yaratıcı fikirler ve detaylı planlama önerileri:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3">👑 Unicorn Taç Giydirme Töreni</h4>
          <p className="text-gray-700 text-sm mb-3">Partinin en özel anlarından biri olan taç giydirme töreni, doğum günü çocuğunu unicorn prensesine dönüştürür.</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Simli unicorn tacı ve sihirli değnek</li>
            <li>&#8226; Gökkuşağı pelerin giydirme</li>
            <li>&#8226; Unicorn karakteri tarafından taç takma</li>
            <li>&#8226; Tüm misafirlere mini unicorn tacı hediyesi</li>
            <li>&#8226; Sihirli yemin töreni: "Sihrin gücüne inanıyorum!"</li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
          <h4 className="font-bold text-gray-900 mb-3">🎨 Unicorn Güzellik Köşesi</h4>
          <p className="text-gray-700 text-sm mb-3">Çocuklar için özel olarak hazırlanan güzellik köşesinde unicorn temalı makyaj ve saç yapımı gerçekleştirilir.</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Pastel renk yüz boyama (unicorn boynuzu, yıldızlar)</li>
            <li>&#8226; Simli geçici dövme uygulaması</li>
            <li>&#8226; Gökkuşağı renkli saç tokası takma</li>
            <li>&#8226; Tırnak süsleme (çocuklara uygun ojeler)</li>
            <li>&#8226; Simli vücut spreyi uygulama</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Unicorn teması, Elsa ve prenses temaları ile mükemmel uyum sağlar. Her üç tema da sihir, parıltı ve fantastik dünya unsurları barındırdığından birlikte kullanıldığında inanılmaz güçlü bir atmosfer oluşturur. Elsa karakteri ile Unicorn'un birlikte sahne aldığı kombine organizasyonlar, kız çocuklarının en çok talep ettiği paketlerdendir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Elsa ve Unicorn kombine organizasyonu hakkında detaylı bilgi almak için <Link to="/karakter/elsa-kiralama-istanbul" className="text-purple-600 hover:text-purple-700 font-semibold underline">Elsa karakter kiralama</Link> sayfamızı da incelemenizi öneriyoruz. İki karakter bir arada hem maliyet avantajı hem de çok daha zengin bir gösteri deneyimi sunar.
      </p>

      {/* Bölüm 5 */}
      <h2 id="gosteri-akisi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Unicorn Gösteri Akışı: Büyülü Anlar
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Profesyonel Unicorn gösterisi, her anı dikkatle planlanmış büyülü bir deneyimdir. Çocukların enerji seviyesi ve dikkat süresi göz önünde bulundurularak akış optimize edilmiştir. İşte standart bir 55 dakikalık Unicorn gösterisinin detaylı akışı:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-pink-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">0-5 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Sihirli Giriş: "Unicorn Geliyor!"</h4>
              <p className="text-gray-700 text-sm">Işıklar kısılır, peri müziği yükselir, simli duman efekti başlar. "Gökkuşağının ötesinden sihirli bir misafir geliyor!" anonsu yapılır. Unicorn karakteri dans ederek ve parıltılar saçarak sahneye girer. Çocuklar büyülenmiş gibi izler. Doğum günü çocuğu özel olarak selamlanır ve sihirli bir hediye verilir.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-purple-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">5-15 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Hikaye Anlatımı ve Sihirli Dünya</h4>
              <p className="text-gray-700 text-sm">Unicorn karakteri çocukları sihirli diyarının hikayesine davet eder. Gökkuşağı köprüsü, yıldız ormanı ve kristal göl hakkında büyülü bir masal anlatılır. Çocuklar yere oturup hikayeyi dinlerken, interaktif sorularla katılım sağlanır. Hikaye boyunca simli toz efektleri kullanılarak atmosfer güçlendirilir.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-blue-400 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">15-30 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Oyun ve Aktivite Zamanı</h4>
              <p className="text-gray-700 text-sm">Sihirli boynuz fırlatma, gökkuşağı renk avı, unicorn yürüyüşü dansı ve peri tozu atölyesi sırayla gerçekleştirilir. Unicorn karakteri her aktivitede çocuklarla birlikte hareket eder. Kazananlara simli yıldız madalyaları ve unicorn çıkartmaları hediye edilir. Bu bölüm gösterinin en enerjik ve katılımcı kısmıdır.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-green-400 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-green-400 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">30-40 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Taç Giydirme ve Dans Gösterisi</h4>
              <p className="text-gray-700 text-sm">Doğum günü çocuğuna "Unicorn Prensesi/Prensi" taç giydirme töreni yapılır. Tüm misafirlere mini unicorn tacı dağıtılır. Ardından gökkuşağı müziği eşliğinde hep birlikte dans edilir. Unicorn karakteri özel koreografi sunar ve çocuklar taklit eder. Konfeti ve balon patlatma ile dans bölümü son bulur.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-yellow-400 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">40-50 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Dilek Tutma ve Fotoğraf Çekimi</h4>
              <p className="text-gray-700 text-sm">Unicorn karakteri her çocuğa bir dilek yıldızı verir. Çocuklar gözlerini kapatarak dilek tutar ve yıldızlarını dilek kutusuna atar. Ardından karakterle tek tek ve grup fotoğrafları çekilir. Fotoğraf köşesinde unicorn aksesuarları ve gökkuşağı arka plan kullanılır. Bu bölüm en duygusal ve hatıra dolu andır.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-pink-300 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">50-55 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Sihirli Veda: "Gökkuşağının Ötesinde Görüşürüz!"</h4>
              <p className="text-gray-700 text-sm">Unicorn karakteri doğum günü çocuğuna özel bir veda mesajı verir: "Sihir her zaman seninle, yeter ki inan!" Tüm çocuklara el sallayarak peri müziği eşliğinde simli duman arasından sahneden ayrılır. Çocuklar alkışlar ve konfetilerle unicorn'u uğurlar.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bölüm 6 */}
      <h2 id="kombinasyon-tema" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Unicorn + Diğer Tema Kombinasyonları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Unicorn teması, birçok popüler tema ile birleştirilerek daha zengin ve etkileyici organizasyonlar oluşturulabilir. Kombine temalar hem gösteri süresini uzatır hem de çocuklara çok daha çeşitli bir deneyim sunar. İşte en çok tercih edilen Unicorn kombinasyonları:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">❄️</span> Unicorn + Elsa
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Uyum:</strong> Sihir ve masal teması birleşir</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renk Paleti:</strong> Pastel pembe + buz mavisi + gümüş</p>
          <p className="text-gray-700 text-sm"><strong>Akış:</strong> Elsa ilk sahne alarak buz masalını anlatır, ardından Unicorn sihirli girişle sahneye çıkar. İki karakter birlikte dans eder ve çocuklara büyülü bir deneyim sunar. En popüler kız çocuk kombinasyonudur.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🫧</span> Unicorn + Bubble Show
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Uyum:</strong> Köpükler ve sihir birleşir</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Efekt:</strong> Dev balonlar gökkuşağı ışıklarıyla aydınlatılır</p>
          <p className="text-gray-700 text-sm"><strong>Akış:</strong> Bubble show sanatçısı dev balonlar oluştururken, Unicorn balonların arasından sürpriz giriş yapar. Işıklı köpükler ve simli atmosfer birleşince ortaya masalsı bir gösteri çıkar. Çocuklar büyülenir.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎨</span> Unicorn + Yüz Boyama
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Uyum:</strong> Yaratıcılık ve masal teması birleşir</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Tasarım:</strong> Unicorn boynuzu, gökkuşağı, yıldızlar</p>
          <p className="text-gray-700 text-sm"><strong>Akış:</strong> Gösteri başlamadan önce çocukların yüzlerine unicorn temalı boyamalar yapılır. Boynuz, gökkuşağı ve yıldız desenleri çocukları birer unicorn'a dönüştürür. Boyalı yüzlerle karakterle çekilen fotoğraflar harika kareler ortaya çıkarır.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎩</span> Unicorn + Sihirbaz
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Uyum:</strong> Büyü ve sihir teması birleşir</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Konsept:</strong> Sihirbaz "Unicorn Büyücüsü" rolünde</p>
          <p className="text-gray-700 text-sm"><strong>Akış:</strong> Sihirbaz büyü yaparak Unicorn'u çağırır. Dev bir sandıktan veya perde arkasından Unicorn sihirle belirir. Sihirbaz numaraları ve unicorn dansı birlikte sergilenerek çocuklara çift büyü deneyimi yaşatılır.</p>
        </div>
      </div>

      {/* Gerçek Hikaye */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8 border border-pink-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🎉 Gerçek Hikaye: 6 Yaş Unicorn Partisi - Beşiktaş</h4>
        <p className="text-gray-700 text-sm mb-4">
          Küçük Zeynep'in 6. yaş doğum gününde büyülü bir unicorn organizasyonu planladık. Beşiktaş'ta geniş bir bahçede gerçekleştirilen parti, 28 çocuğun katılımıyla muhteşem geçti. Bahçe girişi pastel balon kemeriyle süslenmiş, zemine gökkuşağı renkli yol çizilmişti. Ağaçlara asılan peri ışıkları akşam vakti büyülü bir atmosfer yaratıyordu.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Unicorn karakteri simli duman arasından süzülerek sahneye çıktığında Zeynep'in gözleri doldu. "Anne, gerçek bir unicorn!" diye bağırdı. Peri tozu atölyesinde her çocuk kendi dilek şişesini hazırladı ve gökkuşağı renk avında bahçeyi koşturarak gizli yıldızları buldu. Taç giydirme töreninde Zeynep "Gökkuşağı Prensesi" ilan edildiğinde tüm misafirler alkışladı. Parti çantalarında unicorn çıkartma seti, peri tozu şişesi ve mini unicorn figürü ile çocuklar evlerine mutlulukla döndü.
        </p>
        <p className="text-gray-600 text-xs italic">
          — Unicorn temalı organizasyon, çocukların sihire inandığı ve gökkuşağının ardındaki masalı yaşadığı unutulmaz bir deneyimdir.
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
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🦄 Unicorn Karakter Kiralama Hizmetimiz</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Unicorn temalı doğum günü organizasyonu ile çocuğunuzun hayallerini gerçeğe dönüştürün. Sihirli boynuz oyunları, gökkuşağı dansı, peri tozu atölyesi ve profesyonel fotoğraf çekimi dahil komple paketler sunuyoruz. İstanbul'un tüm semtlerinde hizmetinizdeyiz.
        </p>
        <Link
          to="/maskot/unicorn-maskot-istanbul"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Unicorn Kiralama Sayfasına Git →
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">✨ Sihirli Unicorn Partisi Planlayın!</h3>
        <p className="mb-6 leading-relaxed">
          Gökkuşağı dekorasyonu, sihirli boynuz oyunları ve profesyonel Unicorn karakter gösterisi ile çocuğunuzun doğum gününü masalsı bir deneyime dönüştürün. Komple organizasyon paketleri için hemen bizi arayın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-purple-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            📞 Hemen Ara: 05307309009
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Unicorn%20temal%C4%B1%20do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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
      slug="unicorn-temali-dogum-gunu"
      faqData={faqData}
      relatedServicePath="/karakter/unicorn-kiralama-istanbul"
      relatedServiceName="Unicorn Kiralama"
    >
      {content}
    </BlogDetail>
  )
}

export default UnicornTemaliDogumGunu
