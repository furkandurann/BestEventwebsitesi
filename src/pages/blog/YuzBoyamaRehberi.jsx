import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const faqData = [
  {
    question: 'Yüz boyama boyaları zararlı mı?',
    answer: 'Hayır, profesyonel yüz boyama hizmetlerimizde kullanılan tüm boyalar FDA onaylı, hipoalerjenik ve su bazlıdır. Dermatolojik olarak test edilmiş bu ürünler çocuk cildine tamamen uygun olup, ağır metal, paraben ve toksin içermez. Uluslararası güvenlik sertifikalarına sahip markalar tercih ediyoruz. Boyalar kolay çıkar, ciltte tahriş yapmaz ve alerjik reaksiyon riski minimumdur.'
  },
  {
    question: 'Yüz boyama kaç yaşından itibaren yapılabilir?',
    answer: 'Yüz boyama genellikle 3 yaş ve üzeri çocuklara uygulanmaktadır. 2 yaşındaki çocuklar için kol veya el boyama gibi alternatif uygulamalar önerilir çünkü küçük çocuklar yüzlerine dokunulmasından rahatsız olabilir. 3 yaş ve üzeri çocuklar ise genellikle işlemi çok eğlenceli bulur ve sabırla oturabilir. Sanatçılarımız her yaş grubuna özel yaklaşım sergiler.'
  },
  {
    question: 'Boyalar ne kadar süre dayanır?',
    answer: 'Profesyonel yüz boyama boyaları ortalama 4-8 saat dayanır. Dayanıklılık; kullanılan boyanın kalitesine, hava koşullarına, çocuğun terleme durumuna ve aktivite seviyesine göre değişir. Sıcak havalarda veya yoğun fiziksel aktivitelerde süre kısalabilir. Boyalar su ve sabunla kolayca çıkarılır, özel bir temizleyiciye gerek yoktur.'
  },
  {
    question: 'Alerji testi yapılır mı?',
    answer: 'Evet, profesyonel yüz boyama sanatçılarımız uygulama öncesinde mutlaka küçük bir alanda (genellikle kulak arkası veya bilek içi) test yapar. 5-10 dakika beklenir ve herhangi bir reaksiyon olup olmadığı kontrol edilir. Bilinen alerjisi olan çocukların aileleri öncelikle bilgi vermeli ve gerekirse doktor raporu sunmalıdır. Güvenlik bizim için her zaman önceliktir.'
  },
  {
    question: 'Yüz boyama sanatçısı kaç çocuğa hizmet verebilir?',
    answer: 'Bir profesyonel yüz boyama sanatçısı saatte ortalama 8-12 çocuğa hizmet verebilir. Basit tasarımlar (kelebek, yıldız) 3-5 dakika sürerken, detaylı tasarımlar (ejderha, kaplan maskesi) 8-12 dakika alabilir. 30 çocuklu bir parti için tek sanatçı ile 2-3 saatlik bir süre planlanmalı veya 2 sanatçı görevlendirilmelidir. Etkinlik öncesi çocuk sayısını bildirmeniz en doğru planlama için önemlidir.'
  },
  {
    question: 'Yüz boyama kiralama fiyatı nedir?',
    answer: 'Yüz boyama kiralama fiyatları etkinliğin süresine, çocuk sayısına, tasarım karmaşıklığına ve sanatçı sayısına göre değişir. Standart 2 saatlik bir organizasyon için fiyatlar makul seviyededir. Doğum günü paketi, palyaço veya kostümlü karakter gösteri hizmetleriyle birleştirildiğinde özel indirimler uygulanır. Güncel fiyat bilgisi ve size özel teklif için WhatsApp veya telefon üzerinden bize ulaşın.'
  }
]

const relatedServicePath = '/organizasyonlar/yuz-boyama'
const relatedServiceName = 'Profesyonel Yüz Boyama'

const popularDesigns = [
  { icon: '🦋', name: 'Kelebek', difficulty: 'Kolay', time: '3-5 dk', desc: 'Renkli kanatlar ve pul pul desenlerle süslenmiş kelebek tasarımı. Özellikle kız çocukları tarafından en çok tercih edilen modeldir.' },
  { icon: '🐯', name: 'Kaplan', difficulty: 'Orta', time: '6-8 dk', desc: 'Turuncu-siyah çizgiler, burun detayı ve bıyıklarla gerçekçi kaplan yüzü. Erkek çocukların favorisi olan bu tasarım cesaret ve güç simgeler.' },
  { icon: '👑', name: 'Prenses Tacı', difficulty: 'Kolay', time: '4-6 dk', desc: 'Alna işlenmiş parlak taç, yıldızlar ve simli detaylar. Pembe, mor ve altın renklerle süslenen bu tasarım küçük prenseslerin gözdesidir.' },
  { icon: '🕷️', name: 'Örümcek Adam Maskesi', difficulty: 'Orta', time: '7-10 dk', desc: 'Kırmızı-siyah ağ deseni ve göz çerçeveleriyle ikonik Spiderman maskesi. Süper kahraman temasının vazgeçilmez parçası olan bu tasarım büyük ilgi görür.' },
  { icon: '🦄', name: 'Unicorn', difficulty: 'Zor', time: '8-12 dk', desc: 'Gökkuşağı renkleri, parlak boynuz, çiçekler ve yıldızlarla bezeli unicorn tasarımı. Detaylı ve gösterişli bu çalışma gerçek bir sanat eseridir.' },
  { icon: '🐉', name: 'Ejderha', difficulty: 'Zor', time: '10-15 dk', desc: 'Yeşil pullar, ateş efekti, keskin dişler ve kanatlarla tam yüz ejderha boyaması. En deneyimli sanatçıların uyguladığı bu tasarım çocukları büyüler.' }
]

const YuzBoyamaRehberi = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const blogContent = (
    <div className="prose prose-lg max-w-none">

      {/* İçindekiler */}
      <div className="bg-white border-l-4 border-teal-600 rounded-r-xl p-6 mb-10 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="mr-2">📋</span> İçindekiler
        </h3>
        <nav className="space-y-2">
          <a href="#yuz-boyama-nedir" className="block text-teal-600 hover:text-teal-700 font-medium transition-colors">
            1. Yüz Boyama Nedir? Profesyonel Face Painting Sanatı
          </a>
          <a href="#guvenli-boya-secimi" className="block text-teal-600 hover:text-teal-700 font-medium transition-colors">
            2. Güvenli Boya Seçimi: Çocuk Cildine Uygun Ürünler
          </a>
          <a href="#populer-tasarimlar" className="block text-teal-600 hover:text-teal-700 font-medium transition-colors">
            3. En Popüler Yüz Boyama Tasarımları
          </a>
          <a href="#sanatci-kiralama" className="block text-teal-600 hover:text-teal-700 font-medium transition-colors">
            4. Yüz Boyama Sanatçısı Kiralama: Nelere Dikkat Etmeli?
          </a>
          <a href="#etkinlik-planlamasi" className="block text-teal-600 hover:text-teal-700 font-medium transition-colors">
            5. Etkinlik Planlaması: Kaç Çocuk, Kaç Dakika?
          </a>
          <a href="#hizmet-kombinasyonu" className="block text-teal-600 hover:text-teal-700 font-medium transition-colors">
            6. Yüz Boyama + Diğer Hizmetler Kombinasyonu
          </a>
          <a href="#sss" className="block text-teal-600 hover:text-teal-700 font-medium transition-colors">
            7. Sık Sorulan Sorular
          </a>
        </nav>
      </div>

      {/* Giriş Paragrafı */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Yüz boyama, çocuk etkinliklerinin en renkli ve unutulmaz aktivitelerinden biridir. Doğum günü partilerinden okul
        şenliklerine kadar her türlü organizasyonda büyük ilgi gören face painting sanatı, çocukların hayallerini gerçeğe
        dönüştürür. İstanbul genelinde profesyonel yüz boyama kiralama hizmeti sunan BestEvent olarak, bu rehberde güvenli
        boya seçiminden etkinlik planlamasına kadar her şeyi bulacaksınız.
      </p>

      {/* İpucu Kutusu */}
      <div className="bg-teal-50 border-l-4 border-teal-600 rounded-r-xl p-6 mb-10">
        <h4 className="text-teal-800 font-bold text-lg mb-2 flex items-center">
          <span className="mr-2">💡</span> Profesyonel İpucu
        </h4>
        <p className="text-teal-700 leading-relaxed">
          Yüz boyama organizasyonu planlarken çocuk sayısını önceden belirleyin. Her çocuk için ortalama 5-8 dakika ayırın ve
          en az 2 hafta önceden rezervasyon yapın. Profesyonel bir gösteri deneyimi için deneyimli sanatçılarla çalışmak,
          hem güvenlik hem de kalite açısından en doğru tercihtir.
        </p>
      </div>

      {/* Bölüm 1: Yüz Boyama Nedir? */}
      <section id="yuz-boyama-nedir" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-100">
          1. Yüz Boyama Nedir? Profesyonel Face Painting Sanatı
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Yüz boyama (face painting), insan yüzüne özel boyalarla yapılan geçici sanatsal uygulamadır. Binlerce yıllık geçmişe
          sahip bu sanat günümüzde çocuk etkinliklerinin, festivallerin ve özel organizasyonların vazgeçilmez eğlence unsuru
          haline gelmiştir. Profesyonel face painting; sanatsal yetenek, renk teorisi ve çocuk psikolojisi gibi pek çok
          disiplini bir araya getiren kapsamlı bir alandır.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          BestEvent olarak sunduğumuz profesyonel yüz boyama hizmetinde, sanatçılarımız uluslararası face painting
          sertifikalarına sahiptir. Her biri yıllık ortalama 200'den fazla etkinlikte görev alır ve sürekli olarak yeni teknikler
          konusunda kendini geliştirir. Yüz boyama kiralama hizmetimiz, sadece boyama değil, tam bir görsel gösteri deneyimi sunar.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Face painting sanatının temel teknikleri arasında sponge (sünger) tekniği, fırçayla çizim, stencil (şablon) kullanımı
          ve split-cake (çoklu renk) uygulaması yer alır. Organizasyonlarımızda kullandığımız profesyonel ekipmanlar, her
          tasarımın en ince detayına kadar mükemmel olmasını garanti eder.
        </p>
      </section>

      {/* Bölüm 2: Güvenli Boya Seçimi */}
      <section id="guvenli-boya-secimi" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-100">
          2. Güvenli Boya Seçimi: Çocuk Cildine Uygun Ürünler
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Çocukların hassas cildine uygulanan boyaların güvenliği, yüz boyama organizasyonunun en kritik unsurudur. FDA
          (Amerikan Gıda ve İlaç Dairesi) onaylı, AB kozmetik yönetmeliğine uygun ve dermatolojik olarak test edilmiş
          ürünler kullanılmalıdır. Güvenli yüz boyası özellikleri: su bazlı formül, hipoalerjenik içerik, paraben
          içermeyen yapı, ağır metal bulundurmayan bileşim ve kolay temizlenebilirlik.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Piyasada öne çıkan profesyonel yüz boyası markaları arasında Snazaroo, Wolfe FX, Diamond FX, Global Body Art ve TAG
          Body Art yer alır. BestEvent olarak organizasyonlarımızda yalnızca bu premium markaların ürünlerini tercih ediyoruz.
        </p>
        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5 mb-4">
          <h4 className="text-red-800 font-bold mb-2">Uyarı: Bunlardan Kaçınmalısınız</h4>
          <p className="text-red-700 leading-relaxed">
            Ucuz akrilik boyalar, guaj boyalar veya etiketinde "yüz için uygun" ibaresi olmayan ürünler asla çocuk yüzüne
            uygulanmamalıdır. Bu tür ürünler ciddi cilt reaksiyonlarına ve alerjiye neden olabilir. Kiralama hizmeti alırken
            mutlaka kullanılan boya markalarını sorun ve sertifikaları kontrol edin.
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Profesyonel setlerde standart renklerin yanı sıra neon renkler, metalik pigmentler, simli boyalar ve UV ışığında
          parlayan özel boyalar da bulunur. Sim kullanımı için kozmetik sınıfında, göz çevresi için güvenli sim tercih
          edilmelidir. Profesyonel kiralama hizmetleri her zaman en güvenli malzemeleri kullanır.
        </p>
      </section>

      {/* Bölüm 3: Popüler Tasarımlar */}
      <section id="populer-tasarimlar" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-100">
          3. En Popüler Yüz Boyama Tasarımları
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Profesyonel sanatçılarımız 100'den fazla farklı tasarım repertuarına sahiptir. İşte organizasyonlarda en çok
          talep edilen ve gösterisi en etkili olan modeller:
        </p>

        {/* Tasarım Galerisi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {popularDesigns.map((design, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{design.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{design.name}</h4>
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        design.difficulty === 'Kolay' ? 'bg-green-100 text-green-700' :
                        design.difficulty === 'Orta' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {design.difficulty}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700 font-semibold">
                        {design.time}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{design.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Mevsimsel modeller de çok popülerdir: Cadılar Bayramı'nda iskelet ve vampir, yılbaşında kar tanesi, yazın deniz
          kızı ve korsan tasarımları çocuklar tarafından çok sevilir. <Link to="/blog/yuz-boyama-dogum-gunu-organizasyonu" className="text-teal-600 hover:text-teal-700 font-semibold underline">Doğum günü organizasyonlarında yüz boyama</Link> ise
          tematik partilerde en çok tercih edilen aktivitedir.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Sanatçılarımız etkinlik öncesinde çocuklara katalog gösterir. Özel istek tasarımlar da mümkündür; çocuğun favori
          karakteri profesyonel sanatçımız tarafından anında yorumlanır ve uygulanır.
        </p>
      </section>

      {/* Bölüm 4: Sanatçı Kiralama */}
      <section id="sanatci-kiralama" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-100">
          4. Yüz Boyama Sanatçısı Kiralama: Nelere Dikkat Etmeli?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Yüz boyama sanatçısı kiralama süreci, başarılı bir organizasyonun temel taşlarından biridir. Doğru sanatçıyı
          seçmek hem çocukların güvenliğini hem de etkinliğin kalitesini doğrudan etkiler.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Portfolyo incelemesi:</strong> Sanatçının önceki çalışma örneklerini mutlaka inceleyin. Farklı tasarımlar
          ve zorluk seviyelerindeki işler hakkında fikir edinmek önemlidir. <strong>Hijyen protokolleri:</strong> Her çocuk
          için temiz sünger ve fırça kullanılmalı, eller dezenfekte edilmeli ve tek kullanımlık aplikatörler tercih edilmelidir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Çocuklarla iletişim becerisi:</strong> Sabır, espri anlayışı ve çocuk psikolojisi bilgisi profesyonel bir
          sanatçıda olması gereken özelliklerdir. BestEvent sanatçıları çocuk gelişimi konusunda eğitim almış deneyimli
          profesyonellerdir. <strong>Sigorta ve yasal gereklilikler:</strong> Kiralama hizmeti alırken sanatçının mesleki
          sorumluluk sigortasını ve kullanılan ürünlerin güvenlik sertifikalarını kontrol edin.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Ekipman kalitesi:</strong> Profesyonel sanatçıların premium boyalar, profesyonel fırçalar, aynalı çalışma
          istasyonu ve yedek boya stoğu içeren kendi ekipman setleri vardır. Detaylı bilgi için{' '}
          <Link to="/blog/kostumlu-karakter-kiralama-rehberi" className="text-teal-600 hover:text-teal-700 font-semibold underline">
            kostümlü karakter kiralama rehberimizi
          </Link> de inceleyebilirsiniz.
        </p>
      </section>

      {/* Bölüm 5: Etkinlik Planlaması */}
      <section id="etkinlik-planlamasi" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-100">
          5. Etkinlik Planlaması: Kaç Çocuk, Kaç Dakika?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Başarılı bir yüz boyama organizasyonu için doğru zamanlama ve kapasite planlaması şart. <strong>Zaman hesaplaması:</strong> Basit
          tasarımlar için çocuk başına 3-5 dakika, orta zorlukta tasarımlar için 6-8 dakika, detaylı tasarımlar için 10-15
          dakika planlanmalıdır. Ara geçişler ve temizlik için ek 1-2 dakika da hesaba katılmalıdır.
        </p>

        {/* Kapasite Tablosu */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-4 py-3 text-left font-semibold">Çocuk Sayısı</th>
                <th className="px-4 py-3 text-left font-semibold">Sanatçı</th>
                <th className="px-4 py-3 text-left font-semibold">Süre</th>
                <th className="px-4 py-3 text-left font-semibold">Tasarım</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['10-15 çocuk', '1 sanatçı', '1-1.5 saat', 'Basit-Orta'],
                ['15-25 çocuk', '1-2 sanatçı', '1.5-2 saat', 'Basit-Orta'],
                ['25-40 çocuk', '2 sanatçı', '2-3 saat', 'Basit-Orta-Detaylı'],
                ['40+ çocuk', '3+ sanatçı', '3+ saat', 'Karma']
              ].map((row, i) => (
                <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? 'bg-gray-50' : ''}`}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          <strong>Mekan düzenlemesi:</strong> İyi aydınlatılmış, havadar bir alan seçin. Sanatçı için masa, sandalye, ayna
          ve su kaynağı hazırlayın. <strong>Kuyruk yönetimi:</strong> Bekleme sırasındaki çocuklar için boyama sayfası
          istasyonu, sosis balon yapımı veya küçük oyunlar planlayarak bekleme süresini eğlenceli hale getirin.
        </p>
      </section>

      {/* Bölüm 6: Hizmet Kombinasyonu */}
      <section id="hizmet-kombinasyonu" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-100">
          6. Yüz Boyama + Diğer Hizmetler Kombinasyonu
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Yüz boyama tek başına harika bir aktivite olsa da, diğer eğlence hizmetleriyle birleştiğinde etkinliğin etkisi
          katlanıyor. <strong>Yüz Boyama + Palyaço:</strong> En klasik kombinasyon. Palyaço gösteri yaparken yüz boyama
          sanatçısı çocukları sırayla boyar. Sosis balon gösterisi ve sihirbazlık numaraları ile yüz boyama birbirini tamamlar.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Yüz Boyama + Kostümlü Karakter:</strong> Favori çizgi film karakterinin canlı olarak geldiği etkinlikte
          aynı temanın yüz boyaması muhteşem bir deneyim yaratır.{' '}
          <Link to="/blog/kostumlu-karakter-kiralama-rehberi" className="text-teal-600 hover:text-teal-700 font-semibold underline">
            Kostümlü karakter kiralama seçeneklerimizi
          </Link> inceleyerek organizasyonunuza uygun karakteri seçebilirsiniz.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Yüz Boyama + Doğum Günü Paketi:</strong> Pasta kesimi, dekorasyon, müzik, animasyon ve yüz boyama
          bir arada sunulduğunda aileler organizasyon stresi yaşamaz.{' '}
          <Link to="/blog/yuz-boyama-dogum-gunu-organizasyonu" className="text-teal-600 hover:text-teal-700 font-semibold underline">
            Yüz boyamalı doğum günü partisi rehberimizi
          </Link> de okumanızı tavsiye ederiz.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Yüz Boyama + Bubble Show / Sihirbazlık:</strong> Büyük etkinliklerde sahne gösterisi ve yüz boyama paralel
          çalışabilir. Bu rotasyon sistemi büyük organizasyonlarda her çocuğun tüm aktivitelerden faydalanmasını sağlar.
        </p>
      </section>

      {/* Gerçek Hikaye Kutusu */}
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-xl p-6 mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
          <span className="mr-2">📖</span> Gerçek Hikaye: Eda'nın 6. Yaş Doğum Günü
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Kadıköy'de düzenlediğimiz Eda'nın 6. yaş doğum günü partisinde 28 çocuğun katıldığı bir organizasyon
          gerçekleştirdik. "Sihirli Orman" temasında 2 profesyonel sanatçımız görev aldı. Her çocuk ortalama 6-7
          dakikada boyanarak toplam 2 saatte 28 çocuğun tamamı renklendirildi.
        </p>
        <p className="text-gray-700 leading-relaxed italic">
          "Eda kelebek boyamasını o kadar beğendi ki akşama kadar yüzünü yıkamak istemedi. Tüm aileler çok memnun kaldı,
          bir sonraki partide de kesinlikle BestEvent ile çalışacağız." - Eda'nın Annesi, Kadıköy
        </p>
      </div>

      {/* Bölüm 7: SSS */}
      <section id="sss" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-100">
          7. Sık Sorulan Sorular
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start">
                <span className="text-teal-600 mr-2 font-bold">S{index + 1}:</span>
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hizmet CTA Kutusu */}
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Profesyonel Yüz Boyama Hizmeti mi Arıyorsunuz?</h3>
            <p className="text-gray-700 leading-relaxed">
              İstanbul genelinde profesyonel yüz boyama kiralama hizmeti sunuyoruz. FDA onaylı boyalar, deneyimli
              sanatçılar ve uygun fiyatlarla gösteri dolu bir organizasyon planlayalım.
            </p>
          </div>
          <Link to="/organizasyonlar/yuz-boyama" className="inline-block bg-teal-600 text-white font-bold px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex-shrink-0">
            Hizmeti İncele →
          </Link>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Çocuklarınızın Yüzünü Renklendirmeye Hazır mısınız?</h3>
        <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
          Profesyonel yüz boyama kiralama hizmetimizle organizasyonunuzu unutulmaz kılın. Deneyimli sanatçılarımız ve
          güvenli boyalarımızla her çocuğun yüzünde gösteri ve mutluluk garanti ediyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+905307309009"
            className="inline-flex items-center justify-center bg-white text-teal-700 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +90 530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Y%C3%BCz%20boyama%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp ile Ulaşın
          </a>
        </div>
      </div>

    </div>
  )

  return (
    <BlogDetail
      slug="yuz-boyama-kiralama-rehberi"
      faqData={faqData}
      relatedServicePath={relatedServicePath}
      relatedServiceName={relatedServiceName}
    >
      {blogContent}
    </BlogDetail>
  )
}

export default YuzBoyamaRehberi
