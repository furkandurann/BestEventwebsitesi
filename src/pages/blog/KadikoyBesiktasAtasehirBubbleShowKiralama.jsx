import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const KadikoyBesiktasAtasehirBubbleShowKiralama = () => {
  const faqData = [
    {
      question: 'Bubble show organizasyonu ne kadar sürer?',
      answer: 'Standart bubble show gösterisi genellikle 30-45 dakika sürer. Etkinlik tipine göre interaktif bölümlerle süre uzatılabilir.'
    },
    {
      question: 'Açık alanda bubble show yapılabilir mi?',
      answer: 'Evet, yapılabilir. Ancak rüzgar ve yağış durumuna göre performans planı güncellenir. En iyi sonuç için hava durumu etkinlikten önce kontrol edilir.'
    },
    {
      question: 'Kiralama hizmetine ekipman dahil mi?',
      answer: 'Evet. Profesyonel baloncuk ekipmanı, özel solüsyon ve gösteri için gerekli teknik içerik ekip tarafından sağlanır.'
    },
    {
      question: 'Çocuklar balonun içine girebilir mi?',
      answer: 'Evet. Uygun yaş grubunda ve güvenlik kontrolüyle dev balon içine alma performansı uygulanabilir.'
    },
    {
      question: 'Kurumsal etkinlikler için bubble show uygun mu?',
      answer: 'Kesinlikle. Lansman, açılış, AVM ve marka etkinliklerinde bubble show görsel etkiyi artırdığı için sık tercih edilir.'
    },
    {
      question: 'Fiyatlar hangi aralıkta planlanır?',
      answer: 'Etkinlik türüne ve süreye göre paketler 5.000 TL ile 15.000 TL aralığında planlanabilir. Net teklif için tarih, mekan ve içerik bilgisi gerekir.'
    }
  ]

  const content = (
    <>
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-cyan-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#kadikoy-hikaye" className="text-cyan-700 hover:text-cyan-800 font-semibold">1. Kadıköy Bubble Show Kiralama: Ece'nin Baloncuk Hikayesi</a></li>
          <li><a href="#besiktas-hikaye" className="text-cyan-700 hover:text-cyan-800 font-semibold">2. Beşiktaş Okul Etkinliği: Alkışların Durmadığı Gün</a></li>
          <li><a href="#atasehir-hikaye" className="text-cyan-700 hover:text-cyan-800 font-semibold">3. Ataşehir Site Etkinliği: Komşuların Katıldığı Gösteri</a></li>
          <li><a href="#fiyat-etiketi" className="text-cyan-700 hover:text-cyan-800 font-semibold">4. Bubble Show Kiralama Fiyat Etiketleri (5.000 TL - 15.000 TL)</a></li>
          <li><a href="#surec" className="text-cyan-700 hover:text-cyan-800 font-semibold">5. Organizasyon Süreci ve Teknik Kontrol Listesi</a></li>
        </ul>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Kadıköy, Beşiktaş ve Ataşehir'de doğum günü, okul etkinliği veya kurumsal organizasyon planlıyorsanız bubble show kiralama hizmeti etkinliği standart eğlenceden çıkarır. Best Event olarak bu üç bölgede uyguladığımız bubble show organizasyonları; görsel etki, çocuk katılımı ve güvenli kurulum odağıyla planlanır.
      </p>

      <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          Bubble show gösterisi; doğum günü, okul etkinliği, AVM organizasyonu, açılış ve festival gibi farklı senaryolarda hem çocuk hem yetişkin katılımcılar için yüksek etkileşim üretir.
        </p>
      </div>

      <h2 id="kadikoy-hikaye" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Kadıköy Bubble Show Kiralama: Ece'nin Baloncuk Hikayesi
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Moda sahil hattında planlanan 6 yaş doğum günü organizasyonunda aile, klasik animasyon yerine daha görsel bir seçenek istedi. Gösteri başladığında dev balon içine alma bölümünde tüm çocuklar sıraya girdi. Ece'nin gösteri sonunda tekrar balon içine girmek istemesi, etkinliğin doğru kurgulandığının en net göstergesiydi.
      </p>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kadıköy için öne çıkan avantajlar</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Sahil ve park alanlarında güçlü görsel etki</li>
        <li>Aile katılımı yüksek etkinlik kurgusu</li>
        <li>Doğum günü temalarına kolay entegrasyon</li>
      </ul>

      <h2 id="besiktas-hikaye" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Beşiktaş Okul Etkinliği: Alkışların Durmadığı Gün
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beşiktaş'taki özel anaokulu yıl sonu etkinliğinde bubble show planlandı. Kapalı salon düzeninde yapılan gösteride, kontrollü baloncuk sahne akışıyla çocuklar hem izleyici hem katılımcı oldu. Etkinlik sonunda okul yönetimi aynı konsepti dönemsel programa dahil etmek istedi.
      </p>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Beşiktaş organizasyonlarında dikkat</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Kapalı alanda zemin ve kayma güvenliği kontrolü</li>
        <li>Sahne ışığı ve müzik uyumu</li>
        <li>Çocuk geçiş alanlarının önceden belirlenmesi</li>
      </ul>

      <h2 id="atasehir-hikaye" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Ataşehir Site Etkinliği: Komşuların Katıldığı Gösteri
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ataşehir'de bir site bahçesinde yapılan doğum gününde gösteri başladığında yalnız davetliler değil, çevredeki çocuklar da etkinliğe katıldı. Geniş alanda kurulan bubble show, balkonlardan izlenen bir mini festivale dönüştü.
      </p>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ataşehir'de neden güçlü sonuç verir?</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Site bahçelerinde geniş uygulama alanı</li>
        <li>Aile ve komşu katılımının yüksek olması</li>
        <li>Fotoğraf/video için güçlü doğal ışık avantajı</li>
      </ul>

      <h2 id="fiyat-etiketi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Bubble Show Kiralama Fiyat Etiketleri (5.000 TL - 15.000 TL)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Aşağıdaki etiketler 2026 planlama aralığı için rehber niteliğindedir. Net fiyat; mekan tipi, süre, tarih ve ek hizmetlere göre tekliflendirilir.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border-2 border-cyan-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Başlangıç Paket</h3>
          <p className="text-3xl font-extrabold text-cyan-700 mb-3">₺5.000</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>30 dk gösteri</li>
            <li>Standart ekipman</li>
            <li>Temel interaktif bölüm</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-cyan-500 rounded-xl p-6 shadow-lg">
          <p className="text-xs font-bold text-cyan-700 mb-2 uppercase">En çok tercih edilen</p>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Standart Paket</h3>
          <p className="text-3xl font-extrabold text-cyan-700 mb-3">₺9.500</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>40-45 dk gösteri</li>
            <li>Dev balon içine alma</li>
            <li>Geniş interaktif akış</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-cyan-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Paket</h3>
          <p className="text-3xl font-extrabold text-cyan-700 mb-3">₺15.000</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>Uzun gösteri + özel kurgu</li>
            <li>Kurumsal/kalabalık etkinlik uyumu</li>
            <li>Öncelikli planlama desteği</li>
          </ul>
        </div>
      </div>

      <h2 id="surec" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Organizasyon Süreci ve Teknik Kontrol Listesi
      </h2>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5 adımda planlama</h3>
      <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
        <li>Etkinlik tarihi ve saatinin netleşmesi</li>
        <li>Mekan bilgisi ve alan ölçüsünün paylaşılması</li>
        <li>Gösteri süresi ve içerik seçimi</li>
        <li>Kurulum, elektrik ve güvenlik kontrolü</li>
        <li>Etkinlik günü uygulama + kapanış</li>
      </ol>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Teknik kontrol listesi</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>Zemin yapısı ve kayma riski</li>
        <li>Elektrik erişimi</li>
        <li>Hava koşulları (açık alanda)</li>
        <li>Çocuk güvenlik alanı</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-12">
        Kadıköy, Beşiktaş ve Ataşehir için bubble show kiralama planı yaparken içerik, süre ve güvenlik kalemlerini birlikte düşünmek gerekir. Hizmet detayları için <Link to="/organizasyonlar/bubble-show" className="text-cyan-700 hover:text-cyan-800 font-semibold underline">Bubble Show hizmet sayfamızı</Link> inceleyebilirsiniz.
      </p>
    </>
  )

  return (
    <BlogDetail
      content={content}
      relatedServicePath="/organizasyonlar/bubble-show"
      relatedServiceName="Bubble Show"
      faqData={faqData}
      slug="kadikoy-besiktas-atasehir-bubble-show-kiralama"
    />
  )
}

export default KadikoyBesiktasAtasehirBubbleShowKiralama
