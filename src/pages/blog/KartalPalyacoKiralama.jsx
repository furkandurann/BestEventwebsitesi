import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const KartalPalyacoKiralama = () => {
  const faqData = [
    {
      question: 'Kartal palyaço kiralama için en uygun saat aralığı nedir?',
      answer: 'Kartal bölgesinde çocuk partileri için en verimli saatler 13:00-18:00 aralığıdır. Çocukların enerjisinin yüksek olduğu bu saatlerde oyun akışı daha iyi ilerler.'
    },
    {
      question: 'Palyaço etkinliği kaç çocuk için uygundur?',
      answer: 'Standart akış 10-25 çocuk için idealdir. Daha kalabalık gruplarda ikinci animatör veya ek destek planlamak etkinlik kalitesini artırır.'
    },
    {
      question: 'Kartal sahil tarafında ulaşım problemi olur mu?',
      answer: 'Hafta sonu sahil ve ana arterlerde yoğunluk olabildiği için adres/paylaşım saatinin önceden netleştirilmesi önerilir.'
    },
    {
      question: 'Palyaço paketine hangi ek hizmetler eklenebilir?',
      answer: 'Yüz boyama, sihirbaz, bubble show, mini DJ ve sosis balon gibi içerikler eklenebilir. Çocuk yaş grubuna göre kombinasyon yapılmalıdır.'
    },
    {
      question: 'Rezervasyon iptal/değişiklik nasıl olur?',
      answer: 'Tarih değişiklikleri için mümkün olduğunca erken bilgi vermek gerekir. Müsaitlik durumuna göre yeni planlama yapılır.'
    },
    {
      question: 'Kartal dışında komşu ilçelere de hizmet var mı?',
      answer: 'Evet. Maltepe, Pendik, Ataşehir ve çevre ilçeler için de palyaço organizasyonu planlanabilir.'
    }
  ]

  const content = (
    <>
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#kartal-talep" className="text-red-600 hover:text-red-700 font-semibold">1. Kartal'da Palyaço Kiralama Talebi Neden Yüksek?</a></li>
          <li><a href="#kartal-plan" className="text-red-600 hover:text-red-700 font-semibold">2. Kartal İçin Doğru Etkinlik Planı Nasıl Kurulur?</a></li>
          <li><a href="#kartal-program" className="text-red-600 hover:text-red-700 font-semibold">3. 2 Saatlik Kartal Palyaço Programı Örneği</a></li>
          <li><a href="#kartal-hata" className="text-red-600 hover:text-red-700 font-semibold">4. En Sık Yapılan Planlama Hataları</a></li>
          <li><a href="#kartal-sonuc" className="text-red-600 hover:text-red-700 font-semibold">5. Hızlı Sonuç ve Rezervasyon Önerisi</a></li>
        </ul>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Kartal palyaço kiralama aramalarında kullanıcıların en büyük beklentisi, çocukları gerçekten oyalayan ve etkinliği yöneten bir ekip bulmaktır. Sadece kostüm değil, program yönetimi de kritik olduğu için doğru planlama şarttır.
      </p>

      <h2 id="kartal-talep" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Kartal'da Palyaço Kiralama Talebi Neden Yüksek?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kartal'da aile etkinlikleri sıklıkla site salonları, kafe alanları ve ev içi organizasyonlarla yapılıyor. Bu yapıda palyaço, çocuk grubunu bir arada tutup etkinliğin akışını kolaylaştırır.
      </p>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Öne çıkan ihtiyaçlar</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Yaşa göre oyun seçimi (3-5 yaş / 6-8 yaş / 9+)</li>
        <li>Çekingen çocukları oyuna dahil etme</li>
        <li>Pasta ve fotoğraf anını doğru zamanda yönetme</li>
      </ul>

      <h2 id="kartal-plan" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Kartal İçin Doğru Etkinlik Planı Nasıl Kurulur?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Başarılı bir palyaço organizasyonu için üç bilgi baştan net olmalıdır: çocuk sayısı, mekan tipi ve toplam süre. Bu üç kalem netse, etkinlikte boşluk veya karmaşa oluşmaz.
      </p>
      <div className="bg-white border rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Planlama şablonu</h3>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Çocuk sayısını ve yaş aralığını paylaşın.</li>
          <li>Mekanda oyun için boş alanı ayırın.</li>
          <li>Pasta saatini etkinlik ortasına veya sonuna konumlayın.</li>
          <li>Gerekirse palyaço + sihirbaz kombinasyonu isteyin.</li>
        </ol>
      </div>

      <h2 id="kartal-program" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. 2 Saatlik Kartal Palyaço Programı Örneği
      </h2>
      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">0-30 dk: Karşılama + Isınma Oyunları</h3>
          <p className="text-gray-700">İsim oyunu, mini dans ve grup uyumu kurulur.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">30-75 dk: Yarışmalar + Yüz Boyama</h3>
          <p className="text-gray-700">Enerjik etaplar, kontrollü yüz boyama ve çocuk katılımı.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">75-120 dk: Sosis Balon + Pasta + Final</h3>
          <p className="text-gray-700">Balon figürleri, toplu fotoğraf ve kutlama kapanışı.</p>
        </div>
      </div>

      <h2 id="kartal-hata" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. En Sık Yapılan Planlama Hataları
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Saati geç netleştirmek ve programı sıkıştırmak</li>
        <li>Mekanda oyun alanı ayırmamak</li>
        <li>Yaş dağılımını paylaşmadan paket seçmek</li>
        <li>Yalnızca fiyata odaklanıp içerik karşılaştırmamak</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Kartal tarafında daha güçlü bir kombinasyon istiyorsanız <Link to="/blog/kartal-sihirbaz-kiralama" className="text-red-600 hover:text-red-700 font-semibold underline">Kartal sihirbaz kiralama</Link> yazısındaki paket kurgusunu da inceleyin.
      </p>

      <h2 id="kartal-sonuc" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Hızlı Sonuç ve Rezervasyon Önerisi
      </h2>
      <p className="text-gray-700 leading-relaxed mb-12">
        Kartal palyaço kiralama için ideal yaklaşım: erken rezervasyon, net akış ve yaşa uygun içerik. Bu üç adım tamamlandığında çocukların ilgisi dağılmaz ve etkinlik çok daha keyifli geçer.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-4">
        <p className="text-gray-800 font-semibold">
          Kartal için haftasonu saatleri hızlı dolabildiği için rezervasyonu mümkünse 1 hafta önceden planlayın.
        </p>
      </div>
    </>
  )

  return (
    <BlogDetail
      content={content}
      relatedServicePath="/organizasyonlar/palyaco-kiralama"
      relatedServiceName="Palyaço Kiralama"
      faqData={faqData}
      slug="kartal-palyaco-kiralama"
    />
  )
}

export default KartalPalyacoKiralama
