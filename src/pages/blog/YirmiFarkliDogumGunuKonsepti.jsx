import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const YirmiFarkliDogumGunuKonsepti = () => {
  const faqData = [
    {
      question: 'Doğum günü konsepti seçerken nelere dikkat etmeliyim?',
      answer: 'Konsept seçiminde çocuğunuzun yaşı, ilgi alanları, davetli sayısı ve bütçeniz belirleyici faktörlerdir. 3-5 yaş grubu için görsel açıdan zengin ve basit konseptler (Unicorn, Prenses, Süper Kahraman), 6-9 yaş için interaktif konseptler (Bilim Laboratuvarı, Mini Şef, Uzay Macerası), 10-12 yaş için trend ve sosyal medya dostu konseptler (Neon Party, Retro 90\'lar, Film/Hollywood) idealdir. Mekan koşullarını da göz önünde bulundurun: açık alan konseptleri (Safari, Korsan) ile kapalı alan konseptleri (Bilim, Sanat) farklı gereksinimlere sahiptir.'
    },
    {
      question: '2026 yılında en popüler çocuk doğum günü temaları hangileri?',
      answer: '2026 yılında öne çıkan doğum günü temaları arasında Neon/Glow Party, Uzay Macerası, Bilim Laboratuvarı ve Retro 90\'lar konseptleri bulunmaktadır. Klasik favoriler olan Süper Kahraman, Prenses ve Unicorn temaları hâlâ popülerliğini korumaktadır. Bunlara ek olarak sürdürülebilirlik temalı partiler, doğa dostu Botanik konseptleri ve teknoloji odaklı Minecraft/Lego partileri yükselen trendler arasındadır.'
    },
    {
      question: 'Bir konsept için minimum ve maksimum bütçe ne kadar olmalı?',
      answer: 'Basit konseptler (Gökkuşağı, Balon Fiesta) dekorasyon odaklı olduğundan daha düşük bütçeyle gerçekleştirilebilir. Orta düzey konseptler (Prenses, Süper Kahraman) kostümlü karakter ve temalı aktiviteler gerektirdiğinden orta bütçe gerektirir. Kapsamlı konseptler (Bilim Laboratuvarı, Sirk/Karnaval, Film/Hollywood) birden fazla gösteri ve özel dekor gerektirdiğinden yüksek bütçeye ihtiyaç duyar. Her bütçeye uygun özelleştirmeler yapılabilir; detaylı fiyat bilgisi için bizi arayabilirsiniz.'
    },
    {
      question: 'Birden fazla konsepti birleştirebilir miyiz?',
      answer: 'Evet, uyumlu konseptleri birleştirmek mümkündür ve oldukça popülerdir. Örneğin Prenses + Unicorn, Süper Kahraman + Uzay Macerası, Sirk + Balon Fiesta gibi kombinasyonlar harika sonuçlar verir. Ancak birbiriyle uyumsuz temaları karıştırmak (örneğin Dinozor + Prenses) görsel bütünlüğü bozabilir. Profesyonel organizatörlerimiz size en uyumlu kombinasyonları önerecektir.'
    },
    {
      question: 'Konsept partide kostümlü karakter şart mı?',
      answer: 'Şart olmamakla birlikte, kostümlü karakter partinin eğlence değerini ve çocukların deneyimini önemli ölçüde artırır. Süper Kahraman temasında Spider-Man veya Batman, Prenses temasında Elsa veya Pamuk Prenses, Unicorn temasında unicorn karakter gibi seçenekler partiye büyülü bir atmosfer katar. Alternatif olarak yüz boyama, bubble show veya sihirbaz gösterisi gibi aktivitelerle de tema desteklenebilir.'
    },
    {
      question: 'Açık havada yapılabilecek en uygun konseptler hangileri?',
      answer: 'Orman Safari, Denizci/Korsan Macerası, Spor/Futbol, Çiçek/Botanik ve Balon Fiesta konseptleri açık hava için en ideal temalar arasındadır. Bu konseptler geniş alanda daha iyi deneyim sunar ve doğal ışık fotoğraf çekimlerine harika bir zemin hazırlar. Açık hava partilerinde hava durumu için mutlaka bir B planı oluşturulmalıdır. Çadır veya kapalı alan alternatifi hazırda bulunmalıdır.'
    }
  ]

  const concepts = [
    { id: 1, name: 'Süper Kahraman', emoji: '🦸', category: 'Klasik', color: 'bg-red-50 border-red-300', textColor: 'text-red-700', badgeColor: 'bg-red-100 text-red-600', ageRange: '4-10 yaş', difficulty: 'Orta', trend: 'Klasik Favoriler', desc: 'Spider-Man, Batman, Superman gibi favori kahramanlarla dolu bir parti. Kostümlü karakter gösterisi, kahraman eğitim kampı ve süper güç oyunları ile çocuklar kendi kahramanlık hikayelerini yaşar.' },
    { id: 2, name: 'Prenses Masalı', emoji: '👸', category: 'Klasik', color: 'bg-pink-50 border-pink-300', textColor: 'text-pink-700', badgeColor: 'bg-pink-100 text-pink-600', ageRange: '3-8 yaş', difficulty: 'Orta', trend: 'Klasik Favoriler', desc: 'Elsa, Pamuk Prenses, Rapunzel gibi masal prensesleriyle büyülü bir dünya. Taç yapma atölyesi, balo dansı ve sihirli ayna köşesi ile kızlar gerçek bir prenses gibi hisseder.' },
    { id: 3, name: 'Denizci / Korsan', emoji: '🏴‍☠️', category: 'Macera', color: 'bg-amber-50 border-amber-300', textColor: 'text-amber-700', badgeColor: 'bg-amber-100 text-amber-600', ageRange: '5-11 yaş', difficulty: 'Orta-Zor', trend: 'Klasik Favoriler', desc: 'Hazine avı, korsan gemisi dekorasyonu ve deniz temalı oyunlarla macera dolu bir gün. Harita okuma, pusula kullanma ve hazine sandığı açma gibi aktiviteler çocukların heyecanını doruğa taşır.' },
    { id: 4, name: 'Uzay Macerası', emoji: '🚀', category: 'Modern', color: 'bg-indigo-50 border-indigo-300', textColor: 'text-indigo-700', badgeColor: 'bg-indigo-100 text-indigo-600', ageRange: '5-12 yaş', difficulty: 'Zor', trend: '2026 Trendi', desc: 'Galaksiler arası bir yolculuğa çıkın! Roket yapma atölyesi, gezegen keşfi oyunu ve astronot eğitim kampı ile bilim ve eğlence bir arada. Karanlık ışık efektleri ile uzay atmosferi yaratılır.' },
    { id: 5, name: 'Orman Safari', emoji: '🦁', category: 'Macera', color: 'bg-green-50 border-green-300', textColor: 'text-green-700', badgeColor: 'bg-green-100 text-green-600', ageRange: '3-9 yaş', difficulty: 'Orta', trend: 'Klasik Favoriler', desc: 'Tropik ormanlardan Afrika savanlarına uzanan bir macera. Hayvan maskotları, safari fotoğraf köşesi ve doğa keşif oyunları ile çocuklar vahşi doğayı keşfeder. Yeşil ve kahverengi tonlarında doğal dekorasyon.' },
    { id: 6, name: 'Bilim Laboratuvarı', emoji: '🔬', category: 'Modern', color: 'bg-cyan-50 border-cyan-300', textColor: 'text-cyan-700', badgeColor: 'bg-cyan-100 text-cyan-600', ageRange: '6-12 yaş', difficulty: 'Zor', trend: '2026 Trendi', desc: 'Küçük bilim insanları için tasarlanmış deneylerle dolu bir laboratuvar partisi. Volkan yapma, slime hazırlama, renk karışımı deneyleri ve bilim yarışmaları. Eğitici ve eğlenceli aktiviteler bir arada.' },
    { id: 7, name: 'Sanat Atölyesi', emoji: '🎨', category: 'Yaratıcı', color: 'bg-violet-50 border-violet-300', textColor: 'text-violet-700', badgeColor: 'bg-violet-100 text-violet-600', ageRange: '4-12 yaş', difficulty: 'Kolay', trend: 'Klasik Favoriler', desc: 'Resim, heykel, seramik ve kolaj çalışmalarıyla yaratıcılığın sınırlarını zorlayın. Her çocuk kendi sanat eserini yaratır ve eve götürür. Yüz boyama aktivitesi de bu konseptin vazgeçilmezidir.' },
    { id: 8, name: 'Sirk / Karnaval', emoji: '🎪', category: 'Klasik', color: 'bg-orange-50 border-orange-300', textColor: 'text-orange-700', badgeColor: 'bg-orange-100 text-orange-600', ageRange: '3-10 yaş', difficulty: 'Orta', trend: 'Klasik Favoriler', desc: 'Sirk çadırı dekorasyonu, palyaço gösterisi, jonglör performansı ve pamuk şeker arabası. Karnaval oyunları, balon sanatı ve sihirbaz gösterisi ile nostaljik bir eğlence deneyimi.' },
    { id: 9, name: 'Dinozor Dünyası', emoji: '🦕', category: 'Macera', color: 'bg-emerald-50 border-emerald-300', textColor: 'text-emerald-700', badgeColor: 'bg-emerald-100 text-emerald-600', ageRange: '3-8 yaş', difficulty: 'Orta', trend: 'Klasik Favoriler', desc: 'Jura dönemine yolculuk! Dev dinozor figürleri, fosil kazı atölyesi ve dinozor yumurtası sürprizleri. T-Rex maskotu ile fotoğraf çekimi ve dinozor bilgi yarışması. Erkek çocuklarının en sevdiği temalardan biri.' },
    { id: 10, name: 'Unicorn Büyüsü', emoji: '🦄', category: 'Tematik', color: 'bg-fuchsia-50 border-fuchsia-300', textColor: 'text-fuchsia-700', badgeColor: 'bg-fuchsia-100 text-fuchsia-600', ageRange: '3-8 yaş', difficulty: 'Kolay', trend: 'Klasik Favoriler', desc: 'Gökkuşağı renkleri, pastel balonlar ve sihirli unicorn dekorasyonu. Peri tozu atölyesi, dilek tutma töreni ve gökkuşağı boyama aktivitesi. Masalsı bir atmosferde büyülü bir kutlama.' },
    { id: 11, name: 'Neon / Glow Party', emoji: '✨', category: 'Modern', color: 'bg-yellow-50 border-yellow-300', textColor: 'text-yellow-700', badgeColor: 'bg-yellow-100 text-yellow-600', ageRange: '8-14 yaş', difficulty: 'Orta-Zor', trend: '2026 Trendi', desc: 'Karanlıkta parlayan neon renkler, UV ışıklar ve floresan dekorasyon. Neon yüz boyama, glow stick dansı ve karanlık oda oyunları. Sosyal medya dostu fotoğraf köşeleri ile genç neslin favorisi.' },
    { id: 12, name: 'Retro 90\'lar', emoji: '📼', category: 'Modern', color: 'bg-teal-50 border-teal-300', textColor: 'text-teal-700', badgeColor: 'bg-teal-100 text-teal-600', ageRange: '8-14 yaş', difficulty: 'Orta', trend: '2026 Trendi', desc: 'Kaset çalar, pac-man, tamagotchi ve roller blade nostaljisi. Retro müzik, eski usul oyunlar ve 90\'lar modası fotoğraf köşesi. Ebeveynlerin de çocuklarıyla birlikte eğlendiği nostaljik bir parti.' },
    { id: 13, name: 'Lego / Minecraft', emoji: '🧱', category: 'Tematik', color: 'bg-lime-50 border-lime-300', textColor: 'text-lime-700', badgeColor: 'bg-lime-100 text-lime-600', ageRange: '5-12 yaş', difficulty: 'Orta', trend: '2026 Trendi', desc: 'Yapı blokları ve piksel dünyasının büyüsü. Lego yapım yarışması, Minecraft temalı hazine avı ve piksel sanat atölyesi. Yaratıcılık ve strateji odaklı aktivitelerle dolu bir parti.' },
    { id: 14, name: 'Spor / Futbol', emoji: '⚽', category: 'Macera', color: 'bg-sky-50 border-sky-300', textColor: 'text-sky-700', badgeColor: 'bg-sky-100 text-sky-600', ageRange: '5-14 yaş', difficulty: 'Kolay', trend: 'Klasik Favoriler', desc: 'Mini turnuva, dribling yarışması ve penaltı atışı. Favori takım renklerinde dekorasyon, şampiyonluk kupası seremonisi ve spor yorumcusu animasyonu. Aktif çocuklar için enerjik bir kutlama.' },
    { id: 15, name: 'Çiçek / Botanik', emoji: '🌸', category: 'Yaratıcı', color: 'bg-rose-50 border-rose-300', textColor: 'text-rose-700', badgeColor: 'bg-rose-100 text-rose-600', ageRange: '4-10 yaş', difficulty: 'Kolay', trend: 'Yeni!', desc: 'Doğa ile iç içe bir parti konsepti. Çiçek taç yapma atölyesi, mini bahçe oluşturma ve botanik boyama. Pastel tonlarda çiçek dekorasyonu ve kelebek temalı oyunlar. Sürdürülebilir ve doğa dostu bir kutlama.' },
    { id: 16, name: 'Balon Fiesta', emoji: '🎈', category: 'Yaratıcı', color: 'bg-purple-50 border-purple-300', textColor: 'text-purple-700', badgeColor: 'bg-purple-100 text-purple-600', ageRange: '2-7 yaş', difficulty: 'Kolay', trend: 'Yeni!', desc: 'Rengarenk balonlarla dolu bir dünya. Dev balon kemeri, balon patlatma oyunu, balon şekillendirme gösterisi ve balon yağmuru. Küçük yaş grubu için görsel şölen niteliğinde, basit ama etkileyici bir konsept.' },
    { id: 17, name: 'Mini Şef', emoji: '👨‍🍳', category: 'Yaratıcı', color: 'bg-warmGray-50 border-stone-300 bg-stone-50', textColor: 'text-stone-700', badgeColor: 'bg-stone-100 text-stone-600', ageRange: '5-12 yaş', difficulty: 'Orta', trend: '2026 Trendi', desc: 'Küçük şefler mutfağa! Pizza yapma atölyesi, kurabiye süsleme, meyve şiş hazırlama ve mini pasta dekorasyon. Şef önlüğü ve şapka ile gerçek bir mutfak deneyimi. Hem eğlenceli hem lezzetli.' },
    { id: 18, name: 'Film / Hollywood', emoji: '🎬', category: 'Modern', color: 'bg-gray-50 border-gray-300', textColor: 'text-gray-700', badgeColor: 'bg-gray-200 text-gray-600', ageRange: '7-14 yaş', difficulty: 'Zor', trend: 'Yeni!', desc: 'Kırmızı halı girişi, Oscar töreni ve film çekim seti. Pop-corn bar, sinema köşesi ve kısa film yapım atölyesi. Çocuklar kendi filmlerini çeker ve galası partide gösterilir. Yıldız olma hayali gerçek olur.' },
    { id: 19, name: 'Kış Masalı', emoji: '❄️', category: 'Tematik', color: 'bg-blue-50 border-blue-300', textColor: 'text-blue-700', badgeColor: 'bg-blue-100 text-blue-600', ageRange: '3-10 yaş', difficulty: 'Orta-Zor', trend: 'Yeni!', desc: 'Kar efektleri, buz mavisi dekorasyon ve kış temalı oyunlar. Kardan adam yapma köşesi, kar topu savaşı simülasyonu ve sıcak çikolata barı. Frozen severlerin de bayılacağı büyülü bir atmosfer.' },
    { id: 20, name: 'Gökkuşağı', emoji: '🌈', category: 'Yaratıcı', color: 'bg-gradient-to-r from-red-50 to-violet-50 border-purple-300', textColor: 'text-purple-700', badgeColor: 'bg-purple-100 text-purple-600', ageRange: '2-8 yaş', difficulty: 'Kolay', trend: 'Klasik Favoriler', desc: 'Yedi rengin dansı ile neşeli bir kutlama. Her masada farklı bir renk teması, gökkuşağı balon kemeri ve renk eşleştirme oyunları. Renk atölyesi ve gökkuşağı boyama aktivitesi ile yaratıcı bir deneyim.' }
  ]

  const categories = [
    { name: 'Klasik Favoriler', emoji: '⭐', desc: 'Yıllardır popülerliğini koruyan, kanıtlanmış konseptler' },
    { name: 'Modern Trendler', emoji: '🔥', desc: '2026 yılının en gözde parti konseptleri' },
    { name: 'Macera Dolu', emoji: '🗺️', desc: 'Aktif ve heyecan verici aktivitelerle dolu temalar' },
    { name: 'Tematik Dünyalar', emoji: '🌍', desc: 'Özel bir dünyaya adım attıran kapsamlı temalar' },
    { name: 'Yaratıcı Atölyeler', emoji: '🎨', desc: 'El becerisi ve yaratıcılığı ön plana çıkaran konseptler' }
  ]

  const content = (
    <>
      {/* Icindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-purple-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#giris" className="text-purple-600 hover:text-purple-700 font-semibold">1. 2026 Doğum Günü Trendleri: Genel Bakış</a></li>
          <li><a href="#klasik-konseptler" className="text-purple-600 hover:text-purple-700 font-semibold">2. Klasik Favoriler: Zamansız Konseptler</a></li>
          <li><a href="#modern-konseptler" className="text-purple-600 hover:text-purple-700 font-semibold">3. Modern Trendler: 2026'nın Gözdesi</a></li>
          <li><a href="#macera-konseptler" className="text-purple-600 hover:text-purple-700 font-semibold">4. Macera Dolu Konseptler</a></li>
          <li><a href="#tematik-konseptler" className="text-purple-600 hover:text-purple-700 font-semibold">5. Tematik Dünyalar</a></li>
          <li><a href="#yaratici-konseptler" className="text-purple-600 hover:text-purple-700 font-semibold">6. Yaratıcı Atölye Konseptleri</a></li>
          <li><a href="#konsept-secim-rehberi" className="text-purple-600 hover:text-purple-700 font-semibold">7. Konsept Seçim Rehberi: Yaşa Göre Öneriler</a></li>
          <li><a href="#musteri-deneyimi" className="text-purple-600 hover:text-purple-700 font-semibold">8. Müşteri Deneyimi: Petrova Ailesi'nin Hikayesi</a></li>
          <li><a href="#butce-planlama" className="text-purple-600 hover:text-purple-700 font-semibold">9. Bütçeye Göre Konsept Planlama</a></li>
          <li><a href="#sss" className="text-purple-600 hover:text-purple-700 font-semibold">10. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giris */}
      <h2 id="giris" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. 2026 Doğum Günü Trendleri: Genel Bakış
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Çocuğunuzun doğum günü yaklaşıyor ve bu yıl gerçekten farklı, yaratıcı ve unutulmaz bir parti düzenlemek istiyorsunuz. Ancak yüzlerce farklı tema arasında kaybolmak, hangi konseptin çocuğunuzun yaşına, ilgi alanlarına ve bütçenize uygun olduğunu bulmak zorlu olabilir. İşte tam da bu noktada devreye giriyoruz. Yılda 1500'den fazla çocuk partisi organize eden deneyimimizle, 2026 yılının en popüler 20 doğum günü konseptini sizin için derledik.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bu rehberde her konseptin detaylı açıklamasını, uygun yaş aralığını, zorluk derecesini ve trend durumunu bulacaksınız. İster klasik bir prenses partisi ister modern bir neon glow party düzenlemek isteyin, bu kapsamlı liste size ilham verecek. Konseptleri 5 ana kategoride grupladık: Klasik Favoriler, Modern Trendler, Macera Dolu Temalar, Tematik Dünyalar ve Yaratıcı Atölyeler.
      </p>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>2026 Trend Notu:</strong> Bu yıl özellikle interaktif ve deneyim odaklı konseptler ön plana çıkıyor. Sadece dekorasyon değil, çocukların aktif olarak katıldığı aktiviteler barındıran temalar en çok tercih edilen konseptler arasında. Bilim Laboratuvarı, Mini Şef ve Neon Party gibi deneyimsel konseptler 2026'nın en yükselen trendleri.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Profesyonel organizasyon ekibimiz, seçtiğiniz her konsepti A'dan Z'ye hayata geçiriyor. <Link to="/organizasyonlar/kostumlu-karakterler" className="text-purple-600 hover:text-purple-700 font-semibold underline">Kostümlü karakter kiralama</Link> hizmetimizden <Link to="/organizasyonlar/bubble-show" className="text-purple-600 hover:text-purple-700 font-semibold underline">bubble show gösterisine</Link>, <Link to="/organizasyonlar/yuz-boyama" className="text-purple-600 hover:text-purple-700 font-semibold underline">profesyonel yüz boyama</Link> aktivitesinden <Link to="/organizasyonlar/pamuk-seker" className="text-purple-600 hover:text-purple-700 font-semibold underline">pamuk şeker arabası</Link> hizmetine kadar her detay özenle planlanıyor.
      </p>

      {/* Kategori Ozet Kartlari */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">{cat.emoji}</div>
            <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
            <p className="text-sm text-gray-600">{cat.desc}</p>
          </div>
        ))}
      </div>

      {/* Klasik Konseptler */}
      <h2 id="klasik-konseptler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Klasik Favoriler: Zamansız Konseptler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Klasik konseptler, yıllardır çocuk partilerinin vazgeçilmezi olan ve her zaman etkili sonuç veren temalardır. Süper Kahraman, Prenses, Sirk ve Dinozor gibi temalar nesiller boyunca popülerliğini korumuştur. Bu konseptlerin en büyük avantajı, çocukların zaten aşina olduğu karakterler ve dünyalar üzerine kurulu olmalarıdır. Ailelerin yüzde 60'ından fazlası hâlâ klasik bir temayı tercih etmektedir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Süper Kahraman partileri özellikle erkek çocukları arasında en çok talep edilen konseptlerdendir. <Link to="/organizasyonlar/kostumlu-karakterler" className="text-purple-600 hover:text-purple-700 font-semibold underline">Kostümlü karakter hizmetimizle</Link> Spider-Man, Batman veya Superman partinize hayat verir. Prenses partileri ise kız çocuklarının gözdesidir; Elsa, Pamuk Prenses veya Rapunzel karakterleri ile masalsı bir atmosfer yaratılır.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {concepts.filter(c => c.category === 'Klasik').map(concept => (
          <div key={concept.id} className={`${concept.color} border-2 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">{concept.emoji}</span>
              <span className={`${concept.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>{concept.trend}</span>
            </div>
            <h3 className={`text-xl font-bold ${concept.textColor} mb-2`}>
              {concept.id}. {concept.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{concept.desc}</p>
            <div className="flex items-center gap-3">
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.ageRange}
              </span>
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Sirk ve Karnaval konsepti ise hem klasik hem de eğlence dolu bir seçenektir. <Link to="/organizasyonlar/pamuk-seker" className="text-purple-600 hover:text-purple-700 font-semibold underline">Pamuk şeker arabası</Link>, palyaço gösterisi ve balon sanatı gibi etkinliklerle gerçek bir karnaval atmosferi yaratılır. Çocukların yüzündeki neşe ve heyecan, klasik konseptlerin neden hâlâ bu kadar popüler olduğunun en iyi kanıtıdır.
      </p>

      {/* Modern Konseptler */}
      <h2 id="modern-konseptler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Modern Trendler: 2026'nın Gözdesi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        2026 yılında doğum günü partileri tamamen yeni bir boyut kazanıyor. Modern konseptler, teknolojiyi, deneyimi ve sosyal medya estetiğini bir araya getirerek benzersiz kutlamalar sunuyor. Neon/Glow Party, her yaştan çocuğun ve gencin ilgisini çekerken, Retro 90'lar konsepti nostaljik bir dalga yaratıyor. Bilim Laboratuvarı ve Mini Şef temaları ise eğitim ve eğlenceyi harmanlıyor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Neon Party, özellikle 8-14 yaş arası çocuklar ve gençler arasında patlama yaşıyor. UV ışıklar altında parlayan <Link to="/organizasyonlar/yuz-boyama" className="text-purple-600 hover:text-purple-700 font-semibold underline">neon yüz boyama</Link> aktivitesi, bu konseptin en etkileyici unsurlarından biridir. Karanlıkta parlayan renkler, floresan aksesuralar ve glow stick dansları sosyal medyada paylaşılacak enfes kareler yaratır.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {concepts.filter(c => c.category === 'Modern').map(concept => (
          <div key={concept.id} className={`${concept.color} border-2 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">{concept.emoji}</span>
              <span className={`${concept.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>{concept.trend}</span>
            </div>
            <h3 className={`text-xl font-bold ${concept.textColor} mb-2`}>
              {concept.id}. {concept.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{concept.desc}</p>
            <div className="flex items-center gap-3">
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.ageRange}
              </span>
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bilim Laboratuvarı konseptinde çocuklar gerçek deneyler yaparak hem eğlenir hem öğrenir. Volkan patlatma, slime yapımı ve renk karışımı deneyleri en popüler aktiviteler arasındadır. Lego ve Minecraft temaları ise dijital dünyayı fiziksel bir deneyime dönüştürür. Bu modern konseptlerin ortak noktası, çocukların pasif izleyici değil aktif katılımcı olmasıdır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Film ve Hollywood teması ise büyük çocuklar ve gençler için mükemmel bir seçenektir. Kırmızı halı girişi, Oscar töreni konseptli ödül seremonisi ve mini film çekim atölyesi ile çocuklar yıldız gibi hisseder. <Link to="/organizasyonlar/bubble-show" className="text-purple-600 hover:text-purple-700 font-semibold underline">Bubble show gösterisi</Link> de bu konsepte harika bir görsel efekt katar.
      </p>

      {/* Macera Konseptleri */}
      <h2 id="macera-konseptler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Macera Dolu Konseptler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Enerjik ve meraklı çocuklar için macera temalı konseptler idealdir. Bu kategoride yer alan Denizci/Korsan, Orman Safari, Dinozor Dünyası ve Spor/Futbol temaları aktif oyunlar ve keşif odaklı aktiviteler sunar. Özellikle açık havada düzenlenecek partiler için macera konseptleri en etkili seçeneklerdir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Korsan macerası, hazine avı oyunuyla çocukları saatlerce meşgul eder. Harita okuma, pusula kullanma ve şifreli mesajları çözme gibi aktiviteler hem eğitici hem heyecan vericidir. Orman Safari ise doğa sevgisini aşılamak için mükemmel bir fırsattır. Hayvan maskot karakterleri, doğa keşif oyunları ve safari fotoğraf köşesi ile gerçek bir macera yaşanır.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {concepts.filter(c => c.category === 'Macera').map(concept => (
          <div key={concept.id} className={`${concept.color} border-2 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">{concept.emoji}</span>
              <span className={`${concept.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>{concept.trend}</span>
            </div>
            <h3 className={`text-xl font-bold ${concept.textColor} mb-2`}>
              {concept.id}. {concept.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{concept.desc}</p>
            <div className="flex items-center gap-3">
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.ageRange}
              </span>
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Spor ve Futbol teması ise özellikle erkek çocuklarının favorisidir. Mini turnuva düzenlemek, dribling yarışması yapmak ve penaltı atışı organizasyonu ile aktif bir kutlama gerçekleştirilir. Favori takım renklerinde dekorasyon ve şampiyonluk kupası seremonisi partiye heyecan katar. Dinozor konsepti de küçük yaş grubu için her zaman ilgi çekici olmaya devam eder; fosil kazı atölyesi ve dev dinozor figürleri çocukların hayal gücünü besler.
      </p>

      {/* Tematik Konseptler */}
      <h2 id="tematik-konseptler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Tematik Dünyalar
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Tematik konseptler, belirli bir dünya veya evren etrafında kurgulanmış kapsamlı parti deneyimleridir. Unicorn Büyüsü, Kış Masalı ve Lego/Minecraft gibi temalar, çocukları tamamen farklı bir dünyaya taşır. Bu konseptlerde dekorasyon, aktiviteler, müzik ve hatta yiyecekler bile temaya uygun olarak tasarlanır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Unicorn teması, pastel renkler ve sihirli atmosferiyle kız çocuklarının en sevdiği temalardan biri olmaya devam ediyor. Gökkuşağı renkleri, peri tozu atölyesi ve dilek tutma töreni ile masalsı bir deneyim sunulur. <Link to="/organizasyonlar/kostumlu-karakterler" className="text-purple-600 hover:text-purple-700 font-semibold underline">Unicorn kostümlü karakter</Link> partiye ayrı bir büyü katar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {concepts.filter(c => c.category === 'Tematik').map(concept => (
          <div key={concept.id} className={`${concept.color} border-2 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">{concept.emoji}</span>
              <span className={`${concept.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>{concept.trend}</span>
            </div>
            <h3 className={`text-xl font-bold ${concept.textColor} mb-2`}>
              {concept.id}. {concept.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{concept.desc}</p>
            <div className="flex items-center gap-3">
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.ageRange}
              </span>
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Kış Masalı teması ise mevsimden bağımsız olarak uygulanabilen etkileyici bir konsepttir. Yapay kar efektleri, buz mavisi dekorasyon ve sıcak çikolata barı ile çocuklar bir kış masalının içine adım atar. Frozen sevenler için Elsa karakteri ve kar efektleriyle birleştirildiğinde muhteşem bir deneyim ortaya çıkar. Bu konsept, özellikle yabancı aileler arasında da büyük ilgi görür.
      </p>

      {/* Yaratici Konseptler */}
      <h2 id="yaratici-konseptler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Yaratıcı Atölye Konseptleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Yaratıcı atölye konseptleri, çocukların hem eğlendiği hem de bir şeyler ürettiği interaktif partilerdir. Sanat Atölyesi, Çiçek/Botanik, Balon Fiesta ve Gökkuşağı temaları bu kategorinin en güzel örnekleridir. Bu konseptlerin en büyük avantajı, her çocuğun partiden bir hatıra eseri ile ayrılmasıdır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Sanat Atölyesi konseptinde çocuklar resim, heykel ve kolaj çalışmaları yapar. <Link to="/organizasyonlar/yuz-boyama" className="text-purple-600 hover:text-purple-700 font-semibold underline">Profesyonel yüz boyama</Link> aktivitesi bu konseptin ayrılmaz bir parçasıdır ve çocukların sanatsal ifadesini geliştiren harika bir deneyim sunar. Her çocuk kendi portresini çizer, kendi heykelini yapar ve eve gururla taşır.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {concepts.filter(c => c.category === 'Yaratıcı').map(concept => (
          <div key={concept.id} className={`${concept.color} border-2 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">{concept.emoji}</span>
              <span className={`${concept.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>{concept.trend}</span>
            </div>
            <h3 className={`text-xl font-bold ${concept.textColor} mb-2`}>
              {concept.id}. {concept.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{concept.desc}</p>
            <div className="flex items-center gap-3">
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.ageRange}
              </span>
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Çiçek ve Botanik teması, 2026'nın yükselen trendlerinden biridir. Sürdürülebilirlik ve doğa bilincinin artmasıyla, çocuklara doğa sevgisi aşılayan bu konsept aileler tarafından büyük ilgi görüyor. Çiçek taç yapma atölyesi, mini bahçe oluşturma ve kelebek temalı oyunlar çocukları doğayla buluşturur.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Balon Fiesta, özellikle 2-7 yaş arası küçük çocuklar için mükemmel bir konsepttir. Rengarenk balonlarla dolu bir alan, dev balon kemeri ve balon yağmuru küçüklerin gözlerini parlatır. Basit ama son derece etkili olan bu konsept, görsel açıdan zengin fotoğraf olanakları sunar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Gökkuşağı teması ise her yaşta çocuğu mutlu eden evrensel bir konsepttir. Yedi rengin dansı, her masada farklı bir renk teması ve gökkuşağı balon kemeri ile neşeli bir atmosfer yaratılır. Renk eşleştirme oyunları ve gökkuşağı boyama aktivitesi partiye interaktif bir boyut katar. Mini Şef konsepti de yaratıcı kategorinin en popüler temalarından biridir; pizza yapma, kurabiye süsleme ve meyve şiş hazırlama aktiviteleriyle çocuklar mutfakta yaratıcılıklarını konuşturur.
      </p>

      {/* Tum Konseptler Grid - Buyuk Genel Bakis */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        20 Konsept: Genel Bakış Tablosu
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Aşağıdaki tabloda tüm konseptleri bir arada görebilir, yaş aralığı ve zorluk derecesine göre karşılaştırabilirsiniz. Her konsept, profesyonel ekibimiz tarafından özelleştirilebilir; birden fazla konsepti birleştirerek benzersiz bir parti deneyimi de yaratılabilir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {concepts.map(concept => (
          <div key={concept.id} className={`${concept.color} border-2 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">{concept.emoji}</span>
              <span className={`${concept.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>{concept.trend}</span>
            </div>
            <h3 className={`text-xl font-bold ${concept.textColor} mb-2`}>
              {concept.id}. {concept.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{concept.desc}</p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.ageRange}
              </span>
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                {concept.difficulty}
              </span>
              <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full text-gray-500 border border-gray-200">
                {concept.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Konsept Secim Rehberi */}
      <h2 id="konsept-secim-rehberi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Konsept Seçim Rehberi: Yaşa Göre Öneriler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Doğru konsepti seçmek, başarılı bir partinin temelidir. Çocuğunuzun yaşı, ilgi alanları ve kişiliği konsept seçiminde en belirleyici faktörlerdir. İşte yaş gruplarına göre en uygun konsept önerilerimiz:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3">2-4 Yaş: İlk Partiler</h4>
          <p className="text-gray-700 leading-relaxed mb-2">
            Bu yaş grubunda görsel zenginlik ve basit aktiviteler ön plandadır. Çocuklar uzun süre dikkat edemeyeceğinden, kısa ve etkili gösteriler tercih edilmelidir.
          </p>
          <p className="text-gray-700"><strong>Önerilen konseptler:</strong> Balon Fiesta, Gökkuşağı, Unicorn Büyüsü, Orman Safari</p>
          <p className="text-gray-600 text-sm mt-2">Zorluk seviyesi kolay olan, rengarenk ve görsel açıdan zengin temalar küçükler için idealdir.</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h4 className="font-bold text-gray-900 mb-3">5-7 Yaş: Hayal Gücü Dorukta</h4>
          <p className="text-gray-700 leading-relaxed mb-2">
            Bu yaş grubunda çocuklar karakter ve hikayelere yoğun ilgi duyar. Kostümlü karakterler ve interaktif oyunlar büyük etki yaratır.
          </p>
          <p className="text-gray-700"><strong>Önerilen konseptler:</strong> Süper Kahraman, Prenses Masalı, Dinozor Dünyası, Korsan Macerası, Kış Masalı</p>
          <p className="text-gray-600 text-sm mt-2"><Link to="/organizasyonlar/kostumlu-karakterler" className="text-blue-600 hover:text-blue-700 font-semibold underline">Kostümlü karakter</Link> hizmeti bu yaş grubu için en etkili etkinliktir.</p>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
          <h4 className="font-bold text-gray-900 mb-3">8-10 Yaş: Deneyim ve Keşif</h4>
          <p className="text-gray-700 leading-relaxed mb-2">
            Bu yaş grubunda çocuklar daha karmaşık aktiviteler ve interaktif deneyimler ister. Eğitici ve yaratıcı konseptler büyük ilgi görür.
          </p>
          <p className="text-gray-700"><strong>Önerilen konseptler:</strong> Bilim Laboratuvarı, Mini Şef, Lego/Minecraft, Sanat Atölyesi, Uzay Macerası</p>
          <p className="text-gray-600 text-sm mt-2">Deneyim odaklı konseptler bu yaş grubunun favorisidir. Çocuklar aktif katılım ister.</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
          <h4 className="font-bold text-gray-900 mb-3">11-14 Yaş: Trend ve Sosyal</h4>
          <p className="text-gray-700 leading-relaxed mb-2">
            Bu yaş grubunda sosyal medya estetiği, trend unsurlar ve arkadaş grubuyla paylaşılabilir deneyimler ön plana çıkar.
          </p>
          <p className="text-gray-700"><strong>Önerilen konseptler:</strong> Neon/Glow Party, Retro 90'lar, Film/Hollywood, Spor/Futbol</p>
          <p className="text-gray-600 text-sm mt-2">Instagram ve TikTok dostu fotoğraf köşeleri bu yaş grubu için olmazsa olmazdır.</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Yaş grubuna uygun konsept seçimi, partinin başarısını doğrudan etkiler. Ancak her çocuk farklıdır ve ilgi alanları yaş ortalamasından sapabilir. Bu nedenle çocuğunuzla birlikte konsept seçimi yapmanızı, en sevdiği karakterleri ve aktiviteleri sormanızı öneririz. Profesyonel organizasyon ekibimiz, çocuğunuzun kişiliğine ve tercihlerine göre konsepti özelleştirir.
      </p>

      {/* Musteri Deneyimi - Petrova Ailesi */}
      <h2 id="musteri-deneyimi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        8. Müşteri Deneyimi: Petrova Ailesi'nin Hikayesi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Konsept seçiminin ne kadar önemli olduğunu en iyi müşterilerimizin deneyimleri anlatır. Farklı kültürlerden gelen ailelerle çalışmak, her konseptin evrensel bir dil konuşabildiğini bize bir kez daha gösterdi. İşte Rusya'dan gelen Petrova ailesinin İstanbul'daki doğum günü organizasyonu hikayesi:
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-3">Petrova Ailesi - Moskova, Rusya</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Petrova ailesi, kızları Anastasia'nın 8. yaş günü için İstanbul'da "Kış Masalı" temalı bir parti organize ettirdi. Rusya'dan gelen misafirlere İstanbul sıcaklığını yaşattıklarını belirten Anne Olga, organizasyon hakkında şunları söyledi:
        </p>
        <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-700 mb-4">
          "Kostümlü karakterler ve bubble show kombinasyonu mükemmeldi. Anastasia'nın yüzündeki mutluluk paha biçilemezdi. Moskova'dan gelen arkadaşlarımız İstanbul'daki parti organizasyonunun kalitesine hayran kaldı. Kar efektleri, Elsa karakteri ve sıcak çikolata barı ile kışın büyüsünü İstanbul'un sıcaklığıyla birleştirdik. Rusya'da birçok organizasyona katıldık ama bu kadar profesyonel ve detaylı bir planlama hiç görmemiştik."
        </blockquote>
        <p className="text-gray-700 leading-relaxed mb-4">
          Petrova ailesi için hazırlanan Kış Masalı konseptinde yapay kar makinesi, buz mavisi balon kemeri, kristal temalı masa düzeni ve Frozen karakterleri bir araya getirildi. <Link to="/organizasyonlar/kostumlu-karakterler" className="text-blue-600 hover:text-blue-700 font-semibold underline">Elsa kostümlü karakterimiz</Link> çocuklarla birlikte dans etti ve sihirli kar efektleri yarattı. <Link to="/organizasyonlar/bubble-show" className="text-blue-600 hover:text-blue-700 font-semibold underline">Bubble show gösterimiz</Link> ise karla karışan sabun balonlarıyla büyülü bir atmosfer oluşturdu.
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Organizasyon detayları:</strong> 25 çocuk, 15 yetişkin | Konsept: Kış Masalı + Frozen | Süre: 3 saat | Hizmetler: Kostümlü karakter, bubble show, yüz boyama, pamuk şeker
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Petrova ailesinin hikayesi, doğru konsept seçiminin kültürel sınırları aştığını gösteriyor. Kış Masalı teması, Rusya'dan gelen misafirler için tanıdık bir atmosfer yaratırken, İstanbul'un sıcaklığı ve profesyonel organizasyon kalitesiyle birleşerek unutulmaz bir deneyime dönüştü. Farklı ülkelerden gelen ailelerimize de konsept özelleştirmesi yaparak kültürel dokunuşlar ekliyoruz.
      </p>

      {/* Butce Planlama */}
      <h2 id="butce-planlama" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        9. Bütçeye Göre Konsept Planlama
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Her bütçeye uygun bir konsept vardır. Önemli olan, bütçenizi akıllıca kullanarak en etkili deneyimi yaratmaktır. İşte bütçe seviyelerine göre konsept önerilerimiz ve planlama ipuçlarımız:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
          <h4 className="font-bold text-gray-900 mb-3">Ekonomik Bütçe: Akıllı Seçimler</h4>
          <p className="text-gray-700 leading-relaxed mb-2">
            Dekorasyon odaklı konseptler daha düşük bütçeyle etkileyici sonuçlar verir. Balon Fiesta, Gökkuşağı ve Çiçek/Botanik temaları basit ama etkili konseptlerdir. El yapımı dekorasyonlar ve DIY (kendin yap) öğeleriyle maliyeti düşürebilirsiniz.
          </p>
          <p className="text-gray-700"><strong>Önerilen konseptler:</strong> Balon Fiesta, Gökkuşağı, Spor/Futbol, Çiçek/Botanik</p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-gray-900 mb-3">Orta Bütçe: Dengeli Deneyim</h4>
          <p className="text-gray-700 leading-relaxed mb-2">
            Kostümlü karakter veya bir gösteri hizmeti ekleyerek partinin eğlence değerini önemli ölçüde artırabilirsiniz. Dekorasyon ve bir ana aktivite kombinasyonu ideal dengeyi sağlar.
          </p>
          <p className="text-gray-700"><strong>Önerilen konseptler:</strong> Süper Kahraman, Prenses, Dinozor, Unicorn, Sanat Atölyesi, Kış Masalı</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
          <h4 className="font-bold text-gray-900 mb-3">Premium Bütçe: Tam Deneyim</h4>
          <p className="text-gray-700 leading-relaxed mb-2">
            Birden fazla gösteri, kapsamlı dekorasyon, profesyonel fotoğrafçı ve özel etkinlikler dahil tam bir parti deneyimi. Birden fazla hizmeti bir arada kullanarak unutulmaz bir organizasyon yaratılır.
          </p>
          <p className="text-gray-700"><strong>Önerilen konseptler:</strong> Bilim Laboratuvarı, Film/Hollywood, Neon Party, Uzay Macerası, Sirk/Karnaval</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bütçeniz ne olursa olsun, konseptinizi profesyonel bir dokunuşla hayata geçirmek mümkün. Tek bir gösteri hizmeti bile partinin atmosferini tamamen değiştirebilir. Örneğin, basit bir Gökkuşağı konseptine <Link to="/organizasyonlar/bubble-show" className="text-purple-600 hover:text-purple-700 font-semibold underline">bubble show</Link> eklemek, çocukların gözlerini parlatır ve partiye sihirli bir boyut katar. Sirk konseptine <Link to="/organizasyonlar/pamuk-seker" className="text-purple-600 hover:text-purple-700 font-semibold underline">pamuk şeker arabası</Link> eklemek ise nostaljik atmosferi tamamlar.
      </p>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Profesyonel Tavsiye:</strong> Konsept seçiminde en sık yapılan hata, çok fazla detay eklemeye çalışmaktır. Basit ama iyi uygulanmış bir tema, karmaşık ama dağınık bir konseptten her zaman daha etkilidir. Bir ana tema belirleyin, 2-3 anahtar öğe seçin (dekorasyon, karakter, aktivite) ve bunları mükemmel şekilde uygulayın. Daha az, daha çoktur prensibi parti organizasyonunda da geçerlidir.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Sonuç olarak, 2026 yılında çocuk doğum günü partileri her zamankinden daha yaratıcı, interaktif ve deneyim odaklı. İster klasik bir Süper Kahraman partisi ister trend bir Neon Glow Party düzenleyin, önemli olan çocuğunuzun mutluluğu ve güvenli bir eğlence ortamıdır. Profesyonel organizasyon ekibimiz, seçtiğiniz konsepti en ince detayına kadar planlayarak hayata geçirir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bu rehberdeki 20 farklı konseptten ilham alarak, çocuğunuzun hayallerini gerçeğe dönüştürebilirsiniz. Her konsept, çocukların yaş grubuna ve ilgi alanlarına göre özelleştirilebilir. Birden fazla konsepti birleştirmek, temalara özel aktiviteler eklemek ve profesyonel gösteri hizmetlerinden yararlanmak partinizi benzersiz kılacaktır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Hangi konsepti seçerseniz seçin, <Link to="/organizasyonlar/kostumlu-karakterler" className="text-purple-600 hover:text-purple-700 font-semibold underline">kostümlü karakter kiralama</Link>, <Link to="/organizasyonlar/bubble-show" className="text-purple-600 hover:text-purple-700 font-semibold underline">bubble show</Link>, <Link to="/organizasyonlar/yuz-boyama" className="text-purple-600 hover:text-purple-700 font-semibold underline">yüz boyama</Link> ve <Link to="/organizasyonlar/pamuk-seker" className="text-purple-600 hover:text-purple-700 font-semibold underline">pamuk şeker</Link> hizmetlerimizle partinize profesyonel bir dokunuş katıyoruz. 2026 yılında çocuğunuzun doğum gününü unutulmaz kılmak için bize ulaşın; birlikte hayal edelim, birlikte hayata geçirelim.
      </p>
    </>
  )

  return (
    <BlogDetail
      slug="20-farkli-dogum-gunu-konsepti"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/kostumlu-karakterler"
      relatedServiceName="Kostümlü Karakterler"
    />
  )
}

export default YirmiFarkliDogumGunuKonsepti
