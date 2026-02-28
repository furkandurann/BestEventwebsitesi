import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const SiteIcindeDogumGunu12Kritik = () => {
  const faqData = [
    {
      question: 'Site içinde doğum günü organizasyonu için yönetimden izin almak zorunlu mu?',
      answer: 'Evet, çoğu site yönetimi ortak alan kullanımı için önceden yazılı izin talep eder. En az 1-2 hafta öncesinden başvurmanız ve etkinlik saatlerini, tahmini katılımcı sayısını ve kullanılacak ekipmanları belirtmeniz önerilir. İzin almadan yapılan organizasyonlar cezai yaptırımlara ve etkinliğin yarıda kesilmesine neden olabilir.'
    },
    {
      question: 'Apartman/site içinde doğum günü partisi saat kaça kadar yapılabilir?',
      answer: 'Genel uygulama hafta içi saat 20:00, hafta sonu ise 21:00\'e kadar açık alanda etkinlik yapılabileceği yönündedir. Ancak her sitenin kendi iç yönetmeliği farklı olabilir. Yönetim planınızı ve site iç yönetmeliğini mutlaka kontrol edin. Kapalı alanlarda (çok amaçlı salon vb.) saatler daha esnek olabilir.'
    },
    {
      question: 'Site bahçesinde balon süsleme ve müzik çalabilir miyiz?',
      answer: 'Balon süsleme genellikle sorun oluşturmaz, ancak helyum balonlarının çevreye zarar vermemesi için dikkatli olunmalıdır. Müzik konusunda ise ses seviyesinin komşuları rahatsız etmeyecek düzeyde tutulması (genellikle 65-70 desibelin altında) gerekir. Bluetooth hoparlör kullanımı büyük ses sistemlerine tercih edilmelidir.'
    },
    {
      question: 'Yağmur yağarsa site içi doğum günü organizasyonu ne olacak?',
      answer: 'Mutlaka bir B planı hazırlayın. Sitenin çok amaçlı salonu veya kapalı otoparkı alternatif mekan olabilir. Yönetimle önceden bu konuyu da görüşün. Çadır veya tente kiralama da bir seçenek olabilir. Profesyonel organizasyon firmaları genellikle yağmur planı konusunda deneyimlidir ve size yardımcı olabilir.'
    },
    {
      question: 'Site içinde profesyonel animatör veya palyaço çalıştırabilir miyiz?',
      answer: 'Evet, profesyonel animatör ve palyaço hizmeti site içi doğum günlerinde en çok tercih edilen eğlence seçeneklerinden biridir. Ancak performans gösterecek kişilerin site girişinde güvenlik kontrolünden geçmesi ve yönetimin bilgilendirilmesi gerekir. Ses seviyesi konusunda da animatörlerinizi önceden uyarmanız önemlidir.'
    },
    {
      question: 'Site doğum günü organizasyonunda oluşabilecek hasarlardan kim sorumludur?',
      answer: 'Organizasyonu düzenleyen daire sakini/kiracı, ortak alanlarda meydana gelen tüm hasarlardan birincil olarak sorumludur. Bu nedenle profesyonel bir organizasyon firmasıyla çalışmak, sigorta kapsamı ve sorumluluk paylaşımı açısından büyük avantaj sağlar. Etkinlik öncesi ve sonrası fotoğraf çekmek de olası anlaşmazlıkları önler.'
    }
  ]

  const relatedServicePath = '/organizasyonlar/palyaco-kiralama'
  const relatedServiceName = 'Palyaço Kiralama'

  const content = (
    <>
      {/* Hero Giriş */}
      <div className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          İstanbul'da yaşayan ailelerin büyük çoğunluğu site veya apartman komplekslerinde ikamet ediyor. Çocuğunuzun doğum gününü evinizin hemen yanındaki bahçede, oyun alanında veya çok amaçlı salonda kutlamak hem pratik hem de ekonomik bir tercih. Ancak site içinde doğum günü organizasyonu yaparken dikkat edilmesi gereken pek çok kritik nokta var. Komşu ilişkilerinden yasal sorumluluklara, gürültü düzenlemelerinden güvenlik önlemlerine kadar her detayı düşünmeniz gerekiyor.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Bu rehberde, site içinde doğum günü partisi düzenlerken karşılaşabileceğiniz tüm olası sorunları ve bunların çözümlerini <strong>12 kritik başlık</strong> altında ele alıyoruz. Yılların deneyimiyle hazırladığımız bu kapsamlı kılavuz, stressiz ve keyifli bir kutlama yapmanızı sağlayacak.
        </p>
      </div>

      {/* İçindekiler */}
      <div className="bg-white border border-gray-300 rounded-xl p-6 mb-10 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><a href="#gurltu-izni" className="text-red-600 hover:text-red-800 hover:underline">Gürültü İzni ve Ses Seviyesi Kontrolü</a></li>
          <li><a href="#yonetim-onayi" className="text-red-600 hover:text-red-800 hover:underline">Site Yönetiminden Resmi Onay Alma</a></li>
          <li><a href="#guvenlik" className="text-red-600 hover:text-red-800 hover:underline">Güvenlik Önlemleri ve Çocuk Emniyeti</a></li>
          <li><a href="#temizlik" className="text-red-600 hover:text-red-800 hover:underline">Temizlik ve Hijyen Planlaması</a></li>
          <li><a href="#park-alani" className="text-red-600 hover:text-red-800 hover:underline">Araç Park Alanı Düzenlemesi</a></li>
          <li><a href="#saat-kisitlamasi" className="text-red-600 hover:text-red-800 hover:underline">Saat Kısıtlaması ve Zamanlama</a></li>
          <li><a href="#komsu-bilgilendirme" className="text-red-600 hover:text-red-800 hover:underline">Komşu Bilgilendirme Stratejisi</a></li>
          <li><a href="#mekan-hazirligi" className="text-red-600 hover:text-red-800 hover:underline">Mekan Hazırlığı ve Dekorasyon</a></li>
          <li><a href="#elektrik-ses" className="text-red-600 hover:text-red-800 hover:underline">Elektrik ve Ses Sistemi Kurulumu</a></li>
          <li><a href="#yagmur-plani" className="text-red-600 hover:text-red-800 hover:underline">Yağmur ve Kötü Hava Planı</a></li>
          <li><a href="#cop-yonetimi" className="text-red-600 hover:text-red-800 hover:underline">Çöp Yönetimi ve Atık Toplama</a></li>
          <li><a href="#sigorta-sorumluluk" className="text-red-600 hover:text-red-800 hover:underline">Sigorta ve Sorumluluk Bilinci</a></li>
        </ol>
      </div>

      {/* Giriş Paragrafı */}
      <div className="mb-10">
        <p className="text-gray-700 leading-relaxed mb-4">
          İstanbul'un Kadıköy, Ataşehir, Ümraniye, Maltepe, Beşiktaş gibi yoğun nüfuslu ilçelerinde binlerce aile site komplekslerinde yaşıyor. Bu sitelerin çoğunda geniş bahçeler, çocuk oyun alanları ve çok amaçlı salonlar mevcut. Doğru planlama ile bu alanlar muhteşem doğum günü mekanlarına dönüşebilir. Gelin, başarılı bir site içi doğum günü organizasyonu için bilmeniz gereken 12 kritik noktayı birlikte inceleyelim.
        </p>
      </div>

      {/* 12 Kritik Nokta — Kart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        {/* 1. Gürültü İzni */}
        <div id="gurltu-izni" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">1</span>
            <h3 className="text-xl font-bold text-gray-900">Gürültü İzni ve Ses Seviyesi Kontrolü</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Site içi doğum günlerinde en sık yaşanan sorun gürültü şikayetleridir. Türkiye'de Çevresel Gürültünün Değerlendirilmesi ve Yönetimi Yönetmeliği'ne göre konut bölgelerinde gündüz saatlerinde 65 dB, gece saatlerinde ise 55 dB sınırı uygulanır. Doğum günü partinizde kullanacağınız müzik sistemi bu sınırları aşmamalıdır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Pratik öneriler:</strong> Büyük hoparlörler yerine taşınabilir Bluetooth hoparlör tercih edin. Müzik sesini konuşma seviyesinin biraz üzerinde tutun. Özellikle {' '}
            <Link to="/organizasyonlar/palyaco-kiralama" className="text-red-600 hover:text-red-800 font-semibold underline">
              profesyonel palyaço
            </Link>{' '}
            ve animatör hizmetlerinde, deneyimli ekipler ses kontrolü konusunda zaten bilinçlidir ve ortama uygun performans sergiler.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Telefonunuza ücretsiz bir desibel ölçer uygulaması indirerek ses seviyesini kontrol edebilirsiniz. Bu basit önlem, olası şikayetlerin önüne geçer.
          </p>
        </div>

        {/* 2. Yönetim Onayı */}
        <div id="yonetim-onayi" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">2</span>
            <h3 className="text-xl font-bold text-gray-900">Site Yönetiminden Resmi Onay Alma</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Ortak alan kullanımı Kat Mülkiyeti Kanunu kapsamında yönetim planı ile düzenlenir. Bu nedenle site bahçesi, sosyal tesis veya çok amaçlı salonu kullanmak için <strong>yazılı izin almanız</strong> şarttır. İzin başvurunuzu etkinlikten en az 10-15 gün önce yapmanız tavsiye edilir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Başvurunuzda şu bilgileri belirtin: etkinlik tarihi ve saatleri, tahmini katılımcı sayısı, kullanılacak alan, müzik/ses sistemi olup olmayacağı, profesyonel hizmet alınacaksa firma bilgileri. Bazı siteler depozito talep edebilir; bu çok normaldir ve alan hasarsız teslim edildiğinde iade edilir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Yönetim kurulu toplantı günlerini öğrenin ve başvurunuzun toplantıda görüşülmesini sağlayın. Sözlü izinler yeterli değildir; mutlaka yazılı veya e-posta ile onay alın.
          </p>
        </div>

        {/* 3. Güvenlik */}
        <div id="guvenlik" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">3</span>
            <h3 className="text-xl font-bold text-gray-900">Güvenlik Önlemleri ve Çocuk Emniyeti</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Çocukların güvenliği her şeyin üstündedir. Site bahçesinde parti yapıyorsanız, alanın sınırlarını belirleyin. Havuz olan sitelerde havuz etrafına geçici bariyer koydurun veya havuz kapılarının kilitli olduğundan emin olun. Yüksek katlara çıkan merdivenler ve asansörler konusunda çocukları uyarın.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Davetli çocukların her birinin yanında en az bir sorumlu yetişkin olmasını sağlayın. Küçük çocuklar için güvenli oyun alanları oluşturun. Alerjisi olan çocukların ailelerinden önceden bilgi alın ve ikram edilecek yiyeceklerde bu konuya dikkat edin.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Site güvenliğini de bilgilendirin; dışarıdan gelecek misafirlerin isimleri güvenliğe önceden verilmeli, böylece girişlerde sorun yaşanmamalıdır. Acil durumlar için en yakın hastane ve sağlık ocağının adresini hazır bulundurun.
          </p>
        </div>

        {/* 4. Temizlik */}
        <div id="temizlik" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">4</span>
            <h3 className="text-xl font-bold text-gray-900">Temizlik ve Hijyen Planlaması</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Parti sonrası temizlik, site yönetimiyle en çok sorun yaşanan konuların başında gelir. Etkinlik başlamadan önce alanın fotoğrafını çekin, etkinlik sonrasında alanı aynı durumda bırakma sorumluluğunuz var. Büyük çöp torbaları, ıslak mendil, kağıt havlu ve temizlik spreyi mutlaka hazır bulundurun.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Yiyecek ikramı yapılacak masaları örtülerle kaplayın, böylece leke sorunu yaşamazsınız. Çimlerin üzerinde parti yapıyorsanız, konfeti ve sim kullanmaktan kaçının; bunlar doğaya zararlıdır ve temizlenmesi çok güçtür. Biyolojik olarak çözünür süslemeler tercih edin.
          </p>
          <p className="text-gray-700 leading-relaxed">
            İdeal olan, partiden sonraki 1 saat içinde tüm temizliği tamamlamaktır. Gerekiyorsa profesyonel temizlik desteği almayı düşünebilirsiniz.
          </p>
        </div>

        {/* 5. Park Alanı */}
        <div id="park-alani" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">5</span>
            <h3 className="text-xl font-bold text-gray-900">Araç Park Alanı Düzenlemesi</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Site dışından gelecek misafirlerinizin araç park etmesi ciddi bir sorun olabilir. Özellikle İstanbul'un yoğun bölgelerinde park yeri bulmak zaten zor; bir de üzerine 15-20 araçlık misafir eklenirse durum kaosa dönebilir. Bu konuyu yönetimle ve güvenlikle önceden konuşun.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Misafir park alanı olan sitelerde bu alanları rezerve edin. Park alanı sınırlıysa, davetiye veya WhatsApp grubunda toplu taşıma ile gelmeleri konusunda misafirlerinizi yönlendirin. Alternatif olarak, site yakınındaki AVM veya otopark seçeneklerini de paylaşabilirsiniz.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Profesyonel organizasyon ekibinin aracı için de park alanı ayırlamayı unutmayın. Ekipman taşıyan araçların geçici olarak yanaşabileceği bir alan belirleyin.
          </p>
        </div>

        {/* 6. Saat Kısıtlaması */}
        <div id="saat-kisitlamasi" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">6</span>
            <h3 className="text-xl font-bold text-gray-900">Saat Kısıtlaması ve Zamanlama</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Site içi etkinlikler için genel kabul görmüş saat aralıkları vardır. Hafta sonu öğleden sonra 14:00-18:00 arası en ideal zamandır. Bu saatler hem çocuklar için uygun hem de akşam sessizlik saatine yeterli mesafe bırakır. Hafta içi organizasyonlar ise genellikle 16:00-19:00 arasında yapılmalıdır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Kurulum için etkinlik başlamadan en az 1 saat önce hazırlığa başlayın. Toparlanma için de etkinlik bitiminden sonra en az 1 saat ayırın. Yani 15:00-17:00 arası parti planlıyorsanız, 14:00'te kuruluma başlayıp 18:00'e kadar toparlanmış olmanız gerekir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Zamanlama konusunda detaylı bir program hazırlayın: karşılama, oyunlar, gösteri, pasta kesimi, ikram ve veda gibi bölümleri saatlerine göre planlayın. Bu sayede süre kontrolünü kaybetmezsiniz.
          </p>
        </div>

        {/* 7. Komşu Bilgilendirme */}
        <div id="komsu-bilgilendirme" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">7</span>
            <h3 className="text-xl font-bold text-gray-900">Komşu Bilgilendirme Stratejisi</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            İyi komşuluk ilişkileri, huzurlu bir site yaşamının temelidir. Doğum günü partinizi planlarken, özellikle yakın komşularınızı ve etkinlik alanına cephesi olan dairelerdeki sakinleri <strong>en az 3-4 gün öncesinden</strong> bilgilendirin. Bu bilgilendirme hem nezaket gereği hem de olası şikayetlerin önlenmesi için çok önemlidir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bilgilendirme notunuzda tarih, saat aralığı ve olası ses durumunu belirtin. Küçük bir jest olarak "Bu süre zarfında herhangi bir rahatsızlık olursa lütfen beni arayın" diyerek telefon numaranızı paylaşmak, çok olumlu karşılanır. Hatta komşu çocuklarını da partiye davet etmek harika bir ilişki yönetimi stratejisidir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Site WhatsApp grubunuz varsa, orada da kısa bir bilgilendirme mesajı paylaşabilirsiniz. Saygılı ve önceden bilgilendirilmiş bir komşu, partiyi sorun etmez; aksine anlayış gösterir.
          </p>
        </div>

        {/* 8. Mekan Hazırlığı */}
        <div id="mekan-hazirligi" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">8</span>
            <h3 className="text-xl font-bold text-gray-900">Mekan Hazırlığı ve Dekorasyon</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Site bahçesi veya ortak alanı parti mekanına dönüştürmek yaratıcılık gerektirir. Öncelikle alanı ölçün ve kaç kişilik oturma düzeni oluşturabileceğinizi hesaplayın. Çocuk başına en az 2 m² alan hesabı yapmanız konforlu bir parti için yeterlidir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Dekorasyonda dikkat edilmesi gerekenler: Ağaçlara ve bitkilere zarar verecek süslemelerden kaçının. Çim alanlarda sivri uçlu dekorasyon malzemeleri kullanmayın. Balon süslemeleri doğaya zarar vermeyecek şekilde sabitlenmelidir. Masa ve sandalyeler için çim koruyucu altlıklar düşünün.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tema belirleyin ve dekorasyonu buna göre yapın. Tüm süslemelerin kolayca sökülebilir ve toplanabilir türde olmasına dikkat edin. Kalıcı yapıştırıcılar, bant izleri veya boya kesinlikle kullanılmamalıdır.
          </p>
        </div>

        {/* 9. Elektrik ve Ses */}
        <div id="elektrik-ses" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">9</span>
            <h3 className="text-xl font-bold text-gray-900">Elektrik ve Ses Sistemi Kurulumu</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Açık alanda parti yapıyorsanız elektrik kaynağına ihtiyacınız olacak. Site yönetiminden ortak alan elektrik prizlerini kullanma izni alın. Uzatma kabloları kullanacaksanız, bunların su geçirmez tipte olmasına ve kablo kanallarıyla kapatılmasına dikkat edin. Çocukların takılıp düşmesini engellemek için kablolar mutlaka sabitlenmelidir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            {' '}
            <Link to="/organizasyonlar/bubble-show" className="text-red-600 hover:text-red-800 font-semibold underline">
              Bubble show gösterileri
            </Link>{' '}
            gibi profesyonel etkinliklerde genellikle kendi portatif güç kaynağını getiren firmalar tercih edilmelidir. Bu hem güvenlik açısından hem de site elektrik sistemine yük binmemesi açısından önemlidir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ses sistemi olarak küçük taşınabilir hoparlörler yeterlidir. Mikrofon kullanılacaksa feedback (geri besleme) sesine dikkat edin; bu ses komşuları çok rahatsız eder. Ses seviyesini parti boyunca kontrol altında tutun.
          </p>
        </div>

        {/* 10. Yağmur Planı */}
        <div id="yagmur-plani" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">10</span>
            <h3 className="text-xl font-bold text-gray-900">Yağmur ve Kötü Hava Planı</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            İstanbul'un değişken havası, açık alan organizasyonlarında her zaman bir risk faktörüdür. Özellikle ilkbahar ve sonbahar aylarında ani yağmurlar sık yaşanır. Bu nedenle <strong>mutlaka bir B planınız</strong> olmalıdır. Etkinlikten 2-3 gün önce hava durumu tahminlerini yakından takip edin.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            B planı seçenekleri: Sitenin çok amaçlı salonu, kapalı otopark alanı, geniş bir apartman giriş holü veya ev ortamına taşıma. Yönetimden hem açık alan hem de kapalı alan için izin almak en akıllıca harekettir. Portatif tente veya çadır kiralama da düşünülebilir; 3x3 metre tenteler parti masalarını korumak için idealdir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Profesyonel organizasyon firmalarıyla çalışıyorsanız, yağmur planı konusunda deneyimlidirler. Sözleşmenizde kötü hava koşulları durumunda erteleme veya mekan değişikliği maddesi olduğundan emin olun.
          </p>
        </div>

        {/* 11. Çöp Yönetimi */}
        <div id="cop-yonetimi" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">11</span>
            <h3 className="text-xl font-bold text-gray-900">Çöp Yönetimi ve Atık Toplama</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bir çocuk doğum günü partisinden sonra şaşırtıcı miktarda atık çıkar: tabaklar, bardaklar, peçeteler, ambalajlar, balon kalıntıları, hediye paketleri... Bu atıkları doğru yönetmek hem çevre bilinci hem de site kurallarına uyum açısından çok önemlidir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Parti alanına en az 3-4 büyük çöp torbası yerleştirin. Mümkünse geri dönüşüm ve genel atık olarak ayırın. Tek kullanımlık plastik ürünler yerine biyolojik olarak çözünür tabak, bardak ve çatal bıçak setleri tercih edin. Bu hem çevreye hem de sitenin yeşil alanlarına zarar vermez.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Parti biter bitmez çöpleri toplayın ve site çöp konteynerlerine uygun şekilde atın. Çöp konteynerlerini taşırmamaya dikkat edin; gerekirse fazla çöpleri kendi aracınızla uzaklaştırın. Temiz bırakılan bir alan, gelecekteki organizasyon izinlerinizi de kolaylaştırır.
          </p>
        </div>

        {/* 12. Sigorta ve Sorumluluk */}
        <div id="sigorta-sorumluluk" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">12</span>
            <h3 className="text-xl font-bold text-gray-900">Sigorta ve Sorumluluk Bilinci</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bu madde çoğu ailenin göz ardı ettiği ancak en kritik konulardan biridir. Ortak alanda düzenlenen etkinlik sırasında bir çocuğun yaralanması, mülke hasar gelmesi veya üçüncü şahıslara zarar verilmesi durumunda <strong>hukuki sorumluluk organizatöre aittir</strong>. Yani doğum günü partisini siz düzenliyorsanız, sorumluluk sizindir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Profesyonel organizasyon firmalarıyla çalışmanın en büyük avantajlarından biri, genellikle etkinlik sigortasına sahip olmalarıdır. Sözleşme yaparken sigorta kapsamını mutlaka sorun. Kendi başınıza organizasyon yapıyorsanız, ev sigortanızın üçüncü şahıs sorumluluk kapsamını kontrol edin.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Etkinlik öncesi ve sonrası ortak alanın fotoğraflarını çekin. Olası hasar tartışmalarında bu fotoğraflar delil niteliğinde olacaktır. Ayrıca tüm misafirlerinize çocuklarının kendi sorumlulukları altında olduğunu nazikçe hatırlatın.
          </p>
        </div>

      </div>

      {/* Metro/Ulaşım Bilgi Kutusu */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Site Doğum Günü İçin Ulaşım Rehberi: Metro ve Metrobüs Bilgileri</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          İstanbul'un popüler konut bölgelerine toplu taşıma ile ulaşım oldukça kolaydır. Misafirlerinizi yönlendirirken aşağıdaki metro ve metrobüs duraklarını paylaşabilirsiniz. Özellikle otopark sorunu olan sitelere gelen misafirlerin toplu taşıma kullanması hem trafik hem de park sorunu açısından büyük kolaylık sağlar.
        </p>

        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-lg">
            <h4 className="font-bold text-emerald-900 mb-2">Kadıköy ve Çevresi</h4>
            <p className="text-emerald-800 leading-relaxed">
              En yakın metro durağı: <strong>Kadıköy (M4 hattı)</strong> — Kadıköy merkez sitelere yürüme mesafesi 5-15 dk. Ayrıca Marmaray Ayrılık Çeşmesi aktarma noktası ile Avrupa yakasından gelen misafirler kolayca ulaşabilir. Kadıköy iskelesi ve otobüs terminali de merkeze çok yakındır.
            </p>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-lg">
            <h4 className="font-bold text-emerald-900 mb-2">Bostancı ve Maltepe Bölgesi</h4>
            <p className="text-emerald-800 leading-relaxed">
              En yakın metro durağı: <strong>Bostancı (M4 hattı)</strong> — yürüme mesafesi 10 dk. Bostancı sahil yolu üzerindeki siteler ve Maltepe'nin Cevizli, Küçükyalı bölgelerindeki konut projeleri bu durağa oldukça yakındır. Bostancı Marmaray durağı da alternatif bir ulaşım noktasıdır.
            </p>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-lg">
            <h4 className="font-bold text-emerald-900 mb-2">Ataşehir Bölgesi</h4>
            <p className="text-emerald-800 leading-relaxed">
              En yakın durak: <strong>Ataşehir Metrobüs durağı (TEM üzeri)</strong> — Ataşehir'in büyük site komplekslerine minibüs veya kısa taksi mesafesinde. Ayrıca Ataşehir İçerenköy Metro durağı (M4 hattı) da kullanılabilir. Batı Ataşehir'deki siteler için Küçükbakkalköy durağı tercih edilebilir.
            </p>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-lg">
            <h4 className="font-bold text-emerald-900 mb-2">Ümraniye Bölgesi</h4>
            <p className="text-emerald-800 leading-relaxed">
              En yakın metro durağı: <strong>Ümraniye (M5 hattı — Üsküdar-Çekmeköy)</strong> — yürüme mesafesi 10 dk. Ümraniye'nin hızla büyüyen site bölgelerine M5 hattı ile çok rahat ulaşılır. Çakmak, Yamanevler ve İnkılap durakları da bölgedeki büyük konut projelerine yakındır.
            </p>
          </div>
        </div>
      </div>

      {/* Profesyonel Destek Bölümü */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Site İçi Doğum Günlerinde Profesyonel Destek Almanın Avantajları</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Yukarıda sıraladığımız 12 kritik nokta, ilk bakışta bunaltıcı gelebilir. Ancak endişelenmeyin; profesyonel bir organizasyon firmasıyla çalıştığınızda bu sorunların büyük çoğunluğu otomatik olarak çözülür. Deneyimli ekipler site yönetimleriyle nasıl iletişim kurulacağını bilir, ses seviyesini kontrol eder, temizlik ve toparlanmayı üstlenir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Özellikle{' '}
          <Link to="/organizasyonlar/palyaco-kiralama" className="text-red-600 hover:text-red-800 font-semibold underline">
            palyaço kiralama
          </Link>{' '}
          hizmetlerimiz site içi doğum günleri için en çok tercih edilen seçenektir. Profesyonel palyaçolarımız, site ortamına uygun ses seviyesinde eğlenceli gösteriler sunar, çocuklarla interaktif oyunlar oynar ve unutulmaz anlar yaratır. Aynı şekilde{' '}
          <Link to="/organizasyonlar/bubble-show" className="text-red-600 hover:text-red-800 font-semibold underline">
            bubble show (baloncuk gösterisi)
          </Link>{' '}
          hizmetimiz de açık alan site partileri için mükemmel bir seçenektir; hem görsel bir şölen sunar hem de minimum gürültü ile maximum eğlence sağlar.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Profesyonel ekiplerimiz kendi ekipmanlarını getirir, kurulum ve toparlanmayı kendileri yapar, sigortalıdır ve binlerce site içi organizasyon deneyimine sahiptir. Siz sadece çocuğunuzun mutluluğuna odaklanın, gerisini bize bırakın.
        </p>
      </div>

      {/* Kontrol Listesi */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-bold text-red-900 mb-4">Site Doğum Günü Kontrol Listesi</h2>
        <p className="text-red-800 mb-4">Parti gününden önce bu kontrol listesini gözden geçirin:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">&#10003;</span>
            <span className="text-red-900">Site yönetiminden yazılı izin alındı</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">&#10003;</span>
            <span className="text-red-900">Komşular bilgilendirildi</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">&#10003;</span>
            <span className="text-red-900">Güvenlik bilgilendirildi ve misafir listesi verildi</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">&#10003;</span>
            <span className="text-red-900">Park alanı düzenlemesi yapıldı</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">&#10003;</span>
            <span className="text-red-900">Elektrik kaynağı ve kablo güvenliği kontrol edildi</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">&#10003;</span>
            <span className="text-red-900">Yağmur planı hazırlandı (B planı)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">&#10003;</span>
            <span className="text-red-900">Temizlik malzemeleri ve çöp torbaları hazırlandı</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">&#10003;</span>
            <span className="text-red-900">İlk yardım çantası ve acil numaralar hazır</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">&#10003;</span>
            <span className="text-red-900">Hava durumu kontrolü yapıldı</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-bold mt-0.5">&#10003;</span>
            <span className="text-red-900">Etkinlik alanının fotoğrafı çekildi (öncesi)</span>
          </div>
        </div>
      </div>

      {/* Sonuç ve CTA */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sonuç: Planlı Parti, Mutlu Anılar</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Site içinde doğum günü organizasyonu yapmak, doğru planlama ile hem çok keyifli hem de ekonomik bir tercihtir. Yukarıda sıraladığımız 12 kritik noktaya dikkat ettiğinizde, hem çocuğunuz için unutulmaz bir kutlama yapmış olursunuz hem de komşularınızla ilişkilerinizi güçlü tutarsınız. Hatırlayın; iyi bir planlama ve önceden alınan izinler, stresin yerini eğlenceye bırakmasını sağlar.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Eğer tüm bu detaylarla tek başınıza uğraşmak istemiyorsanız, İstanbul'un en deneyimli çocuk etkinlik ekibi olarak size yardımcı olmaktan mutluluk duyarız. Site içi doğum günü organizasyonlarında yılların tecrübesiyle hem eğlenceyi hem de düzeni garanti ediyoruz.
        </p>
      </div>

      {/* CTA Kutusu */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Site İçi Doğum Günü Organizasyonu İçin Bizi Arayın!</h3>
        <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
          Profesyonel palyaço, bubble show, sihirbaz ve daha fazlası... Çocuğunuzun hayallerini sitenizin bahçesinde gerçeğe dönüştürelim.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/905528822898?text=Merhaba,%20site%20i%C3%A7i%20do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-bold px-8 py-3 rounded-full hover:bg-red-50 transition-colors"
          >
            WhatsApp ile Bilgi Alın
          </a>
          <Link
            to="/organizasyonlar/palyaco-kiralama"
            className="inline-flex items-center justify-center gap-2 bg-red-800 text-white font-bold px-8 py-3 rounded-full hover:bg-red-900 transition-colors"
          >
            Hizmetlerimizi İnceleyin
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="site-icinde-dogum-gunu-12-kritik"
      faqData={faqData}
      relatedServicePath={relatedServicePath}
      relatedServiceName={relatedServiceName}
    >
      {content}
    </BlogDetail>
  )
}

export default SiteIcindeDogumGunu12Kritik
