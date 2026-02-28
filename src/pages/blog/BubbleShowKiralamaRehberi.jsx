import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const BubbleShowKiralamaRehberi = () => {
  const faqData = [
    {
      question: 'Bubble show iç mekanda yapılabilir mi?',
      answer: 'Evet, bubble show iç mekanda rahatlıkla yapılabilir. Tavan yüksekliği en az 2.8 metre olmalı ve gösterinin yapılacağı alanda minimum 4x4 metrelik boş alan bulunmalıdır. İç mekanda rüzgar faktörü ortadan kalkacağı için köpükler çok daha uzun süre havada kalır ve gösterinin kalitesi artar. Havalandırma sisteminin açık olması, hem sanatçının rahatlığı hem de köpük kokusunun dağılması açısından önemlidir.'
    },
    {
      question: 'Köpük solüsyonu kıyafetleri lekeler mi?',
      answer: 'Hayır, profesyonel bubble show solüsyonu kıyafetlere leke yapmaz. Kullandığımız formül su bazlı, glikol ve gliserin içeren, dermatolog onaylı bir karışımdır. Kıyafetlere temas ettiğinde ıslak bir iz bırakabilir ancak kuruduğunda tamamen kaybolur. Yine de açık renkli veya ipek kumaşlı kıyafetler yerine rahat, günlük kıyafetler tercih edilmesini öneriyoruz.'
    },
    {
      question: 'Bubble show gösterisi kaç dakika sürer?',
      answer: 'Standart bir bubble show gösterisi 25-35 dakika sürer. Bu süre içerisinde küçük köpüklerle ısınma, orta boy köpük gösterileri, dev balon performansı, çocuğun balonun içine girmesi ve interaktif oyun bölümü yer alır. Talep üzerine gösteriyi 45-50 dakikaya uzatmak mümkündür. Kombine paketlerde toplam etkinlik süresi 60-90 dakikaya çıkabilir.'
    },
    {
      question: 'Kaç yaşından itibaren bubble show izlenebilir?',
      answer: 'Bubble show 1 yaş ve üzerindeki tüm çocuklar tarafından izlenebilir. Ancak en ideal yaş aralığı 2-10 yaştır. 1-2 yaş arası bebekler gösteriyi izleyebilir ve köpüklere dokunmaktan keyif alabilir, ancak aktif katılım için 3 yaş ve üzeri daha uygundur. Dev balonun içine girme performansı genellikle 3-8 yaş arası çocuklara uygulanır.'
    },
    {
      question: 'Çocuk dev balonun içine girebilir mi?',
      answer: 'Evet, dev balonun içine girme performansı bubble show gösterisinin en popüler ve heyecan verici bölümüdür. Sanatçımız özel bir köpük havuzunda büyük bir balon oluşturur ve çocuk bu balonun tam ortasında durur. Bu işlem tamamen güvenlidir; solüsyon cilt dostu ve hipoalerjeniktir. Çocukların gözlerini kapaması veya nefes tutması gerekmez çünkü balonun üstü açık kalır.'
    },
    {
      question: 'Bubble show kiralama fiyatı nedir?',
      answer: 'Bubble show kiralama fiyatları etkinlik yerine, gösterinin süresine, ek hizmetlere ve tarih yoğunluğuna göre değişiklik gösterir. Hafta içi gösterileri hafta sonuna göre daha uygun fiyatlıdır. Kombine paketlerde özel indirimler uygulanır. Güncel fiyat bilgisi ve size özel teklif için bizi telefonla veya WhatsApp üzerinden aramanız yeterlidir. Erken rezervasyonlarda ek avantajlar sunulmaktadır.'
    }
  ]

  const relatedServicePath = '/organizasyonlar/bubble-show'
  const relatedServiceName = 'Bubble Show'

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#bubble-show-nedir" className="text-blue-600 hover:text-blue-700 font-semibold">1. Bubble Show Kiralama Hizmeti Nedir? Köpük Gösterisinin Büyüsü</a></li>
          <li><a href="#kiralama-dikkat" className="text-blue-600 hover:text-blue-700 font-semibold">2. Bubble Show Kiralama Fiyat ve Hizmet: Nelere Dikkat Etmelisiniz?</a></li>
          <li><a href="#ic-dis-mekan" className="text-blue-600 hover:text-blue-700 font-semibold">3. İstanbul'da İç Mekan vs Dış Mekan Bubble Show Organizasyonu</a></li>
          <li><a href="#gosteri-akisi" className="text-blue-600 hover:text-blue-700 font-semibold">4. Bubble Show Kiralama Gösterisi Akışı: 30 Dakikalık Program</a></li>
          <li><a href="#mekan-gereksinimleri" className="text-blue-600 hover:text-blue-700 font-semibold">5. Bubble Show Organizasyonu Mekan Gereksinimleri ve Hazırlık</a></li>
          <li><a href="#kombine-paketler" className="text-blue-600 hover:text-blue-700 font-semibold">6. Bubble Show Kiralama + Diğer Hizmetler: Kombine Paket Fiyatları</a></li>
          <li><a href="#sss" className="text-blue-600 hover:text-blue-700 font-semibold">7. Bubble Show Kiralama Fiyat ve Hizmet Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Bubble show kiralama, çocuk doğum günü organizasyonlarından kurumsal etkinliklere kadar geniş bir alanda en çok tercih edilen gösteri türlerinden biridir. Köpük gösterisi, çocukların gözlerinin önünde büyülü bir dünya yaratır: dev balonlar, renkli köpükler, dumanlı köpükler ve çocuğun balonun içine girdiği o muhteşem an. Tüm bunlar profesyonel bir bubble show organizasyonu ile mümkün. Bu rehberde, bubble show kiralama sürecini mekan gereksinimlerinden gösteri akışına, iç mekan ve dış mekan karşılaştırmasından kombine paketlere kadar A'dan Z'ye inceleyeceğiz.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          💧 <strong>İpucu:</strong> Bubble show sadece bir gösteri değil, çocukların dokunabileceği, içine girebileceği ve birlikte oluşturabileceği interaktif bir deneyimdir. Doğru organizasyon ile etkinliğinizin yıldızı olur.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="bubble-show-nedir" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Bubble Show Kiralama Hizmeti Nedir? Köpük Gösterisinin Büyüsü
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bubble show, özel formüllü sabun solüsyonu ve profesyonel ekipmanlar kullanılarak gerçekleştirilen bir gösteri sanatıdır. Sanatçı, farklı boyutlarda köpükler, dev balonlar, köpük zincirleri ve dumanlı köpükler oluşturarak izleyicilere görsel bir şölen sunar. Çocuklar için bubble show'un bu denli çekici olması, köpüklerin hem göze hem de dokunma duyusuna hitap etmesindendir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Profesyonel bir köpük gösterisinde kullanılan solüsyon, sıradan sabun suyundan çok farklıdır. İçeriği gliserin, distile su, özel sabun bazı ve kıvam verici maddelerden oluşan bu formül, köpüklerin daha büyük, daha dayanıklı ve daha parlak olmasını sağlar. Köpükler ışık altında gökkuşağı renklerinde parlar ve çocukların hayal gücünü harekete geçirir. İstanbul'da bubble show kiralama taleplerinin yıldan yıla artmasının en büyük sebebi, bu gösterinin her yaşta çocuğu büyülemesidir. Daha fazla bilgi için <Link to="/blog/bubble-show-istanbul" className="text-blue-600 hover:text-blue-700 font-semibold underline">İstanbul'da Bubble Show</Link> yazımızı inceleyebilirsiniz.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h4 className="font-bold text-gray-900 mb-3">🫧 Dev Balon Deneyimi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Açıklama:</strong> Çocuk dev bir balonun içine alınır</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> En heyecan verici, en çok fotoğraflanan an</p>
          <p className="text-gray-700 text-sm"><strong>Yaş Grubu:</strong> 3-8 yaş için ideal</p>
        </div>
        <div className="bg-cyan-50 rounded-lg p-6 border-l-4 border-cyan-500">
          <h4 className="font-bold text-gray-900 mb-3">🌈 Köpük Bulutu Gösterisi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Açıklama:</strong> Havada süzülen yüzlerce mini köpük</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> Masalsı atmosfer, fotoğraflar için mükemmel</p>
          <p className="text-gray-700 text-sm"><strong>Yaş Grubu:</strong> Tüm yaşlar</p>
        </div>
        <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
          <h4 className="font-bold text-gray-900 mb-3">💨 Dumanlı Köpük Performansı</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Açıklama:</strong> Kuru buz efektli gizemli köpükler</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> Sahne performansına yakın görsel kalite</p>
          <p className="text-gray-700 text-sm"><strong>Yaş Grubu:</strong> 4 yaş ve üzeri</p>
        </div>
        <div className="bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
          <h4 className="font-bold text-gray-900 mb-3">🎪 İnteraktif Köpük Oyunları</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Açıklama:</strong> Çocuklar kendi köpüklerini oluşturur</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> Aktif katılım, eğitici ve eğlenceli</p>
          <p className="text-gray-700 text-sm"><strong>Yaş Grubu:</strong> 2-12 yaş</p>
        </div>
      </div>

      {/* Bölüm 2 */}
      <h2 id="kiralama-dikkat" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Bubble Show Kiralama Fiyat ve Hizmet: Nelere Dikkat Etmelisiniz?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bubble show kiralama sürecinde doğru seçim yapmak, etkinliğinizin başarısını doğrudan etkiler. Profesyonel bir organizasyon firmasıyla çalışmanın avantajları büyüktür, ancak dikkat etmeniz gereken önemli noktalar vardır.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">1. Sanatçının Deneyimi ve Portfolyosu</h4>
          <p className="text-gray-700 text-sm">
            Bubble show sanatçısının en az 2-3 yıllık sahne deneyimi olmalıdır. Geçmiş etkinliklerden video ve fotoğraf isteyin. Deneyimli bir sanatçı, beklenmedik durumlarda hızla çözüm üretir ve farklı yaş gruplarına uygun gösteri programları hazırlayabilir.
          </p>
        </div>
        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">2. Kullanılan Solüsyon ve Ekipman Kalitesi</h4>
          <p className="text-gray-700 text-sm">
            Kiralama yapacağınız firmanın kullandığı köpük solüsyonunun içeriği hakkında bilgi alın. Profesyonel firmalar toksik olmayan, dermatolog onaylı, cilt dostu formüller kullanır. Ucuz solüsyonlar hem gösterinin kalitesini düşürür hem de cilt tahrişi riski oluşturabilir.
          </p>
        </div>
        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">3. Sigorta ve Güvenlik Önlemleri</h4>
          <p className="text-gray-700 text-sm">
            Profesyonel organizasyon firmaları etkinlik sigortası sunar. Zemin kayganlık önlemi, çocuk güvenlik protokolleri ve acil durum planı olmalıdır. Gösteride kullanılan tüm malzemelerin güvenlik sertifikaları bulunmalıdır.
          </p>
        </div>
        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">4. Referanslar ve Değerlendirmeler</h4>
          <p className="text-gray-700 text-sm">
            Bubble show kiralama öncesinde mutlaka firmanın referanslarını inceleyin. Google yorumları, sosyal medya hesapları ve müşteri geri bildirimleri hizmet kalitesi hakkında önemli ipuçları verir.
          </p>
        </div>
      </div>

      {/* Bölüm 3 */}
      <h2 id="ic-dis-mekan" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. İstanbul'da İç Mekan vs Dış Mekan Bubble Show Organizasyonu
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bubble show gösterisi hem iç mekanda hem de dış mekanda yapılabilir, ancak her ikisinin kendine özgü avantajları ve dezavantajları vardır. Doğru mekan seçimi, gösterinin kalitesini doğrudan etkiler.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h4 className="font-bold text-gray-900 mb-4 text-xl text-center">İç Mekan Bubble Show</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2"><span className="text-green-600 font-bold text-lg">+</span><p className="text-gray-700 text-sm">Rüzgar faktörü yok, köpükler uzun süre dayanır</p></div>
            <div className="flex items-start gap-2"><span className="text-green-600 font-bold text-lg">+</span><p className="text-gray-700 text-sm">Işık kontrolü kolay, LED efektler çok daha etkili</p></div>
            <div className="flex items-start gap-2"><span className="text-green-600 font-bold text-lg">+</span><p className="text-gray-700 text-sm">Hava durumundan bağımsız, yıl boyunca yapılabilir</p></div>
            <div className="flex items-start gap-2"><span className="text-red-600 font-bold text-lg">-</span><p className="text-gray-700 text-sm">Tavan yüksekliği kısıtlayıcı olabilir</p></div>
            <div className="flex items-start gap-2"><span className="text-red-600 font-bold text-lg">-</span><p className="text-gray-700 text-sm">Zemin ıslaklığına dikkat edilmeli</p></div>
            <div className="flex items-start gap-2"><span className="text-red-600 font-bold text-lg">-</span><p className="text-gray-700 text-sm">Havalandırma gerekli (köpük kokusu yoğunlaşabilir)</p></div>
          </div>
        </div>
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h4 className="font-bold text-gray-900 mb-4 text-xl text-center">Dış Mekan Bubble Show</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2"><span className="text-green-600 font-bold text-lg">+</span><p className="text-gray-700 text-sm">Sınırsız alan, dev köpükler için mükemmel</p></div>
            <div className="flex items-start gap-2"><span className="text-green-600 font-bold text-lg">+</span><p className="text-gray-700 text-sm">Doğa ışığı ile köpükler daha parlak görünür</p></div>
            <div className="flex items-start gap-2"><span className="text-green-600 font-bold text-lg">+</span><p className="text-gray-700 text-sm">Temizlik gerektirmez, köpükler doğal olarak kaybolur</p></div>
            <div className="flex items-start gap-2"><span className="text-red-600 font-bold text-lg">-</span><p className="text-gray-700 text-sm">Rüzgar köpükleri hemen patlatır, en büyük düşman</p></div>
            <div className="flex items-start gap-2"><span className="text-red-600 font-bold text-lg">-</span><p className="text-gray-700 text-sm">Yağmur ve nem gösteri kalitesini düşürür</p></div>
            <div className="flex items-start gap-2"><span className="text-red-600 font-bold text-lg">-</span><p className="text-gray-700 text-sm">Güneş ışığı LED efektlerini görünmez kılar</p></div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bubble show gösterisinin su tüketimi hakkında detaylı bilgi almak isterseniz <Link to="/blog/bubble-show-ne-kadar-su-harcar" className="text-blue-600 hover:text-blue-700 font-semibold underline">Bubble Show Ne Kadar Su Harcar?</Link> yazımızı inceleyebilirsiniz.
      </p>

      {/* Bölüm 4 */}
      <h2 id="gosteri-akisi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Bubble Show Kiralama Gösterisi Akışı: 30 Dakikalık Program
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Profesyonel bir bubble show gösterisi belirli bir senaryo ve akış dahilinde gerçekleştirilir. Her aşamanın kendine özgü bir amacı vardır ve çocukların ilgisini kademeli olarak artırmak için tasarlanmıştır. İşte tipik bir 30 dakikalık organizasyon programının detaylı akışı:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">1</span>
            <h4 className="font-bold text-gray-900">Dakika 0-5: Açılış ve Küçük Köpükler</h4>
          </div>
          <p className="text-gray-700 text-sm">Sanatçı müzik eşliğinde sahneye çıkar ve küçük köpüklerle gösteriye başlar. El aleti ile yüzlerce mini köpük oluşturulur, çocukların ilk tepkileri alınır. Bu aşamada sanatçı çocuklarla tanışır ve enerjiyi ölçer.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">2</span>
            <h4 className="font-bold text-gray-900">Dakika 5-10: Orta Boy Köpükler ve Şekiller</h4>
          </div>
          <p className="text-gray-700 text-sm">Köpüklerin boyutu kademeli olarak büyür. Sanatçı özel kalıplarla köpük zincirleri, köpük içinde köpük ve spiral köpükler oluşturur. LED ışıkların köpüklerdeki yansıması farklı renkler oluşturur.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">3</span>
            <h4 className="font-bold text-gray-900">Dakika 10-18: Dev Balon ve Çocuk İçine Girme</h4>
          </div>
          <p className="text-gray-700 text-sm">Gösterinin en heyecan verici bölümü! Sanatçı özel köpük havuzunu hazırlar ve dev balon çemberiyle muhteşem büyüklükte balonlar oluşturur. Ardından çocuklar birer birer dev balonun içine girer. Her çocuk için yaklaşık 30-45 saniye ayrılır.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">4</span>
            <h4 className="font-bold text-gray-900">Dakika 18-24: Dumanlı Köpük ve Özel Efektler</h4>
          </div>
          <p className="text-gray-700 text-sm">Kuru buz veya özel duman makinesiyle doldurulan köpükler, patladığında duman çıkaran muhteşem bir görsel efekt oluşturur. Bu bölüm gösterinin en gizemli ve atmosferik kısmıdır.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">5</span>
            <h4 className="font-bold text-gray-900">Dakika 24-30: İnteraktif Oyun ve Final</h4>
          </div>
          <p className="text-gray-700 text-sm">Son bölümde çocuklar aktif katılımcı olur. Mini köpük aletleri dağıtılır ve çocuklar kendi köpüklerini oluşturur. Gösterinin finali, tüm çocukların üzerine yüzlerce köpüğün bırakılmasıyla muhteşem bir şekilde sonlanır.</p>
        </div>
      </div>

      {/* Bölüm 5 */}
      <h2 id="mekan-gereksinimleri" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Bubble Show Organizasyonu Mekan Gereksinimleri ve Hazırlık
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Başarılı bir bubble show organizasyonu için mekan hazırlığı büyük önem taşır. Doğru mekan düzenlemesi hem gösterinin kalitesini artırır hem de güvenlik risklerini en aza indirir.
      </p>

      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-4">📋 Mekan Kontrol Listesi:</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</span>
            <div><strong className="text-gray-900">Alan Büyüklüğü:</strong><p className="text-gray-700 text-sm">Minimum 4x4 metre boş alan (ideal: 5x5 metre). Dev balon performansı için sanatçının etrafında en az 2 metre mesafe olmalı.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</span>
            <div><strong className="text-gray-900">Tavan Yüksekliği:</strong><p className="text-gray-700 text-sm">İç mekanlarda minimum 2.8 metre (ideal: 3.5 metre ve üzeri). Dev balonlar yukarı doğru yükselir, düşük tavanlarda performans kısıtlanır.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</span>
            <div><strong className="text-gray-900">Zemin Koruması:</strong><p className="text-gray-700 text-sm">Parke veya halı zeminlerde branda veya naylon örtü serilmeli. Seramik zeminlerde kayma riski için kaymaz paspas kullanılmalı.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">4</span>
            <div><strong className="text-gray-900">Aydınlatma:</strong><p className="text-gray-700 text-sm">İç mekanlarda ortam ışığını kısma imkanı varsa LED efektler çok daha etkileyici olur. Karanlık ortamda köpüklerin ışık yansımaları muhteşem görünür.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">5</span>
            <div><strong className="text-gray-900">Havalandırma:</strong><p className="text-gray-700 text-sm">İç mekanlarda havalandırma sistemi açık olmalı. Pencere açma imkanı veya klima sistemi yeterlidir. Gösteriden sonra 15-20 dakika havalandırma önerilir.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">6</span>
            <div><strong className="text-gray-900">Elektrik Prizi:</strong><p className="text-gray-700 text-sm">Köpük makinesi, ses sistemi ve LED ışıklar için en az 2 adet 220V priz gerekli. Uzatma kablosu çocukların erişemeyeceği şekilde sabitlenmeli.</p></div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-8 border border-blue-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">💙 Gerçek Hikaye: Bahçeşehir'de 6 Yaş Doğum Günü</h4>
        <p className="text-gray-700 text-sm mb-4">
          Bahçeşehir'de bir apartman dairesinde 6 yaşındaki Efe'nin doğum günü için bubble show organizasyonu yapıldı. Salon 5x6 metre büyüklüğünde, tavan yüksekliği 3 metreydi. Önceden zemine su geçirmez örtü serildi, mobilyalar kenara çekildi ve ışıklar kısıldı. Sanatçı LED ışık gösterisiyle birlikte muhteşem bir performans sergiledi. Efe dev balonun içine girdiğinde tüm ebeveynler şaşkınlıkla izledi. Annesi "Salon küçük diye endişelenmiştik ama profesyonel ekip her şeyi düşünmüş" dedi. Gösteri sonrası temizlik sadece 10 dakika sürdü.
        </p>
        <p className="text-gray-600 text-xs italic">— Profesyonel organizasyon ile küçük mekanlar bile büyülü bir sahneye dönüşebilir.</p>
      </div>

      {/* Bölüm 6 */}
      <h2 id="kombine-paketler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Bubble Show Kiralama + Diğer Hizmetler: Kombine Paket Fiyatları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bubble show tek başına muhteşem bir gösteridir, ancak diğer çocuk etkinlik hizmetleriyle birleştirildiğinde etkinliğiniz çok daha zengin ve uzun süreli olur. Kombine paketler hem maliyet avantajı sağlar hem de çocukların farklı aktivitelerle daha uzun süre eğlenmesini mümkün kılar.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 text-lg">🎪 Bubble Show + Palyaço</h4>
          <p className="text-gray-700 text-sm mb-3">En popüler kombine paket! Palyaço 30-45 dakika oyun ve animasyon yapar, ardından bubble show sanatçısı 25-30 dakika gösteri sunar. Palyaçonun enerjisiyle ısınmış çocuklar, bubble show'da zirveye ulaşır.</p>
          <p className="text-blue-600 text-sm font-semibold">Toplam Süre: 60-75 dakika</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 text-lg">🎩 Bubble Show + Sihirbaz</h4>
          <p className="text-gray-700 text-sm mb-3">Gizemli bir kombinasyon! Sihirbaz 30 dakika büyüleyici numaralar sergiler, ardından bubble show ile görsel şölen devam eder. Özellikle 5-10 yaş grubu için ideal bir kiralama paketi.</p>
          <p className="text-blue-600 text-sm font-semibold">Toplam Süre: 55-65 dakika</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 text-lg">🎨 Bubble Show + Yüz Boyama</h4>
          <p className="text-gray-700 text-sm mb-3">Yaratıcı bir organizasyon paketi! Önce yüz boyama yapılır, ardından boyalı yüzlerle bubble show izlenir. Fotoğraflar için muhteşem bir kombinasyon. Yüz boyamaları köpük solüsyonundan etkilenmez.</p>
          <p className="text-blue-600 text-sm font-semibold">Toplam Süre: 50-70 dakika</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 text-lg">⭐ Bubble Show + Palyaço + Sihirbaz (VIP)</h4>
          <p className="text-gray-700 text-sm mb-3">Tam gün etkinlik için en kapsamlı paket! Palyaço ile başlar, sihirbaz gösterisiyle devam eder ve bubble show ile muhteşem bir finalle sona erer. Premium organizasyon arayanlar için.</p>
          <p className="text-blue-600 text-sm font-semibold">Toplam Süre: 90-120 dakika</p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          💰 <strong>Tasarruf İpucu:</strong> Kombine paketlerde tekil kiralama fiyatlarına göre %15-25 oranında indirim uygulanır. Erken rezervasyonlarda bu oran %30'a kadar çıkabilir. Organizasyon planlamanızda bu avantajı değerlendirin.
        </p>
      </div>

      {/* Hizmet CTA Kutusu */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">İstanbul'da Profesyonel Bubble Show Kiralama Hizmeti</h3>
        <p className="text-gray-700 mb-4">
          İstanbul genelinde profesyonel bubble show kiralama ve köpük gösterisi organizasyonu için hizmet sayfamızı inceleyin.
        </p>
        <Link
          to="/organizasyonlar/bubble-show"
          className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Bubble Show Hizmeti Hakkında Bilgi Alın →
        </Link>
      </div>

      {/* Bölüm 7 - SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Bubble Show Kiralama Fiyat ve Hizmet Sık Sorulan Sorular
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">❓ {faq.question}</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🫧 İstanbul'da Bubble Show Kiralama Fiyat ve Organizasyon Hizmeti!</h3>
        <p className="mb-6 leading-relaxed">
          Çocuğunuzun doğum gününü veya özel gününüzü unutulmaz kılmak için profesyonel bubble show gösterisi organizasyonu yapıyoruz. Dev balonlardan dumanlı köpüklere, interaktif oyunlardan muhteşem finallere kadar tüm detaylar bizde. Hemen bizi arayın, ücretsiz bilgi ve fiyat teklifi alın!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            📞 Hemen Ara: 0530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Bubble%20show%20kiralama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            💬 WhatsApp ile Yazın
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="bubble-show-kiralama-rehberi"
      faqData={faqData}
      relatedServicePath={relatedServicePath}
      relatedServiceName={relatedServiceName}
    >
      {content}
    </BlogDetail>
  )
}

export default BubbleShowKiralamaRehberi
