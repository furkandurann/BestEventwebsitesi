import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const PamukSekerEtkinlikRehberi = () => {
  const faqData = [
    {
      question: 'Pamuk şeker makinesi kiralama fiyatı nedir?',
      answer: 'Pamuk şeker makinesi kiralama fiyatları etkinlik süresine, katılımcı sayısına ve seçilen pakete göre değişkenlik gösterir. Tek başına pamuk şeker makinesi kiralama ile birlikte operatör hizmeti, sınırsız şeker malzemesi ve renkli çubuklar dahildir. Detaylı fiyat bilgisi için bizimle iletişime geçerek kişiselleştirilmiş teklif alabilirsiniz. Popcorn veya çikolata şelalesi ile kombine paketlerde özel indirimler uygulanmaktadır.'
    },
    {
      question: 'Çikolata şelalesi hangi çikolatalarla çalışır?',
      answer: 'Çikolata şelalemiz özellikle şelale kullanımı için üretilmiş profesyonel kalite kuvertür çikolata ile çalışır. Süt çikolata, bitter çikolata ve beyaz çikolata seçenekleri mevcuttur. Çikolatalar Belçika ve İsviçre menşeili, kakao oranı yüksek, katkısız ürünlerdir. Alerji durumunda şeker bazlı alternatif soslar da kullanılabilir. Her etkinlik için taze çikolata eritilir ve hijyen kurallarına uygun şekilde servis edilir.'
    },
    {
      question: 'Popcorn arabası iç mekanda kullanılabilir mi?',
      answer: 'Evet, popcorn arabamız hem iç mekan hem dış mekan kullanımı için uygundur. İç mekanda kullanım için duman ve koku filtreli profesyonel makineler tercih edilir. Mekanın havalandırma durumu önceden kontrol edilir. Apartman dairesi, villa, restoran, otel salonu gibi her türlü mekanda güvenle kullanılabilir. Retro tasarımlı popcorn arabamız dekoratif olarak da mekanın atmosferine katkıda bulunur.'
    },
    {
      question: 'Kaç kişilik etkinliklere hizmet veriyorsunuz?',
      answer: '10 kişilik küçük doğum günü partilerinden 500+ kişilik kurumsal etkinliklere kadar her ölçekte hizmet vermekteyiz. Küçük etkinlikler için kompakt ekipmanlar, büyük organizasyonlar için birden fazla makine ve operatör tahsis edilir. 50 kişi üzeri etkinliklerde ikinci bir pamuk şeker makinesi veya ek popcorn arabası eklenmesi önerilir. Katılımcı sayısına göre porsiyon ve malzeme hesabı önceden yapılır.'
    },
    {
      question: 'Alerji durumunda alternatif ikramlar var mı?',
      answer: 'Evet, alerji ve diyet gereksinimleri konusunda hassas davranıyoruz. Gluten intoleransı için glutensiz popcorn mısırı, şeker alerjisi için doğal tatlandırıcılarla hazırlanmış pamuk şeker, süt alerjisi için bitter çikolata veya meyve sosu alternatifleri mevcuttur. Etkinlik öncesinde alerji bilgileri alınır ve buna uygun malzemeler hazırlanır. Tüm ürünlerimizin içerik etiketleri şeffaf şekilde paylaşılır.'
    },
    {
      question: 'Parti ekipmanları ne kadar önceden kurulur?',
      answer: 'Ekiplerimiz etkinlik başlama saatinden 60-90 dakika önce mekana gelir. Pamuk şeker makinesi 15 dakikada, popcorn arabası 20 dakikada, çikolata şelalesi ise 30-40 dakikada kurulur ve çalışır hale getirilir. Çikolata şelalesi için eritme süresi de dahil edilir. Kurulum tamamlandıktan sonra test üretimi yapılır ve kalite kontrolden geçirilir. Etkinlik sonrasında sökülme ve temizlik işlemleri ekibimiz tarafından gerçekleştirilir.'
    }
  ]

  const relatedServicePath = '/organizasyonlar/pamuk-seker'
  const relatedServiceName = 'Pamuk Şeker ve Parti Ekipmanları'

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-orange-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#pamuk-seker-kiralama" className="text-orange-600 hover:text-orange-700 font-semibold">1. Pamuk Şeker Makinesi Kiralama Hizmeti: Neden Popüler?</a></li>
          <li><a href="#cikolata-selalesi" className="text-orange-600 hover:text-orange-700 font-semibold">2. Çikolata Şelalesi Kiralama: Etkinliğin Yıldızı</a></li>
          <li><a href="#popcorn-arabasi" className="text-orange-600 hover:text-orange-700 font-semibold">3. Popcorn Arabası Kiralama Fiyat ve Hizmet Detayları</a></li>
          <li><a href="#paket-kombinasyonlari" className="text-orange-600 hover:text-orange-700 font-semibold">4. Parti Ekipmanları Kiralama Kombinasyonları: En Popüler Paketler</a></li>
          <li><a href="#hijyen-guvenlik" className="text-orange-600 hover:text-orange-700 font-semibold">5. Hijyen ve Güvenlik Kuralları</a></li>
          <li><a href="#etkinlik-onerileri" className="text-orange-600 hover:text-orange-700 font-semibold">6. Organizasyon Türlerine Göre İkram Önerileri</a></li>
          <li><a href="#sss" className="text-orange-600 hover:text-orange-700 font-semibold">7. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Pamuk şeker kiralama, çikolata şelalesi ve popcorn arabası gibi parti ekipmanları, çocuk doğum günü organizasyonlarından kurumsal etkinliklere kadar her türlü kutlamanın vazgeçilmez unsurları haline gelmiştir. İstanbul'da profesyonel parti ekipmanı kiralama hizmeti ile etkinliklerinize renk, tat ve görsel şölen katabilirsiniz. Bu kapsamlı rehberde, pamuk şeker makinesinden çikolata şelalesine, popcorn arabasından hijyen kurallarına kadar bilmeniz gereken her şeyi detaylı şekilde bulacaksınız. Ayrıca{' '}
        <Link to="/blog/pamuk-seker-dogum-gunu-organizasyonu" className="text-orange-600 hover:text-orange-700 font-semibold underline">
          pamuk şeker doğum günü organizasyonu
        </Link>{' '}
        yazımızda özel parti fikirleri de bulabilirsiniz.
      </p>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>İpucu:</strong> Parti ekipmanları sadece ikram aracı değil, aynı zamanda gösterinin bir parçasıdır. Pamuk şekerin havada dönmesi, çikolatanın şelaleden akışı ve popcornun patlaması çocuklar için büyüleyici bir deneyimdir. Doğru ekipman seçimi etkinliğinizi sıradan bir partiden unutulmaz bir organizasyona dönüştürür.
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="pamuk-seker-kiralama" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Pamuk Şeker Makinesi Kiralama Hizmeti: Neden Popüler?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pamuk şeker, onlarca yıldır lunaparkların ve festivallerin sembolik lezzeti olmuştur. Ancak son yıllarda pamuk şeker makinesi kiralama hizmeti sayesinde bu büyülü deneyim artık doğum günü partilerine, okul şenliklerine ve kurumsal organizasyonlara da taşınıyor. Makinenin başında durup, beyaz şekerin renkli, puf gibi bir pamuk şekere dönüşmesini izlemek çocuklar için adeta bir gösteri niteliği taşıyor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Profesyonel pamuk şeker makinelerimiz, sanayi tipi paslanmaz çelik kazanlara sahiptir ve dakikada 1 adet pamuk şeker üretebilir. Renkli şeker seçenekleri arasında klasik pembe, gök mavisi, sarı, yeşil ve hatta karışım renkler bulunur. Her rengin farklı bir aroması vardır: pembe çilek, mavi sakız, sarı limon ve yeşil elma. Çocuklar kendi renklerini seçmekten büyük keyif alır.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3">Görsel Şov</h4>
          <p className="text-gray-700 text-sm">Şekerin ince ipliklere dönüşüp çubuğa sarılması çocuklar için hipnotize edici bir gösteriye dönüşür. Her pamuk şeker yapımı bir performanstır.</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
          <h4 className="font-bold text-gray-900 mb-3">Tat Çeşitliliği</h4>
          <p className="text-gray-700 text-sm">5 farklı renk ve aroma seçeneği ile her çocuğun damak tadına uygun pamuk şeker üretilir. Özel gün temalarına uygun renk kombinasyonları yapılabilir.</p>
        </div>

        <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
          <h4 className="font-bold text-gray-900 mb-3">Kolay Organizasyon</h4>
          <p className="text-gray-700 text-sm">Makinemiz 15 dakikada kurulur, operatörü ile birlikte gelir ve etkinlik sonrası temizlik dahildir. Tek yapmanız gereken keyfini çıkarmak!</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Pamuk şeker makinesi kiralama hizmetimiz, sadece makineyi değil eksiksiz bir deneyimi kapsar. Operatörümüz çocuklarla etkileşime girer, pamuk şekeri farklı şekillerde sunar ve partinin enerjisini yüksek tutar. Bu, basit bir ikramdan çok bir gösteri ve animasyon hizmetidir.
      </p>

      {/* Bölüm 2 */}
      <h2 id="cikolata-selalesi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Çikolata Şelalesi Kiralama: Etkinliğin Yıldızı
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Çikolata şelalesi, herhangi bir organizasyonun en dikkat çekici unsuru olmaya aday muhteşem bir ekipmandır. Profesyonel çikolata şelalemiz 60-80 cm yüksekliğinde, 3-5 katlı paslanmaz çelik yapısından oluşur. Eritilmiş çikolata, motorlu pompa sistemiyle sürekli olarak yukarı taşınır ve katlardan aşağıya doğru şelale şeklinde akar. Bu görsel şölen hem çocukları hem yetişkinleri büyüler.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Çikolata şelalesi yanında sunulan meyve şişlerinde çilek, muz, üzüm, ananas ve kivi gibi mevsim meyveleri bulunur. Bunların yanında marshmallow, kek parçaları, kurabiye çubukları ve kuru meyveler de çikolataya bandırılarak tüketilebilir. Organizasyonumuza dahil olan meyve tabağı, etkinlik öncesinde taze olarak hazırlanır ve gösterişli sunumu ile servis edilir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
          <h4 className="font-bold text-gray-900 mb-3">Çikolata Şelalesi Nasıl Çalışır?</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">1.</span>
              <div><strong>Eritme Aşaması:</strong> Kuvertür çikolata benmari usulü ile yavaş yavaş eritilir. Bu işlem 20-25 dakika sürer ve çikolatanın yanmasını önler.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">2.</span>
              <div><strong>Şelale Çalışma:</strong> Eritilmiş çikolata hazneye konulur, motor devreye girer ve çikolata katlardan aşağıya akmaya başlar. Sıcaklık sabit tutulur.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">3.</span>
              <div><strong>Servis:</strong> Konuklar meyve şişleri veya marshmallow çubukları ile çikolataya bandırma yapar. Operatörümüz yönlendirme ve hijyen kontrolü sağlar.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">4.</span>
              <div><strong>Bakım:</strong> Etkinlik boyunca çikolata seviyesi kontrol edilir, gerektiğinde ekleme yapılır. Sıcaklık 40-45 derece arasında korunur.</div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Çikolata şelalesi kiralama hizmetimiz, tüm malzeme, kurulum, operasyon ve temizlik işlemlerini kapsar. Süt çikolata, bitter çikolata ve beyaz çikolata seçenekleri arasında tercihinize göre hazırlık yapılır. Ortalama 50 kişilik bir etkinlik için 2-3 kg çikolata kullanılır.
      </p>

      {/* Bölüm 3 */}
      <h2 id="popcorn-arabasi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Popcorn Arabası Kiralama Fiyat ve Hizmet Detayları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Retro tasarımlı popcorn arabası, etkinliğinize nostaljik bir atmosfer katar. Kırmızı-beyaz renklerde, tekerlekli, vitrinli popcorn arabamız hem görsel bir dekor unsuru hem de lezzetli bir ikram istasyonudur. Taze patlamış mısırın kokusu mekanı kaplar ve davetlileri cezbeder. Popcorn arabası kiralama hizmeti, özellikle sinema temalı doğum günü partilerinde ve okul karnavallarında çok tercih edilir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Profesyonel popcorn makinemiz dakikada 200-250 gram popcorn üretir. Tek seferde 8 litre kapasiteye sahip kazanında mısırlar tereyağı ile patlatılır. Porsiyon seçenekleri küçük (50g), orta (100g) ve büyük (150g) olarak sunulur. Tuzlu, tereyağlı ve karamelli çeşitleri mevcuttur. Çocuklar için özel karamel veya peynirli popcorn da hazırlanabilir.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
          <h4 className="font-bold text-gray-900 mb-3">Retro Popcorn Arabası Özellikleri</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Kırmızı-beyaz vintage tasarım</li>
            <li>4 tekerlekli, taşıması kolay yapı</li>
            <li>Işıklı tabela ve vitrin camı</li>
            <li>Paslanmaz çelik patlatma kazanı</li>
            <li>Isıtma sistemi ile sıcak servis</li>
            <li>Dekoratif popcorn kutuları dahil</li>
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-gray-900 mb-3">Porsiyon Planlama Rehberi</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>10-20 kişi:</strong> 2-3 kg mısır yeterli</li>
            <li><strong>20-50 kişi:</strong> 4-6 kg mısır yeterli</li>
            <li><strong>50-100 kişi:</strong> 8-12 kg mısır yeterli</li>
            <li><strong>100+ kişi:</strong> 2. makine önerilir</li>
            <li>Her 1 kg mısırdan yaklaşık 30 porsiyon çıkar</li>
            <li>Çocuk etkinliklerinde %20 fazla hesaplanır</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Popcorn arabası kiralama hizmetimizde tüm mısır malzemesi, tereyağı, tuz, karamel sos ve servis kutuları dahildir. Operatörümüz taze popcorn üretimini sürekli yapar, porsiyonları dağıtır ve araba çevresindeki düzenin korunmasını sağlar. Etkinlik sonrasında araba ve çevresinin temizliği de bizim tarafımızdan gerçekleştirilir.
      </p>

      {/* Bölüm 4 */}
      <h2 id="paket-kombinasyonlari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Parti Ekipmanları Kiralama Kombinasyonları: En Popüler Paketler ve Fiyat Avantajları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Tek bir parti ekipmanı bile etkinliğinize değer katar, ancak kombinasyonlar gerçek farkı yaratır. Farklı tatlar ve görselleri bir araya getirerek konuklarınıza zengin bir deneyim sunabilirsiniz. İşte en çok tercih edilen organizasyon paketlerimiz:
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-center mb-4">
            <span className="text-3xl">İkili Paket</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-3 text-center text-lg">Pamuk Şeker + Popcorn</h4>
          <p className="text-gray-700 text-sm mb-4">En popüler kombinasyon! Tatlı pamuk şeker ile tuzlu popcorn arasındaki kontrast, damaklarda mükemmel bir denge oluşturur.</p>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>2 ayrı operatör</li>
            <li>Sınırsız malzeme</li>
            <li>4 saat kesintisiz servis</li>
            <li>Kurulum ve temizlik dahil</li>
          </ul>
          <p className="text-orange-600 font-bold mt-4 text-center text-sm">En Çok Tercih Edilen</p>
        </div>

        <div className="bg-white border-2 border-amber-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-center mb-4">
            <span className="text-3xl">Üçlü Paket</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-3 text-center text-lg">Pamuk Şeker + Popcorn + Çikolata Şelalesi</h4>
          <p className="text-gray-700 text-sm mb-4">Tam donanım organizasyon paketi! Üç farklı tat istasyonu ile davetlileriniz sürekli meşgul ve mutlu olur.</p>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>3 ayrı operatör</li>
            <li>Meyve tabağı dahil</li>
            <li>5 saat kesintisiz servis</li>
            <li>Premium sunumu ve dekor</li>
          </ul>
          <p className="text-amber-600 font-bold mt-4 text-center text-sm">Premium Seçim</p>
        </div>

        <div className="bg-white border-2 border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-center mb-4">
            <span className="text-3xl">Özel Paket</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-3 text-center text-lg">Çikolata Şelalesi + Meyve Barı</h4>
          <p className="text-gray-700 text-sm mb-4">Sağlıklı ve lezzetli! Taze meyveler çikolata ile buluşur. Yetişkin ağırlıklı etkinlikler ve kurumsal organizasyonlar için ideal.</p>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>Mevsim meyveleri ile sunum</li>
            <li>3 çikolata çeşidi</li>
            <li>Özel marshmallow seçeneği</li>
            <li>Sağlık sertifikaları mevcut</li>
          </ul>
          <p className="text-pink-600 font-bold mt-4 text-center text-sm">Yetişkin Favorisi</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Tüm paketlerimizde parti ekipmanları profesyonel operatörleri ile birlikte gelir. Kombine paketlerde özel indirimler uygulanır. Ayrıca{' '}
        <Link to="/blog/dogum-gunu-organizasyonu-rehberi" className="text-orange-600 hover:text-orange-700 font-semibold underline">
          doğum günü organizasyonu rehberimizden
        </Link>{' '}
        parti planlama ipuçlarına da göz atabilirsiniz. Etkinlik tarihine göre müsaitlik durumu kontrol edilerek en uygun paket önerilir.
      </p>

      {/* Bölüm 5 */}
      <h2 id="hijyen-guvenlik" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Hijyen ve Güvenlik Kuralları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Gıda güvenliği ve hijyen, parti ekipmanları kiralama hizmetimizin en öncelikli konusudur. Özellikle çocuk etkinliklerinde her detay titizlikle kontrol edilir. Ekiplerimiz gıda üretim sertifikasına sahiptir ve düzenli sağlık kontrolleri yapılmaktadır.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h4 className="font-bold text-gray-900 mb-3">Ekipman Hijyeni</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Her etkinlik öncesi:</strong> Tüm makineler sökülebilir parçalarına ayrılır, yıkanır ve sterilize edilir</li>
            <li><strong>Paslanmaz çelik:</strong> Gıda ile temas eden tüm yüzeyler paslanmaz çelik malzemeden üretilmiştir</li>
            <li><strong>Tek kullanımlık malzeme:</strong> Çubuklar, kutular, peçeteler ve eldivenler tek kullanımlıktır</li>
            <li><strong>Taşıma:</strong> Ekipmanlar özel kutularda, toz ve kirlenmeden korunarak taşınır</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h4 className="font-bold text-gray-900 mb-3">Gıda Güvenliği</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Malzeme takibi:</strong> Tüm hammaddeler (şeker, mısır, çikolata) markalı ve sertifikalı ürünlerdir</li>
            <li><strong>Son kullanma tarihi:</strong> Her etkinlik için taze malzeme kullanılır, stoktan kullanımdan kaçınılır</li>
            <li><strong>Sıcaklık kontrolü:</strong> Çikolata şelalesi 40-45 derece, popcorn makinesi uygun sıcaklıkta çalıştırılır</li>
            <li><strong>Alerjen bilgi:</strong> Tüm malzemelerin içerik listesi ailelerle paylaşılır</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
          <h4 className="font-bold text-gray-900 mb-3">Alerji Önlemleri</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Ön bilgilendirme:</strong> Etkinlik öncesinde alerji formu doldurulur</li>
            <li><strong>Alternatif ürünler:</strong> Fındık alerjisi için fındıksız çikolata, gluten hassasiyeti için özel mısır çeşidi</li>
            <li><strong>Çapraz bulaşma önleme:</strong> Alerjik çocuk varsa ayrı ekipman veya ayrı servis alanı oluşturulur</li>
            <li><strong>Acil durum:</strong> Ekibimizde temel ilk yardım eğitimi almış personel bulunur</li>
          </ul>
        </div>
      </div>

      {/* Bölüm 6 */}
      <h2 id="etkinlik-onerileri" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Organizasyon Türlerine Göre İkram Önerileri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Her etkinlik türü farklı ikram ihtiyaçlarına sahiptir. Aşağıda farklı organizasyon türleri için önerilen parti ekipmanları kombinasyonlarını bulabilirsiniz:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
            <span className="text-2xl">🎂</span> Doğum Günü Partisi (3-12 Yaş)
          </h4>
          <p className="text-gray-700 text-sm mb-3">
            Çocuk doğum günü organizasyonlarında pamuk şeker ve popcorn en popüler ikili kombinasyondur. Çocuklar renkli pamuk şekeri seçmekten, popcorn kutusu ile dolaşmaktan çok keyif alır. Çikolata şelalesi ile meyve şişleri ise pasta alternatifi olarak da değerlendirilir.
          </p>
          <p className="text-orange-600 text-sm font-semibold">Önerilen Paket: Pamuk Şeker + Popcorn + Çikolata Şelalesi (Üçlü Paket)</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
            <span className="text-2xl">🏢</span> Kurumsal Etkinlik ve Şirket Partisi
          </h4>
          <p className="text-gray-700 text-sm mb-3">
            Kurumsal organizasyonlarda çikolata şelalesi ve meyve barı en çok tercih edilen seçenektir. Premium çikolata çeşitleri, şık sunum ve profesyonel servis ile kurumsal imajı destekler. Büyük ölçekli etkinliklerde birden fazla istasyon kurulabilir.
          </p>
          <p className="text-orange-600 text-sm font-semibold">Önerilen Paket: Çikolata Şelalesi + Meyve Barı (Özel Paket)</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
            <span className="text-2xl">🏫</span> Okul Şenliği ve Kermesi
          </h4>
          <p className="text-gray-700 text-sm mb-3">
            Okul şenliklerinde ve kermeslerde popcorn arabası ve pamuk şeker makinesi en çok rağbet gören ekipmanlardır. Yüksek kapasiteli makineler ve hızlı servis ile yüzlerce öğrenciye kesintisiz ikram sunulabilir. Retro popcorn arabası okul bahçesinde görsel bir odak noktası oluşturur.
          </p>
          <p className="text-orange-600 text-sm font-semibold">Önerilen Paket: Pamuk Şeker + Popcorn (İkili Paket, çift makine)</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center gap-2">
            <span className="text-2xl">🎪</span> Açılış Organizasyonu ve Festival
          </h4>
          <p className="text-gray-700 text-sm mb-3">
            Mağaza açılışlarında ve festivallerde parti ekipmanları hem ikram hem de dikkat çekici görseller olarak kullanılır. Popcorn arabasının retro stili ve pamuk şeker makinesinin renkli gösterisi, potansiyel müşterilerin ilgisini çeker ve mekana trafik yönlendirir.
          </p>
          <p className="text-orange-600 text-sm font-semibold">Önerilen Paket: Üçlü Paket + Ek Dekoratif Düzen</p>
        </div>
      </div>

      {/* Gerçek Hikaye */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 mb-8 border border-orange-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">Gerçek Hikaye: Ataşehir'de 7 Yaş Doğum Günü</h4>
        <p className="text-gray-700 text-sm mb-4">
          Geçen ay Ataşehir'de 35 çocuklu bir doğum günü organizasyonu için üçlü paketimizi kurduk. Pamuk şeker makinesi bahçe girişine, çikolata şelalesi salon ortasına ve popcorn arabası terasın köşesine yerleşti. Çocuklar önce pamuk şeker istasyonunda sıralandı, herkes kendi rengini seçti. Çikolata şelalesinde çilek şişleri en popüler seçim oldu. Popcorn arabası ise gece boyunca duraksız çalıştı. Doğum günü çocuğunun annesi "Bu kadar organize bir parti hiç görmedim, çocuklar hala konuşuyor" dedi.
        </p>
        <p className="text-gray-600 text-xs italic">
          -- Selin H., Ataşehir, 7 yaş doğum günü organizasyonu
        </p>
      </div>

      {/* Bölüm 7 - SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Sık Sorulan Sorular (SSS)
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
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pamuk Şeker ve Parti Ekipmanları Kiralama Hizmetimiz</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          İstanbul genelinde profesyonel pamuk şeker makinesi, çikolata şelalesi ve popcorn arabası kiralama hizmeti sunuyoruz. Her türlü organizasyon ve gösteri için ekipman ve operatör desteğiyle yanınızdayız. Detaylı bilgi ve fiyat teklifi için hizmet sayfamızı ziyaret edin.
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
        <h3 className="text-2xl font-bold mb-4">Etkinliğiniz İçin Hemen Teklif Alın!</h3>
        <p className="mb-6 leading-relaxed">
          Pamuk şeker makinesi kiralama, çikolata şelalesi ve popcorn arabası ile unutulmaz bir organizasyon planlayalım. İstanbul'un her bölgesine profesyonel ekip ve ekipman ile gösteriye hazır geliyoruz. Ücretsiz keşif ve fiyat teklifi için hemen arayın.
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
            WhatsApp ile Yazın
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="pamuk-seker-etkinlik-rehberi"
      faqData={faqData}
      relatedServicePath={relatedServicePath}
      relatedServiceName={relatedServiceName}
    >
      {content}
    </BlogDetail>
  )
}

export default PamukSekerEtkinlikRehberi
