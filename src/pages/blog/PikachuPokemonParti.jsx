import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const PikachuPokemonParti = () => {
  const faqData = [
    {
      question: 'Pikachu karakteri hangi yaş grubuna uygun?',
      answer: 'Pikachu karakteri 3-10 yaş aralığındaki tüm çocuklar için uygundur. 3-5 yaş grubunda sevimli görünümü ve dans hareketleriyle ilgi çeker, 6-10 yaş grubunda ise Pokemon evreni bilgisi ve interaktif oyunlarla çocukları etkiler. Pokemon temasına ilgi duyan her yaş grubuna hitap edebilen esnek bir karakter organizasyonu sunuyoruz.'
    },
    {
      question: 'Pokemon temalı partide hangi oyunlar oynanır?',
      answer: 'Pokemon temalı partilerde Pokemon avı (hazine avı formatında), Poke Ball fırlatma yarışması, Pokemon bilgi yarışması, "Kim Bu Pokemon?" tahmin oyunu, enerji dolu dans partisi ve Pokemon evrimi parkuru gibi interaktif oyunlar oynanır. Tüm oyunlar yaş grubuna göre uyarlanır ve profesyonel ekibimiz tarafından yönetilir.'
    },
    {
      question: 'Pikachu dışında başka Pokemon karakterleri de var mı?',
      answer: 'Pikachu en popüler ve en çok talep edilen Pokemon karakterimizdir. Bunun yanında organizasyonun konseptine göre ek karakter seçenekleri de sunulabilmektedir. Pikachu ana karakter olarak gösterinin merkezinde yer alırken, yan karakterler kostüm ve aksesuar detaylarıyla organizasyona renk katar. Detaylı karakter listesi için bizimle iletişime geçebilirsiniz.'
    },
    {
      question: 'Pokemon parti süsleme hizmeti var mı?',
      answer: 'Evet, Pokemon temalı komple süsleme hizmeti sunuyoruz. Sarı-kırmızı-siyah renk paletinde balon kemeri, Poke Ball şeklinde masa süsleri, Pokemon figürlü arka plan panosu, tematik tabak-bardak seti ve zemine yapıştırılan Pokemon izleri ile mekan tamamen Pokemon evrenine dönüştürülür. Karakter kiralama ve süsleme paketi birlikte alındığında fiyat avantajı sağlanır.'
    },
    {
      question: 'Pikachu gösterisi ne kadar sürer?',
      answer: 'Standart Pikachu gösterisi 45-60 dakika arasında sürer. Bu süre sürpriz giriş, dans gösterisi, Pokemon avı oyunu, interaktif aktiviteler ve fotoğraf seansını kapsar. Daha kısa süreli (30 dakika) veya daha uzun süreli (90 dakika) paketler de mevcuttur. Ek hizmetlerle (yüz boyama, bubble show) birleştirildiğinde organizasyon süresi 120 dakikaya kadar çıkabilir.'
    },
    {
      question: 'Pokemon partisi fiyatı ne kadar?',
      answer: 'Pokemon temalı organizasyon fiyatları; karakter sayısına, gösteri süresine, süsleme paketine ve ek hizmetlere göre değişiklik gösterir. Tek karakter ile temel gösteri paketinden, süsleme + karakter + oyun organizasyonu dahil komple paketlere kadar farklı seçenekler sunuyoruz. Güncel fiyat bilgisi ve kişiye özel teklif için bizi aramanızı ya da WhatsApp üzerinden ulaşmanızı öneriyoruz.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-yellow-500">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#pokemon-parti-nedir" className="text-yellow-600 hover:text-yellow-700 font-semibold">1. Pokemon Temalı Doğum Günü Partisi Nedir?</a></li>
          <li><a href="#pikachu-performans" className="text-yellow-600 hover:text-yellow-700 font-semibold">2. Pikachu Karakteri ve Enerji Dolu Performans</a></li>
          <li><a href="#pokemon-avi" className="text-yellow-600 hover:text-yellow-700 font-semibold">3. Pokemon Avı Oyunu: Hepsini Yakala!</a></li>
          <li><a href="#yas-gruplari" className="text-yellow-600 hover:text-yellow-700 font-semibold">4. Yaş Gruplarına Göre Pokemon Aktiviteleri</a></li>
          <li><a href="#gosteri-akisi" className="text-yellow-600 hover:text-yellow-700 font-semibold">5. Pokemon Parti Gösteri Akışı</a></li>
          <li><a href="#susleme-detay" className="text-yellow-600 hover:text-yellow-700 font-semibold">6. Pokemon Süsleme ve Parti Detayları</a></li>
          <li><a href="#sss" className="text-yellow-600 hover:text-yellow-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Pokemon, 1996'dan bu yana dünya genelinde milyonlarca çocuğun kalbini fetheden ve nesiller arası popülerliğini koruyan efsanevi bir franchise'dır. Pikachu ise bu evrenin tartışmasız en ikonik ve sevilen karakteridir. Sarı rengi, sevimli yüz ifadesi ve elektrik güçleriyle çocukların hayranlık duyduğu bu karakter, doğum günü partilerine inanılmaz bir enerji ve heyecan katar. İstanbul'da Pikachu ve Pokemon temalı doğum günü organizasyonu ile çocuğunuzun hayallerini gerçeğe dönüştürüyoruz. Bu rehberde, Pokemon temalı partinin tüm detaylarını, oyun fikirlerini ve organizasyon sürecini bulacaksınız.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          ⚡ <strong>İpucu:</strong> Pokemon temalı organizasyonların en büyük avantajı, hem kız hem erkek çocuklarına hitap etmesidir. Pikachu'nun cinsiyetsiz ve evrensel çekiciliği sayesinde karma gruplar için mükemmel bir tema seçimidir. Ayrıca Pokemon avı gibi interaktif oyunlar, çocukların fiziksel aktivitesini artırarak partinin dinamik ve eğlenceli geçmesini sağlar.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="pokemon-parti-nedir" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Pokemon Temalı Doğum Günü Partisi Nedir?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pokemon temalı doğum günü partisi, çocukların sevdiği Pokemon evrenini gerçek hayata taşıyan kapsamlı bir organizasyon konseptidir. Pikachu kostümlü karakter gösterisi, Poke Ball temalı süslemeler, Pokemon avı oyunları ve enerji dolu dans performansı bu organizasyonun temel bileşenleridir. Çocuklar, partide bir Pokemon eğitmeni gibi hisseder ve kendi maceralarını yaşar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bu organizasyonun en güçlü yanı, hem eğlenceli hem de eğitici bir deneyim sunmasıdır. Pokemon avı oyunları sayesinde çocuklar gözlem yeteneğini, strateji geliştirmeyi ve takım çalışmasını pratik ederken, Pikachu'nun enerjik performansı ile fiziksel aktivitelerini artırır. Parti boyunca çocuklar aktif kalır ve her an yeni bir sürpriz keşfeder.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚡</span> Pokemon Partisinin Benzersiz Avantajları:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">1.</span>
              <div>
                <strong>Evrensel Çekicilik:</strong> Hem kız hem erkek çocukları eşit derecede heyecanlandırır. Karma gruplar için ideal bir tema seçimidir.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">2.</span>
              <div>
                <strong>Koleksiyon Heyecanı:</strong> Pokemon kartları, figürleri ve çıkartmaları ile çocuklarda koleksiyonculuk tutkusu körüklenir.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">3.</span>
              <div>
                <strong>Strateji ve Düşünme:</strong> Pokemon avı ve bilgi yarışmaları, çocukların düşünme ve strateji geliştirme becerilerini destekler.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">4.</span>
              <div>
                <strong>Enerji ve Hareket:</strong> Pikachu'nun dans performansı ve aktif oyunlar sayesinde çocuklar parti boyunca enerjik ve mutlu kalır.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Pokemon temalı organizasyonumuz hakkında detaylı bilgi almak için <Link to="/karakter/pikachu-kiralama-istanbul" className="text-yellow-600 hover:text-yellow-700 font-semibold underline">Pikachu karakter kiralama</Link> sayfamızı ziyaret edebilirsiniz. Karakter özellikleri, gösteri içeriği ve paket seçenekleri hakkında kapsamlı bilgi bulacaksınız.
      </p>

      {/* Bölüm 2 */}
      <h2 id="pikachu-performans" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Pikachu Karakteri ve Enerji Dolu Performans
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Pikachu, Pokemon evreninin en tanınmış ve sevilen karakteridir. Sarı rengi, yıldırım şeklindeki kuyruğu ve kırmızı yanakları ile anında tanınan bu karakter, çocukların ilk görüşte aşık olduğu bir ikondur. Profesyonel Pikachu kostümlü karakter performansımız, çizgi filmdeki enerji ve neşeyi birebir sahneye taşır.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">⚡</span> Pikachu Performans Detayları
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Giriş:</strong> Elektrik efektli müzik eşliğinde sürpriz giriş</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Dans:</strong> Pokemon tema şarkısı ile koreografik dans gösterisi</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Etkileşim:</strong> Sarılma, el sallama, komik pozlar verme</p>
          <p className="text-gray-700 text-sm"><strong>Özel Anlar:</strong> "Pika Pika!" seslendirmesi ile çocukları coşturma, doğum günü şarkısı söyleme</p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-3xl">🎯</span> Performans Kalite Güvencesi
          </h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Kostüm:</strong> Yüksek kaliteli, temiz ve bakımlı Pikachu kostümü</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Sanatçı:</strong> Çocuk psikolojisi eğitimli profesyonel performansçı</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Müzik:</strong> Pokemon orijinal müzikleri ve popüler çocuk şarkıları</p>
          <p className="text-gray-700 text-sm"><strong>Süre:</strong> 45-60 dakika kesintisiz performans garantisi</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pikachu performansının en etkileyici anlarından biri, sürpriz giriş sahnesidir. Pokemon tema müziği yükselmeye başlar, ışıklar kısılır ve elektrik efektleri eşliğinde Pikachu sahneye fırlar. "Pika Pika!" sesiyle çocuklara el sallar ve doğum günü çocuğuna doğru koşar. Bu an, çocukların hayatlarında unutamayacakları bir hatıra olur.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Pikachu'nun enerji dolu performansı, gösterinin her anına yayılır. Dans ederken çocukları da piste davet eder, oyunlarda hakem olarak görev yapar ve fotoğraf çekimlerinde en sevimli pozlarını verir. <Link to="/maskot/pikachu-maskot-istanbul" className="text-yellow-600 hover:text-yellow-700 font-semibold underline">Pikachu maskot kiralama</Link> sayfamızda kostüm detayları ve maskot özellikleri hakkında daha fazla bilgi edinebilirsiniz.
      </p>

      {/* Bölüm 3 */}
      <h2 id="pokemon-avi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Pokemon Avı Oyunu: Hepsini Yakala!
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Pokemon avı, organizasyonumuzun en heyecanlı ve popüler aktivitesidir. "Gotta Catch 'Em All!" (Hepsini Yakala!) sloganından ilham alan bu oyun, çocukları gerçek birer Pokemon eğitmeni gibi hissettirir. Mekan içine gizlenmiş Pokemon kartları ve figürleri, çocuklar tarafından ipuçları yardımıyla bulunur.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-yellow-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🔍 Pokemon Avı Nasıl Oynanır?</h4>
          <p className="text-gray-700 text-sm mb-3">Pokemon avı, birden fazla turdan oluşan kapsamlı bir etkinliktir. Her tur farklı bir zorluk seviyesi ve farklı Pokemon türlerini içerir.</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; <strong>Hazırlık:</strong> Mekan önceden keşfedilir ve stratejik noktalara Pokemon kartları, figürleri ve çıkartmaları gizlenir.</li>
            <li>&#8226; <strong>Tur 1 - Kolay Av:</strong> Açık alanlara yerleştirilen Pokemon'lar kolayca bulunur. 3-4 yaş grubu için idealdir.</li>
            <li>&#8226; <strong>Tur 2 - Orta Zorluk:</strong> İpuçları takip edilerek gizli Pokemon'lar aranır. Bulmaca çözme becerisi gerektirir.</li>
            <li>&#8226; <strong>Tur 3 - Efsanevi Av:</strong> En zor gizlenmiş nadir Pokemon'lar aranır. Takım çalışması ve strateji gerektirir.</li>
            <li>&#8226; <strong>Değerlendirme:</strong> Bulunan Pokemon'lar sayılır, en çok toplayan "Pokemon Ustası" unvanını kazanır.</li>
          </ul>
        </div>

        <div className="bg-white border border-red-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🎯 Poke Ball Fırlatma Yarışması</h4>
          <p className="text-gray-700 text-sm mb-3">Pokemon avının yanı sıra Poke Ball fırlatma yarışması da organizasyonun en eğlenceli oyunlarından biridir.</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; Yumuşak toplarla (Poke Ball) Pokemon figürlü hedeflere nişan alınır</li>
            <li>&#8226; Her hedefin farklı puanı vardır: Pikachu 100 puan, Charmander 50 puan, Bulbasaur 30 puan</li>
            <li>&#8226; Her çocuğa 5 Poke Ball atış hakkı verilir</li>
            <li>&#8226; En yüksek puanı toplayan "Poke Ball Ustası" ödülü alır</li>
          </ul>
        </div>

        <div className="bg-white border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🧠 "Kim Bu Pokemon?" Bilgi Yarışması</h4>
          <p className="text-gray-700 text-sm mb-3">Pokemon evrenine hakim çocuklar için interaktif bir bilgi yarışması düzenlenir.</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; Pokemon siluetleri gösterilerek isim tahmin etme</li>
            <li>&#8226; Pokemon türleri ve yetenekleri hakkında sorular</li>
            <li>&#8226; "Bu sesi hangi Pokemon çıkarır?" ses efekti oyunu</li>
            <li>&#8226; Doğru cevap verenlere Pokemon çıkartma ödülleri</li>
          </ul>
        </div>
      </div>

      {/* Bölüm 4 */}
      <h2 id="yas-gruplari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Yaş Gruplarına Göre Pokemon Aktiviteleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Pokemon temalı organizasyonun başarısı, aktivitelerin yaş grubuna uygun olarak planlanmasına bağlıdır. Her yaş grubunun Pokemon ile olan ilişkisi, dikkat süresi ve fiziksel kapasitesi farklıdır. İşte yaş gruplarına göre özelleştirilmiş aktivite planımız:
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-gray-900 mb-3">🧸 3-4 Yaş: Sevimli Pikachu</h4>
          <p className="text-gray-700 text-sm mb-3">Bu yaş grubunda çocuklar Pikachu'yu sevimli bir karakter olarak tanır. Detaylı Pokemon bilgisi beklenmez.</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Pikachu ile sarılma ve dans etme</li>
            <li>&#8226; Basit Pokemon boyama etkinliği</li>
            <li>&#8226; Kolay bulunan Pokemon avı</li>
            <li>&#8226; Pikachu müziği eşliğinde serbest dans</li>
            <li>&#8226; Balon figürlerle Pokemon yapımı</li>
          </ul>
          <p className="text-yellow-600 text-xs font-semibold mt-3">Gösteri süresi: 25-35 dakika</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
          <h4 className="font-bold text-gray-900 mb-3">🎈 5-7 Yaş: Pokemon Eğitmeni</h4>
          <p className="text-gray-700 text-sm mb-3">Bu yaş grubu Pokemon evrenini tanır ve aktif katılım gösterir. En coşkulu gruptur.</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Tam kapsamlı Pokemon avı</li>
            <li>&#8226; Poke Ball fırlatma yarışması</li>
            <li>&#8226; "Kim Bu Pokemon?" tahmin oyunu</li>
            <li>&#8226; Pokemon evrimi dans parkuru</li>
            <li>&#8226; Takım halinde Pokemon turnuvası</li>
          </ul>
          <p className="text-yellow-600 text-xs font-semibold mt-3">Gösteri süresi: 45-60 dakika</p>
        </div>

        <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
          <h4 className="font-bold text-gray-900 mb-3">🏆 8-10 Yaş: Pokemon Ustası</h4>
          <p className="text-gray-700 text-sm mb-3">Bu yaş grubu Pokemon hakkında detaylı bilgiye sahiptir. Stratejik ve rekabetçi oyunlar ön plandadır.</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>&#8226; Gelişmiş Pokemon bilgi yarışması</li>
            <li>&#8226; Strateji tabanlı Pokemon kart oyunu</li>
            <li>&#8226; Efsanevi Pokemon avı (zor seviye)</li>
            <li>&#8226; Pokemon turnuvası finali</li>
            <li>&#8226; DJ eşliğinde Pokemon dans partisi</li>
          </ul>
          <p className="text-yellow-600 text-xs font-semibold mt-3">Gösteri süresi: 60-75 dakika</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Karma yaş gruplarında organizasyon planlaması için profesyonel ekibimiz önceden katılımcı listesini inceleyerek her çocuğun keyif alacağı aktiviteleri hazırlar. Doğum günü organizasyonu sürecinin tüm detayları için <Link to="/organizasyonlar/kostumlu-karakterler" className="text-yellow-600 hover:text-yellow-700 font-semibold underline">kostümlü karakterler organizasyon sayfamızı</Link> ziyaret edebilirsiniz.
      </p>

      {/* Bölüm 5 */}
      <h2 id="gosteri-akisi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Pokemon Parti Gösteri Akışı
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Profesyonel Pokemon temalı organizasyonumuz, dakika dakika planlanmış bir gösteri akışına sahiptir. Her aşama çocukların enerji seviyesine ve dikkat süresine göre optimize edilmiştir. İşte standart bir 55 dakikalık Pokemon parti akışı:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-yellow-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">0-5 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Sürpriz Giriş: "Pikachu Sahnede!"</h4>
              <p className="text-gray-700 text-sm">Pokemon tema müziği yükselir, ışık efektleri başlar. "Pika Pikaaaa!" sesi duyulur ve Pikachu müzik eşliğinde dans ederek sahneye çıkar. Çocuklar büyük bir coşkuyla karşılar. Doğum günü çocuğuna doğru koşar ve sarılır. Bu an profesyonel fotoğrafçı tarafından ölümsüzleştirilir.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-yellow-400 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">5-15 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Pikachu Dans Gösterisi</h4>
              <p className="text-gray-700 text-sm">Pokemon tema şarkıları eşliğinde Pikachu koreografik dans gösterisi yapar. Çocuklar Pikachu'nun hareketlerini taklit eder ve hep birlikte dans ederler. "Pika Pika" ritmine uygun el çırpma, zıplama ve dönme hareketleri yapılır. Bu bölüm çocukların enerjisini yükseltir ve ısınma olarak görev yapar.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">15-30 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Pokemon Avı ve Oyunlar</h4>
              <p className="text-gray-700 text-sm">Gösterinin en heyecanlı bölümü! Pokemon avı başlatılır ve çocuklar mekanda gizlenmiş Pokemon kartlarını ararlar. Ardından Poke Ball fırlatma yarışması ve "Kim Bu Pokemon?" bilgi yarışması oynanır. Pikachu oyunlara hakem ve yardımcı olarak katılır. Her oyunun sonunda kazananlara ödüller dağıtılır.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-red-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">30-40 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Pokemon Evrimi Dans Partisi</h4>
              <p className="text-gray-700 text-sm">Özel bir koreografi ile çocuklar Pokemon evrimini canlandırır. Yerde küçücük başlayan çocuklar, müzik hızlandıkça büyüyerek dans eder ve son aşamada en güçlü Pokemon gibi hareket eder. Pikachu da evrim dans figürlerini gösterir. Çocuklar bayılır ve bu bölüm en çok fotoğraflanan an olur.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">40-50 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Fotoğraf Çekimi ve Ödül Töreni</h4>
              <p className="text-gray-700 text-sm">Tüm çocuklara "Pokemon Eğitmeni" sertifikası ve rozeti dağıtılır. Doğum günü çocuğuna "Pokemon Ustası" unvanı verilir. Pikachu ile tek tek ve grup fotoğrafları çekilir. Özel pozlar, komik kadreler ve aile fotoğrafları bu bölümde yer alır.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-purple-500 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">50-55 dk</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Veda: "Pika Pika, Görüşürüz!"</h4>
              <p className="text-gray-700 text-sm">Pikachu, doğum günü çocuğuna özel bir hediye sunar ve tüm çocuklara el sallar. "Pika Pika" diyerek dans ederek sahneden ayrılır. Konfeti patlatılır ve çocuklar alkışlarla Pikachu'yu uğurlar. Sıcak ve neşeli bir kapanış ile gösteri tamamlanır.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bölüm 6 */}
      <h2 id="susleme-detay" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Pokemon Süsleme ve Parti Detayları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pokemon temalı doğum günü partisinin atmosferini tamamlayan en önemli unsurlardan biri, görsel olarak etkileyici bir süsleme düzenidir. Sarı, kırmızı ve siyah renk paleti Pokemon evreninin ikonik renklerini yansıtırken, Poke Ball temalı detaylar mekanı bir Pokemon dünyasına dönüştürür.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-yellow-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🎨 Renk Paleti ve Dekorasyon Detayları</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; <strong>Ana Renkler:</strong> Sarı (Pikachu), kırmızı-beyaz (Poke Ball), siyah (vurgu renk)</li>
            <li>&#8226; <strong>Balon Kemeri:</strong> Sarı-kırmızı-siyah balon kemeri ile giriş dekorasyonu, Poke Ball şeklinde dev balon</li>
            <li>&#8226; <strong>Arka Plan:</strong> Pokemon logosu ve Pikachu figürlü fotoğraf köşesi</li>
            <li>&#8226; <strong>Masa Düzeni:</strong> Pokemon temalı tabak, bardak, peçete seti, Poke Ball şeklinde şekerleme kutuları</li>
            <li>&#8226; <strong>Detaylar:</strong> Zemine yapıştırılan Pikachu ayak izleri, tavana asılan Pokemon figürleri</li>
          </ul>
        </div>

        <div className="bg-white border border-yellow-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">🎂 Pokemon Temalı İkramlar</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; <strong>Pasta:</strong> Pikachu figürlü fondant pasta veya Poke Ball şeklinde katmanlı pasta</li>
            <li>&#8226; <strong>Cupcake:</strong> Her biri farklı Pokemon figürlü mini kekler</li>
            <li>&#8226; <strong>Kurabiye:</strong> Poke Ball ve Pikachu yüzü şeklinde özel kurabiyeler</li>
            <li>&#8226; <strong>İçecek:</strong> "Pikachu Suyu" etiketli sarı renkli limonata, "Poke Ball Punch" meyve suyu</li>
            <li>&#8226; <strong>Parti Çantası:</strong> Pokemon çıkartma, mini figür ve şekerleme içeren hediye paketleri</li>
          </ul>
        </div>
      </div>

      {/* Gerçek Hikaye */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-8 border border-yellow-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🎉 Gerçek Hikaye: 7 Yaş Pokemon Partisi - Kadıköy</h4>
        <p className="text-gray-700 text-sm mb-4">
          Küçük Berk'in 7. doğum gününde Pokemon temalı bir organizasyon hazırladık. Berk, Pokemon kartı koleksiyonuna bayılan bir çocuktu ve en büyük hayali Pikachu ile tanışmaktı. 35 çocuğun katıldığı parti, Kadıköy'de geniş bir salonsa gerçekleşti. Salon sarı-kırmızı balonlarla süslenmişti ve girişte dev bir Poke Ball balon karşılıyordu misafirleri.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Pokemon müziği yükseldiğinde çocuklar heyecandan bağırmaya başladı. Pikachu dans ederek sahneye çıkınca Berk koşarak Pikachu'ya sarıldı. Pokemon avında 3 takım oluşturuldu ve 15 gizli Pokemon kartı mekana yerleştirildi. Çocuklar sanki gerçek Pokemon eğitmenleri gibi her köşeyi aradı. Poke Ball fırlatma yarışmasında rekabet kızışırken kahkahalar eksik olmadı. Berk, gece yatarken "Baba, Pikachu gerçekmiş!" diyerek uyudu.
        </p>
        <p className="text-gray-600 text-xs italic">
          — Pokemon temalı organizasyon, çocukların hayal dünyasını gerçeğe dönüştüren ve onlara kahramanlarıyla buluşma fırsatı veren eşsiz bir deneyimdir.
        </p>
      </div>

      {/* SSS */}
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
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Pikachu Karakter Kiralama Hizmetimiz</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Pikachu ve Pokemon temalı doğum günü organizasyonu ile çocuğunuza unutulmaz bir macera yaşatın. Pokemon avı, dans gösterisi, Poke Ball yarışması ve fotoğraf seansı dahil profesyonel organizasyon paketleri sunuyoruz. İstanbul'un tüm semtlerinde hizmetinizdeyiz.
        </p>
        <Link
          to="/karakter/pikachu-kiralama-istanbul"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Pikachu Kiralama Sayfasına Git →
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎪 Pokemon Temalı Doğum Günü Partisi Planlayın!</h3>
        <p className="mb-6 leading-relaxed">
          Pikachu eşliğinde enerji dolu bir doğum günü yaşatın. Pokemon avı, dans gösterisi ve interaktif oyunlar dahil komple organizasyon paketleri için hemen bizi arayın. Çocuğunuzun en sevdiği kahraman artık kapınızda!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-yellow-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            📞 Hemen Ara: 0530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Pikachu%20Pokemon%20parti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            💬 WhatsApp ile Bilgi Alın
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="pikachu-pokemon-parti"
      faqData={faqData}
      relatedServicePath="/karakter/pikachu-kiralama-istanbul"
      relatedServiceName="Pikachu Kiralama"
    >
      {content}
    </BlogDetail>
  )
}

export default PikachuPokemonParti
