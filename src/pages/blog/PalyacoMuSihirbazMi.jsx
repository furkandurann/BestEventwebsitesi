import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const PalyacoMuSihirbazMi = () => {
  const faqData = [
    {
      question: 'Palyaço mu sihirbaz mı daha eğlenceli?',
      answer: 'Bu tamamen çocuğunuzun karakterine bağlıdır. Hareketli, enerjik ve sosyal çocuklar palyaço ile daha çok eğlenirken, meraklı, gözlemci ve detaylara dikkat eden çocuklar sihirbaz gösterisinden daha fazla keyif alır. Her iki etkinlik türü de profesyonel olarak yapıldığında son derece eğlencelidir.'
    },
    {
      question: 'Kaç yaşındaki çocuklar için palyaço uygundur?',
      answer: 'Palyaço gösterisi genellikle 2-8 yaş arası çocuklar için idealdir. 2-4 yaş grubu için daha yumuşak ve yavaş tempolu bir palyaço performansı tercih edilirken, 5-8 yaş grubu için daha interaktif ve enerjik bir gösteri planlanabilir. Profesyonel palyaçolar yaş grubuna göre performanslarını uyarlar.'
    },
    {
      question: 'Sihirbaz gösterisi hangi yaş grubuna uygun?',
      answer: 'Sihirbaz gösterisi en etkili olarak 4-12 yaş arası çocuklarda işe yarar. 4-6 yaş grubu basit ve görsel hilelere hayran kalırken, 7-12 yaş grubu daha karmaşık illüzyonları takip edebilir ve anlamaya çalışır. 4 yaş altı çocuklar sihirbazlık hilelerini tam olarak kavrayamayabilir.'
    },
    {
      question: 'Palyaço ve sihirbazı aynı etkinlikte birleştirebilir miyiz?',
      answer: 'Evet, bu aslında en popüler kombinasyonlardan biridir! Etkinliğin ilk yarısında palyaço ile eğlenceli oyunlar ve dans, ikinci yarısında sihirbaz gösterisi yapılabilir. Bu şekilde hem hareketli hem de meraklı çocuklar için ideal bir program oluşturulmuş olur. Best Event olarak kombinasyon paketlerimiz mevcuttur.'
    },
    {
      question: 'Bubble show mu yoksa palyaço mu tercih etmeliyim?',
      answer: 'Bubble show görsel bir şölen sunarken, palyaço daha interaktif bir deneyim sağlar. 2-5 yaş arası küçük çocuklar için bubble show büyüleyici bir seçenektir çünkü balonların görselliği onları büyüler. Daha büyük çocuklar için palyaço ile etkileşimli oyunlar daha eğlenceli olabilir. İdeal olan her ikisini de programa dahil etmektir.'
    },
    {
      question: 'Etkinlik bütçesi sınırlıysa hangisini seçmeliyim?',
      answer: 'Bütçe sınırlıysa çocuğunuzun yaşını ve karakterini temel alarak karar verin. 2-5 yaş arası hareketli çocuklar için palyaço, 5-10 yaş arası meraklı çocuklar için sihirbaz en iyi yatırım olacaktır. Best Event olarak uygun fiyatlı tek etkinlik paketlerinden kapsamlı kombinasyon paketlerine kadar farklı bütçelere uygun seçenekler sunuyoruz.'
    }
  ]

  const relatedServicePath = '/organizasyonlar/palyaco-kiralama'
  const relatedServiceName = 'Palyaço Kiralama'

  const content = (
    <>
      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Çocuğunuzun doğum gününü ya da özel bir etkinliğini planlarken en sık karşılaşılan sorulardan biri şudur: <strong>"Palyaço mu kiralasak yoksa sihirbaz mı?"</strong> Her iki eğlence türü de çocuklar arasında büyük ilgi görür, ancak her çocuğun karakteri, yaşı ve ilgi alanları farklıdır. Doğru seçimi yapmak, etkinliğinizin unutulmaz olmasını sağlayacak en önemli adımlardan biridir.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Bu kapsamlı rehberde, palyaço ve sihirbaz gösterilerini her açıdan karşılaştıracak, hangi etkinlik türünün hangi çocuğa daha uygun olduğunu detaylı bir şekilde inceleyeceğiz. Ayrıca <Link to="/organizasyonlar/bubble-show" className="text-blue-600 hover:text-blue-800 font-semibold underline">bubble show</Link> ve <Link to="/organizasyonlar/yuz-boyama" className="text-blue-600 hover:text-blue-800 font-semibold underline">yüz boyama</Link> gibi alternatif etkinlik seçeneklerini de ele alacağız. Böylece çocuğunuz için en doğru eğlence programını oluşturabileceksiniz.
      </p>

      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li>
            <a href="#karsilastirma-tablosu" className="text-blue-600 hover:text-blue-800 underline">1. Palyaço vs Sihirbaz: Karşılaştırma Tablosu</a>
          </li>
          <li>
            <a href="#yas-grubuna-gore" className="text-blue-600 hover:text-blue-800 underline">2. Yaş Grubuna Göre Öneriler</a>
          </li>
          <li>
            <a href="#karar-agaci" className="text-blue-600 hover:text-blue-800 underline">3. Karar Ağacı: Çocuğunuza Hangisi Uygun?</a>
          </li>
          <li>
            <a href="#alternatif-etkinlikler" className="text-blue-600 hover:text-blue-800 underline">4. Alternatif Etkinlikler: Bubble Show ve Yüz Boyama</a>
          </li>
          <li>
            <a href="#kombinasyon-onerileri" className="text-blue-600 hover:text-blue-800 underline">5. Kombinasyon Önerileri</a>
          </li>
          <li>
            <a href="#butce-karsilastirmasi" className="text-blue-600 hover:text-blue-800 underline">6. Bütçe Karşılaştırması</a>
          </li>
          <li>
            <a href="#sonuc" className="text-blue-600 hover:text-blue-800 underline">7. Sonuç ve Öneriler</a>
          </li>
        </ul>
      </div>

      {/* 1. Karşılaştırma Tablosu */}
      <h2 id="karsilastirma-tablosu" className="text-3xl font-bold text-gray-900 mb-6 mt-12">1. Palyaço vs Sihirbaz: Karşılaştırma Tablosu</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Palyaço ve sihirbaz gösterileri farklı dinamiklere sahiptir. Aşağıdaki karşılaştırma tablosu, her iki eğlence türünün güçlü yönlerini ve öne çıkan özelliklerini bir arada sunmaktadır. Bu tabloyu inceleyerek çocuğunuzun karakterine en uygun seçimi kolayca yapabilirsiniz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-10 rounded-2xl overflow-hidden border border-gray-200">
        <div className="bg-orange-50 p-8">
          <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">🤡 Palyaço</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Etkileşim Düzeyi:</strong> Çok yüksek – çocuklarla birebir temas halinde</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Enerji Seviyesi:</strong> Yüksek tempolu, hareketli ve dinamik</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Katılım Şekli:</strong> Aktif katılım – dans, oyun, yarışma</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Mekan İhtiyacı:</strong> Geniş alan gerektirir (koşma, oynama için)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Gülme Faktörü:</strong> Çok yüksek – komik hareketler ve espiriler</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>İdeal Grup Büyüklüğü:</strong> 10-30 çocuk</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Süre:</strong> Genellikle 45-90 dakika</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Ekstra Unsurlar:</strong> Balon bükme, yüz boyama, müzik eşliğinde dans</span>
            </li>
          </ul>
        </div>
        <div className="bg-violet-50 p-8">
          <h3 className="text-2xl font-bold text-violet-700 mb-4 flex items-center gap-2">🎩 Sihirbaz</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-violet-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Etkileşim Düzeyi:</strong> Orta-yüksek – sahne gösterisi formatı</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Enerji Seviyesi:</strong> Odaklanma gerektiren, sakin ama heyecanlı</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Katılım Şekli:</strong> Gözlemleme ve seçilen çocukların sahneye çıkması</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Mekan İhtiyacı:</strong> Kompakt alan yeterli (salon, oda)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Şaşkınlık Faktörü:</strong> Çok yüksek – "Nasıl yaptı?" etkisi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>İdeal Grup Büyüklüğü:</strong> 10-50 çocuk</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Süre:</strong> Genellikle 30-60 dakika</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Ekstra Unsurlar:</strong> Güvercin çıkartma, kart hileleri, illüzyon</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Tabloda da görüldüğü gibi, <Link to="/organizasyonlar/palyaco-kiralama" className="text-orange-600 hover:text-orange-800 font-semibold underline">palyaço</Link> daha çok fiziksel aktivite ve yüksek etkileşim sunarken, <Link to="/organizasyonlar/magic-show" className="text-violet-600 hover:text-violet-800 font-semibold underline">sihirbaz</Link> odaklanma ve merak duygusunu ön plana çıkarır. Ancak bu tercih, yalnızca etkinlik türüne değil, çocuğunuzun kişilik özelliklerine de bağlıdır.
      </p>

      {/* 2. Yaş Grubuna Göre Öneriler */}
      <h2 id="yas-grubuna-gore" className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Yaş Grubuna Göre Öneriler</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Çocukların yaş gruplarına göre eğlence algıları ve beklentileri farklılaşır. Doğru yaş grubuna uygun etkinlik seçmek, hem çocukların hem de ebeveynlerin mutlu olmasını sağlar.
      </p>

      <div className="space-y-6 mb-10">
        {/* 2-3 Yaş */}
        <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
          <h3 className="text-xl font-bold text-pink-700 mb-3">2-3 Yaş: Bebekler ve Yeni Yürüyenler</h3>
          <p className="text-gray-700 mb-3">
            Bu yaş grubundaki çocuklar henüz sihirbazlık hilelerini anlayamaz. Renkli kostümler ve basit hareketler onlar için daha çekicidir.
          </p>
          <div className="flex items-center gap-3">
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm">Önerimiz: Palyaço (yumuşak performans)</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">Alternatif: Bubble Show</span>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Bu yaş grubu için <Link to="/organizasyonlar/bubble-show" className="text-blue-600 hover:text-blue-800 underline">bubble show</Link> da harika bir seçenektir. Dev balonların görselliği küçük çocukları büyüler.
          </p>
        </div>

        {/* 4-6 Yaş */}
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-bold text-green-700 mb-3">4-6 Yaş: Okul Öncesi Dönem</h3>
          <p className="text-gray-700 mb-3">
            Bu yaş grubunda çocuklar hem palyaçodan hem de sihirbazdan keyif alabilir. Hayal güçleri yüksektir ve her şeyi merakla izlerler. Palyaçonun enerjisi onları coştururken, sihirbazın hileleri gözlerini büyütür.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm">Palyaço: Çok Uygun</span>
            <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-semibold text-sm">Sihirbaz: Uygun (basit hileler)</span>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Bu yaş grubu için en ideal çözüm, <Link to="/organizasyonlar/palyaco-kiralama" className="text-orange-600 hover:text-orange-800 underline">palyaço</Link> ile başlayıp ardından kısa bir sihirbaz gösterisi eklemektir. <Link to="/organizasyonlar/yuz-boyama" className="text-blue-600 hover:text-blue-800 underline">Yüz boyama</Link> aktivitesi de programı zenginleştirir.
          </p>
        </div>

        {/* 7-9 Yaş */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-700 mb-3">7-9 Yaş: İlkokul Dönemi</h3>
          <p className="text-gray-700 mb-3">
            Bu yaş grubundaki çocuklar daha analitik düşünmeye başlar. Sihirbazlık hileleri onları derinden etkiler çünkü "nasıl yapıldığını" anlamaya çalışırlar. Palyaço hâlâ eğlenceli olabilir ancak bazı çocuklar "büyüdüğünü" hissedebilir.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-semibold text-sm">Önerimiz: Sihirbaz</span>
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm">Alternatif: Etkileşimli Palyaço</span>
          </div>
        </div>

        {/* 10-12 Yaş */}
        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-xl font-bold text-purple-700 mb-3">10-12 Yaş: Üst İlkokul ve Ortaokul Başlangıcı</h3>
          <p className="text-gray-700 mb-3">
            Bu yaş grubundaki çocuklar sofistike eğlence arayışındadır. İleri düzey sihirbazlık gösterileri, illüzyonlar ve zihin okuma performansları en etkili seçeneklerdir. Palyaço bu yaş grubu için genellikle tercih edilmez.
          </p>
          <div className="flex items-center gap-3">
            <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-semibold text-sm">Önerimiz: Profesyonel Sihirbaz Gösterisi</span>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            <Link to="/organizasyonlar/magic-show" className="text-violet-600 hover:text-violet-800 underline">Profesyonel sihirbaz gösterisi</Link> bu yaş grubunun gözlerini parlatacaktır. İllüzyon ve zihin okuma hileleri çocukları derinden etkiler.
          </p>
        </div>
      </div>

      {/* 3. Karar Ağacı */}
      <h2 id="karar-agaci" className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Karar Ağacı: Çocuğunuza Hangisi Uygun?</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Aşağıdaki karar ağacı, çocuğunuzun kişilik özelliklerini temel alarak en uygun etkinlik türünü belirlemenize yardımcı olacaktır. Her bir soruya "Evet" yanıtı verdiğiniz kutucuktaki öneriye göz atın.
      </p>

      <div className="space-y-4 mb-10">
        <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🏃</span>
            <div>
              <p className="text-lg font-bold text-gray-800 mb-1">Çocuğunuz hareketli ve enerjik mi?</p>
              <p className="text-gray-600">Sürekli koşan, oynamak isteyen, yerinde duramayan bir yapıya mı sahip?</p>
            </div>
          </div>
          <div className="mt-4 ml-12 bg-orange-100 rounded-lg p-4 border border-orange-300">
            <p className="font-bold text-orange-700">→ Palyaço önerilir!</p>
            <p className="text-gray-600 text-sm mt-1">Palyaço ile dans, oyun ve yarışmalar çocuğunuzun enerjisini olumlu yönde kanalize edecektir.</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🔍</span>
            <div>
              <p className="text-lg font-bold text-gray-800 mb-1">Çocuğunuz meraklı ve gözlemci mi?</p>
              <p className="text-gray-600">Detaylara dikkat eden, "Bu nasıl yapılıyor?" diye soran, araştırmacı ruhlu mu?</p>
            </div>
          </div>
          <div className="mt-4 ml-12 bg-violet-100 rounded-lg p-4 border border-violet-300">
            <p className="font-bold text-violet-700">→ Sihirbaz önerilir!</p>
            <p className="text-gray-600 text-sm mt-1">Sihirbazın hileleri çocuğunuzun merak duygusunu besleyecek ve onu büyüleyecektir.</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-3xl">😊</span>
            <div>
              <p className="text-lg font-bold text-gray-800 mb-1">Çocuğunuz sosyal ve girişken mi?</p>
              <p className="text-gray-600">Yeni insanlarla kolayca kaynaşan, gruplarda öne çıkan, konuşkan bir yapıda mı?</p>
            </div>
          </div>
          <div className="mt-4 ml-12 bg-orange-100 rounded-lg p-4 border border-orange-300">
            <p className="font-bold text-orange-700">→ Palyaço önerilir!</p>
            <p className="text-gray-600 text-sm mt-1">Palyaço ile interaktif oyunlar sosyal çocuklar için mükemmel bir sahne olacaktır.</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🤫</span>
            <div>
              <p className="text-lg font-bold text-gray-800 mb-1">Çocuğunuz utangaç ve içe dönük mü?</p>
              <p className="text-gray-600">Büyük gruplarda çekingen, gözlemci ve sakin bir yapıya mı sahip?</p>
            </div>
          </div>
          <div className="mt-4 ml-12 bg-violet-100 rounded-lg p-4 border border-violet-300">
            <p className="font-bold text-violet-700">→ Sihirbaz önerilir!</p>
            <p className="text-gray-600 text-sm mt-1">Sihirbaz gösterisi izleyerek katılım sağlar, utangaç çocuklar baskı hissetmeden eğlenebilir.</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🎨</span>
            <div>
              <p className="text-lg font-bold text-gray-800 mb-1">Çocuğunuz yaratıcı ve sanatsal mı?</p>
              <p className="text-gray-600">Resim yapmayı, boyamayı, el işi yapmayı seven, hayal gücü geniş mi?</p>
            </div>
          </div>
          <div className="mt-4 ml-12 bg-blue-100 rounded-lg p-4 border border-blue-300">
            <p className="font-bold text-blue-700">→ Yüz Boyama + Palyaço kombinasyonu önerilir!</p>
            <p className="text-gray-600 text-sm mt-1"><Link to="/organizasyonlar/yuz-boyama" className="text-blue-600 hover:text-blue-800 underline">Yüz boyama</Link> ile yaratıcılığını konuşturup, palyaço ile eğlenceyi tamamlayabilirsiniz.</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🫧</span>
            <div>
              <p className="text-lg font-bold text-gray-800 mb-1">Çocuğunuz çok küçük mü (2-4 yaş)?</p>
              <p className="text-gray-600">Henüz karmaşık oyunları veya hileleri takip edemiyor mu?</p>
            </div>
          </div>
          <div className="mt-4 ml-12 bg-cyan-100 rounded-lg p-4 border border-cyan-300">
            <p className="font-bold text-cyan-700">→ Bubble Show önerilir!</p>
            <p className="text-gray-600 text-sm mt-1"><Link to="/organizasyonlar/bubble-show" className="text-blue-600 hover:text-blue-800 underline">Bubble show</Link> küçük çocukları görsel olarak büyüleyen, güvenli ve heyecan verici bir etkinliktir.</p>
          </div>
        </div>
      </div>

      {/* 4. Alternatif Etkinlikler */}
      <h2 id="alternatif-etkinlikler" className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Alternatif Etkinlikler: Bubble Show ve Yüz Boyama</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Palyaço ve sihirbaz dışında çocuk etkinliklerinde çok popüler iki seçenek daha vardır: <strong>Bubble Show</strong> ve <strong>Yüz Boyama</strong>. Bu etkinlikler hem tek başına hem de palyaço veya sihirbaz ile birlikte uygulanabilir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-10 rounded-2xl overflow-hidden border border-gray-200">
        <div className="bg-cyan-50 p-8">
          <h3 className="text-2xl font-bold text-cyan-700 mb-4 flex items-center gap-2">🫧 Bubble Show</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>En uygun yaş:</strong> 2-7 yaş</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Özellik:</strong> Görsel şölen, dev balonlar, ışıklı performans</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Avantaj:</strong> Her çocuğu büyüler, utangaç çocuklar için ideal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Süre:</strong> 20-30 dakika</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Kombinasyon:</strong> Palyaço veya sihirbaz ile mükemmel uyum</span>
            </li>
          </ul>
          <div className="mt-4">
            <Link to="/organizasyonlar/bubble-show" className="inline-block bg-cyan-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-sm">
              Bubble Show Detayları
            </Link>
          </div>
        </div>
        <div className="bg-rose-50 p-8">
          <h3 className="text-2xl font-bold text-rose-700 mb-4 flex items-center gap-2">🎨 Yüz Boyama</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>En uygun yaş:</strong> 3-12 yaş</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Özellik:</strong> Bireysel ilgi, yaratıcılık, dönüşüm heyecanı</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Avantaj:</strong> Her yaşa uygun, fotoğraf için mükemmel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Süre:</strong> Çocuk başına 5-10 dakika</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold mt-1">✓</span>
              <span className="text-gray-700"><strong>Kombinasyon:</strong> Ana gösteri sırasında sıra bekleyenler için ideal</span>
            </li>
          </ul>
          <div className="mt-4">
            <Link to="/organizasyonlar/yuz-boyama" className="inline-block bg-rose-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-rose-700 transition-colors text-sm">
              Yüz Boyama Detayları
            </Link>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bubble show ve yüz boyama, ana etkinlik olan palyaço veya sihirbaz gösterisinin yanında tamamlayıcı aktiviteler olarak düşünülmelidir. Özellikle kalabalık organizasyonlarda, ana gösteri izlenirken diğer çocukların yüz boyama yaptırması hem bekleme süresini azaltır hem de tüm çocukların etkinlikten eşit şekilde faydalanmasını sağlar. Bubble show ise genellikle açılış veya kapanış performansı olarak kullanıldığında en etkili sonucu verir.
      </p>

      {/* 5. Kombinasyon Önerileri */}
      <h2 id="kombinasyon-onerileri" className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Kombinasyon Önerileri</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Tek bir etkinlik türü yerine farklı eğlence türlerini bir araya getirmek, organizasyonunuzu çok daha zengin ve unutulmaz hale getirir. İşte en popüler ve etkili kombinasyonlarımız:
      </p>

      <div className="space-y-6 mb-10">
        <div className="bg-gradient-to-r from-orange-50 to-violet-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Palyaço + Sihirbaz Kombinasyonu (En Popüler)</h3>
          <p className="text-gray-700 mb-3">
            Etkinliğin ilk 45 dakikasında palyaço ile interaktif oyunlar, dans ve yarışmalar yapılır. Ardından 30-45 dakikalık profesyonel sihirbaz gösterisi ile program tamamlanır. Bu kombinasyon, hem hareketli hem de sakin çocukların eğlenmesini garanti eder.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">Toplam Süre: 90-120 dk</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">İdeal Yaş: 4-10</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">Grup: 15-40 çocuk</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-cyan-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Palyaço + Bubble Show Kombinasyonu</h3>
          <p className="text-gray-700 mb-3">
            Küçük yaş grupları için mükemmel bir kombinasyon. Palyaço ile eğlenceli oyunların ardından <Link to="/organizasyonlar/bubble-show" className="text-blue-600 hover:text-blue-800 font-semibold underline">bubble show</Link> ile göz alıcı bir kapanış yapılır. Dev balonların içine çocuk almak gibi özel anlar yaratılır.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">Toplam Süre: 60-90 dk</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">İdeal Yaş: 2-6</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">Grup: 10-25 çocuk</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-violet-50 to-rose-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Sihirbaz + Yüz Boyama Kombinasyonu</h3>
          <p className="text-gray-700 mb-3">
            Daha sakin ve sofistike bir program isteyenler için ideal. <Link to="/organizasyonlar/magic-show" className="text-violet-600 hover:text-violet-800 font-semibold underline">Sihirbaz gösterisi</Link> sırasında sıra bekleyen çocuklar <Link to="/organizasyonlar/yuz-boyama" className="text-blue-600 hover:text-blue-800 font-semibold underline">yüz boyama</Link> yaptırır. Böylece tüm çocuklar sürekli meşgul olur.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">Toplam Süre: 60-90 dk</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">İdeal Yaş: 5-12</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">Grup: 15-30 çocuk</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 via-violet-50 to-cyan-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Full Paket: Palyaço + Sihirbaz + Bubble Show + Yüz Boyama</h3>
          <p className="text-gray-700 mb-3">
            Unutulmaz bir organizasyon isteyenler için tam paket! Yüz boyama ile başlangıç, palyaço ile interaktif oyunlar, bubble show ile görsel şölen ve sihirbaz gösterisi ile muhteşem final. Her yaş grubundan ve her karakterdeki çocuk için mükemmel bir program.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">Toplam Süre: 2-3 saat</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">İdeal Yaş: 3-12</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border">Grup: 20-50 çocuk</span>
          </div>
        </div>
      </div>

      {/* 6. Bütçe Karşılaştırması */}
      <h2 id="butce-karsilastirmasi" className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Bütçe Karşılaştırması</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Etkinlik seçiminde bütçe de önemli bir faktördür. Aşağıda farklı etkinlik türlerinin genel bütçe karşılaştırmasını ve değer analizini bulabilirsiniz. Fiyatlar organizasyonun detaylarına, süreye ve ek hizmetlere göre değişiklik gösterebilir.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-6 py-4 text-left font-semibold">Etkinlik Türü</th>
              <th className="px-6 py-4 text-left font-semibold">Fiyat Aralığı</th>
              <th className="px-6 py-4 text-left font-semibold">Süre</th>
              <th className="px-6 py-4 text-left font-semibold">Değer/Dakika</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-orange-50 border-b border-orange-100">
              <td className="px-6 py-4 font-semibold text-orange-700">Palyaço</td>
              <td className="px-6 py-4 text-gray-700">Uygun - Orta</td>
              <td className="px-6 py-4 text-gray-700">45-90 dk</td>
              <td className="px-6 py-4 text-gray-700">Yüksek etkileşim/dk</td>
            </tr>
            <tr className="bg-violet-50 border-b border-violet-100">
              <td className="px-6 py-4 font-semibold text-violet-700">Sihirbaz</td>
              <td className="px-6 py-4 text-gray-700">Orta - Yüksek</td>
              <td className="px-6 py-4 text-gray-700">30-60 dk</td>
              <td className="px-6 py-4 text-gray-700">Yüksek etki/dk</td>
            </tr>
            <tr className="bg-cyan-50 border-b border-cyan-100">
              <td className="px-6 py-4 font-semibold text-cyan-700">Bubble Show</td>
              <td className="px-6 py-4 text-gray-700">Uygun - Orta</td>
              <td className="px-6 py-4 text-gray-700">20-30 dk</td>
              <td className="px-6 py-4 text-gray-700">Görsel etki/dk</td>
            </tr>
            <tr className="bg-rose-50">
              <td className="px-6 py-4 font-semibold text-rose-700">Yüz Boyama</td>
              <td className="px-6 py-4 text-gray-700">Uygun</td>
              <td className="px-6 py-4 text-gray-700">5-10 dk/çocuk</td>
              <td className="px-6 py-4 text-gray-700">Bireysel ilgi/dk</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Bütçe optimizasyonu ipuçları:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Sınırlı bütçe:</strong> Çocuğunuzun yaşına ve karakterine göre tek bir etkinlik seçin. 2-6 yaş için <Link to="/organizasyonlar/palyaco-kiralama" className="text-orange-600 hover:text-orange-800 font-semibold underline">palyaço</Link>, 6-12 yaş için <Link to="/organizasyonlar/magic-show" className="text-violet-600 hover:text-violet-800 font-semibold underline">sihirbaz</Link> en iyi yatırım olacaktır.
        </li>
        <li>
          <strong>Orta bütçe:</strong> Ana etkinlik + bir tamamlayıcı aktivite seçin. Palyaço + yüz boyama veya sihirbaz + bubble show gibi ikili kombinasyonlar mükemmel sonuç verir.
        </li>
        <li>
          <strong>Geniş bütçe:</strong> Full paket ile tüm etkinlikleri birleştirerek unutulmaz bir organizasyon oluşturabilirsiniz. Kombinasyon paketlerinde özel indirimler uygulanır.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Best Event olarak tüm bütçelere uygun paketler sunuyoruz. Kombinasyon paketlerinde birim fiyatlar tekli hizmetlere göre daha avantajlıdır. Detaylı fiyat bilgisi ve özel teklif almak için bizimle iletişime geçebilirsiniz.
      </p>

      {/* Kişilik Tiplerine Göre Detaylı Analiz */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Kişilik Tiplerine Göre Detaylı Analiz</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Her çocuğun kendine özgü bir kişiliği vardır ve etkinlik seçimi bu kişiliğe uygun yapıldığında çok daha etkili olur. Aşağıda farklı kişilik tiplerindeki çocuklar için detaylı etkinlik önerilerimizi bulabilirsiniz.
      </p>

      <div className="space-y-4 mb-10">
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
          <h3 className="text-lg font-bold text-orange-700 mb-2">Lider Ruhlu Çocuklar</h3>
          <p className="text-gray-700">
            Grubun önünde olmayı seven, arkadaşlarını yönlendiren, cesur çocuklar palyaço ile birlikte sahne alabilir. Palyaço bu tür çocukları asistanı olarak seçtiğinde, çocuğun özgüveni artar ve etkinlik daha da eğlenceli hale gelir. Sihirbaz gösterisinde de gönüllü olarak sahneye çıkmak bu çocuklar için harika bir deneyimdir.
          </p>
          <p className="text-orange-600 font-semibold mt-2">Öneri: Palyaço (1. tercih) veya Sihirbaz (sahne katılımlı)</p>
        </div>

        <div className="bg-violet-50 rounded-xl p-6 border border-violet-200">
          <h3 className="text-lg font-bold text-violet-700 mb-2">Düşünür Çocuklar</h3>
          <p className="text-gray-700">
            Kitap okuyan, puzzle yapan, mantık oyunlarını seven çocuklar sihirbazlık gösterilerinden büyük keyif alır. Her hileyi çözmeye çalışırlar ve bu zihinsel meydan okuma onları derinden tatmin eder. Palyaço gösterisinin temposu bu çocuklar için bazen yorucu olabilir.
          </p>
          <p className="text-violet-600 font-semibold mt-2">Öneri: Sihirbaz (kesinlikle)</p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-lg font-bold text-green-700 mb-2">Duygusal ve Hassas Çocuklar</h3>
          <p className="text-gray-700">
            Yüksek seslerden veya ani hareketlerden çekinen, hassas yapıdaki çocuklar için dikkatli bir seçim yapılmalıdır. Çok gürültülü palyaço performansları bu çocukları ürkütebilir. Sakin bir sihirbaz gösterisi veya <Link to="/organizasyonlar/bubble-show" className="text-blue-600 hover:text-blue-800 underline">bubble show</Link> gibi yumuşak bir etkinlik daha uygun olacaktır.
          </p>
          <p className="text-green-600 font-semibold mt-2">Öneri: Bubble Show veya yumuşak tempolu Sihirbaz</p>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
          <h3 className="text-lg font-bold text-amber-700 mb-2">Karışık Yaş Gruplu Etkinlikler</h3>
          <p className="text-gray-700">
            Kardeşler veya farklı yaş gruplarından çocukların bir arada olduğu etkinliklerde tek bir etkinlik türü yeterli olmayabilir. Bu durumda kombinasyon programları en iyi çözümdür. Küçükler için bubble show ve yüz boyama, büyükler için sihirbaz gösterisi ve herkes için palyaço ile oyunlar planlanabilir.
          </p>
          <p className="text-amber-600 font-semibold mt-2">Öneri: Palyaço + Sihirbaz + Bubble Show kombinasyonu</p>
        </div>
      </div>

      {/* Mekan ve Ortama Göre Seçim */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Mekan ve Ortama Göre Seçim</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Etkinliğin yapılacağı mekan da seçiminizi etkileyecek önemli bir faktördür. Her etkinlik türünün mekan gereksinimleri farklıdır ve doğru eşleşme yapılmalıdır.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Ev Ortamı (Salon)</h3>
          <p className="text-gray-700 mb-2">Sınırlı alan, az sayıda çocuk</p>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li className="flex items-center gap-2"><span className="text-violet-500 font-bold">1.</span> Sihirbaz (en uygun)</li>
            <li className="flex items-center gap-2"><span className="text-cyan-500 font-bold">2.</span> Bubble Show</li>
            <li className="flex items-center gap-2"><span className="text-rose-500 font-bold">3.</span> Yüz Boyama</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Bahçe / Açık Alan</h3>
          <p className="text-gray-700 mb-2">Geniş alan, serbestçe koşma imkanı</p>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li className="flex items-center gap-2"><span className="text-orange-500 font-bold">1.</span> Palyaço (en uygun)</li>
            <li className="flex items-center gap-2"><span className="text-cyan-500 font-bold">2.</span> Bubble Show</li>
            <li className="flex items-center gap-2"><span className="text-violet-500 font-bold">3.</span> Sihirbaz (dikkat dağılabilir)</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Organizasyon Salonu</h3>
          <p className="text-gray-700 mb-2">Profesyonel ortam, sahne imkanı</p>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li className="flex items-center gap-2"><span className="text-violet-500 font-bold">1.</span> Sihirbaz (sahne ile mükemmel)</li>
            <li className="flex items-center gap-2"><span className="text-orange-500 font-bold">2.</span> Palyaço (geniş alanlarda)</li>
            <li className="flex items-center gap-2"><span className="text-rose-500 font-bold">3.</span> Yüz Boyama (köşe aktivitesi olarak)</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Restoran / Kafe</h3>
          <p className="text-gray-700 mb-2">Sınırlı alan, diğer müşteriler</p>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li className="flex items-center gap-2"><span className="text-violet-500 font-bold">1.</span> Sihirbaz (sessiz performans)</li>
            <li className="flex items-center gap-2"><span className="text-rose-500 font-bold">2.</span> Yüz Boyama</li>
            <li className="flex items-center gap-2"><span className="text-orange-500 font-bold">3.</span> Palyaço (düşük tempolu)</li>
          </ul>
        </div>
      </div>

      {/* Etkinlik Programı Örneği */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Örnek Etkinlik Programı</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Hem palyaço hem de sihirbazı içeren ideal bir 2 saatlik doğum günü organizasyonu programı aşağıdaki gibi planlanabilir:
      </p>

      <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-200">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">14:00</span>
            <div>
              <p className="font-semibold text-gray-800">Karşılama ve Yüz Boyama Başlangıcı</p>
              <p className="text-gray-600 text-sm">Çocuklar gelirken yüz boyama yaptırılır, süperkahraman veya prenses dönüşümü yapılır.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">14:30</span>
            <div>
              <p className="font-semibold text-gray-800">Palyaço ile Eğlenceli Oyunlar</p>
              <p className="text-gray-600 text-sm">Müzikli sandalye, balon patlatma yarışması, dans yarışması gibi interaktif oyunlar.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">15:00</span>
            <div>
              <p className="font-semibold text-gray-800">Bubble Show Gösterisi</p>
              <p className="text-gray-600 text-sm">Dev balonlar, ışıklı performans, çocukları balonun içine alma.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-violet-500 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">15:20</span>
            <div>
              <p className="font-semibold text-gray-800">Sihirbaz Gösterisi</p>
              <p className="text-gray-600 text-sm">Profesyonel illüzyonlar, kart hileleri, doğum günü çocuğuna özel hileler.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">15:50</span>
            <div>
              <p className="font-semibold text-gray-800">Pasta Kesimi ve Kapanış</p>
              <p className="text-gray-600 text-sm">Palyaço eşliğinde pasta kesimi, doğum günü şarkısı ve fotoğraf çekimi.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Sonuç */}
      <h2 id="sonuc" className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Sonuç ve Öneriler</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        "Palyaço mu sihirbaz mı?" sorusunun tek bir doğru cevabı yoktur. Doğru cevap, <strong>çocuğunuzun yaşına, karakterine, etkinlik mekanına ve bütçenize</strong> göre değişir. Ancak genel kurallar şöyledir:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>Hareketli, sosyal ve enerjik çocuklar ile 2-6 yaş grubu için <Link to="/organizasyonlar/palyaco-kiralama" className="text-orange-600 hover:text-orange-800 font-semibold underline">palyaço</Link> ilk tercihiniz olmalıdır.</li>
        <li>Meraklı, gözlemci ve analitik çocuklar ile 6-12 yaş grubu için <Link to="/organizasyonlar/magic-show" className="text-violet-600 hover:text-violet-800 font-semibold underline">sihirbaz</Link> çok daha etkili olacaktır.</li>
        <li>2-4 yaş arası küçük çocuklar için <Link to="/organizasyonlar/bubble-show" className="text-blue-600 hover:text-blue-800 font-semibold underline">bubble show</Link> büyüleyici bir alternatiftir.</li>
        <li>Yaratıcı çocuklar ve karışık yaş grupları için <Link to="/organizasyonlar/yuz-boyama" className="text-blue-600 hover:text-blue-800 font-semibold underline">yüz boyama</Link> mükemmel bir tamamlayıcıdır.</li>
        <li>Bütçeniz elveriyorsa, <strong>farklı etkinlik türlerini birleştiren kombinasyon paketleri</strong> en yüksek memnuniyeti sağlar.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-6">
        Best Event olarak, yılların deneyimiyle her çocuğun kişiliğine uygun etkinlik programları hazırlıyoruz. Profesyonel ekibimiz, organizasyonunuzu planlarken çocuğunuzun yaşını, karakterini ve beklentilerinizi dikkate alarak size en uygun programı önerir. Palyaço, sihirbaz, bubble show ve yüz boyama hizmetlerimizin tümünde alanında uzman, deneyimli ve çocuklarla iletişimi güçlü profesyonellerle çalışıyoruz.
      </p>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-violet-600 rounded-2xl p-8 text-center mb-10">
        <h3 className="text-2xl font-bold text-white mb-4">Çocuğunuz İçin En Uygun Eğlenceyi Birlikte Belirleyelim!</h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Best Event uzman ekibi, çocuğunuzun yaşına ve karakterine göre en uygun etkinlik programını sizin için tasarlasın. Hemen iletişime geçin, ücretsiz danışmanlık alın!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/905307309009"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors text-lg"
          >
            WhatsApp ile Bilgi Alın
          </a>
          <a
            href="tel:+905307309009"
            className="bg-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors text-lg border border-white/40"
          >
            Hemen Arayın
          </a>
        </div>
      </div>

      {/* Son Tavsiyeler */}
      <div className="bg-amber-50 rounded-2xl p-6 mb-8 border border-amber-200">
        <h3 className="text-lg font-bold text-amber-800 mb-3">Son Tavsiyemiz</h3>
        <p className="text-gray-700">
          Hangi etkinlik türünü seçerseniz seçin, en önemli kriter <strong>profesyonellik</strong> ve <strong>deneyimdir</strong>. Amatör bir palyaço veya sihirbaz, çocuklarınızın etkinlikten soğumasına neden olabilir. Best Event olarak tüm ekip üyelerimiz çocuk psikolojisi eğitimi almış, yüzlerce etkinlik deneyimine sahip profesyonellerdir. Çocuğunuzun güvenliği ve mutluluğu bizim en büyük önceliğimizdir.
        </p>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="palyaco-mu-sihirbaz-mi"
      faqData={faqData}
      relatedServicePath={relatedServicePath}
      relatedServiceName={relatedServiceName}
    >
      {content}
    </BlogDetail>
  )
}

export default PalyacoMuSihirbazMi
