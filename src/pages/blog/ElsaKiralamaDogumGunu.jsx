import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const ElsaKiralamaDogumGunu = () => {
  const faqData = [
    {
      question: 'Elsa kiralama fiyatları ne kadar?',
      answer: 'Elsa kiralama fiyatları etkinlik süresine, mekan tipine ve ek hizmetlere göre değişiklik gösterir. Tek karakter kiralama ile başlayan paketlerden, Elsa + Anna ikili gösteri paketlerine kadar farklı seçenekler mevcuttur. Frozen temalı komple organizasyon paketleri ise süsleme, karakter, müzik ve fotoğraf çekimini kapsar. Güncel fiyat bilgisi için BestEvent ile iletişime geçmenizi öneririz.'
    },
    {
      question: 'Elsa karakteri kaç yaş grubuna uygun?',
      answer: 'Elsa kostümlü karakter gösterisi özellikle 3-8 yaş aralığındaki kız çocukları için idealdir. 3-4 yaş grubu için gösteri daha kısa ve sakin tutulurken, 5-8 yaş grubu için interaktif oyunlar, dans ve hikaye anlatımı ağırlıklı bir program uygulanır. 2 yaş altı çocuklarda karakter korkusu yaşanabileceğinden dikkatli olunmalıdır.'
    },
    {
      question: 'Elsa ve Anna birlikte kiralayabilir miyiz?',
      answer: 'Evet, Elsa ve Anna karakterlerini birlikte kiralayabilirsiniz. İkili gösteri formatında Elsa ve Anna aralarında diyalog kurarak hikaye anlatır, birlikte dans eder ve çocuklarla etkileşime geçer. İkili gösteri, tek karaktere göre çok daha zengin bir deneyim sunar ve gösteri süresi uzar. İkili karakter paketi için özel fiyatlandırma uygulanır.'
    },
    {
      question: 'Frozen temalı süsleme de yapıyor musunuz?',
      answer: 'Evet, BestEvent olarak Frozen temalı komple süsleme hizmeti sunuyoruz. Buz mavisi ve gümüş tonlarında balon kemeri, Frozen temalı arka plan panosu, masa düzeni, tabak-bardak seti, yapay kar makinesi ve LED ışık zinciri dahil kapsamlı dekorasyon paketlerimiz mevcuttur. Karakter kiralama ile birlikte süsleme paketi alındığında özel fiyat avantajı sağlanır.'
    },
    {
      question: 'Elsa gösterisi ne kadar sürer?',
      answer: 'Standart Elsa kostümlü karakter gösterisi 45-60 dakika sürer. Bu süre içinde sürpriz giriş, hikaye anlatımı, şarkı ve dans gösterisi, interaktif oyunlar ve fotoğraf çekim seansı yer alır. Elsa + Anna ikili gösterisinde süre 75-90 dakikaya çıkar. Ek hizmetlerle (yüz boyama, bubble show) toplam etkinlik süresi 2 saate kadar uzatılabilir.'
    },
    {
      question: 'Elsa karakteri ev partisine de gelir mi?',
      answer: 'Evet, Elsa karakterimiz ev partilerine, parti salonlarına, okullara, AVM etkinliklerine ve açık hava organizasyonlarına gelebilir. Ev partisi için en az 20 metrekarelik bir performans alanı yeterlidir. Mekan ne olursa olsun, profesyonel ses sistemi ve müzik desteği sağlanır. Sürpriz giriş senaryosu mekanın yapısına göre önceden planlanır.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-indigo-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#frozen-tema-dekorasyon" className="text-indigo-600 hover:text-indigo-700 font-semibold">1. Frozen Temalı Doğum Günü Dekorasyonu: Buz Krallığını Evinize Getirin</a></li>
          <li><a href="#elsa-performans" className="text-indigo-600 hover:text-indigo-700 font-semibold">2. Elsa Performans Detayları: Sürpriz Girişten Vedaya</a></li>
          <li><a href="#anna-ikili-gosteri" className="text-indigo-600 hover:text-indigo-700 font-semibold">3. Anna ile İkili Gösteri: Kardeş Büyüsü</a></li>
          <li><a href="#yas-gruplari" className="text-indigo-600 hover:text-indigo-700 font-semibold">4. Yaş Gruplarına Göre Elsa Gösterisi Planlaması</a></li>
          <li><a href="#mekan-secimi" className="text-indigo-600 hover:text-indigo-700 font-semibold">5. Frozen Partisi İçin Mekan Seçimi ve Hazırlık</a></li>
          <li><a href="#fiyat-paketler" className="text-indigo-600 hover:text-indigo-700 font-semibold">6. Elsa Kiralama Fiyatları ve Paket Seçenekleri</a></li>
          <li><a href="#sss" className="text-indigo-600 hover:text-indigo-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Frozen filmi 2013 yılında vizyona girdiğinden beri milyonlarca çocuğun kalbini fethetti ve Elsa karakteri tüm dünyada en çok sevilen prenses figürlerinden biri haline geldi. Bugün İstanbul'da doğum günü organizasyonlarında en çok talep edilen karakter olan Elsa, çocukların buz krallığı hayallerini gerçeğe dönüştürüyor. Profesyonel bir Elsa kiralama hizmeti ile çocuğunuzun doğum gününü sıradan bir kutlamadan büyülü bir Frozen deneyimine dönüştürebilirsiniz. Bu rehberde, Frozen temalı doğum günü partisinin tüm detaylarını, Elsa performans içeriğini, Anna ile ikili gösteri seçeneğini, yaş gruplarına özel planlamayı ve fiyat bilgilerini kapsamlı şekilde ele alacağız.
      </p>

      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>İpucu:</strong> Elsa kostümlü karakter kiralama, sadece bir kostüm giyme işlemi değildir. Profesyonel Elsa karakterleri; şarkı söyleme, dans, hikaye anlatımı ve çocuk psikolojisi konusunda eğitim almış deneyimli sanatçılardır. "Let It Go" performansından çocuklarla buz krallığı macerası anlatımına kadar her detay profesyonelce planlanır.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="frozen-tema-dekorasyon" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Frozen Temalı Doğum Günü Dekorasyonu: Buz Krallığını Evinize Getirin
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Başarılı bir Frozen temalı doğum günü partisinin temeli, mekanın buz krallığına dönüştürülmesidir. Dekorasyon, çocukların partiye adım attığı andan itibaren Frozen dünyasına girdiklerini hissetmelerini sağlamalıdır. Renk paleti olarak buz mavisi, gümüş, beyaz ve açık mor tonları kullanılmalıdır. Bu renkler hem Elsa'nın kostüm renkleriyle hem de filmin genel atmosferiyle mükemmel uyum sağlar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Girişte buz mavisi ve beyaz balonlardan oluşan bir balon kemeri, misafirleri karşılayan ilk etkileyici unsur olacaktır. Tavan süslemeleri için kar tanesi şeklinde kesilen folyo süsler ve gümüş renkli tül perdeler kullanılabilir. Masa düzeninde Frozen temalı tabak, bardak, peçete seti ve masa ortasına yerleştirilen Elsa, Anna ve Olaf minyatür figürleri atmosferi tamamlar.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">&#10052;</span> Frozen Dekorasyon Kontrol Listesi:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <div>
                <strong>Balon Kemeri:</strong> Buz mavisi, beyaz ve gümüş balonlardan oluşan giriş kemeri. Kar tanesi folyo balonlar eklenerek Frozen teması vurgulanır.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <div>
                <strong>Arka Plan Panosu:</strong> Elsa'nın buz sarayı temalı fotoğraf çekim alanı. Işıltılı kumaş ve LED ışıklarla desteklenir.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <div>
                <strong>Yapay Kar Makinesi:</strong> Partinin en büyülü anlarından biri. Elsa'nın girişinde veya "Let It Go" performansında devreye girerek gerçek bir kar efekti oluşturur.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <div>
                <strong>Pasta ve Kurabiyeler:</strong> Buz mavisi fondanla kaplı Elsa figürlü pasta, kar tanesi kurabiyeler ve mavi renkli içecekler.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">5.</span>
              <div>
                <strong>Parti Hediyeleri:</strong> Frozen temalı parti çantaları, kar tanesi bileklik, Elsa taç seti ve mini Olaf figürleri.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Frozen temalı süslemenin en etkileyici unsurlarından biri yapay kar makinesidir. Bu makine, partinin belirli anlarında devreye girerek tavandan yavaşça düşen kar taneleri efekti oluşturur. Özellikle Elsa karakterinin sürpriz girişinde yapay kar makinesi çalıştırıldığında, çocukların gözlerindeki parıltı tarif edilemez. Detaylı Elsa karakter bilgisi için <Link to="/karakter/elsa-kiralama-istanbul" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">Elsa kiralama İstanbul</Link> sayfamızı inceleyebilirsiniz.
      </p>

      {/* Bölüm 2 */}
      <h2 id="elsa-performans" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Elsa Performans Detayları: Sürpriz Girişten Vedaya
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Profesyonel bir Elsa gösterisi, önceden planlanan bir senaryo dahilinde ilerler. Her anın detayı, çocukların yaş grubuna ve mekan koşullarına göre uyarlanır. BestEvent'in Elsa gösterisi, standart bir kostüm performansının çok ötesinde, çocukları Frozen dünyasına taşıyan kapsamlı bir deneyimdir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
            Sürpriz Giriş (5-10 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            "Let It Go" müziği yükselmeye başlar, ışıklar kısılır ve yapay kar makinesi devreye girer. Duman efekti arasından Elsa karakteri zarif bir şekilde sahneye çıkar. Pelerinini savurarak çocuklara el sallar. Doğum günü çocuğuna doğru yürüyerek onu özellikle selamlar ve buz krallığından geldiğini söyler. Bu an, profesyonel fotoğrafçı tarafından mutlaka kayıt altına alınmalıdır.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
            Buz Krallığı Hikayesi (10-15 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Elsa, çocukları yere oturtarak buz krallığının hikayesini anlatır. Arendelle'deki maceraları, Anna ile olan kardeşlik bağını ve buzların gücünü kontrol etmeyi nasıl öğrendiğini paylaşır. Hikaye anlatımı sırasında çocuklara sorular sorarak etkileşim sağlar. "Buz güçlerimi görmek ister misiniz?" gibi sorularla heyecanı artırır.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-400 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
            Şarkı ve Dans Gösterisi (10-15 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Elsa, "Let It Go" ve "Into the Unknown" şarkılarını söyleyerek dans performansı sergiler. Çocukları da dansa davet eder ve birlikte koreografi yaparlar. Elsa'nın zarif dans hareketleri, pelerininin dalgalanması ve müziğin ritmi birleştiğinde büyülü bir atmosfer oluşur. Bu bölüm, gösterinin en enerjik ve eğlenceli kısmıdır.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-300 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
            Oyunlar ve Taç Seremonisi (10-15 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Frozen temalı oyunlar oynanır: "Buzdan Kaç" yarışması, "Kar Tanesi Avı" ve "Olaf'ı Bul" gibi aktiviteler yapılır. Ardından Elsa, doğum günü çocuğuna özel bir taç giydirme seremonisi düzenler. Çocuk, Elsa tarafından "Buz Prensesi" ilan edilir ve tüm misafirler alkışlar. Bu tören, partinin en duygusal anlarından biridir.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-200 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
            Fotoğraf Seansı ve Veda (15 dakika)
          </h4>
          <p className="text-gray-700 text-sm">
            Gösterinin sonunda Elsa, önce doğum günü çocuğu ile özel pozlar verir, ardından tüm çocuklarla tek tek fotoğraf çektirir. Grup fotoğrafı çekilir ve Elsa, çocuklara "Cesur olun, sevgi her zaman kazanır" mesajıyla veda eder. Yapay kar yağışı eşliğinde sahneyi terk eden Elsa, çocukların hafızasına kazınan büyülü bir anı bırakır.
          </p>
        </div>
      </div>

      {/* Bölüm 3 */}
      <h2 id="anna-ikili-gosteri" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Anna ile İkili Gösteri: Kardeş Büyüsü
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Frozen evreninin büyüsü, Elsa ve Anna'nın kardeşlik bağında saklıdır. Bu nedenle ikili gösteri formatı, tek karakter gösterisine kıyasla çok daha zengin ve duygusal bir deneyim sunar. Anna'nın enerjik ve neşeli kişiliği, Elsa'nın zarif ve gizemli karakteriyle mükemmel bir kontrast oluşturur.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        İkili gösteride Elsa ve Anna arasındaki diyaloglar, filmden esinlenen sahneler ve birlikte yapılan dans koreografisi çocukları adeta Frozen filminin içine çeker. Anna, partinin enerjisini yüksek tutarken Elsa büyülü anlar yaratır. İki karakterin farklı güçleri ve kişilikleri, gösteriye çeşitlilik ve derinlik katar.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">Tek Karakter Gösterisi</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; Elsa odaklı 45-60 dakika gösteri</li>
            <li>&#8226; Hikaye anlatımı, dans, oyunlar</li>
            <li>&#8226; Taç giydirme seremonisi</li>
            <li>&#8226; Fotoğraf seansı</li>
            <li>&#8226; Daha uygun bütçe</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">Elsa + Anna İkili Gösterisi</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; 75-90 dakika zengin gösteri</li>
            <li>&#8226; Kardeşlik temalı diyaloglar</li>
            <li>&#8226; Duo dans performansı</li>
            <li>&#8226; Genişletilmiş oyun programı</li>
            <li>&#8226; Daha etkileyici deneyim</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        İkili gösteri formatı özellikle 20'den fazla çocuğun katıldığı partilerde tercih edilmelidir. İki karakter, çocuklarla aynı anda farklı gruplarda etkileşim kurarak herkesin ilgisini canlı tutar. Prenses temalı farklı karakter alternatifleri için <Link to="/karakter/pamuk-prenses-kiralama-istanbul" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">Pamuk Prenses kiralama</Link> seçeneğimize de göz atabilirsiniz.
      </p>

      {/* Bölüm 4 */}
      <h2 id="yas-gruplari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Yaş Gruplarına Göre Elsa Gösterisi Planlaması
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Her yaş grubunun ilgi alanı, dikkat süresi ve etkileşim kapasitesi farklıdır. Profesyonel bir Elsa gösterisi, bu farklılıkları dikkate alarak yaş grubuna özel bir program sunar. Aşağıda yaş gruplarına göre önerilen gösteri formatlarını bulabilirsiniz.
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-400">
          <h4 className="font-bold text-gray-900 mb-3">2-3 Yaş Grubu: Tanışma ve Sevgi</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Gösteri Süresi:</strong> 30-40 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Dikkat Edilmesi Gerekenler:</strong> Bu yaş grubunda bazı çocuklar kostümlü karakterlerden korkabilir. Elsa karakteri yavaş ve nazik bir girişle çocuklara yaklaşır, ani hareketlerden kaçınır. Müzik sesi düşük tutulur, yapay kar makinesi dikkatli kullanılır.</p>
          <p className="text-gray-700 text-sm"><strong>Program:</strong> Yavaş giriş, kısa hikaye, sakin müzikle dans, nazik dokunuşlarla fotoğraf çekimi. Annelerin yanında durması teşvik edilir.</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
          <h4 className="font-bold text-gray-900 mb-3">4-5 Yaş Grubu: Masal ve Keşif</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Gösteri Süresi:</strong> 45-55 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Dikkat Edilmesi Gerekenler:</strong> Bu yaş grubu karakterle en yoğun etkileşimi kurar. Elsa'yı gerçek sanırlar ve sorular sorarlar. Karakter, bu soruları Elsa gibi yanıtlayarak illüzyonu sürdürür.</p>
          <p className="text-gray-700 text-sm"><strong>Program:</strong> Sürpriz giriş, detaylı hikaye anlatımı, basit oyunlar, kısa dans gösterisi, taç seremonisi ve fotoğraf çekimi. Bu yaş grubu Frozen şarkılarını bilir ve birlikte söyler.</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
          <h4 className="font-bold text-gray-900 mb-3">6-8 Yaş Grubu: Dans ve Aksiyon</h4>
          <p className="text-gray-700 text-sm mb-2"><strong>Gösteri Süresi:</strong> 55-70 dakika</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Dikkat Edilmesi Gerekenler:</strong> Bu yaş grubu daha aktif ve enerjik bir program ister. Oyunların zorluk seviyesi artırılır, dans koreografisi öğretilir. Bazı çocuklar karakterin gerçek olmadığını bilir ancak yine de büyüyü yaşamak ister.</p>
          <p className="text-gray-700 text-sm"><strong>Program:</strong> Etkileyici sürpriz giriş, interaktif hikaye, zorlu oyunlar ve yarışmalar, koreografili dans performansı, taç seremonisi, kapsamlı fotoğraf seansı.</p>
        </div>
      </div>

      {/* Bölüm 5 */}
      <h2 id="mekan-secimi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Frozen Partisi İçin Mekan Seçimi ve Hazırlık
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Frozen temalı doğum günü partisi her mekan tipinde gerçekleştirilebilir, ancak her mekanın kendine özgü avantajları ve hazırlık gereksinimleri vardır. Mekan seçimi yaparken çocuk sayısı, bütçe ve istenen atmosfer göz önünde bulundurulmalıdır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Kapalı mekanlar, yapay kar makinesi ve ışık efektleri için daha uygun bir ortam sunar. Karanlık yapılabilen bir oda, Elsa'nın sürpriz girişi için dramatik bir atmosfer oluşturur. Açık havada ise geniş alan avantajı vardır ancak rüzgar yapay karı dağıtabilir ve gün ışığında ışık efektleri görünmeyebilir. Mekan seçimi konusunda daha detaylı bilgi için <Link to="/blog/dogum-gunu-mekan-secimi" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">doğum günü mekan seçimi rehberimizi</Link> incelemenizi öneririz.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 text-center">Ev Partisi</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; 10-15 çocuk için ideal</li>
            <li>&#8226; Salon en az 20 m&sup2; olmalı</li>
            <li>&#8226; Yapay kar makinesi kullanılabilir</li>
            <li>&#8226; Karanlık yapılabilen oda avantaj</li>
            <li>&#8226; Komşu bilgilendirilmeli</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 text-center">Parti Salonu</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; 15-40 çocuk için ideal</li>
            <li>&#8226; Sahne ve ses sistemi hazır</li>
            <li>&#8226; Profesyonel aydınlatma</li>
            <li>&#8226; Sürpriz giriş için arka plan</li>
            <li>&#8226; En iyi Frozen deneyimi</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3 text-center">Bahce / Acik Hava</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>&#8226; 20+ çocuk için ideal</li>
            <li>&#8226; Geniş oyun alanı</li>
            <li>&#8226; Hava durumu riski var</li>
            <li>&#8226; Yapay kar rüzgarda dağılabilir</li>
            <li>&#8226; Çadır/tente önerilir</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">Gerçek Hikaye: Küçük Mira'nın Frozen Rüyası - Beşiktaş</h4>
        <p className="text-gray-700 text-sm mb-4">
          5 yaşındaki Mira, doğum gününde Elsa'yı görmek istedi. Beşiktaş'taki bir parti salonunda Frozen temalı organizasyon planladık. Salon baştan sona buz mavisi ve gümüş tonlarında süslendi. Yapay kar makinesi tavandan yavaşça düşen kar taneleri oluşturuyordu. 22 çocuk heyecanla beklerken, "Into the Unknown" müziği yükseldi ve duman arasından Elsa süzülerek geldi. Mira, Elsa'yı gördüğünde gözleri doldu ve koşarak sarıldı.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Elsa, çocuklara buz krallığının hikayesini anlattı, birlikte "Let It Go" söyledi ve Mira'ya özel bir taç giydirme seremonisi yaptı. Parti sonunda Mira'nın annesi "Kızımın gözlerindeki o ışıltıyı hiç unutmayacağım" dedi. Bu deneyim, profesyonel Elsa kiralama hizmetinin çocuklar üzerindeki etkisini mükemmel özetliyor.
        </p>
        <p className="text-gray-600 text-xs italic">
          -- Profesyonel kostümlü karakter kiralama, çocukların hayal dünyasını gerçeğe dönüştürür.
        </p>
      </div>

      {/* Bölüm 6 */}
      <h2 id="fiyat-paketler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Elsa Kiralama Fiyatları ve Paket Seçenekleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Elsa kiralama fiyatları, seçilen paket içeriğine, gösteri süresine ve ek hizmetlere göre değişiklik gösterir. BestEvent olarak her bütçeye uygun Frozen temalı organizasyon paketleri sunuyoruz. Tüm paketlerde profesyonel kostüm, eğitimli sanatçı ve ses sistemi standart olarak dahildir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-2">Standart Elsa Paketi</h4>
          <p className="text-gray-700 text-sm">45-60 dakika Elsa gösterisi. Sürpriz giriş, hikaye anlatımı, dans, oyunlar ve fotoğraf çekimi dahil. Ev partisi ve küçük organizasyonlar için ideal.</p>
        </div>

        <div className="bg-white border border-purple-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-2">Elsa + Anna İkili Paketi</h4>
          <p className="text-gray-700 text-sm">75-90 dakika ikili gösteri. Her iki karakter birlikte performans sergiler. Daha kapsamlı program, genişletilmiş oyun süresi ve çift fotoğraf seansı. Büyük partiler için önerilir.</p>
        </div>

        <div className="bg-white border border-indigo-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-2">Frozen Komple Organizasyon Paketi</h4>
          <p className="text-gray-700 text-sm">Elsa (veya Elsa + Anna) gösterisi + Frozen temalı süsleme + yapay kar makinesi + ses ve ışık sistemi + fotoğraf çekimi. Tüm organizasyon tek elden yönetilir. Endişesiz ve kusursuz bir parti deneyimi için en kapsamlı seçenek.</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Frozen temalı parti organizasyonuna ek olarak yüz boyama, bubble show veya pamuk şeker arabası gibi hizmetler eklenebilir. Yüz boyama ile çocukların yüzüne kar tanesi ve Frozen desenleri çizilerek atmosfer güçlendirilir. Kombine paketlerde fiyat avantajı sağlanır ve toplam etkinlik süresi 2-3 saate uzatılabilir.
      </p>

      {/* Hizmet CTA */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Elsa Kiralama Hizmetimizi Keşfedin</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          BestEvent olarak profesyonel Elsa kostümlü karakter gösterisi ile çocuğunuzun Frozen hayalini gerçeğe dönüştürüyoruz. Deneyimli sanatçı kadromuz, şarkı, dans, hikaye ve oyun performanslarıyla unutulmaz bir parti deneyimi sunar. Elsa, Anna, Olaf ve tüm Frozen karakterleri için hemen bilgi alın.
        </p>
        <Link
          to="/karakter/elsa-kiralama-istanbul"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Elsa Kiralama Sayfasına Git
        </Link>
      </div>

      {/* Bölüm 7 - SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Sık Sorulan Sorular
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Frozen Temalı Doğum Günü Partisi Planlayalım!</h3>
        <p className="mb-6 leading-relaxed">
          Profesyonel Elsa kiralama hizmeti ile çocuğunuzun doğum gününü buz krallığına dönüştürün. Sürpriz giriş, yapay kar efekti, "Let It Go" performansı ve taç giydirme seremonisi dahil komple Frozen organizasyonu için hemen bizi arayın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-indigo-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Ara: 05307309009
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Elsa%20kiralama%20ve%20Frozen%20temal%C4%B1%20do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            WhatsApp ile Bilgi Alın
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="elsa-kiralama-dogum-gunu"
      faqData={faqData}
      relatedServicePath="/organizasyonlar/kostumlu-karakterler"
      relatedServiceName="Kostümlü Karakterler"
    >
      {content}
    </BlogDetail>
  )
}

export default ElsaKiralamaDogumGunu
