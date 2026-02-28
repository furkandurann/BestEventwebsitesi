import BlogDetail from '../../components/BlogDetail'

const KartalRamazanEtkinligi = () => {
  const faqData = [
    {
      question: 'Kartal sahilinde Ramazan çocuk etkinliği yapılabiliyor mu?',
      answer: 'Evet. Kartal sahil alanı ve Dragos bölgesi açık hava etkinlikleri için çok uygun. Belediye ile koordineli çalışarak sahil parkında çocuk şenlikleri düzenlenebilir. Rüzgar durumu göz önünde bulundurulmalıdır.'
    },
    {
      question: 'Kartal Ramazan etkinliğinde palyaço ve sihirbaz birlikte mi çalışıyor?',
      answer: 'Evet. Palyaço ve sihirbaz kombine program en çok tercih edilen formattır. Palyaço ısınma ve oyun bölümünü, sihirbaz ise gösteri bölümünü yönetir. Toplam 90-120 dakikalık akış uygulanır.'
    },
    {
      question: 'Kartal bölgesinde Ramazan çocuk şenliği için en uygun saat nedir?',
      answer: 'İftar sonrası yaklaşık 1 saat dinlenme bırakılarak 21:00-22:30 arası en verimli zaman dilimidir. Çocuklar bu saatlerde enerjik olur ve aileler iftar telaşını atlatmış olur.'
    },
    {
      question: 'Kartal belediye etkinlik alanlarında organizasyon yapmak için ne gerekli?',
      answer: 'Belediye ile önceden iletişime geçilmesi ve alan tahsisi yapılması gerekir. Ses sistemi, elektrik bağlantısı ve sahne kurulumu gibi teknik ihtiyaçlar organizasyon firmasıyla birlikte planlanır.'
    },
    {
      question: 'Kaç çocuğa kadar hizmet verilebiliyor?',
      answer: 'Standart programlarımız 20-100 çocuk için planlanır. Kartal sahili gibi geniş alanlarda 200+ çocuğa hitap eden büyük ölçekli programlar da düzenleyebiliyoruz. Bu durumda ek animatör ve ses sistemi eklenir.'
    },
    {
      question: 'Kartal çevresindeki ilçelere de Ramazan etkinliği için gelinir mi?',
      answer: 'Evet. Kartal merkezli çalışmalarımızın yanı sıra Maltepe, Pendik, Tuzla, Sultanbeyli ve Sancaktepe bölgelerine de Ramazan çocuk şenliği hizmeti veriyoruz.'
    }
  ]

  const content = (
    <>
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#kartal-ramazan-senlik" className="text-red-600 hover:text-red-700 font-semibold">1. Kartal'da Ramazan Çocuk Şenliği</a></li>
          <li><a href="#kartal-sahil-gosteri" className="text-red-600 hover:text-red-700 font-semibold">2. Sahil Alanında Palyaço ve Sihirbaz Gösterisi</a></li>
          <li><a href="#kartal-etkinlik-programi" className="text-red-600 hover:text-red-700 font-semibold">3. Etkinlik Programı ve Aktiviteler</a></li>
          <li><a href="#kartal-ramazan-planlama" className="text-red-600 hover:text-red-700 font-semibold">4. Kartal'da Ramazan Organizasyonu Planlama</a></li>
          <li><a href="#kartal-ramazan-iletisim" className="text-red-600 hover:text-red-700 font-semibold">5. Kartal Ramazan Etkinliği İletişim</a></li>
        </ul>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Kartal, İstanbul'un Anadolu yakasının en hareketli ilçelerinden biri olarak Ramazan ayında da çocuk etkinliklerine büyük talep gösteriyor. Bu yıl Kartal sahil alanında düzenlenen Ramazan çocuk şenliğinde Best Event ekibi olarak palyaço ve sihirbaz gösterisi gerçekleştirdik. Marmara Denizi'nin esintisiyle, iftar sonrası neşeli bir gece geçirdik. İşte o gecenin hikayesi ve Kartal'da Ramazan etkinliği planlamak isteyenler için pratik bilgiler.
      </p>

      <h2 id="kartal-ramazan-senlik" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Kartal'da Ramazan Çocuk Şenliği
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kartal sahil parkında kurulan Ramazan çadırının hemen yanında, çocuklara özel bir eğlence alanı hazırlanmıştı. Kordonboyu, Yakacık ve Uğur Mumcu mahallelerinden gelen aileler, iftar sonrası çocuklarıyla birlikte sahile akın etti. Saat 21:00'e doğru sahil boyunca yüzlerce aile toplandığında, geceye hazır olduğumuzu anladık.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kartal sahilinin en güzel yanı, hem geniş bir alan sunması hem de deniz manzarasıyla doğal bir sahne oluşturması. Çocuklar çimlerin üzerinde oturmuş, sahne önünde beklerken arkada Adalar'ın ışıkları parlıyordu. Ramazan topunun patlamasıyla birlikte etkinlik coşkuyla başladı.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          Kartal sahilinde Ramazan etkinliği planlarken rüzgar faktörünü mutlaka hesaba katın. Akşam saatlerinde denizden gelen esinti sosis balon aktivitesini etkileyebilir. Balonların uçmaması için kapalı bir köşe veya rüzgar perdeleri hazırlayın.
        </p>
      </div>

      <h2 id="kartal-sahil-gosteri" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Sahil Alanında Palyaço ve Sihirbaz Gösterisi
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Açık hava etkinliklerinin kendine has zorlukları ve güzellikleri var. Kartal sahilinde palyaçomuz sahneye çıktığında, deniz esintisiyle birlikte saçları dans eden bir görüntü ortaya çıktı. Çocuklar bu sahneyi çok eğlenceli buldu ve palyaçoyu kahkahalarla karşıladı.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sihirbazımız ise açık hava için özel olarak hazırlanmış numaralar sundu. Rüzgarda kart numaraları yerine daha büyük objelerle çalıştı: büyük kutulardan çıkan sürprizler, dev mendiller ve ışıklı balon gösterisi. Sahil lambaları altında yapılan sihirbazlık gösterisi, adeta bir açık hava tiyatrosu atmosferi yarattı.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Sahilde Palyaço Gösterisi</h3>
          <p className="text-gray-700">Palyaçomuz, sahil ortamına uygun yüksek enerjili bir performans sergiledi. Rüzgarlı havada bile çocukların dikkatini dağıtmadan, sesli oyunlar ve grup danslarıyla programı yönetti. Megafonla yapılan komik anonslar, sahil boyunca yankılandı.</p>
        </div>
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Sahilde Sihirbaz Gösterisi</h3>
          <p className="text-gray-700">Sihirbazımız açık hava koşullarına adapte olmuş bir program sundu. Büyük illüzyonlar, ışıklı numaralar ve seyirci katılımlı gösteriler sahil ortamında mükemmel bir etki yarattı. Deniz manzarası önündeki sihir gösterisi, çocuklar için bambaşka bir deneyimdi.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Gerçek Bir An: Kartal Sahilinde Sihirli Gece</h3>
        <p className="text-gray-700 leading-relaxed">
          O gece en güzel an, 7 yaşındaki ikizler Elif ve Ece sahneye birlikte çıktığında yaşandı. Sihirbazımız onlara ayrı ayrı birer kart seçtirdi ve her ikisinin de kartını tek bir hamleyle buldu. İkizler birbirine bakıp "Aynı anda aynı şeyi düşündük mü acaba?" diye sorduğunda meydan gülmekten kırıldı. Anneleri sahne kenarından video çekerken gözleri dolmuştu: "Ramazan'ın en güzel hediyesi bu gece oldu çocuklara." Kartal sahilinin hafif rüzgarı ve Adalar'ın ışıklarıyla tamamlanan bu an, gecenin en duygusal karesiydi.
        </p>
      </div>

      <h2 id="kartal-etkinlik-programi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Etkinlik Programı ve Aktiviteler
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kartal sahilinde uyguladığımız Ramazan programı, açık alan dinamiklerine göre özel olarak hazırlandı. İşte gecenin detaylı akışı:
      </p>
      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">21:00 - 21:25: Palyaço Karşılama ve Isınma Oyunları</h3>
          <p className="text-gray-700">Palyaçomuz sahneye müzikle çıktı. Çocuklarla selamlaşma, isim oyunu ve "deniz dalgası" adını verdiğimiz grup hareket oyunuyla geceye enerjik bir başlangıç yapıldı. Sahildeki geniş alana yayılmış çocuklar, oyunlarla sahne önüne toplandı.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">21:25 - 22:00: Sihirbaz Gösterisi</h3>
          <p className="text-gray-700">35 dakikalık sihir gösterisi sunuldu. Dev kutudan çıkan sürprizler, ışıklı top numarası ve çocuk gönüllülerle yapılan interaktif gösteriler büyük alkış aldı. Gösterinin finali olan konfeti patlaması, sahil üzerinde renkli bir yağmur oluşturdu.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">22:00 - 22:20: Yarışmalar ve Ödüller</h3>
          <p className="text-gray-700">Palyaço liderliğinde takım yarışmaları yapıldı. Balon taşıma yarışı, müzikli heykel ve bilgi yarışması formatında oyunlar oynandı. Kazanan çocuklara küçük hediyeler verildi.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">22:20 - 22:40: Sosis Balon ve Kapanış</h3>
          <p className="text-gray-700">Rüzgar nedeniyle sosis balon aktivitesi sahne arkasındaki korunaklı alanda yapıldı. Kılıç, çiçek ve kalp figürleri çocuklara dağıtıldı. Toplu fotoğraf çekimi ve "Hayırlı Ramazanlar!" diye bağırarak veda edildi.</p>
        </div>
      </div>

      <h2 id="kartal-ramazan-planlama" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Kartal'da Ramazan Organizasyonu Planlama
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kartal'da başarılı bir Ramazan çocuk etkinliği düzenlemek için deneyimlerimizden çıkardığımız en önemli ipuçlarını paylaşıyoruz:
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border-l-4 border-red-600 p-5 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Sahil Etkinlikleri</h4>
          <p className="text-gray-700 text-sm">Kartal sahil parkı, Dragos sahili ve Kordonboyu en popüler alanlardır. Rüzgar faktörü ve akşam sislenmesi hesaba katılmalı. Ses sistemi mutlaka getirilmeli, doğal ses sahilde yetmez.</p>
        </div>
        <div className="bg-white border-l-4 border-red-600 p-5 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Site ve Mahalle Etkinlikleri</h4>
          <p className="text-gray-700 text-sm">Yakacık, Kordonboyu ve Uğur Mumcu mahallelerindeki siteler Ramazan etkinlikleri için ideal. Site bahçesi veya sosyal tesis salonu kullanılabilir. Komşu koordinasyonu için muhtarlık desteği faydalıdır.</p>
        </div>
        <div className="bg-white border-l-4 border-red-600 p-5 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Belediye Koordinasyonu</h4>
          <p className="text-gray-700 text-sm">Kartal Belediyesi Ramazan programı kapsamında çocuk etkinliklerine destek veriyor. Sahne, ses sistemi ve ışıklandırma konusunda belediye kaynaklarından faydalanılabilir.</p>
        </div>
        <div className="bg-white border-l-4 border-red-600 p-5 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Ulaşım ve Park</h4>
          <p className="text-gray-700 text-sm">Kartal sahiline Marmaray ile kolay ulaşım sağlanır. Araçla gelen aileler için sahil yolundaki otopark kullanılabilir ancak Ramazan akşamları doluluk yüksektir. Ekip erken konumlanmalıdır.</p>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500 mb-8">
        <h4 className="font-bold text-gray-900 mb-3">Kartal Ramazan Etkinliği Kontrol Listesi</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>Etkinlik alanını en az 2 saat önce hazırlayın, sahil etkinliklerinde kurulum daha uzun sürer.</li>
          <li>Rüzgar perdeleri veya branda hazır bulundurun, özellikle Nisan ayı rüzgarlı geçebilir.</li>
          <li>Çocuk güvenliği için sahil kenarına bariyer veya ip çekilmelidir.</li>
          <li>İftar çadırı organizatörleriyle koordinasyon sağlayarak zamanlama çakışmasını önleyin.</li>
          <li>Yedek sosis balon ve malzeme bulundurun, açık havada tüketim daha hızlı olur.</li>
        </ul>
      </div>

      <h2 id="kartal-ramazan-iletisim" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Kartal Ramazan Etkinliği İletişim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kartal ve çevresinde Ramazan ayına özel çocuk şenliği, sahil etkinliği veya mahalle organizasyonu planlıyorsanız Best Event olarak yanınızdayız. Palyaço, sihirbaz, yüz boyama, sosis balon ve daha fazlasıyla Ramazan gecelerinizi çocuklar için eğlence dolu hale getiriyoruz.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Kartal sahil etkinlikleri özellikle hafta sonları hızla doluyor. Ramazan programınız için en az 1 hafta önceden bize ulaşmanızı öneriyoruz. Tarih, saat, tahmini çocuk sayısı ve mekan bilgisini paylaşmanız yeterli; size en uygun programı hazırlayalım.
      </p>

      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎪 Kartal'da Ramazan Çocuk Şenliği Planlayın!</h3>
        <p className="mb-6 leading-relaxed">
          Kartal sahilinde veya mahallenizde çocuklar için harika bir Ramazan gecesi organize etmek istiyorsanız hemen iletişime geçin. Palyaço ve sihirbaz ekibimizle Ramazan programınızı renklendirelim!
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
      slug="kartal-ramazan-palyaco-sihirbaz"
    />
  )
}

export default KartalRamazanEtkinligi
