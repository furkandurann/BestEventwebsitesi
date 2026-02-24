import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const PamukSekerEtkinlikRehberi = () => {
  const faqData = [
    {
      question: 'Pamuk seker makinesi kiralama fiyati nedir?',
      answer: 'Pamuk seker makinesi kiralama fiyatlari etkinlik suresine, katilimci sayisina ve secilen pakete gore degiskenlik gosterir. Tek basina pamuk seker makinesi kiralama ile birlikte operator hizmeti, sinirs iz seker malzemesi ve renkli cubuklar dahildir. Detayli fiyat bilgisi icin bizimle iletisime gecerek kisisellestirilmis teklif alabilirsiniz. Popcorn veya cikolata selalesi ile kombine paketlerde ozel indirimler uygulanmaktadir.'
    },
    {
      question: 'Cikolata selalesi hangi cikolatalarla calisir?',
      answer: 'Cikolata selalemiz ozellikle selale kullanimi icin uretilmis profesyonel kalite kuvertur cikolata ile calisir. Sut cikolata, bitter cikolata ve beyaz cikolata secenekleri mevcuttur. Cikolatalar Belcika ve Isvicre menseili, kakao orani yuksek, katkisiz urunlerdir. Alerji durumunda seker bazli alternatif soslar da kullanilabilir. Her etkinlik icin taze cikolata eritilir ve hijyen kurallarina uygun sekilde servis edilir.'
    },
    {
      question: 'Popcorn arabasi ic mekanda kullanilabilir mi?',
      answer: 'Evet, popcorn arabamiz hem ic mekan hem dis mekan kullanimi icin uygundur. Ic mekanda kullanim icin duman ve koku filtreli profesyonel makineler tercih edilir. Mekanin havalandirma durumu onceden kontrol edilir. Apartman dairesi, villa, restoran, otel salonu gibi her turlu mekanda guvenle kullanilabilir. Retro tasarimli popcorn arabamiz dekoratif olarak da mekanin atmosferine katkida bulunur.'
    },
    {
      question: 'Kac kisilik etkinliklere hizmet veriyorsunuz?',
      answer: '10 kisilik kucuk dogum gunu partilerinden 500+ kisilik kurumsal etkinliklere kadar her olcekte hizmet vermekteyiz. Kucuk etkinlikler icin kompakt ekipmanlar, buyuk organizasyonlar icin birden fazla makine ve operator tahsis edilir. 50 kisi uzeri etkinliklerde ikinci bir pamuk seker makinesi veya ek popcorn arabasi eklenmesi onerilir. Katilimci sayisina gore porsiyon ve malzeme hesabi onceden yapilir.'
    },
    {
      question: 'Alerji durumunda alternatif ikramlar var mi?',
      answer: 'Evet, alerji ve diyet gereksinimleri konusunda hassas davraniyoruz. Gluten intoleransi icin glutensiz popcorn misiri, seker alerjisi icin dogal tatlandiricilarla hazirlanmis pamuk seker, sut alerjisi icin bitter cikolata veya meyve sosu alternatifleri mevcuttur. Etkinlik oncesinde alerji bilgileri alinir ve buna uygun malzemeler hazirlanir. Tum urunlerimizin icerik etiketleri seffaf sekilde paylasil ir.'
    },
    {
      question: 'Parti ekipmanlari ne kadar onceden kurulur?',
      answer: 'Ekiplerimiz etkinlik baslama saatinden 60-90 dakika once mekana gelir. Pamuk seker makinesi 15 dakikada, popcorn arabasi 20 dakikada, cikolata selalesi ise 30-40 dakikada kurulur ve calisir hale getirilir. Cikolata selalesi icin eritme suresi de dahil edilir. Kurulum tamamlandiktan sonra test uretimi yapilir ve kalite kontrolden gecirilir. Etkinlik sonrasinda sokulme ve temizlik islemleri ekibimiz tarafindan gerceklestirilir.'
    }
  ]

  const relatedServicePath = '/organizasyonlar/pamuk-seker'
  const relatedServiceName = 'Pamuk Seker ve Parti Ekipmanlari'

  const content = (
    <>
      {/* Icindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-orange-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Icindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#pamuk-seker-kiralama" className="text-orange-600 hover:text-orange-700 font-semibold">1. Pamuk Seker Makinesi Kiralama: Neden Populer?</a></li>
          <li><a href="#cikolata-selalesi" className="text-orange-600 hover:text-orange-700 font-semibold">2. Cikolata Selalesi: Etkinligin Yildizi</a></li>
          <li><a href="#popcorn-arabasi" className="text-orange-600 hover:text-orange-700 font-semibold">3. Popcorn Arabasi Kiralama: Sinema Keyfi Partide</a></li>
          <li><a href="#paket-kombinasyonlari" className="text-orange-600 hover:text-orange-700 font-semibold">4. Parti Ekipmanlari Kombinasyonlari: En Populer Paketler</a></li>
          <li><a href="#hijyen-guvenlik" className="text-orange-600 hover:text-orange-700 font-semibold">5. Hijyen ve Guvenlik Kurallari</a></li>
          <li><a href="#etkinlik-onerileri" className="text-orange-600 hover:text-orange-700 font-semibold">6. Etkinlik Turlerine Gore Ikram Onerileri</a></li>
          <li><a href="#sss" className="text-orange-600 hover:text-orange-700 font-semibold">7. Sik Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giris */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Pamuk seker kiralama, cikolata selalesi ve popcorn arabasi gibi parti ekipmanlari, cocuk dogum gunu organizasyonlarindan kurumsal etkinliklere kadar her turlu kutlamanin vazgecilmez unsurlari haline gelmistir. Istanbul'da profesyonel parti ekipmani kiralama hizmeti ile etkinliklerinize renk, tat ve gorsel solen katabilirsiniz. Bu kapsamli rehberde, pamuk seker makinesinden cikolata selalesine, popcorn arabasindan hijyen kurallarina kadar bilmeniz gereken her seyi detayli sekilde bulacaksiniz. Ayrica{' '}
        <Link to="/blog/pamuk-seker-dogum-gunu-organizasyonu" className="text-orange-600 hover:text-orange-700 font-semibold underline">
          pamuk seker dogum gunu organizasyonu
        </Link>{' '}
        yazimizda ozel parti fikirleri de bulabilirsiniz.
      </p>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Ipucu:</strong> Parti ekipmanlari sadece ikram araci degil, ayni zamanda gosterinin bir parcasidir. Pamuk sekerin havada donmesi, cikolatanin selaleden akisi ve popcornun patlamasi cocuklar icin buyuleyici bir deneyimdir. Dogru ekipman secimi etkinliginizi siradan bir partiden unutulmaz bir organizasyona donusturur.
        </p>
      </div>

      {/* Bolum 1 */}
      <h2 id="pamuk-seker-kiralama" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Pamuk Seker Makinesi Kiralama: Neden Populer?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pamuk seker, onlarca yildir lunaparklarin ve festivallerin sembolik lezzeti olmustur. Ancak son yillarda pamuk seker makinesi kiralama hizmeti sayesinde bu buyulu deneyim artik dogum gunu partilerine, okul senliklerine ve kurumsal organizasyonlara da tasiniyor. Makinenin basinda durup, beyaz sekerin renkli, puf gibi bir pamuk sekere donusmesini izlemek cocuklar icin adeta bir gosteri niteligi tasiyor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Profesyonel pamuk seker makinelerimiz, sanayii tipi paslanmaz celik kazanlara sahiptir ve dakikada 1 adet pamuk seker uretebilir. Renkli seker secenekleri arasinda klasik pembe, gok mavisi, sari, yesil ve hatta karisim renkler bulunur. Her rengin farkli bir aromasi vardir: pembe cilek, mavi sakiz, sari limon ve yesil elma. Cocuklar kendi renklerini secmekten buyuk keyif alir.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3">Gorsel Sov</h4>
          <p className="text-gray-700 text-sm">Sekerin ince ipliklere donusup cubuga sarilmasi cocuklar icin hipnotize edici bir gosteriye donusur. Her pamuk seker yapimi bir performanstir.</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
          <h4 className="font-bold text-gray-900 mb-3">Tat Cesitliligi</h4>
          <p className="text-gray-700 text-sm">5 farkli renk ve aroma secenegi ile her cocugun damak tadina uygun pamuk seker uretilir. Ozel gun temalarina uygun renk kombinasyonlari yapilabilir.</p>
        </div>

        <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
          <h4 className="font-bold text-gray-900 mb-3">Kolay Organizasyon</h4>
          <p className="text-gray-700 text-sm">Makinemiz 15 dakikada kurulur, operatoru ile birlikte gelir ve etkinlik sonrasi temizlik dahildir. Tek yapmaniz gereken keyfini cikarmak!</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Pamuk seker makinesi kiralama hizmetimiz, sadece makineyi degil eksiksiz bir deneyimi kapsar. Operatorumuz cocuklarla etkilesime girer, pamuk sekeri farkli sekillerde sunar ve partinin enerjisini yuksek tutar. Bu, basit bir ikramdan cok bir gosteri ve animasyon hizmetidir.
      </p>

      {/* Bolum 2 */}
      <h2 id="cikolata-selalesi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Cikolata Selalesi: Etkinligin Yildizi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Cikolata selalesi, herhangi bir organizasyonun en dikkat cekici unsuru olmaya aday muhteseam bir ekipmandir. Profesyonel cikolata selalemiz 60-80 cm yuksekliginde, 3-5 katli paslanmaz celik yapisindan olusur. Eritilmis cikolata, motorlu pompa sistemiyle surekli olarak yukari tasir ve katlardan asagiya dogru selalevari bir sekilde akar. Bu gorsel solen hem cocuklari hem yetiskinleri buyuler.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Cikolata selalesi yaninda sunulan meyve sislerinde cilek, muz, uzum, ananas ve kivi gibi mevsim meyveleri bulunur. Bunlarin yaninda marshmallow, kek parcalari, kurabiye cubuklari ve kuru meyveler de cikolataya bandirilerek tuketilebilir. Organizasyonumuza dahil olan meyve tabagi, etkinlik oncesinde taze olarak hazirlanir ve gosteris sunumu ile servis edilir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
          <h4 className="font-bold text-gray-900 mb-3">Cikolata Selalesi Nasil Calisir?</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">1.</span>
              <div><strong>Eritme Asamasi:</strong> Kuvertur cikolata benmari usulu ile yavas yavas eritilir. Bu islem 20-25 dakika surer ve cikolatanin yanmasini onler.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">2.</span>
              <div><strong>Selale Calisma:</strong> Eritilmis cikolata hazneye konulur, motor devreye girer ve cikolata katlardan asagiya akmaya baslar. Sicaklik sabit tutulur.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">3.</span>
              <div><strong>Servis:</strong> Konuklar meyve sisleri veya marshmallow cubuklari ile cikolataya bandirma yapar. Operatorumuz yonlendirme ve hijyen kontrolu saglar.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">4.</span>
              <div><strong>Bakim:</strong> Etkinlik boyunca cikolata seviyesi kontrol edilir, gerektiginde ekleme yapilir. Sicaklik 40-45 derece arasinda korunur.</div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Cikolata selalesi kiralama hizmetimiz, tum malzeme, kurulum, operasyon ve temizlik islemlerini kapsar. Sut cikolata, bitter cikolata ve beyaz cikolata secenekleri arasinda tercihinize gore hazirlik yapilir. Ortalama 50 kisilik bir etkinlik icin 2-3 kg cikolata kullanilir.
      </p>

      {/* Bolum 3 */}
      <h2 id="popcorn-arabasi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Popcorn Arabasi Kiralama: Sinema Keyfi Partide
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Retro tasarimli popcorn arabasi, etkinliginize nostaljik bir atmosfer katar. Kirmizi-beyaz renklerde, tekerlekli, vitrinli popcorn arabamiz hem gorsel bir dekor unsuru hem de lezzetli bir ikram istasyonudur. Taze patlamis misirin kokusu mekani kaplar ve davetlileri cezbeder. Popcorn arabasi kiralama hizmeti, ozellikle sinema temal dogum gunu partilerinde ve okul karnavallarinda cok tercih edilir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Profesyonel popcorn makinemiz dakikada 200-250 gram popcorn uretir. Tek seferde 8 litre kapasiteye sahip kazaninda misirlar tereyagi ile patlatilir. Porsiyon secenekleri kucuk (50g), orta (100g) ve buyuk (150g) olarak sunulur. Tuzlu, tereyagli ve karamelli cesitleri mevcuttur. Cocuklar icin ozel karamel veya peynirli popcorn da hazirlanabilir.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
          <h4 className="font-bold text-gray-900 mb-3">Retro Popcorn Arabasi Ozellikleri</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Kirmizi-beyaz vintage tasarim</li>
            <li>4 tekerlekli, tasimasi kolay yapi</li>
            <li>Isikli tabela ve vitrin cami</li>
            <li>Paslanmaz celik patlatma kazani</li>
            <li>Isitma sistemi ile sicak servis</li>
            <li>Dekoratif popcorn kutulari dahil</li>
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-gray-900 mb-3">Porsiyon Planlama Rehberi</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>10-20 kisi:</strong> 2-3 kg misir yeterli</li>
            <li><strong>20-50 kisi:</strong> 4-6 kg misir yeterli</li>
            <li><strong>50-100 kisi:</strong> 8-12 kg misir yeterli</li>
            <li><strong>100+ kisi:</strong> 2. makine onerilir</li>
            <li>Her 1 kg misirdan yaklasik 30 porsiyon cikar</li>
            <li>Cocuk etkinliklerinde %20 fazla hesaplanir</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Popcorn arabasi kiralama hizmetimizde tum misir malzemesi, tereyagi, tuz, karamel sos ve servis kutulari dahildir. Operatorumuz taze popcorn uretimini surekli yapar, porsiyonlari dagilir ve araba cevresindeki duzenin korunmasini saglar. Etkinlik sonrasinda araba ve cevresinin temizligi de bizim tarafindan gerceklestirilir.
      </p>

      {/* Bolum 4 */}
      <h2 id="paket-kombinasyonlari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Parti Ekipmanlari Kombinasyonlari: En Populer Paketler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Tek bir parti ekipmani bile etkinliginize deger katar, ancak kombinasyonlar gercek farki yaratir. Farkli tatlar ve gorselleri bir araya getirerek konuklariniza zengin bir deneyim sunabilirsiniz. Iste en cok tercih edilen organizasyon paketlerimiz:
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-center mb-4">
            <span className="text-3xl">Ikili Paket</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-3 text-center text-lg">Pamuk Seker + Popcorn</h4>
          <p className="text-gray-700 text-sm mb-4">En populer kombinasyon! Tatli pamuk seker ile tuzlu popcorn arasindaki kontrast, damaklarda mukemmel bir denge olusturur.</p>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>2 ayri operator</li>
            <li>Sinirs iz malzeme</li>
            <li>4 saat kesintisiz servis</li>
            <li>Kurulum ve temizlik dahil</li>
          </ul>
          <p className="text-orange-600 font-bold mt-4 text-center text-sm">En Cok Tercih Edilen</p>
        </div>

        <div className="bg-white border-2 border-amber-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-center mb-4">
            <span className="text-3xl">Uclu Paket</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-3 text-center text-lg">Pamuk Seker + Popcorn + Cikolata Selalesi</h4>
          <p className="text-gray-700 text-sm mb-4">Tam donanim organizasyon paketi! Uc farkli tat istasyonu ile davetlileriniz surekli mesgul ve mutlu olur.</p>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>3 ayri operator</li>
            <li>Meyve tabagi dahil</li>
            <li>5 saat kesintisiz servis</li>
            <li>Premium sunumu ve dekor</li>
          </ul>
          <p className="text-amber-600 font-bold mt-4 text-center text-sm">Premium Secim</p>
        </div>

        <div className="bg-white border-2 border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-center mb-4">
            <span className="text-3xl">Ozel Paket</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-3 text-center text-lg">Cikolata Selalesi + Meyve Bari</h4>
          <p className="text-gray-700 text-sm mb-4">Saglikli ve lezzetli! Taze meyveler cikolata ile bulusur. Yetiskin agirlikli etkinlikler ve kurumsal organizasyonlar icin ideal.</p>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>Mevsim meyveleri ile sunum</li>
            <li>3 cikolata cesidi</li>
            <li>Ozel marshmallow secenegi</li>
            <li>Saglk sertifikalari mevcut</li>
          </ul>
          <p className="text-pink-600 font-bold mt-4 text-center text-sm">Yetiskin Favorisi</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Tum paketlerimizde parti ekipmanlari profesyonel operatorleri ile birlikte gelir. Kombine paketlerde ozel indirimler uygulanir. Ayrica{' '}
        <Link to="/blog/dogum-gunu-organizasyonu-rehberi" className="text-orange-600 hover:text-orange-700 font-semibold underline">
          dogum gunu organizasyonu rehberimizden
        </Link>{' '}
        parti planlama ipuclarina da goz atabilirsiniz. Etkinlik tarihine gore muesaitlik durumu kontrol edilerek en uygun paket onerilir.
      </p>

      {/* Bolum 5 */}
      <h2 id="hijyen-guvenlik" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Hijyen ve Guvenlik Kurallari
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Gida guvenligi ve hijyen, parti ekipmanlari kiralama hizmetimizin en oncelikli konusudur. Ozellikle cocuk etkinliklerinde her detay titizlikle kontrol edilir. Ekiplerimiz gida uretim sertifikasina sahiptir ve duzenli saglik kontrolleri yapilmaktadir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h4 className="font-bold text-gray-900 mb-3">Ekipman Hijyeni</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Her etkinlik oncesi:</strong> Tum makineler sokulebilir parcalarina ayrilir, yikas sterilize edilir</li>
            <li><strong>Paslanmaz celik:</strong> Gida ile temas eden tum yuzeyler paslanmaz celik malzemeden uretilmistir</li>
            <li><strong>Tek kullanimlik malzeme:</strong> Cubuklar, kutular, pepceteler ve eldiveler tek kullanimliktir</li>
            <li><strong>Tasima:</strong> Ekipmanlar ozel kutularda, toz ve kirlenmeden korunarak tasinir</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h4 className="font-bold text-gray-900 mb-3">Gida Guvenligi</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Malzeme takibi:</strong> Tum hammaddeler (seker, misir, cikolata) markali ve sertifikali urunlerdir</li>
            <li><strong>Son kullanma tarihi:</strong> Her etkinlik icin taze malzeme kullanilir, stoktan kullanimdan kacinilir</li>
            <li><strong>Sicaklik kontrolu:</strong> Cikolata selalesi 40-45 derece, popcorn makinesi uygun sicaklikta calistirilir</li>
            <li><strong>Alerjen bilgi:</strong> Tum malzemelerin icerik listesi ailelerle paylasilir</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
          <h4 className="font-bold text-gray-900 mb-3">Alerji Onlemleri</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>On bilgilendirme:</strong> Etkinlik oncesinde alerji formu doldurulur</li>
            <li><strong>Alternatif urunler:</strong> Findik alerjisi icin findiksiz cikolata, gluten hassasiyeti icin ozel misir cesidi</li>
            <li><strong>Capraz bulasma onleme:</strong> Alerjik cocuk varsa ayri ekipman veya ayri servis alani olusturulur</li>
            <li><strong>Acil durum:</strong> Ekibimizde temel ilk yardim egitimi almis personel bulunur</li>
          </ul>
        </div>
      </div>

      {/* Bolum 6 */}
      <h2 id="etkinlik-onerileri" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Etkinlik Turlerine Gore Ikram Onerileri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Her etkinlik turu farkli ikram ihtiyaclarina sahiptir. Asagida farkli organizasyon turleri icin onerilen parti ekipmanlari kombinasyonlarini bulabilirsiniz:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
            <span className="text-2xl">🎂</span> Dogum Gunu Partisi (3-12 Yas)
          </h4>
          <p className="text-gray-700 text-sm mb-3">
            Cocuk dogum gunu organizasyonlarinda pamuk seker ve popcorn en populer ikili kombinasyondur. Cocuklar renkli pamuk sekeri secmekten, popcorn kutusu ile dolassmaktan cok keyif alir. Cikolata selalesi ile meyve sisleri ise pasta alternatifi olarak da degerlendirilir.
          </p>
          <p className="text-orange-600 text-sm font-semibold">Onerilen Paket: Pamuk Seker + Popcorn + Cikolata Selalesi (Uclu Paket)</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
            <span className="text-2xl">🏢</span> Kurumsal Etkinlik ve Sirket Parti
          </h4>
          <p className="text-gray-700 text-sm mb-3">
            Kurumsal organizasyonlarda cikolata selalesi ve meyve bari en cok tercih edilen secenektir. Premium cikolata cesitleri, sik sunum ve profesyonel servis ile kurumsal imaji destekler. Buyuk olcekli etkinliklerde birden fazla istasyon kurulabilir.
          </p>
          <p className="text-orange-600 text-sm font-semibold">Onerilen Paket: Cikolata Selalesi + Meyve Bari (Ozel Paket)</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
            <span className="text-2xl">🏫</span> Okul Senligi ve Kermesi
          </h4>
          <p className="text-gray-700 text-sm mb-3">
            Okul senliklerinde ve kermeslerde popcorn arabasi ve pamuk seker makinesi en cok ragbet goren ekipmanlardir. Yuksek kapasiteli makineler ve hizli servis ile yuzlerce ogrenciye kesintisiz ikram sunulabilir. Retro popcorn arabasi okul bahcesinde gorsel bir odak noktasi olusturur.
          </p>
          <p className="text-orange-600 text-sm font-semibold">Onerilen Paket: Pamuk Seker + Popcorn (Ikili Paket, cift makine)</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
            <span className="text-2xl">🎪</span> Acilis Organizasyonu ve Festival
          </h4>
          <p className="text-gray-700 text-sm mb-3">
            Magaza acilislarinda ve festivallerde parti ekipmanlari hem ikram hem de dikkat cekici gorseller olarak kullanilir. Popcorn arabasinin retro stili ve pamuk seker makinesinin renkli gosterisi, potansiyel musterilerin ilgisini ceker ve mekana trafik yonlendirir.
          </p>
          <p className="text-orange-600 text-sm font-semibold">Onerilen Paket: Uclu Paket + Ek Dekoratif Duzen</p>
        </div>
      </div>

      {/* Gercek Hikaye */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 mb-8 border border-orange-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">Gercek Hikaye: Ataskehir'de 7 Yas Dogum Gunu</h4>
        <p className="text-gray-700 text-sm mb-4">
          Gecen ay Atasehir'de 35 cocuklu bir dogum gunu organizasyonu icin uclu paketimizi kurduk. Pamuk seker makinesi bahce girisine, cikolata selalesi salon ortasina ve popcorn arabasi terasin kosesine yerlesti. Cocuklar once pamuk seker istasyonunda siralandi, herkes kendi rengini secti. Cikolata selalesinde cilek sisleri en populer secim oldu. Popcorn arabasi ise gece boyunca duraksiz calisti. Dogum gunu cocugunun annesi "Bu kadar organize bir parti hic gormedim, cocuklar hala konusuyor" dedi.
        </p>
        <p className="text-gray-600 text-xs italic">
          -- Selin H., Atasehir, 7 yas dogum gunu organizasyonu
        </p>
      </div>

      {/* Bolum 7 - SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Sik Sorulan Sorular (SSS)
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">? {faq.question}</h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Hizmet CTA */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pamuk Seker ve Parti Ekipmanlari Hizmetimiz</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Istanbul genelinde profesyonel pamuk seker makinesi, cikolata selalesi ve popcorn arabasi kiralama hizmeti sunuyoruz. Her turlu organizasyon ve gosteri icin ekipman ve operator destegiyle yaninizdayiz. Detayli bilgi ve fiyat teklifi icin hizmet sayfamizi ziyaret edin.
        </p>
        <Link
          to={relatedServicePath}
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {relatedServiceName} Hizmeti
        </Link>
      </div>

      {/* Son CTA */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Etkinliginiz Icin Hemen Teklif Alin!</h3>
        <p className="mb-6 leading-relaxed">
          Pamuk seker makinesi kiralama, cikolata selalesi ve popcorn arabasi ile unutulmaz bir organizasyon planlayalim. Istanbul'un her bolgesine profesyonel ekip ve ekipman ile gosteriye hazir geliyoruz. Ucretsiz kesfif ve fiyat teklifi icin hemen arayin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-orange-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Ara: +905307309009
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Pamuk%20%C5%9Feker%20ve%20parti%20ekipmanlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            WhatsApp ile Yazin
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

export default PamukSekerEtkinlikRehberi
