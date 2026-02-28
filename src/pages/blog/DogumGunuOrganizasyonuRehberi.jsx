import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const DogumGunuOrganizasyonuRehberi = () => {
  const faqData = [
    {
      question: 'Doğum günü organizasyonu ne kadar önceden planlanmalı?',
      answer: 'İdeal olarak 4-6 hafta öncesinden planlamaya başlamanızı öneriyoruz. Özellikle yaz ayları ve hafta sonları yoğun talep gördüğünden, popüler tarihler için erken rezervasyon önemlidir. Acil durumlarda 1-2 hafta öncesinden de organizasyon düzenliyoruz ancak seçenekler sınırlı olabilir.'
    },
    {
      question: 'Full paket doğum günü organizasyonu neleri kapsar?',
      answer: 'Full paket organizasyonumuz palyaço gösterisi, sihirbaz performansı, bubble show, yüz boyama, sosis balon şekilleri, müzik ve ses sistemi, parti süsleme, doğum günü pastası organizasyonu ve fotoğrafçı hizmetini kapsar. İsteğinize göre maskot karakter kiralama ve özel tema dekorasyonu da eklenebilir.'
    },
    {
      question: 'Kaç çocukluk gruplara hizmet veriyorsunuz?',
      answer: 'Minimum 5, maksimum 150 çocukluk gruplara hizmet veriyoruz. 5-15 çocuk için standart paket, 15-40 çocuk için geniş paket, 40 ve üzeri için kurumsal paket öneriyoruz. Her paket, çocuk sayısına göre optimize edilmiş gösteri süreleri ve aktivite çeşitliliği içerir.'
    },
    {
      question: 'Organizasyon sırasında ebeveynler ne yapmalı?',
      answer: 'Ebeveynlerin en önemli görevi profesyonel ekibe güvenip oyunlara müdahale etmemeleridir. Fotoğraf çekebilir, arka planda izleyebilirsiniz. Palyaço ve animatörlerimiz çocuk psikolojisi eğitimi almış profesyonellerdir. Sadece acil durumlarda (tuvalet, sağlık) müdahale edilmelidir.'
    },
    {
      question: 'Hava kötü olursa açık hava organizasyonu ne olur?',
      answer: 'Tüm açık hava organizasyonlarımız için B planı hazırlarız. Yağmur veya şiddetli rüzgar durumunda etkinliği kapalı alana taşıyoruz. Müşterilerimize etkinlikten 24 saat önce hava durumu bilgilendirmesi yapıyoruz. Çadırlı çözümler de sunabiliyoruz.'
    },
    {
      question: 'Doğum günü organizasyonu fiyatları ne kadardır?',
      answer: 'Fiyatlar seçilen pakete, çocuk sayısına, gösteri çeşitliliği ve mekan konumuna göre değişir. Bireysel hizmet kiralamasından full paket organizasyona kadar her bütçeye uygun seçeneklerimiz vardır. Detaylı fiyat bilgisi için bizi arayın veya WhatsApp üzerinden ulaşarak kişiselleştirilmiş teklif alın.'
    }
  ]

  const relatedServicePath = '/organizasyonlar/dogum-gunu-organizasyonu'
  const relatedServiceName = 'Doğum Günü Organizasyonu'

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-pink-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#nereden-baslamali" className="text-pink-600 hover:text-pink-700 font-semibold">1. Doğum Günü Organizasyonu İstanbul: Nereden Başlamalı?</a></li>
          <li><a href="#konsept-secimi" className="text-pink-600 hover:text-pink-700 font-semibold">2. Organizasyon Konsept Seçimi: Tema Fikirleri ve Trendler</a></li>
          <li><a href="#full-paket-vs-bireysel" className="text-pink-600 hover:text-pink-700 font-semibold">3. Full Paket Organizasyon vs Bireysel Kiralama: Hangisi Avantajlı?</a></li>
          <li><a href="#gosteri-planlamasi" className="text-pink-600 hover:text-pink-700 font-semibold">4. Gösteri Hizmeti Planlaması: Palyaço, Sihirbaz, Bubble Show Kombinasyonları</a></li>
          <li><a href="#butce-hesabi" className="text-pink-600 hover:text-pink-700 font-semibold">5. Fiyat ve Bütçe Hesabı: İstanbul'da Doğum Günü Organizasyonu Maliyetleri</a></li>
          <li><a href="#organizasyon-gunu-checklist" className="text-pink-600 hover:text-pink-700 font-semibold">6. Organizasyon Günü Checklist: Adım Adım Rehber</a></li>
          <li><a href="#sss" className="text-pink-600 hover:text-pink-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Çocuğunuzun doğum günü yaklaşıyorsa ve İstanbul'da unutulmaz bir organizasyon planlamak istiyorsanız doğru yerdesiniz. Bu kapsamlı rehberde, doğum günü organizasyonunun A'dan Z'ye tüm aşamalarını, konsept seçiminden bütçe hesabına, gösteri planlamasından gün içindeki checklist'e kadar her detayı ele alıyoruz. Yıllık 1500'den fazla etkinlik deneyimimizle edindiğimiz bilgileri sizlerle paylaşıyoruz.
      </p>

      <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          🎂 <strong>İpucu:</strong> Başarılı bir doğum günü organizasyonu, en az 4-6 hafta öncesinden planlamaya başlamakla mümkündür. Erken planlama hem daha fazla seçenek sunar hem de bütçenizi daha iyi yönetmenizi sağlar. Özellikle popüler hafta sonları için erken rezervasyon şart!
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="nereden-baslamali" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Doğum Günü Organizasyonu İstanbul: Nereden Başlamalı?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Doğum günü organizasyonu planlamak, ilk bakışta karmaşık görünebilir. Ancak doğru bir zaman çizelgesiyle adım adım ilerlediğinizde her şey yerine oturur. İstanbul'da her hafta düzenlediğimiz yüzlerce etkinliğin deneyimiyle, ideal planlama sürecini sizin için hazırladık.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">📅</span> 4-6 Hafta Önce: Temel Kararları Alın
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">1.</span>
              <div>
                <strong>Tarih ve saat belirleyin:</strong> Hafta sonu öğle saatleri (13:00-16:00) çocuklar için en ideal zaman dilimidir. Hafta içi daha uygun fiyatlar bulabilirsiniz.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">2.</span>
              <div>
                <strong>Davetli listesi oluşturun:</strong> Çocuk sayısı, bütçe ve mekan seçimini doğrudan etkiler. Ortalama 15-25 çocuk ideal bir grup büyüklüğüdür.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">3.</span>
              <div>
                <strong>Bütçe belirleyin:</strong> Mekan, gösteri hizmetleri, yiyecek-içecek ve dekorasyon için ayrı kalemler oluşturun.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">4.</span>
              <div>
                <strong>Mekan seçimi yapın:</strong> Ev, restoran, oyun salonu veya açık hava mekanlarından birini tercih edin. <Link to="/blog/dogum-gunu-mekan-secimi" className="text-pink-600 hover:text-pink-700 font-semibold underline">Doğum günü mekan seçimi rehberimize</Link> göz atabilirsiniz.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-rose-50 rounded-lg p-6 border-l-4 border-rose-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">📋</span> 2-3 Hafta Önce: Detayları Netleştirin
          </h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Organizasyon firmasından teklif alın ve sözleşme yapın</li>
            <li>• Tema ve renk konseptini belirleyin</li>
            <li>• Davetiye gönderin (fiziksel veya dijital)</li>
            <li>• Pasta siparişi verin</li>
            <li>• Özel isteklerinizi (alerji, diyet, özel gereksinimler) bildirin</li>
          </ul>
        </div>

        <div className="bg-fuchsia-50 rounded-lg p-6 border-l-4 border-fuchsia-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">✅</span> 1 Hafta Önce: Son Kontroller
          </h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Organizasyon firmasıyla son görüşme yapın ve detayları teyit edin</li>
            <li>• Hava durumunu kontrol edin (açık hava organizasyonu için)</li>
            <li>• Davetli teyitlerini toplayın</li>
            <li>• Hediye çantalarını/parti malzemelerini hazırlayın</li>
            <li>• Mekanla son görüşmeyi yapın</li>
          </ul>
        </div>
      </div>

      {/* Bölüm 2 */}
      <h2 id="konsept-secimi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Organizasyon Konsept Seçimi: Tema Fikirleri ve Trendler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Doğru tema seçimi, organizasyonun tüm görsel ve içeriksel yapısını belirler. İstanbul'da en çok tercih edilen doğum günü temaları ve her birinin avantajlarını sizin için derledik. Tema seçiminde çocuğunuzun ilgi alanlarını ön planda tutmak en önemli kriterdir.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
          <h4 className="font-bold text-gray-900 mb-3">👸 Prenses Teması</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yaş Grubu:</strong> 3-8 yaş</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Pembe, mor, altın</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Prenses kostüm giydirme, taç yapımı, dans gösterisi</p>
          <p className="text-gray-700 text-sm"><strong>Popülerlik:</strong> İstanbul'da en çok tercih edilen tema</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h4 className="font-bold text-gray-900 mb-3">🦸 Süperkahramam Teması</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yaş Grubu:</strong> 4-10 yaş</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Kırmızı, mavi, sarı</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Kostümlü karakter gösterisi, engel parkuru, kahraman eğitimi</p>
          <p className="text-gray-700 text-sm"><strong>Popülerlik:</strong> Erkek çocuklarda 1 numara</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
          <h4 className="font-bold text-gray-900 mb-3">🦄 Unicorn Teması</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yaş Grubu:</strong> 3-7 yaş</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Pastel pembe, mor, turkuaz, altın</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Gökkuşağı boyama, unicorn maskot kiralama</p>
          <p className="text-gray-700 text-sm"><strong>Popülerlik:</strong> Son 3 yılın trend teması</p>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
          <h4 className="font-bold text-gray-900 mb-3">🚀 Uzay Teması</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yaş Grubu:</strong> 5-12 yaş</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Lacivert, gümüş, siyah, mor</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Roket yapımı, gezegen boyama, astronot kostümleri</p>
          <p className="text-gray-700 text-sm"><strong>Popülerlik:</strong> Meraklı çocuklar için ideal</p>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h4 className="font-bold text-gray-900 mb-3">🦁 Safari Teması</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yaş Grubu:</strong> 2-8 yaş</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Yeşil, kahverengi, turuncu</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Hayvan maskot gösterisi, orman dekorasyonu, hazine avı</p>
          <p className="text-gray-700 text-sm"><strong>Popülerlik:</strong> Açık hava etkinlikleri için mükemmel</p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
          <h4 className="font-bold text-gray-900 mb-3">🎪 Sirk Teması</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yaş Grubu:</strong> 3-10 yaş</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Kırmızı, beyaz, altın</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Palyaço gösterisi, sihirbaz, jonglör, bubble show</p>
          <p className="text-gray-700 text-sm"><strong>Popülerlik:</strong> Gösteri ağırlıklı partiler için</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-3">💡 Tema Seçimi İpuçları:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• <strong>Çocuğunuzun ilgi alanlarına öncelik verin:</strong> En sevdiği çizgi film, hayvan veya renk neyse ondan yola çıkın.</li>
          <li>• <strong>Yaş grubunu göz önünde bulundurun:</strong> 2-4 yaş için basit ve renkli temalar, 5-8 yaş için karakter temalı, 9-12 yaş için aktivite odaklı temalar ideal.</li>
          <li>• <strong>Bütçenizi düşünün:</strong> Bazı temalar özel dekorasyon ve kostümlü karakter kiralama gerektirdiğinden maliyeti artırabilir.</li>
          <li>• <strong>Mekanla uyumu kontrol edin:</strong> Safari teması açık hava için, prenses teması kapalı salon için daha uygun olabilir.</li>
        </ul>
      </div>

      {/* Bölüm 3 */}
      <h2 id="full-paket-vs-bireysel" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Full Paket Organizasyon vs Bireysel Kiralama: Hangisi Avantajlı?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Doğum günü organizasyonu planlarken en çok sorulan sorulardan biri: "Full paket mi alsam, yoksa ihtiyacım olan hizmetleri tek tek mi kiralamalıyım?" Her iki seçeneğin de avantajları ve dezavantajları var. Bireysel kiralama daha esnek olabilir ama full paket genellikle daha ekonomik ve sorunsuz bir deneyim sunar.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
          <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
            <span className="text-2xl">📦</span> Full Paket Organizasyon
          </h4>
          <div className="space-y-3 text-gray-700 text-sm">
            <div>
              <strong className="text-green-600">✅ Avantajlar:</strong>
              <ul className="mt-1 space-y-1 ml-4">
                <li>• Tek muhatap, tek koordinasyon</li>
                <li>• %15-25 fiyat avantajı</li>
                <li>• Profesyonel zaman yönetimi</li>
                <li>• Tüm gösteri ve aktiviteler uyumlu</li>
                <li>• Yedek ekip ve ekipman garantisi</li>
                <li>• Dekorasyon, gösteri, animasyon hepsi dahil</li>
              </ul>
            </div>
            <div>
              <strong className="text-red-600">❌ Dezavantajlar:</strong>
              <ul className="mt-1 space-y-1 ml-4">
                <li>• Daha az esneklik</li>
                <li>• Bazı hizmetlere ihtiyaç duymayanlar için fazla olabilir</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
            <span className="text-2xl">🧩</span> Bireysel Kiralama
          </h4>
          <div className="space-y-3 text-gray-700 text-sm">
            <div>
              <strong className="text-green-600">✅ Avantajlar:</strong>
              <ul className="mt-1 space-y-1 ml-4">
                <li>• Sadece ihtiyacınız olanı seçersiniz</li>
                <li>• Farklı firmalardan en iyisini seçebilirsiniz</li>
                <li>• Esnek planlama imkanı</li>
              </ul>
            </div>
            <div>
              <strong className="text-red-600">❌ Dezavantajlar:</strong>
              <ul className="mt-1 space-y-1 ml-4">
                <li>• Her hizmet için ayrı koordinasyon</li>
                <li>• Toplam maliyet genellikle daha yüksek</li>
                <li>• Zaman yönetimi zor</li>
                <li>• Farklı ekipler arası uyumsuzluk riski</li>
                <li>• Yedek plan eksikliği</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">🎯 Önerimiz:</h4>
        <p className="text-gray-700 text-sm">
          15 ve üstü çocukluk organizasyonlarda <strong>full paket</strong> seçeneği hem bütçe hem de koordinasyon açısından çok daha avantajlıdır. Bireysel kiralama ise 10 ve altı çocukluk küçük partilerde, sadece tek bir gösteri hizmeti (örneğin sadece palyaço veya sadece bubble show) istiyorsanız mantıklı olabilir.
        </p>
      </div>

      {/* Bölüm 4 */}
      <h2 id="gosteri-planlamasi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Gösteri Hizmeti Planlaması: Palyaço, Sihirbaz, Bubble Show Kiralama Kombinasyonları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Başarılı bir doğum günü organizasyonunun kalbi, doğru gösteri kombinasyonudur. Her gösteri türü farklı bir enerji taşır ve çocukların farklı duygularını harekete geçirir. Önemli olan bu gösterileri doğru sıralamayla ve uyumlu zamanlama ile sunmaktır. <Link to="/blog/palyaco-dogum-gunu-rehberi" className="text-pink-600 hover:text-pink-700 font-semibold underline">Palyaço doğum günü rehberimizden</Link> daha detaylı bilgi edinebilirsiniz.
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎪</span> Kombinasyon 1: Palyaço + Bubble Show (2 saat)
          </h4>
          <p className="text-gray-700 text-sm mb-3"><strong>En Popüler Seçenek!</strong> Çocukların %80'i bu kombinasyonu tercih ediyor.</p>
          <div className="bg-gray-50 rounded p-4 text-sm text-gray-700">
            <p><strong>14:00-14:10:</strong> Palyaço giriş, tanışma, enerji toplama oyunları</p>
            <p><strong>14:10-14:40:</strong> Palyaço gösterisi (sosis balon, yüz boyama, müzikli oyunlar)</p>
            <p><strong>14:40-15:00:</strong> Mola + ikram</p>
            <p><strong>15:00-15:30:</strong> Bubble show gösterisi (dev balonlar, renkli köpükler)</p>
            <p><strong>15:30-15:50:</strong> İnteraktif köpük oyunları</p>
            <p><strong>15:50-16:00:</strong> Pasta kesimi ve veda</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎩</span> Kombinasyon 2: Palyaço + Sihirbaz + Bubble Show (3 saat)
          </h4>
          <p className="text-gray-700 text-sm mb-3"><strong>Premium Deneyim!</strong> 20+ çocukluk büyük partiler için ideal.</p>
          <div className="bg-gray-50 rounded p-4 text-sm text-gray-700">
            <p><strong>13:00-13:10:</strong> Palyaço giriş ve tanışma</p>
            <p><strong>13:10-13:50:</strong> Palyaço gösterisi (oyunlar, sosis balon, dans)</p>
            <p><strong>13:50-14:10:</strong> Mola + ikram</p>
            <p><strong>14:10-14:45:</strong> Sihirbaz gösterisi (illüzyonlar, kart numaraları)</p>
            <p><strong>14:45-15:00:</strong> Kısa mola</p>
            <p><strong>15:00-15:35:</strong> Bubble show gösterisi</p>
            <p><strong>15:35-15:50:</strong> İnteraktif oyunlar ve ödül dağıtımı</p>
            <p><strong>15:50-16:00:</strong> Pasta kesimi, fotoğraf ve veda</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎭</span> Kombinasyon 3: Maskot Karakter Kiralama + Palyaço + Gösteri (3+ saat)
          </h4>
          <p className="text-gray-700 text-sm mb-3"><strong>Temalı Özel Parti!</strong> Prenses, süperkahramam veya maskot karakter kiralama ile zenginleştirilmiş organizasyon.</p>
          <div className="bg-gray-50 rounded p-4 text-sm text-gray-700">
            <p><strong>13:00-13:15:</strong> Maskot karakter sürpriz giriş (tema müziği eşliğinde)</p>
            <p><strong>13:15-13:45:</strong> Maskot ile fotoğraf ve dans</p>
            <p><strong>13:45-14:30:</strong> Palyaço gösterisi ve aktiviteler</p>
            <p><strong>14:30-14:45:</strong> Mola ve ikram</p>
            <p><strong>14:45-15:15:</strong> Sihirbaz veya bubble show gösterisi</p>
            <p><strong>15:15-15:45:</strong> Serbest oyun ve interaktif aktiviteler</p>
            <p><strong>15:45-16:00:</strong> Pasta kesimi ve veda</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">⚡ Gösteri Sıralamasının Önemi:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• <strong>Palyaçoyla başlayın:</strong> Çocukları ısıtır, enerjilerini yükseltir ve ortama alıştırır.</li>
          <li>• <strong>Sihirbazı ortaya koyun:</strong> Dikkat ve konsantrasyon gerektiren gösteriler için en ideal zaman dilimidir.</li>
          <li>• <strong>Bubble show ile bitirin:</strong> Görsel soluk ve mutlu bir final yaratır. Çocuklar büyüleyici köpüklerle huzurlu şekilde etkinliği tamamlar.</li>
        </ul>
      </div>

      {/* Bölüm 5 */}
      <h2 id="butce-hesabi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Fiyat ve Bütçe Hesabı: İstanbul'da Doğum Günü Organizasyonu Maliyetleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        İstanbul'da doğum günü organizasyonu bütçesi, seçilen hizmetlere, mekan türüne ve çocuk sayısına göre büyük farklılık gösterir. Aşağıda genel bir maliyet tablosu sunuyoruz. Bu rakamlar ortalama değerleri yansıtmakta olup kesin fiyat için iletişime geçmenizi öneririz.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-pink-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Hizmet Kalemi</th>
              <th className="py-3 px-4 text-left">Açıklama</th>
              <th className="py-3 px-4 text-left">Bütçe Payı</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Mekan</td>
              <td className="py-3 px-4">Oyun salonu, restoran veya açık hava alanı</td>
              <td className="py-3 px-4">%25-35</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4 font-semibold">Gösteri Hizmetleri</td>
              <td className="py-3 px-4">Palyaço, sihirbaz, bubble show, animasyon</td>
              <td className="py-3 px-4">%25-30</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Yiyecek-İçecek</td>
              <td className="py-3 px-4">Pasta, kurabiye, meyve, içecekler, ikram</td>
              <td className="py-3 px-4">%15-20</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4 font-semibold">Dekorasyon</td>
              <td className="py-3 px-4">Balon süsleme, tema dekorasyonu, backdrop</td>
              <td className="py-3 px-4">%10-15</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Parti Malzemeleri</td>
              <td className="py-3 px-4">Tabak, bardak, peçete, hediye çantaları</td>
              <td className="py-3 px-4">%5-8</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 font-semibold">Ekstra Hizmetler</td>
              <td className="py-3 px-4">Fotoğrafçı, popcorn/pamuk şeker makinesi kiralama</td>
              <td className="py-3 px-4">%5-10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h4 className="font-bold text-gray-900 mb-3">💚 Ekonomik Paket</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>10-15 çocuk için</strong></p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Palyaço (45 dk)</li>
            <li>• Temel balon süsleme</li>
            <li>• Sosis balon + yüz boyama</li>
          </ul>
        </div>

        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
          <h4 className="font-bold text-gray-900 mb-3">💖 Standart Paket</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>15-25 çocuk için</strong></p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Palyaço + Bubble Show</li>
            <li>• Tema dekorasyonu</li>
            <li>• Müzik sistemi</li>
            <li>• Yüz boyama + sosis balon</li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
          <h4 className="font-bold text-gray-900 mb-3">💜 Premium Paket</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>25+ çocuk için</strong></p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Palyaço + Sihirbaz + Bubble Show</li>
            <li>• Maskot karakter kiralama</li>
            <li>• Tam dekorasyon + backdrop</li>
            <li>• Fotoğrafçı</li>
            <li>• Popcorn & pamuk şeker makinesi</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">💰 Bütçe Tasarrufu İpuçları:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• <strong>Hafta içi etkinlik:</strong> Cumartesi/Pazar yerine Cuma veya Perşembe günü tercih edin, %10-20 tasarruf edin.</li>
          <li>• <strong>Full paket alın:</strong> Bireysel kiralama yerine paket seçmek %15-25 daha ekonomiktir.</li>
          <li>• <strong>Erken rezervasyon:</strong> 6+ hafta önceden rezervasyon yapanlara özel indirimler uygulanır.</li>
          <li>• <strong>Ev organizasyonu:</strong> Mekan masrafından tasarruf ederek bütçenizi gösterilere ayırın.</li>
        </ul>
      </div>

      {/* Bölüm 6 */}
      <h2 id="organizasyon-gunu-checklist" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Organizasyon Günü Checklist: Adım Adım Rehber
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Organizasyon günü geldiğinde her şeyin yolunda gitmesi için detaylı bir checklist hazırladık. Bu listeyi takip ederek stressiz, keyifli ve sorunsuz bir doğum günü geçirmenizi sağlarız.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-pink-600 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">⏰ Etkinlikten 3 Saat Önce</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>☐ Mekan temiz ve düzgün mü kontrol edin</li>
            <li>☐ Dekorasyon ekibi geldi mi teyit edin</li>
            <li>☐ Pasta ve ikramların hazır olduğunu kontrol edin</li>
            <li>☐ Ses sistemi ve müzik listesini test edin</li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-pink-500 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">⏰ Etkinlikten 2 Saat Önce</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>☐ Balon süsleme ve tema dekorasyonu tamamlandı mı?</li>
            <li>☐ Fotoğraf köşesi (backdrop) hazır mı?</li>
            <li>☐ Organizasyon firmasıyla son telefon görüşmesi yapın</li>
            <li>☐ Hediye çantaları ve parti malzemeleri yerleştirildi mi?</li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-pink-400 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">⏰ Etkinlikten 1 Saat Önce</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>☐ Gösteri ekibi (palyaço, sihirbaz) mekana ulaştı mı?</li>
            <li>☐ Ekipman kurulumu tamamlandı mı?</li>
            <li>☐ Son kontrolleri yapın (ışık, ses, dekor)</li>
            <li>☐ Doğum günü çocuğunun kıyafeti hazır mı?</li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-rose-500 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">🎉 Etkinlik Sırasında</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>☐ Davetlileri karşılayın ve yönlendirin</li>
            <li>☐ Gösteri başlangıcında çocukların önde oturmasını sağlayın</li>
            <li>☐ Profesyonel ekibe güvenin, oyunlara müdahale etmeyin</li>
            <li>☐ Fotoğrafçılık için önemli anları kaçırmayın</li>
            <li>☐ Pasta kesimi için mumlar ve çakmağı hazır tutun</li>
            <li>☐ İkram servisini zamanında yapın</li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-rose-600 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">👋 Etkinlik Sonrası</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>☐ Hediye çantalarını dağıtın</li>
            <li>☐ Ebeveynlere teşekkür edin</li>
            <li>☐ Mekanı kontrol edin (unutulan eşya var mı?)</li>
            <li>☐ Organizasyon firmasına geri bildirim verin</li>
          </ul>
        </div>
      </div>

      {/* Gerçek Hikaye */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 mb-8 border border-pink-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🎀 Gerçek Hikaye: 6 Yaş Doğum Günü - Ataşehir</h4>
        <p className="text-gray-700 text-sm mb-4">
          Ataşehir'de bir sitede yaşayan Selin Hanım, kızı Elif'in 6. yaş doğum günü için bizimle iletişime geçti. 4 hafta öncesinden planlamaya başladık. Unicorn teması seçildi, 22 çocuk davet edildi. Full paket organizasyon tercih edildi: palyaço + sihirbaz + bubble show gösterisi + unicorn maskot kiralama + tam dekorasyon. Etkinlik günü her şey saatinde başladı. Palyaço çocukları ısıttı, sihirbaz büyüledi, bubble show gösterisi ile final yapıldı. Unicorn maskot sürpriz giriş yaptığında çocukların çılgınca sevinci görerek yaşanacak bir şeydi. Elif, "bu benim hayatımdaki en güzel gün!" dedi. Selin Hanım ise gözleri dolu dolu "her şey mükemmeldi" diyerek bize sarıldı.
        </p>
        <p className="text-gray-600 text-xs italic">
          — Profesyonel organizasyon, doğru planlama ve deneyimli ekip ile her doğum günü unutulmaz bir anıya dönüşür.
        </p>
      </div>

      {/* Bölüm 7 - SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Sık Sorulan Sorular (SSS)
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">❓ {faq.question}</h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Hizmet CTA */}
      <div className="bg-pink-50 border border-pink-200 rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🎂 Profesyonel Doğum Günü Organizasyonu Hizmeti</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          İstanbul'un her bölgesinde, her bütçeye uygun doğum günü organizasyonu hizmeti sunuyoruz. Palyaço, sihirbaz, bubble show gösteri hizmetlerinden maskot karakter kiralama ve tema dekorasyonuna kadar tüm ihtiyaçlarınızı karşılıyoruz. Profesyonel ekibimizle çocuğunuzun en özel gününü unutulmaz kılın!
        </p>
        <Link
          to="/organizasyonlar/dogum-gunu-organizasyonu"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Doğum Günü Organizasyonu Detayları →
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎉 İstanbul'da Unutulmaz Bir Doğum Günü Organizasyonu Planlayın!</h3>
        <p className="mb-6 leading-relaxed">
          Çocuğunuzun doğum gününü profesyonel bir organizasyon ile taçlandırmak için hemen bizi arayın. Full paket organizasyondan bireysel kiralama seçeneklerine, gösteri planlamasından tema dekorasyonuna kadar her detayı titizlikle planlıyoruz. 10 yıllık deneyim, 1500+ başarılı etkinlik ve yüzlerce mutlu aile bizi bekliyor!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-pink-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            📞 +90 530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            💬 WhatsApp ile Yazın
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="dogum-gunu-organizasyonu-rehberi"
      faqData={faqData}
      relatedServicePath={relatedServicePath}
      relatedServiceName={relatedServiceName}
    >
      {content}
    </BlogDetail>
  )
}

export default DogumGunuOrganizasyonuRehberi
