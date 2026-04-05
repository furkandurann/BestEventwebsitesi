import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const YasaGoreDogumGunuKonsepti = () => {
  const faqData = [
    {
      question: '5 yaşındaki çocuğum için en uygun doğum günü konsepti nedir?',
      answer: '5 yaş grubu çocuklar için renkli, hareketli ve tanıdık karakterlerin yer aldığı konseptler idealdir. Prenses, süper kahraman, hayvan temalı partiler veya palyaço eşliğinde eğlenceli bir organizasyon bu yaş grubu için en çok tercih edilen seçeneklerdir. Dikkat süreleri kısa olduğu için aktivitelerin sık değişmesi önemlidir.'
    },
    {
      question: 'Hangi yaş grubunda hangi etkinlikler daha etkili oluyor?',
      answer: '5-6 yaş için kostümlü karakterler ve palyaço gösterileri, 7-8 yaş için sihirbazlık gösterileri ve bubble show, 9-10 yaş için bilim deneyleri ve takım oyunları, 11-12 yaş için karaoke, dans partisi ve yaratıcı atölye çalışmaları çok daha etkili olmaktadır.'
    },
    {
      question: 'Doğum günü organizasyonunda kaç çocuk davet edilmeli?',
      answer: '5-6 yaş grubu için 8-12 çocuk, 7-8 yaş grubu için 12-18 çocuk, 9-10 yaş grubu için 15-20 çocuk ve 11-12 yaş grubu için 15-25 çocuk idealdir. Çocuk sayısı, mekan büyüklüğü ve planlanan aktivitelere göre ayarlanmalıdır.'
    },
    {
      question: 'Erkek ve kız çocukları için konseptler farklı mı olmalı?',
      answer: 'Günümüzde cinsiyet ayrımı yapılmadan tüm çocukların keyif alabileceği konseptler tercih edilmektedir. Örneğin, bilim temalı partiler, hayvan konseptleri, sirk teması veya macera partileri her iki cinsiyet için de harika seçeneklerdir. Önemli olan çocuğun kişisel ilgi alanlarına göre seçim yapmaktır.'
    },
    {
      question: 'Profesyonel organizasyon yaptırmak yerine evde parti düzenleyebilir miyim?',
      answer: 'Elbette evde parti düzenlenebilir, ancak profesyonel organizasyon firmalarıyla çalışmak ailelerin stresini büyük ölçüde azaltır. Profesyonel ekipler, yaş grubuna uygun aktiviteleri, güvenlik önlemlerini ve zamanlama planlamasını çok daha etkin bir şekilde yönetir. Ayrıca kostümlü karakterler, sihirbazlık ve bubble show gibi özel etkinlikler ancak profesyonel ekiplerle mümkündür.'
    },
    {
      question: 'Doğum günü partisi ne kadar sürmeli?',
      answer: '5-6 yaş grubu için 1,5-2 saat, 7-8 yaş grubu için 2-2,5 saat, 9-10 yaş grubu için 2,5-3 saat ve 11-12 yaş grubu için 3-4 saat ideal sürelerdir. Çocukların yaşı büyüdükçe dikkat süreleri ve enerji seviyeleri arttığı için parti süresi de uzatılabilir.'
    }
  ]

  const relatedServicePath = '/organizasyonlar/full-paket-organizasyon'
  const relatedServiceName = 'Full Paket Organizasyon'

  const content = (
    <>
      {/* Giriş */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Çocuğunuzun doğum günü yaklaşıyor ve muhteşem bir parti planlamak istiyorsunuz. Ancak 5 yaşındaki bir çocuğun hayalindeki parti ile 12 yaşındaki bir çocuğun beklentileri arasında dağlar kadar fark var. Her yaş grubunun kendine özgü ilgi alanları, dikkat süreleri ve sosyal dinamikleri bulunur. İşte bu yüzden, doğum günü konseptini çocuğunuzun yaşına göre belirlemek, partinin başarısı için en kritik adımdır.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Bu kapsamlı rehberimizde, 5 yaşından 12 yaşına kadar her yaş grubu için en uygun doğum günü konseptlerini, aktivite önerilerini, zamanlama ipuçlarını ve profesyonel organizasyon detaylarını tek tek ele alacağız. Yılların deneyimiyle oluşturduğumuz bu kılavuz, İstanbul'da binlerce başarılı organizasyonun birikimini sizlerle paylaşmaktadır.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Doğum günü partisi sadece pasta kesmek ve hediye açmaktan ibaret değildir. Doğru planlanmış bir parti, çocuğunuzun özgüvenini artırır, sosyal becerilerini geliştirir ve unutulmaz anılar biriktirmesini sağlar. Haydi, her yaş grubu için ideal konseptleri birlikte keşfedelim!
        </p>
      </section>

      {/* İçindekiler */}
      <nav className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li>
            <a href="#yas-gruplari-onemi" className="text-blue-600 hover:text-blue-800 hover:underline">
              1. Yaş Gruplarına Göre Planlama Neden Önemli?
            </a>
          </li>
          <li>
            <a href="#yas-5-6" className="text-pink-600 hover:text-pink-800 hover:underline">
              2. 5-6 Yaş: Masal Dünyasının Büyüsü
            </a>
          </li>
          <li>
            <a href="#yas-7-8" className="text-purple-600 hover:text-purple-800 hover:underline">
              3. 7-8 Yaş: Keşif ve Macera Zamanı
            </a>
          </li>
          <li>
            <a href="#yas-9-10" className="text-indigo-600 hover:text-indigo-800 hover:underline">
              4. 9-10 Yaş: Yaratıcılık ve Takım Ruhu
            </a>
          </li>
          <li>
            <a href="#yas-11-12" className="text-teal-600 hover:text-teal-800 hover:underline">
              5. 11-12 Yaş: Gençlik Enerjisi ve Bağımsızlık
            </a>
          </li>
          <li>
            <a href="#musteri-hikayesi" className="text-amber-600 hover:text-amber-800 hover:underline">
              6. Müşteri Hikayesi: Dubai'den İstanbul'a Unutulmaz Bir Doğum Günü
            </a>
          </li>
          <li>
            <a href="#genel-ipuclari" className="text-gray-600 hover:text-gray-800 hover:underline">
              7. Tüm Yaş Grupları İçin Genel İpuçları
            </a>
          </li>
          <li>
            <a href="#zamanlama-tablosu" className="text-gray-600 hover:text-gray-800 hover:underline">
              8. Yaşa Göre Zamanlama ve Bütçe Tablosu
            </a>
          </li>
          <li>
            <a href="#sonuc" className="text-gray-600 hover:text-gray-800 hover:underline">
              9. Sonuç ve Öneriler
            </a>
          </li>
        </ul>
      </nav>

      {/* Yaş Gruplarına Göre Planlama */}
      <section id="yas-gruplari-onemi" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          1. Yaş Gruplarına Göre Planlama Neden Önemli?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Çocukların gelişim evreleri, doğum günü partisinin her aşamasını doğrudan etkiler. 5 yaşındaki bir çocuğun dikkat süresi ortalama 15-20 dakika iken, 12 yaşında bu süre 45 dakikaya kadar çıkabilir. Bu fark, parti programının akışından aktivitelerin karmaşıklığına, müzik seçiminden ikram menüsüne kadar her detayı şekillendirir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Yaşa uygun olmayan bir konsept seçmek, çocukların sıkılmasına, huzursuzlanmasına veya partiden keyif almamasına neden olabilir. Örneğin, 5 yaşındaki çocuklara yönelik karmaşık bir bilim deneyi atölyesi kafa karışıklığı yaratırken, 12 yaşındaki çocuklara palyaço gösterisi "bebeksi" gelebilir. Bu nedenle, yaş grubuna özel planlama hem çocukların mutluluğu hem de ailelerin huzuru için vazgeçilmezdir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Uzman ekibimiz, her yaş grubunun psikolojik ve sosyal ihtiyaçlarını göz önünde bulundurarak, yüzlerce farklı konsept arasından en uygun olanları belirlemiştir. Şimdi her yaş grubunu detaylı olarak inceleyelim.
        </p>
      </section>

      {/* 5-6 Yaş Kartı */}
      <section id="yas-5-6" className="mb-12">
        <div className="bg-pink-50 border-2 border-pink-500 rounded-2xl p-6 md:p-8 shadow-md">
          <div className="flex items-center mb-6">
            <span className="bg-pink-500 text-white text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center mr-4 shadow-lg">
              5-6
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-pink-700">
              5-6 Yaş: Masal Dünyasının Büyüsü
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            5-6 yaş grubu, hayal gücünün doruk noktasında olduğu bir dönemdir. Bu yaştaki çocuklar, masal kahramanlarına inanır, sihrin gerçek olduğunu düşünür ve her şeyi büyük bir merakla keşfeder. Doğum günü partileri, bu sihirli dünyayı gerçeğe dönüştürmek için mükemmel bir fırsattır.
          </p>

          <h3 className="text-xl font-bold text-pink-600 mb-3 mt-6">Önerilen Konseptler</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
            <li><strong>Prenses / Prens Partisi:</strong> Taç yapımı atölyesi, dans etkinliği ve kostümlü karakter eşliğinde masal anlatımı</li>
            <li><strong>Süper Kahraman Teması:</strong> Pelerin boyama, engel parkuru ve kötü adam yakalama oyunu</li>
            <li><strong>Hayvan Dünyası:</strong> Yüz boyama ile hayvan figürleri, hayvan taklidi oyunları ve hayvan temalı dekorasyon</li>
            <li><strong>Sirk Teması:</strong> Palyaço gösterisi, balon şekillendirme ve mini akrobasi etkinlikleri</li>
            <li><strong>Denizaltı Macerası:</strong> Mavi-yeşil dekorasyon, balık tutma oyunu ve deniz canlıları boyama</li>
          </ul>

          <h3 className="text-xl font-bold text-pink-600 mb-3">Aktivite Planı (1,5-2 Saat)</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-pink-200">
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold text-pink-600">0-15 dk:</span> Karşılama, kostüm giydirme ve serbest oyun</li>
              <li><span className="font-semibold text-pink-600">15-35 dk:</span> <Link to="/organizasyonlar/palyaco-kiralama" className="text-pink-600 hover:text-pink-800 underline font-medium">Palyaço gösterisi</Link> veya kukla tiyatrosu</li>
              <li><span className="font-semibold text-pink-600">35-55 dk:</span> Yüz boyama ve balon şekillendirme aktivitesi</li>
              <li><span className="font-semibold text-pink-600">55-75 dk:</span> Müzikli oyunlar (sandalye kapmaca, dondurmacı vb.)</li>
              <li><span className="font-semibold text-pink-600">75-90 dk:</span> Pasta kesimi, ikramlar ve hediye dağıtımı</li>
              <li><span className="font-semibold text-pink-600">90-120 dk:</span> Serbest oyun ve veda</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-pink-600 mb-3">Dikkat Edilmesi Gerekenler</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bu yaş grubunda güvenlik en büyük önceliktir. Küçük parçalı oyuncaklar, sivri köşeli dekorasyon malzemeleri ve alerjik reaksiyona yol açabilecek yiyeceklerden kaçınılmalıdır. Ayrıca velilerin partide bulunması önerilir çünkü 5-6 yaş grubu çocuklar ailelerinden ayrı kaldıklarında huzursuzlanabilirler.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Partinin süresi 2 saati geçmemelidir. Uzun partiler, bu yaş grubundaki çocukların yorulmasına ve huzursuzlanmasına neden olur. Aktiviteler arasında kısa molalar vermek ve enerji seviyesine göre programı esnetmek başarılı bir partinin anahtarıdır. <Link to="/organizasyonlar/palyaco-kiralama" className="text-pink-600 hover:text-pink-800 underline font-medium">Profesyonel palyaço kiralama</Link> hizmetimiz, bu yaş grubu için en popüler tercihlerden biridir.
          </p>
        </div>
      </section>

      {/* 7-8 Yaş Kartı */}
      <section id="yas-7-8" className="mb-12">
        <div className="bg-purple-50 border-2 border-purple-500 rounded-2xl p-6 md:p-8 shadow-md">
          <div className="flex items-center mb-6">
            <span className="bg-purple-500 text-white text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center mr-4 shadow-lg">
              7-8
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
              7-8 Yaş: Keşif ve Macera Zamanı
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            7-8 yaş, okul hayatının artık yerleştiği ve çocukların sosyal becerilerinin hızla geliştiği bir dönemdir. Bu yaştaki çocuklar kuralları anlayabilir, takım oyunlarına katılabilir ve daha karmaşık aktivitelerden keyif alabilir. Arkadaşlık ilişkileri güçlenmiştir ve partide "en yakın arkadaş grubu" kavramı öne çıkar.
          </p>

          <h3 className="text-xl font-bold text-purple-600 mb-3 mt-6">Önerilen Konseptler</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
            <li><strong>Sihirbazlık Gösterisi Teması:</strong> Profesyonel sihirbaz performansı, basit sihir numaraları öğretimi ve sihirli değnek yapımı</li>
            <li><strong>Uzay Macerası:</strong> Roket yapımı, gezegen boyama ve uzay kostümleriyle fotoğraf çekimi</li>
            <li><strong>Korsan Teması:</strong> Hazine avı, korsan haritası çizimi ve gemi yapımı atölyesi</li>
            <li><strong>Bilim Partisi:</strong> Basit kimya deneyleri, volkan patlaması ve slime yapımı</li>
            <li><strong>Bubble Show Partisi:</strong> Devasa baloncuklar, baloncuk içinde durma ve ışıklı baloncuk gösterisi</li>
          </ul>

          <h3 className="text-xl font-bold text-purple-600 mb-3">Aktivite Planı (2-2,5 Saat)</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-purple-200">
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold text-purple-600">0-15 dk:</span> Karşılama ve tanışma oyunları</li>
              <li><span className="font-semibold text-purple-600">15-45 dk:</span> <Link to="/organizasyonlar/magic-show" className="text-purple-600 hover:text-purple-800 underline font-medium">Sihirbazlık gösterisi</Link> veya bubble show</li>
              <li><span className="font-semibold text-purple-600">45-75 dk:</span> Tematik atölye çalışması (yaratıcı el işi)</li>
              <li><span className="font-semibold text-purple-600">75-100 dk:</span> Takım oyunları ve yarışmalar</li>
              <li><span className="font-semibold text-purple-600">100-120 dk:</span> Pasta kesimi ve ikramlar</li>
              <li><span className="font-semibold text-purple-600">120-150 dk:</span> Müzikli dans ve serbest oyun</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-purple-600 mb-3">Dikkat Edilmesi Gerekenler</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            7-8 yaş grubunda rekabet duygusu gelişmeye başlar. Oyunlarda "kazanan-kaybeden" dinamiği dikkatli yönetilmelidir. Herkesin ödül aldığı, katılımın ön planda olduğu oyunlar tercih edilmelidir. Ayrıca bu yaş grubunda <Link to="/organizasyonlar/kostumlu-karakterler" className="text-purple-600 hover:text-purple-800 underline font-medium">kostümlü karakter</Link> eşliğinde tematik partiler büyük ilgi görmektedir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Çocuklar artık kendi başlarına partiye gelebilir, ancak iletişim bilgilerinin velilerle paylaşılması ve acil durum planının hazır olması gerekir. Alerji bilgileri mutlaka önceden alınmalıdır. Profesyonel <Link to="/organizasyonlar/magic-show" className="text-purple-600 hover:text-purple-800 underline font-medium">sihirbazlık gösterisi</Link> hizmetimiz, 7-8 yaş grubunun en çok tercih ettiği etkinlikler arasında yer almaktadır.
          </p>
        </div>
      </section>

      {/* 9-10 Yaş Kartı */}
      <section id="yas-9-10" className="mb-12">
        <div className="bg-indigo-50 border-2 border-indigo-500 rounded-2xl p-6 md:p-8 shadow-md">
          <div className="flex items-center mb-6">
            <span className="bg-indigo-500 text-white text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center mr-4 shadow-lg">
              9-10
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700">
              9-10 Yaş: Yaratıcılık ve Takım Ruhu
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            9-10 yaş, çocukların bireysel ilgi alanlarının belirginleştiği ve sosyal grupların netleştiği bir dönemdir. Bu yaştaki çocuklar, basit konseptleri "küçük çocuklara ait" olarak görmeye başlar ve daha sofistike, meydan okuyan aktiviteler ister. Takım çalışması, strateji oyunları ve yaratıcı projeler bu yaş grubunun favorileridir.
          </p>

          <h3 className="text-xl font-bold text-indigo-600 mb-3 mt-6">Önerilen Konseptler</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
            <li><strong>Dedektif / Gizemli Olay Partisi:</strong> İpuçlarını takip ederek gizemi çözme, parmak izi analizi ve şifre kırma</li>
            <li><strong>Spor Turnuvası:</strong> Mini futbol, basketbol veya voleybol turnuvası, ödül töreni</li>
            <li><strong>Sanat Atölyesi:</strong> Tuval boyama, seramik yapımı veya takı tasarımı workshop'u</li>
            <li><strong>Kodlama / Robotik Partisi:</strong> Basit programlama oyunları, robot yapımı ve teknoloji atölyesi</li>
            <li><strong>Survival / Macera Teması:</strong> Doğada hayatta kalma ipuçları, düğüm atma, pusula kullanımı</li>
          </ul>

          <h3 className="text-xl font-bold text-indigo-600 mb-3">Aktivite Planı (2,5-3 Saat)</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-indigo-200">
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold text-indigo-600">0-20 dk:</span> Karşılama, takım oluşturma ve kuralların açıklanması</li>
              <li><span className="font-semibold text-indigo-600">20-60 dk:</span> Ana aktivite (dedektiflik oyunu, turnuva vb.)</li>
              <li><span className="font-semibold text-indigo-600">60-90 dk:</span> Yaratıcı atölye çalışması</li>
              <li><span className="font-semibold text-indigo-600">90-120 dk:</span> Takım yarışmaları ve ödül töreni</li>
              <li><span className="font-semibold text-indigo-600">120-150 dk:</span> Pasta kesimi, ikramlar ve fotoğraf çekimi</li>
              <li><span className="font-semibold text-indigo-600">150-180 dk:</span> Müzik, dans ve serbest aktivite</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-indigo-600 mb-3">Dikkat Edilmesi Gerekenler</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            9-10 yaş grubunda çocuklar "havalı" olma kaygısı taşımaya başlar. Konseptin çocuksu olmaktan çıkıp daha "büyük çocuklara uygun" bir atmosfer yaratması önemlidir. Dekorasyonda pastel tonlar yerine daha canlı ve enerjik renkler tercih edilmelidir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bu yaş grubunda <Link to="/organizasyonlar/kostumlu-karakterler" className="text-purple-600 hover:text-purple-800 underline font-medium">kostümlü karakterler</Link> hala popülerdir ancak tercih edilen karakterler değişir. Artık prensesler yerine süper kahramanlar, bilim kurgu karakterleri veya popüler kültür figürleri daha çok ilgi görür. Ayrıca çocukların kendilerinin de aktif katılımcı olduğu interaktif etkinlikler çok daha başarılı sonuçlar verir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sosyal medya farkındalığı bu yaşta başladığı için, eğlenceli fotoğraf köşeleri ve "selfie" alanları oluşturmak partiye modern bir dokunuş katar. Ancak fotoğrafların paylaşımı konusunda tüm velilerden onay alınması gerektiğini unutmayın.
          </p>
        </div>
      </section>

      {/* 11-12 Yaş Kartı */}
      <section id="yas-11-12" className="mb-12">
        <div className="bg-teal-50 border-2 border-teal-500 rounded-2xl p-6 md:p-8 shadow-md">
          <div className="flex items-center mb-6">
            <span className="bg-teal-500 text-white text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center mr-4 shadow-lg">
              11-12
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-teal-700">
              11-12 Yaş: Gençlik Enerjisi ve Bağımsızlık
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            11-12 yaş, ergenliğin eşiğinde duran ve çocukluktan gençliğe geçiş yapan kritik bir dönemdir. Bu yaştaki çocuklar kendilerini "büyük" hisseder, bağımsızlık arar ve akranlarının görüşlerine büyük önem verir. Doğum günü partisi, sosyal statü ve "cool" olma gibi kavramlarla doğrudan bağlantılıdır.
          </p>

          <h3 className="text-xl font-bold text-teal-600 mb-3 mt-6">Önerilen Konseptler</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
            <li><strong>Karaoke / DJ Partisi:</strong> Profesyonel ses sistemi, ışık efektleri, şarkı yarışması ve dans gösterisi</li>
            <li><strong>Film Gecesi / Sinema Teması:</strong> Projeksiyon ile film izleme, patlamış mısır barı ve kırmızı halı fotoğraf çekimi</li>
            <li><strong>Escape Room Teması:</strong> Bulmaca çözme, zaman yarışı ve takım stratejisi oyunları</li>
            <li><strong>Yemek / Pasta Yapımı Atölyesi:</strong> Pizza yapımı, cupcake süsleme veya sushi workshop'u</li>
            <li><strong>Neon / Glow Parti:</strong> UV ışıkları, neon boyalar, karanlıkta parlayan dekorasyon ve dans</li>
            <li><strong>Outdoor Macera:</strong> Paintball, go-kart veya tırmanma duvarı etkinliği</li>
          </ul>

          <h3 className="text-xl font-bold text-teal-600 mb-3">Aktivite Planı (3-4 Saat)</h3>
          <div className="bg-white rounded-lg p-4 mb-4 border border-teal-200">
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold text-teal-600">0-30 dk:</span> Karşılama, müzik ve serbest sosyalleşme</li>
              <li><span className="font-semibold text-teal-600">30-75 dk:</span> Ana etkinlik (karaoke, escape room, atölye vb.)</li>
              <li><span className="font-semibold text-teal-600">75-120 dk:</span> Takım oyunları, yarışmalar ve ödül töreni</li>
              <li><span className="font-semibold text-teal-600">120-150 dk:</span> Yemek, pizza ve içecek servisi</li>
              <li><span className="font-semibold text-teal-600">150-180 dk:</span> Pasta kesimi ve fotoğraf çekimi</li>
              <li><span className="font-semibold text-teal-600">180-240 dk:</span> Dans partisi, serbest oyun ve veda</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-teal-600 mb-3">Dikkat Edilmesi Gerekenler</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            11-12 yaş grubunda en büyük hata, partiyi "çocuk partisi" gibi planlamaktır. Bu yaştaki çocuklar, teen partisi konseptine daha yakındır. Dekorasyon, müzik ve aktiviteler bu perspektifle seçilmelidir. Popüler müzik, trend olan temalar ve sosyal medya dostu fotoğraf alanları büyük önem taşır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bu yaş grubunda velilerin geri planda durması ancak ulaşılabilir olması ideal dengeyi sağlar. Çocuklar kendi aralarında eğlenmek isterken, güvenlik ve düzen konusunda yetişkin gözetimi hala gereklidir. Profesyonel bir animatör veya MC (sunucu), partiyi yönetmek ve enerjiyi yüksek tutmak için mükemmel bir çözümdür.
          </p>
          <p className="text-gray-700 leading-relaxed">
            İkram menüsünde artık sadece kek ve kurabiye yeterli olmaz. Mini hamburgerler, pizza dilimleri, smoothie bar ve tematik içecekler bu yaş grubunun beklentilerini karşılar. Sağlıklı atıştırmalıkların yanında gençlerin sevdiği fast food seçeneklerinin dengeli sunumu idealdir.
          </p>
        </div>
      </section>

      {/* Müşteri Hikayesi - Arap Aile */}
      <section id="musteri-hikayesi" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          6. Müşteri Hikayesi: Dubai'den İstanbul'a Unutulmaz Bir Doğum Günü
        </h2>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 md:p-8 shadow-sm">
          <p className="text-lg font-semibold text-amber-800 mb-4">
            "Kızımızın gözlerindeki o ışıltıyı hiçbir zaman unutmayacağız."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Al-Rashid ailesi, Dubai'den tatil için İstanbul'a geldiğinde kızları Leyla'nın 7. doğum gününe sadece 5 gün kalmıştı. Farklı bir ülkede, tanıdıkları kimse olmadan bir doğum günü organizasyonu yapmak, başlangıçta onlar için büyük bir stres kaynağıydı. Aile, İstanbul'daki otellerinin konsiyerj hizmetinden bizi önermelerinin ardından bizimle iletişime geçti.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Leyla'nın annesi Fatma Hanım, kızının "Frozen" temasına bayıldığını ve Dubai'deki arkadaşlarının yapamayacağı kadar özel bir parti istediğini anlattı. Biz de hemen harekete geçtik. 5 gün içinde, İstanbul Boğazı manzaralı bir mekanda muhteşem bir "Buz Kraliçesi" temalı parti organize ettik.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Partide <Link to="/organizasyonlar/kostumlu-karakterler" className="text-amber-700 hover:text-amber-900 underline font-medium">kostümlü Elsa karakterimiz</Link> Leyla'yı kapıda karşıladı. Profesyonel <Link to="/organizasyonlar/magic-show" className="text-amber-700 hover:text-amber-900 underline font-medium">sihirbazımız</Link> buz temalı özel sihir numaraları sundu. Çocuklar kar tanesi yapımı atölyesinde kendi süslerini tasarladılar. Organizasyonda Arapca ve Turkce konuşabilen bir animatörümüz de yer aldı, böylece hem Leyla hem de partiye davet edilen yerel çocuklar iletişim sorunu yaşamadı.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Otel çevresindeki diğer Arap ailelerden çocuklar da partiye katıldı. Toplam 15 çocuk, 3 saat boyunca unutulmaz bir gün yaşadı. Leyla, partinin sonunda gözyaşları içinde annesine sarılarak "Bu hayatımın en güzel doğum günüydü" dedi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fatma Hanım, partinin ardından bize şu mesajı gönderdi: <em>"İstanbul'a tatile geldik ama kızımıza hayatının en güzel doğum gününü hediye ettik. Ekibinizin profesyonelliği, sıcaklığı ve yaratıcılığı bizi derinden etkiledi. Her detay kusursuzdu. Artık her yıl İstanbul'da doğum günü kutlamak istiyoruz!"</em>
          </p>
          <p className="text-gray-700 leading-relaxed">
            Bu deneyim, yaşa uygun planlama yapmanın ne kadar önemli olduğunun en güzel kanıtıdır. 7 yaşındaki Leyla için kostümlü karakter, sihirbazlık gösterisi ve yaratıcı atölye çalışmasının bir arada sunulması, tam olarak bu yaş grubunun ihtiyaç duyduğu dengeyi oluşturdu. Farklı kültürlerden gelen ailelerle çalışma deneyimimiz, her çocuğun dilinden anlamayı ve her ailenin beklentisini aşmayı sağlıyor.
          </p>
        </div>
      </section>

      {/* Genel İpuçları */}
      <section id="genel-ipuclari" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          7. Tüm Yaş Grupları İçin Genel İpuçları
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
            <h3 className="text-lg font-bold text-blue-700 mb-3">Mekan Seçimi</h3>
            <p className="text-gray-700 leading-relaxed">
              Mekanı çocuk sayısına göre belirleyin. Kişi başı en az 2-3 m2 alan hesaplayın. Kapalı mekanlarda havalandırma, açık mekanlarda güneşten korunma ve yağmur planı mutlaka olmalıdır. Tuvalet ve lavabo erişimi, mekan seçiminde sıklıkla göz ardı edilen ama çok kritik bir faktördür.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-200">
            <h3 className="text-lg font-bold text-green-700 mb-3">Davetiye ve İletişim</h3>
            <p className="text-gray-700 leading-relaxed">
              Davetiyeyi en az 2 hafta önceden gönderin. Partinin temasını, saatini, mekanını ve varsa özel talimatları (kostüm giyme, havuz partisiyse mayo getirme vb.) belirtin. Velilerin iletişim bilgilerini ve çocukların alerji durumlarını mutlaka önceden alın.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
            <h3 className="text-lg font-bold text-yellow-700 mb-3">İkram ve Beslenme</h3>
            <p className="text-gray-700 leading-relaxed">
              Menüyü yaş grubuna göre ayarlayın. Küçük çocuklar için porsiyonlar küçük, atıştırmalık tarzında olmalıdır. Büyük çocuklar için daha doyurucu seçenekler sunun. Şekerli yiyeceklerin miktarını dengeleyin ve sağlıklı alternatifleri cazip hale getirin. Alerjen bilgilerini etiketlerde belirtmeyi unutmayın.
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-5 border border-red-200">
            <h3 className="text-lg font-bold text-red-700 mb-3">Güvenlik ve Hijyen</h3>
            <p className="text-gray-700 leading-relaxed">
              İlk yardım çantası hazır bulundurulmalıdır. Alerji bilgileri kontrol edilmeli, acil durumlar için bir plan oluşturulmalıdır. Yüz boyama malzemelerinin dermatolojik testlerden geçmiş olmasına dikkat edin. Hijyen kurallarına uygun el yıkama istasyonları kurulmalıdır.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 rounded-xl p-5 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-700 mb-3">Hatıra ve Anı Oluşturma</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Her yaş grubu için fotoğraf ve video çekimi partinin vazgeçilmez bir parçasıdır. Profesyonel fotoğrafçı tutmak ideal olmakla birlikte, bütçe kısıtlıysa yaratıcı bir fotoğraf köşesi (photo booth) oluşturmak harika bir alternatiftir. Tematik aksesuarlar, çerçeveler ve arka planlar çocukların çok eğlenmesini sağlar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Parti sonunda her çocuğa hediye paketi (goodie bag) vermek güzel bir gelenektir. İçeriğini yaş grubuna göre ayarlayın: küçük çocuklar için sticker, boyama kitabı ve küçük oyuncak; büyük çocuklar için bilmece kitapçığı, kalem seti veya mini puzzle uygun seçeneklerdir.
          </p>
        </div>
      </section>

      {/* Zamanlama ve Bütçe Tablosu */}
      <section id="zamanlama-tablosu" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          8. Yaşa Göre Zamanlama ve Bütçe Tablosu
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Aşağıdaki tablo, her yaş grubu için ideal parti parametrelerini özetlemektedir. Bu değerler ortalama verilere dayanmakta olup, bireysel ihtiyaçlara göre değişiklik gösterebilir.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr>
                <th className="bg-gray-800 text-white p-3 text-left">Parametre</th>
                <th className="bg-pink-500 text-white p-3 text-center">5-6 Yaş</th>
                <th className="bg-purple-500 text-white p-3 text-center">7-8 Yaş</th>
                <th className="bg-indigo-500 text-white p-3 text-center">9-10 Yaş</th>
                <th className="bg-teal-500 text-white p-3 text-center">11-12 Yaş</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="bg-gray-50 p-3 font-semibold">Parti Süresi</td>
                <td className="bg-pink-50 p-3 text-center">1,5-2 saat</td>
                <td className="bg-purple-50 p-3 text-center">2-2,5 saat</td>
                <td className="bg-indigo-50 p-3 text-center">2,5-3 saat</td>
                <td className="bg-teal-50 p-3 text-center">3-4 saat</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="bg-gray-50 p-3 font-semibold">İdeal Çocuk Sayısı</td>
                <td className="bg-pink-50 p-3 text-center">8-12</td>
                <td className="bg-purple-50 p-3 text-center">12-18</td>
                <td className="bg-indigo-50 p-3 text-center">15-20</td>
                <td className="bg-teal-50 p-3 text-center">15-25</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="bg-gray-50 p-3 font-semibold">Dikkat Süresi</td>
                <td className="bg-pink-50 p-3 text-center">15-20 dk</td>
                <td className="bg-purple-50 p-3 text-center">20-30 dk</td>
                <td className="bg-indigo-50 p-3 text-center">30-40 dk</td>
                <td className="bg-teal-50 p-3 text-center">40-50 dk</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="bg-gray-50 p-3 font-semibold">Aktivite Değişim Sıklığı</td>
                <td className="bg-pink-50 p-3 text-center">Her 15 dk</td>
                <td className="bg-purple-50 p-3 text-center">Her 20 dk</td>
                <td className="bg-indigo-50 p-3 text-center">Her 25-30 dk</td>
                <td className="bg-teal-50 p-3 text-center">Her 30-45 dk</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="bg-gray-50 p-3 font-semibold">En Popüler Etkinlik</td>
                <td className="bg-pink-50 p-3 text-center">Palyaço</td>
                <td className="bg-purple-50 p-3 text-center">Sihirbazlık</td>
                <td className="bg-indigo-50 p-3 text-center">Takım Oyunları</td>
                <td className="bg-teal-50 p-3 text-center">Karaoke / DJ</td>
              </tr>
              <tr>
                <td className="bg-gray-50 p-3 font-semibold">Veli Katılımı</td>
                <td className="bg-pink-50 p-3 text-center">Gerekli</td>
                <td className="bg-purple-50 p-3 text-center">Önerilen</td>
                <td className="bg-indigo-50 p-3 text-center">İsteğe Bağlı</td>
                <td className="bg-teal-50 p-3 text-center">Arka Planda</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 text-sm mt-4 italic">
          * Bu tablo genel öneriler içermektedir. Her çocuğun bireysel gelişim hızı farklı olduğundan, yukarıdaki değerler referans olarak kullanılmalıdır.
        </p>
      </section>

      {/* Sonuç */}
      <section id="sonuc" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          9. Sonuç ve Öneriler
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Doğum günü partisi planlamak, ilk bakışta karmaşık görünebilir ancak doğru stratejiyle hem çocuğunuz hem de siz unutulmaz bir deneyim yaşarsınız. Bu rehberde paylaştığımız yaşa göre konsept önerileri, yılların deneyiminin ve binlerce başarılı organizasyonun süzgecinden geçmiş bilgilerdir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Her yaş grubunun kendine özgü dinamikleri olduğunu unutmayın. 5-6 yaşın sihirli dünyasından, 11-12 yaşın enerjik atmosferine kadar her aşamada doğru planlama ile çocuğunuzun yüzündeki gülümsemeyi garantileyebilirsiniz. Önemli olan, çocuğunuzun bireysel ilgi alanlarını konsepte yansıtmak ve yaşına uygun aktiviteler sunmaktır.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Profesyonel destek almak, organizasyonun her aşamasında size büyük kolaylık sağlar. <Link to="/organizasyonlar/kostumlu-karakterler" className="text-blue-600 hover:text-blue-800 underline font-medium">Kostümlü karakter</Link> hizmetinden <Link to="/organizasyonlar/magic-show" className="text-blue-600 hover:text-blue-800 underline font-medium">sihirbazlık gösterisine</Link>, <Link to="/organizasyonlar/palyaco-kiralama" className="text-blue-600 hover:text-blue-800 underline font-medium">palyaço kiralama</Link> seçeneğinden full paket organizasyona kadar geniş hizmet yelpazemizle her yaş grubuna özel çözümler sunuyoruz.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Unutmayın, en güzel parti "en pahalı parti" değil, çocuğunuzun kalbine dokunan, arkadaşlarıyla birlikte keyifli vakit geçirdiği ve yıllar sonra bile gülümseyerek hatırlayacağı partidir. Doğru yaş grubuna uygun konsept seçimi, bu hedefe ulaşmanın ilk ve en önemli adımıdır.
        </p>
      </section>

      {/* CTA Bölümü */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Çocuğunuzun Yaşına Özel Doğum Günü Organizasyonu
          </h2>
          <p className="text-lg mb-6 opacity-95">
            5-12 yaş arasındaki her çocuk için yaşa uygun, profesyonel ve unutulmaz doğum günü partileri organize ediyoruz. Hemen bizimle iletişime geçin, ücretsiz konsept danışmanlığı alalım!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+905307309009"
              className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              05307309009
            </a>
            <a
              href="https://wa.me/905307309009?text=Merhaba,%20çocuğumun%20doğum%20günü%20organizasyonu%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ile Ulaşın
            </a>
          </div>
          <p className="mt-4 text-sm opacity-80">
            7/24 ulaşabilirsiniz. Ücretsiz keşif ve fiyat teklifi sunuyoruz.
          </p>
        </div>
      </section>
    </>
  )

  return (
    <BlogDetail
      slug="yasa-gore-dogum-gunu-konsepti"
      faqData={faqData}
      relatedServicePath={relatedServicePath}
      relatedServiceName={relatedServiceName}
    >
      {content}
    </BlogDetail>
  )
}

export default YasaGoreDogumGunuKonsepti
