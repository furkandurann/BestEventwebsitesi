import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const DogumGunuOrganizasyonuRehberi = () => {
  const faqData = [
    {
      question: 'Dogum gunu organizasyonu ne kadar onceden planlanmali?',
      answer: 'Ideal olarak 4-6 hafta oncesinden planlamaya baslamanizi oneriyoruz. Ozellikle yaz aylari ve hafta sonlari yogun talep gordugundan, populer tarihler icin erken rezervasyon onemlidir. Acil durumlarda 1-2 hafta oncesinden de organizasyon duzenliyoruz ancak secenekler sinirli olabilir.'
    },
    {
      question: 'Full paket dogum gunu organizasyonu neleri kapsar?',
      answer: 'Full paket organizasyonumuz palyaco gosteri, sihirbaz performansi, bubble show, yuz boyama, sosis balon sekilleri, muzik ve ses sistemi, parti susleme, dogum gunu pastasi organizasyonu ve fotografci hizmetini kapsar. Isteginize gore maskot karakter kiralama ve ozel tema dekorasyonu da eklenebilir.'
    },
    {
      question: 'Kac cocukluk gruplara hizmet veriyorsunuz?',
      answer: 'Minimum 5, maksimum 150 cocukluk gruplara hizmet veriyoruz. 5-15 cocuk icin standart paket, 15-40 cocuk icin genis paket, 40 ve uzeri icin kurumsal paket oneriyoruz. Her paket, cocuk sayisina gore optimize edilmis gosteri sureleri ve aktivite cesitliligi icerir.'
    },
    {
      question: 'Organizasyon sirasinda ebeveynler ne yapmali?',
      answer: 'Ebeveynlerin en onemli gorevi profesyonel ekibe guvenip oyunlara mudahale etmemeleridir. Fotografcekebilir, arka planda izleyebilirsiniz. Palyaco ve animatorlerimiz cocuk psikolojisi egitimi almis profesyonellerdir. Sadece acil durumlarda (tuvalet, saglik) mudahale edilmelidir.'
    },
    {
      question: 'Hava kotu olursa acik hava organizasyonu ne olur?',
      answer: 'Tum acik hava organizasyonlarimiz icin B plani hazirlariz. Yagmur veya siddetli ruzgar durumunda etkinligi kapali alana tasiyoruz. Musterilerimize etkinlikten 24 saat once hava durumu bilgilendirmesi yapiyoruz. Cadirli cozumler de sunabiliyoruz.'
    },
    {
      question: 'Dogum gunu organizasyonu fiyatlari ne kadardir?',
      answer: 'Fiyatlar secilen pakete, cocuk sayisina, gosteri cesitliligi ve mekan konumuna gore degisir. Bireysel hizmet kiralamasindan full paket organizasyona kadar her butceye uygun seceneklerimiz vardir. Detayli fiyat bilgisi icin bizi arayin veya WhatsApp uzerinden ulasarak kisisellestirilmis teklif alin.'
    }
  ]

  const relatedServicePath = '/organizasyonlar/dogum-gunu-organizasyonu'
  const relatedServiceName = 'Dogum Gunu Organizasyonu'

  const content = (
    <>
      {/* Icindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-pink-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Icindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#nereden-baslamali" className="text-pink-600 hover:text-pink-700 font-semibold">1. Dogum Gunu Organizasyonu: Nereden Baslamali?</a></li>
          <li><a href="#konsept-secimi" className="text-pink-600 hover:text-pink-700 font-semibold">2. Konsept Secimi: Tema Fikirleri ve Trendler</a></li>
          <li><a href="#full-paket-vs-bireysel" className="text-pink-600 hover:text-pink-700 font-semibold">3. Full Paket vs Bireysel Kiralama: Hangisi Avantajli?</a></li>
          <li><a href="#gosteri-planlamasi" className="text-pink-600 hover:text-pink-700 font-semibold">4. Gosteri Planlamasi: Palyaco, Sihirbaz, Bubble Show Kombinasyonlari</a></li>
          <li><a href="#butce-hesabi" className="text-pink-600 hover:text-pink-700 font-semibold">5. Butce Hesabi: Istanbul'da Dogum Gunu Organizasyonu Maliyetleri</a></li>
          <li><a href="#organizasyon-gunu-checklist" className="text-pink-600 hover:text-pink-700 font-semibold">6. Organizasyon Gunu Checklist: Adim Adim Rehber</a></li>
          <li><a href="#sss" className="text-pink-600 hover:text-pink-700 font-semibold">7. Sik Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giris */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Cocugunuzun dogum gunu yaklasiyorsa ve Istanbul'da unutulmaz bir organizasyon planlamak istiyorsaniz dogru yerdesiniz. Bu kapsamli rehberde, dogum gunu organizasyonunun A'dan Z'ye tum asamalarini, konsept seciminden butce hesabina, gosteri planlamasindan gun icindeki checklist'e kadar her detayi ele aliyoruz. Yillik 1500'den fazla etkinlik deneyimimizle edindigimiz bilgileri sizlerle paylasiyoruz.
      </p>

      <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          🎂 <strong>Ipucu:</strong> Basarili bir dogum gunu organizasyonu, en az 4-6 hafta oncesinden planlamaya baslamakla mumkundur. Erken planlama hem daha fazla secenek sunar hem de butcenizi daha iyi yonetmenizi saglar. Ozellikle populer hafta sonlari icin erken rezervasyon sart!
        </p>
      </div>

      {/* Bolum 1 */}
      <h2 id="nereden-baslamali" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Dogum Gunu Organizasyonu: Nereden Baslamali?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Dogum gunu organizasyonu planlamak, ilk bakista karmasik gorunebilir. Ancak dogru bir zaman cizelgesiyle adim adim ilerlediginizde her sey yerine oturur. Istanbul'da her hafta duzenledigimiz yuzlerce etkinligin deneyimiyle, ideal planlama surecini sizin icin hazirladik.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">📅</span> 4-6 Hafta Once: Temel Kararlari Alin
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">1.</span>
              <div>
                <strong>Tarih ve saat belirleyin:</strong> Hafta sonu ogle saatleri (13:00-16:00) cocuklar icin en ideal zamandilimdir. Hafta ici daha uygun fiyatlar bulabilirsiniz.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">2.</span>
              <div>
                <strong>Davetli listesi olusturun:</strong> Cocuk sayisi, butce ve mekan secimini dogrudan etkiler. Ortalama 15-25 cocuk ideal bir grup buyuklugudur.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">3.</span>
              <div>
                <strong>Butce belirleyin:</strong> Mekan, gosteri hizmetleri, yiyecek-icecek ve dekorasyon icin ayri kalemler olusturun.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">4.</span>
              <div>
                <strong>Mekan secimi yapin:</strong> Ev, restoran, oyun salonu veya acik hava mekanlarindan birini tercih edin. <Link to="/blog/dogum-gunu-mekan-secimi" className="text-pink-600 hover:text-pink-700 font-semibold underline">Dogum gunu mekan secimi rehberimize</Link> goz atabilirsiniz.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-rose-50 rounded-lg p-6 border-l-4 border-rose-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">📋</span> 2-3 Hafta Once: Detaylari Netleistirin
          </h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Organizasyon firmasindan teklif alin ve sozlesme yapin</li>
            <li>• Tema ve renk konseptini belirleyin</li>
            <li>• Davetiye gonderin (fiziksel veya dijital)</li>
            <li>• Pasta siparisi verin</li>
            <li>• Ozel isteklerinizi (alerji, diyet, ozel gereksinimler) bildirin</li>
          </ul>
        </div>

        <div className="bg-fuchsia-50 rounded-lg p-6 border-l-4 border-fuchsia-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">✅</span> 1 Hafta Once: Son Kontroller
          </h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Organizasyon firmasiyla son gorusme yapin ve detaylari teyit edin</li>
            <li>• Hava durumunu kontrol edin (acik hava organizasyonu icin)</li>
            <li>• Davetli teyitlerini toplayin</li>
            <li>• Hediye cantalarini/parti malzemelerini hazirlayin</li>
            <li>• Mekanla son gorUsmeyi yapin</li>
          </ul>
        </div>
      </div>

      {/* Bolum 2 */}
      <h2 id="konsept-secimi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Konsept Secimi: Tema Fikirleri ve Trendler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Dogru tema secimi, organizasyonun tum gorsel ve icEriksel yapisini belirler. Istanbul'da en cok tercih edilen dogum gunu temalari ve her birinin avantajlarini sizin icin derledik. Tema seciminde cocugunuzun ilgi alanlarini on planda tutmak en onemli kriterdir.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
          <h4 className="font-bold text-gray-900 mb-3">👸 Prenses Temasi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yas Grubu:</strong> 3-8 yas</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Pembe, mor, altin</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Prenses kostum giydirme, tac yapimi, dans gosterisi</p>
          <p className="text-gray-700 text-sm"><strong>Populerlik:</strong> Istanbul'da en cok tercih edilen tema</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h4 className="font-bold text-gray-900 mb-3">🦸 Superkahramam Temasi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yas Grubu:</strong> 4-10 yas</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Kirmizi, mavi, sari</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Kostumlue karakter gosteri, engel parkuru, kahraman egitimi</p>
          <p className="text-gray-700 text-sm"><strong>Populerlik:</strong> Erkek cocuklarda 1 numara</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
          <h4 className="font-bold text-gray-900 mb-3">🦄 Unicorn Temasi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yas Grubu:</strong> 3-7 yas</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Pastel pembe, mor, turkuaz, altin</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Gokkusagi boyama, unicorn maskot kiralama</p>
          <p className="text-gray-700 text-sm"><strong>Populerlik:</strong> Son 3 yilin trend temasi</p>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
          <h4 className="font-bold text-gray-900 mb-3">🚀 Uzay Temasi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yas Grubu:</strong> 5-12 yas</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Lacivert, gumus, siyah, mor</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Roket yapimi, gezegen boyama, astronot kostumleri</p>
          <p className="text-gray-700 text-sm"><strong>Populerlik:</strong> Merakli cocuklar icin ideal</p>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h4 className="font-bold text-gray-900 mb-3">🦁 Safari Temasi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yas Grubu:</strong> 2-8 yas</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Yesil, kahverengi, turuncu</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Hayvan maskot gosteri, orman dekorasyonu, hazine avi</p>
          <p className="text-gray-700 text-sm"><strong>Populerlik:</strong> Acik hava etkinlikleri icin mukemmel</p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
          <h4 className="font-bold text-gray-900 mb-3">🎪 Sirk Temasi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Yas Grubu:</strong> 3-10 yas</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Renkler:</strong> Kirmizi, beyaz, altin</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Aktiviteler:</strong> Palyaco gosteri, sihirbaz, jonglor, bubble show</p>
          <p className="text-gray-700 text-sm"><strong>Populerlik:</strong> Gosteri agirlikli partiler icin</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-3">💡 Tema Secimi Ipuclari:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• <strong>Cocugunuzun ilgi alanlarina oncelik verin:</strong> En sevdigi cizgi film, hayvan veya renk neyse ondan yola cikin.</li>
          <li>• <strong>Yas grubunu goz onunde bulundurun:</strong> 2-4 yas icin basit ve renkli temalar, 5-8 yas icin karakter temali, 9-12 yas icin aktivite odakli temalar ideal.</li>
          <li>• <strong>Butcenizi dusunun:</strong> Bazi temalar ozel dekorasyon ve kostumlue karakter kiralama gerektirdigindenmaliyeti artirabilir.</li>
          <li>• <strong>Mekanla uyumu kontrol edin:</strong> Safari temasi acik hava icin, prenses temasi kapali salon icin daha uygun olabilir.</li>
        </ul>
      </div>

      {/* Bolum 3 */}
      <h2 id="full-paket-vs-bireysel" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Full Paket vs Bireysel Kiralama: Hangisi Avantajli?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Dogum gunu organizasyonu planlarken en cok sorulan sorulardan biri: "Full paket mi alsam, yoksa ihtiyacim olan hizmetleri tek tek mi kiralamaliyim?" Her iki secenegin de avantajlari ve dezavantajlari var. Bireysel kiralama daha esnek olabilir ama full paket genellikle daha ekonomik ve sorunsuz bir deneyim sunar.
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
                <li>• %15-25 fiyat avantaji</li>
                <li>• Profesyonel zaman yonetimi</li>
                <li>• Tum gosteri ve aktiviteler uyumlu</li>
                <li>• Yedek ekip ve ekipman garantisi</li>
                <li>• Dekorasyon, gosteri, animasyon hepsi dahil</li>
              </ul>
            </div>
            <div>
              <strong className="text-red-600">❌ Dezavantajlar:</strong>
              <ul className="mt-1 space-y-1 ml-4">
                <li>• Daha az esneklik</li>
                <li>• Bazi hizmetlere ihtiyac duymayanlar icin fazla olabilir</li>
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
                <li>• Sadece ihtiyaciniz olani secersiniz</li>
                <li>• Farkli firmalardan en iyisini secebilirsiniz</li>
                <li>• Esnek planlama imkani</li>
              </ul>
            </div>
            <div>
              <strong className="text-red-600">❌ Dezavantajlar:</strong>
              <ul className="mt-1 space-y-1 ml-4">
                <li>• Her hizmet icin ayri koordinasyon</li>
                <li>• Toplam maliyet genellikle daha yuksek</li>
                <li>• Zaman yonetimi zor</li>
                <li>• Farkli ekipler arasi uyumsuzluk riski</li>
                <li>• Yedek plan eksikligi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">🎯 Onerimiz:</h4>
        <p className="text-gray-700 text-sm">
          15 ve ustu cocukluk organizasyonlarda <strong>full paket</strong> secenegi hem butce hem de koordinasyon acisindan cok daha avantajlidir. Bireysel kiralama ise 10 ve alti cocukluk kucuk partilerde, sadece tek bir gosteri hizmeti (ornegin sadece palyaco veya sadece bubble show) istiyorsaniz mantikli olabilir.
        </p>
      </div>

      {/* Bolum 4 */}
      <h2 id="gosteri-planlamasi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Gosteri Planlamasi: Palyaco, Sihirbaz, Bubble Show Kombinasyonlari
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Basarili bir dogum gunu organizasyonunun kalbi, dogru gosteri kombinasyonudur. Her gosteri turu farkli bir enerji tasir ve cocuklarin farkli duygularini harekete gecirir. Onemli olan bu gosterileri dogru siralamayla ve uyumlu zamanlama ile sunmaktir. <Link to="/blog/palyaco-dogum-gunu-rehberi" className="text-pink-600 hover:text-pink-700 font-semibold underline">Palyaco dogum gunu rehberimizden</Link> daha detayli bilgi edinebilirsiniz.
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎪</span> Kombinasyon 1: Palyaco + Bubble Show (2 saat)
          </h4>
          <p className="text-gray-700 text-sm mb-3"><strong>En Populer Secenek!</strong> Cocuklarin %80'i bu kombinasyonu tercih ediyor.</p>
          <div className="bg-gray-50 rounded p-4 text-sm text-gray-700">
            <p><strong>14:00-14:10:</strong> Palyaco giris, tanisma, enerji toplama oyunlari</p>
            <p><strong>14:10-14:40:</strong> Palyaco gosterisi (sosis balon, yuz boyama, muzikli oyunlar)</p>
            <p><strong>14:40-15:00:</strong> Mola + ikram</p>
            <p><strong>15:00-15:30:</strong> Bubble show gosterisi (dev balonlar, renkli kopukler)</p>
            <p><strong>15:30-15:50:</strong> Interaktif kopuk oyunlari</p>
            <p><strong>15:50-16:00:</strong> Pasta kesimi ve veda</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎩</span> Kombinasyon 2: Palyaco + Sihirbaz + Bubble Show (3 saat)
          </h4>
          <p className="text-gray-700 text-sm mb-3"><strong>Premium Deneyim!</strong> 20+ cocukluk buyuk partiler icin ideal.</p>
          <div className="bg-gray-50 rounded p-4 text-sm text-gray-700">
            <p><strong>13:00-13:10:</strong> Palyaco giris ve tanisma</p>
            <p><strong>13:10-13:50:</strong> Palyaco gosterisi (oyunlar, sosis balon, dans)</p>
            <p><strong>13:50-14:10:</strong> Mola + ikram</p>
            <p><strong>14:10-14:45:</strong> Sihirbaz gosterisi (illuzyonlar, kart numaralari)</p>
            <p><strong>14:45-15:00:</strong> Kisa mola</p>
            <p><strong>15:00-15:35:</strong> Bubble show gosterisi</p>
            <p><strong>15:35-15:50:</strong> Interaktif oyunlar ve odul dagitimi</p>
            <p><strong>15:50-16:00:</strong> Pasta kesimi, fotograf ve veda</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎭</span> Kombinasyon 3: Maskot Karakter + Palyaco + Gosteri (3+ saat)
          </h4>
          <p className="text-gray-700 text-sm mb-3"><strong>Temali Ozel Parti!</strong> Prenses, superkahramam veya maskot karakter kiralama ile zenginlestirilmis organizasyon.</p>
          <div className="bg-gray-50 rounded p-4 text-sm text-gray-700">
            <p><strong>13:00-13:15:</strong> Maskot karakter surpriz giris (tema muzigi esliginde)</p>
            <p><strong>13:15-13:45:</strong> Maskot ile fotograf ve dans</p>
            <p><strong>13:45-14:30:</strong> Palyaco gosterisi ve aktiviteler</p>
            <p><strong>14:30-14:45:</strong> Mola ve ikram</p>
            <p><strong>14:45-15:15:</strong> Sihirbaz veya bubble show gosterisi</p>
            <p><strong>15:15-15:45:</strong> Serbest oyun ve interaktif aktiviteler</p>
            <p><strong>15:45-16:00:</strong> Pasta kesimi ve veda</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">⚡ Gosteri Siralamasinin Onemi:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• <strong>Palyacoyla baslayin:</strong> Cocuklari isitir, enerjilerini yukselttir ve ortama alistirir.</li>
          <li>• <strong>Sihirbazi ortaya koyun:</strong> Dikkat ve konsantrasyon gerektiren gosteriler icin en ideal zaman dilimidir.</li>
          <li>• <strong>Bubble show ile bitirin:</strong> Gorsel soluk ve mutlu bir final yaratir. Cocuklar buyuleyici kopuklerle huzurlu sekilde etkinligi tamamlar.</li>
        </ul>
      </div>

      {/* Bolum 5 */}
      <h2 id="butce-hesabi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Butce Hesabi: Istanbul'da Dogum Gunu Organizasyonu Maliyetleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul'da dogum gunu organizasyonu butcesi, secilen hizmetlere, mekan turune ve cocuk sayisina gore buyuk farklilik gosterir. Asagida genel bir maliyet tablosu sunuyoruz. Bu rakamlar ortalama degerleri yansitmakta olup kesin fiyat icin iletisime gecmenizi oneririz.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-pink-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Hizmet Kalemi</th>
              <th className="py-3 px-4 text-left">Aciklama</th>
              <th className="py-3 px-4 text-left">Butce Payi</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Mekan</td>
              <td className="py-3 px-4">Oyun salonu, restoran veya acik hava alani</td>
              <td className="py-3 px-4">%25-35</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4 font-semibold">Gosteri Hizmetleri</td>
              <td className="py-3 px-4">Palyaco, sihirbaz, bubble show, animasyon</td>
              <td className="py-3 px-4">%25-30</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Yiyecek-Icecek</td>
              <td className="py-3 px-4">Pasta, kurabiye, meyve, icecekler, ikram</td>
              <td className="py-3 px-4">%15-20</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4 font-semibold">Dekorasyon</td>
              <td className="py-3 px-4">Balon susleme, tema dekorasyonu, backdrop</td>
              <td className="py-3 px-4">%10-15</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Parti Malzemeleri</td>
              <td className="py-3 px-4">Tabak, bardak, pecete, hediye cantalari</td>
              <td className="py-3 px-4">%5-8</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 font-semibold">Ekstra Hizmetler</td>
              <td className="py-3 px-4">Fotografci, popcorn/pamuk seker makinasi kiralama</td>
              <td className="py-3 px-4">%5-10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h4 className="font-bold text-gray-900 mb-3">💚 Ekonomik Paket</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>10-15 cocuk icin</strong></p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Palyaco (45 dk)</li>
            <li>• Temel balon susleme</li>
            <li>• Sosis balon + yuz boyama</li>
          </ul>
        </div>

        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
          <h4 className="font-bold text-gray-900 mb-3">💖 Standart Paket</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>15-25 cocuk icin</strong></p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Palyaco + Bubble Show</li>
            <li>• Tema dekorasyonu</li>
            <li>• Muzik sistemi</li>
            <li>• Yuz boyama + sosis balon</li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
          <h4 className="font-bold text-gray-900 mb-3">💜 Premium Paket</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>25+ cocuk icin</strong></p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Palyaco + Sihirbaz + Bubble Show</li>
            <li>• Maskot karakter kiralama</li>
            <li>• Tam dekorasyon + backdrop</li>
            <li>• Fotografci</li>
            <li>• Popcorn & pamuk seker makinasi</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">💰 Butce Tasarrufu Ipuclari:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• <strong>Hafta ici etkinlik:</strong> Cumartesi/Pazar yerine Cuma veya Persembe gunu tercih edin, %10-20 tasarruf edin.</li>
          <li>• <strong>Full paket alin:</strong> Bireysel kiralama yerine paket secmek %15-25 daha ekonomiktir.</li>
          <li>• <strong>Erken rezervasyon:</strong> 6+ hafta onceden rezervasyon yapanlara ozel indirimler uygulanir.</li>
          <li>• <strong>Ev organizasyonu:</strong> Mekan masrafindan tasarruf ederek butcenizi gosterilere ayirin.</li>
        </ul>
      </div>

      {/* Bolum 6 */}
      <h2 id="organizasyon-gunu-checklist" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Organizasyon Gunu Checklist: Adim Adim Rehber
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Organizasyon gunu geldiginde her seyin yolunda gitmesi icin detayli bir checklist hazirladik. Bu listeyi takip ederek stressiz, keyifli ve sorunsuz bir dogum gunu gecirmenizi saglariz.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-pink-600 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">⏰ Etkinlikten 3 Saat Once</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>☐ Mekan temiz ve duzgun mu kontrol edin</li>
            <li>☐ Dekorasyon ekibi geldi mi teyit edin</li>
            <li>☐ Pasta ve ikramlarin hazir oldugunu kontrol edin</li>
            <li>☐ Ses sistemi ve muzik listesini test edin</li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-pink-500 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">⏰ Etkinlikten 2 Saat Once</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>☐ Balon susleme ve tema dekorasyonu tamamlandi mi?</li>
            <li>☐ Fotograf kosesi (backdrop) hazir mi?</li>
            <li>☐ Organizasyon firmasiyla son telefon gorusmesi yapin</li>
            <li>☐ Hediye cantalari ve parti malzemeleri yerlestirildi mi?</li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-pink-400 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">⏰ Etkinlikten 1 Saat Once</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>☐ Gosteri ekibi (palyaco, sihirbaz) mekana ulasti mi?</li>
            <li>☐ Ekipman kurulumu tamamlandi mi?</li>
            <li>☐ Son kontrolleri yapin (isik, ses, dekor)</li>
            <li>☐ Dogum gunu cocugunun kiyafeti hazir mi?</li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-rose-500 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">🎉 Etkinlik Sirasinda</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>☐ Davetlileri karsilayin ve yonlendirin</li>
            <li>☐ Gosteri baslangicinda cocuklarin onde oturmasini saglayin</li>
            <li>☐ Profesyonel ekibe guvenin, oyunlara mudahale etmeyin</li>
            <li>☐ Fotografcilik icin onemli anlari kacirmayin</li>
            <li>☐ Pasta kesimi icin mumlar ve cakmagi hazir tutun</li>
            <li>☐ Ikram servisini zamaninda yapin</li>
          </ul>
        </div>

        <div className="bg-white border-l-4 border-rose-600 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">👋 Etkinlik Sonrasi</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>☐ Hediye cantalarini dagiltin</li>
            <li>☐ Ebeveynlere tesekkur edin</li>
            <li>☐ Mekani kontrol edin (unutulan esya var mi?)</li>
            <li>☐ Organizasyon firmaSina geri bildirim verin</li>
          </ul>
        </div>
      </div>

      {/* Gercek Hikaye */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 mb-8 border border-pink-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🎀 Gercek Hikaye: 6 Yas Dogum Gunu - Atasehir</h4>
        <p className="text-gray-700 text-sm mb-4">
          Atasehir'de bir sitede yasayan Selin Hanim, kizi Elif'in 6. yas dogum gunu icin bizimle iletisime gecti. 4 hafta oncesinden planlamaya basladik. Unicorn temasi secildi, 22 cocuk davet edildi. Full paket organizasyon tercih edildi: palyaco + sihirbaz + bubble show gosterisi + unicorn maskot kiralama + tam dekorasyon. Etkinlik gunu her sey saatinde basladi. Palyaco cocuklari isitti, sihirbaz buyuledi, bubble show gosterisi ile final yapildi. Unicorn maskot surpriz giris yaptiginda cocuklarin cilginca sevinci gorerek yasanacak bir seydi. Elif, "bu benim hayatimdaki en guzel gun!" dedi. Selin Hanim ise gozleri dolu dolu "her sey mukemmeldi" diyerek bize sarildi.
        </p>
        <p className="text-gray-600 text-xs italic">
          — Profesyonel organizasyon, dogru planlama ve deneyimli ekip ile her dogum gunu unutulmaz bir aniya donusur.
        </p>
      </div>

      {/* Bolum 7 - SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Sik Sorulan Sorular (SSS)
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
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🎂 Profesyonel Dogum Gunu Organizasyonu Hizmeti</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Istanbul'un her bolgesinde, her butceye uygun dogum gunu organizasyonu hizmeti sunuyoruz. Palyaco, sihirbaz, bubble show gosteri hizmetlerinden maskot karakter kiralama ve tema dekorasyonuna kadar tum ihtiyaclarinizi karsiliyoruz. Profesyonel ekibimizle cocugunuzun en ozel gununu unutulmaz kilin!
        </p>
        <Link
          to="/organizasyonlar/dogum-gunu-organizasyonu"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Dogum Gunu Organizasyonu Detaylari →
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎉 Istanbul'da Unutulmaz Bir Dogum Gunu Organizasyonu Planlayin!</h3>
        <p className="mb-6 leading-relaxed">
          Cocugunuzun dogum gununu profesyonel bir organizasyon ile taclancirmak icin hemen bizi arayin. Full paket organizasyondan bireysel kiralama seceneklerine, gosteri planlamasindan tema dekorasyonuna kadar her detayi titizlikle planliyoruz. 10 yillik deneyim, 1500+ basarili etkinlik ve yuzlerce mutlu aile bizi bekliyor!
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
            💬 WhatsApp ile Yazin
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      faqData={faqData}
      relatedServicePath={relatedServicePath}
      relatedServiceName={relatedServiceName}
    >
      {content}
    </BlogDetail>
  )
}

export default DogumGunuOrganizasyonuRehberi
