import BlogDetail from '../../components/BlogDetail'

const PalyacoKizKulesi = () => {
  const faqData = [
    {
      question: 'Kız Kulesi\'nde çocuk doğum günü organizasyonu yapılabilir mi?',
      answer: 'Evet, Kız Kulesi\'nde çocuk doğum günü organizasyonu düzenlenebilir. Ancak mekanın kapasitesi sınırlı olduğu için en az 2-3 ay öncesinden rezervasyon yapılması gerekir. BestEvent olarak Kız Kulesi ile koordineli çalışarak sizin için tüm izinleri ve lojistiği organize ediyoruz.'
    },
    {
      question: 'Palyaço Kız Kulesi\'ne tekneyle mi gelir?',
      answer: 'Evet, Kız Kulesi\'ne ulaşım sadece tekneyle mümkündür. Palyaçomuz tüm ekipmanlarıyla birlikte Salacak veya Kabataş iskelesinden özel tekneye biner. Ekipmanların su geçirmez çantalarda taşınması ve güvenli transferi tamamen bizim sorumluluğumuzdadır.'
    },
    {
      question: 'Kız Kulesi\'nde kaç çocuk ağırlanabilir?',
      answer: 'Kız Kulesi\'nin etkinlik alanı sınırlıdır. Genel olarak 20-30 çocukluk bir organizasyon rahatça yapılabilir. 30 üzeri kişilik organizasyonlar için mekanın teras ve iç mekan bölümleri birlikte kullanılmalıdır. Detaylı kapasite bilgisi için ekibimizle iletişime geçebilirsiniz.'
    },
    {
      question: 'Kötü hava koşullarında organizasyon iptal olur mu?',
      answer: 'Kız Kulesi\'nin kapalı iç mekanı olduğu için yağmurlu günlerde gösteri içeride gerçekleştirilebilir. Ancak şiddetli fırtına ve yüksek dalga koşullarında tekne seferleri iptal olabilir. Bu durumda organizasyon alternatif bir tarihe ertelenir veya farklı bir mekana taşınır. B planı her zaman hazırdır.'
    },
    {
      question: 'Kız Kulesi palyaço organizasyonu fiyatı nedir?',
      answer: 'Kız Kulesi organizasyonu, standart palyaço kiralama fiyatına ek olarak tekne transferi, mekan izin ücretleri ve özel lojistik maliyetlerini içerir. Bu nedenle fiyat, organizasyonun kapsamına ve kişi sayısına göre değişir. Detaylı ve kişiye özel fiyat teklifi almak için 05307309009 numarasını arayabilir veya WhatsApp üzerinden ulaşabilirsiniz.'
    },
    {
      question: 'Ekipmanlar (balon, müzik) tekneyle mi taşınır?',
      answer: 'Evet, tüm gösteri ekipmanları tekneyle taşınır. Sosis balonlar, müzik sistemi, yüz boyama malzemeleri ve dekorasyon ürünleri su geçirmez profesyonel taşıma çantalarında güvenle nakledilir. Ekipman transferi etkinlikten en az 1 saat önce tamamlanır, böylece kurulum için yeterli zaman kalır.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#kiz-kulesi-nedir" className="text-red-600 hover:text-red-700 font-semibold">1. Kız Kulesi'nde Palyaço Kiralama Organizasyonu: Neden Özel?</a></li>
          <li><a href="#ulasim-tekne" className="text-red-600 hover:text-red-700 font-semibold">2. Kız Kulesi Palyaço Organizasyonu: Tekne ile Ulaşım</a></li>
          <li><a href="#akustik-alan" className="text-red-600 hover:text-red-700 font-semibold">3. Palyaço Gösterisi İçin Mekan Akustiği ve Organizasyon</a></li>
          <li><a href="#palyaco-gosterisi" className="text-red-600 hover:text-red-700 font-semibold">4. Kız Kulesi Palyaço Kiralama Hizmeti: Özel Aktiviteler</a></li>
          <li><a href="#checklist" className="text-red-600 hover:text-red-700 font-semibold">5. Palyaço Kiralama Organizasyonu: Ekipman ve Lojistik</a></li>
          <li><a href="#gercek-deneyim" className="text-red-600 hover:text-red-700 font-semibold">6. Kız Kulesi Doğum Günü Organizasyonu: Gerçek Deneyim</a></li>
          <li><a href="#sss" className="text-red-600 hover:text-red-700 font-semibold">7. Kız Kulesi Palyaço Kiralama Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş paragrafı */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Kız Kulesi, İstanbul Boğazı'nın tam ortasında yükselen efsanevi yapısıyla dünyanın en romantik ve gizemli mekanlarından biridir. Peki ya bu eşsiz mekanda bir çocuk doğum günü organizasyonu düzenlenirse? Profesyonel <a href="/blog/palyaco-kiralama-istanbul" className="text-red-600 hover:text-red-700 font-semibold underline">palyaço kiralama</a> hizmeti ile Kız Kulesi'nde unutulmaz bir gösteri organize etmek artık hayal değil. Bu rehberde, Boğaz'ın ortasında palyaço organizasyonu planlamanın tüm detaylarını, tekne transferinden mekan akustiğine, ekipman lojistiğinden gerçek deneyimlere kadar her şeyi bulacaksınız.
      </p>

      {/* İpucu kutusu */}
      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          🏰 <strong>İpucu:</strong> Kız Kulesi'nde organizasyon planlamak, standart bir mekan rezervasyonundan çok farklıdır. Tekne transferi, alan sınırlamaları ve akustik koşullar, önceden profesyonel bir ekiple planlanmalıdır. BestEvent olarak bu sürecin her adımında yanınızdayız.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="kiz-kulesi-nedir" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Kız Kulesi'nde Palyaço Kiralama Organizasyonu: Neden Özel?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Kız Kulesi (Maiden's Tower), İstanbul'un Üsküdar kıyısından yaklaşık 200 metre açıkta, Boğaz'ın Marmara Denizi'ne açıldığı noktada küçük bir adacık üzerinde yer alır. Yaklaşık 2500 yıllık bir geçmişe sahip olan kule; fener, karakol, karantina istasyonu ve restoran gibi pek çok farklı amaçla kullanılmıştır. Bugün ise İstanbul'un en ikonik simgelerinden biri olarak hem yerli hem yabancı turistlerin ilgi odağıdır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Kız Kulesi'ni bir çocuk doğum günü organizasyonu için özel kılan birkaç temel neden vardır. Her şeyden önce, mekanın eşsiz konumu, Boğaz manzarası eşliğinde düzenlenen bir gösteri ile çocuklara ve ailelerine masalsı bir atmosfer sunar. Denizin ortasında bir palyaço gösterisi izlemek, hiçbir çocuğun unutamayacağı bir deneyimdir.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h4 className="font-bold text-gray-900 mb-3">🌊 Eşsiz Konum</h4>
          <p className="text-gray-700 text-sm">Boğaz'ın tam ortasında, 360 derece deniz manzarası ile çevrili. Avrupa ve Asya yakalarını aynı anda görebileceğiniz tek etkinlik mekanı.</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
          <h4 className="font-bold text-gray-900 mb-3">📸 Fotoğraf Fırsatları</h4>
          <p className="text-gray-700 text-sm">Gün batımında Boğaz manzarası önünde çekilen doğum günü fotoğrafları, ömür boyu saklanacak hatıralar oluşturur. Palyaço ile çekilen kareler benzersizdir.</p>
        </div>
        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h4 className="font-bold text-gray-900 mb-3">🎭 Masalsı Atmosfer</h4>
          <p className="text-gray-700 text-sm">Tarihi taş duvarlar, deniz sesi ve martı çığlıkları, çocuklar için bir masal dünyası etkisi yaratır. Gösteri sırasında bu atmosfer, çocukların hayal gücünü tetikler.</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
          <h4 className="font-bold text-gray-900 mb-3">🚢 Tekne Macerası</h4>
          <p className="text-gray-700 text-sm">Kız Kulesi'ne tekneyle ulaşım, etkinliğin heyecan verici bir parçasıdır. Çocuklar daha yolda eğlenmeye başlar. Tekne yolculuğu organizasyonun ilk sürprizi olur.</p>
        </div>
      </div>

      {/* Bölüm 2 */}
      <h2 id="ulasim-tekne" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Kız Kulesi Palyaço Organizasyonu: Tekne ile Ulaşım Planlaması
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Kız Kulesi organizasyonu planlarken en kritik adım, tekne transferinin doğru organize edilmesidir. Kuleye ulaşım yalnızca deniz yoluyla mümkündür ve bu durum, hem davetlilerin hem de palyaço ekibinin koordineli bir şekilde taşınmasını gerektirir. Profesyonel bir organizasyon firması ile çalışmak, bu süreçteki stresi tamamen ortadan kaldırır.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">1. Kalkış Noktaları</h4>
          <p className="text-gray-700 text-sm mb-2">
            Kız Kulesi'ne tekne seferleri genellikle <strong>Salacak İskelesi (Üsküdar)</strong> ve <strong>Kabataş İskelesi</strong> olmak üzere iki noktadan yapılır. Salacak'tan yaklaşık 5-10 dakika, Kabataş'tan ise 15-20 dakika sürer. Özel tekne kiralama ile bu süre daha da kısalabilir.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">2. Ekipman Transferi</h4>
          <p className="text-gray-700 text-sm mb-2">
            Palyaço gösterisi için gerekli tüm ekipmanlar (sosis balonlar, müzik sistemi, yüz boyama malzemeleri, dekorasyon ürünleri) su geçirmez profesyonel çantalarda tekneyle taşınır. Ekipmanların etkinlikten en az 1 saat önce kuleye ulaştırılması önerilir, böylece kurulum için yeterli süre kalır.
          </p>
        </div>

        <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">3. Davetli Koordinasyonu</h4>
          <p className="text-gray-700 text-sm mb-2">
            20-30 kişilik bir çocuk doğum günü organizasyonunda, davetlilerin tekne ile toplu transferi planlanmalıdır. BestEvent olarak, davetlilere WhatsApp üzerinden detaylı ulaşım bilgisi, iskele haritası ve tekne saatlerini gönderiyoruz. Geç kalan aileler için ek sefer ayarlıyoruz.
          </p>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">⚠️ Dikkat: Tekne Transferi Kontrol Listesi</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• <strong>Hava durumu kontrolü:</strong> Etkinlikten 48 saat önce ve sabahında mutlaka kontrol edin</li>
          <li>• <strong>Tekne kapasitesi:</strong> Tüm davetlilerin tek seferde taşınıp taşınamayacağını planlayın</li>
          <li>• <strong>Yedek tekne:</strong> Gecikme durumunda kullanılabilecek alternatif bir tekne ayarlayın</li>
          <li>• <strong>Can yelekleri:</strong> Çocuklar dahil tüm yolcular için can yeleği bulundurulmalı</li>
          <li>• <strong>Deniz tutması:</strong> Hassas çocuklar için önceden önlem alınmalı</li>
        </ul>
      </div>

      {/* Bölüm 3 */}
      <h2 id="akustik-alan" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Palyaço Gösterisi İçin Mekan Akustiği ve Organizasyon Detayları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Kız Kulesi, tarihi bir yapı olması nedeniyle standart etkinlik mekanlarından farklı akustik özelliklere ve alan sınırlamalarına sahiptir. Bu faktörleri önceden bilmek, palyaço gösterisinin kalitesini doğrudan etkiler. Profesyonel bir organizasyon firmasının bu detayları bilmesi, gösterinin sorunsuz geçmesini sağlar.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
          <h4 className="font-bold text-gray-900 mb-3">🔊 Akustik Zorluklar</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Taş duvarlar:</strong> Ses yansıması (eko) oluşturur. Palyaçonun mikrofon kullanması gerekebilir.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Deniz sesi:</strong> Rüzgarlı günlerde dalga sesleri gösteriyi bastırabilir.</p>
          <p className="text-gray-700 text-sm"><strong>Çözüm:</strong> Taşınabilir Bluetooth hoparlör sistemi ile ses seviyesi kontrol altına alınır.</p>
        </div>
        <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-600">
          <h4 className="font-bold text-gray-900 mb-3">📐 Alan Sınırlamaları</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>İç mekan:</strong> Tavan yüksekliği sınırlıdır, dev balon gösterisi gibi performanslar uygun değildir.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Teras:</strong> Açık alanda rüzgar faktörü göz önünde bulundurulmalıdır.</p>
          <p className="text-gray-700 text-sm"><strong>Çözüm:</strong> Gösteri programı mekana özel olarak adapte edilir; yer seviyesinde aktiviteler tercih edilir.</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Kız Kulesi'nin iç mekanı, yaklaşık 50-60 metrekarelik bir kullanılabilir alana sahiptir. Bu alan, 20-25 çocuğun rahatça oturabileceği ve palyaçonun gösteri yapabileceği bir düzen için yeterlidir. Ancak geniş alan gerektiren aktiviteler (koşu oyunları, geniş sahne kurulumu) için teras alanı kullanılmalıdır. Hava koşullarına bağlı olarak iç mekan ve teras arasında geçiş planı hazırlamak önemlidir.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">💡 Profesyonel İpucu: Mekanı Avantaja Çevirin</h4>
        <p className="text-gray-700 text-sm">
          Kız Kulesi'nin küçük alanı bir dezavantaj gibi görünse de, doğru planlamayla büyük avantaja dönüşür. Samimi bir ortam, çocukların palyaçoyla daha yakın temas kurmasını sağlar. Büyük mekanlarda kaybolabilen enerji, Kız Kulesi'nde yoğunlaşır. Palyaçomuz, bu yakın mesafe gösterisine özel hazırlanmış interaktif numaralar sergiler.
        </p>
      </div>

      {/* Bölüm 4 */}
      <h2 id="palyaco-gosterisi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Kız Kulesi Palyaço Kiralama Hizmeti: Özel Aktiviteler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Kız Kulesi'nde yapılacak bir palyaço gösterisi, standart bir salon gösterisinden farklı olarak mekana uygun şekilde adapte edilmelidir. BestEvent palyaçoları, Kız Kulesi organizasyonları için özel olarak tasarlanmış bir gösteri programı uygular. Bu program, mekanın tarihine, akustiğine ve alan özelliklerine göre şekillendirilmiştir. <a href="/blog/palyaco-dogum-gunu-rehberi" className="text-red-600 hover:text-red-700 font-semibold underline">Palyaço doğum günü rehberimizde</a> genel bilgileri bulabilirsiniz; ancak Kız Kulesi gösterisi bambaşka bir deneyimdir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎪</span> Kız Kulesi'ne Özel Gösteri Programı (45 Dakika):
          </h4>
          <div className="space-y-3 text-gray-700 text-sm">
            <div className="flex gap-3">
              <span className="font-bold text-red-600 min-w-[100px]">0-5 dk:</span>
              <span><strong>Karşılama ve Tanışma</strong> - Palyaço, çocukları kapıda karşılar. Kız Kulesi temalı giriş: "Merhaba minik korsanlar! Bu kuleye hoş geldiniz!"</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-red-600 min-w-[100px]">5-15 dk:</span>
              <span><strong>Sosis Balon Gösterisi</strong> - Deniz temalı sosis balon şekilleri: yunus, deniz yıldızı, kılıç balığı, korsan kılıcı. Her çocuğa özel bir balon yapılır.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-red-600 min-w-[100px]">15-25 dk:</span>
              <span><strong>İnteraktif Oyunlar</strong> - Müzikli sandalye (küçük alanda uyarlanmış), hazine avı (Kız Kulesi temalı ipuçları ile), dans yarışması.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-red-600 min-w-[100px]">25-35 dk:</span>
              <span><strong>Yüz Boyama ve Mini Sihir</strong> - Deniz canlıları temalı yüz boyama, basit sihir numaraları ve komik skeçler.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-red-600 min-w-[100px]">35-45 dk:</span>
              <span><strong>Pasta ve Final Gösterisi</strong> - Doğum günü şarkısı, pasta kesimi ve konfeti yağmuru ile muhteşem final. Boğaz manzarası önünde grup fotoğrafı.</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Kız Kulesi palyaço gösterisi, klasik bir gösteri formatından farklı olarak deniz temalı bir konsepte sahiptir. Palyaçomuz, korsan kostümü veya denizci temalı özel kıyafetle gelir. Bu tematik uyum, çocukların mekanla bütünleşmesini sağlar ve gösterinin etkisini katlayarak artırır. Kiralama paketimiz bu özel kostümü de kapsar.
      </p>

      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-3">🎨 Kız Kulesi Temalı Aktiviteler:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• <strong>Korsan Hazine Avı:</strong> Kulenin farklı köşelerine gizlenmiş ipuçları ile eğlenceli bir macera</li>
          <li>• <strong>Deniz Temalı Sosis Balon:</strong> Yunus, ahtapot, deniz atı ve kılıç balığı şekilleri</li>
          <li>• <strong>Kule Efsanesi Hikaye Anlatımı:</strong> Palyaço tarafından çocuklara uyarlanmış Kız Kulesi efsanesi</li>
          <li>• <strong>Boğaz Manzarası Yüz Boyama:</strong> Deniz canlıları, martı ve dalga desenleri</li>
          <li>• <strong>Müzikli Dans Gösterisi:</strong> Deniz temalı şarkılarla eğlenceli dans performansı</li>
        </ul>
      </div>

      {/* Bölüm 5 */}
      <h2 id="checklist" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Palyaço Kiralama Organizasyonu: Ekipman ve Lojistik Checklist
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Kız Kulesi'nde sorunsuz bir palyaço organizasyonu için detaylı bir planlama gereklidir. Aşağıdaki checklist, etkinlik öncesi hazırlık sürecinizde rehber olacaktır. BestEvent ekibi bu listeyi sizin adınıza yönetir, ancak bilginiz dahilinde olması önemlidir.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg p-6 border border-red-200">
          <h4 className="font-bold text-gray-900 mb-4">🎒 Gösteri Ekipmanları</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Sosis balonlar (300+ adet, su geçirmez çantada)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Profesyonel balon pompası (elektrikli + manuel yedek)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Yüz boyama seti (dermatolog onaylı, 12 renk)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Mini sihir seti (yakın mesafe numaraları için)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Konfeti ve parti malzemeleri</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h4 className="font-bold text-gray-900 mb-4">🔊 Teknik Ekipman</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Taşınabilir Bluetooth hoparlör (şarjlı, su dayanıklı)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Kablosuz mikrofon (akustik sorunlar için)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Müzik playlist (önceden hazırlanmış, offline)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Yedek pil ve şarj cihazı</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>LED aydınlatma (iç mekan gösterileri için)</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h4 className="font-bold text-gray-900 mb-4">🚢 Lojistik Planlama</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Tekne rezervasyonu (minimum 2 sefer: gidiş + dönüş)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Ekipman transfer planı (etkinlikten 1.5 saat önce)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Davetli listesi ve tekne yerleşim planı</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Hava durumu takibi (48 saat öncesinden başlayarak)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Alternatif mekan planı (B planı)</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
          <h4 className="font-bold text-gray-900 mb-4">🎂 Organizasyon Detayları</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Mekan izni ve rezervasyon onayı</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Pasta ve ikram siparişi (tekneyle taşınacak şekilde)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Fotoğrafçı / Kameraman koordinasyonu</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Çocuklar için güvenlik önlemleri (çit, gözetim)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Su geçirmez masa örtüsü ve dekorasyon malzemeleri</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bu ekipmanların tamamı BestEvent palyaço kiralama paketi kapsamında temin edilir ve organize edilir. Siz sadece davetlilerinizi bilgilendirmeniz ve etkinlik gününün keyfini çıkarmanız yeterlidir. Gösteri programı, mekanın koşullarına göre esneklik gösterir; iç mekandan terasa geçiş gibi anlık kararlar profesyonel ekibimiz tarafından yönetilir.
      </p>

      {/* Bölüm 6 - Gerçek Hikaye */}
      <h2 id="gercek-deneyim" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Kız Kulesi Doğum Günü Organizasyonu: Gerçek Kiralama Deneyimi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Kız Kulesi'nde gerçekleştirdiğimiz organizasyonlardan biri, hem ekibimiz hem de aile için unutulmaz bir deneyim oldu. İşte o günün hikayesi:
      </p>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-8 border border-orange-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🎉 Gerçek Hikaye: 6 Yaş Doğum Günü Organizasyonu - Kız Kulesi</h4>
        <p className="text-gray-700 text-sm mb-4">
          Küçük Defne'nin 6. yaş doğum günü için annesi çok özel bir mekan istiyordu. "Kızım prenseslere bayılıyor, bir kule olsa harika olur" dedi. Biz de Kız Kulesi'ni önerdik. Organizasyon günü, palyaçomuz "Kaptan Neşe" korsan kostümüyle Salacak İskelesi'nde hazır bekliyordu. Çocuklar tekneye bindiğinde heyecan doruk noktasına ulaştı.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Kuleye ulaştığımızda, palyaçomuz çocukları kapıda karşıladı: "Hoş geldiniz minik korsanlar! Bu kule bugün sizin!" Gösteri boyunca deniz temalı sosis balonlar yapıldı, Kız Kulesi efsanesi çocuklara uyarlanmış şekilde anlatıldı ve hazine avı oyununda çocuklar kulenin her köşesini keşfetti.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          En duygusal an, pasta kesimi sırasında oldu. Boğaz'da gün batımı başlamıştı, martılar kulenin etrafında uçuyordu ve 22 çocuk hep birlikte doğum günü şarkısı söyledi. Defne'nin annesi gözyaşlarını tutamadı: "Hayatımda gördüğüm en güzel doğum günü organizasyonu. Kızım bunu hiç unutmayacak."
        </p>
        <p className="text-gray-600 text-xs italic">
          — Bu organizasyon, Kız Kulesi'nde palyaço gösterisinin ne kadar büyülü olabileceğinin en güzel kanıtıdır. Mekanın atmosferi, profesyonel gösteri ile birleştiğinde unutulmaz bir deneyim ortaya çıkar.
        </p>
      </div>

      <div className="bg-green-50 rounded-lg p-6 mb-8 border border-green-200">
        <h4 className="font-bold text-gray-900 mb-3">📊 Organizasyon Özeti:</h4>
        <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
          <div>
            <p className="font-semibold">Katılımcı Sayısı:</p>
            <p>22 çocuk, 15 yetişkin</p>
          </div>
          <div>
            <p className="font-semibold">Gösteri Süresi:</p>
            <p>50 dakika (plan: 45 dk)</p>
          </div>
          <div>
            <p className="font-semibold">Ekip:</p>
            <p>1 palyaço, 1 asistan, 1 koordinatör</p>
          </div>
          <div>
            <p className="font-semibold">Tema:</p>
            <p>Korsan ve Deniz Macerası</p>
          </div>
          <div>
            <p className="font-semibold">Transfer:</p>
            <p>Salacak'tan 2 tekne seferi</p>
          </div>
          <div>
            <p className="font-semibold">Hava Durumu:</p>
            <p>Güneşli, hafif rüzgarlı</p>
          </div>
        </div>
      </div>

      {/* Bölüm 7 - SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Kız Kulesi Palyaço Kiralama Fiyat ve Organizasyon Sık Sorulan Sorular
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">❓ {faq.question}</h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Service CTA */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">İstanbul Profesyonel Palyaço Kiralama Hizmeti</h3>
        <p className="text-gray-700 mb-4">
          Kız Kulesi'nden salon organizasyonlarına kadar her mekanda profesyonel palyaço gösterisi. Sosis balon, yüz boyama, interaktif oyunlar ve sihir numaraları dahil komple kiralama paketi.
        </p>
        <a href="/organizasyonlar/palyaco-kiralama" className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-700 transition-all">
          Detayları İnceleyin →
        </a>
      </div>

      {/* Sonuç CTA */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Kız Kulesi Palyaço Kiralama ile Unutulmaz Organizasyon!</h3>
        <p className="mb-6 leading-relaxed">
          Boğaz'ın ortasında, İstanbul'un en ikonik mekanında çocuğunuz için masalsı bir doğum günü gösterisi düzenleyin. Profesyonel palyaço kiralama, deniz temalı aktiviteler, tekne transferi ve tam lojistik destek ile hayalinizdeki organizasyonu gerçeğe dönüştürüyoruz. Siz sadece kutlamaya odaklanın, gerisini biz halledelim.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+905307309009" className="bg-white text-red-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center">
            Hemen Ara
          </a>
          <a href="https://wa.me/905307309009?text=Merhaba%20K%C4%B1z%20Kulesi%20palya%C3%A7o%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="palyaco-kiz-kulesi-organizasyonu"
      relatedServicePath="/organizasyonlar/palyaco-kiralama"
      relatedServiceName="Palyaço Kiralama"
      faqData={faqData}
    >
      {content}
    </BlogDetail>
  )
}

export default PalyacoKizKulesi
