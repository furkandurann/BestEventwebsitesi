import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const PawPatrolCocukEtkinligi = () => {
  const faqData = [
    {
      question: 'Paw Patrol karakterleri kaç yaş grubuna uygun?',
      answer: 'Paw Patrol karakterleri özellikle 2-7 yaş aralığındaki çocuklar için idealdir. En yoğun ilginin 3-6 yaş grubunda olduğunu gözlemliyoruz. Bu yaş grubundaki çocuklar çizgi film karakterlerini yakından tanır ve onlarla etkileşim kurmaktan büyük keyif alır. 2 yaş altı çocuklarda kostümlü karaktere karşı hafif çekingenlik olabilir ancak profesyonel sanatçılarımız bu durumu kolaylıkla yönetir.'
    },
    {
      question: 'Paw Patrol partisinde hangi karakterler bulunur?',
      answer: 'Best Event olarak Paw Patrol temalı organizasyonlarda Chase, Marshall, Skye ve Rubble gibi popüler karakterleri sunuyoruz. En çok talep edilen karakterler sırasıyla Chase (polis köpeği) ve Marshall (itfaiyeci köpek) olmaktadır. Birden fazla karakter aynı anda sahne alabilir ve bu sayede gösteri çok daha etkileyici hale gelir. Karakter seçimi çocuğunuzun tercihine göre yapılır.'
    },
    {
      question: 'Paw Patrol gösterisi ne kadar sürer?',
      answer: 'Standart Paw Patrol gösterisi 45-60 dakika arasında sürer. Bu süre; sürpriz giriş (5-10 dk), görev temalı oyunlar (15-20 dk), dans gösterisi (10 dk), interaktif hikaye anlatımı (10 dk) ve fotoğraf çekimi (10-15 dk) aşamalarından oluşur. Daha uzun süreli organizasyonlar için ek aktiviteler ve ikinci karakter eklenebilir. 3 yaş altı gruplar için 30-40 dakikalık kısa versiyon da mevcuttur.'
    },
    {
      question: 'Paw Patrol temalı süsleme de yapılıyor mu?',
      answer: 'Evet, Paw Patrol temalı komple süsleme hizmeti sunuyoruz. Balon kemeri, masa düzeni, arka plan panosu, tabak-bardak-peçete seti, parti şapkaları ve görev kartları gibi tüm parti malzemeleri temaya uygun olarak hazırlanır. Mavi-kırmızı-sarı renk paleti kullanılır. Süsleme + karakter kiralama kombine paketlerinde özel fiyat avantajı sağlanır.'
    },
    {
      question: 'Görev temalı oyunlar nelerdir?',
      answer: 'Paw Patrol görev temalı oyunlar çocukların aktif katılımını sağlayan interaktif aktivitelerdir. Kayıp hayvan kurtarma parkuru, yangın söndürme yarışı, polis devriye görevi, engel parkuru ve hazine avı gibi oyunlar oynanır. Her çocuğa görev rozeti ve sertifikası verilir. Oyunlar takım çalışması ve yardımlaşma değerlerini pekiştirir. Tüm oyunlar güvenlik öncelikli olarak tasarlanmıştır.'
    },
    {
      question: 'Paw Patrol kiralama fiyatı ne kadar?',
      answer: 'Paw Patrol karakter kiralama fiyatları; seçilen karakter sayısına, gösteri süresine, ek hizmetlere ve mekan konumuna göre değişiklik gösterir. Tek karakter kiralama ile başlayan paketlerden, çift karakter + süsleme + oyun organizasyonu içeren komple paketlere kadar farklı seçenekler mevcuttur. Güncel fiyat bilgisi ve size özel teklif almak için bizimle iletişime geçmenizi öneririz.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#paw-patrol-nedir" className="text-blue-600 hover:text-blue-700 font-semibold">1. Paw Patrol Temalı Doğum Günü Partisi Nedir?</a></li>
          <li><a href="#chase-marshall" className="text-blue-600 hover:text-blue-700 font-semibold">2. Chase ve Marshall: Çocukların En Sevdiği Kahramanlar</a></li>
          <li><a href="#gorev-oyunlari" className="text-blue-600 hover:text-blue-700 font-semibold">3. Görev Temalı Oyunlar ve Grup Aktiviteleri</a></li>
          <li><a href="#yas-gruplari" className="text-blue-600 hover:text-blue-700 font-semibold">4. 3-6 Yaş Grubu İçin Özel Aktivite Planı</a></li>
          <li><a href="#gosteri-akisi" className="text-blue-600 hover:text-blue-700 font-semibold">5. Paw Patrol Gösteri Akışı: Sürpriz Girişten Vedaya</a></li>
          <li><a href="#susleme-tema" className="text-blue-600 hover:text-blue-700 font-semibold">6. Paw Patrol Süsleme ve Tema Uyumu</a></li>
          <li><a href="#sss" className="text-blue-600 hover:text-blue-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Paw Patrol, son yılların en popüler çocuk çizgi filmlerinden biri olarak milyonlarca küçük hayranın kalbini fethetmiştir. Chase, Marshall, Skye ve diğer sevimli patili kahramanlar, çocuklara yardımlaşma, cesaret ve takım çalışmasının önemini eğlenceli bir şekilde öğretir. Peki, çocuğunuzun doğum gününü bu kahramanlarla buluşturarak unutulmaz bir deneyime dönüştürmek istemez misiniz? İstanbul'da Paw Patrol kiralama hizmeti ile çocuğunuzun en sevdiği karakterleri gerçek hayata taşıyoruz. Bu rehberde, Paw Patrol temalı doğum günü organizasyonunun tüm detaylarını, görev temalı oyunları ve yaş grubuna özel aktivite planlarını bulacaksınız.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          🐾 <strong>İpucu:</strong> Paw Patrol temalı organizasyonlarda en önemli detay, karakterin çocuklarla kurduğu etkileşimdir. Profesyonel sanatçılarımız çizgi filmdeki diyalogları, hareketleri ve ses tonunu birebir taklit ederek çocukların gözünde gerçek bir kahraman olur. Sıradan bir kostüm giymekle profesyonel bir karakter performansı arasındaki fark, çocuğunuzun yüzündeki ifadede kendini gösterir.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="paw-patrol-nedir" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Paw Patrol Temalı Doğum Günü Partisi Nedir?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Paw Patrol temalı doğum günü partisi, çizgi filmdeki Adventure Bay kasabasının atmosferini çocuğunuzun kutlamasına taşıyan kapsamlı bir organizasyondur. Süslemeden pastaya, oyunlardan karakter gösterisine kadar her detay Paw Patrol evrenine uygun olarak tasarlanır. Çocuklar, ekrandaki kahramanlarını karşılarında gördüklerinde yaşadıkları heyecan ve mutluluk tarif edilemez boyuttadır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bu organizasyonun en büyük avantajı, sadece bir eğlence sunmanın ötesinde eğitici bir deneyim de yaratmasıdır. Paw Patrol'ün temel mesajı olan "Hiçbir görev çok büyük, hiçbir patili çok küçük" sloganı, çocuklara öz güven ve sorumluluk duygusu aşılar. Görev temalı oyunlar sayesinde çocuklar takım çalışması yapmayı, birbirine yardım etmeyi ve problem çözmeyi oyun içinde öğrenir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎯</span> Paw Patrol Partisinin Çocuklara Katkıları:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <div>
                <strong>Takım Çalışması:</strong> Görev temalı oyunlarda çocuklar birlikte çalışarak hedeflere ulaşır. Bu sayede iş birliği ve dayanışma değerleri pekişir.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <div>
                <strong>Cesaret ve Öz Güven:</strong> Engel parkurları ve kurtarma görevleri, çocukların kendilerine olan güvenini artırır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <div>
                <strong>Sorumluluk Bilinci:</strong> Her çocuğa verilen görev rozeti, sorumluluk almanın heyecanını yaşatır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <div>
                <strong>Sosyal Beceri:</strong> Grup aktiviteleri sayesinde çocuklar yeni arkadaşlıklar kurar ve sosyal etkileşim becerileri gelişir.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Paw Patrol temalı doğum günü organizasyonu planlıyorsanız, öncelikle <Link to="/karakter/paw-patrol-kiralama-istanbul" className="text-blue-600 hover:text-blue-700 font-semibold underline">Paw Patrol karakter kiralama</Link> sayfamızı incelemenizi öneriyoruz. Karakter seçenekleri, gösteri detayları ve paket fiyatları hakkında detaylı bilgi alabilirsiniz.
      </p>

      {/* Bölüm 2 */}
      <h2 id="chase-marshall" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Chase ve Marshall: Çocukların En Sevdiği Kahramanlar
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Paw Patrol evreninde birçok sevimli karakter bulunsa da çocukların tartışmasız favorileri Chase ve Marshall'dır. Bu iki karakter, hem erkek hem kız çocuklarının en çok talep ettiği Paw Patrol kahramanlarıdır. Her iki karakterin de kendine özgü kişilik özellikleri ve görev alanları vardır.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🚔</span> Chase - Polis Köpeği
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Renk:</strong> Mavi üniforma</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Görevi:</strong> Trafik ve güvenlik</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Kişilik:</strong> Lider, cesur, disiplinli</p>
          <p className="text-gray-700 text-sm"><strong>Gösteri:</strong> Chase karakterimiz polis sireni efekti eşliğinde sahneye girer, çocuklara devriye görevleri verir ve "Chase görevde!" sloganıyla salonu heyecana boğar. Düdük ve megafon ile interaktif oyunlar yönetir.</p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🚒</span> Marshall - İtfaiyeci Köpek
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Renk:</strong> Kırmızı üniforma</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Görevi:</strong> Yangın söndürme ve kurtarma</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Kişilik:</strong> Neşeli, beceriksiz ama kahraman</p>
          <p className="text-gray-700 text-sm"><strong>Gösteri:</strong> Marshall, komik girişiyle çocukları güldürür. Sakar ama cesur tavırlarıyla sevimli anlar yaratır. Yangın söndürme yarışı ve kurtarma görevleri yönetir. Çocuklar Marshall'ın enerjisine bayılır.</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Chase ve Marshall dışında Skye (helikopter pilotu), Rubble (inşaat işçisi), Rocky (geri dönüşümcü) ve Zuma (su kurtarma) karakterleri de organizasyonlarımızda yer alabilir. Çift karakter organizasyonlarında Chase + Marshall kombinasyonu en çok tercih edilen seçenektir. İki karakter birlikte sahne aldığında gösteri süresi uzar, etkileşim artar ve çocuklar çok daha fazla eğlenir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Karakter seçiminde çocuğunuzun tercihini ön planda tutmanızı öneriyoruz. Bazı çocuklar sadece Chase hayranıyken, bazıları Marshall'ı tercih eder. Kız çocuklarında Skye karakteri de oldukça popülerdir. <Link to="/maskot/paw-patrol-maskot-istanbul" className="text-blue-600 hover:text-blue-700 font-semibold underline">Paw Patrol maskot kiralama</Link> sayfamızda tüm karakter seçeneklerini detaylıca inceleyebilirsiniz.
      </p>

      {/* Bölüm 3 */}
      <h2 id="gorev-oyunlari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Görev Temalı Oyunlar ve Grup Aktiviteleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Paw Patrol organizasyonunu diğer karakter partilerinden ayıran en önemli özellik, görev temalı oyunlardır. Çizgi filmdeki gibi çocuklara gerçek görevler verilir, takımlar oluşturulur ve kahramanlar eşliğinde maceralar yaşanır. Bu oyunlar hem fiziksel aktiviteyi hem de zihinsel gelişimi destekler.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🔍 Görev 1: Kayıp Hayvan Kurtarma</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 10-15 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Katılım:</strong> Tüm çocuklar, 2-3 takım halinde</p>
          <p className="text-gray-700 text-sm">Mekana önceden gizlenmiş peluş hayvan figürleri çocuklar tarafından aranır. Chase veya Marshall, ipuçları vererek çocuklara rehberlik eder. Her bulunan hayvan için takıma puan verilir. En çok hayvan kurtaran takım "Yılın Kurtarıcısı" ödülünü alır. Bu oyun dikkat, gözlem yeteneği ve takım içi iletişimi geliştirir.</p>
        </div>

        <div className="bg-white border border-red-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🔥 Görev 2: Yangın Söndürme Yarışı</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 8-12 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Katılım:</strong> Bireysel veya çift halinde</p>
          <p className="text-gray-700 text-sm">Köpük tabancaları veya su tabancalarıyla (mekan uygunsa) alev şekilli hedeflere nişan alınır. Marshall karakteri yangın söndürme eğitimi verir ve çocuklara itfaiyeci komutları öğretir. Hedefi deviren çocuklara "Cesur İtfaiyeci" rozeti takılır. Bu oyun el-göz koordinasyonunu ve konsantrasyon yeteneğini geliştirir.</p>
        </div>

        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🏃 Görev 3: Paw Patrol Engel Parkuru</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 10-15 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Katılım:</strong> Sırayla, bireysel zamanlama</p>
          <p className="text-gray-700 text-sm">Tünel geçişi, balon atlama, slalom koşusu ve hedef vurmadan oluşan mini parkur kurulur. Her çocuk sırasıyla parkuru tamamlar ve süresi ölçülür. Karakter, çocuklara tezahürat yaparak moral verir. En hızlı parkuru tamamlayan "Süper Patili" unvanını kazanır. Parkur zorluk seviyesi yaş grubuna göre ayarlanır.</p>
        </div>

        <div className="bg-white border border-yellow-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🗺️ Görev 4: Hazine Avı Macerası</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 12-18 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Katılım:</strong> Tüm çocuklar birlikte</p>
          <p className="text-gray-700 text-sm">Harita ve pusula ile mekan içinde gizlenmiş hazine sandığı aranır. Her ipucu bir Paw Patrol karakterinin görev alanına aittir: Chase'in devriye noktası, Marshall'ın itfaiye istasyonu gibi... Hazine sandığında tüm çocuklara yetecek kadar küçük hediyeler bulunur. Bu oyun problem çözme ve harita okuma becerilerini geliştiren eğitici bir aktivitedir.</p>
        </div>
      </div>

      {/* Bölüm 4 */}
      <h2 id="yas-gruplari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. 3-6 Yaş Grubu İçin Özel Aktivite Planı
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Paw Patrol hayranlarının büyük çoğunluğu 3-6 yaş aralığındadır. Bu yaş grubu, dikkat süresi ve fiziksel kapasite açısından kendine özgü bir yapıya sahiptir. Aktivitelerin hızlı tempoda değişmesi, basit kurallar içermesi ve bolca ödüllendirme barındırması gerekir. İşte yaş alt gruplarına göre özelleştirilmiş aktivite planımız:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3">🧸 3-4 Yaş: Nazik Maceralar</h4>
          <p className="text-gray-700 text-sm mb-3">Bu yaş grubunda çocuklar heyecanlı ama çekingen olabilir. Karakterle tanışma yavaş ve sıcak bir şekilde yapılır.</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Renkli balon patlatma oyunu</li>
            <li>&#8226; Paw Patrol müziği eşliğinde serbest dans</li>
            <li>&#8226; Basit kurtarma görevi (peluş toplama)</li>
            <li>&#8226; Karakterle oturarak hikaye dinleme</li>
            <li>&#8226; Pati baskısı boyama etkinliği</li>
          </ul>
          <p className="text-blue-600 text-xs font-semibold mt-3">Gösteri süresi: 25-35 dakika ideal</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h4 className="font-bold text-gray-900 mb-3">🎈 5-6 Yaş: Aktif Görevler</h4>
          <p className="text-gray-700 text-sm mb-3">Bu yaş grubu en coşkulu ve katılımcı gruptur. Rekabetçi oyunlar ve takım görevleri bu yaş için mükemmeldir.</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Yangın söndürme yarışması</li>
            <li>&#8226; Engel parkuru zamana karşı</li>
            <li>&#8226; Hazine avı macerası</li>
            <li>&#8226; Takım halinde kurtarma operasyonu</li>
            <li>&#8226; Dans yarışması ve rozet töreni</li>
          </ul>
          <p className="text-blue-600 text-xs font-semibold mt-3">Gösteri süresi: 45-60 dakika ideal</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Yaş grubuna uygun aktivite planlaması, partinin başarısını doğrudan etkiler. 3 yaşındaki bir çocuğa uygun olan bir oyun, 6 yaşındaki bir çocuğu sıkabilir. Tam tersi durumda ise küçük çocuklar zorlanabilir ve motivasyonlarını kaybedebilir. Profesyonel ekibimiz, etkinlik öncesinde katılımcıların yaş dağılımını öğrenerek aktivite planını buna göre özelleştirir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Karma yaş gruplarında (örneğin 3-7 yaş karışık) iki aşamalı bir gösteri planı uygulanır. İlk bölümde tüm yaşların katılabileceği dans ve hikaye gibi genel aktiviteler yapılır, ikinci bölümde yaş gruplarına göre paralel oyunlar düzenlenir. Doğum günü organizasyonu planlama sürecinin tüm aşamalarını <Link to="/blog/dogum-gunu-organizasyonu-rehberi" className="text-blue-600 hover:text-blue-700 font-semibold underline">doğum günü organizasyonu rehberimizden</Link> inceleyebilirsiniz.
      </p>

      {/* Bölüm 5 */}
      <h2 id="gosteri-akisi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Paw Patrol Gösteri Akışı: Sürpriz Girişten Vedaya
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Profesyonel bir Paw Patrol gösterisi, baştan sona planlı bir senaryo dahilinde ilerler. Her an önceden tasarlanmıştır ve çocukların enerji seviyesine göre akış ayarlanır. İşte standart bir 50 dakikalık Paw Patrol gösterisinin detaylı akışı:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">0-5 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Sürpriz Giriş: "Paw Patrol Görevde!"</h4>
              <p className="text-gray-700 text-sm">Paw Patrol tema müziği yükselir, ışıklar kısılır. "Ryder çağırıyor, Paw Patrol görevde!" anonsu yapılır. Chase veya Marshall sürpriz olarak kapıdan girer. Çocuklar büyük bir heyecanla karşılar. Doğum günü çocuğu özel olarak selamlanır ve "Bugünkü görev senin için!" mesajı verilir.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">5-15 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Tanışma ve Isınma Dansı</h4>
              <p className="text-gray-700 text-sm">Karakter çocuklarla tek tek tanışır, ellerini sıkar ve isimleri öğrenir. Paw Patrol tema şarkısı eşliğinde hep birlikte dans edilir. Çocuklar karakterin hareketlerini taklit eder. Bu bölüm, çekingen çocukların da rahatlamasını sağlar ve grubun enerjisini yükseltir.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-blue-400 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">15-35 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Görev Zamanı: Oyunlar ve Aktiviteler</h4>
              <p className="text-gray-700 text-sm">Gösterinin ana bölümüdür. Kayıp hayvan kurtarma, yangın söndürme yarışı, engel parkuru ve hazine avı gibi görev temalı oyunlar sırayla oynanır. Karakter, her oyunu komik diyaloglar ve enerjik performansla yönetir. Kazanan çocuklara görev rozeti ve küçük ödüller verilir.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-blue-300 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-300 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">35-45 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Fotoğraf Çekimi ve Rozet Töreni</h4>
              <p className="text-gray-700 text-sm">Tüm çocuklara "Paw Patrol Ekip Üyesi" sertifikası ve rozeti dağıtılır. Doğum günü çocuğuna özel olarak "Lider Patili" unvanı verilir. Karakterle tek tek ve grup fotoğrafları çekilir. Bu bölüm ailelerin de katılımıyla sıcak bir atmosferde gerçekleşir.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-blue-200 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">45-50 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Veda: "Görev Tamamlandı!"</h4>
              <p className="text-gray-700 text-sm">Karakter, doğum günü çocuğuna özel bir veda mesajı verir: "Sen harika bir lidersin, Paw Patrol seni her zaman hatırlayacak!" Tüm çocuklarla el sallayarak, tema müziği eşliğinde sahneden ayrılır. Konfeti ve alkış eşliğinde unutulmaz bir kapanış yapılır.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bölüm 6 */}
      <h2 id="susleme-tema" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Paw Patrol Süsleme ve Tema Uyumu
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Başarılı bir Paw Patrol organizasyonunda karakter gösterisi kadar süsleme ve tema uyumu da kritik öneme sahiptir. Mekanın her köşesi Adventure Bay atmosferini yansıtmalıdır. Mavi, kırmızı ve sarı renk paleti temel alınarak hazırlanan süsleme, çocukları çizgi filmin dünyasına adım atmış gibi hissettirir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🎨 Renk Paleti ve Dekorasyon</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; <strong>Ana Renkler:</strong> Mavi (Chase), kırmızı (Marshall), sarı (Rubble) - üçlü renk uyumu</li>
            <li>&#8226; <strong>Balon Kemeri:</strong> Mavi-kırmızı-sarı balon kemeri ile giriş dekorasyonu</li>
            <li>&#8226; <strong>Arka Plan Panosu:</strong> Adventure Bay manzarası veya Paw Patrol logosu ile fotoğraf köşesi</li>
            <li>&#8226; <strong>Masa Düzeni:</strong> Paw Patrol temalı tabak, bardak, peçete ve masa örtüsü seti</li>
            <li>&#8226; <strong>Pati İzi Detayları:</strong> Zemine yapıştırılan pati izi çıkartmaları ile karakterin giriş yolu işaretlenir</li>
          </ul>
        </div>

        <div className="bg-white border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🎂 Pasta ve İkram Fikirleri</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; <strong>Pasta:</strong> Paw Patrol figürlü fondant pasta veya gökkuşağı katmanlı pasta</li>
            <li>&#8226; <strong>Cupcake:</strong> Her biri farklı karakterin yüzünü taşıyan mini kekler</li>
            <li>&#8226; <strong>Kurabiye:</strong> Kemik ve pati şekilli kurabiyeler</li>
            <li>&#8226; <strong>İkram Masası:</strong> "Paw Patrol Yakıt İstasyonu" konseptinde atıştırmalık büfesi</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Süsleme ve karakter kiralama hizmetini birlikte alarak hem maliyet avantajı sağlayabilir hem de profesyonel bir görsel bütünlük elde edebilirsiniz. Best Event olarak komple Paw Patrol organizasyon paketleri sunuyoruz: karakter gösterisi, tema süsleme, görev temalı oyunlar, pati izi sticker seti ve fotoğraf köşesi dahil paketlerimiz hakkında bilgi almak için bizi arayabilirsiniz.
      </p>

      {/* Gerçek Hikaye */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🎉 Gerçek Hikaye: 5 Yaş Paw Patrol Partisi - Ataşehir</h4>
        <p className="text-gray-700 text-sm mb-4">
          Küçük Yusuf'un 5. yaş doğum gününde Paw Patrol temalı bir organizasyon planladık. 30 çocuğun katıldığı parti, Chase ve Marshall'ın ikili performansıyla gerçekleşti. Salon mavi-kırmızı balon kemeriyle süslenmişti ve zemine yapıştırılan pati izleri kapıdan sahneye kadar uzanıyordu. Paw Patrol tema müziği yükseldiğinde çocuklar heyecandan yerlerinde duramadı. Chase girişte polislik yaparak "Şüpheli bir doğum günü tespit ettim!" dediğinde tüm salon kahkahaya boğuldu.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Görev temalı oyunlarda çocuklar 3 takıma ayrıldı ve kayıp hayvanları kurtarmak için yarıştı. Marshall'ın yangın söndürme eğitiminde köpük tabancalarıyla hedefleri vurdular. Yusuf, gösterinin sonunda "Yılın Lider Patilisi" sertifikasını aldığında gözleri ışıl ışıl parlıyordu. Annesi "Bu kadar organize ve eğlenceli bir parti beklemiyorduk" diyerek teşekkür etti.
        </p>
        <p className="text-gray-600 text-xs italic">
          — Profesyonel bir Paw Patrol organizasyonu, çocukların kahramanlarıyla buluştuğu ve gerçek görevler üstlendiği unutulmaz bir maceraya dönüşür.
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
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🐾 Paw Patrol Karakter Kiralama Hizmetimiz</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Chase, Marshall, Skye ve diğer Paw Patrol karakterleri ile çocuğunuzun doğum gününü maceraya dönüştürün. Görev temalı oyunlar, sürpriz giriş, dans gösterisi ve fotoğraf seansı dahil profesyonel organizasyon paketleri sunuyoruz. İstanbul'un tüm semtlerinde hizmetinizdeyiz.
        </p>
        <Link
          to="/karakter/paw-patrol-kiralama-istanbul"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Paw Patrol Kiralama Sayfasına Git →
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎪 Paw Patrol Temalı Doğum Günü Organizasyonu Planlayın!</h3>
        <p className="mb-6 leading-relaxed">
          Çocuğunuzun en sevdiği kahramanlarla unutulmaz bir doğum günü yaşatın. Chase ve Marshall eşliğinde görev temalı oyunlar, dans gösterisi ve fotoğraf seansı dahil komple organizasyon paketleri için hemen bizi arayın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            📞 Hemen Ara: 0530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Paw%20Patrol%20kiralama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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
      slug="paw-patrol-cocuk-etkinligi"
      faqData={faqData}
      relatedServicePath="/karakter/paw-patrol-kiralama-istanbul"
      relatedServiceName="Paw Patrol Kiralama"
    >
      {content}
    </BlogDetail>
  )
}

export default PawPatrolCocukEtkinligi
