import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const AcilisOrganizasyonu = () => {
  const faqData = [
    {
      question: 'Açılış organizasyonu için hangi hizmetleri birlikte sunuyorsunuz?',
      answer: 'Balon süsleme, ses sistemi, bistro masa kurulumu, hostes karşılama, flama bayrak süslemesi, kurdele kesimi, karşılama akışı ve etkinlik koordinasyonunu tek plan altında sunuyoruz.'
    },
    {
      question: 'Balon süsleme ve flama bayrak çalışması marka renklerine göre hazırlanabilir mi?',
      answer: 'Evet. Açılış organizasyonu tasarımını marka renklerinize, cephe genişliğine ve mekanın indoor veya outdoor kullanımına göre planlıyoruz. Görsel bütünlük için genellikle iki veya üç ana renk öneriyoruz.'
    },
    {
      question: 'Ses sistemi sadece müzik için mi kurulur?',
      answer: 'Hayır. Ses sistemi kurulumunu konuşmaların net duyulması, fon müziği, mikrofon kullanımı ve kurdele kesimi sırasında kontrollü bir akış sağlamak için planlıyoruz.'
    },
    {
      question: 'Hostes karşılama ekibi açılışta ne yapar?',
      answer: 'Hostes ekibi misafir yönlendirme, girişte karşılama, davetli akışı, broşür veya hediye dağıtımı ve kurdele kesimi öncesi alan düzeninin korunmasına destek verir.'
    },
    {
      question: 'Açılış lansman organizasyonu kaç gün önceden planlanmalı?',
      answer: 'Standart mağaza ve showroom açılışlarında ideal planlama süresi en az 7-10 gün, AVM ve plaza açılışlarında ise izin ve operasyon yönetimi nedeniyle 2-3 haftadır.'
    }
  ]

  const serviceHighlights = [
    {
      title: 'Balon Süsleme',
      description: 'Giriş kemeri, fotoğraf alanı, kapı çerçevesi ve mağaza önü kompozisyonlarını markaya uygun renk planıyla kuruyoruz.'
    },
    {
      title: 'Ses Sistemi',
      description: 'Mikrofon, hoparlör ve fon müziği akışını açılış konuşması, duyuru ve kurdele kesimi için hazır hale getiriyoruz.'
    },
    {
      title: 'Bistro Kurulumu',
      description: 'Misafir bekleme ve ikram alanı için şık bistro masa yerleşimi yapıyor, akışı kalabalığı yormayacak şekilde kurguluyoruz.'
    },
    {
      title: 'Hostes Karşılama',
      description: 'Girişte yönlendirme, davetli karşılama ve protokol düzenini deneyimli ekip ile yönetiyoruz.'
    },
    {
      title: 'Flama Bayrak',
      description: 'Cadde görünürlüğünü artıran flama bayrak ve cephe süslemeleriyle açılışı uzaktan fark edilir hale getiriyoruz.'
    },
    {
      title: 'Kurdele Kesimi',
      description: 'Konuşma, geri sayım, fotoğraf anı ve kesim sırasını aksatmadan yönetip marka için güçlü bir ilk kare oluşturuyoruz.'
    }
  ]

  const relatedArticles = [
    {
      title: 'Kurumsal Lansman Organizasyonu Nasıl Planlanır?',
      path: '/blog/kurumsal-lansman-organizasyonu-nasil-planlanir',
      description: 'Lansman günü akışı, hedef kitle planlaması ve sahne düzeni hakkında detaylı rehber.'
    },
    {
      title: 'Açılış Organizasyonu Maliyeti Nasıl Hesaplanır?',
      path: '/blog/acilis-organizasyonu-maliyeti-hesaplama',
      description: 'Balon, ses, ekip ve lojistik kalemlerini bütçe tarafında nasıl okumak gerektiğini anlatır.'
    },
    {
      title: 'AVM Açılış Organizasyonunda Dikkat Edilmesi Gerekenler',
      path: '/blog/avm-acilis-organizasyonu-dikkat-edilecekler',
      description: 'AVM içi ses, güvenlik, kurulum saati ve ziyaretçi akışı için pratik kontrol listesi sunar.'
    },
    {
      title: 'Kurumsal Etkinlik Bütçesi Nasıl Planlanır?',
      path: '/blog/kurumsal-etkinlik-butcesi-planlama',
      description: 'Kurumsal etkinliklerde dekorasyon, teknik ekipman ve ekip bütçesini dengeleme yöntemleri.'
    }
  ]

  const content = (
    <>
      <div className="bg-stone-50 rounded-2xl p-6 md:p-8 mb-8 border border-stone-200">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700 mb-3">
          Açılış ve Lansman Planı
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Düzenli, sade ve dönüşüm odaklı bir açılış akışı
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Açılış günü yalnızca kalabalık toplamak için değil, markanızın ilk izlenimini net vermek için tasarlanmalı. Bu yüzden balon süsleme, ses sistemi, bistro yerleşimi, hostes karşılama, flama bayrak süslemesi ve kurdele kesimini tek bir akış içinde planlıyoruz.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <a href="#kapsam" className="rounded-xl bg-white px-4 py-3 border border-stone-200 text-gray-700 hover:border-red-300 hover:text-red-700 transition-colors">1. Hizmet kapsamı</a>
          <a href="#dekor" className="rounded-xl bg-white px-4 py-3 border border-stone-200 text-gray-700 hover:border-red-300 hover:text-red-700 transition-colors">2. Balon ve flama tasarımı</a>
          <a href="#teknik" className="rounded-xl bg-white px-4 py-3 border border-stone-200 text-gray-700 hover:border-red-300 hover:text-red-700 transition-colors">3. Ses sistemi, bistro ve hostes</a>
          <a href="#kurdele" className="rounded-xl bg-white px-4 py-3 border border-stone-200 text-gray-700 hover:border-red-300 hover:text-red-700 transition-colors">4. Kurdele kesimi senaryosu</a>
          <a href="#paketler" className="rounded-xl bg-white px-4 py-3 border border-stone-200 text-gray-700 hover:border-red-300 hover:text-red-700 transition-colors">5. Mekana göre çözüm önerileri</a>
          <a href="#ilgili-bloglar" className="rounded-xl bg-white px-4 py-3 border border-stone-200 text-gray-700 hover:border-red-300 hover:text-red-700 transition-colors">6. İlgili blog yazıları</a>
        </div>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Mağaza açılışı, showroom lansmanı, plaza girişi ya da cadde üzeri yeni şube duyurusu fark etmeksizin iyi bir <strong>açılış organizasyonu</strong> ziyaretçiyi yormayan, net ve profesyonel bir akış ister. Best Event olarak İstanbul genelinde kurduğumuz açılışlarda görsel etkiyi operasyon disipliniyle birleştiriyoruz.
      </p>

      <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-10">
        <p className="text-gray-800 leading-relaxed">
          En çok talep edilen kombinasyon: <strong>balon süsleme + ses sistemi + bistro + hostes karşılama + flama bayrak + kurdele kesimi</strong>. Bu set, hem cadde görünürlüğünü artırır hem de içeride düzenli bir karşılama alanı oluşturur.
        </p>
      </div>

      <h2 id="kapsam" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Açılış organizasyonu ve balon süsleme hizmetimiz neleri kapsar?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Açılış günü birbiriyle uyumlu hareket etmesi gereken birçok kalem vardır. Tasarımı ayrı, teknik kurulumları ayrı ve misafir yönetimini ayrı ele almak yerine tüm süreci tek senaryoda planlamak daha doğru sonuç verir. Aşağıdaki yapı, 2026 kullanıcı beklentilerine uygun biçimde sade, anlaşılır ve hızlı taranabilir bir kurgu sunar.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {serviceHighlights.map((item) => (
          <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm leading-6 text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 id="dekor" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Balon süsleme, flama bayrak ve giriş görünürlüğü
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Açılış organizasyonunda en güçlü ilk temas cephede başlar. Balon kemeri, kapı çerçevesi, mağaza önü kolon süslemeleri ve flama bayraklar; yoldan geçen kişiye burada yeni bir hareket olduğunu saniyeler içinde anlatır. Ancak bu alan ne kadar dikkat çekici olursa olsun, karmaşık görünmemelidir.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Mekan Tipi</th>
              <th className="py-3 px-4 text-left">Önerilen Balon Uygulaması</th>
              <th className="py-3 px-4 text-left">Flama Bayrak</th>
              <th className="py-3 px-4 text-left">Renk Planı</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-3 px-4">Cadde mağazası</td>
              <td className="py-3 px-4">Kapı kemeri + yan kolon</td>
              <td className="py-3 px-4">3-6 adet</td>
              <td className="py-3 px-4">2 ana renk + 1 vurgu</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4">Showroom veya ofis</td>
              <td className="py-3 px-4">Minimal kemer + fotoğraf köşesi</td>
              <td className="py-3 px-4">2-4 adet</td>
              <td className="py-3 px-4">Kurumsal tonlar</td>
            </tr>
            <tr>
              <td className="py-3 px-4">AVM / plaza girişi</td>
              <td className="py-3 px-4">Geniş giriş kemeri + yönlendirme noktası</td>
              <td className="py-3 px-4">6+ adet</td>
              <td className="py-3 px-4">Marka renklerine göre kontrollü set</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Doğru yaklaşım</h3>
          <ul className="space-y-2 text-gray-700">
            <li>2 veya 3 ana renkle net bir cephe tasarımı kurmak</li>
            <li>Balon süslemeyi giriş fotoğraflarını güçlendirecek şekilde yerleştirmek</li>
            <li>Flama bayrakları araç ve yaya akışına göre görünür aksa koymak</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Kaçınılması gerekenler</h3>
          <ul className="space-y-2 text-gray-700">
            <li>6 veya daha fazla renk kullanıp cepheyi yorucu hale getirmek</li>
            <li>Kapı girişini daraltan aşırı yoğun balon kurulumu yapmak</li>
            <li>Flama bayrakları fotoğraf alanını kapatacak düzensizlikte yerleştirmek</li>
          </ul>
        </div>
      </div>

      <h2 id="teknik" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Ses sistemi, bistro kurulumu ve hostes karşılama
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Açılış organizasyonunda dekor tek başına yeterli değildir. Sesin net duyulması, misafirlerin rahatça bekleyebilmesi ve girişte doğru yönlendirme yapılması deneyimin kalitesini doğrudan etkiler. Bu nedenle teknik ve operasyon tarafını dekor kadar ciddiye alıyoruz.
      </p>

      <div className="grid md:grid-cols-3 gap-5 mb-10">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Ses Sistemi</h3>
          <p className="text-sm text-gray-700 leading-6">
            Mikrofonlu konuşmalar, fon müziği ve kurdele kesimi anonsları için mekan büyüklüğüne uygun hoparlör ve mikser kurgusu oluşturuyoruz.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Bistro</h3>
          <p className="text-sm text-gray-700 leading-6">
            Davetlilerin ayakta rahatça sohbet edebileceği bistro yerleşimi ile ikram alanını sıkışık değil akışkan hale getiriyoruz.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Hostes</h3>
          <p className="text-sm text-gray-700 leading-6">
            Girişte karşılama, yönlendirme, promosyon dağıtımı ve protokol akışını hostes ekibi ile destekliyoruz.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 mb-10">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Örnek açılış akışı</h3>
        <ol className="space-y-3 text-gray-700">
          <li><strong>Kurulum:</strong> Balon süsleme, flama bayrak, ses sistemi ve bistro alanı etkinlikten önce tamamlanır.</li>
          <li><strong>Karşılama:</strong> Hostes ekibi girişte misafiri karşılar, yönlendirir ve akışı toplar.</li>
          <li><strong>Bekleme alanı:</strong> Fon müziği eşliğinde bistro çevresinde kontrollü bir toplanma sağlanır.</li>
          <li><strong>Anons:</strong> Mikrofonla kısa konuşma ve marka mesajı verilir.</li>
          <li><strong>Kurdele kesimi:</strong> Fotoğraf ekibi hazırken kesim anı yönetilir.</li>
          <li><strong>Serbest dolaşım:</strong> Misafirler mağaza veya etkinlik alanına rahatça dağılır.</li>
        </ol>
      </div>

      <h2 id="kurdele" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Kurdele kesimi ve lansman anı nasıl güçlü görünür?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Kurdele kesimi açılış organizasyonunun en çok fotoğraflanan anıdır. Bu yüzden birkaç saniyelik bu bölümü tesadüfe bırakmıyoruz. Kurdele yüksekliği, konuşma süresi, misafir dizilimi ve arka plan görseli önceden belirlenirse sahne çok daha profesyonel görünür.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-2xl bg-white border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Fotoğraf için doğru set</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Kurdele arkasında boş değil düzenli bir balon arka plan bırakmak</li>
            <li>Kesim alanını hostes yönlendirmesiyle gereksiz kalabalıktan arındırmak</li>
            <li>Makas, kurdele ve marka görünürlüğünü aynı kareye almak</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Operasyon için doğru set</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Anonsu 1-2 dakikayı geçirmemek</li>
            <li>Ses sisteminde yedek mikrofon bulundurmak</li>
            <li>Kesim sonrasında misafiri direkt girişe veya ikram alanına yönlendirmek</li>
          </ul>
        </div>
      </div>

      <h2 id="paketler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Mekana göre açılış lansman organizasyonu önerileri
      </h2>

      <div className="grid lg:grid-cols-3 gap-5 mb-10">
        <div className="rounded-2xl bg-white border border-gray-200 p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-red-700 font-semibold mb-2">Cadde Mağazası</p>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı ve görünür kurulum</h3>
          <p className="text-gray-700 text-sm leading-6">
            Balon kemeri, flama bayrak, tek mikrofonlu ses sistemi ve iki bistro masa ile düşük alanda güçlü bir ilk izlenim kurulabilir.
          </p>
        </div>
        <div className="rounded-2xl bg-white border border-gray-200 p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-red-700 font-semibold mb-2">Showroom / Ofis</p>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Daha kurumsal ve temiz görünüm</h3>
          <p className="text-gray-700 text-sm leading-6">
            Minimal balon tasarımı, kontrollü bistro alanı, hostes karşılama ve kısa konuşma akışı ile yorucu olmayan prestijli bir atmosfer oluşturulur.
          </p>
        </div>
        <div className="rounded-2xl bg-white border border-gray-200 p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-red-700 font-semibold mb-2">AVM / Plaza</p>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Kalabalık yönetimi odaklı çözüm</h3>
          <p className="text-gray-700 text-sm leading-6">
            Geniş giriş balonları, yönlendirme hostesleri, güçlü ses sistemi ve net kurdele kesimi planı ile yüksek sirkülasyon kontrollü hale getirilir.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-red-900 text-white p-8 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Açılış organizasyonunda amacımız gösteriş değil, düzenli etki
        </h2>
        <p className="leading-relaxed text-white/90 mb-6">
          Kullanıcıyı yormayan bir akış, doğru renk kullanımı ve düzenli operasyon markanızın ilk gün performansını güçlendirir. Açılış günü yalnızca süsleme değil, aynı zamanda yönlendirme ve tempo yönetimidir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-red-700 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Ara
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba, acilis organizasyonu ve balon susleme hizmeti icin bilgi almak istiyorum"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            WhatsApp'tan Yaz
          </a>
        </div>
      </div>

      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Sık sorulan sorular
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((item) => (
          <div key={item.question} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
            <p className="text-gray-700 leading-7">{item.answer}</p>
          </div>
        ))}
      </div>

      <h2 id="ilgili-bloglar" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        İlgili blog yazıları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Açılış ve lansman planlamasını daha derin okumak isterseniz aşağıdaki içerikler bu sayfayı tamamlar. Özellikle bütçe, AVM açılışı ve kurumsal lansman tarafında ek bağlam sağlar.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {relatedArticles.map((article) => (
          <Link
            key={article.path}
            to={article.path}
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-red-300 hover:shadow-md transition-all duration-200"
          >
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-700 leading-6 mb-3">{article.description}</p>
            <span className="text-sm font-semibold text-red-700">Yazıyı Oku</span>
          </Link>
        ))}
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="acilis-organizasyonu-istanbul"
      relatedServicePath="/organizasyonlar/acilis-organizasyonu"
      relatedServiceName="Açılış Organizasyonu"
      faqData={faqData}
    >
      {content}
    </BlogDetail>
  )
}

export default AcilisOrganizasyonu
