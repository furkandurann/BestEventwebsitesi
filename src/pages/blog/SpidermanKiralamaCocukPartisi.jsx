import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const SpidermanKiralamaCocukPartisi = () => {
  const faqData = [
    {
      question: 'Spiderman kiralama fiyatı ne kadar?',
      answer: 'Spiderman kiralama fiyatları gösteri süresine, mekan tipine ve ek hizmetlere göre değişir. Tek karakter gösterisi ile başlayan paketlerden, Spiderman + Batman süper kahraman duo paketine kadar farklı seçenekler mevcuttur. Komple süper kahraman organizasyonu ise süsleme, karakter, oyunlar ve fotoğraf çekimini kapsar. Güncel fiyatlar için BestEvent ile iletişime geçebilirsiniz.'
    },
    {
      question: 'Spiderman karakteri kaç yaş grubuna hitap ediyor?',
      answer: 'Spiderman kostümlü karakter gösterisi özellikle 4-10 yaş aralığındaki erkek çocukları için idealdir. 4-5 yaş grubu için gösteri daha sakin ve kısa tutulurken, 6-10 yaş için aksiyon dolu, yarışmalı ve enerjik bir program uygulanır. Kız çocukları arasında da Spiderman popülerliğini korumaktadır.'
    },
    {
      question: 'Spiderman akrobatik hareketler yapıyor mu?',
      answer: 'Evet, BestEvent Spiderman karakterleri akrobatik yeteneklere sahip profesyonel sanatçılardır. Flip, salto, esneklik gösterileri ve örümcek ağı fırlatma animasyonu yapabilirler. Ancak akrobatik hareketler mekanın uygunluğuna göre planlanır; kapalı alanda sınırlı kalırken açık havada daha geniş bir performans sergilenebilir.'
    },
    {
      question: 'Spiderman ve Batman aynı partide olabilir mi?',
      answer: 'Evet, Spiderman ve Batman birlikte kiralanabilir ve bu "Süper Kahraman Duo" formatı İstanbul\'da en çok talep gören kombinasyonlardan biridir. İki karakter birlikte sahneye çıkar, süper kahraman eğitim kampı düzenler ve çocuklarla takım oyunları oynar. İkili gösteri süresi 75-90 dakikadır ve tek karaktere göre çok daha zengin bir deneyim sunar.'
    },
    {
      question: 'Süper kahraman temalı süsleme yapıyor musunuz?',
      answer: 'Evet, BestEvent olarak süper kahraman temalı komple dekorasyon hizmeti sunuyoruz. Kırmızı-mavi Spiderman renk paletinde balon kemeri, örümcek ağı süslemeler, karakter posteri arka plan, tematik masa düzeni ve parti malzemeleri dahildir. Karakter kiralama ile birlikte süsleme paketi alındığında özel indirim uygulanır.'
    },
    {
      question: 'Spiderman gösterisi ev partisine uygun mu?',
      answer: 'Evet, Spiderman gösterisi ev partilerinde de başarıyla uygulanabilir. En az 25 metrekarelik bir salon alanı yeterlidir. Ev partisinde akrobatik hareketler sınırlı tutulur ancak ağ atma oyunları, kahraman eğitim kampı ve interaktif oyunlar tam olarak uygulanır. Spiderman karakteri her mekan tipine adapte olabilecek esnekliğe sahiptir.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#super-kahraman-parti" className="text-red-600 hover:text-red-700 font-semibold">1. Süper Kahraman Temalı Parti: Çocuğunuzu Kahraman Yapın</a></li>
          <li><a href="#spiderman-aktiviteler" className="text-red-600 hover:text-red-700 font-semibold">2. Spiderman Aktiviteleri: Ağ Atma Oyunundan Akrobasi Gösterisine</a></li>
          <li><a href="#gosteri-akisi" className="text-red-600 hover:text-red-700 font-semibold">3. Spiderman Gösteri Akışı: Sürpriz Girişten Final Savaşına</a></li>
          <li><a href="#erkek-cocuk-parti" className="text-red-600 hover:text-red-700 font-semibold">4. Erkek Çocuk Parti Fikirleri: Süper Kahraman Evrenini Kurun</a></li>
          <li><a href="#batman-duo" className="text-red-600 hover:text-red-700 font-semibold">5. Batman ile Süper Kahraman Duo Gösterisi</a></li>
          <li><a href="#dekorasyon-planlama" className="text-red-600 hover:text-red-700 font-semibold">6. Spiderman Parti Dekorasyonu ve Planlama Rehberi</a></li>
          <li><a href="#sss" className="text-red-600 hover:text-red-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Spiderman, onlarca yıldır dünyanın en popüler süper kahramanlarından biri olmaya devam ediyor ve İstanbul'da erkek çocuklarının doğum günü partilerinde en çok talep edilen karakter olma özelliğini koruyor. Örümcek ağları, akrobatik hareketler ve "büyük güç, büyük sorumluluk getirir" felsefesi ile Spiderman, çocuklara cesaret, sorumluluk ve dostluk değerlerini eğlenceli bir şekilde aşılıyor. Profesyonel bir Spiderman kiralama hizmeti ile çocuğunuzun doğum gününü aksiyon dolu bir süper kahraman macerasına dönüştürebilirsiniz. Bu kapsamlı rehberde, süper kahraman temalı parti organizasyonunun her detayını ele alacağız.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>İpucu:</strong> Profesyonel bir Spiderman karakteri sadece kostüm giyen biri değildir. BestEvent Spiderman sanatçıları; akrobasi, dans, oyun yönetimi ve çocuk psikolojisi eğitimi almış deneyimli performanscılardır. Ağ atma hareketlerinden flip gösterilerine kadar her detay profesyonelce icra edilir.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="super-kahraman-parti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Süper Kahraman Temalı Parti: Çocuğunuzu Kahraman Yapın
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Süper kahraman temalı doğum günü partisi, erkek çocuklarının en büyük hayallerinden birini gerçeğe dönüştürür. Bu tür bir organizasyonda çocuklar sadece seyirci değil, hikayenin bir parçası olur. Spiderman'in yardımcısı olarak görevler alır, kötü adamlara karşı savaşır ve parti sonunda "kahraman sertifikası" ile ödüllendirilir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Süper kahraman temasının en güçlü yanı, çocukların aktif katılımını teşvik etmesidir. Koşma, atlama, tırmanma, hedef vurma gibi fiziksel aktiviteler parti programının önemli bir parçasını oluşturur. Bu sayede çocuklar hem eğlenir hem de enerjilerini sağlıklı bir şekilde atar. Spiderman karakteri, bu aktiviteleri yöneterek çocukları motive eder ve güvenli bir ortamda aksiyon yaşamalarını sağlar.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            Süper Kahraman Parti Avantajları:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">1.</span>
              <div>
                <strong>Aktif Katılım:</strong> Çocuklar oturarak izlemek yerine koşar, atlar ve oyun oynar. Enerji atımı sağlanır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">2.</span>
              <div>
                <strong>Takım Ruhu:</strong> Kötü adama karşı birlikte savaşma senaryosu, çocuklarda dayanışma duygusu geliştirir.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">3.</span>
              <div>
                <strong>Cesaret ve Özgüven:</strong> Kahraman eğitim kampı görevlerini tamamlamak, çocuklarda başarı hissi yaratır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">4.</span>
              <div>
                <strong>Hatırlanabilirlik:</strong> Aksiyon dolu bir parti, çocukların hafızasında yıllarca canlı kalır.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Spiderman karakterinin tüm özellikleri ve kostüm detayları hakkında bilgi almak için <Link to="/karakter/spiderman-kiralama-istanbul" className="text-red-600 hover:text-red-700 font-semibold underline">Spiderman kiralama İstanbul</Link> sayfamızı ziyaret edebilirsiniz.
      </p>

      {/* Bölüm 2 */}
      <h2 id="spiderman-aktiviteler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Spiderman Aktiviteleri: Ağ Atma Oyunundan Akrobasi Gösterisine
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Profesyonel bir Spiderman gösterisi, çeşitli aktivitelerle çocukların ilgisini canlı tutar. Her aktivite yaş grubuna göre uyarlanır ve güvenlik önlemleri alınarak uygulanır. İşte Spiderman partisinin en popüler aktiviteleri:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3">Ağ Atma Yarışması</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 10-15 dakika</p>
          <p className="text-gray-700 text-sm">Çocuklara özel tasarlanmış örümcek ağı fırlatıcılar dağıtılır. Hedef tahtalarına ağ atarak puan toplama yarışması yapılır. Spiderman, doğru ağ atma tekniğini gösterir ve çocukları teşvik eder. En yüksek puanı alan çocuk "En İyi Ağ Atıcı" unvanını kazanır.</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3">Kahraman Eğitim Kampı</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 15-20 dakika</p>
          <p className="text-gray-700 text-sm">Spiderman, çocukları süper kahraman olmak için eğitir. Engel parkuru, hız koşusu, hedef vurma ve gizlenme gibi görevler verilir. Her görevi tamamlayan çocuk bir yıldız kazanır. Tüm görevleri tamamlayanlar "Süper Kahraman Sertifikası" ile ödüllendirilir.</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3">Kötü Adam Yakalama Senaryosu</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 10-15 dakika</p>
          <p className="text-gray-700 text-sm">Spiderman, çocuklara bir kötü adamın doğum günü pastasını çalmak istediğini söyler. Birlikte ipuçları takip ederek kötü adamı bulur ve yakalarlar. Bu senaryo, partiye dramatik bir boyut katar ve çocukların adrenalini yükselir. Kötü adam rolünü ikinci bir animatör üstlenir.</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3">Akrobasi ve Dans Gösterisi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 10 dakika</p>
          <p className="text-gray-700 text-sm">Spiderman, süper kahraman müzikleri eşliğinde akrobatik hareketler sergiler. Flip, ters takla ve esneklik gösterileri çocukları büyüler. Ardından çocuklara basit süper kahraman hareketleri öğretilir ve birlikte dans edilir. Mekan uygunsa parkur gösterisi de programın bir parçası olabilir.</p>
        </div>
      </div>

      {/* Bölüm 3 */}
      <h2 id="gosteri-akisi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Spiderman Gösteri Akışı: Sürpriz Girişten Final Savaşına
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Profesyonel bir Spiderman gösterisi, önceden hazırlanmış bir senaryo dahilinde adım adım ilerler. Her bölüm bir öncekinden daha heyecanlıdır ve finalden önce çocukların enerjisi en üst seviyeye çıkar. İşte tipik bir Spiderman parti gösterisinin akışı:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
            Sürpriz Giriş (5-10 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Aksiyon müziği yükselir, duman efekti devreye girer ve Spiderman dramatik bir giriş yapar. Pencereden süzülerek, sahne arkasından atlayarak veya kapıdan akrobatik bir hareketle gelen Spiderman, çocuklarda anında heyecan patlaması yaratır. Doğum günü çocuğuna özel bir selamlama yapar ve onu "yardımcı kahraman" ilan eder.
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-500 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
            Kahraman Hikayesi (10 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Spiderman çocuklara oturmalarını söyler ve New York sokaklarındaki maceralarını anlatır. Kötü adamlarla nasıl savaştığını, ağ atmanın inceliklerini ve süper kahraman olmanın sorumluluğunu paylaşır. Hikaye anlatımı sırasında çocuklara sorular sorarak etkileşim kurar ve herkesi maceranın bir parçası haline getirir.
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-400 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-red-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
            Eğitim Kampı ve Oyunlar (20 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Ağ atma yarışması, engel parkuru, hız testi ve kahraman eğitim kampı görevleri bu bölümde yer alır. Çocuklar takımlara ayrılır ve birbirleriyle yarışır. Spiderman hem hakem hem koç rolünü üstlenir. Her görev sonunda çocuklar alkışlarla ödüllendirilir ve sertifika almaya hak kazanır.
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-300 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
            Akrobasi Gösterisi ve Dans (10 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Spiderman, süper kahraman film müzikleri eşliğinde akrobatik performansını sergiler. Çocuklar büyülenmiş şekilde izler. Ardından herkes ayağa kalkar ve Spiderman'in öğrettiği basit kahraman hareketleriyle dans eder. Bu bölüm partinin en enerjik kısmıdır.
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-200 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
            Fotoğraf Seansı ve Veda (15 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Gösteri sonunda Spiderman, doğum günü çocuğu ile özel aksiyon pozları verir. Ardından tüm çocuklarla tek tek ve grup fotoğrafı çektirir. Kahraman sertifikaları dağıtılır. Spiderman, "Cesur olun, doğru olanı yapın" mesajıyla veda eder ve akrobatik bir çıkışla sahneyi terk eder.
          </p>
        </div>
      </div>

      {/* Bölüm 4 */}
      <h2 id="erkek-cocuk-parti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Erkek Çocuk Parti Fikirleri: Süper Kahraman Evrenini Kurun
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Erkek çocuklarının doğum günü partilerinde süper kahraman teması açık ara en popüler tercihtir. Spiderman bu kategoride lider konumdadır ancak temayı zenginleştirmek için Marvel ve DC evreninden farklı unsurlar da eklenebilir. Süper kahraman evreninin geniş karakter yelpazesi, parti planlamasında sınırsız yaratıcılık imkanı sunar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Parti dekorasyonunda Spiderman'in kırmızı-mavi renk paleti temel alınır. Örümcek ağı desenleri, şehir silüeti arka planı ve süper kahraman posterleri mekanı aksiyon filmi setine dönüştürür. Davetiyelerden parti hediyeliklerine kadar her detayda süper kahraman teması yansıtılır. Çocuklara dağıtılan süper kahraman maskeleri ve pelerin setleri, partinin interaktif boyutunu güçlendirir.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">Süper Kahraman Parti Ekstra Fikirleri:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>&#8226; <strong>Kahraman Kimlik Kartı:</strong> Her çocuğa özel süper kahraman ismi ve güçleri yazılı kimlik kartı hazırlayın.</li>
          <li>&#8226; <strong>Pelerin Boyama:</strong> Beyaz pelerinlere çocukların kendi süper kahraman sembollerini çizmesini sağlayın.</li>
          <li>&#8226; <strong>Kötü Adam Pinata:</strong> Kötü adam şeklinde pinata ile çocukların enerjisini atsın.</li>
          <li>&#8226; <strong>Süper Kahraman Pastası:</strong> Spiderman figürlü veya örümcek ağı desenli özel tasarım pasta sipariş edin.</li>
          <li>&#8226; <strong>Ödül Töreni:</strong> Parti sonunda her çocuğa farklı bir "kahraman unvanı" verin (en hızlı, en cesur, en akıllı vb.).</li>
        </ul>
      </div>

      {/* Bölüm 5 */}
      <h2 id="batman-duo" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Batman ile Süper Kahraman Duo Gösterisi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Spiderman ve Batman ikili gösterisi, İstanbul'da en çok talep edilen süper kahraman kombinasyonudur. Marvel ve DC evreninin iki efsanevi karakterinin bir araya gelmesi, çocuklar için inanılmaz bir deneyim yaratır. İki farklı süper kahramanın farklı güçleri ve kişilikleri, gösteriye derinlik ve çeşitlilik katar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        İkili gösteride Spiderman ve Batman birlikte sahneye çıkar ve çocuklara "Süper Kahraman Akademisi" kurduklarını açıklar. Çocuklar iki takıma ayrılır: Örümcek Takımı ve Yarasa Takımı. Her takım kendi kahramanı liderliğinde görevler tamamlar, engel parkurunu geçer ve finale birlikte kötü adama karşı savaşır. Bu format, çocuklarda hem rekabet hem de dayanışma duygusu geliştirir.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-xl p-6 border border-red-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">Spiderman</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; Çevik ve enerjik karakter</li>
            <li>&#8226; Ağ atma gösterileri</li>
            <li>&#8226; Akrobatik hareketler</li>
            <li>&#8226; Esprili ve samimi yaklaşım</li>
            <li>&#8226; 4-8 yaş grubuyla güçlü bağ</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-6 border border-gray-300 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">Batman</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; Gizemli ve karizmatik karakter</li>
            <li>&#8226; Dedektiflik oyunları</li>
            <li>&#8226; Stratejik düşünme görevleri</li>
            <li>&#8226; Ciddi ama sevecen yaklaşım</li>
            <li>&#8226; 6-10 yaş grubuyla güçlü bağ</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Batman karakteri hakkında daha fazla bilgi almak ve ikili gösteri seçeneklerini incelemek için <Link to="/karakter/batman-kiralama-istanbul" className="text-red-600 hover:text-red-700 font-semibold underline">Batman kiralama İstanbul</Link> sayfamızı ziyaret edebilirsiniz. Kostümlü karakter kiralama sürecinin tüm detayları için ise <Link to="/blog/kostumlu-karakter-kiralama-rehberi" className="text-red-600 hover:text-red-700 font-semibold underline">kostümlü karakter kiralama rehberimize</Link> göz atmanızı öneririz.
      </p>

      {/* Bölüm 6 */}
      <h2 id="dekorasyon-planlama" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Spiderman Parti Dekorasyonu ve Planlama Rehberi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Spiderman temalı parti dekorasyonu, kırmızı, mavi ve siyah renk paleti üzerine kuruludur. Örümcek ağı desenleri, şehir gökdelenleri silüeti ve süper kahraman sembolleri mekanın her köşesinde kullanılmalıdır. Dekorasyon, çocukların partiye adım attığı andan itibaren süper kahraman dünyasına girdiklerini hissetmelerini sağlamalıdır.
      </p>

      <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 text-xl">Spiderman Parti Hazırlık Kontrol Listesi</h4>

        <div className="space-y-6">
          <div>
            <h5 className="font-bold text-red-700 mb-3">3-4 Hafta Önce:</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Spiderman karakter rezervasyonu yapın (popüler tarihlerde erken dolabilir)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Mekan kararını verin ve organizasyon firmasına bildirin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Süper kahraman temalı parti malzemelerini sipariş edin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Spiderman temalı davetiye tasarlayın ve gönderin</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-red-700 mb-3">1-2 Hafta Önce:</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Gösteri senaryosunu ve oyun programını firmayla birlikte planlayın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Spiderman figürlü pasta siparişi verin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Kahraman sertifikaları ve ödül rozetlerini hazırlayın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Süper kahraman maske ve pelerin setlerini temin edin</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-red-700 mb-3">Parti Günü:</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Süslemeyi en az 2 saat öncesinden kurmaya başlayın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Spiderman'in sürpriz giriş noktasını ve gizlenme yerini ayarlayın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Ses sistemi, aksiyon müzikleri ve duman efekti cihazını test edin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&#9744;</span>
                <span>Engel parkuru malzemelerini hazırlayın ve güvenlik kontrolü yapın</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gerçek Hikaye */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-8 border border-red-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">Gerçek Hikaye: Küçük Arda'nın Süper Kahraman Günü - Kadıköy</h4>
        <p className="text-gray-700 text-sm mb-4">
          7 yaşındaki Arda, doğum gününde Spiderman'i görmek istiyordu. Kadıköy'deki bir parti salonunda süper kahraman temalı organizasyon düzenledik. Salon kırmızı-mavi balonlar ve örümcek ağı süslemelerle kaplandı. 18 çocuk heyecanla beklerken, aksiyon müziği yükseldi ve Spiderman sahne arkasından flip atarak sahneye çıktı. Arda'nın sevinci görülmeye değerdi.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Spiderman çocukları iki takıma ayırdı ve kahraman eğitim kampı başladı. Ağ atma yarışması, engel parkuru ve kötü adam yakalama senaryosu çocukları çılgına çevirdi. Parti sonunda her çocuğa "Süper Kahraman Sertifikası" verildi. Arda'nın babası "Oğlum bir hafta boyunca Spiderman'i anlattı, teşekkürler" diye mesaj attı.
        </p>
        <p className="text-gray-600 text-xs italic">
          -- Profesyonel Spiderman gösterisi, çocukların hayal dünyasını aksiyon dolu bir maceraya dönüştürür.
        </p>
      </div>

      {/* Bölüm 7 - SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Sık Sorulan Sorular
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
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Spiderman Kiralama Hizmetimizi Keşfedin</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          BestEvent olarak profesyonel Spiderman kostümlü karakter gösterisi ile çocuğunuzun süper kahraman hayalini gerçeğe dönüştürüyoruz. Akrobatik performans, ağ atma oyunları, kahraman eğitim kampı ve fotoğraf çekim seansı dahil komple organizasyon paketleri sunuyoruz.
        </p>
        <Link
          to="/karakter/spiderman-kiralama-istanbul"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Spiderman Kiralama Sayfasına Git
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Süper Kahraman Doğum Günü Partisi Planlayalım!</h3>
        <p className="mb-6 leading-relaxed">
          Spiderman kiralama ile çocuğunuzun doğum gününü aksiyon dolu bir maceraya dönüştürün. Sürpriz giriş, akrobasi gösterisi, kahraman eğitim kampı ve ağ atma yarışması dahil komple süper kahraman organizasyonu için hemen arayın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-red-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Ara: 05307309009
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Spiderman%20kiralama%20ve%20s%C3%BCper%20kahraman%20do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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
      slug="spiderman-kiralama-cocuk-partisi"
      faqData={faqData}
      relatedServicePath="/organizasyonlar/kostumlu-karakterler"
      relatedServiceName="Kostümlü Karakterler"
    >
      {content}
    </BlogDetail>
  )
}

export default SpidermanKiralamaCocukPartisi
