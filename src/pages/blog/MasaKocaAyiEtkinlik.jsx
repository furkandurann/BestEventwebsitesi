import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const MasaKocaAyiEtkinlik = () => {
  const faqData = [
    {
      question: 'Maşa ve Koca Ayı kiralama kaç yaş için uygundur?',
      answer: 'Maşa ve Koca Ayı karakterleri 3-8 yaş arası çocuklar için idealdir. Bu yaş grubundaki çocuklar çizgi filmi aktif olarak izler ve karakterleri çok iyi tanır. Özellikle 3-5 yaş arası çocuklarda Maşa karakteri büyük bir sevgi ve hayranlık uyandırır. 8 yaş üzeri çocuklarda ilgi azalabilir.'
    },
    {
      question: 'Kostümlü karakter ile maskot arasındaki fark nedir?',
      answer: 'Kostümlü karakter, gerçek bir kişinin karakter kıyafeti giyerek canlandırdığı, yüzünün ve mimiklerinin görünebildiği performanstır. Maşa karakteri genellikle kostümlü karakter olarak sunulur. Maskot ise tamamen kapalı, büyük başlıklı peluş kostümdür; Koca Ayı genellikle maskot formunda sahnede yer alır. İkisi birlikte sahne aldığında hem gerçekçi etkileşim hem de komik maskot gösterisi bir arada sunulur.'
    },
    {
      question: 'Maşa ve Koca Ayı birlikte mi geliyor yoksa ayrı ayrı mı kiralanıyor?',
      answer: 'Maşa ve Koca Ayı ikili paket olarak kiralanabilir, ayrı ayrı da tercih edilebilir. İkili kiralama çok daha etkili bir gösteri sunar çünkü çizgi filmdeki etkileşim ve komedi unsuru ancak iki karakter birlikte olduğunda ortaya çıkar. Tek karakter kiralama daha ekonomik olsa da, ikili paket çocuklarda çok daha büyük bir heyecan yaratır.'
    },
    {
      question: 'Maşa ve Koca Ayı gösterisi ne kadar sürer?',
      answer: 'Standart gösteri süresi 45-60 dakikadır. Bu süre; sürpriz giriş, hikaye anlatımı, macera oyunları, dans gösterisi ve fotoğraf seansını kapsar. Talep üzerine 90 dakikaya kadar uzatılabilir. Koca Ayı maskotunun ağırlığı nedeniyle her 15-20 dakikada kısa molalar planlanır.'
    },
    {
      question: 'Macera temalı oyunlar neler içerir?',
      answer: 'Macera temalı oyunlar; orman keşif parkuru, bal toplama yarışı, Maşa\'nın kayıp eşyalarını bulma hazine avı, dans yarışması ve müzikli sandalye gibi aktiviteleri kapsar. Her oyun, Maşa ve Koca Ayı çizgi filmindeki maceralardan ilham alınarak tasarlanır. Oyunlar çocukların yaş grubuna göre zorluğu ayarlanır.'
    },
    {
      question: 'Maşa ve Koca Ayı temalı parti fiyatı ne kadar?',
      answer: 'Fiyatlar; tek karakter veya ikili karakter tercihi, gösteri süresi, süsleme kapsamı ve ek hizmetlere göre değişir. Tek Maşa kostümlü karakter kiralaması ile başlayan paketlerden, Maşa + Koca Ayı ikilisi + süsleme + oyunlar içeren komple organizasyon paketlerine kadar seçenekler mevcuttur. Detaylı fiyat bilgisi için bize ulaşın.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-amber-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#masa-kocaayi-nedir" className="text-amber-600 hover:text-amber-700 font-semibold">1. Maşa ve Koca Ayı Temalı Çocuk Etkinliği Nedir?</a></li>
          <li><a href="#ikili-gosteri" className="text-amber-600 hover:text-amber-700 font-semibold">2. İkili Karakter Gösterisi: Maşa ve Koca Ayı Sahnede</a></li>
          <li><a href="#macera-oyunlari" className="text-amber-600 hover:text-amber-700 font-semibold">3. Macera Temalı Oyunlar ve Aktiviteler</a></li>
          <li><a href="#kostum-maskot-farki" className="text-amber-600 hover:text-amber-700 font-semibold">4. Kostümlü Karakter ve Maskot Farkı: Hangisi Tercih Edilmeli?</a></li>
          <li><a href="#dekorasyon-tema" className="text-amber-600 hover:text-amber-700 font-semibold">5. Maşa ve Koca Ayı Tema Parti Süslemesi</a></li>
          <li><a href="#organizasyon-rehberi" className="text-amber-600 hover:text-amber-700 font-semibold">6. Organizasyon Planlama Rehberi</a></li>
          <li><a href="#sss" className="text-amber-600 hover:text-amber-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Maşa ve Koca Ayı, Rus yapımı bu sevimli çizgi film serisi dünya genelinde milyonlarca çocuğun favorisi haline gelmiştir. Yaramaz küçük Maşa'nın sabırlı ve sevecen Koca Ayı ile yaşadığı komik maceralar, çocukları hem güldürür hem de değerli hayat dersleri verir. İstanbul'da Maşa ve Koca Ayı kiralama hizmeti ile çocuğunuzun doğum gününü veya özel etkinliğini bu sevimli ikilinin dünyasına dönüştürebilirsiniz. Bu rehberde, Maşa ve Koca Ayı temalı çocuk etkinliğinin tüm detaylarını; ikili karakter gösterisinden macera temalı oyunlara, kostümlü karakter ile maskot farkından parti süslemesine kadar kapsamlı olarak ele alacağız.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>İpucu:</strong> Maşa ve Koca Ayı organizasyonunun en büyük avantajı, iki farklı karakter dinamiğini bir arada sunmasıdır. Maşa'nın enerjik ve yaramaz kişiliği ile Koca Ayı'nın sakin ve sevecen tavırları, gösteriye doğal bir komedi ve denge katar. Bu ikili, çocukların hem heyecanlanmasını hem de güven duymasını sağlar.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="masa-kocaayi-nedir" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Maşa ve Koca Ayı Temalı Çocuk Etkinliği Nedir?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Maşa ve Koca Ayı temalı çocuk etkinliği, popüler çizgi film serisinin dünyasından ilham alarak tasarlanan bir organizasyon konseptidir. Etkinlik mekanı, Koca Ayı'nın orman evine ve çevresindeki doğaya benzetilerek süslenir. Yeşil yapraklar, ahşap dekorasyon, bal kavanozu figürleri ve orman hayvanları görselleri ile atmosfer yaratılır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bu organizasyonun kalbi, Maşa kostümlü karakter ve Koca Ayı maskotunun birlikte sahne aldığı gösteridir. Maşa karakteri, canlı mimikleri ve enerjik performansıyla çocukları oyunlara davet ederken, Koca Ayı maskotu komik hareketleri ve sevecen tavırlarıyla dengeyi sağlar. İkisinin çizgi filmdeki etkileşimi sahneye taşınır; Maşa yaramazlık yapar, Koca Ayı tepki verir ve çocuklar kahkahalarla izler.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🐻</span> Maşa ve Koca Ayı Etkinliğinin Öne Çıkan Özellikleri:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">1.</span>
              <div>
                <strong>Doğal Komedi:</strong> Maşa'nın yaramazlıkları ve Koca Ayı'nın sabırlı tepkileri, senaryoya gerek kalmadan doğal bir komedi ortamı yaratır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">2.</span>
              <div>
                <strong>Eğitici İçerik:</strong> Çizgi filmin eğitici mesajları organizasyona entegre edilir; paylaşma, dostluk, doğa sevgisi ve sabır gibi değerler oyunlar aracılığıyla aktarılır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">3.</span>
              <div>
                <strong>İkili Dinamik:</strong> Hem kostümlü karakter hem maskot aynı gösteride yer alır, bu da farklı etkileşim türlerini bir arada sunar.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">4.</span>
              <div>
                <strong>Doğa Teması:</strong> Orman, hayvanlar ve doğa konsepti, çocuklarda merak uyandıran ve keşfetmeye teşvik eden bir atmosfer yaratır.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Maşa ve Koca Ayı karakter kiralama hizmetimiz hakkında detaylı bilgi almak için <Link to="/karakter/masa-koca-ayi-kiralama-istanbul" className="text-amber-600 hover:text-amber-700 font-semibold underline">Maşa ve Koca Ayı kiralama sayfamızı</Link> ziyaret edebilirsiniz. Kostümlü karakter ve maskot seçenekleri, gösteri süreleri ve paket detaylarını bu sayfada bulabilirsiniz.
      </p>

      {/* Bölüm 2 */}
      <h2 id="ikili-gosteri" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. İkili Karakter Gösterisi: Maşa ve Koca Ayı Sahnede
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Maşa ve Koca Ayı ikili gösterisinin büyüsü, iki farklı karakter tipinin bir arada sunulmasında yatar. Maşa, kostümlü karakter olarak canlı performans sergiler; konuşur, şarkı söyler, dans eder ve çocuklarla doğrudan iletişim kurar. Koca Ayı ise büyük maskot kostümü içinde komik hareketler, jest ve mimiklerle etkileşim sağlar. Bu iki farklı performans türünün birleşimi, gösteri zenginliğini artırır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        İkili gösteri genellikle bir senaryoya oturtulur. Çizgi filmin popüler bölümlerinden esinlenilen sahneler canlandırılır; örneğin Maşa'nın Koca Ayı'nın balını çalma girişimi, ormanda kaybolma macerası veya birlikte yemek yapma sahnesi gibi. Çocuklar tanıdıkları sahneleri canlı olarak izlediklerinde büyük bir heyecan ve katılım gösterirler.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-amber-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
            Sürpriz Giriş Sahnesi (5-10 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Önce Koca Ayı maskotu sakin ve komik hareketlerle sahneye girer. Çocukları selamlar ve onlarla etkileşim kurar. Tam herkes Koca Ayı ile eğlenirken, Maşa'nın müziği çalar ve Maşa karakteri enerjik bir dansla sahneye fırlar. Koca Ayı şaşkın tavırlar sergiler ve çocuklar kahkahalarla gülmeye başlar.
          </p>
        </div>

        <div className="bg-white border-l-4 border-amber-500 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
            Macera Hikayesi Canlandırma (10-15 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Maşa, çocuklara bir macera hikayesi anlatır ve Koca Ayı'yı da hikayeye dahil eder. Çocuklar izleyici değil, maceranın bir parçası olur. "Koca Ayı'nın balı kayboldu, birlikte bulalım mı?" gibi senaryolarla çocuklar harekete geçirilir. Hikaye boyunca Maşa neşeli ve yaramaz, Koca Ayı ise sabırlı ve yardımsever rollerini sergiler.
          </p>
        </div>

        <div className="bg-white border-l-4 border-amber-400 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-amber-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
            Dans ve Müzik Gösterisi (10-15 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Maşa ve Koca Ayı çizgi filminin müzikleri eşliğinde dans gösterisi yapılır. Maşa çocuklara dans adımlarını öğretir, Koca Ayı komik dans hareketleriyle güldürür. Çocuklar iki karakter arasında seçim yaparak takımlarını belirler ve dans yarışması düzenlenir.
          </p>
        </div>

        <div className="bg-white border-l-4 border-amber-300 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
            Fotoğraf Seansı ve Veda (15 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Gösterinin sonunda Maşa ve Koca Ayı, tüm çocuklarla sırayla fotoğraf çektirir. Önce doğum günü çocuğu ile özel pozlar verilir, ardından grup fotoğrafı çekilir. Veda anında Maşa çocuklara "uslu olun ama çok da uslu olmayın" gibi karaktere özgü mesajlar verir.
          </p>
        </div>
      </div>

      {/* Bölüm 3 */}
      <h2 id="macera-oyunlari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Macera Temalı Oyunlar ve Aktiviteler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Maşa ve Koca Ayı temalı etkinlikte çocukları eğlendirecek çeşitli macera oyunları düzenlenir. Bu oyunlar, çizgi filmdeki maceralardan ilham alınarak tasarlanır ve hem eğlenceli hem de eğitici niteliktedir. İşte en popüler Maşa ve Koca Ayı parti oyunları:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🍯</span> Bal Toplama Yarışı
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yaş:</strong> 3-8 yaş</p>
          <p className="text-gray-700 text-sm"><strong>Açıklama:</strong> Alana dağıtılmış bal kavanozu figürlerini en hızlı toplayan takım kazanır. Maşa takımı ve Koca Ayı takımı olarak iki gruba ayrılan çocuklar, yarışma boyunca büyük heyecan yaşar. Koca Ayı maskotu komik engellerle yarışı zorlaştırır.</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🌲</span> Orman Keşif Parkuru
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yaş:</strong> 4-8 yaş</p>
          <p className="text-gray-700 text-sm"><strong>Açıklama:</strong> Yapay ağaçlar, çalılar ve tünellerden oluşan mini orman parkuru kurulur. Çocuklar Maşa'nın rehberliğinde parkuru geçer, her istasyonda bir görev tamamlar ve sonunda "Orman Kaşifi" sertifikası alır.</p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🔍</span> Maşa'nın Kayıp Eşyaları
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yaş:</strong> 3-7 yaş</p>
          <p className="text-gray-700 text-sm"><strong>Açıklama:</strong> Maşa'nın eşyaları (şapka, sepet, çiçekler) mekanın çeşitli noktalarına gizlenmiştir. Çocuklar ipuçlarını takip ederek eşyaları bulur ve Maşa'ya teslim eder. Her bulunan eşya için bir ödül kazanılır.</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🎶</span> Müzikli Heykel
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yaş:</strong> 3-8 yaş</p>
          <p className="text-gray-700 text-sm"><strong>Açıklama:</strong> Maşa ve Koca Ayı çizgi film müzikleri eşliğinde dans edilir. Müzik durduğunda herkes donmalıdır. Hareket eden çocuklar oyun dışı kalır. Koca Ayı maskotu komik pozlarla çocukları güldürmeye çalışır.</p>
        </div>
      </div>

      {/* Bölüm 4 */}
      <h2 id="kostum-maskot-farki" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Kostümlü Karakter ve Maskot Farkı: Hangisi Tercih Edilmeli?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Maşa ve Koca Ayı organizasyonunda sıkça sorulan sorulardan biri, kostümlü karakter ile maskot arasındaki farktır. Bu iki performans türü birbirinden farklı deneyimler sunar ve doğru seçim partinin başarısını doğrudan etkiler.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-50 to-amber-50 rounded-xl p-6 border border-pink-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">👧</span> Kostümlü Karakter (Maşa)
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yüz:</strong> Sanatçının yüzü görünür, mimikler ve ifadeler canlıdır</p>
          <p className="text-gray-700 text-sm mb-2"><strong>İletişim:</strong> Konuşur, şarkı söyler, hikaye anlatır</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Hareket:</strong> Tam hareket özgürlüğü, dans ve akrobasi yapabilir</p>
          <p className="text-gray-700 text-sm"><strong>Etki:</strong> Çocuklarla doğrudan ve samimi bağ kurar, güven oluşturur</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🐻</span> Maskot (Koca Ayı)
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yüz:</strong> Tamamen kapalı peluş başlık, sabit ifade</p>
          <p className="text-gray-700 text-sm mb-2"><strong>İletişim:</strong> Konuşmaz, jest ve hareketlerle iletişim kurar</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Hareket:</strong> Komik ve abartılı hareketler, sarılma, el sallama</p>
          <p className="text-gray-700 text-sm"><strong>Etki:</strong> Komedi unsuru yaratır, sarılmak istenen sevimli bir figür olur</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Kostümlü karakter ve maskot seçenekleri hakkında daha fazla bilgi almak ve farklı karakter seçeneklerini incelemek için <Link to="/maskot/masa-koca-ayi-maskot-istanbul" className="text-amber-600 hover:text-amber-700 font-semibold underline">Maşa ve Koca Ayı maskot kiralama sayfamızı</Link> ziyaret edebilirsiniz. İhtiyacınıza en uygun kombinasyonu birlikte belirleyebiliriz.
      </p>

      {/* Bölüm 5 */}
      <h2 id="dekorasyon-tema" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Maşa ve Koca Ayı Tema Parti Süslemesi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Maşa ve Koca Ayı temalı parti süslemesi, orman ve doğa konseptine dayalı sıcak ve sevimli bir atmosfer yaratır. Renk paleti olarak pembe, yeşil, kahverengi, sarı ve beyaz tonları kullanılır. Bu renkler hem çizgi filmin dünyasını yansıtır hem de çocuklar için davetkar bir ortam oluşturur.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-amber-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🌿 Mekan Dekorasyonu</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>- <strong>Giriş:</strong> Yapay ağaçlar ve yeşil yaprak girlandlarla süslenmiş "orman kapısı" oluşturulur.</li>
            <li>- <strong>Arka Plan:</strong> Koca Ayı'nın ahşap evi temalı büyük pano hazırlanır, çocuklar önünde fotoğraf çektirir.</li>
            <li>- <strong>Tavan:</strong> Yeşil yaprak girlandlar ve bal arısı figürleri asılır.</li>
            <li>- <strong>Zemin:</strong> Yeşil halı veya yapay çim ile orman zemini simüle edilir.</li>
          </ul>
        </div>

        <div className="bg-white border border-amber-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🎂 Masa ve İkram Düzeni</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>- <strong>Masa Örtüsü:</strong> Yeşil veya pembe kareli kumaş, piknik havası yaratır.</li>
            <li>- <strong>Parti Seti:</strong> Maşa ve Koca Ayı baskılı tabak, bardak ve peçete kullanılır.</li>
            <li>- <strong>Pasta:</strong> Koca Ayı figürlü veya orman temalı pasta, çizgi filmdeki bal kavanozu şeklinde de tasarlanabilir.</li>
            <li>- <strong>İkramlar:</strong> Bal kurabiye, orman meyveleri, mantar şekilli kek ve ayı pençesi kurabiyeler sunulur.</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-xl p-6 mb-8 border border-amber-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🌟 Gerçek Hikaye: 5 Yaş Maşa Partisi - Üsküdar</h4>
        <p className="text-gray-700 text-sm mb-4">
          Küçük Lara'nın 5. yaş doğum gününde Maşa ve Koca Ayı temalı bir organizasyon düzenledik. Salon, yapay ağaçlar ve yeşil yapraklarla bir ormana dönüştürüldü. 15 çocuk heyecanla beklerken, önce Koca Ayı maskotu komik hareketlerle sahneye girdi. Çocuklar gülmeye başladı. Ardından Maşa karakteri enerjik dansıyla fırladı ve "Merhaba arkadaşlar, bugün orman macerası yaşayacağız!" diye bağırdı.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Bal toplama yarışı, orman keşif parkuru ve dans gösterisi düzenlendi. Koca Ayı'nın komik düşmeleri ve Maşa'nın yaramazlıkları çocukları kırıp geçirdi. Lara, gece yatarken "Anne, Koca Ayı çok tatlıydı, bir daha gelsin!" dedi.
        </p>
        <p className="text-gray-600 text-xs italic">
          -- Maşa ve Koca Ayı ikilisinin çocuklar üzerindeki etkisi, diğer organizasyonlardan farklı ve benzersizdir.
        </p>
      </div>

      {/* Bölüm 6 */}
      <h2 id="organizasyon-rehberi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Organizasyon Planlama Rehberi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Maşa ve Koca Ayı temalı bir çocuk etkinliği planlamak için sistematik bir yaklaşım gerekir. Karakter kiralama, dekorasyon, oyun hazırlığı ve zamanlama gibi tüm unsurların koordineli olması, etkinliğin başarısını garantiler.
      </p>

      <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 text-xl">📋 Organizasyon Planlama Adımları</h4>

        <div className="space-y-6">
          <div>
            <h5 className="font-bold text-amber-700 mb-3">3-4 Hafta Önce:</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">&#9744;</span>
                <span>Maşa ve Koca Ayı kiralama için Best Event ile iletişime geçin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">&#9744;</span>
                <span>Tek karakter veya ikili karakter tercihini belirleyin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">&#9744;</span>
                <span>Mekan, tarih ve misafir sayısını kesinleştirin</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-amber-700 mb-3">2 Hafta Önce:</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">&#9744;</span>
                <span>Orman temalı süsleme malzemelerini sipariş edin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">&#9744;</span>
                <span>Maşa ve Koca Ayı temalı pasta siparişi verin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">&#9744;</span>
                <span>Oyun malzemelerini hazırlayın (bal kavanozu figürleri, ödüller)</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-amber-700 mb-3">Etkinlik Günü:</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">&#9744;</span>
                <span>Süslemeyi 2-3 saat önceden kurmaya başlayın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">&#9744;</span>
                <span>Orman keşif parkurunu kurun</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">&#9744;</span>
                <span>Müzik sistemi ve Maşa/Koca Ayı müziklerini hazırlayın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">&#9744;</span>
                <span>Fotoğraf köşesini ayarlayın ve kamerayı hazırlayın</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Kostümlü karakter kiralama seçenekleri ve farklı karakter alternatifleri hakkında kapsamlı bilgi almak için <Link to="/blog/kostumlu-karakter-kiralama-rehberi" className="text-amber-600 hover:text-amber-700 font-semibold underline">kostümlü karakter kiralama rehberimizi</Link> incelemenizi tavsiye ederiz.
      </p>

      {/* Bölüm 7 - SSS */}
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
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🐻 Maşa ve Koca Ayı Kiralama Hizmetimizi Keşfedin</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Profesyonel Maşa ve Koca Ayı kiralama hizmeti ile çocuğunuzun etkinliğini macera dolu bir organizasyona dönüştürün. İkili karakter gösterisi, macera oyunları, dans performansı ve fotoğraf seansı dahil komple hizmet sunuyoruz.
        </p>
        <Link
          to="/karakter/masa-koca-ayi-kiralama-istanbul"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Maşa ve Koca Ayı Kiralama Sayfasına Git
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🌲 Hayalinizdeki Maşa ve Koca Ayı Etkinliğini Birlikte Planlayalım!</h3>
        <p className="mb-6 leading-relaxed">
          Maşa ve Koca Ayı kiralama, macera oyunları, orman temalı süsleme ve daha fazlası ile çocuğunuzun doğum gününü büyülü bir ormana dönüştürün. Hemen bizi arayın!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-amber-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Ara: 05307309009
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Ma%C5%9Fa%20ve%20Koca%20Ay%C4%B1%20kiralama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            WhatsApp ile Bilgi Alın
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="masa-koca-ayi-etkinlik"
      faqData={faqData}
      relatedServicePath="/karakter/masa-koca-ayi-kiralama-istanbul"
      relatedServiceName="Maşa ve Koca Ayı Kiralama"
    >
      {content}
    </BlogDetail>
  )
}

export default MasaKocaAyiEtkinlik
