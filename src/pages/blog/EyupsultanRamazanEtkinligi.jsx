import BlogDetail from '../../components/BlogDetail'

const EyupsultanRamazanEtkinligi = () => {
  const faqData = [
    {
      question: 'Eyüpsultan Ramazan etkinliğinde palyaço ve sihirbaz gösterisi yapılıyor mu?',
      answer: 'Evet. Eyüpsultan bölgesinde Ramazan ayı boyunca belediye ve özel organizasyonlarla çocuklara yönelik palyaço ve sihirbaz gösterileri düzenlenmektedir. Best Event ekibi olarak biz de bu programlarda aktif rol alıyoruz.'
    },
    {
      question: 'Eyüpsultan cami avlusunda çocuk etkinliği yapmak için izin gerekir mi?',
      answer: 'Cami avlusu ve çevresi için genellikle müftülük veya belediye koordinasyonu gerekir. Organizasyon firması olarak biz bu süreçlerde yönlendirme yapabiliriz ancak resmi izin süreci ev sahibi kuruma aittir.'
    },
    {
      question: 'Eyüpsultan Ramazan programlarına kaç çocuk katılabiliyor?',
      answer: 'Açık alan etkinliklerinde 50 ila 200 çocuk rahatlıkla katılabilir. Büyük meydanlarda ses sistemiyle 300+ çocuğa hitap eden programlar da düzenledik.'
    },
    {
      question: 'Ramazan etkinliğinde sihirbaz gösterisi kaç dakika sürer?',
      answer: 'Standart sihirbaz gösterisi 30-45 dakika sürer. Ramazan programlarında palyaço + sihirbaz kombine akışı toplam 90-120 dakika olarak planlanır.'
    },
    {
      question: 'Eyüpsultan bölgesine ulaşım ve park sorunu olur mu?',
      answer: 'Eyüpsultan meydanı ve cami çevresi hafta sonları ve Ramazan akşamları oldukça kalabalık olur. Toplu taşıma (metro + tramvay) tercih edilmelidir. Ekibimiz ekipmanları önceden konumlandırdığı için ailelerin ulaşım konusunda endişelenmesine gerek yoktur.'
    },
    {
      question: 'Eyüpsultan dışında Haliç çevresindeki ilçelere de Ramazan etkinliği için gelinir mi?',
      answer: 'Evet. Eyüpsultan merkezli programlarımızın yanında Fatih, Beyoğlu, Kağıthane, Alibeyköy ve Gaziosmanpaşa gibi çevre bölgelere de Ramazan etkinlikleri için hizmet veriyoruz.'
    }
  ]

  const content = (
    <>
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#eyupsultan-ramazan-eglence" className="text-red-600 hover:text-red-700 font-semibold">1. Eyüpsultan'da Ramazan Çocuk Eğlenceleri</a></li>
          <li><a href="#eyupsultan-tarihi-atmosfer" className="text-red-600 hover:text-red-700 font-semibold">2. Tarihi Atmosferde Palyaço ve Sihirbaz Gösterisi</a></li>
          <li><a href="#eyupsultan-program-detay" className="text-red-600 hover:text-red-700 font-semibold">3. Program Akışı ve Etkinlik Detayları</a></li>
          <li><a href="#eyupsultan-dikkat" className="text-red-600 hover:text-red-700 font-semibold">4. Eyüpsultan Ramazan Etkinliğinde Dikkat Edilmesi Gerekenler</a></li>
          <li><a href="#eyupsultan-talep" className="text-red-600 hover:text-red-700 font-semibold">5. Eyüpsultan Ramazan Organizasyonu Talebi</a></li>
        </ul>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Eyüpsultan, İstanbul'un manevi merkezi olarak Ramazan ayında bambaşka bir havaya bürünüyor. Tarihi camisi, Haliç manzarası ve Pierre Loti tepesiyle zaten büyülü olan bu ilçe, Ramazan geceleri çocuk şenlikleriyle ayrı bir canlılık kazanıyor. Best Event ekibi olarak bu yıl Eyüpsultan meydanında gerçekleştirdiğimiz palyaço ve sihirbaz gösterisi, hem bizim hem yüzlerce ailenin unutamayacağı bir gece oldu.
      </p>

      <h2 id="eyupsultan-ramazan-eglence" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Eyüpsultan'da Ramazan Çocuk Eğlenceleri
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Eyüpsultan'da Ramazan ayı, diğer ilçelerden çok farklı yaşanıyor. İftar sofraları caminin etrafında kuruluyor, aileler birlikte namaz kılıyor ve ardından çocuklar meydanda buluşuyor. Bu yıl biz de bu geleneğin bir parçası olduk. Cami avlusunun hemen yanındaki etkinlik alanında kurulan sahnede, çocuklara özel bir program sunduk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rami, Alibeyköy, Defterdar ve Nişanca mahallelerinden gelen aileler meydanı doldurdu. Ramazan davulcusunun geçişiyle başlayan akşam, çocuk kahkahalarıyla devam etti. Eyüpsultan'ın dar sokakları ve tarihi dokusu, etkinliğe sanki bir film seti havası kattı.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          Eyüpsultan'da Ramazan etkinliği planlarken tarihi dokunun korunmasına özen göstermek çok önemli. Ses seviyesi, sahne konumu ve çevre düzeni, bölgenin manevi atmosferine saygılı şekilde planlanmalıdır.
        </p>
      </div>

      <h2 id="eyupsultan-tarihi-atmosfer" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Tarihi Atmosferde Palyaço ve Sihirbaz Gösterisi
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Eyüpsultan meydanında sahne kurmak başlı başına özel bir deneyim. Arkada Eyüp Sultan Camii'nin ışıklandırılmış minareleri, yanda Haliç'in parıltıları... Bu dekor içinde palyaçomuzun sahneye çıkışı sinematik bir an yarattı. Çocuklar, tarihi meydanda renkli kostümüyle beliren palyaçoyu coşkuyla karşıladı.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sihirbazımız ise bu atmosferi gösterisine dahil etti. "Eyüpsultan'ın sihri" temasıyla hazırlanan özel gösteride, tarihi motiflere göndermeler yapıldı. Mendillerin altından çıkan oyuncak güvercinler, Eyüpsultan'ın meşhur güvercinlerine selam gönderdi. Çocukların gözlerindeki parıltıyı tarifsizdi.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Palyaço Gösterisi</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Renkli kostümle karşılama</li>
            <li>İsim oyunu ve tanışma turu</li>
            <li>Müzikli dans ve ritim oyunları</li>
            <li>Sosis balon figürleri</li>
            <li>Grup yarışmaları</li>
          </ul>
        </div>
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Sihirbaz Gösterisi</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Kart numaraları ve el çabukluğu</li>
            <li>Renkli mendil gösterisi</li>
            <li>Kayıp eşya bulma numarası</li>
            <li>Çocuk gönüllülerle sahne gösterisi</li>
            <li>Final sürpriz numarası</li>
          </ul>
        </div>
      </div>

      <h2 id="eyupsultan-program-detay" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Program Akışı ve Etkinlik Detayları
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Eyüpsultan Ramazan gecesinde uyguladığımız program, hem çocukların dikkat süresini hem de Ramazan programının genel akışını gözeterek hazırlandı. İşte o gecenin detaylı programı:
      </p>
      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">20:45 - 21:10: Palyaço ile Açılış</h3>
          <p className="text-gray-700">İftar sonrası meydanda toplanan çocuklar palyaçomuzla buluştu. Tanışma oyunları, isim tekrarı ve enerji toplama dansı ile geceye hareketli bir başlangıç yapıldı. Teravih namazından çıkan aileler de yavaş yavaş alana katıldı.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">21:10 - 21:45: Sihirbaz Sahne Gösterisi</h3>
          <p className="text-gray-700">Sihirbazımız 35 dakikalık bir gösteri sundu. Kart numaraları, ipten kurtuluş gösterisi ve seyirciden çocuk çağırarak yapılan interaktif numaralar büyük alkış aldı. Meydan sessizliğe gömülüp ardından patlayan alkışlar, tarihi duvarlar arasında yankılandı.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">21:45 - 22:10: Grup Oyunları</h3>
          <p className="text-gray-700">Palyaço ve sihirbaz birlikte sahneye çıkarak takım oyunları yönetti. Balon toplama yarışı, müzikli sandalye ve "sihirli kelimeyi bul" oyunu çocukları çok eğlendirdi.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">22:10 - 22:30: Sosis Balon ve Veda</h3>
          <p className="text-gray-700">Her çocuğa sosis balondan figür yapıldı. Toplu fotoğraf çekimi yapılarak program sona erdi. Çocuklar balonlarıyla Eyüpsultan sokaklarında yürürken meydandan neşeli kahkahalar yükseldi.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Gerçek Bir An: Minik Zeynep'in Sihirle Tanışması</h3>
        <p className="text-gray-700 leading-relaxed">
          4 yaşındaki Zeynep, sihirbaz gösterisinde gönüllü olmak için elini kaldıran en küçük çocuktu. Sahneye çıktığında biraz heyecanlıydı ama sihirbazımız ona bir kart seçtirdi ve kartın cebinden çıktığını gösterince Zeynep'in yüzündeki şaşkınlık paha biçilmezdi. "Baba baba, sihirbaz gerçekmiş!" diye bağırarak babasına koştu. O an meydandaki herkes gülümsedi. Eyüpsultan'ın Ramazan sıcaklığıyla birleşen bu sahne, geceye damgasını vurdu.
        </p>
      </div>

      <h2 id="eyupsultan-dikkat" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Eyüpsultan Ramazan Etkinliğinde Dikkat Edilmesi Gerekenler
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Eyüpsultan, manevi ve tarihi dokusuyla İstanbul'un en hassas bölgelerinden biri. Bu nedenle burada etkinlik planlarken dikkat edilmesi gereken özel noktalar var:
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border-l-4 border-red-600 p-5 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Ses ve Müzik Düzeni</h4>
          <p className="text-gray-700 text-sm">Cami yakınında yapılan etkinliklerde ses seviyesi kontrol altında tutulmalı. Ezan saatlerinde müzik kapatılmalı ve program buna göre ayarlanmalıdır.</p>
        </div>
        <div className="bg-white border-l-4 border-red-600 p-5 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Kalabalık Yönetimi</h4>
          <p className="text-gray-700 text-sm">Eyüpsultan meydanı Ramazan'da çok kalabalık olur. Çocukların güvenliği için etkinlik alanı bariyerlerle çevrilmeli ve giriş-çıkış noktaları netleştirilmelidir.</p>
        </div>
        <div className="bg-white border-l-4 border-red-600 p-5 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Ulaşım Planlaması</h4>
          <p className="text-gray-700 text-sm">Eyüpsultan'a metro ile ulaşım en pratik yoldur. Araçla gelen aileler için park yeri bulmak Ramazan akşamlarında zor olabilir. Ekibin erken konumlanması şarttır.</p>
        </div>
        <div className="bg-white border-l-4 border-red-600 p-5 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Temizlik ve Düzen</h4>
          <p className="text-gray-700 text-sm">Etkinlik sonrası alan temiz bırakılmalı. Balon artıkları ve konfeti gibi materyaller toplanmalı. Tarihi alana saygı, organizasyonun profesyonelliğinin göstergesidir.</p>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500 mb-8">
        <h4 className="font-bold text-gray-900 mb-3">Eyüpsultan Ramazan Etkinliği: Bilmeniz Gerekenler</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>Teravih namazı sonrası (yaklaşık 21:00) en ideal başlangıç saatidir.</li>
          <li>Pierre Loti tepesi ve teleferik bölgesi, alternatif etkinlik alanı olarak kullanılabilir.</li>
          <li>Eyüpsultan meydanındaki esnafla koordinasyon, alanın düzenlenmesinde kolaylık sağlar.</li>
          <li>Çocuk sayısı yüksek olacağından ses sistemi ve ışıklandırma mutlaka hazır olmalıdır.</li>
        </ul>
      </div>

      <h2 id="eyupsultan-talep" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Eyüpsultan Ramazan Organizasyonu Talebi
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Eyüpsultan ve çevresinde Ramazan ayına özel çocuk etkinliği planlamak istiyorsanız Best Event olarak tüm detayları birlikte kurgulayabiliriz. Cami avlusu etkinlikleri, meydan şenlikleri, site Ramazan geceleri veya özel iftar programları - hangi formatta olursa olsun, profesyonel palyaço ve sihirbaz ekibimizle Ramazan gecelerinizi çocuklar için özel kılıyoruz.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Eyüpsultan'ın Ramazan programları çok yoğun talep alıyor. Özellikle Kadir Gecesi ve Ramazan'ın son 10 günü için en az 2 hafta önceden rezervasyon yapmanızı tavsiye ediyoruz.
      </p>

      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎪 Eyüpsultan'da Ramazan Çocuk Şenliği Düzenleyin!</h3>
        <p className="mb-6 leading-relaxed">
          Tarihi Eyüpsultan atmosferinde çocuklar için unutulmaz bir Ramazan gecesi organize etmek istiyorsanız hemen bize ulaşın. Palyaço, sihirbaz ve eğlence dolu bir program hazırlayalım!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+905307309009" className="bg-white text-red-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center">📞 Hemen Ara</a>
          <a href="https://wa.me/905307309009?text=Merhaba Ramazan etkinlikleri hakkında bilgi almak istiyorum" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center">💬 WhatsApp</a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      content={content}
      relatedServicePath="/organizasyonlar/magic-show"
      relatedServiceName="Sihirbaz Gösterisi"
      faqData={faqData}
      slug="eyupsultan-ramazan-palyaco-sihirbaz"
    />
  )
}

export default EyupsultanRamazanEtkinligi
