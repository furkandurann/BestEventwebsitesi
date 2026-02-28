import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const KartalSihirbazKiralama = () => {
  const faqData = [
    {
      question: 'Kartal sihirbaz kiralama hangi etkinlikler için uygundur?',
      answer: 'Kartal bölgesinde doğum günü, okul etkinliği, site organizasyonu ve kurumsal aile günleri için sihirbaz gösterisi sık tercih edilir.'
    },
    {
      question: 'Sihirbaz gösterisinde çocuklar sahneye katılır mı?',
      answer: 'Evet. İnteraktif programlarda çocuklar belirli bölümlerde sahneye davet edilir ve gösteri daha unutulmaz hale gelir.'
    },
    {
      question: 'Kartal için sihirbaz + bubble show paketi yapılır mı?',
      answer: 'Evet. Sihirbaz sonrası bubble show planı özellikle 4-10 yaş gruplarında çok yüksek memnuniyet sağlar.'
    },
    {
      question: 'Gösteri için ses sistemi gerekir mi?',
      answer: 'Küçük mekanlarda gerekmeyebilir; ancak kalabalık etkinliklerde ses desteği gösteri kalitesini artırır.'
    },
    {
      question: 'Kartal sihirbaz kiralama fiyatları nasıl belirlenir?',
      answer: 'Süre, içerik, tarih yoğunluğu ve ek hizmetlere göre belirlenir. Net teklif için etkinlik detayıyla birlikte talep iletilmelidir.'
    },
    {
      question: 'Gösteri öncesi mekan keşfi yapılıyor mu?',
      answer: 'Gerekli durumlarda fotoğraf/video üzerinden ön değerlendirme yapılır; böylece etkinlik günü akış daha sorunsuz ilerler.'
    }
  ]

  const content = (
    <>
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-indigo-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#kartal-sihirbaz-talep" className="text-indigo-600 hover:text-indigo-700 font-semibold">1. Kartal'da Sihirbaz Kiralama Talebi Nasıl Şekilleniyor?</a></li>
          <li><a href="#kartal-sihirbaz-model" className="text-indigo-600 hover:text-indigo-700 font-semibold">2. Kartal İçin Doğru Gösteri Modeli Seçimi</a></li>
          <li><a href="#kartal-sihirbaz-plan" className="text-indigo-600 hover:text-indigo-700 font-semibold">3. Etkinlik Günü Operasyon Planı</a></li>
          <li><a href="#kartal-sihirbaz-kalite" className="text-indigo-600 hover:text-indigo-700 font-semibold">4. Kalite Kontrol: İyi Bir Sihirbaz Nasıl Anlaşılır?</a></li>
          <li><a href="#kartal-sihirbaz-son" className="text-indigo-600 hover:text-indigo-700 font-semibold">5. Sonuç: Kartal'da Daha Yüksek Memnuniyet İçin 3 Adım</a></li>
        </ul>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Kartal sihirbaz kiralama aramalarında en kritik ihtiyaç, çocukların odak süresini koruyan güçlü bir sahne akışıdır. Doğru planlama ile sihirbaz gösterisi, etkinliğin en akılda kalan parçasına dönüşür.
      </p>

      <h2 id="kartal-sihirbaz-talep" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Kartal'da Sihirbaz Kiralama Talebi Nasıl Şekilleniyor?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kartal bölgesinde doğum günü organizasyonları çoğunlukla apartman/site ortak alanlarında düzenleniyor. Bu mekanlarda çocukların aynı anda oyunda kalmasını sağlamak için sihirbaz gösterisi çok etkili bir çözümdür.
      </p>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ailelerin karar verirken baktığı noktalar</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Gösterinin çocuk yaş grubuna uygunluğu</li>
        <li>Programın süresi ve akış netliği</li>
        <li>Ek hizmetlerle kombine seçenekler</li>
      </ul>

      <h2 id="kartal-sihirbaz-model" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Kartal İçin Doğru Gösteri Modeli Seçimi
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Kısa Model (30 dk)</h3>
          <p className="text-gray-700">4-6 yaş ağırlıklı küçük gruplarda idealdir. Hızlı tempo, kısa numaralar, yüksek etki.</p>
        </div>
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Standart Model (45 dk)</h3>
          <p className="text-gray-700">6-10 yaş gruplarında en çok tercih edilen modeldir. İnteraktif ve dengeli akış sunar.</p>
        </div>
      </div>

      <h2 id="kartal-sihirbaz-plan" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Etkinlik Günü Operasyon Planı
      </h2>
      <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
        <li>Etkinlikten önce adres/kat/otopark bilgisini paylaşın.</li>
        <li>Çocukları izleme alanına yarım daire düzeninde yerleştirin.</li>
        <li>Pasta saatini gösteri bitimine yakın planlayın.</li>
        <li>Fotoğraf-video için bir yetişkini sabit sorumlu belirleyin.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-6">
        Bu akış sayesinde hem sihirbazın performansı kesintiye uğramaz hem de çocukların enerjisi kontrollü ilerler.
      </p>

      <h2 id="kartal-sihirbaz-kalite" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Kalite Kontrol: İyi Bir Sihirbaz Nasıl Anlaşılır?
      </h2>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontrol etmeniz gereken 4 kriter</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Önceki etkinliklerden gerçek video/referans</li>
        <li>Yaş grubuna göre farklı numara hazırlığı</li>
        <li>Planlı giriş-final akışı</li>
        <li>İletişim ve saat yönetimi disiplini</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Kartal’da palyaço ile kombine bir plan isterseniz <Link to="/blog/kartal-palyaco-kiralama" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">Kartal palyaço kiralama</Link> rehberi ile birlikte değerlendirme yapabilirsiniz.
      </p>

      <h2 id="kartal-sihirbaz-son" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Sonuç: Kartal'da Daha Yüksek Memnuniyet İçin 3 Adım
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-12">
        <li>Rezervasyonu erken yapın ve saatinizi sabitleyin.</li>
        <li>Çocuk yaş grubunu net paylaşın.</li>
        <li>Teklifte süre + içerik + final detayını yazılı teyit edin.</li>
      </ul>

      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg mb-4">
        <p className="text-gray-800 font-semibold">
          Kartal sihirbaz kiralama planında net akış + doğru model seçimi, etkinlik kalitesini doğrudan yükseltir.
        </p>
      </div>
    </>
  )

  return (
    <BlogDetail
      content={content}
      relatedServicePath="/organizasyonlar/sihirbaz"
      relatedServiceName="Sihirbaz Gösterisi"
      faqData={faqData}
      slug="kartal-sihirbaz-kiralama"
    />
  )
}

export default KartalSihirbazKiralama
