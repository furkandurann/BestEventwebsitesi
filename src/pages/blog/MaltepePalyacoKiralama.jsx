import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const MaltepePalyacoKiralama = () => {
  const faqData = [
    {
      question: 'Maltepe palyaço kiralama hizmeti kaç saat sürer?',
      answer: 'Maltepe bölgesinde standart palyaço kiralama hizmeti genellikle 1 veya 2 saat planlanır. Çocuk sayısı ve etkinlik akışına göre süre artırılabilir.'
    },
    {
      question: 'Palyaço hizmetinde neler dahil olur?',
      answer: 'Genellikle karşılama, yaşa uygun oyunlar, mini dans aktiviteleri, sosis balon ve yüz boyama gibi içerikler sunulur. Paket içeriği rezervasyon öncesinde netleştirilir.'
    },
    {
      question: 'Maltepe için rezervasyonu kaç gün önce yapmak gerekir?',
      answer: 'Hafta sonu talepleri yüksek olduğu için en az 5-7 gün önce rezervasyon önerilir. Özel günlerde bu süreyi 10-14 güne çıkarmak daha güvenlidir.'
    },
    {
      question: 'Evde palyaço organizasyonu yapılabilir mi?',
      answer: 'Evet. Ev, site salonu, kafe veya doğum günü mekanı fark etmeksizin uygun bir alan olduğunda palyaço organizasyonu rahatlıkla uygulanır.'
    },
    {
      question: 'Maltepe dışında yakın bölgelere de geliniyor mu?',
      answer: 'Evet. Maltepe merkezli etkinliklerin yanında Kartal, Ataşehir, Küçükyalı, Bostancı ve çevre ilçelere de hizmet planlanabilir.'
    },
    {
      question: 'Palyaço ile birlikte sihirbaz eklenebilir mi?',
      answer: 'Evet. Palyaço + sihirbaz kombinasyonu çocuk doğum günlerinde en çok tercih edilen paketlerden biridir ve akış daha güçlü hale gelir.'
    }
  ]

  const content = (
    <>
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#maltepede-neden" className="text-red-600 hover:text-red-700 font-semibold">1. Maltepe'de Palyaço Kiralama Neden Yoğun Talep Görüyor?</a></li>
          <li><a href="#maltepe-bolge-plani" className="text-red-600 hover:text-red-700 font-semibold">2. Maltepe Mahallelerine Göre Organizasyon Planı</a></li>
          <li><a href="#maltepe-akis" className="text-red-600 hover:text-red-700 font-semibold">3. Örnek Maltepe Palyaço Etkinlik Akışı (90 Dakika)</a></li>
          <li><a href="#maltepe-fiyat" className="text-red-600 hover:text-red-700 font-semibold">4. Maltepe Palyaço Kiralama Fiyatını Etkileyen Unsurlar</a></li>
          <li><a href="#maltepe-rezervasyon" className="text-red-600 hover:text-red-700 font-semibold">5. Rezervasyon Öncesi Kontrol Listesi</a></li>
        </ul>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Maltepe palyaço kiralama talepleri özellikle doğum günü sezonunda hızlı artar. Site yaşamı, geniş aile katılımı ve çocuk etkinlik alanlarının fazla olması nedeniyle Maltepe'de doğru planlanan bir palyaço organizasyonu etkinliğin tamamını toparlar. Bu rehber, Maltepe bölgesinde rezervasyon yaparken en önemli adımları netleştirir.
      </p>

      <h2 id="maltepede-neden" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Maltepe'de Palyaço Kiralama Neden Yoğun Talep Görüyor?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Maltepe'de çocuk doğum günü organizasyonları çoğunlukla apartman/site sosyal alanlarında veya butik mekanlarda yapılıyor. Bu mekan tiplerinde palyaço hizmeti, çocukların dikkatini toplamak ve programı düzenli ilerletmek için kritik rol oynar.
      </p>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ailelerin en çok aradığı 3 konu</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>Çocukların yaş grubuna uygun oyun akışı</li>
        <li>Zamanında varış ve etkinlik yönetimi</li>
        <li>Palyaço + ek hizmet kombinasyonu (yüz boyama, sihirbaz)</li>
      </ul>

      <h2 id="maltepe-bolge-plani" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Maltepe Mahallelerine Göre Organizasyon Planı
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Maltepe içinde trafik yoğunluğu saatlere göre değiştiği için mahalle bazlı planlama önemlidir. Özellikle sahil hattı ve E-5 bağlantılarında hafta sonu yoğunluğu hesaplanmalıdır.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Sık Talep Gelen Noktalar</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Küçükyalı</li>
            <li>Altayçeşme</li>
            <li>İdealtepe</li>
            <li>Bağlarbaşı</li>
          </ul>
        </div>
        <div className="bg-white border rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Planlama Önerisi</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Etkinlikten 15-20 dk önce hazırlık</li>
            <li>Çocuk sayısına göre oyun sırası</li>
            <li>Pasta saatine göre final kurgusu</li>
            <li>WhatsApp ile lokasyon netleştirme</li>
          </ul>
        </div>
      </div>

      <h2 id="maltepe-akis" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Örnek Maltepe Palyaço Etkinlik Akışı (90 Dakika)
      </h2>
      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">0-20 dk: Isınma ve Tanışma</h3>
          <p className="text-gray-700">Çocuklarla kısa tanışma, isim oyunu ve ritim/dans başlangıcı yapılır.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">20-55 dk: Grup Oyunları ve Yüz Boyama</h3>
          <p className="text-gray-700">Yaşa uygun yarışmalar, mini etap oyunları ve kontrollü yüz boyama akışı uygulanır.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">55-90 dk: Sosis Balon + Pasta Geçişi</h3>
          <p className="text-gray-700">Balon figürleri dağıtılır, toplu fotoğraf alınır ve pasta seremonisine geçilir.</p>
        </div>
      </div>

      <h2 id="maltepe-fiyat" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Maltepe Palyaço Kiralama Fiyatını Etkileyen Unsurlar
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>Etkinlik süresi (1 saat / 2 saat / özel paket)</li>
        <li>Çocuk sayısı ve yaş dağılımı</li>
        <li>Ek hizmetler (sihirbaz, bubble show, ses sistemi)</li>
        <li>Tarih ve saat yoğunluğu (özellikle hafta sonu)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Fiyat teklifi alırken sadece rakama değil, paketin içeriğine bakın. Program akışı, ekip deneyimi ve etkinlik yönetimi netse sonuç çok daha başarılı olur. Sihirbaz destekli bir paket için <Link to="/blog/maltepe-sihirbaz-kiralama" className="text-red-600 hover:text-red-700 font-semibold underline">Maltepe sihirbaz kiralama</Link> yazısına da bakabilirsiniz.
      </p>

      <h2 id="maltepe-rezervasyon" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Rezervasyon Öncesi Kontrol Listesi
      </h2>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hızlı kontrol</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-12">
        <li>Etkinlik adresi ve park bilgisi hazır mı?</li>
        <li>Başlangıç saati ve pasta saati net mi?</li>
        <li>Çocuk sayısı kesinleşti mi?</li>
        <li>Telefon/WhatsApp iletişim kişisi belirlendi mi?</li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-4">
        <p className="text-gray-800 font-semibold">
          Maltepe palyaço kiralama planınızı erken yaparsanız hem saat seçeneğiniz artar hem de akış daha kontrollü ilerler.
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
      slug="maltepe-palyaco-kiralama"
    />
  )
}

export default MaltepePalyacoKiralama
