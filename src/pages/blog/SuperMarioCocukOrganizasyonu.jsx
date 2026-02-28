import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const SuperMarioCocukOrganizasyonu = () => {
  const faqData = [
    {
      question: 'Super Mario maskotu kaç yaş için uygundur?',
      answer: 'Super Mario maskotu 4-12 yaş arası çocuklar için idealdir. Mario karakteri nesiller boyu sevilen bir ikon olduğu için hem küçük çocuklar hem de ilkokul çağındaki çocuklar tarafından tanınır ve sevilir. 3 yaş altı çocuklar büyük maskotlardan çekinebilir, bu yüzden maskotun dikkatli ve nazik bir şekilde yaklaşması sağlanır.'
    },
    {
      question: 'Mario ve Luigi ikilisi aynı partide olabilir mi?',
      answer: 'Evet, Mario ve Luigi maskotları aynı partide birlikte performans sergileyebilir. İkili maskot gösterisi, partinin eğlence seviyesini katlar. Mario ve Luigi birlikte dans eder, yarışma oyunlarında takım kaptanı olur ve çocuklarla etkileşim kurar. İkili maskot organizasyonu için özel paket fiyatları mevcuttur.'
    },
    {
      question: 'Super Mario temalı parti ne kadar sürer?',
      answer: 'Super Mario maskot gösterisi standart olarak 45-60 dakika sürer. Bu süreye sürpriz giriş, dans gösterisi, boru yarışması oyunları, retro oyun köşesi etkileşimi ve fotoğraf seansı dahildir. Talep üzerine 90 dakikaya kadar uzatılabilir. Komple tema parti organizasyonlarında toplam etkinlik süresi 2-3 saat olabilir.'
    },
    {
      question: 'Retro oyun köşesi organizasyona dahil mi?',
      answer: 'Retro oyun köşesi, standart maskot kiralama paketine dahil değildir ancak ek hizmet olarak talep edilebilir. Retro oyun köşesinde Nintendo Switch veya klasik konsol oyunları, Mario Kart yarışması ve joystick ile oynanan klasik Mario oyunları bulunur. Bu hizmet özellikle 6-12 yaş grubu çocuklar için büyük bir cazibe kaynağıdır.'
    },
    {
      question: 'Super Mario temalı parti süslemesi nasıl yapılır?',
      answer: 'Super Mario temalı süsleme; kırmızı-yeşil-mavi renk paletinde balon kemeri, boru şeklinde dekoratif objeler, mantar ve yıldız figürleri, soru işareti blokları ve tuğla duvar temalı arka plan panosunu içerir. Masa düzeninde Mario figürlü parti seti, altın yıldız konfetiler ve mantar şekilli cupcakeler kullanılır.'
    },
    {
      question: 'Super Mario maskot kiralama fiyatı ne kadar?',
      answer: 'Fiyatlar; maskot kiralama süresi, tek veya ikili maskot tercihi, süsleme kapsamı ve ek hizmetlere göre değişir. Sadece Mario maskotu kiralama ile başlayan paketlerden, Mario + Luigi ikilisi + süsleme + retro oyun köşesi içeren komple paketlere kadar farklı seçenekler mevcuttur. Güncel fiyat bilgisi için bizimle iletişime geçin.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#mario-tema-parti" className="text-red-600 hover:text-red-700 font-semibold">1. Super Mario Temalı Doğum Günü Partisi Nedir?</a></li>
          <li><a href="#mario-luigi" className="text-red-600 hover:text-red-700 font-semibold">2. Mario ve Luigi İkilisi: Çift Maskot Gösterisi</a></li>
          <li><a href="#boru-yarismasi" className="text-red-600 hover:text-red-700 font-semibold">3. Boru Temalı Yarışmalar ve Macera Parkuru</a></li>
          <li><a href="#retro-oyun" className="text-red-600 hover:text-red-700 font-semibold">4. Retro Oyun Köşesi: Nostaljik Eğlence</a></li>
          <li><a href="#maskot-dans" className="text-red-600 hover:text-red-700 font-semibold">5. Maskot Dans Gösterisi ve İnteraktif Performans</a></li>
          <li><a href="#mario-organizasyon" className="text-red-600 hover:text-red-700 font-semibold">6. Super Mario Tema Parti Organizasyonu Rehberi</a></li>
          <li><a href="#sss" className="text-red-600 hover:text-red-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Super Mario, 1985 yılından bu yana dünya genelinde milyonlarca çocuğun ve yetişkinin sevdiği ikonik bir oyun karakteridir. Kırmızı şapkası, bıyığı ve neşeli kişiliğiyle tanınan Mario, çocuk partilerinin en eğlenceli temalarından birini oluşturur. İstanbul'da Super Mario maskot kiralama ve çocuk organizasyonu hizmeti ile çocuğunuzun doğum gününü retro eğlence, macera dolu oyunlar ve dans gösterileriyle unutulmaz bir deneyime dönüştürebilirsiniz. Bu rehberde, Super Mario temalı partinin tüm detaylarını; Mario ve Luigi ikili maskot gösterisinden boru temalı yarışmalara, retro oyun köşesinden dans performansına kadar adım adım ele alacağız.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>İpucu:</strong> Super Mario temalı parti, hem kız hem erkek çocukları için mükemmel bir seçenektir. Mario'nun evrensel popülaritesi sayesinde partide tüm çocuklar eğlenceye dahil olur. Özellikle Mario Kart yarışması ve boru atlama parkuru, her yaştan çocuğun heyecanla katıldığı aktivitelerdir.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="mario-tema-parti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Super Mario Temalı Doğum Günü Partisi Nedir?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Super Mario temalı doğum günü partisi, Nintendo'nun efsanevi oyun serisinden ilham alarak tasarlanan bir konsept organizasyondur. Parti mekanı, Mantar Krallığı'na dönüştürülür: yeşil borular, soru işareti blokları, altın yıldızlar ve tuğla duvar dekorasyonlarıyla süslenir. Bu organizasyonun merkezi ise Super Mario maskotudur; çocuklarla dans eder, yarışmalar düzenler ve macera dolu bir gösteri sunar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Mario'nun zamansız popülaritesi, onu nesiller arası bir karakter yapar. Ebeveynler çocukluk dönemlerinden Mario'yu tanır ve sever, çocuklar ise güncel Mario oyunları ve filmiyle bu karaktere aşinadır. Bu nedenle Super Mario temalı parti, sadece çocukları değil, ebeveynleri de heyecanlandıran nadir temalardan biridir. 2023 yılında gösterime giren Super Mario Bros. filmi, karakterin popülaritesini zirveye taşımıştır.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🍄</span> Super Mario Partisinin Öne Çıkan Özellikleri:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">1.</span>
              <div>
                <strong>Macera Teması:</strong> Parti, bir Mario macerası gibi kurgulanır. Çocuklar "Prenses Peach'i kurtarmak" gibi bir senaryo etrafında oyunlar oynar ve görevleri tamamlar.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">2.</span>
              <div>
                <strong>Retro ve Modern Birleşimi:</strong> Klasik Mario oyunlarının nostalji etkisi ile modern maskot gösterisi ve dans performansı bir araya gelir.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">3.</span>
              <div>
                <strong>Aktif Katılım:</strong> Boru atlama, mantar toplama, yıldız avcılığı gibi fiziksel aktiviteler çocukları sürekli hareket halinde tutar.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">4.</span>
              <div>
                <strong>İkili Maskot Seçeneği:</strong> Mario ve Luigi maskotları birlikte sahne alabilir, bu da eğlenceyi ikiye katlar ve takım oyunlarını mümkün kılar.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Super Mario maskot kiralama hizmeti hakkında detaylı bilgi almak için <Link to="/maskot/super-mario-maskot-istanbul" className="text-red-600 hover:text-red-700 font-semibold underline">Super Mario maskot kiralama sayfamızı</Link> ziyaret edebilirsiniz. Profesyonel maskot hizmeti, çocukların Mario evrenine adım attıkları gibi hissetmelerini sağlar.
      </p>

      {/* Bölüm 2 */}
      <h2 id="mario-luigi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Mario ve Luigi İkilisi: Çift Maskot Gösterisi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Super Mario evreninin en sevilen ikilisi Mario ve Luigi, partilerde birlikte sahne aldığında eğlence katlanarak artar. Mario kırmızı şapkası ve cesur kişiliğiyle liderlik ederken, Luigi yeşil şapkası ve komik tavırlarıyla dengeyi sağlar. İkili maskot gösterisi, çocukları iki takıma bölerek yarışma formatında organize edilebilir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Mario Takımı ve Luigi Takımı olarak ayrılan çocuklar, çeşitli yarışmalarda birbirleriyle rekabet eder. Boru atlama yarışı, mantar toplama oyunu, yıldız yakalama ve dans-off gibi aktivitelerde her takım kendi maskotunun rehberliğinde mücadele eder. Bu format, çocuklarda takım ruhu geliştirir ve partiye rekabet heyecanı katar.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🔴</span> Mario Takımı
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Renk:</strong> Kırmızı</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Kaptanı:</strong> Mario Maskotu</p>
          <p className="text-gray-700 text-sm"><strong>Özellik:</strong> Cesaret, liderlik ve hız. Mario takımı yarışmalarda hız ve güç gerektiren görevlerde öne çıkar. Boru atlama ve mantar toplama yarışlarında avantajlıdır.</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🟢</span> Luigi Takımı
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Renk:</strong> Yeşil</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Kaptanı:</strong> Luigi Maskotu</p>
          <p className="text-gray-700 text-sm"><strong>Özellik:</strong> Zeka, strateji ve dayanıklılık. Luigi takımı bulmaca çözme ve strateji oyunlarında avantajlıdır. Hazine avı ve yıldız yakalama görevlerinde öne çıkar.</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Video oyun temalı organizasyonlarda farklı karakter seçeneklerini de değerlendirebilirsiniz. Örneğin <Link to="/maskot/sonic-maskot-istanbul" className="text-red-600 hover:text-red-700 font-semibold underline">Sonic maskot kiralama</Link> ile Mario + Sonic yarışması formatında bir organizasyon da düzenlenebilir. Video oyun karakterlerinin bir arada olduğu partiler, çocuklar arasında büyük ilgi görmektedir.
      </p>

      {/* Bölüm 3 */}
      <h2 id="boru-yarismasi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Boru Temalı Yarışmalar ve Macera Parkuru
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Super Mario oyunlarının en ikonik unsuru olan yeşil borular, parti ortamına taşındığında harika bir aktivite alanı yaratır. Kartondan veya kumaştan hazırlanan büyük boy borular, çocukların içinden geçebileceği, üzerinden atlayabileceği ve etrafından koşabileceği bir macera parkuruna dönüştürülür. Bu parkur, partinin en hareketli ve eğlenceli bölümünü oluşturur.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Macera parkuru genellikle 4-5 istasyondan oluşur ve her istasyonda farklı bir görev bekler. Mario maskotu çocuklara görevleri anlatır, yol gösterir ve başarılı olanlara "altın yıldız" ödülü verir. Parkurun zorluk derecesi, katılımcı çocukların yaş grubuna göre ayarlanır.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
            Boru Atlama İstasyonu
          </h4>
          <p className="text-gray-700 text-sm">
            Farklı yüksekliklerde dizilmiş yeşil borular üzerinden sırayla atlanır. Küçük çocuklar için borular alçak, büyük çocuklar için yüksek ayarlanır. Her başarılı atlayış için puan verilir. Mario maskotu çocuklara destek verir ve tezahürat yapar.
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
            Mantar Toplama Yarışı
          </h4>
          <p className="text-gray-700 text-sm">
            Alana dağıtılmış kırmızı ve yeşil mantar figürlerini en hızlı toplayan çocuk kazanır. Kırmızı mantarlar 1 puan, yeşil mantarlar 2 puan, altın yıldızlar ise 5 puan değerindedir. Bu oyun hem hız hem de strateji gerektirir.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
            Soru İşareti Blok Vurma
          </h4>
          <p className="text-gray-700 text-sm">
            Tavana veya yüksek bir noktaya asılmış "?" blokları yumuşak topla vurulmaya çalışılır. Blok vurulduğunda içinden altın bozuk para şeklinde çikolatalar düşer. Mario oyunlarındaki "blok vurma" deneyimi gerçek hayata taşınır ve çocuklar büyük heyecan yaşar.
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-500 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
            Kaplumbağa Kabuğu Bowling
          </h4>
          <p className="text-gray-700 text-sm">
            Mario evrenindeki Koopa kaplumbağalarından ilham alarak hazırlanan bowling oyunu. Yeşil renkli topla dizilmiş mantarları devirmek hedeflenir. Tüm mantarları deviren çocuk "Strike Mario" unvanını kazanır ve özel ödül alır.
          </p>
        </div>
      </div>

      {/* Bölüm 4 */}
      <h2 id="retro-oyun" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Retro Oyun Köşesi: Nostaljik Eğlence
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Super Mario temalı partinin en özel bölümlerinden biri, retro oyun köşesidir. Bu köşede klasik Nintendo oyun konsolu veya modern Nintendo Switch ile orijinal Mario oyunları oynanır. Çocuklar, maskotun gerçek hayattaki gösterisinin yanı sıra Mario'yu ekranda da deneyimler. Retro oyun köşesi özellikle 6-12 yaş grubundaki çocuklar arasında büyük ilgi görür.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Oyun köşesinde en popüler tercihler Mario Kart yarışması, Super Smash Bros. turnuvası ve klasik Super Mario Bros. hız koşusudur. Her oyun için küçük turnuvalar düzenlenir ve kazananlar Mario temalı ödüllerle ödüllendirilir. Ebeveynler de retro oyun köşesine büyük ilgi gösterir; kendi çocukluklarından hatırladıkları Mario oyunlarını yeniden oynama fırsatı bulurlar.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
          <h4 className="font-bold text-gray-900 mb-3">🏎️ Mario Kart Turnuvası</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Oyuncu:</strong> 2-4 kişi aynı anda</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> Tur başı 5-10 dk</p>
          <p className="text-gray-700 text-sm"><strong>Detay:</strong> En popüler retro aktivite. Çocuklar birbirleriyle yarışır, kazanan "Mario Kart Şampiyonu" madalyası alır.</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h4 className="font-bold text-gray-900 mb-3">🎮 Klasik Mario Hız Koşusu</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Oyuncu:</strong> 1 kişi sırayla</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> Level başı 3-5 dk</p>
          <p className="text-gray-700 text-sm"><strong>Detay:</strong> Orijinal Super Mario Bros. oyununda en hızlı bitiren yarışır. Nostalji ve heyecan bir arada.</p>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h4 className="font-bold text-gray-900 mb-3">⚡ Smash Bros. Dövüşü</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Oyuncu:</strong> 2-4 kişi aynı anda</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> Maç başı 3-5 dk</p>
          <p className="text-gray-700 text-sm"><strong>Detay:</strong> Mario, Luigi, Peach ve diğer karakterlerle dövüş turnuvası. Kazanan "Smash Şampiyonu" unvanı alır.</p>
        </div>
      </div>

      {/* Bölüm 5 */}
      <h2 id="maskot-dans" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Maskot Dans Gösterisi ve İnteraktif Performans
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Super Mario maskotunun dans gösterisi, partinin en enerjik ve coşkulu bölümüdür. Mario oyunlarının ikonik müzikleri eşliğinde koreografili dans performansı sergilenir. Maskot, çocuklara dans adımlarını öğretir ve birlikte dans ederler. Özellikle "Super Mario Theme Song" ve "Mario Kart" müzikleri çocuklar arasında büyük coşku yaratır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Dans gösterisi genellikle üç aşamadan oluşur. İlk aşamada maskot tek başına performans sergiler ve çocukların dikkatini çeker. İkinci aşamada çocuklar sahneye davet edilir ve basit dans adımları öğretilir. Üçüncü aşamada herkes birlikte dans eder ve parti doruk noktasına ulaşır. Müzik geçişleri, ışık efektleri ve duman makinesi kullanımı gösteriyi profesyonel bir seviyeye taşır.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-red-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🎵 Dans Gösterisi Müzik Listesi</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>- <strong>Super Mario Bros. Theme:</strong> Klasik giriş müziği, maskotun sahneye çıkış anı.</li>
            <li>- <strong>Mario Kart Rainbow Road:</strong> Hızlı tempo, koşmalı dans hareketleri.</li>
            <li>- <strong>Super Star Theme:</strong> Enerji patlaması, çocukların sahneye çıktığı an.</li>
            <li>- <strong>Underwater Theme:</strong> Yavaş tempo, sakinleştirici ara bölüm.</li>
            <li>- <strong>Castle Theme:</strong> Final dansı, konfeti yağmuru eşliğinde büyük final.</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-6 mb-8 border border-red-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🎉 Gerçek Hikaye: 8 Yaş Mario Partisi - Beylikdüzü</h4>
        <p className="text-gray-700 text-sm mb-4">
          Küçük Efe'nin 8. yaş doğum gününde Super Mario temalı bir organizasyon planladık. Salon, yeşil borular, soru işareti blokları ve mantar figürleriyle süslendi. 22 çocuk Mario yarışmaları için heyecanla beklerken, "Super Mario Theme" müziği yükseldi ve Mario maskotu dans ederek sahneye çıktı. Çocuklar alkışlarla karşıladı!
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Mario ve Luigi ikili gösterisi yaptılar. Çocuklar iki takıma ayrıldı ve boru atlama yarışması, mantar toplama ve Mario Kart turnuvası düzenlendi. Retro oyun köşesinde ebeveynler bile oyuna katıldı. Efe, partinin sonunda "Bu hayatımdaki en havalı parti!" dedi.
        </p>
        <p className="text-gray-600 text-xs italic">
          -- Bu hikaye, Super Mario temalı organizasyonun hem çocukları hem ebeveynleri nasıl eğlendirdiğini gösterir.
        </p>
      </div>

      {/* Bölüm 6 */}
      <h2 id="mario-organizasyon" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Super Mario Tema Parti Organizasyonu Rehberi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Başarılı bir Super Mario temalı parti için detaylı planlama şarttır. Maskot kiralama, dekorasyon, oyun parkuru kurulumu, retro oyun köşesi hazırlığı ve zamanlama gibi tüm unsurların koordineli çalışması gerekir. İşte adım adım organizasyon rehberi:
      </p>

      <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 text-xl">📋 Super Mario Parti Organizasyon Planı</h4>

        <div className="space-y-6">
          <div>
            <h5 className="font-bold text-red-700 mb-3">3-4 Hafta Önce:</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Super Mario maskot kiralama için Best Event ile iletişime geçin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Mario + Luigi ikili maskot tercihini belirleyin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Mekan, tarih ve misafir sayısını kesinleştirin</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-red-700 mb-3">2 Hafta Önce:</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Mario temalı parti malzemeleri ve süsleme siparişi verin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Mario temalı pasta siparişi verin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Retro oyun köşesi ekipmanlarını temin edin veya kiralama ayarlayın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Boru parkuru ve mantar figürlerini hazırlayın</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-red-700 mb-3">Parti Günü:</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Süslemeyi 2-3 saat önceden kurmaya başlayın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Macera parkurunu kurun ve güvenliğini kontrol edin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Retro oyun köşesini test edin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Müzik sistemi ve Mario müziklerini hazırlayın</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Tüm maskot kiralama seçenekleri ve organizasyon paketleri hakkında detaylı bilgi almak için <Link to="/organizasyonlar/maskot-kiralama" className="text-red-600 hover:text-red-700 font-semibold underline">maskot kiralama hizmetler sayfamızı</Link> ziyaret edebilirsiniz. Mario'dan Sonic'e, LOL Bebek'ten Hello Kitty'ye kadar geniş maskot yelpazesi sunuyoruz.
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
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🍄 Super Mario Maskot Kiralama Hizmetimizi Keşfedin</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Profesyonel Super Mario maskot kiralama hizmeti ile çocuğunuzun doğum gününü macera dolu bir Mario partisine dönüştürün. Dans gösterisi, boru yarışması, retro oyun köşesi ve fotoğraf seansı dahil komple maskot hizmeti sunuyoruz.
        </p>
        <Link
          to="/maskot/super-mario-maskot-istanbul"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Super Mario Maskot Kiralama Sayfasına Git
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎮 Hayalinizdeki Mario Partisini Birlikte Planlayalım!</h3>
        <p className="mb-6 leading-relaxed">
          Super Mario maskot kiralama, boru temalı yarışmalar, retro oyun köşesi ve daha fazlası ile çocuğunuzun doğum gününü efsanevi bir maceraya dönüştürün. Hemen bizi arayın!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-red-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Ara: 0530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Super%20Mario%20temal%C4%B1%20%C3%A7ocuk%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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
      slug="super-mario-cocuk-organizasyonu"
      faqData={faqData}
      relatedServicePath="/maskot/super-mario-maskot-istanbul"
      relatedServiceName="Super Mario Maskot Kiralama"
    >
      {content}
    </BlogDetail>
  )
}

export default SuperMarioCocukOrganizasyonu
