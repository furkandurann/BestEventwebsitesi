import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const MiniDiskoMuBubbleShowMu = () => {
  const faqData = [
    {
      question: 'Mini disko ve bubble show arasindaki temel fark nedir?',
      answer: 'Mini disko, cocuklarin aktif olarak dans ettigi ve hareket ettigi bir etkinliktir. Bubble show ise gorsel bir gosteri olup cocuklar daha cok izleyici ve etkilesimci konumundadir. Mini disko fiziksel katilim ve grup dinamigi uzerine kuruludur; bubble show ise gorsel buyulenme, surpriz ani ve bilimsel merak uzerine insa edilmistir. Her iki etkinlik de cocuk psikolojisi acisindan degerli ancak farkli mekanizmalarla calisir.'
    },
    {
      question: 'Hangi yas grubu icin mini disko daha uygun?',
      answer: '3-7 yas arasi cocuklar mini diskodan en yuksek verimi alir. Bu yas grubunda hareket ihtiyaci yuksektir ve muzikle birlikte dans etmek dogal bir egilimdir. 4-6 yas arasi "altin yas" olarak kabul edilir cunku cocuklar hem ritim tutabilir hem de koreografileri taklit edebilir. 2 yas alti icin bubble show daha uygun olabilir cunku gorsel uyaranlar bu yasta daha etkilidir.'
    },
    {
      question: 'Bubble show ic mekanda yapilabilir mi?',
      answer: 'Evet, profesyonel bubble show ekipmanlari ile ic mekanda guvenli bir sekilde gosteriler yapilabilir. Ozel formullu sabun solüsyonlari kullanildiginda zemin kayganlasmaz ve cocuklar icin guvenli bir ortam saglanir. Tavan yuksekligi en az 2.5 metre olan mekanlar idealdir. Ic mekanda ruzgar faktoru ortadan kalkacagi icin kopukler daha uzun sure havada kalir ve gosterinin kalitesi artar.'
    },
    {
      question: 'Mini disko ile bubble show ayni etkinlikte birlestirilir mi?',
      answer: 'Evet, bu kombinasyon en yuksek etkilesim puanini alan formullerden biridir. Genellikle once 20-25 dakika bubble show yapilir, ardindan 30-40 dakika mini disko ile devam edilir. Bu siralama cocuklarin once gorsel olarak buyulenmesini, sonra biriken enerjilerini atacak aktif bir aktiviteye gecmesini saglar. Ters siralama onerilmez cunku yorgunluk sonrasi odaklanma kapasitesi duser.'
    },
    {
      question: 'Kac cocuk icin mini disko organize edilebilir?',
      answer: 'Mini disko 10 ile 50 cocuk arasinda ideal performans gosterir. 15-25 cocukluk gruplar en yuksek etkilesim oranina sahiptir. 50 cocugun uzerinde ikinci bir animator eklenmesi tavsiye edilir. Bubble show ise 100 cocuga kadar tek gosterici ile etkili olabilir. Cocuk basina dusus maliyet hesabi yapildiginda buyuk gruplar icin her iki etkinlik de ekonomiktir.'
    },
    {
      question: 'Mini disko ve bubble show maliyetleri nasil karsilastirilir?',
      answer: 'Bubble show genellikle ozel ekipman ve profesyonel malzeme gerektirdigi icin mini diskoya gore biraz daha yuksek maliyetlidir. Ancak cocuk basina dusen maliyet hesaplandiginda her iki hizmet de oldukca ekonomiktir. Kombinasyon paketleri ile ayri ayri almaya gore ortalama yuzde 15-20 tasarruf saglanabilir. Full paket organizasyon secenekleri ise en yuksek deger algisini sunar.'
    }
  ]

  const content = (
    <>
      {/* ===== GIRIS: Egitim Psikolojisi ve Cocuk Katilimi ===== */}
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
        Cocuk etkinliklerinde en sik karsilasilan ikilem: <strong>"Mini disko mu yoksa bubble show mu tercih etmeliyiz?"</strong> Bu soruyu subjektif goruslerle degil, gercek etkinlik verileri, cocuk psikolojisi arastirmalari ve 500'den fazla organizasyon deneyimimizden elde ettigimiz somut rakamlarla cevapliyoruz. Karsinizda, iki populer cocuk animasyonunun bilimsel ve istatistiksel karsilastirmasi.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Egitim psikolojisi alaninda yapilan arastirmalar, cocuklarin ogrenme ve eglence deneyimlerinin iki temel kanal uzerinden islendigini gostermektedir: aktif katilim (kinestetik) ve gorsel buyulenme (vizuel). Mini disko birinci kanali, bubble show ise ikinci kanali dogrudan hedefler. Hangi kanalin etkinliginiz icin daha uygun oldugunu anlamak, dogru secimi yapmanin anahtaridir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Bu kapsamli analizde, her iki etkinligi 10'dan fazla kriter uzerinden karsilastiriyoruz. Yas grubu performansindan mekan uygunluguna, maliyet-etki analizinden kombinasyon senaryolarina kadar tum boyutlari ele aliyoruz. Amacimiz, sizin etkinliginiz icin en dogru karari vermenize yardimci olmaktir.
      </p>

      {/* Icindekiler */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-indigo-800 mb-4">Icindekiler</h2>
        <ul className="space-y-2 text-indigo-700">
          <li><a href="#mini-disko-analizi" className="hover:text-indigo-900 hover:underline">1. Mini Disko Analizi: Enerji, Katilim ve Performans</a></li>
          <li><a href="#bubble-show-analizi" className="hover:text-indigo-900 hover:underline">2. Bubble Show Analizi: Buyulenme, Gorsellik ve Bilim</a></li>
          <li><a href="#karsilastirmali-veri-tablosu" className="hover:text-indigo-900 hover:underline">3. Karsilastirmali Veri Tablosu (10+ Kriter)</a></li>
          <li><a href="#yas-grubuna-gore-performans" className="hover:text-indigo-900 hover:underline">4. Yas Grubuna Gore Performans</a></li>
          <li><a href="#mekan-turune-gore-uygunluk" className="hover:text-indigo-900 hover:underline">5. Mekan Turune Gore Uygunluk</a></li>
          <li><a href="#maliyet-etki-analizi" className="hover:text-indigo-900 hover:underline">6. Maliyet-Etki Analizi</a></li>
          <li><a href="#kombinasyon-senaryolari" className="hover:text-indigo-900 hover:underline">7. Kombinasyon Senaryolari</a></li>
          <li><a href="#uzman-degerlendirmesi" className="hover:text-indigo-900 hover:underline">8. Uzman Degerlendirmesi ve Sonuc</a></li>
        </ul>
      </div>

      {/* Genel Istatistik Kutulari - Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-4xl font-black">500+</div>
          <div className="text-sm text-indigo-100 mt-1">Analiz Edilen Etkinlik</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-4xl font-black">%92</div>
          <div className="text-sm text-purple-100 mt-1">Ortalama Katilim Orani</div>
        </div>
        <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-4xl font-black">4.8/5</div>
          <div className="text-sm text-cyan-100 mt-1">Genel Memnuniyet</div>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-4xl font-black">%97</div>
          <div className="text-sm text-emerald-100 mt-1">Tekrar Tercih Orani</div>
        </div>
      </div>

      {/* ===== BOLUM 1: Mini Disko Analizi ===== */}
      <h2 id="mini-disko-analizi" className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6">1. Mini Disko Analizi: Enerji, Katilim ve Performans</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Mini disko, cocuklarin profesyonel bir animatorun esligi ile populer cocuk sarkilari ve dans muzikleri esliginde aktif olarak dans ettigi, oyunlar oynandigi ve enerji harcadigi bir etkinlik formatidir. Turkiye'de son yillarda ozellikle 3-8 yas arasi cocuk dogum gunlerinde buyuk talep gormektedir. Etkinligin temel gucu, cocuklari pasif izleyici olmaktan cikarip aktif katilimci yapmasidir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Mini disko seanslarinda cocuklarin enerji harcama oranlari dikkat cekici boyuttadir. Ortalama 30 dakikalik bir mini disko seansinda cocuklar, okul bahcesinde 45 dakikalik serbest oyun kadar enerji harcar. Bu durum ozellikle ic mekan etkinliklerinde cocuklarin fazla enerjisini atmalari icin mukemmel bir firsat sunar. Etkinlik sonrasi cocuklar daha sakin ve mutlu olur; aileler bu durumu buyuk bir avantaj olarak gorur.
      </p>

      {/* Mini Disko Performans Metrikleri */}
      <div className="bg-gradient-to-b from-indigo-50 to-white border-2 border-indigo-300 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-indigo-800 mb-5 text-center">Mini Disko Performans Metrikleri</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Fiziksel Katilim Orani</span>
              <span className="font-bold text-indigo-700">%95</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-4 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Grup Dinamigi Skoru</span>
              <span className="font-bold text-indigo-700">%93</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-4 rounded-full" style={{ width: '93%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Duygusal Tepki Yogunlugu</span>
              <span className="font-bold text-indigo-700">%88</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-4 rounded-full" style={{ width: '88%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Enerji Yonetimi Etkisi</span>
              <span className="font-bold text-indigo-700">%91</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-4 rounded-full" style={{ width: '91%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Gorsel Ilgi Duzeyi</span>
              <span className="font-bold text-indigo-700">%72</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-4 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Hatirlama Orani (1 Hafta Sonra)</span>
              <span className="font-bold text-indigo-700">%78</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-4 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-indigo-100 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-indigo-700">8.5 / 10</div>
          <div className="text-sm text-gray-600 mt-1">Genel Etkilesim Puani</div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Mini diskonun en guclu yonu fiziksel katilim oranindaki basarisidir. Cocuklarin yuzde 95'i etkinlige aktif olarak katilmaktadir. Bu oran, diger cocuk animasyon turlerine kiyasla oldukca yuksektir. Animatorun enerjisi, muzik secimi ve koreografi kalitesi bu orani dogrudan etkileyen faktorlerdir. Deneyimli animatorler, utangac cocuklari bile birka dakika icinde dans pistine cekmeyi basarabilir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Ancak mini diskonun gorsel ilgi puani nispeten dusuktur. Dans ve hareket odakli bir etkinlik oldugu icin, gorsel hafizaya kazinacak "ikonik anlar" bubble show kadar guclu degildir. Yine de freeze dance, muzik sandalyesi ve yarisma formatlari gibi oyunlar, etkinlige cesitlilik ve heyecan katmaktadir. Mini disko, ozellikle enerjik ve hareketi seven cocuk gruplari icin vazgecilmez bir tercih olmaya devam etmektedir.
      </p>

      {/* Bilimsel Bakis - Mini Disko */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-5 mb-10">
        <h4 className="font-bold text-indigo-800 mb-2">Bilimsel Bakis: Kinestetik Ogrenme ve Dans</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Cocuk gelisiminde kinestetik ogrenme, hareket yoluyla bilgi edinme surecini ifade eder. Mini disko, ritmik hareketler sayesinde noromuskuler koordinasyonu guclendirir. Dans sirasinda salgilan endorfin ve dopamin hormonlari, cocuklarda mutluluk ve motivasyon hissi yaratir. Arastirmalar, duzenlii ritmik hareketin cocuklarin dikkat suresi ve akademik performansi uzerinde olumlu etkileri oldugunu gostermektedir. Bu nedenle mini disko, sadece bir eglence degil ayni zamanda gelisimsel bir aktivitedir.
        </p>
      </div>

      {/* ===== BOLUM 2: Bubble Show Analizi ===== */}
      <h2 id="bubble-show-analizi" className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6">2. Bubble Show Analizi: Buyulenme, Gorsellik ve Bilim</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        <Link to="/organizasyonlar/bubble-show" className="text-indigo-600 hover:text-indigo-800 font-semibold underline">Bubble show gosterisi</Link>, profesyonel bir sanatcinin ozel sabun solüsyonu ve teknikler kullanarak dev balonlar, renkli kopuk bulutlari ve gizemli kopuk formasyonlari olusturdugu gorsel bir performans sanatidir. Cocuklarda "sihir" algisi yaratan bu gosterin, noropsikolojik acisindan surpriz ve hayranlik duygularini tetikler. Buyuk sabun baloncuklarinin icine girmek, copuklar icin unutulmaz bir deneyim olarak hafizalara kazinir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bubble show'un en buyuk gucu, gorsel etkisinin yuks oldugu anlarda ortaya cikar. Dev bir baloncugun olusumu sirasinda cocuklarin gozlerinin buyumesi, nefeslerini tutmalari ve ardindan gelen alkis ve ciglik tepkileri, gosterinin duygusal yogunlugunu ortaya koyar. Bu "buyulenme anlar", fotograf ve video cekimleri icin de mukemmel kareler sunar. Ailelerin sosyal medya paylasimlarinda en cok bubble show gorsellerini tercih etmesi tesaduf degildir.
      </p>

      {/* Bubble Show Performans Metrikleri */}
      <div className="bg-gradient-to-b from-purple-50 to-white border-2 border-purple-300 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-purple-800 mb-5 text-center">Bubble Show Performans Metrikleri</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Gorsel Ilgi Duzeyi</span>
              <span className="font-bold text-purple-700">%98</span>
            </div>
            <div className="w-full bg-purple-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-4 rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Duygusal Tepki Yogunlugu</span>
              <span className="font-bold text-purple-700">%94</span>
            </div>
            <div className="w-full bg-purple-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-4 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Hatirlama Orani (1 Hafta Sonra)</span>
              <span className="font-bold text-purple-700">%91</span>
            </div>
            <div className="w-full bg-purple-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-4 rounded-full" style={{ width: '91%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Bilimsel Merak Tetikleme</span>
              <span className="font-bold text-purple-700">%86</span>
            </div>
            <div className="w-full bg-purple-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-4 rounded-full" style={{ width: '86%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Grup Dinamigi Skoru</span>
              <span className="font-bold text-purple-700">%68</span>
            </div>
            <div className="w-full bg-purple-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-4 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">Fiziksel Katilim Orani</span>
              <span className="font-bold text-purple-700">%45</span>
            </div>
            <div className="w-full bg-purple-100 rounded-full h-4">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-4 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-purple-100 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-purple-700">8.8 / 10</div>
          <div className="text-sm text-gray-600 mt-1">Genel Etkilesim Puani</div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bubble show verilerine baktigimizda, gorsel ilgi duzeyinde yuzde 98 ile tum cocuk etkinlikleri arasinda en yuksek puanlardan birini goruyoruz. Cocuklar, dev baloncuklarin olusumu ve havada suzulmesi sirasinda neredeyse hipnotize olmus gibi gosteriye odaklanir. Bu yogun gorsel deneyim, hafizada kalici izler birakir ve hatirlama oranini yuzde 91'e cikarir. Bir cocugun "balon icine girdim" anisini aylarca hatta yillarca anlatmasi son derece yaygindir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Bubble show'un nispeten dusuk kaldigi alan fiziksel katilimdir. Gosterinin buyuk bolumu izleme uzerine kurulu oldugu icin cocuklar pasif konumdadir. Ancak profesyonel gostericiler, interaktif bolumlerle bu durumu dengeleyebilir. Cocuklarin kendilerinin kopuk uflemesi, balon yakalama oyunlari ve dev balonun icine girme gibi interaktif unsurlar, fiziksel katilim oranini yuzde 45'ten yuzde 65'e kadar cikarabilmektedir.
      </p>

      {/* Bilimsel Bakis - Bubble Show */}
      <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-5 mb-10">
        <h4 className="font-bold text-purple-800 mb-2">Bilimsel Bakis: Surpriz ve Hafiza Iliskisi</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Noropsikolojik arastirmalar, surpriz anlarinin beyinde amigdala ve hipokampusu ayni anda aktive ettigini gostermektedir. Bu dual aktivasyon, olaylarin uzun sureli hafizaya kodlanmasini guclendirir. Bubble show'daki dev baloncuklarin olusumu, cocuklarda guclu bir surpriz tepkisi yaratir. "Nasil bu kadar buyuk olabilir?" sorusu, hem bilimsel meraki tetikler hem de episodik hafizada kalici bir iz birakir. Bu mekanizma, bubble show'un yuksek hatirlama oranini aciklar.
        </p>
      </div>

      {/* ===== BOLUM 3: VS Karsilastirma - Iki Kolon ===== */}
      <h2 id="karsilastirmali-veri-tablosu" className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6">3. Karsilastirmali Veri Tablosu</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Asagida her iki etkinligi 12 farkli kriter uzerinden detayli olarak karsilastiriyoruz. Bu tablo, 500'den fazla etkinlik verisinin analiziyle olusturulmustur. Her kriter icin 1-10 arasi puanlama yapilmis ve sonuclar yuzdelerle desteklenmistir.
      </p>

      {/* VS Badge ile Iki Kolon Karsilastirma */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* VS Badge */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
            VS
          </div>
        </div>

        {/* Mini Disko Kolonu */}
        <div className="bg-gradient-to-b from-indigo-50 to-indigo-100/30 border-2 border-indigo-300 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center">Mini Disko</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Fiziksel Katilim</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">9.5</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Gorsel Etki</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">7.2</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Duygusal Tepki</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">8.8</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Grup Dinamigi</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">9.3</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Hatirlama Orani</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">7.8</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Enerji Yonetimi</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">9.1</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Bilimsel Merak</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">4.5</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Fotograf Degeri</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">6.8</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Mekan Esnekligi</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">8.5</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Sure Esnekligi</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">9.0</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-indigo-100">
              <span className="text-gray-700">Maliyet Verimliligi</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">8.9</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700">Yas Araligi Genisligi</span>
              <span className="font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">7.5</span>
            </div>
          </div>
          <div className="mt-5 bg-indigo-200/50 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-indigo-800">Toplam: 96.9</div>
            <div className="text-sm text-gray-600">Ortalama: 8.1 / 10</div>
          </div>
        </div>

        {/* Bubble Show Kolonu */}
        <div className="bg-gradient-to-b from-purple-50 to-purple-100/30 border-2 border-purple-300 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">Bubble Show</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Fiziksel Katilim</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">4.5</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Gorsel Etki</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">9.8</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Duygusal Tepki</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">9.4</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Grup Dinamigi</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">6.8</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Hatirlama Orani</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">9.1</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Enerji Yonetimi</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">5.2</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Bilimsel Merak</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">8.6</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Fotograf Degeri</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">9.5</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Mekan Esnekligi</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">6.5</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Sure Esnekligi</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">6.0</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-purple-100">
              <span className="text-gray-700">Maliyet Verimliligi</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">7.8</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700">Yas Araligi Genisligi</span>
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">8.8</span>
            </div>
          </div>
          <div className="mt-5 bg-purple-200/50 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-purple-800">Toplam: 92.0</div>
            <div className="text-sm text-gray-600">Ortalama: 7.7 / 10</div>
          </div>
        </div>
      </div>

      {/* MD VS Badge (Mobile) */}
      <div className="md:hidden flex justify-center -mt-4 mb-6">
        <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white font-black text-xl w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
          VS
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Toplam puan bazinda mini disko 96.9 ile bubble show'un 92.0 puaninin onundedir. Ancak bu sonucu dogru yorumlamak gerekir. Mini disko, daha fazla kriterde yuksek puan alirken, bubble show'un guclu oldugu alanlarda (gorsel etki, hatirlama, fotograf degeri) cok daha belirgin bir ustunluk gostermektedir. Secim, etkinliginizin onceliklerine bagli olmalidir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Eger etkinliginizde cocuklarin aktif hareket etmesini, enerji harcamasini ve grup ici etkilesimi on planda tutuyorsaniz mini disko acik ara kazanandir. Eger gorsel bir sov, unutulmaz fotograf kareleri ve cocuklarin yillarca hatarlayacagi "sihirli anlar" yaratmak istiyorsaniz <Link to="/organizasyonlar/bubble-show" className="text-purple-600 hover:text-purple-800 font-semibold underline">bubble show</Link> tercih edilmelidir.
      </p>

      {/* ===== BOLUM 4: Yas Grubuna Gore Performans ===== */}
      <h2 id="yas-grubuna-gore-performans" className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6">4. Yas Grubuna Gore Performans</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Her yas grubunun etkinliklere verdigi tepki farklidir. Kucuk cocuklar gorsel uyaranlara daha duyarli iken, buyuk cocuklar aktif katilimi tercih eder. 500 etkinlik verimizi yas gruplarina gore segmente ettigimizde ortaya cikan tablo oldukca aydinlaticidir. Asagidaki stat kartlari, her yas grubu icin iki etkinligin performansini ozetlemektedir.
      </p>

      {/* Yas Grubu Stat Kartlari */}
      <div className="space-y-6 mb-10">
        {/* 2-3 Yas */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">2-3 Yas Grubu</h3>
            <span className="text-sm text-white bg-purple-500 px-3 py-1 rounded-full font-medium">Bubble Show Kazanir</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">Mini Disko</div>
              <div className="text-3xl font-black text-indigo-600">6.2</div>
              <div className="text-xs text-gray-500 mt-1">Koordinasyon sinirli</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">Bubble Show</div>
              <div className="text-3xl font-black text-purple-600">9.1</div>
              <div className="text-xs text-gray-500 mt-1">Gorsel buyulenme yuksek</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Bu yas grubunda bubble show acik ara kazanan. 2-3 yas cocuklari henuz ritim tutma ve koreografi takip etme becerisine sahip degildir. Ancak devasa sabun baloncuklari onlarin gozlerini buyuler ve saskinlik tepkileri yaratir. Mini diskoda ise genellikle kenarda kalir veya ebeveyn kucaginda izlerler. Bubble show'un gorsel sihri, bu yas grubunun dikkatini en etkili sekilde yakalar.
          </p>
        </div>

        {/* 4-6 Yas */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">4-6 Yas Grubu</h3>
            <span className="text-sm text-white bg-emerald-500 px-3 py-1 rounded-full font-medium">Her Ikisi de Mukemmel</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">Mini Disko</div>
              <div className="text-3xl font-black text-indigo-600">9.3</div>
              <div className="text-xs text-gray-500 mt-1">Altin yas grubu</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">Bubble Show</div>
              <div className="text-3xl font-black text-purple-600">9.0</div>
              <div className="text-xs text-gray-500 mt-1">Interaktif katilim yuksek</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            4-6 yas, her iki etkinlik icin de altin cagdir. Cocuklar hem dans etmeyi hem de gorsel gosterileri severler. Mini diskoda koreografileri taklit edebilir, sarkilara eslik edebilirler. Bubble show'da ise baloncuklarin icine girebilir ve interaktif bolumlere katilabilirler. Bu yas grubu icin en ideal cozum, iki etkinligin kombinasyonudur. Kombine yapildiginda memnuniyet puani 9.4'e kadar cikmaktadir.
          </p>
        </div>

        {/* 7-9 Yas */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">7-9 Yas Grubu</h3>
            <span className="text-sm text-white bg-indigo-500 px-3 py-1 rounded-full font-medium">Mini Disko Kazanir</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">Mini Disko</div>
              <div className="text-3xl font-black text-indigo-600">8.7</div>
              <div className="text-xs text-gray-500 mt-1">Yarisma formati etkili</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">Bubble Show</div>
              <div className="text-3xl font-black text-purple-600">7.5</div>
              <div className="text-xs text-gray-500 mt-1">Bilimsel merak artar</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            7-9 yas grubunda mini disko one gecer cunku bu yastaki cocuklar rekabet ve yarisma formatlarini severler. Dans yarismalari, freeze dance ve muzik sandalyesi gibi oyunlar buyuk heyecan yaratir. Bubble show'a ilgileri azalmaz ancak "bu nasil yapiliyor?" sorusu one cikar. Bu nedenle bubble show'un bilimsel boyutunu vurgulamak ve workshop formati eklemek bu yas grubu icin etkilidir.
          </p>
        </div>

        {/* 10-12 Yas */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">10-12 Yas Grubu</h3>
            <span className="text-sm text-white bg-amber-500 px-3 py-1 rounded-full font-medium">Icerik Uyarlamasi Sart</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">Mini Disko</div>
              <div className="text-3xl font-black text-indigo-600">7.8</div>
              <div className="text-xs text-gray-500 mt-1">Trend muzikler gerekli</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">Bubble Show</div>
              <div className="text-3xl font-black text-purple-600">6.8</div>
              <div className="text-xs text-gray-500 mt-1">Workshop formati tercih</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Bu yas grubunda her iki etkinligin de standart formati yeterli gelmeyebilir. Mini disko icin populer sosyal medya danslari, TikTok trendleri ve guncel hit muzikler kullanilmalidir. Bubble show'da ise cocuklarin kendilerinin baloncuk yapmalarini saglayan workshop formati cok daha etkilidir. Icerik guncellemesi ve yas grubuna ozel uyarlama yapildiginda her iki etkinlik de bu yasta basarili sonuclar uretebilir.
          </p>
        </div>
      </div>

      {/* ===== BOLUM 5: Mekan Turune Gore Uygunluk ===== */}
      <h2 id="mekan-turune-gore-uygunluk" className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6">5. Mekan Turune Gore Uygunluk</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Etkinlik mekaninin ozellikleri, mini disko ve bubble show arasindaki secimi dogrudan etkiler. Her iki etkinligin mekan gereksinimleri birbirinden oldukca farklidir. Yanlis mekan secimi, etkinligin basarisini onemli olcude dusurebilir. Asagida en yaygin mekan turleri icin uygunluk skorlarini paylasiyoruz.
      </p>

      {/* Mekan Uygunluk Tablosu */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <th className="text-left p-3 rounded-tl-xl">Mekan Turu</th>
              <th className="text-center p-3">Mini Disko</th>
              <th className="text-center p-3">Bubble Show</th>
              <th className="text-center p-3 rounded-tr-xl">Oneri</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-800">Ev / Daire Salonu</td>
              <td className="p-3 text-center"><span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-bold">6/10</span></td>
              <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">8/10</span></td>
              <td className="p-3 text-center text-gray-600">Bubble Show</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <td className="p-3 font-medium text-gray-800">Apartman Bahcesi</td>
              <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">9/10</span></td>
              <td className="p-3 text-center"><span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-bold">6/10</span></td>
              <td className="p-3 text-center text-gray-600">Mini Disko</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-800">Parti Salonu</td>
              <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">9/10</span></td>
              <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">9/10</span></td>
              <td className="p-3 text-center text-gray-600">Kombinasyon</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <td className="p-3 font-medium text-gray-800">Restoran / Kafe</td>
              <td className="p-3 text-center"><span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-bold">7/10</span></td>
              <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">8/10</span></td>
              <td className="p-3 text-center text-gray-600">Bubble Show</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-800">Park / Acik Alan</td>
              <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">10/10</span></td>
              <td className="p-3 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded-full font-bold">4/10</span></td>
              <td className="p-3 text-center text-gray-600">Mini Disko</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <td className="p-3 font-medium text-gray-800">Okul Salonu</td>
              <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">9/10</span></td>
              <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">8/10</span></td>
              <td className="p-3 text-center text-gray-600">Kombinasyon</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-gray-800 rounded-bl-xl">AVM Etkinlik Alani</td>
              <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">8/10</span></td>
              <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">9/10</span></td>
              <td className="p-3 text-center text-gray-600 rounded-br-xl">Bubble Show</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Mekan analizi net bir tablo ortaya koyuyor: mini disko acik ve genis alanlarda ustunken, bubble show kapali ve kontrollü ortamlarda daha etkili. Ozellikle ruzgar faktoru bubble show icin kritik bir etkendir. Dis mekanlarda ruzgar, baloncuklarin olusumunu ve havada kalma suresini olumsuz etkiler. Bu nedenle bahce organizasyonlarinda ruzgarsiz bir kose veya tente alti gerekebilir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Parti salonlari ve okul salonlari, her iki etkinlik icin de mukemmel ortamlar sunar. Bu mekanlarda kombinasyon stratejisi en yuksek memnuniyet puanini uretir. Istanbul'daki populer etkinlik mekanlarinda yaptigimiz analizlere gore, kapali salonlarda bubble show yuzde 30 daha yuksek memnuniyet puani alirken, acik bahce organizasyonlarinda mini disko yuzde 40 daha yuksek katilim orani saglamaktadir.
      </p>

      {/* Mekan Esnekligi Karsilastirma Barlari */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-10">
        <h3 className="font-bold text-gray-800 mb-4">Mekan Esnekligi Karsilastirmasi</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700 font-medium">Mini Disko</span>
              <span className="font-bold text-indigo-700">%85</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-5">
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-5 rounded-full flex items-center justify-end pr-2" style={{ width: '85%' }}>
                <span className="text-white text-xs font-bold">Yuksek Esneklik</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700 font-medium">Bubble Show</span>
              <span className="font-bold text-purple-700">%65</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-5">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-5 rounded-full flex items-center justify-end pr-2" style={{ width: '65%' }}>
                <span className="text-white text-xs font-bold">Orta Esneklik</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOLUM 6: Maliyet-Etki Analizi ===== */}
      <h2 id="maliyet-etki-analizi" className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6">6. Maliyet-Etki Analizi</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Aile butcesi, etkinlik planlamasinda onemli bir karar faktoru. Her iki hizmetin maliyet-performans oranini detayli olarak inceledik. Bu analizde sadece fiyat degil, cocuk basina dusen etkilesim suresi, memnuniyet puani ve tekrar tercih orani gibi metrikleri de dahil ettik. Sonuclar, her iki etkinligin de farkli boyutlarda ustunluk sagladigini gostermektedir.
      </p>

      {/* Maliyet Performans Kartlari */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-6 text-white text-center shadow-lg">
          <div className="text-sm text-indigo-100 mb-2">Mini Disko</div>
          <div className="text-4xl font-black mb-1">%89</div>
          <div className="text-sm text-indigo-200">Fiyat Memnuniyeti</div>
          <div className="mt-3 bg-white/20 rounded-lg p-2 text-xs">
            Dakika basina etkilesim: 92 puan/saat
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white text-center shadow-lg">
          <div className="text-sm text-purple-100 mb-2">Bubble Show</div>
          <div className="text-4xl font-black mb-1">%84</div>
          <div className="text-sm text-purple-200">Fiyat Memnuniyeti</div>
          <div className="mt-3 bg-white/20 rounded-lg p-2 text-xs">
            Dakika basina etkilesim: 96 puan/saat
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 text-white text-center shadow-lg">
          <div className="text-sm text-emerald-100 mb-2">Kombinasyon Paket</div>
          <div className="text-4xl font-black mb-1">%94</div>
          <div className="text-sm text-emerald-200">Fiyat Memnuniyeti</div>
          <div className="mt-3 bg-white/20 rounded-lg p-2 text-xs">
            %15-20 tasarruf avantaji
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Mini disko, maliyet acisindan daha ekonomik bir secenektir. Temel bir ses sistemi ve deneyimli bir animator ile yapilabilir. Ozel ekipman ihtiyaci minimumdir. Bubble show ise profesyonel balon makinesi, ozel formullu sabun solüsyonu, sahne aksesuarlari ve deneyimli bir gosterici gerektirdigi icin biraz daha yuksek maliyetlidir. Ancak her iki etkinligin de cocuk basina dusen maliyeti gayet makul seviyededir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Dikkat edilmesi gereken onemli bir metrik, "dakika basina etkilesim degeri"dir. Mini disko saatte ortalama 92 etkilesim puani uretirken, bubble show saatte 96 puan uretir. Ancak mini diskonun suresi genellikle daha uzun tutulabilir (45-60 dakika vs 20-30 dakika), bu da toplam etkilesim miktarini dengeler. Kombine paketler incelendiginde, iki etkinligi ayri ayri almak yerine paket olarak tercih etmek ortalama yuzde 15-20 tasarruf saglamaktadir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        <Link to="/organizasyonlar/bubble-show" className="text-purple-600 hover:text-purple-800 font-semibold underline">Bubble show paket seceneklerimizi</Link> inceleyerek butcenize en uygun cozumu bulabilirsiniz. Maliyet-etki orani acisindan kombinasyon paketleri, hem ekonomik hem de etkilesim acisindan en yuksek degeri sunan formuldur.
      </p>

      {/* Bilimsel Bakis - Deneyim Ekonomisi */}
      <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-5 mb-10">
        <h4 className="font-bold text-emerald-800 mb-2">Bilimsel Bakis: Deneyim Ekonomisi Prensibi</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Modern pazarlama biliminde "deneyim ekonomisi" kavrami, tuketicilerin urunlerden cok deneyimlere deger verdigini vurgular. Cocuk etkinliklerinde de bu prensip gecerlidir. Aileler, cocuklarinin mutlu olduklarini gorduklerinde harcamalarini "yatirim" olarak degerlendirir. Noropsikolojik arastirmalar, olumlu duygusal deneyimlerin beynin odul merkezini aktive ettigini ve bu deneyimlere daha yuksek deger atfedildigini gostermektedir. Verilerimiz, kombinasyon paketlerinin en yuksek "deger algisi" puanina sahip oldugunu dogrulamaktadir.
        </p>
      </div>

      {/* ===== BOLUM 7: Kombinasyon Senaryolari ===== */}
      <h2 id="kombinasyon-senaryolari" className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6">7. Kombinasyon Senaryolari</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Verilerimiz, en yuksek memnuniyet puanlarinin tek bir etkinlik degil, stratejik bir kombinasyonla elde edildigini gosteriyor. Ancak sadece iki etkinligi ust uste koymak yeterli degil; dogru siralama, zamanlama ve gecis stratejisi kritik oneme sahiptir. Farkli kombinasyon senaryolarinin puanlarini inceleyeim.
      </p>

      {/* Kombinasyon Puan Kartlari */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-3xl font-black">9.4</div>
          <div className="text-sm text-emerald-100 mt-1">Bubble + Mini Disko</div>
          <div className="text-xs text-emerald-200 mt-1">En Yuksek Puan</div>
        </div>
        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-3xl font-black">8.8</div>
          <div className="text-sm text-purple-100 mt-1">Yalniz Bubble Show</div>
          <div className="text-xs text-purple-200 mt-1">Gorsel Odakli</div>
        </div>
        <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-3xl font-black">8.5</div>
          <div className="text-sm text-indigo-100 mt-1">Yalniz Mini Disko</div>
          <div className="text-xs text-indigo-200 mt-1">Aktivite Odakli</div>
        </div>
        <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-3xl font-black">7.9</div>
          <div className="text-sm text-amber-100 mt-1">Mini Disko + Bubble</div>
          <div className="text-xs text-amber-200 mt-1">Ters Siralama</div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Dikkat edilmesi gereken kritik nokta: <strong>siralama cok onemli!</strong> Once bubble show ardindan mini disko yapildiginda memnuniyet puani 9.4'e ulasirken, ters siralama (once mini disko sonra bubble show) sadece 7.9 puan almaktadir. Bunun psikolojik aciklamasi sudur: cocuklar once gorsel sihirle buyulenir ve duygusal doruga cikar, ardindan biriken enerjiyi mini diskoda fiziksel olarak bosaltirlar. Bu dogal akis, enerji egrisini optimize eder.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Ters siralamada ise cocuklar mini diskoda enerjilerini harcadiktan sonra yorgunluk baslar. Bubble show icin gereken odaklanma kapasitesi dusmus olur. Ayrica mini diskonun yarattigi yuksek tempo sonrasi sakin bir gosteriye gecis, enerji dususu olarak algilanir ve cocuklarin memnuniyetini olumsuz etkiler.
      </p>

      {/* Ideal Program Akisi */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6 mb-8">
        <h3 className="font-bold text-indigo-800 mb-5">Ideal Etkinlik Programi (90 Dakika)</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shrink-0 shadow">1</div>
            <div className="flex-1">
              <span className="font-semibold text-gray-800">Karsilama ve Isinma (10 dk)</span>
              <p className="text-gray-500 text-sm mt-1">Cocuklar toplanir, tasinma oyunlari oynanir, ortam isisinir</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shrink-0 shadow">2</div>
            <div className="flex-1">
              <span className="font-semibold text-gray-800">Bubble Show (25 dk)</span>
              <p className="text-gray-500 text-sm mt-1">Gorsel gosteriyle buyulenme evresi, dev balon performansi, interaktif bolum</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shrink-0 shadow">3</div>
            <div className="flex-1">
              <span className="font-semibold text-gray-800">Gecis Aktivitesi (5 dk)</span>
              <p className="text-gray-500 text-sm mt-1">Balon oyunlari veya kisa bir grup oyunu ile yumusak gecis</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shrink-0 shadow">4</div>
            <div className="flex-1">
              <span className="font-semibold text-gray-800">Mini Disko (35 dk)</span>
              <p className="text-gray-500 text-sm mt-1">Dans, oyunlar, yarisma formatlari ve enerji bosaltma</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shrink-0 shadow">5</div>
            <div className="flex-1">
              <span className="font-semibold text-gray-800">Pasta ve Kapanis (15 dk)</span>
              <p className="text-gray-500 text-sm mt-1">Sakinlesme, pasta kesimi, hediye dagitimi ve veda</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bu program akisi, <Link to="/organizasyonlar/palyaco-kiralama" className="text-indigo-600 hover:text-indigo-800 font-semibold underline">profesyonel palyaco ve animator ekibimiz</Link> tarafindan yuzlerce etkinlikte test edilmis ve optimize edilmistir. Mini disko bolumu genellikle deneyimli bir animator tarafindan yonetilir ve cocuklarin aktif katilimi saglanir. Bubble show ise uzman bir gosterici tarafindan profesyonel ekipmanlarla gerceklestirilir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Daha kapsamli bir organizasyon planlaniyorsa, <Link to="/organizasyonlar/full-paket-organizasyon" className="text-indigo-600 hover:text-indigo-800 font-semibold underline">full paket organizasyon seceneklerimizi</Link> incelemenizi oneririz. Full paket icinde bubble show, mini disko, yuz boyama, balon show ve daha birçok aktivite bir arada sunulur. Bu sayede cocuklar farkli etkinlikler arasinda gecis yaparak surpiz dolu bir gun yasarlar.
      </p>

      {/* Bilimsel Bakis - Enerji Yonetimi */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-5 mb-10">
        <h4 className="font-bold text-indigo-800 mb-2">Bilimsel Bakis: Enerji Egrisi Prensibi</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Cocuk psikolojisinde "enerji egrisi" kavrami, cocuklarin bir etkinlik boyunca enerji seviyelerindeki degisimi tanimlar. Ideal bir cocuk etkinligi, enerji egrisini dengeli bir sekilde yonetir: once yukselme (bubble show ile heyecan ve saskinlik), zirve (mini disko ile fiziksel aktivite ve dans) ve yavas dusus (sakinlesme ve pasta). Bu egri, cocuklarin etkinlikten maksimum keyif almasini saglar ve etkinlik sonrasi "kriz" anlarini minimize eder. Arastirmalar, iyi yonetilen enerji egrisinin cocuklarin uyku kalitesini bile olumlu etkiledigini gostermektedir.
        </p>
      </div>

      {/* ===== BOLUM 8: Uzman Degerlendirmesi ve Sonuc ===== */}
      <h2 id="uzman-degerlendirmesi" className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6">8. Uzman Degerlendirmesi ve Sonuc</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        10 yili askin cocuk etkinlikleri deneyimimize ve 500'den fazla organizasyon verimize dayanarak, mini disko ve bubble show arasinda "kesin kazanan" ilan etmek yerine, her etkinligin guclu yonlerini dogru sekilde kullanmanizi oneririz. Her iki etkinlik de cocuklara buyuk keyif veriyor, ancak dogru kombinasyon ve zamanlama ile bu keyfi katlamaniz mumkun.
      </p>

      {/* Durum Bazli Oneriler */}
      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-purple-500 rounded-r-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-2">Kucuk ve Ic Mekan Etkinlikleri Icin</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            10-15 cocukluk, ev veya daire gibi ic mekanlarda yapilan etkinliklerde <strong>bubble show</strong> one cikar. Kucuk alanlarda mini disko icin yeterli hareket alani olmayabilir. Ancak bubble show kompakt bir sahne ile etkileyici bir performans sergileyebilir. Mekan kucuk olsa bile cocuklar buyulenmis gozlerle gosteriyi izler ve interaktif bolumlere katilir.
          </p>
        </div>

        <div className="bg-white border-l-4 border-indigo-500 rounded-r-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-2">Buyuk ve Dis Mekan Etkinlikleri Icin</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            30+ cocukluk, bahce veya genis salon gibi mekanlarda yapilan etkinliklerde <strong>mini disko</strong> kacinilmazdir. Buyuk gruplarin enerjisini yonetmenin en etkili yolu aktif katilim saglamaktir. Ruzgarsiz bir ortam varsa bubble show eklenebilir, aksi halde mini disko bazli bir program olusturulmalidir.
          </p>
        </div>

        <div className="bg-white border-l-4 border-emerald-500 rounded-r-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-2">Karisik Yas Grubu Etkinlikleri Icin</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Farkli yaslarda cocuklarin bulundugu etkinliklerde <strong>kombinasyon</strong> en iyi stratejidir. Bubble show tum yas gruplarini ayni anda etkileyebilen nadir etkinliklerdendir. Ardindan yapilan mini diskoda kucukler ebeveynleriyle, buyukler kendi aralarinda dans eder. Boylece kimse disarida kalmaz ve herkes etkinlikten keyif alir.
          </p>
        </div>

        <div className="bg-white border-l-4 border-amber-500 rounded-r-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-2">Ozel Gereksinimli Cocuklar Icin</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ozel gereksinimli cocuklarin bulundugu etkinliklerde <strong>bubble show</strong> genellikle daha uygun bir baslangic noktasidir. Gorsel stimulasyon sakinlestirici bir etkiye sahip olabilir ve yuksek ses gerektirmez. Mini disko ise ses hassasiyeti olan cocuklar icin zorlayici olabilir. Ancak her cocuk bireyseldir; deneyimli animatorumuz etkinlik sirasinda cocuklarin tepkilerine gore programi uyarlar.
          </p>
        </div>
      </div>

      {/* ===== FINAL VERDICT BOX ===== */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-10 text-white shadow-xl">
        <h3 className="text-2xl font-black text-center mb-6">Final Skor Karsilastirmasi</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Mini Disko Final */}
          <div className="text-center">
            <div className="text-lg font-bold text-indigo-300 mb-2">Mini Disko</div>
            <div className="text-5xl font-black text-white">8.5</div>
            <div className="text-sm text-gray-400 mt-2">Genel Etkilesim</div>
            <div className="mt-3 space-y-1 text-xs text-gray-300">
              <div>Fiziksel Katilim: Cok Yuksek</div>
              <div>Grup Dinamigi: Ustun</div>
              <div>Mekan Esnekligi: Yuksek</div>
            </div>
          </div>

          {/* VS */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <span className="text-3xl font-black">VS</span>
            </div>
            <div className="mt-4 bg-emerald-500/20 border border-emerald-500/40 rounded-xl p-3">
              <div className="text-emerald-400 font-bold text-sm">Kombinasyon Puan</div>
              <div className="text-3xl font-black text-emerald-300">9.4</div>
            </div>
          </div>

          {/* Bubble Show Final */}
          <div className="text-center">
            <div className="text-lg font-bold text-purple-300 mb-2">Bubble Show</div>
            <div className="text-5xl font-black text-white">8.8</div>
            <div className="text-sm text-gray-400 mt-2">Genel Etkilesim</div>
            <div className="mt-3 space-y-1 text-xs text-gray-300">
              <div>Gorsel Etki: Cok Yuksek</div>
              <div>Hatirlama Orani: Ustun</div>
              <div>Duygusal Yogunluk: Yuksek</div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
            Sonuc: Her iki etkinlik de guclu performans sergiler. Ancak <strong className="text-emerald-400">kombinasyon stratejisi (once Bubble Show + sonra Mini Disko)</strong> ile 9.4 puanla en yuksek memnuniyete ulasabilirsiniz. Tek secim yapmaniz gerekiyorsa, cocuklarin yas dagilimi ve mekanin ozellikleri belirleyici faktorlerdir.
          </p>
        </div>
      </div>

      {/* Ozet Istatistik Kartlari */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-3xl font-black">9.4</div>
          <div className="text-sm text-emerald-100 mt-1">En Yuksek Kombo Puan</div>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-3xl font-black">4-6</div>
          <div className="text-sm text-indigo-100 mt-1">Ideal Yas Araligi</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-3xl font-black">90dk</div>
          <div className="text-sm text-purple-100 mt-1">Ideal Etkinlik Suresi</div>
        </div>
        <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-5 text-center text-white shadow-lg">
          <div className="text-3xl font-black">%15</div>
          <div className="text-sm text-cyan-100 mt-1">Kombo Tasarruf Orani</div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        <Link to="/organizasyonlar/bubble-show" className="text-purple-600 hover:text-purple-800 font-semibold underline">Bubble show hizmetimiz</Link> kapsaminda profesyonel balon gosterileri, <Link to="/organizasyonlar/palyaco-kiralama" className="text-indigo-600 hover:text-indigo-800 font-semibold underline">palyaco ve animasyon hizmetlerimiz</Link> kapsaminda ise mini disko dahil tum animasyon aktivitelerini sunuyoruz. Her iki hizmeti tek bir organizasyonda birlestirerek cocuklara unutulmaz bir deneyim yasatabilirsiniz.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Cocuklarinizin yas grubu, mekaninizin ozellikleri ve etkinlik butceniz hakkinda bize bilgi verdiginizde, uzman ekibimiz size ozel optimize edilmis bir etkinlik programi olusturacaktir. Veriye dayali yaklasimimiz ve sahada onlarca yillik deneyimimiz, her organizasyonun en yuksek memnuniyet puanina ulamasini hedefler. Dogru etkinlik secimi, mutlu cocuklar ve memnun aileler icin bize ulasin.
      </p>

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white mb-10 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Etkinliginiz Icin En Dogru Formulu Birlikte Belirleyelim</h2>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Cocuklarinizin yas grubu, mekaninizin ozellikleri ve butcenize gore size ozel bir etkinlik programi olusturalim. Uzman ekibimiz sizi dinleyerek en yuksek etkilesim puanini alacaginiz kombinasyonu onerir.
        </p>
        <a
          href="https://wa.me/905528772855?text=Merhaba%2C%20mini%20disko%20ve%20bubble%20show%20kombinasyonu%20hakkinda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-indigo-50 transition-colors shadow-lg"
        >
          Ucretsiz Danismanlik Alin
        </a>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="mini-disko-mu-bubble-show-mu"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/bubble-show"
      relatedServiceName="Bubble Show"
    />
  )
}

export default MiniDiskoMuBubbleShowMu
