import BlogDetail from '../../components/BlogDetail'

const MaltepeRamazanEtkinligi = () => {
  const faqData = [
    {
      question: 'Maltepe Ramazan etkinliğinde palyaço ve sihirbaz gösterisi kaç saat sürer?',
      answer: 'Ramazan etkinliklerinde standart gösteri süresi 1-2 saat arasında planlanır. İftar sonrası çocukların enerjisine göre program akışı esnetilebilir. Genellikle 90 dakikalık bir program en verimli sonucu verir.'
    },
    {
      question: 'İftar sonrası çocuk etkinliği için en uygun saat aralığı nedir?',
      answer: 'Ramazan ayında iftar sonrası çocuk etkinlikleri genellikle 21:00-23:00 arasında yapılır. Çocuklar bu saatlerde enerjik olur ve ailelerin iftar sonrası dinlenme süreleri de hesaba katılır.'
    },
    {
      question: 'Maltepe bölgesinde Ramazan etkinliği için hangi mekanlar uygun?',
      answer: 'Maltepe sahil parkı, site bahçeleri, cami avluları ve belediye etkinlik alanları en çok tercih edilen mekanlardır. Açık hava etkinliklerinde hava durumu mutlaka kontrol edilmelidir.'
    },
    {
      question: 'Ramazan çocuk şenliğinde kaç çocuk katılabilir?',
      answer: 'Palyaço ve sihirbaz gösterisi 20-100 çocuk arasında rahatlıkla uygulanabilir. 50 çocuk üzeri etkinliklerde ses sistemi ve ek animatör desteği önerilir.'
    },
    {
      question: 'Ramazan etkinliğinde yüz boyama ve balon yapılır mı?',
      answer: 'Evet. Palyaço gösterisi içinde sosis balon dağıtımı standart olarak yapılır. Yüz boyama ek hizmet olarak eklenebilir ve Ramazan temalı yüz boyama desenleri çocuklar tarafından çok sevilir.'
    },
    {
      question: 'Maltepe dışında yakın ilçelere de Ramazan etkinliği için gelinir mi?',
      answer: 'Evet. Maltepe merkezli ekibimiz Kartal, Pendik, Ataşehir, Kadıköy ve Tuzla gibi çevre ilçelere de Ramazan etkinlikleri için hizmet vermektedir.'
    }
  ]

  const content = (
    <>
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#maltepe-ramazan-senlik" className="text-red-600 hover:text-red-700 font-semibold">1. Maltepe'de Ramazan Çocuk Şenliği Nasıl Geçti?</a></li>
          <li><a href="#maltepe-ramazan-program" className="text-red-600 hover:text-red-700 font-semibold">2. Palyaço ve Sihirbaz Gösterisi Program Akışı</a></li>
          <li><a href="#maltepe-ramazan-aktiviteler" className="text-red-600 hover:text-red-700 font-semibold">3. Çocukların En Çok Sevdiği Aktiviteler</a></li>
          <li><a href="#maltepe-ramazan-ipuclari" className="text-red-600 hover:text-red-700 font-semibold">4. Ramazan Etkinliğinde Mekan ve Zamanlama İpuçları</a></li>
          <li><a href="#maltepe-ramazan-iletisim" className="text-red-600 hover:text-red-700 font-semibold">5. Maltepe Ramazan Organizasyonu İçin İletişim</a></li>
        </ul>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Ramazan ayı sadece oruç ve ibadet demek değil; aynı zamanda mahalle birlikteliği, çocuk şenlikleri ve sokak eğlenceleriyle dolu bir dönem. Bu yıl Maltepe'de düzenlenen Ramazan çocuk programında Best Event ekibi olarak palyaço ve sihirbaz gösterisi gerçekleştirdik. Altayçeşme Mahallesi'ndeki etkinlik alanında yüzlerce çocuğun katıldığı bu gece, hem bizim hem ailelerin unutamayacağı anlarla dolu geçti.
      </p>

      <h2 id="maltepe-ramazan-senlik" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Maltepe'de Ramazan Çocuk Şenliği Nasıl Geçti?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Maltepe Belediyesi'nin Ramazan programı kapsamında düzenlenen çocuk şenliği, iftar sonrası saat 21:00'de başladı. Altayçeşme ve İdealtepe mahallelerinden gelen aileler, çocuklarıyla birlikte etkinlik alanını doldurdu. Sahne önüne oturan minikler, palyaçomuzun girişiyle birlikte coşkuyla karşıladı ekibi.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        İlk dikkat çeken şey, Ramazan ayının o kendine has sıcak atmosferiydi. Aileler iftar sofrasından kalkmış, çaylarını yudumlarken çocuklar sahne önüne koşmuştu. Mahalle bakkalından alınmış dondurmaları yiyen çocuklar, palyaçonun "Kimler hazır?" sorusuna hep bir ağızdan "Biiiz!" diye bağırdı.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          Ramazan etkinliklerinde zamanlama her şeydir. İftar sonrası 45-60 dakika dinlenme süresi bırakıp ardından çocuk programına geçmek, hem ailelerin hem çocukların keyfini artırır.
        </p>
      </div>

      <h2 id="maltepe-ramazan-program" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Palyaço ve Sihirbaz Gösterisi Program Akışı
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Maltepe Ramazan şenliğinde uyguladığımız program, açık hava koşullarına ve çocuk sayısına göre özel olarak planlandı. İşte o gecenin dakika dakika akışı:
      </p>
      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">21:00 - 21:20: Palyaço Karşılama ve Isınma</h3>
          <p className="text-gray-700">Palyaçomuz sahneye çıktı, çocuklarla tanışma oyunu oynadı. İsim tekrarı, el çırpma ritmi ve mini dans ile çocukların enerjisi toplandı. Çekingen duran minikler bile 5 dakika içinde ön sıraya geldi.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">21:20 - 21:50: Sihirbaz Gösterisi</h3>
          <p className="text-gray-700">Sihirbazımız sahneye davet edildi. Kart numaraları, renkli mendil gösterisi ve havadan para çıkarma numarasıyla çocukları büyüledi. En çok alkış alan an, bir çocuğun kulağının arkasından oyuncak tavşan çıkarılan andı.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">21:50 - 22:15: Grup Oyunları ve Yarışmalar</h3>
          <p className="text-gray-700">Müzikli sandalye, balon patlatma yarışı ve takım oyunları oynandı. Kazanan çocuklara küçük hediyeler dağıtıldı. Aileler cep telefonlarıyla anı fotoğrafları çekti.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">22:15 - 22:30: Sosis Balon ve Kapanış</h3>
          <p className="text-gray-700">Her çocuğa sosis balondan kılıç, çiçek veya köpek figürü yapıldı. Toplu fotoğraf çekildi ve gece "Ramazan Bayramı'nda görüşmek üzere!" sloganıyla sona erdi.</p>
        </div>
      </div>

      <h2 id="maltepe-ramazan-aktiviteler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Çocukların En Çok Sevdiği Aktiviteler
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Her etkinlikte olduğu gibi Maltepe Ramazan şenliğinde de çocukların favorileri belli oldu. İşte en çok ilgi gören aktiviteler:
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Sihirbaz Numaraları</h3>
          <p className="text-gray-700">Özellikle "kayıp kart" ve "havadan para" numaraları çocuklarda büyük heyecan yarattı. "Bir daha yap!" sesleri kesilmedi.</p>
        </div>
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Sosis Balon Şekilleri</h3>
          <p className="text-gray-700">Kılıç ve köpek figürleri açık ara favori oldu. Bazı çocuklar ikinci tur için tekrar sıraya girdi.</p>
        </div>
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Palyaço ile Dans</h3>
          <p className="text-gray-700">Palyaçomuzun çaldığı müzikle yapılan grup dansı, hem çocukları hem velileri gülümsetti. Bazı babalar bile dayanamayıp katıldı.</p>
        </div>
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Yarışmalar ve Ödüller</h3>
          <p className="text-gray-700">Balon patlatma ve müzikli sandalye yarışmaları rekabet ateşini yaktı. Küçük ödüller bile çocukları motive etti.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Gerçek Bir An: Küçük Yusuf'un Hikayesi</h3>
        <p className="text-gray-700 leading-relaxed">
          5 yaşındaki Yusuf, etkinliğin başında annesinin arkasına saklanmıştı. Palyaçomuz ona özel bir sosis balon kılıç yapınca yavaş yavaş öne geldi. Sihirbaz gösterisinde gönüllü olarak sahneye çıktığında ise salon alkıştan yıkıldı. Annesi gözyaşlarını tutamadı: "İlk defa bu kadar rahat gördüm onu bir etkinlikte." Ramazan ruhunun sıcaklığıyla birleşen bu an, bizim için de gecenin en güzel anıydı.
        </p>
      </div>

      <h2 id="maltepe-ramazan-ipuclari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Ramazan Etkinliğinde Mekan ve Zamanlama İpuçları
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ramazan ayında çocuk etkinliği planlamak, normal dönemlerden farklı dinamikler gerektirir. Maltepe deneyimimizden çıkardığımız en önemli dersler:
      </p>
      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Zamanlama Kritik</h4>
          <p className="text-gray-700 text-sm">İftar saatinden en az 1 saat sonra başlayın. Çocuklar yemek sonrası 30-40 dakikada enerjiye kavuşur. Sahur programlarında ise gece 01:00-02:00 arası çocuk etkinliği için uygun değildir; sahur öncesi 23:00-00:30 arası daha verimlidir.</p>
        </div>
        <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Mekan Seçimi</h4>
          <p className="text-gray-700 text-sm">Maltepe'de sahil parkı, Başıbüyük Mahallesi meydanı ve site bahçeleri en uygun alanlardır. Cami avluları da Ramazan atmosferiyle mükemmel uyum sağlar. Ses sistemi için elektrik kaynağını önceden kontrol edin.</p>
        </div>
        <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Hava Durumu Planı</h4>
          <p className="text-gray-700 text-sm">Açık hava etkinliklerinde mutlaka B planı olmalı. Maltepe sahilinde rüzgar sert esebilir; bu durumda sosis balon aktivitesi kapalı alanda yapılabilir. Yağmur ihtimalinde tente veya salon alternatifi hazır tutun.</p>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500 mb-8">
        <h4 className="font-bold text-gray-900 mb-3">Maltepe'de Ramazan Etkinliği İçin Pratik Bilgiler</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>Altayçeşme, İdealtepe ve Küçükyalı mahalleleri en yoğun katılımı sağlayan bölgeler.</li>
          <li>Hafta sonu etkinlikleri hafta içine göre 2-3 kat daha kalabalık oluyor.</li>
          <li>Belediye etkinlik alanlarında ses izni ve elektrik bağlantısı önceden ayarlanmalı.</li>
          <li>Çocuk sayısı 50'yi geçiyorsa mutlaka ikinci animatör veya yardımcı eklenmelidir.</li>
        </ul>
      </div>

      <h2 id="maltepe-ramazan-iletisim" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Maltepe Ramazan Organizasyonu İçin İletişim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Maltepe ve çevresinde Ramazan ayına özel çocuk şenliği, iftar programı, mahalle etkinliği veya site organizasyonu planlıyorsanız Best Event ekibi olarak yanınızdayız. Palyaço, sihirbaz, yüz boyama ve sosis balon gibi hizmetlerimizle Ramazan gecelerinizi çocuklar için unutulmaz kılıyoruz.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Ramazan programları için erken rezervasyon yapmanızı öneriyoruz. Özellikle son 10 gün ve Kadir Gecesi programları çok hızlı doluyor. Tarih ve saat bilgisi ile birlikte bize ulaşmanız yeterli; size özel bir program hazırlayalım.
      </p>

      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎪 Maltepe Ramazan Çocuk Şenliği Planlayın!</h3>
        <p className="mb-6 leading-relaxed">
          Ramazan ayında Maltepe'de çocuklar için unutulmaz bir gece düzenlemek istiyorsanız hemen iletişime geçin. Palyaço, sihirbaz ve daha fazlası ile Ramazan programınızı renklendirelim!
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
      relatedServicePath="/organizasyonlar/palyaco-kiralama"
      relatedServiceName="Palyaço Kiralama"
      faqData={faqData}
      slug="maltepe-ramazan-palyaco-sihirbaz"
    />
  )
}

export default MaltepeRamazanEtkinligi
