import BlogDetail from '../../components/BlogDetail'

const UskudarRamazanEtkinligi = () => {
  const faqData = [
    {
      question: 'Üsküdar Ramazan etkinliğinde palyaço ve sihirbaz gösterisi ne kadar sürüyor?',
      answer: 'Üsküdar Ramazan programlarında palyaço gösterisi yaklaşık 45 dakika, sihirbaz gösterisi ise 30-40 dakika sürmektedir. Toplam etkinlik süresi yaklaşık 1,5-2 saat arasında planlanır. İftar öncesi ve sonrası olmak üzere iki ayrı seansta da düzenlenebilir.'
    },
    {
      question: 'Üsküdar Ramazan çocuk etkinliği için en uygun mekanlar nerelerdir?',
      answer: 'Üsküdar\'da Ramazan çocuk etkinlikleri için Mihrimah Sultan Meydanı, Fethi Paşa Korusu çevresi, Salacak Sahili ve Üsküdar Belediyesi etkinlik alanları en popüler lokasyonlardır. Boğaz manzaralı açık alanlar iftar sonrası etkinlikler için özellikle tercih edilmektedir.'
    },
    {
      question: 'Ramazan etkinliğinde sihirbaz gösterisi açık alanda yapılabilir mi?',
      answer: 'Evet, profesyonel sihirbazlarımız açık alan gösterileri için özel donanıma sahiptir. Üsküdar\'daki Ramazan programlarında sahne, ses sistemi ve aydınlatma ekipmanlarımızla açık havada da kusursuz bir gösteri sunuyoruz. Rüzgar ve hava koşullarına karşı alternatif planlarımız da hazır bulunur.'
    },
    {
      question: 'Üsküdar Ramazan palyaço gösterisinde kaç çocuk aynı anda katılabilir?',
      answer: 'Açık alan Ramazan etkinliklerinde 50 ile 200 çocuk arasında katılım olabilir. Palyaçolarımız kalabalık gruplarla çalışma konusunda deneyimlidir. 100 kişiyi aşan etkinliklerde iki palyaço ve ek animatör desteği öneriyoruz.'
    },
    {
      question: 'Üsküdar\'da Ramazan etkinliği için ulaşım nasıl sağlanır?',
      answer: 'Üsküdar, Marmaray bağlantısı sayesinde her iki yakadan da kolay ulaşılabilir durumdadır. Ekibimiz Üsküdar Meydanı, Harem ve çevre mahallelere rahatlıkla erişim sağlamaktadır. Ekipman taşımacılığı için kendi aracımızı kullanıyoruz, park alanı konusunda organizatörlerle önceden koordinasyon sağlıyoruz.'
    },
    {
      question: 'Ramazan etkinliğinde palyaço ve sihirbaz birlikte mi çıkıyor?',
      answer: 'Evet, Ramazan özel paketlerimizde palyaço ve sihirbaz gösterisi bir arada sunulur. Önce palyaço çocukları eğlendirip ısıtır, ardından sihirbaz sahneye çıkarak büyülü bir atmosfer yaratır. Bu kombinasyon Ramazan etkinliklerinde en çok tercih edilen formatımızdır.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#uskudar-ramazan-cocuk" className="text-red-600 hover:text-red-700 font-semibold">1. Üsküdar'da Ramazan Çocuk Eğlenceleri</a></li>
          <li><a href="#bogaz-manzarasi-gosteri" className="text-red-600 hover:text-red-700 font-semibold">2. Boğaz Manzarasında Palyaço ve Sihirbaz Gösterisi</a></li>
          <li><a href="#etkinlik-programi" className="text-red-600 hover:text-red-700 font-semibold">3. Etkinlik Programı ve Çocuk Aktiviteleri</a></li>
          <li><a href="#onemli-detaylar" className="text-red-600 hover:text-red-700 font-semibold">4. Üsküdar Ramazan Organizasyonunda Önemli Detaylar</a></li>
          <li><a href="#bize-ulasin" className="text-red-600 hover:text-red-700 font-semibold">5. Üsküdar Ramazan Etkinliği İçin Bize Ulaşın</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Üsküdar, İstanbul'un en köklü ilçelerinden biri olarak Ramazan ayında bambaşka bir atmosfere bürünüyor. Tarihi camilerin arasında yankılanan ezan sesleri, Boğaz'ın pırıl pırıl suları ve sokak sokak süslenen mahalleler... İşte bu büyülü ortamda Best Event olarak gerçekleştirdiğimiz palyaço ve sihirbaz gösterileriyle çocukların yüzlerini güldürdük. Bu yazıda, Üsküdar Ramazan çocuk etkinliklerimizi ve yaşadığımız unutulmaz anları sizlerle paylaşıyoruz.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          🌙 <strong>Not:</strong> Üsküdar Ramazan programları, iftar sonrası saatlerde düzenlenmekte olup çocuklar için güvenli ve eğlenceli bir ortam sunmaktadır. Ekibimiz her etkinlikte en az 30 dakika önceden sahada hazır bulunur.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="uskudar-ramazan-cocuk" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Üsküdar'da Ramazan Çocuk Eğlenceleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Üsküdar, Ramazan ayında adeta bir festivale dönüşüyor. Mihrimah Sultan Camii'nin eteklerinde kurulan iftar sofraları, Salacak'tan Kız Kulesi'ne uzanan manzara eşliğinde düzenlenen etkinlikler ve mahalle aralarındaki çocuk şenlikleri... Bu yıl da Best Event olarak Üsküdar'ın farklı noktalarında çocuk eğlenceleri düzenledik.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Özellikle Üsküdar Meydanı çevresinde gerçekleştirdiğimiz etkinliklerde yoğun bir katılım gördük. İftar sonrası saatlerde aileler çocuklarıyla birlikte meydana akın etti. Palyaçomuz daha sahneye çıkmadan çocuklar heyecanla yerlerini almıştı bile. Üsküdar halkının Ramazan'a verdiği önem, bu etkinliklerdeki katılımda açıkça kendini gösteriyordu.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h4 className="font-bold text-gray-900 mb-3">🕌 Mihrimah Sultan Meydanı Etkinliği</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Katılım:</strong> Yaklaşık 150 çocuk</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 2 saat</p>
          <p className="text-gray-700 text-sm"><strong>Program:</strong> Palyaço gösterisi, sihirbaz şov, sosis balon dağıtımı</p>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h4 className="font-bold text-gray-900 mb-3">🌊 Salacak Sahili Etkinliği</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Katılım:</strong> Yaklaşık 100 çocuk</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 1,5 saat</p>
          <p className="text-gray-700 text-sm"><strong>Program:</strong> Açık hava sihirbaz gösterisi, interaktif oyunlar</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Üsküdar'ın Beylerbeyi, Çengelköy ve Kuzguncuk gibi semtlerinden de talepler aldık. Bu mahallelerin dar sokakları ve sıcak komşuluk ilişkileri, Ramazan çocuk etkinliklerini daha da samimi kılıyordu. Bir Çengelköy etkinliğinde komşu teyzelerin çocuklara ikram ettiği Ramazan şekerleri, palyaçomuzun gösterisine eşlik ediyordu.
      </p>

      {/* Bölüm 2 */}
      <h2 id="bogaz-manzarasi-gosteri" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Boğaz Manzarasında Palyaço ve Sihirbaz Gösterisi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Üsküdar'ın en büyük avantajlarından biri, eşsiz Boğaz manzarası eşliğinde etkinlik düzenlenebilmesi. Salacak sahilinde, Kız Kulesi'nin ışıkları arka planda parlarken gerçekleştirdiğimiz sihirbaz gösterisi gerçekten unutulmazdı. Çocuklar hem sihirbazın numaralarına hayran kalıyor hem de arkadaki manzaraya bakıyordu.
      </p>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200 mb-8">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🎩 Gerçek An: Salacak'ta Sihirbaz Gösterisi</h4>
        <p className="text-gray-700 text-sm mb-4">
          Sihirbazımız sahneye çıktığında güneş Boğaz'ın üzerinde batıyordu. Kız Kulesi'nin silüeti arka planda görünürken, sihirbaz elindeki mendili havaya fırlattı ve bir anda güvercine dönüştü. Çocukların "Aaa!" sesleri tüm sahili kapladı. 8 yaşındaki Elif, gösteriden sonra yanımıza gelip "Amca, bu gerçek sihir miydi?" diye sorduğunda ekip olarak çok duygulandık.
        </p>
        <p className="text-gray-600 text-xs italic">Salacak Sahili Ramazan Programı - Best Event Ekibi</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Palyaçomuz ise Boğaz manzarasını gösteriye dahil etmeyi başardı. "Arkadaşlar, Kız Kulesi'ne el sallayalım!" diyerek çocuklarla etkileşime geçti. Sosis balonlardan gemi şekilleri yaparak "Boğaz'da yüzen gemiler" temasıyla çocukları eğlendirdi. Bu tür yerel dokunuşlar, Üsküdar Ramazan etkinliklerimizi özel kılan detaylardan biriydi.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Akşam saatlerinde Boğaz köprülerinin ışıkları yanmaya başlayınca atmosfer iyice büyülü bir hale geldi. Sihirbazımız, ışıklı aksesuarlarıyla karanlıkta yapılan özel numaralar sergiledi. Çocuklar için bu deneyim, sıradan bir gösteri değil, gerçek bir Ramazan masalıydı.
      </p>

      {/* Bölüm 3 */}
      <h2 id="etkinlik-programi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Etkinlik Programı ve Çocuk Aktiviteleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Üsküdar Ramazan çocuk etkinliklerimizde standart bir akış planı uyguluyoruz. Bu plan, yılların deneyimiyle şekillenmiş ve çocukların dikkat süresine göre optimize edilmiştir. İşte tipik bir Ramazan çocuk programımızın detayları:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">📋</span> Üsküdar Ramazan Etkinlik Akışı:
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">20:30</span>
              <div>
                <strong>Sahne Hazırlığı:</strong> Ses sistemi, sahne ve aydınlatma kurulumu tamamlanır. Ekip son kontrolleri yapar.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">21:00</span>
              <div>
                <strong>Palyaço Girişi:</strong> Müzik eşliğinde palyaço sahneye çıkar. Çocuklarla tanışma, ısınma oyunları ve dans başlar.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">21:20</span>
              <div>
                <strong>Sosis Balon Gösterisi:</strong> Palyaço çocuklara kılıç, çiçek, köpek gibi balon figürleri yapar ve dağıtır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">21:40</span>
              <div>
                <strong>Sihirbaz Gösterisi:</strong> Profesyonel sihirbaz sahneye çıkar. Kart numaraları, mendil illüzyonları ve interaktif sihir gösterisi yapılır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">22:10</span>
              <div>
                <strong>Birlikte Oyunlar:</strong> Palyaço ve sihirbaz birlikte sahneye çıkar. Müzikli sandalye, heykeli kim yapar gibi grup oyunları oynanır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">22:30</span>
              <div>
                <strong>Kapanış ve Hediye Dağıtımı:</strong> Tüm çocuklara sosis balon ve küçük hediyeler dağıtılır. Aile fotoğrafları çekilir.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bu program esnektir ve organizatörün talebine göre uyarlanabilir. Bazı Üsküdar etkinliklerinde iftar sofrası kurulumu nedeniyle başlangıç saatini 21:30'a aldık. Önemli olan çocukların enerjisinin yüksek olduğu saatleri doğru yakalamaktır. Deneyimlerimize göre iftar sonrası ilk 2 saat çocuklar için en verimli zaman dilimidir.
      </p>

      {/* Bölüm 4 */}
      <h2 id="onemli-detaylar" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Üsküdar Ramazan Organizasyonunda Önemli Detaylar
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Üsküdar'da Ramazan etkinliği düzenlerken dikkat edilmesi gereken bazı önemli noktalar bulunuyor. Yıllar içinde edindiğimiz tecrübeleri sizinle paylaşmak istiyoruz.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
          <h4 className="font-bold text-gray-900 mb-3">🚗 Ulaşım ve Park</h4>
          <p className="text-gray-700 text-sm">
            Üsküdar Meydanı çevresi Ramazan'da çok kalabalık olur. Ekibimiz genellikle Marmaray üzerinden veya erken saatte gelerek park sorunu yaşamadan hazırlıklarını tamamlar. Ekipman aracımız için organizatörlerle önceden park alanı koordinasyonu sağlıyoruz.
          </p>
        </div>

        <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
          <h4 className="font-bold text-gray-900 mb-3">🔊 Ses ve Sahne</h4>
          <p className="text-gray-700 text-sm">
            Açık alan etkinliklerinde profesyonel ses sistemi şarttır. Üsküdar sahilinde rüzgar sesi nedeniyle mikrofonlu gösteri yapıyoruz. Sahne kurulumu için en az 1 saat önceden sahada olmayı planlıyoruz.
          </p>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
          <h4 className="font-bold text-gray-900 mb-3">👨‍👩‍👧‍👦 Kalabalık Yönetimi</h4>
          <p className="text-gray-700 text-sm">
            Ramazan etkinliklerinde beklenenden fazla katılım olabiliyor. Üsküdar gibi yoğun nüfuslu bir ilçede 200'ü aşan çocuk sayısıyla karşılaştık. Bu durumda ek animatörlerimiz devreye giriyor ve çocukları gruplara ayırıyoruz.
          </p>
        </div>

        <div className="bg-rose-50 rounded-lg p-6 border-l-4 border-rose-500">
          <h4 className="font-bold text-gray-900 mb-3">🌦️ Hava Koşulları</h4>
          <p className="text-gray-700 text-sm">
            Ramazan ayı farklı mevsimlere denk gelebilir. Açık hava etkinliklerinde mutlaka B planı olarak kapalı alan alternatifi belirliyoruz. Üsküdar Belediyesi kapalı spor salonu gibi mekanlar yedek seçenek olarak değerlendirilebilir.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Üsküdar'ın tarihi dokusuna saygı göstermek de bizim için önemli. Cami avlularında veya tarihi meydanlarda etkinlik yaparken ses seviyesini kontrol altında tutuyoruz. İbadet saatlerine dikkat ediyor, teravih namazı vaktinde gösteriye ara veriyoruz. Bu hassasiyet, hem organizatörlerden hem de Üsküdar halkından büyük takdir topluyor.
      </p>

      {/* Bölüm 5 */}
      <h2 id="bize-ulasin" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Üsküdar Ramazan Etkinliği İçin Bize Ulaşın
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Üsküdar'da Ramazan çocuk etkinliği düzenlemek istiyorsanız Best Event olarak sizin yanınızdayız. Belediye programları, site yönetimleri, vakıf organizasyonları ve özel Ramazan davetleri için profesyonel palyaço ve sihirbaz hizmeti sunuyoruz. Üsküdar'ın her noktasına hizmet veriyoruz: Beylerbeyi, Çengelköy, Kuzguncuk, Altunizade, Acıbadem, Ünalan ve daha fazlası.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Ramazan ayı boyunca yoğun talep nedeniyle erken rezervasyon yapmanızı öneriyoruz. Özellikle Ramazan'ın son iki haftası ve Kadir Gecesi programları çok hızlı doluyor. Bütçenize ve etkinlik büyüklüğünüze uygun paketlerimiz hakkında bilgi almak için hemen bize ulaşın.
      </p>

      {/* CTA */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎪 Üsküdar Ramazan Etkinliğinizi Birlikte Planlayalım!</h3>
        <p className="mb-6 leading-relaxed">
          Boğaz manzarası eşliğinde unutulmaz bir Ramazan çocuk programı için Best Event ekibiyle hemen iletişime geçin. Palyaço, sihirbaz ve tam paket Ramazan organizasyonu için fiyat teklifi alın.
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
      slug="uskudar-ramazan-palyaco-sihirbaz"
    />
  )
}

export default UskudarRamazanEtkinligi
