import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const ApartmanBahcesindeDogumGunu = () => {
  const faqData = [
    {
      question: 'Apartman bahçesinde doğum günü yapmak için yönetici izni zorunlu mu?',
      answer: 'Evet, Kat Mülkiyeti Kanunu\'na göre ortak alanların kullanımı için yönetici veya kat malikleri kurulunun onayı gereklidir. Yazılı izin almak hem yasal güvence sağlar hem de olası komşu şikayetlerini önler.'
    },
    {
      question: 'Apartman bahçesinde parti için saat sınırlaması var mı?',
      answer: 'Çevre ve Şehircilik Bakanlığı Gürültü Yönetmeliği\'ne göre hafta içi 07:00-22:00, hafta sonu 10:00-22:00 saatleri arasında etkinlik düzenlenebilir. Ancak apartman yönetim planınızda daha kısıtlayıcı saatler belirlenmiş olabilir, bu nedenle yönetim planını mutlaka kontrol edin.'
    },
    {
      question: 'Komşular şikayet ederse ne olur?',
      answer: 'İzin almadan yapılan etkinliklerde komşular zabıtaya veya polise şikayette bulunabilir. Bu durumda idari para cezası uygulanabilir. Ancak önceden izin almış, saat kısıtlamalarına uymuş ve komşuları bilgilendirmişseniz yasal olarak güçlü bir konumdasınız.'
    },
    {
      question: 'Apartman bahçesinde müzik çalabilir miyiz?',
      answer: 'Belirli desibel sınırlarını aşmamak koşuluyla müzik çalabilirsiniz. Konut alanlarında gündüz saatlerinde 65 dB sınırı geçerlidir. Bluetooth hoparlör kullanarak sesi kontrol altında tutmanız ve bass ağırlıklı müzikten kaçınmanız önerilir.'
    },
    {
      question: 'Apartman bahçesinde balon ve süsleme yapabilir miyim?',
      answer: 'Evet, ancak ortak alana zarar vermemek koşuluyla süsleme yapabilirsiniz. Yapıştırıcı, çivi veya boya gibi kalıcı iz bırakacak malzemeler kullanmaktan kaçının. Etkinlik sonrası tüm süslemeleri kaldırmak ve alanı temizlemek sizin sorumluluğunuzdadır.'
    },
    {
      question: 'Profesyonel organizasyon firması tutmak apartman partisi için avantaj sağlar mı?',
      answer: 'Kesinlikle evet. Profesyonel firmalar ses seviyesi kontrolü, temizlik garantisi ve sigorta gibi konularda deneyimlidir. Ayrıca apartman yönetimine sunabileceğiniz resmi bir organizasyon planı hazırlamanızda da yardımcı olurlar, bu da izin alma sürecini kolaylaştırır.'
    }
  ]

  const relatedServicePath = '/organizasyonlar/palyaco-kiralama'
  const relatedServiceName = 'Palyaço Kiralama'

  const content = (
    <>
      {/* Hero Giriş */}
      <p className="text-lg leading-relaxed mb-6">
        İstanbul'da yaşayan aileler için apartman bahçesi, çocuk doğum günü organizasyonları açısından hem ekonomik hem de pratik bir mekan alternatifidir. Ancak ortak alan kullanımı yasal düzenlemelerle çerçevelenmiştir ve belirli bir izin süreci gerektirir. Bu rehberde, apartman bahçesinde doğum günü partisi düzenlemek için gereken tüm yasal adımları, komşu ilişkilerini yönetme stratejilerini ve profesyonel destek seçeneklerini detaylı şekilde ele alıyoruz.
      </p>

      <p className="text-base leading-relaxed mb-8">
        Doğru planlama ve izin sürecini takip ettiğinizde, apartman bahçenizi çocuğunuz için unutulmaz bir parti mekanına dönüştürebilirsiniz. Üstelik salon kiralama maliyetlerinden tasarruf ederken, çocukların açık havada özgürce eğlenmesini sağlayabilirsiniz.
      </p>

      {/* İçindekiler */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">İçindekiler</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><a href="#yasal-cerceve" className="text-green-700 hover:text-green-900 hover:underline">Yasal Çerçeve: Kat Mülkiyeti Kanunu ve Ortak Alan Kullanımı</a></li>
          <li><a href="#yonetici-izni" className="text-green-700 hover:text-green-900 hover:underline">Yönetici İzni Alma Süreci (Adım Adım)</a></li>
          <li><a href="#gurultu-yonetmeligi" className="text-green-700 hover:text-green-900 hover:underline">Gürültü Yönetmeliği ve Desibel Sınırları</a></li>
          <li><a href="#saat-kisitlamalari" className="text-green-700 hover:text-green-900 hover:underline">Saat Kısıtlamaları ve Uygun Zaman Dilimleri</a></li>
          <li><a href="#komsu-bilgilendirme" className="text-green-700 hover:text-green-900 hover:underline">Komşu Bilgilendirme Stratejileri</a></li>
          <li><a href="#temizlik-sorumlulugu" className="text-green-700 hover:text-green-900 hover:underline">Temizlik Sorumluluğu ve Hasar Güvencesi</a></li>
          <li><a href="#profesyonel-destek" className="text-green-700 hover:text-green-900 hover:underline">Profesyonel Destek ile Sessiz ve Eğlenceli Parti</a></li>
          <li><a href="#metro-ulasim" className="text-green-700 hover:text-green-900 hover:underline">Toplu Taşıma ve Ulaşım Bilgisi</a></li>
          <li><a href="#kontrol-listesi" className="text-green-700 hover:text-green-900 hover:underline">Apartman Bahçesi Parti Kontrol Listesi</a></li>
        </ol>
      </div>

      {/* Bölüm 1: Yasal Çerçeve */}
      <h2 id="yasal-cerceve" className="text-2xl font-bold text-gray-900 mt-10 mb-5">1. Yasal Çerçeve: Kat Mülkiyeti Kanunu ve Ortak Alan Kullanımı</h2>

      <div className="bg-gray-100 border border-gray-300 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-gray-800 mb-2">Yasal Bilgi: Kat Mülkiyeti Kanunu Madde 18</h3>
        <p className="text-gray-700 leading-relaxed">
          634 sayılı Kat Mülkiyeti Kanunu'nun 18. maddesi, kat maliklerinin ortak yerleri kullanırken doğruluk kurallarına uymak ve birbirlerini rahatsız etmemekle yükümlü olduklarını belirtir. Apartman bahçesi, tüm kat maliklerinin ortak kullanım alanıdır ve münhasır kullanım hakkı bulunmamaktadır.
        </p>
      </div>

      <p className="text-base leading-relaxed mb-4">
        Türk hukuk sisteminde apartman bahçeleri "ortak alan" statüsündedir. Bu alanların kullanımı, apartmanın yönetim planı ve Kat Mülkiyeti Kanunu çerçevesinde düzenlenir. Doğum günü partisi gibi geçici etkinlikler için ortak alanın kullanılması mümkündür, ancak belirli koşulların yerine getirilmesi gerekir.
      </p>

      <p className="text-base leading-relaxed mb-4">
        Yönetim planında açıkça yasaklanmamış etkinlikler, diğer kat maliklerinin haklarını ihlal etmemek koşuluyla gerçekleştirilebilir. Ancak yönetim planında "ortak alanlarda etkinlik düzenlenemez" gibi bir hüküm varsa, kat malikleri kurulu kararıyla bu hükmün değiştirilmesi veya özel izin alınması gerekir.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5 mb-6">
        <h3 className="font-bold text-red-800 mb-2">Dikkat!</h3>
        <p className="text-red-700 leading-relaxed">
          İzinsiz yapılan etkinliklerde komşuların zabıtaya başvurma hakkı bulunmaktadır. Kabahatler Kanunu'nun 36. maddesi gereğince gürültü yapanlara idari para cezası (2026 yılı için güncellenen tutar) uygulanabilir. Ayrıca ortak alana verilen zararlardan doğrudan kat maliki sorumlu tutulur.
        </p>
      </div>

      <p className="text-base leading-relaxed mb-6">
        Önemle belirtmek gerekir ki, kiracılar da ortak alanları kullanma hakkına sahiptir. Ancak kiracının ev sahibinden de onay alması, olası anlaşmazlıkları önlemek açısından tavsiye edilir. Kiracı ile ev sahibi arasındaki kira sözleşmesinde ortak alan kullanımına ilişkin özel hükümler olup olmadığını kontrol etmek faydalı olacaktır.
      </p>

      {/* Bölüm 2: Yönetici İzni */}
      <h2 id="yonetici-izni" className="text-2xl font-bold text-gray-900 mt-10 mb-5">2. Yönetici İzni Alma Süreci (Adım Adım)</h2>

      <p className="text-base leading-relaxed mb-6">
        İzin süreci doğru yönetildiğinde hem yasal güvence elde edersiniz hem de komşularınızla ilişkilerinizi sağlıklı tutarsınız. Aşağıdaki adımları sırasıyla takip ederek izin sürecinizi tamamlayabilirsiniz:
      </p>

      {/* Adım 1 */}
      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-5 mb-4">
        <h3 className="font-bold text-green-800 mb-2">Adım 1: Yönetim Planını İnceleyin</h3>
        <p className="text-green-700 leading-relaxed">
          Apartmanınızın yönetim planını temin ederek ortak alan kullanımına ilişkin maddeleri okuyun. Etkinlik düzenlemeye yönelik yasak veya kısıtlama olup olmadığını tespit edin. Yönetim planı, tapu müdürlüğünden veya apartman yöneticisinden edinilebilir.
        </p>
      </div>

      {/* Adım 2 */}
      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-5 mb-4">
        <h3 className="font-bold text-green-800 mb-2">Adım 2: Yöneticiyle Ön Görüşme Yapın</h3>
        <p className="text-green-700 leading-relaxed">
          Apartman yöneticinize etkinlik planınızı sözlü olarak anlatın. Tarih, saat, tahmini katılımcı sayısı ve etkinlik türü hakkında bilgi verin. Bu ön görüşme, resmi başvuru öncesinde olası itirazları öğrenmenizi sağlar.
        </p>
      </div>

      {/* Adım 3 */}
      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-5 mb-4">
        <h3 className="font-bold text-green-800 mb-2">Adım 3: Yazılı Başvuru Hazırlayın</h3>
        <p className="text-green-700 leading-relaxed">
          Etkinlik detaylarını içeren yazılı bir dilekçe hazırlayın. Dilekçenizde şu bilgiler yer almalıdır: etkinlik tarihi ve saati, başlangıç-bitiş saatleri, tahmini kişi sayısı (yetişkin ve çocuk ayrı), kullanılacak ekipmanlar, ses düzeni planı, temizlik taahhüdü ve sorumluluk beyanı.
        </p>
      </div>

      {/* Adım 4 */}
      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-5 mb-4">
        <h3 className="font-bold text-green-800 mb-2">Adım 4: Kat Malikleri Onayı</h3>
        <p className="text-green-700 leading-relaxed">
          Küçük çaplı etkinlikler için genellikle yönetici onayı yeterlidir. Ancak büyük organizasyonlarda (50+ kişi, profesyonel ses sistemi vb.) kat malikleri kurulunun çoğunluk kararı gerekebilir. Yöneticinize bu konuda danışın.
        </p>
      </div>

      {/* Adım 5 */}
      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-5 mb-6">
        <h3 className="font-bold text-green-800 mb-2">Adım 5: Yazılı Onayı Alın ve Saklayın</h3>
        <p className="text-green-700 leading-relaxed">
          Yöneticiden veya kat malikleri kurulundan yazılı onay alın. Bu belgeyi etkinlik günü yanınızda bulundurun. Olası bir şikayet durumunda bu belge sizin yasal güvenceniz olacaktır. Onay belgesinde tarih, saat, imza ve kaşe (varsa) bulunmalıdır.
        </p>
      </div>

      <div className="bg-gray-100 border border-gray-300 rounded-lg p-5 mb-8">
        <h3 className="font-bold text-gray-800 mb-2">Yasal Bilgi: Dilekçe Örneği Başlığı</h3>
        <p className="text-gray-700 leading-relaxed">
          "Sayın Apartman Yöneticiliği, [Tarih] tarihinde saat [Başlangıç]-[Bitiş] arasında apartman bahçesinde çocuğumuzun doğum günü kutlaması düzenlemek istiyoruz. Tahmini [X] kişilik etkinliğimizde gürültü yönetmeliğine uyulacak, etkinlik sonrası alan eksiksiz temizlenecektir. Onayınızı rica ederiz." Bu şablonu kendi bilgilerinize göre düzenleyerek kullanabilirsiniz.
        </p>
      </div>

      {/* Bölüm 3: Gürültü Yönetmeliği */}
      <h2 id="gurultu-yonetmeligi" className="text-2xl font-bold text-gray-900 mt-10 mb-5">3. Gürültü Yönetmeliği ve Desibel Sınırları</h2>

      <p className="text-base leading-relaxed mb-4">
        Çevresel Gürültünün Değerlendirilmesi ve Yönetimi Yönetmeliği, konut bölgelerindeki gürültü seviyesini düzenler. Çocuk partilerinde en sık karşılaşılan sorun, müzik sesi ve çocuk çığlıklarıyla oluşan gürültüdür. Bu konuda bilinçli olmak, hem yasal sorun yaşamamanızı hem de komşu ilişkilerinizi korumanızı sağlar.
      </p>

      <div className="bg-gray-100 border border-gray-300 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-gray-800 mb-2">Yasal Bilgi: Konut Alanlarında Gürültü Sınırları</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
          <li><strong>Gündüz (07:00-19:00):</strong> Maksimum 65 dB (konut alanı dış ortam)</li>
          <li><strong>Akşam (19:00-23:00):</strong> Maksimum 60 dB</li>
          <li><strong>Gece (23:00-07:00):</strong> Maksimum 55 dB (parti yapılmamalı)</li>
          <li><strong>Referans:</strong> Normal konuşma sesi yaklaşık 60 dB, çocuk çığlığı 80-90 dB, küçük hoparlör 70-85 dB arasındadır</li>
        </ul>
      </div>

      <p className="text-base leading-relaxed mb-4">
        Pratik olarak şu önlemleri alabilirsiniz: Bluetooth hoparlörü düşük-orta seviyede kullanın, bass ağırlıklı müzikten kaçının, oyunları mümkünse kapalı bir alana yönlendirin ve çocukların toplu çığlık atacağı oyunlar yerine daha sakin aktiviteler tercih edin. Profesyonel animatörler bu konuda deneyimlidir ve ses seviyesini kontrol altında tutabilir.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5 mb-8">
        <h3 className="font-bold text-red-800 mb-2">Dikkat!</h3>
        <p className="text-red-700 leading-relaxed">
          Gürültü şikayetlerinde zabıta desibelmetre ile ölçüm yapabilir. Sınırların aşıldığı tespit edilirse, ilk ihlalde uyarı, tekrarlayan ihlallerde idari para cezası uygulanır. Canlı müzik veya DJ performansı apartman bahçesinde kesinlikle önerilmez; bunun yerine düşük sesli Bluetooth hoparlör kullanmanız tavsiye edilir.
        </p>
      </div>

      {/* Bölüm 4: Saat Kısıtlamaları */}
      <h2 id="saat-kisitlamalari" className="text-2xl font-bold text-gray-900 mt-10 mb-5">4. Saat Kısıtlamaları ve Uygun Zaman Dilimleri</h2>

      <p className="text-base leading-relaxed mb-4">
        Doğum günü partiniz için doğru zaman dilimini seçmek, hem yasal uyum hem de komşu memnuniyeti açısından kritik önem taşır. Genel gürültü yönetmeliği saatlerine ek olarak, apartmanınızın yönetim planındaki özel hükümleri de dikkate almanız gerekir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-5">
          <h3 className="font-bold text-green-800 mb-2">Önerilen Saatler</h3>
          <ul className="list-disc list-inside text-green-700 space-y-1">
            <li>Hafta sonu: 11:00 - 17:00</li>
            <li>Hafta içi: 14:00 - 18:00</li>
            <li>En ideal: Cumartesi 13:00 - 16:00</li>
            <li>Etkinlik süresi: Maksimum 3 saat</li>
          </ul>
        </div>
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5">
          <h3 className="font-bold text-red-800 mb-2">Kaçınılması Gereken Saatler</h3>
          <ul className="list-disc list-inside text-red-700 space-y-1">
            <li>13:00 - 15:00 arası (öğle dinlenme)</li>
            <li>22:00 sonrası (yasal sınır)</li>
            <li>Pazar sabahı erken saatler</li>
            <li>Resmi tatil günleri (hassasiyet)</li>
          </ul>
        </div>
      </div>

      <p className="text-base leading-relaxed mb-8">
        Özellikle küçük çocukların (3-6 yaş) partileri için öğleden sonra erken saatler idealdir. Bu yaş grubundaki çocuklar genellikle 2-2,5 saat sonra yorulmaya başlar, bu da doğal bir bitiş zamanı oluşturur. Daha büyük çocuklar (7-12 yaş) için 3 saatlik bir süre planlanabilir. Parti saatlerini davetiyede net olarak belirtin ve bitiş saatine sadık kalın.
      </p>

      {/* Bölüm 5: Komşu Bilgilendirme */}
      <h2 id="komsu-bilgilendirme" className="text-2xl font-bold text-gray-900 mt-10 mb-5">5. Komşu Bilgilendirme Stratejileri</h2>

      <p className="text-base leading-relaxed mb-4">
        Başarılı bir apartman bahçesi partisinin anahtarı, komşularla iyi iletişimdir. Proaktif bilgilendirme, olası şikayetleri büyük ölçüde azaltır. Araştırmalar, önceden bilgilendirilen komşuların gürültüye karşı çok daha toleranslı olduğunu göstermektedir.
      </p>

      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-5 mb-6">
        <h3 className="font-bold text-green-800 mb-2">İzin ve Bilgilendirme: En Az 1 Hafta Önceden</h3>
        <p className="text-green-700 leading-relaxed mb-3">
          Partiden en az bir hafta önce tüm komşulara yazılı bir bilgilendirme notu bırakın. Bu notta şunlar yer almalıdır:
        </p>
        <ul className="list-disc list-inside text-green-700 space-y-1">
          <li>Etkinliğin tarihi ve kesin saatleri (başlangıç-bitiş)</li>
          <li>Etkinliğin niteliği (çocuk doğum günü kutlaması)</li>
          <li>Alınan önlemler (ses kontrolü, temizlik taahhüdü)</li>
          <li>Sizin iletişim numaranız (sorun olursa ulaşabilmeleri için)</li>
          <li>Anlayış ve hoşgörüleri için teşekkür</li>
        </ul>
      </div>

      <p className="text-base leading-relaxed mb-4">
        Komşu bilgilendirmede kişisel dokunuş fark yaratır. Mümkünse kapı kapı dolaşarak yüz yüze bilgilendirme yapın. Özellikle doğrudan bahçeye bakan dairelerdeki komşulara ekstra ilgi gösterin. Küçük bir jest olarak komşulara pasta veya kurabiyeden ikram etmek, ilişkileri güçlendirir ve olası gerginlikleri baştan önler.
      </p>

      <p className="text-base leading-relaxed mb-4">
        Eğer apartmanınızda yaşlı, hasta veya gece çalışan komşular varsa, onların durumunu özellikle göz önünde bulundurun. Bu kişilere ayrıca bilgilendirme yaparak hassasiyetinizi gösterin. Gerekirse parti saatlerini bu komşuların programına göre ayarlamak, uzun vadede komşuluk ilişkilerinize büyük katkı sağlayacaktır.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5 mb-8">
        <h3 className="font-bold text-red-800 mb-2">Dikkat!</h3>
        <p className="text-red-700 leading-relaxed">
          Komşulara bilgi vermeden parti düzenlemek, en sık şikayet nedenlerinden biridir. Bilgilendirilmeyen komşular gürültüden çok, "bilgilendirilmeme" durumundan rahatsız olmaktadır. Kısa bir bilgilendirme notu, olası pek çok sorunu önler.
        </p>
      </div>

      {/* Bölüm 6: Temizlik Sorumluluğu */}
      <h2 id="temizlik-sorumlulugu" className="text-2xl font-bold text-gray-900 mt-10 mb-5">6. Temizlik Sorumluluğu ve Hasar Güvencesi</h2>

      <p className="text-base leading-relaxed mb-4">
        Apartman bahçesinde parti düzenleyen kat maliki veya kiracı, etkinlik sonrası alanın eski haline getirilmesinden tamamen sorumludur. Temizlik konusu, izin sürecinin en kritik parçalarından biridir ve yöneticiye verilen taahhüdün yerine getirilmesi yasal bir zorunluluktur.
      </p>

      <div className="bg-gray-100 border border-gray-300 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-gray-800 mb-2">Yasal Bilgi: Ortak Alana Verilen Zarar</h3>
        <p className="text-gray-700 leading-relaxed">
          Kat Mülkiyeti Kanunu'nun 19. maddesi gereğince, ortak yerlerde kat maliklerinin hak ve yükümlülükleri düzenlenmiştir. Ortak alana verilen her türlü zarar, zararı veren kat maliki tarafından karşılanmak zorundadır. Çim, çiçek, ağaç, bank, aydınlatma gibi bahçe unsurlarına zarar verilmesi durumunda tazminat sorumluluğu doğar.
        </p>
      </div>

      <p className="text-base leading-relaxed mb-4">
        Temizlik planınızı önceden oluşturun. Büyük çöp poşetleri, kağıt havlu, ıslak mendil ve süpürge gibi temizlik malzemelerini hazır bulundurun. Konfeti, serpantin ve uçan balon gibi toplanması zor süslemelerden kaçının. Yere serilecek bir branda veya piknik örtüsü, hem oturma alanı hem de zemin koruma işlevi görür.
      </p>

      <p className="text-base leading-relaxed mb-4">
        Etkinlik biter bitmez temizliğe başlayın. Gecikmeli temizlik, komşu şikayetlerine neden olabilir. İdeal olarak, parti bitişinden sonraki 30 dakika içinde bahçe eski haline getirilmelidir. Çimlerin zarar görmemesi için ağır mobilya ve ekipmanların altına koruyucu paspas veya tahta koyun.
      </p>

      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-5 mb-8">
        <h3 className="font-bold text-green-800 mb-2">İzin Kolaylaştırıcı: Temizlik Taahhüt Maddesi</h3>
        <p className="text-green-700 leading-relaxed">
          Yöneticiye verdiğiniz dilekçede "Etkinlik sonrasında bahçe alanı 30 dakika içinde tamamen temizlenecek, olası zararlar tarafımızca karşılanacaktır" ibaresini eklemek, izin alma olasılığınızı önemli ölçüde artırır. Ayrıca etkinlik öncesi ve sonrası bahçenin fotoğraflarını çekmek, olası hasar anlaşmazlıklarında kanıt niteliği taşır.
        </p>
      </div>

      {/* Bölüm 7: Profesyonel Destek */}
      <h2 id="profesyonel-destek" className="text-2xl font-bold text-gray-900 mt-10 mb-5">7. Profesyonel Destek ile Sessiz ve Eğlenceli Parti</h2>

      <p className="text-base leading-relaxed mb-4">
        Apartman bahçesinde düzenlenen partilerde en büyük endişe gürültü kontrolüdür. Bu noktada profesyonel animatörler ve organizasyon firmaları devreye girer. Deneyimli animatörler, çocukları eğlendirirken ses seviyesini kontrol altında tutma konusunda uzmanlaşmıştır.
      </p>

      <p className="text-base leading-relaxed mb-4">
        Özellikle <Link to="/organizasyonlar/palyaco-kiralama" className="text-green-700 font-semibold hover:text-green-900 underline">düşük sesli palyaço gösterileri</Link>, apartman bahçesi partileri için ideal bir seçenektir. Profesyonel palyaçolar, megafon veya hoparlör kullanmadan, tamamen doğal sesleriyle ve mimikleriyle çocukları saatlerce eğlendirebilir. Balon katlama, sihirbazlık numaraları ve interaktif oyunlar, müzik gerektirmeden harika bir parti atmosferi yaratır.
      </p>

      <p className="text-base leading-relaxed mb-4">
        Bir diğer sessiz ve yaratıcı aktivite ise <Link to="/organizasyonlar/yuz-boyama" className="text-green-700 font-semibold hover:text-green-900 underline">yüz boyama etkinliğidir</Link>. Yüz boyama, çocukların bireysel olarak ilgilenildiği, sıra beklerken diğer çocukların sakin aktivitelerle meşgul olduğu, doğası gereği sessiz bir etkinliktir. Kelebek, süper kahraman veya hayvan desenleri, çocukların yüzlerinde büyük bir heyecan yaratırken komşularınızı rahatsız etmez.
      </p>

      <p className="text-base leading-relaxed mb-4">
        Profesyonel bir organizasyon firmasıyla çalışmanın bir diğer avantajı da, yöneticiye sunabileceğiniz resmi bir organizasyon planının hazırlanmasında yardımcı olmalarıdır. Deneyimli firmalar, apartman bahçesi etkinliklerinin gereksinimlerini bilir ve izin sürecinde size rehberlik edebilir. Ayrıca sorumluluk sigortası bulunan firmalar, olası hasar durumlarında ek güvence sağlar.
      </p>

      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-5 mb-8">
        <h3 className="font-bold text-green-800 mb-2">Profesyonel Avantaj: Apartman Dostu Aktiviteler</h3>
        <ul className="list-disc list-inside text-green-700 space-y-2">
          <li><strong>Palyaço gösterisi:</strong> Megafonsuz, doğal ses tonu ile çocukları eğlendirir</li>
          <li><strong>Yüz boyama:</strong> Tamamen sessiz, bireysel ilgi gerektiren yaratıcı aktivite</li>
          <li><strong>Balon süsleme:</strong> Görsel şölen oluşturur, sıfır gürültü üretir</li>
          <li><strong>Sihirbazlık:</strong> Çocukların dikkatini toplar, kontrollü ses ortamı sağlar</li>
          <li><strong>El sanatları atölyesi:</strong> Boyama, hamur, kolaj gibi masabaşı aktiviteler sessiz ve eğlencelidir</li>
        </ul>
      </div>

      {/* Bölüm 8: Metro ve Ulaşım */}
      <h2 id="metro-ulasim" className="text-2xl font-bold text-gray-900 mt-10 mb-5">8. Toplu Taşıma ve Ulaşım Bilgisi</h2>

      <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg p-5 mb-6">
        <h3 className="font-bold text-emerald-800 mb-3">Metro ve Toplu Taşıma Rehberi</h3>
        <p className="text-emerald-700 leading-relaxed mb-4">
          Apartmanınıza en yakın toplu taşıma durağını davetlilere bildirmeniz organizasyonun başarısını artırır. Özellikle İstanbul trafiğinde araçla ulaşım zor olabilir; bu nedenle davetiyenizde toplu taşıma alternatiflerini belirtmeniz davetlilerinize büyük kolaylık sağlar.
        </p>
        <ul className="list-disc list-inside text-emerald-700 space-y-2">
          <li><strong>Kadıköy - M4 Metro Hattı:</strong> Kadıköy'den Sabiha Gökçen Havalimanı'na uzanan hat, Anadolu Yakası'nın önemli bağlantı noktasıdır. Bostancı, Maltepe ve Kartal bölgelerindeki apartman partileri için idealdir.</li>
          <li><strong>Bostancı İstasyonu:</strong> Marmaray ve M4 metro hattının kesişim noktası olan Bostancı, hem Avrupa hem Anadolu yakasından gelen davetliler için kolay erişim sağlar.</li>
          <li><strong>Ataşehir-Ümraniye Metro Hattı:</strong> Bu hat üzerindeki duraklara yakın apartmanlarda düzenlenen partiler, geniş bir coğrafyadan davetli çekebilir. Ataşehir ve Ümraniye'nin yoğun konut bölgelerine hizmet verir.</li>
          <li><strong>Beylikdüzü Metrobüs:</strong> Avrupa Yakası'nda Beylikdüzü ve çevresindeki apartmanlar için metrobüs hattı en hızlı ulaşım alternatifidir. Son durak Beylikdüzü Sondurak'tan minibüs veya yürüme mesafesindeki apartmanlar için davetiyede yol tarifi ekleyin.</li>
        </ul>
      </div>

      <p className="text-base leading-relaxed mb-4">
        Davetiyenize eklemeniz gereken ulaşım bilgileri: en yakın metro/metrobüs durağı, duraktan apartmana yürüme süresi, varsa otopark bilgisi ve alternatif toplu taşıma seçenekleri. Bu bilgiler özellikle farklı semtlerden gelen aileler için çok değerlidir. Ayrıca apartmanınızın yakınında ücretli veya ücretsiz otopark olup olmadığını da belirtin; araçla gelen davetlileriniz apartman önünü tıkamaz ve komşuların şikayetine neden olmaz.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5 mb-8">
        <h3 className="font-bold text-red-800 mb-2">Dikkat!</h3>
        <p className="text-red-700 leading-relaxed">
          Davetlilerin araçlarını apartman otoparkına veya giriş yoluna park etmesi, komşu şikayetlerinin en yaygın nedenlerinden biridir. Davetiyenizde park yasağını ve alternatif park alanlarını mutlaka belirtin. Gerekirse yol tarifini görsel harita ile destekleyin.
        </p>
      </div>

      {/* Bölüm 9: Kontrol Listesi */}
      <h2 id="kontrol-listesi" className="text-2xl font-bold text-gray-900 mt-10 mb-5">9. Apartman Bahçesi Parti Kontrol Listesi</h2>

      <p className="text-base leading-relaxed mb-4">
        Aşağıdaki kontrol listesini takip ederek apartman bahçenizde sorunsuz bir doğum günü partisi düzenleyebilirsiniz. Her maddeyi tamamladıkça işaretleyin ve hiçbir adımı atlamadığınızdan emin olun.
      </p>

      <div className="bg-white border-2 border-green-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-green-800 text-lg mb-4">Parti Öncesi (2-4 Hafta Önce)</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Yönetim planını inceleme</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Yöneticiyle ön görüşme</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Yazılı başvuru hazırlama ve teslim etme</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Yazılı onay alma</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Profesyonel animatör/organizasyon firması ile anlaşma</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Davetiye hazırlama (ulaşım bilgisi dahil)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-green-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-green-800 text-lg mb-4">Parti Öncesi (1 Hafta Önce)</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Tüm komşulara yazılı bilgilendirme notu bırakma</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Bahçeye bakan dairelerdeki komşularla yüz yüze görüşme</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Temizlik malzemeleri temin etme</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Süsleme ve parti malzemelerini hazırlama</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-green-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-green-800 text-lg mb-4">Parti Günü</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Bahçenin etkinlik öncesi fotoğrafını çekme</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Koruyucu örtü/branda serme</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Ses seviyesini kontrol altında tutma</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Bitiş saatine kesinlikle uyma</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> 30 dakika içinde tam temizlik yapma</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Bahçenin etkinlik sonrası fotoğrafını çekme</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-green-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-green-800 text-lg mb-4">Parti Sonrası</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Yöneticiye temizlik tamamlandı bilgisi verme</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Komşulara teşekkür etme (varsa ikram bırakma)</li>
          <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#9745;</span> Varsa hasarları tespit edip onarma</li>
        </ul>
      </div>

      {/* CTA Bölümü */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white mt-10 mb-8">
        <h2 className="text-2xl font-bold mb-4">Apartman Bahçesinde Sessiz ve Eğlenceli Parti</h2>
        <p className="text-lg mb-6 opacity-95">
          Profesyonel animatörlerimiz, apartman bahçenizde komşularınızı rahatsız etmeden unutulmaz bir doğum günü partisi düzenler. Düşük sesli palyaço gösterileri, yüz boyama ve sihirbazlık aktiviteleriyle çocuğunuzun en güzel gününü yaşatıyoruz.
        </p>
        <p className="text-lg mb-4 opacity-95">
          Üstelik izin sürecinizde size rehberlik ediyor, yöneticiye sunabileceğiniz profesyonel organizasyon planı hazırlıyoruz.
        </p>
        <Link
          to="/organizasyonlar/palyaco-kiralama"
          className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors text-lg"
        >
          Hemen Bilgi Alın
        </Link>
      </div>

      {/* Son Not */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-gray-800 mb-2">Yasal Bilgi: Sonuç ve Özet</h3>
        <p className="text-gray-700 leading-relaxed">
          Apartman bahçesinde doğum günü partisi düzenlemek yasaldır ve mümkündür. Ancak Kat Mülkiyeti Kanunu, gürültü yönetmelikleri ve apartman yönetim planı çerçevesinde hareket etmeniz zorunludur. Yazılı izin almak, komşuları bilgilendirmek, saat kısıtlamalarına uymak ve temizlik sorumluluğunuzu yerine getirmek, sorunsuz bir parti deneyimi için olmazsa olmaz adımlardır. Profesyonel destek ile bu süreç hem daha kolay hem de daha keyifli hale gelir.
        </p>
      </div>
    </>
  )

  return (
    <BlogDetail slug="apartman-bahcesinde-dogum-gunu" faqData={faqData} relatedServicePath={relatedServicePath} relatedServiceName={relatedServiceName}>
      {content}
    </BlogDetail>
  )
}

export default ApartmanBahcesindeDogumGunu