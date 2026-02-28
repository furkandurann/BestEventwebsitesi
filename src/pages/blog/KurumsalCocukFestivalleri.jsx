import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const KurumsalCocukFestivalleri = () => {
  const faqData = [
    {
      question: 'Kurumsal çocuk festivali için minimum kaç çocuk gerekli?',
      answer: 'Kurumsal çocuk festivalleri genellikle minimum 50 çocuk katılımıyla planlanır. Ancak 30 çocuktan itibaren uygun ölçekte bir etkinlik düzenlenebilir. 50-100 çocuk orta ölçekli, 100-200 çocuk büyük ölçekli, 200+ çocuk ise festival formatında değerlendirilir. Katılım sayısına göre aktivite istasyonu sayısı, personel kadrosu ve alan düzeni belirlenir.'
    },
    {
      question: 'Kurumsal etkinlik için ne kadar süre öncesinden planlama başlatılmalı?',
      answer: 'İdeal planlama süresi 6-8 haftadır. Bu süre içinde ihtiyaç analizi, bütçe onayı, mekan belirleme, aktivite seçimi, personel planlaması ve lojistik hazırlıklar tamamlanır. Acil durumlarda 3 haftalık sürede de organizasyon yapılabilir ancak seçenekler sınırlı kalabilir. 200+ çocukluk büyük festivaller için en az 8 hafta öncesinden başlanması tavsiye edilir.'
    },
    {
      question: 'Kurumsal çocuk festivali bütçesi nasıl hesaplanır?',
      answer: 'Bütçe hesaplamasında kişi başı maliyet yaklaşımı kullanılır. Temel paket kişi başı belirli bir ücretle başlar ve aktivite çeşitliliğine, personel sayısına, süsleme kapsamına ve ikram seçeneklerine göre değişir. Genellikle toplam bütçenin yüzde kırkı aktivitelere, yüzde yirmisi personele, yüzde yirmisi dekorasyona ve yüzde yirmisi lojistik ile ikrama ayrılır.'
    },
    {
      question: 'Hangi aktiviteler kurumsal çocuk festivallerine en uygun?',
      answer: 'Kurumsal çocuk festivallerinde en çok tercih edilen aktiviteler palyaço gösterisi, bubble show, yüz boyama, pamuk şeker arabası, kostümlü karakter gösterileri ve sihirbaz gösterisidir. Büyük festivallerde bunların tümü farklı istasyonlarda aynı anda sunulabilir. Yaş gruplarına göre aktivite dağılımı yapılması çocukların maksimum eğlenmesini sağlar.'
    },
    {
      question: 'Açık hava kurumsal pikniğinde çocuk alanı nasıl planlanır?',
      answer: 'Açık hava pikniklerinde çocuk alanı ana etkinlik alanından ayrı, güvenli bir bölgede konumlandırılır. Gölgelik veya çadır ile güneşten korunma sağlanır. Alan girişinde kayıt noktası ve bileklik sistemi uygulanır. Aktivite istasyonları arası yeterli mesafe bırakılır. İlk yardım noktası çocuk alanına yakın konumda olmalıdır. Her 15 çocuk için en az bir gözetim personeli planlanır.'
    },
    {
      question: 'Kurumsal çocuk festivali için hangi mevsim en uygun?',
      answer: 'İstanbul iklim şartları göz önüne alındığında Nisan-Haziran ve Eylül-Ekim dönemleri açık hava festivalleri için idealdir. 23 Nisan, 1 Haziran Çocuk Bayramı ve yılbaşı dönemleri en yoğun talep gören tarihlerdir. Kış aylarında kapalı mekanlarda AVM, otel konferans salonu veya şirket içi alanlarda etkinlik düzenlenebilir. Yaz pikniği formatında Haziran ve Eylül ayları tercih edilmelidir.'
    }
  ]

  const content = (
    <>
      {/* Executive Summary */}
      <div className="bg-slate-100 rounded-xl p-8 mb-10 border border-slate-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Kurumsal Rapor Özeti</h2>
            <p className="text-slate-500 text-sm">BestEvent | Kurumsal Etkinlik Analizi</p>
          </div>
        </div>
        <div className="border-t border-slate-300 pt-4">
          <p className="text-slate-700 leading-relaxed mb-4">
            Kurumsal firmalar, çalışan bağlılığı ve memnuniyetini artırmak için çocuk festivallerini stratejik bir insan kaynakları aracı olarak kullanmaktadır. Bu raporda, üç farklı ölçekte gerçekleştirilen kurumsal çocuk festivallerinin planlama süreci, bütçe analizi, aktivite seçimi ve ölçülebilir sonuçları incelenmektedir.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 text-center border border-slate-200">
              <p className="text-3xl font-bold text-slate-800">3</p>
              <p className="text-slate-500 text-sm">Vaka Çalışması</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-slate-200">
              <p className="text-3xl font-bold text-slate-800">600+</p>
              <p className="text-slate-500 text-sm">Toplam Çocuk Katılımcı</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-slate-200">
              <p className="text-3xl font-bold text-slate-800">%94</p>
              <p className="text-slate-500 text-sm">Ortalama Memnuniyet</p>
            </div>
          </div>
        </div>
      </div>

      {/* İçindekiler */}
      <div className="bg-slate-50 rounded-xl p-6 mb-8 border-l-4 border-slate-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#giris" className="text-slate-700 hover:text-blue-700 font-semibold">1. Giriş: Kurumsal Çocuk Festivalleri Neden Önemli?</a></li>
          <li><a href="#case-study-1" className="text-slate-700 hover:text-blue-700 font-semibold">2. Vaka Çalışması 1: 23 Nisan Çocuk Festivali (200 Çocuk)</a></li>
          <li><a href="#case-study-2" className="text-slate-700 hover:text-blue-700 font-semibold">3. Vaka Çalışması 2: Yılbaşı Aile Günü (100 Çocuk)</a></li>
          <li><a href="#case-study-3" className="text-slate-700 hover:text-blue-700 font-semibold">4. Vaka Çalışması 3: Yaz Pikniği Çocuk Alanı (300 Çocuk)</a></li>
          <li><a href="#timeline" className="text-slate-700 hover:text-blue-700 font-semibold">5. Etkinlik Planlama Timeline: 6 Haftalık Hazırlık Süreci</a></li>
          <li><a href="#butce" className="text-slate-700 hover:text-blue-700 font-semibold">6. Bütçe Planlama: Kişi Başı Maliyet Analizi</a></li>
          <li><a href="#aktivite-menusu" className="text-slate-700 hover:text-blue-700 font-semibold">7. Aktivite Menüsü: Kurumsal Etkinliklere Uygun Seçenekler</a></li>
          <li><a href="#lojistik" className="text-slate-700 hover:text-blue-700 font-semibold">8. Lojistik Planlama: Alan Düzeni, Güvenlik, Personel</a></li>
          <li><a href="#roi" className="text-slate-700 hover:text-blue-700 font-semibold">9. ROI Metrikleri: Çalışan Memnuniyeti ve Şirket Bağlılığı</a></li>
          <li><a href="#sss" className="text-slate-700 hover:text-blue-700 font-semibold">10. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Bölüm 1: Giriş */}
      <h2 id="giris" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Kurumsal Çocuk Festivalleri Neden Önemli?
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Günümüzde kurumsal firmalar, çalışan memnuniyetini ve şirket bağlılığını artırmak için geleneksel motivasyon yöntemlerinin ötesine geçmek zorunda. Çalışan deneyimi artık sadece maaş ve yan haklarla sınırlı değil; çalışanların ailelerini de kapsayan bütüncül bir yaklaşım gerektiriyor. İşte tam da bu noktada kurumsal çocuk festivalleri devreye giriyor. Bir firmanın çalışanlarının çocukları için özel bir festival düzenlemesi, hem çalışan hem de ailesi üzerinde derin bir etki bırakıyor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Araştırmalar gösteriyor ki, aile dostu etkinlikler düzenleyen firmalar çalışan bağlılığı oranlarında yüzde otuz beş artış, işe devam oranlarında yüzde yirmi iyileşme ve çalışan memnuniyet anketlerinde belirgin yükseliş görüyor. Kurumsal çocuk festivalleri, şirket kültürünün somut bir yansıması olarak hem mevcut çalışanları memnun ediyor hem de yetenek çekmede rekabet avantajı sağlıyor.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 mb-3">Kurumsal Çocuk Festivallerinin Stratejik Faydaları:</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">1.</span>
            <span><strong>Çalışan Bağlılığı:</strong> Aile dostu etkinlikler, çalışanın şirkete olan duygusal bağını güçlendirir.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">2.</span>
            <span><strong>Takım Ruhu:</strong> Farklı departmanlardan çalışanlar ve aileleri bir araya gelerek sosyal bağ kurar.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">3.</span>
            <span><strong>İşveren Markası:</strong> Sosyal medya paylaşımlarında organik olarak şirketin aile dostu imajı yayılır.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">4.</span>
            <span><strong>Çalışan Sadakati:</strong> Çocuklarına değer veren bir şirket, çalışanların gözünde özel bir yere sahip olur.</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        İstanbul'daki büyük holdinglerden orta ölçekli firmalara kadar pek çok kurum, yıllık etkinlik takvimine çocuk festivallerini dahil ediyor. 23 Nisan, 1 Haziran, yılbaşı ve yaz pikniği gibi dönemlerde düzenlenen bu festivaller, profesyonel organizasyon firmalarıyla iş birliği yapılarak hayata geçiriliyor. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-blue-700 hover:text-blue-900 font-semibold underline">Full paket organizasyon hizmetleri</Link> ile firmalar, planlama yükünden kurtularak tamamen sonuçlara odaklanabiliyor.
      </p>

      {/* Bölüm 2: Case Study 1 */}
      <h2 id="case-study-1" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Vaka Çalışması 1: 23 Nisan Çocuk Festivali
      </h2>

      <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden mb-8">
        {/* Case Study Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-slate-300 text-sm mb-1">VAKA ÇALIŞMASI #1</p>
              <h3 className="text-2xl font-bold">23 Nisan Ulusal Egemenlik ve Çocuk Festivali</h3>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <p className="text-white text-sm font-semibold">200 Çocuk</p>
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Firma Profili</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Sektör:</strong> Teknoloji / Yazılım</li>
                <li><strong>Çalışan Sayısı:</strong> 800+</li>
                <li><strong>Konum:</strong> İstanbul Maslak Plaza</li>
                <li><strong>Etkinlik Alanı:</strong> Şirkete yakın özel bahçe</li>
                <li><strong>Katılımcı Çocuk:</strong> 200 (3-12 yaş)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Etkinlik Özeti</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Tarih:</strong> 23 Nisan 2025</li>
                <li><strong>Süre:</strong> 4 saat (11:00 - 15:00)</li>
                <li><strong>Aktivite Sayısı:</strong> 8 istasyon</li>
                <li><strong>Personel:</strong> 22 kişi</li>
                <li><strong>Tema:</strong> "Çocukların Dünyası" renkli festival</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-5 mb-6">
            <h4 className="font-bold text-slate-800 mb-3">Aktivite İstasyonları</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Palyaço Gösterisi (2 palyaço, sürekli gösteri)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Bubble Show Alanı (3 seans, 30'ar dakika)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Yüz Boyama İstasyonu (3 sanatçı)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>Pamuk Şeker ve Patlamış Mısır Arabası</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <span>Kostümlü Karakter Alayı (Spiderman, Elsa, Minion)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
                <span>Sihirbaz Gösterisi (2 seans, 40'ar dakika)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">7</span>
                <span>Balon Şekillendirme Atölyesi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">8</span>
                <span>Fotoğraf Çekimi Köşesi (temalı backdrop)</span>
              </div>
            </div>
          </div>

          {/* Quote from HR */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
            <p className="text-gray-700 italic mb-3">
              "23 Nisan festivalimiz, yılın en çok konuşulan etkinliği oldu. Çalışanlarımız çocuklarının yüzlerindeki mutluluğu görünce şirkete olan bağlılıkları gözle görülür şekilde arttı. Ertesi gün ofiste herkes etkinlikten bahsediyordu. Bu tür etkinliklerin çalışan memnuniyetine etkisi, birçok yan haktan çok daha güçlü."
            </p>
            <p className="text-slate-600 text-sm font-semibold">-- Ayşe K., İnsan Kaynakları Müdürü, Teknoloji Şirketi</p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-slate-100 p-6 border-t border-slate-200">
          <h4 className="font-bold text-slate-800 mb-4">Etki Metrikleri</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-green-600">%96</p>
              <p className="text-slate-600 text-xs">Memnuniyet Oranı</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-blue-600">200</p>
              <p className="text-slate-600 text-xs">Çocuk Katılımcı</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-purple-600">340</p>
              <p className="text-slate-600 text-xs">Yetişkin Katılımcı</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-orange-600">150+</p>
              <p className="text-slate-600 text-xs">Sosyal Medya Paylaşımı</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Bu etkinlikte dikkat çeken noktalardan biri, farklı yaş gruplarına yönelik alanlar oluşturulmasıydı. Üç ile beş yaş grubu için daha sakin ve güvenli bir alan ayrılırken, altı ile on iki yaş grubu için daha hareketli ve macera dolu aktiviteler planlandı. Bu yaklaşım, her çocuğun yaşına uygun etkinliklerden faydalanmasını sağladı. Ayrıca ebeveynler için de oturma alanları, ikram bölgesi ve çocuklarını rahatça gözlemleyebilecekleri izleme noktaları oluşturuldu.
      </p>

      {/* Bölüm 3: Case Study 2 */}
      <h2 id="case-study-2" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Vaka Çalışması 2: Yılbaşı Aile Günü
      </h2>

      <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-blue-300 text-sm mb-1">VAKA ÇALIŞMASI #2</p>
              <h3 className="text-2xl font-bold">Yılbaşı Aile Günü Organizasyonu</h3>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <p className="text-white text-sm font-semibold">100 Çocuk</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Firma Profili</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Sektör:</strong> Finans / Bankacılık</li>
                <li><strong>Çalışan Sayısı:</strong> 350</li>
                <li><strong>Konum:</strong> İstanbul Levent</li>
                <li><strong>Etkinlik Alanı:</strong> Otel balo salonu</li>
                <li><strong>Katılımcı Çocuk:</strong> 100 (2-10 yaş)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Etkinlik Özeti</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Tarih:</strong> Aralık 2024, Cumartesi</li>
                <li><strong>Süre:</strong> 3 saat (14:00 - 17:00)</li>
                <li><strong>Aktivite Sayısı:</strong> 5 istasyon</li>
                <li><strong>Personel:</strong> 14 kişi</li>
                <li><strong>Tema:</strong> "Kış Masalı" yılbaşı konsepti</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-5 mb-6">
            <h4 className="font-bold text-slate-800 mb-3">Etkinlik Akışı</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded font-mono whitespace-nowrap">14:00</span>
                <span className="text-gray-700 text-sm">Karşılama ve yılbaşı temalı fotoğraf çekimi köşesi</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded font-mono whitespace-nowrap">14:30</span>
                <span className="text-gray-700 text-sm">Noel Baba sürpriz girişi ve hediye dağıtımı</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded font-mono whitespace-nowrap">15:00</span>
                <span className="text-gray-700 text-sm">Sihirbaz gösterisi (özel yılbaşı temalı numaralar)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded font-mono whitespace-nowrap">15:40</span>
                <span className="text-gray-700 text-sm">Yüz boyama, balon şekillendirme ve pamuk şeker istasyonları</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded font-mono whitespace-nowrap">16:30</span>
                <span className="text-gray-700 text-sm">Bubble show finali ve parti müziği</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
            <p className="text-gray-700 italic mb-3">
              "Yılbaşı aile günümüz, şirketimizin en samimi etkinliği oldu. Özellikle Noel Baba'nın çocuklara isimleriyle hitap ederek hediye vermesi inanılmaz bir detaydı. Çalışanlarımızın eşlerinden bile teşekkür mesajları aldık. Gelecek yıl bütçeyi iki katına çıkarmaya karar verdik."
            </p>
            <p className="text-slate-600 text-sm font-semibold">-- Mehmet T., İK Direktörü, Finans Şirketi</p>
          </div>
        </div>

        <div className="bg-slate-100 p-6 border-t border-slate-200">
          <h4 className="font-bold text-slate-800 mb-4">Etki Metrikleri</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-green-600">%93</p>
              <p className="text-slate-600 text-xs">Memnuniyet Oranı</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-blue-600">100</p>
              <p className="text-slate-600 text-xs">Çocuk Katılımcı</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-purple-600">210</p>
              <p className="text-slate-600 text-xs">Yetişkin Katılımcı</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-orange-600">%87</p>
              <p className="text-slate-600 text-xs">Tekrar Katılım İsteği</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Yılbaşı aile günü organizasyonunda en önemli etken, kapalı mekanda güvenliğin ve konforun sağlanmasıydı. Otel balo salonu, hem yetişkin hem çocuk alanı olarak ikiye bölündü. Çocuk alanı renkli zemin halıları, yumuşak oyun elemanları ve güvenlik bariyerleri ile donatıldı. Yetişkin alanı ise oturma grupları, ikram masaları ve çocuklarını gözlemleyebilecekleri yükseltilmiş bir bölgeden oluşuyordu. Bu düzenleme, her iki grubun da etkinlikten maksimum verim almasını sağladı.
      </p>

      {/* Bölüm 4: Case Study 3 */}
      <h2 id="case-study-3" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Vaka Çalışması 3: Yaz Pikniği Çocuk Alanı
      </h2>

      <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-green-700 to-green-800 p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-green-300 text-sm mb-1">VAKA ÇALIŞMASI #3</p>
              <h3 className="text-2xl font-bold">Yaz Pikniği Çocuk Festivali</h3>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <p className="text-white text-sm font-semibold">300 Çocuk</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Firma Profili</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Sektör:</strong> Holding (çoklu şirket grubu)</li>
                <li><strong>Çalışan Sayısı:</strong> 2000+</li>
                <li><strong>Konum:</strong> İstanbul Beykoz Korusu</li>
                <li><strong>Etkinlik Alanı:</strong> Açık hava piknik alanı (5000 m2)</li>
                <li><strong>Katılımcı Çocuk:</strong> 300 (2-14 yaş)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Etkinlik Özeti</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Tarih:</strong> Haziran 2025, Cumartesi</li>
                <li><strong>Süre:</strong> 6 saat (10:00 - 16:00)</li>
                <li><strong>Aktivite Sayısı:</strong> 12 istasyon</li>
                <li><strong>Personel:</strong> 35 kişi</li>
                <li><strong>Tema:</strong> "Doğada Macera" açık hava festivali</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-5 mb-6">
            <h4 className="font-bold text-slate-800 mb-3">Festival Alanı Yerleşim Planı</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white rounded p-3 border border-green-200">
                <p className="font-semibold text-sm text-green-800 mb-2">Bölge A: Küçük Çocuklar (2-5 yaş)</p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>- Balon şekillendirme</li>
                  <li>- Yumuşak oyun alanı</li>
                  <li>- Masal anlatımı</li>
                  <li>- Mini pamuk şeker istasyonu</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3 border border-green-200">
                <p className="font-semibold text-sm text-green-800 mb-2">Bölge B: Orta Yaş (6-9 yaş)</p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>- Yüz boyama</li>
                  <li>- Kostümlü karakter gösterisi</li>
                  <li>- Bubble show sahası</li>
                  <li>- Hazine avı oyunu</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3 border border-green-200">
                <p className="font-semibold text-sm text-green-800 mb-2">Bölge C: Büyük Çocuklar (10-14 yaş)</p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>- Sihirbaz gösterisi</li>
                  <li>- Takım oyunları</li>
                  <li>- DJ ve dans alanı</li>
                  <li>- Foto kabini</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
            <p className="text-gray-700 italic mb-3">
              "Holdingimizin yıllık piknik etkinliğinde çocuk alanını bu yıl ilk kez profesyonel bir organizasyon firmasına emanet ettik. Sonuç muhteşemdi. Geniş alanda farklı yaş gruplarına özel bölgelerin oluşturulması, ebeveynlerin rahat etmesini sağladı. Çocuklar altı saat boyunca hiç sıkılmadı. Gelecek yıl tüm grup şirketlerimiz için aynı formatı uygulayacağız."
            </p>
            <p className="text-slate-600 text-sm font-semibold">-- Zeynep A., Kurumsal İletişim Müdürü, Holding</p>
          </div>
        </div>

        <div className="bg-slate-100 p-6 border-t border-slate-200">
          <h4 className="font-bold text-slate-800 mb-4">Etki Metrikleri</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-green-600">%94</p>
              <p className="text-slate-600 text-xs">Memnuniyet Oranı</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-blue-600">300</p>
              <p className="text-slate-600 text-xs">Çocuk Katılımcı</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-purple-600">520</p>
              <p className="text-slate-600 text-xs">Yetişkin Katılımcı</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-orange-600">0</p>
              <p className="text-slate-600 text-xs">Güvenlik Sorunu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bölüm 5: Timeline */}
      <h2 id="timeline" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Etkinlik Planlama Timeline: 6 Haftalık Hazırlık Süreci
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Başarılı bir kurumsal çocuk festivali, sistematik bir planlama süreci gerektirir. Aşağıda, altı haftalık ideal hazırlık sürecini adım adım bulabilirsiniz. Bu timeline, orta ve büyük ölçekli etkinlikler için referans niteliği taşır.
      </p>

      {/* Vertical Timeline */}
      <div className="relative mb-12">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-300"></div>

        {/* Hafta 1 */}
        <div className="relative flex items-start gap-6 mb-8">
          <div className="relative z-10 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">H1</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5 flex-1 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2">Hafta 1: İhtiyaç Analizi ve Takım Oluşturma</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>- İK departmanı ile toplantı: Hedef, bütçe, tarih belirleme</li>
              <li>- Çalışan anketleri ile çocuk sayısı ve yaş dağılımı tespit etme</li>
              <li>- Etkinlik komitesi oluşturma (İK + idari işler + iletişim)</li>
              <li>- Organizasyon firması seçimi ve ilk görüşme</li>
            </ul>
          </div>
        </div>

        {/* Hafta 2 */}
        <div className="relative flex items-start gap-6 mb-8">
          <div className="relative z-10 w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">H2</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5 flex-1 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2">Hafta 2: Bütçe Onayı ve Mekan Seçimi</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>- Detaylı bütçe tekliflerinin hazırlanması</li>
              <li>- Üst yönetimden bütçe onayı alınması</li>
              <li>- Mekan alternatifleri ziyaret edilmesi</li>
              <li>- Mekan sözleşmesi ve kapora</li>
            </ul>
          </div>
        </div>

        {/* Hafta 3 */}
        <div className="relative flex items-start gap-6 mb-8">
          <div className="relative z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">H3</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5 flex-1 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2">Hafta 3: Aktivite ve İçerik Planlaması</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>- Yaş gruplarına göre aktivite seçimi</li>
              <li>- Gösteriler için sanatçı ve ekip rezervasyonu</li>
              <li>- Etkinlik akış programının oluşturulması</li>
              <li>- Süsleme ve dekorasyon konseptinin belirlenmesi</li>
            </ul>
          </div>
        </div>

        {/* Hafta 4 */}
        <div className="relative flex items-start gap-6 mb-8">
          <div className="relative z-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">H4</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5 flex-1 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2">Hafta 4: Lojistik ve İletişim</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>- Çalışanlara davet ve kayıt formlarının gönderilmesi</li>
              <li>- Ulaşım planlama (servis, otopark düzenlemesi)</li>
              <li>- İkram ve catering siparişi</li>
              <li>- Güvenlik ve ilk yardım ekibi planlaması</li>
            </ul>
          </div>
        </div>

        {/* Hafta 5 */}
        <div className="relative flex items-start gap-6 mb-8">
          <div className="relative z-10 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">H5</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5 flex-1 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2">Hafta 5: Son Kontroller ve Prova</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>- Katılımcı listesi kesinleştirme ve bileklik hazırlıkları</li>
              <li>- Organizasyon ekibi ile son koordinasyon toplantısı</li>
              <li>- Alan düzeni krokisinin finalize edilmesi</li>
              <li>- Yedek plan (hava durumu, acil durum senaryoları)</li>
            </ul>
          </div>
        </div>

        {/* Hafta 6 */}
        <div className="relative flex items-start gap-6 mb-8">
          <div className="relative z-10 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">H6</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5 flex-1 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2">Hafta 6: Etkinlik Günü ve Değerlendirme</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>- Sabah erken kurulum (etkinlikten 3-4 saat önce)</li>
              <li>- Son ses ve ışık kontrolleri</li>
              <li>- Etkinlik yürütme ve anlık problem çözümü</li>
              <li>- Etkinlik sonrası memnuniyet anketi gönderimi</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bölüm 6: Bütçe Planlama */}
      <h2 id="butce" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Bütçe Planlama: Kişi Başı Maliyet Analizi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Kurumsal çocuk festivali bütçesi, katılımcı sayısı, aktivite çeşitliliği, mekan seçimi ve etkinlik süresi gibi değişkenlere bağlı olarak şekillenir. Aşağıdaki tablo, farklı ölçeklerdeki etkinlikler için genel bütçe dağılımını göstermektedir.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-slate-300 rounded-lg">
          <thead className="bg-slate-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm">Bütçe Kalemi</th>
              <th className="py-3 px-4 text-center text-sm">Küçük (50 Çocuk)</th>
              <th className="py-3 px-4 text-center text-sm">Orta (100-200 Çocuk)</th>
              <th className="py-3 px-4 text-center text-sm">Büyük (300+ Çocuk)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Aktiviteler ve Gösteriler</td>
              <td className="py-3 px-4 text-center">%40</td>
              <td className="py-3 px-4 text-center">%40</td>
              <td className="py-3 px-4 text-center">%35</td>
            </tr>
            <tr className="border-b bg-slate-50">
              <td className="py-3 px-4 font-semibold">Personel ve Ekip</td>
              <td className="py-3 px-4 text-center">%20</td>
              <td className="py-3 px-4 text-center">%20</td>
              <td className="py-3 px-4 text-center">%25</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Dekorasyon ve Süsleme</td>
              <td className="py-3 px-4 text-center">%20</td>
              <td className="py-3 px-4 text-center">%15</td>
              <td className="py-3 px-4 text-center">%15</td>
            </tr>
            <tr className="border-b bg-slate-50">
              <td className="py-3 px-4 font-semibold">İkram ve Catering</td>
              <td className="py-3 px-4 text-center">%10</td>
              <td className="py-3 px-4 text-center">%15</td>
              <td className="py-3 px-4 text-center">%15</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold">Lojistik ve Diğer</td>
              <td className="py-3 px-4 text-center">%10</td>
              <td className="py-3 px-4 text-center">%10</td>
              <td className="py-3 px-4 text-center">%10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-100 border-l-4 border-slate-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-slate-800 mb-3">Bütçe Optimizasyonu İçin İpuçları</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-slate-600 font-bold">1.</span>
            <span><strong>Paket Fiyat Avantajı:</strong> Birden fazla aktiviteyi aynı firmadan almak yüzde on beş ile yüzde yirmi arası tasarruf sağlar.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-600 font-bold">2.</span>
            <span><strong>Erken Rezervasyon:</strong> Popüler tarihler (23 Nisan, yılbaşı) için iki ay öncesinden rezervasyon yapıldığında daha uygun fiyat alınır.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-600 font-bold">3.</span>
            <span><strong>Sponsorluk Desteği:</strong> Firma tedarikçi veya partnerleri etkinliğe sponsor olabilir (hediye, ikram desteği).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-600 font-bold">4.</span>
            <span><strong>Ölçek Ekonomisi:</strong> Katılımcı sayısı arttıkça kişi başı maliyet düşer. 300 çocukluk bir etkinlikte kişi başı maliyet, 50 çocukluk etkinliğe göre yüzde otuz ile yüzde kırk arası düşük olur.</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Bütçe planlamasında en sık yapılan hata, aktivite çeşitliliğini fazla kısarak çocukların sıkılmasına neden olmaktır. Deneyimlerimiz gösteriyor ki, her elli çocuk için en az bir eğlence istasyonu olması gerekir. Aksi halde sıralarda bekleme süreleri uzar ve çocuklar mutsuz olur. Bu nedenle aktivite bütçesinden kesmek yerine, dekorasyon veya lojistik kalemlerinde optimizasyon yapmak daha doğru bir yaklaşımdır.
      </p>

      {/* Bölüm 7: Aktivite Menüsü */}
      <h2 id="aktivite-menusu" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Aktivite Menüsü: Kurumsal Etkinliklere Uygun Seçenekler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Kurumsal çocuk festivallerinde aktivite seçimi, etkinliğin başarısı için en kritik faktördür. Her aktivitenin kapasite, süre ve yaş uygunluğu farklıdır. Aşağıda kurumsal etkinlikler için en uygun aktivite seçeneklerini detaylı olarak inceleyebilirsiniz.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Palyaço */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold text-lg">P</span>
            </div>
            <h4 className="font-bold text-slate-800 text-lg">Palyaço Gösterisi</h4>
          </div>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li><strong>Kapasite:</strong> Seans başı 50-80 çocuk</li>
            <li><strong>Süre:</strong> 30-45 dakika per seans</li>
            <li><strong>Yaş Grubu:</strong> 3-10 yaş</li>
            <li><strong>Kurumsal Uygunluk:</strong> Çok yüksek</li>
          </ul>
          <p className="text-gray-600 text-sm mb-3">
            Kurumsal etkinliklerde en çok tercih edilen aktivite. Hem sahne gösterisi hem gezici format uygulanabilir. Büyük festivallerde iki veya üç palyaço eşliğiyle sürekli animasyon sağlanır.
          </p>
          <Link to="/organizasyonlar/palyaco-kiralama" className="text-blue-700 hover:text-blue-900 font-semibold text-sm underline">
            Palyaço Kiralama Hizmetimiz Hakkında Bilgi Alın
          </Link>
        </div>

        {/* Bubble Show */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">B</span>
            </div>
            <h4 className="font-bold text-slate-800 text-lg">Bubble Show</h4>
          </div>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li><strong>Kapasite:</strong> Seans başı 40-60 çocuk</li>
            <li><strong>Süre:</strong> 25-35 dakika per seans</li>
            <li><strong>Yaş Grubu:</strong> 2-12 yaş (tüm yaşlar)</li>
            <li><strong>Kurumsal Uygunluk:</strong> Çok yüksek</li>
          </ul>
          <p className="text-gray-600 text-sm mb-3">
            Görsel etkisi yüksek, tüm yaş gruplarına hitap eden bir gösteri. Dev balonlar, ışıklı balonlar ve çocukların içine girdiği balonlar büyük ilgi görür. Fotoğrafik açıdan da çok değerli olan bir aktivitedir.
          </p>
          <Link to="/organizasyonlar/bubble-show" className="text-blue-700 hover:text-blue-900 font-semibold text-sm underline">
            Bubble Show Hizmetimiz Hakkında Bilgi Alın
          </Link>
        </div>

        {/* Kostümlü Karakterler */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold text-lg">K</span>
            </div>
            <h4 className="font-bold text-slate-800 text-lg">Kostümlü Karakterler</h4>
          </div>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li><strong>Kapasite:</strong> Karakter başı 30-50 çocuk</li>
            <li><strong>Süre:</strong> 1-2 saat gezici format</li>
            <li><strong>Yaş Grubu:</strong> 3-10 yaş</li>
            <li><strong>Kurumsal Uygunluk:</strong> Yüksek</li>
          </ul>
          <p className="text-gray-600 text-sm mb-3">
            Spiderman, Elsa, Minion gibi popüler karakterler çocukların en sevdiği sürpriz. Büyük festivallerde üç ile dört karakter aynı anda alanda dolaşarak fotoğraf çektirir ve interaktif oyunlar oynar.
          </p>
          <Link to="/organizasyonlar/kostumlu-karakterler" className="text-blue-700 hover:text-blue-900 font-semibold text-sm underline">
            Kostümlü Karakter Kiralama Seçeneklerimiz
          </Link>
        </div>

        {/* Pamuk Şeker */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-pink-600 font-bold text-lg">Ş</span>
            </div>
            <h4 className="font-bold text-slate-800 text-lg">Pamuk Şeker Arabası</h4>
          </div>
          <ul className="space-y-1 text-gray-700 text-sm mb-4">
            <li><strong>Kapasite:</strong> Saatte 80-120 porsiyon</li>
            <li><strong>Süre:</strong> Etkinlik boyunca sürekli</li>
            <li><strong>Yaş Grubu:</strong> Tüm yaşlar</li>
            <li><strong>Kurumsal Uygunluk:</strong> Çok yüksek</li>
          </ul>
          <p className="text-gray-600 text-sm mb-3">
            Festival havasını tamamlayan vazgeçilmez bir unsur. Pamuk şeker, patlamış mısır ve bazı etkinliklerde dondurma arabası da eklenerek ikram çeşitliliği artırılır. Görsel olarak da çok etkileyicidir.
          </p>
          <Link to="/organizasyonlar/pamuk-seker" className="text-blue-700 hover:text-blue-900 font-semibold text-sm underline">
            Pamuk Şeker Arabası Kiralama Hizmetimiz
          </Link>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Aktivite seçiminde dikkat edilmesi gereken en önemli nokta, akış planının doğru kurgulanmasıdır. Tüm çocukların aynı anda aynı aktiviteye yönelmemesi için istasyonlar arasında yönlendirme sistemi kurulmalıdır. Bileklik renkleri veya kartlar ile gruplar oluşturulabilir. Örneğin mavi bileklikli grup ilk saatte bubble show'a giderken, kırmızı bileklikli grup yüz boyama istasyonuyla başlar. Bu rotasyon sistemi, her istasyonda optimum kapasite ile çalışmayı sağlar.
      </p>

      {/* Bölüm 8: Lojistik */}
      <h2 id="lojistik" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        8. Lojistik Planlama: Alan Düzeni, Güvenlik, Personel
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Kurumsal çocuk festivallerinde lojistik planlama, etkinliğin sorunsuz yürütülmesi için hayati önem taşır. Özellikle yüz ve üzeri çocuğun katıldığı büyük festivallerde, detaylı bir lojistik plan olmadan kaos yaşanması kaçınılmazdır. Aşağıda lojistik planlamanın üç ana ayağını detaylı olarak inceliyoruz.
      </p>

      {/* Checklist */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Kurumsal Çocuk Festivali Lojistik Kontrol Listesi</h3>

        <div className="space-y-6">
          {/* Alan Düzeni */}
          <div>
            <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-600 text-white rounded flex items-center justify-center text-sm">A</span>
              Alan Düzeni
            </h4>
            <div className="grid md:grid-cols-2 gap-2 ml-10">
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Yaş gruplarına göre bölgelerin belirlenmesi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Aktivite istasyonları arası yeterli mesafe</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Ebeveyn izleme ve dinlenme alanları</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Gölgelik ve ikram alanı konumu</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Tuvalet ve hijyen istasyonlarına yakınlık</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Acil çıkış güzergahları ve toplanma noktası</span>
              </div>
            </div>
          </div>

          {/* Güvenlik */}
          <div>
            <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-600 text-white rounded flex items-center justify-center text-sm">G</span>
              Güvenlik
            </h4>
            <div className="grid md:grid-cols-2 gap-2 ml-10">
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Giriş-çıkış noktalarında bileklik kontrolü</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>İlk yardım noktası ve sağlık personeli</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Çocuk kayıp prosedürü belirlenmesi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Alerjik reaksiyon acil eylem planı</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Güvenlik personeli dağılım planı</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Hava durumu yedek planı (açık hava için)</span>
              </div>
            </div>
          </div>

          {/* Personel */}
          <div>
            <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-600 text-white rounded flex items-center justify-center text-sm">P</span>
              Personel Planlaması
            </h4>
            <div className="grid md:grid-cols-2 gap-2 ml-10">
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Her 15 çocuk için 1 gözetim personeli</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>İstasyon sorumlusu atamaları</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Koordinatör ve telsiz iletişim sistemi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Yedek personel (hastalık/acil durum)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Kurulum ve söküm ekibi ayrı planlanması</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0"></div>
                <span>Fotoğraf ve video kayıt ekibi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Lojistik planlamada sık yapılan hatalardan biri, yeterli sayıda tuvalet planlamamaktır. Açık hava etkinliklerinde her elli kişi için en az bir portatif tuvalet bulunmalıdır. Çocuk tuvaletleri ayrı konumlandırılmalı ve temizlik personeli sürekli görev başında olmalıdır. Bir diğer önemli konu ise elektrik altyapısıdır. Bubble show, ses sistemi, ışıklandırma ve pamuk şeker makinesi gibi ekipmanlar için yeterli güçte jeneratör veya elektrik bağlantısı sağlanmalıdır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Personel planlamasında, organizasyon firması ekibinin yanı sıra şirketten de gönüllü görevliler belirlenmesi faydalıdır. Her departmandan bir veya iki gönüllü, hem kendi departmanındaki çalışanların çocuklarına rehberlik eder hem de organizasyon ekibi ile şirket arasındaki iletişimi kolaylaştırır. Bu gönüllülerin etkinlik öncesinde kısa bir brifing alması yeterlidir.
      </p>

      {/* Bölüm 9: ROI Metrikleri */}
      <h2 id="roi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        9. ROI Metrikleri: Çalışan Memnuniyeti ve Şirket Bağlılığı
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Kurumsal çocuk festivallerinin somut getirisini ölçmek, İK departmanları ve üst yönetim için büyük önem taşır. Etkinlik bütçesinin haklı görülmesi için ölçülebilir sonuçlar sunulmalıdır. Aşağıda, vaka çalışmalarımızdaki üç etkinlikten elde edilen metrikleri karşılaştırmalı olarak inceleyebilirsiniz.
      </p>

      {/* ROI Metrics Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <h4 className="font-bold text-green-800 mb-4 text-lg">Çalışan Memnuniyeti</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">23 Nisan Festivali</span>
                <span className="font-bold text-green-700">%96</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{width: '96%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Yılbaşı Aile Günü</span>
                <span className="font-bold text-green-700">%93</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{width: '93%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Yaz Pikniği</span>
                <span className="font-bold text-green-700">%94</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-4 text-lg">Katılım Oranı</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">23 Nisan Festivali</span>
                <span className="font-bold text-blue-700">%78</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{width: '78%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Yılbaşı Aile Günü</span>
                <span className="font-bold text-blue-700">%82</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{width: '82%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Yaz Pikniği</span>
                <span className="font-bold text-blue-700">%71</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{width: '71%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-slate-800 mb-4 text-lg">Kurumsal Çocuk Festivallerinin Ölçülebilir Etkileri</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-slate-700 font-bold text-xl">+35%</span>
            </div>
            <p className="text-gray-700 text-sm font-semibold">Çalışan Bağlılığı Artışı</p>
            <p className="text-gray-500 text-xs mt-1">Etkinlik sonrası anketlerde ölçülen ortalama artış oranı</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-slate-700 font-bold text-xl">+20%</span>
            </div>
            <p className="text-gray-700 text-sm font-semibold">İşe Devam Oranında İyileşme</p>
            <p className="text-gray-500 text-xs mt-1">Etkinlik sonrası üç aylık dönemde gözlemlenen iyileşme</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-slate-700 font-bold text-xl">%89</span>
            </div>
            <p className="text-gray-700 text-sm font-semibold">Tekrar Katılım İsteği</p>
            <p className="text-gray-500 text-xs mt-1">Çalışanların bir sonraki yıl da katılmak istediği oran</p>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bu metrikler, kurumsal çocuk festivallerinin sadece bir "eğlence etkinliği" olmadığını, stratejik bir insan kaynakları yatırımı olduğunu ortaya koymaktadır. Özellikle yetenek savaşı yaşanan sektörlerde, aile dostu şirket imajının güçlenmesi kritik bir rekabet avantajı sağlamaktadır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Etkinlik sonrası memnuniyet ölçümü için kısa bir dijital anket gönderilmesi önemlidir. Bu ankette genel memnuniyet, en beğenilen aktiviteler, iyileştirme önerileri ve tekrar katılım isteği sorulur. Anket sonuçları, bir sonraki yılın planlaması için en değerli veri kaynağıdır. Ayrıca sosyal medya paylaşım sayıları ve iç iletişim kanallarındaki geri bildirimler de takip edilmelidir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Sonuç olarak, kurumsal çocuk festivalleri doğru planlama, profesyonel uygulama ve etkili ölçümleme ile şirketlere somut getiri sağlayan stratejik etkinliklerdir. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-blue-700 hover:text-blue-900 font-semibold underline">Full paket organizasyon hizmetlerimiz</Link> ile firmanızın ihtiyaçlarına özel, ölçeklenebilir ve unutulmaz çocuk festivalleri planlıyoruz. Küçük bir ekip etkinliğinden yüzlerce çocukluk büyük festivallere kadar her ölçekte deneyimimiz ve referanslarımız mevcuttur.
      </p>

      {/* Sonuç CTA */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Kurumsal Çocuk Festivali Planlamak mı İstiyorsunuz?</h3>
        <p className="mb-6 leading-relaxed text-slate-200">
          İstanbul'un önde gelen kurumsal etkinlik deneyimiyle, firmanız için unutulmaz bir çocuk festivali planlayalım. 23 Nisan, yılbaşı, yaz pikniği veya özel gün farketmez, her ölçekte profesyonel hizmet sunuyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-slate-800 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Arayın
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba, kurumsal çocuk festivali hakkında bilgi almak istiyorum."
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            WhatsApp ile İletişim
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="kurumsal-cocuk-festivalleri"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/full-paket-organizasyon"
      relatedServiceName="Doğum Günü Organizasyonu"
    />
  )
}

export default KurumsalCocukFestivalleri
