import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const CocukDogumGunuGuvenlikHijyen = () => {
  const faqData = [
    {
      question: 'Doğum günü organizasyonunda en sık karşılaşılan güvenlik riskleri nelerdir?',
      answer: 'Çocuk doğum günü organizasyonlarında en sık karşılaşılan güvenlik riskleri arasında elektrik kabloları ve prizlere erişim, sivri köşeli mobilyalar, kaygan zemin yüzeyleri, gıda alerjileri, balon patlamaları sonucu boğulma riski ve acil çıkış yollarının tıkanması yer alır. Profesyonel organizasyon firmaları etkinlik öncesinde mekan güvenlik taraması yaparak bu riskleri minimize eder. Best Event olarak her etkinlik öncesinde 42 maddelik güvenlik kontrol listesi uyguluyoruz.'
    },
    {
      question: 'Çocuk partisinde gıda alerjisi olan çocuklar için ne tür önlemler alınmalıdır?',
      answer: 'Gıda alerjisi olan çocuklar için davetiye aşamasında alerji bilgisi toplanmalı, tüm yiyeceklerin içerik listesi hazırlanmalı ve alternatif menü seçenekleri sunulmalıdır. Fındık, süt, yumurta ve glüten en yaygın alerjenlerdir. İkram masasında her yiyeceğin yanına içerik kartı konulmalı ve personel alerji konusunda bilgilendirilmelidir. Acil durum için antihistaminik ilaç ve epipen bilgisi ebeveynlerden alınmalıdır.'
    },
    {
      question: 'Profesyonel animatörlerin sahip olması gereken sertifikalar nelerdir?',
      answer: 'Profesyonel animatörlerin çocuk gelişimi veya çocuk psikolojisi sertifikası, ilk yardım belgesi, hijyen eğitimi sertifikası ve adli sicil kaydı temiz olmalıdır. Ayrıca yangın güvenliği eğitimi, temel iş güvenliği sertifikası ve makyaj malzemesi güvenlik bilgisi de gereklidir. Best Event bünyesindeki tüm animatörler bu sertifikalara sahiptir ve yılda iki kez yenileme eğitimine tabi tutulur.'
    },
    {
      question: 'Parti mekanında hijyen standartları nasıl sağlanır?',
      answer: 'Parti mekanında hijyen standartları; etkinlik öncesi profesyonel dezenfeksiyon, giriş noktalarına el dezenfektan istasyonları yerleştirme, oyuncak ve ekipmanların her kullanım öncesi sterilizasyonu, gıda hazırlama alanlarının ayrı tutulması ve çöp kutularının düzenli boşaltılması ile sağlanır. Tuvaletlerde çocuk boy lavabo, sabunluk ve kağıt havlu bulunmalıdır. Tüm yüzeylerin gıdaya uygun dezenfektanla silinmesi şarttır.'
    },
    {
      question: 'Acil durum planı neleri kapsamalıdır?',
      answer: 'Kapsamlı bir acil durum planı şu unsurları içermelidir: İlk yardım çantasının yeri ve içeriği, en yakın hastane ve acil servis bilgileri, yangın söndürücü konumları, acil çıkış yolları haritası, tüm çocukların ebeveyn iletişim bilgileri listesi, alerji ve kronik hastalık bilgileri ve sorumlu personel görev dağılımı. Plan tüm ekip üyelerine etkinlik öncesinde yazılı olarak dağıtılmalı ve kısa bir brifing verilmelidir.'
    },
    {
      question: 'Bubble show ve yüz boyama gibi aktivitelerde hangi güvenlik önlemleri alınmalıdır?',
      answer: 'Bubble show gösterisinde kullanılan sabun solüsyonları dermatolog onaylı ve göz yakmayan formülde olmalıdır. Zemin kayganlaşacağından kaymaz paspas serilmeli ve çocuklar güvenli mesafede tutulmalıdır. Yüz boyamada ise FDA onaylı, hipoalerjenik ve su bazlı boyalar kullanılmalıdır. Her çocuk için temiz fırça ve sünger kullanılmalı, boyama öncesi cilt testi yapılmalı ve alerji öyküsü sorgulanmalıdır.'
    }
  ]

  const content = (
    <>
      {/* Resmi Belge Başlığı */}
      <div className="bg-slate-800 text-white p-6 rounded-t-xl mb-0">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-slate-300 text-xs uppercase tracking-widest mb-1">Resmi Rehber Dokümani</p>
            <h2 className="text-2xl font-bold">Çocuk Doğum Günü Organizasyonlarında Güvenlik ve Hijyen Standartları</h2>
          </div>
          <div className="text-right">
            <p className="text-slate-300 text-xs">Doküman No: BE-GH-2026-007</p>
            <p className="text-slate-300 text-xs">Revizyon: 3.0</p>
            <p className="text-slate-300 text-xs">Yürürlük: 2026</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-l-4 border-r-4 border-slate-800 p-4 mb-8 rounded-b-xl">
        <p className="text-slate-600 text-sm italic">
          Bu doküman, Best Event tarafından çocuk doğum günü organizasyonlarında uygulanması gereken güvenlik ve hijyen standartlarını belirlemek amacıyla hazırlanmıştır. Tüm organizasyon ekibi ve hizmet sağlayıcılar bu standartlara uymakla yükümlüdür.
        </p>
      </div>

      {/* İçindekiler - Resmi Stil */}
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-6 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center text-white text-sm font-bold">i</div>
          <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Doküman İçindekiler</h2>
        </div>
        <div className="border-t border-slate-300 pt-4">
          <ul className="space-y-2">
            <li><a href="#giris" className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2"><span className="text-slate-400 text-sm w-16">Giriş</span> Neden Güvenlik ve Hijyen Standartları Gereklidir?</a></li>
            <li><a href="#madde-1" className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2"><span className="text-slate-400 text-sm w-16">Madde 1</span> Mekan Güvenliği Standartları</a></li>
            <li><a href="#madde-2" className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2"><span className="text-slate-400 text-sm w-16">Madde 2</span> Gıda Güvenliği ve Alerji Yönetimi</a></li>
            <li><a href="#madde-3" className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2"><span className="text-slate-400 text-sm w-16">Madde 3</span> Oyun Alanı Güvenlik Protokolü</a></li>
            <li><a href="#madde-4" className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2"><span className="text-slate-400 text-sm w-16">Madde 4</span> Hijyen Standartları ve Dezenfeksiyon Protokolü</a></li>
            <li><a href="#madde-5" className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2"><span className="text-slate-400 text-sm w-16">Madde 5</span> Animatör ve Personel Güvenlik Sertifikaları</a></li>
            <li><a href="#madde-6" className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2"><span className="text-slate-400 text-sm w-16">Madde 6</span> Acil Durum Planı ve İlk Yardım Protokolü</a></li>
            <li><a href="#sertifika" className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2"><span className="text-slate-400 text-sm w-16">Ek-1</span> Best Event Güvenlik Taahhütnamesi</a></li>
            <li><a href="#checklist" className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2"><span className="text-slate-400 text-sm w-16">Ek-2</span> Parti Öncesi Güvenlik Kontrol Listesi</a></li>
            <li><a href="#sss" className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2"><span className="text-slate-400 text-sm w-16">Ek-3</span> Sık Sorulan Sorular</a></li>
          </ul>
        </div>
      </div>

      {/* Giriş */}
      <div id="giris" className="mb-12">
        <div className="bg-slate-700 text-white px-6 py-3 rounded-t-lg">
          <h2 className="text-xl font-bold uppercase tracking-wide">Giriş: Neden Güvenlik ve Hijyen Standartları Gereklidir?</h2>
        </div>
        <div className="border border-t-0 border-slate-300 rounded-b-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Çocuk doğum günü organizasyonları, ailelerin en değerli varlıkları olan çocuklarını emanet ettikleri özel etkinliklerdir. Her yıl Türkiye genelinde binlerce çocuk partisi düzenlenmekte ve ne yazık ki güvenlik standartlarına yeterince dikkat edilmemesi nedeniyle istenmeyen olaylar yaşanabilmektedir. Düşme, yanık, alerjik reaksiyon, boğulma riski ve hijyen kaynaklı enfeksiyonlar bunların başında gelir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            İstanbul gibi büyük bir metropolde her hafta yüzlerce çocuk doğum günü organizasyonu düzenlenmektedir. Bu organizasyonların önemli bir kısmı evlerde, restoranlarda, oyun salonlarında veya açık hava mekanlarında gerçekleştirilir. Her mekan türü kendine özgü güvenlik riskleri barındırır ve bu risklerin önceden tespit edilerek bertaraf edilmesi hayati önem taşır. Özellikle 2-10 yaş arasındaki çocukların fiziksel koordinasyon yetenekleri henüz tam gelişmediğinden, düşme ve çarpma kazaları sıklıkla yaşanmaktadır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Profesyonel bir organizasyon firması olarak güvenlik ve hijyen standartlarını en üst düzeyde tutmak, sadece yasal bir zorunluluk değil, aynı zamanda ahlaki bir sorumluluktur. Bu rehber dokümanında, çocuk doğum günü organizasyonlarında uygulanması gereken tüm güvenlik ve hijyen standartlarını maddeler halinde detaylı olarak ele alacağız. Amacımız hem organizasyon firmalarına hem de ailelere kapsamlı bir yol haritası sunmaktır.
          </p>

          {/* Uyarı Kutusu */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg mt-6">
            <div className="flex items-start gap-3">
              <span className="text-yellow-600 text-2xl flex-shrink-0">&#9888;</span>
              <div>
                <h4 className="font-bold text-yellow-800 mb-1">Kritik Uyarı</h4>
                <p className="text-yellow-700 text-sm">
                  Bu dokümandaki standartlar, çocukların fiziksel ve psikolojik güvenliğini sağlamak amacıyla oluşturulmuştur. Herhangi bir maddenin ihmal edilmesi ciddi sonuçlara yol açabilir. Tüm organizatörler ve hizmet sağlayıcılar bu standartlara eksiksiz uymakla yükümlüdür. Güvenlik, eğlenceden önce gelir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Madde 1: Mekan Güvenliği */}
      <div id="madde-1" className="mb-12">
        <div className="bg-slate-700 text-white px-6 py-3 rounded-t-lg flex items-center gap-3">
          <span className="bg-white text-slate-700 text-sm font-bold px-3 py-1 rounded">Madde 1</span>
          <h2 className="text-xl font-bold uppercase tracking-wide">Mekan Güvenliği Standartları</h2>
        </div>
        <div className="border border-t-0 border-slate-300 rounded-b-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Doğum günü organizasyonunun gerçekleştirileceği mekan, güvenlik zincirinin ilk ve en kritik halkasıdır. Mekan seçiminden itibaren güvenlik perspektifi devreye girmelidir. Ev ortamında yapılan partilerden profesyonel organizasyon salonlarına kadar her mekan türü ayrı bir değerlendirme gerektirir. İstatistiklere göre çocuk partilerinde yaşanan kazaların yüzde altmışı mekan kaynaklı fiziksel tehlikelerden kaynaklanmaktadır. Aşağıda mekan güvenliği için kontrol edilmesi gereken temel unsurlar sıralanmıştır.
          </p>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">1.1 Elektrik Güvenliği</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Tüm prizler çocuk güvenlik kapağı ile kapatılmalıdır. Özellikle yer seviyesindeki prizler en büyük riski oluşturur. Priz kapakları vida sistemiyle sabitlenmeli, çocukların elle çıkaramayacağı türde olmalıdır.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Ses sistemi, ışık ekipmanı ve diğer elektronik cihazların kabloları kablo kanalı veya yapışkan bantla zemine sabitlenmelidir. Serbest kablolar takılma ve düşme kazalarının başlıca sebebidir.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Uzatma kabloları çocukların erişemeyeceği yükseklikte tutulmalı veya mobilya arkasına gizlenmelidir. Çoklu priz kullanımında aşırı yükleme yapılmamalıdır.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Işıklandırma ekipmanlarının ısınma riski değerlendirilmeli, LED aydınlatma tercih edilmelidir. Halojen lambalar ve spot ışıklar ciddi yanık riski oluşturur ve çocukların erişim alanından uzak tutulmalıdır.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">1.2 Fiziksel Güvenlik Önlemleri</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Masa, sandalye ve sehpa köşelerine silikon köşe koruyucu takılmalıdır. Özellikle cam masalar için bu önlem zorunludur. Çocuklar koşarken köşelere çarpma riski çok yüksektir.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Balkon ve merdiven girişleri güvenlik bariyeri ile kapatılmalıdır. Çocukların erişemeyeceği kilitleme mekanizması kullanılmalıdır. Bariyerler en az 90 santimetre yüksekliğinde olmalı ve aralıkları 10 santimetreyi geçmemelidir.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Zemin kaymaz özellikte olmalı veya kaymaz halı ve paspas serilmelidir. Islak alanlar derhal kurulanmalıdır. Özellikle mermer ve seramik zeminler yüksek kayma riski taşır.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Kırılabilir obje, vazo, çerçeve ve dekoratif eşyalar çocukların erişim alanından kaldırılmalıdır. Raflar duvara sabitlenmeli, devrilme riski ortadan kaldırılmalıdır.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">1.3 Acil Çıkış ve Erişim</h3>
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">En az iki farklı acil çıkış noktası belirlenmelidir. Bu çıkışlar hiçbir zaman eşya ile kapatılmamalıdır. Her çıkış noktasında yönlendirme levhası bulunmalıdır.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Acil çıkış yolları fosforlu işaretlerle belirtilmeli ve tüm personele gösterilmelidir. Elektrik kesintisinde bile görünür olan işaretler tercih edilmelidir.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Yangın söndürücü ve yangın battaniyesi kolay erişilebilir bir konumda bulundurulmalıdır. Son kullanma tarihleri kontrol edilmelidir. Söndürücünün ABC sınıfı olması tercih edilmelidir.</p>
            </div>
          </div>

          {/* Uyarı Kutusu */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <span className="text-yellow-600 text-2xl flex-shrink-0">&#9888;</span>
              <p className="text-yellow-700 text-sm">
                <strong>Dikkat:</strong> Ev ortamında yapılan organizasyonlarda mutfak girişi mutlaka kontrol altında tutulmalıdır. Bıçak, çatal, cam bardak ve sıcak su ısıtıcıları çocukların erişim alanından uzaklaştırılmalıdır. Banyo kapıları kilitlenmeli veya güvenlik mandalı takılmalıdır. İlaç dolapları ve temizlik malzemeleri kesinlikle kilitli tutulmalıdır.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Madde 2: Gıda Güvenliği */}
      <div id="madde-2" className="mb-12">
        <div className="bg-slate-700 text-white px-6 py-3 rounded-t-lg flex items-center gap-3">
          <span className="bg-white text-slate-700 text-sm font-bold px-3 py-1 rounded">Madde 2</span>
          <h2 className="text-xl font-bold uppercase tracking-wide">Gıda Güvenliği ve Alerji Yönetimi</h2>
        </div>
        <div className="border border-t-0 border-slate-300 rounded-b-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Çocuk partilerinde sunulan yiyecek ve içecekler, hem beslenme güvenliği hem de alerji yönetimi açısından dikkatle planlanmalıdır. Türkiye'de her 13 çocuktan birinin en az bir gıda alerjisi olduğu bilinmektedir. Bu oran, 20 çocukluk bir parti grubunda ortalama 1-2 çocuğun alerjik olduğu anlamına gelir. Bu durum organizasyonlarda gıda güvenliğini stratejik öncelik haline getirmektedir.
          </p>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">2.1 Gıda Hazırlama ve Saklama</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase">Soğuk Zincir Kuralları</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">&#10003;</span> Süt ürünleri ve kremalar +4 derece altında saklanmalıdır</li>
                <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">&#10003;</span> Pasta en fazla 2 saat oda sıcaklığında bırakılmalıdır</li>
                <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">&#10003;</span> Meyve tabağı hazırlandıktan sonra 1 saat içinde servis edilmelidir</li>
                <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">&#10003;</span> Sandviçler ve ıslak gıdalar buzdolabında bekletilmelidir</li>
                <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">&#10003;</span> Et ve şarküteri ürünleri servis edilecekse soğuk zincir kesinlikle korunmalıdır</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase">Servis Kuralları</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">&#10003;</span> Her yiyeceğin yanında içerik kartı bulunmalıdır</li>
                <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">&#10003;</span> Servis personeli tek kullanımlık eldiven kullanmalıdır</li>
                <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">&#10003;</span> Açık büfe yerine porsiyonlanmış servis tercih edilmelidir</li>
                <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">&#10003;</span> İçecekler kapaklı bardaklarda sunulmalıdır</li>
                <li className="flex items-start gap-2"><span className="text-green-600 flex-shrink-0">&#10003;</span> Servis tezgahı düzenli aralıklarla temizlenmelidir</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">2.2 Alerji Yönetim Protokolü</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gıda alerjileri çocuklarda ciddi sağlık sorunlarına, hatta anafilaktik şoka neden olabilir. Bu nedenle alerji yönetimi sistematik bir şekilde ele alınmalıdır. Davetiye gönderme aşamasından itibaren alerji bilgisi toplanmalı ve etkinlik gününe kadar güncellenmesi sağlanmalıdır. Her ebeveynden yazılı alerji bilgi formu alınması zorunlu tutulmalıdır.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-4">
            <h4 className="font-bold text-red-800 mb-3">En Yaygın Çocukluk Çağı Alerjenleri</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white rounded-lg p-3 text-center border border-red-100">
                <p className="font-bold text-red-700 text-sm">Fındık / Yer Fıstığı</p>
                <p className="text-gray-500 text-xs mt-1">Anafilaksi riski yüksek</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-red-100">
                <p className="font-bold text-red-700 text-sm">Süt Proteini</p>
                <p className="text-gray-500 text-xs mt-1">En yaygın alerjen</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-red-100">
                <p className="font-bold text-red-700 text-sm">Yumurta</p>
                <p className="text-gray-500 text-xs mt-1">Pastalarda dikkat</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-red-100">
                <p className="font-bold text-red-700 text-sm">Glüten</p>
                <p className="text-gray-500 text-xs mt-1">Çölyak riski</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <span className="text-yellow-600 text-2xl flex-shrink-0">&#9888;</span>
              <p className="text-yellow-700 text-sm">
                <strong>Hayati Uyarı:</strong> Alerji bilgisi toplansa bile etkinlik günü ikram masasına "Bu masada fındık, fıstık, süt, yumurta ve glüten içeren ürünler bulunmaktadır" şeklinde genel uyarı kartı konulmalıdır. Alerji öyküsü olan çocukların ebeveynleri ikram konusunda ayrıca bilgilendirilmelidir. Ciddi alerji öyküsü olan çocukların velilerinin etkinlik süresince mekanda bulunması önerilir.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Madde 3: Oyun Alanı Güvenliği */}
      <div id="madde-3" className="mb-12">
        <div className="bg-slate-700 text-white px-6 py-3 rounded-t-lg flex items-center gap-3">
          <span className="bg-white text-slate-700 text-sm font-bold px-3 py-1 rounded">Madde 3</span>
          <h2 className="text-xl font-bold uppercase tracking-wide">Oyun Alanı Güvenlik Protokolü</h2>
        </div>
        <div className="border border-t-0 border-slate-300 rounded-b-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Çocuk doğum günü organizasyonlarında oyun alanı, çocukların en aktif olduğu ve dolayısıyla en fazla kaza riskinin bulunduğu bölgedir. Oyun alanının tasarımı, ekipmanların güvenliği ve çocukların denetimi konusunda titiz standartlar uygulanmalıdır. Her aktivite türü kendi güvenlik protokolünü gerektirir ve bu protokoller etkinlik öncesinde tüm personele aktarılmalıdır.
          </p>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">3.1 Genel Oyun Alanı Kuralları</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Oyun alanı ile yemek ve ikram alanı fiziksel olarak ayrılmalıdır. Koşan çocukların masalara çarpma riski ortadan kaldırılmalıdır. En az 2 metre mesafe bırakılmalıdır.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Her 10 çocuk için en az 1 yetişkin gözetmen bulunmalıdır. 20 çocuğun üzerindeki organizasyonlarda ek güvenlik personeli zorunludur. Gözetmenler aktif şekilde çocukları gözlemlemelidir.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Oyun alanının sınırları belirgin şekilde işaretlenmelidir. Renkli bant veya şerit ile güvenli bölge tanımlanmalıdır. Çocukların alanın dışına çıkmaması sağlanmalıdır.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Yaş gruplarına göre aktivite alanları ayrılmalıdır. 2-4 yaş grubu ile 8-10 yaş grubunun aynı alanda koşturması ciddi çarpışma riski oluşturur. Küçük çocuklar için ayrı bir güvenli köşe oluşturulmalıdır.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">3.2 Aktivite Bazlı Güvenlik Standartları</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">B</span>
                Bubble Show Güvenliği
              </h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>- Sabun solüsyonu dermatolog onaylı olmalıdır</li>
                <li>- Zemine kaymaz paspas serilmelidir</li>
                <li>- Çocuklar sahneden en az 1.5 metre uzakta tutulmalıdır</li>
                <li>- Gösteri sonrası zemin derhal kurulanmalıdır</li>
                <li>- Göz teması halinde temiz su ile yıkama imkanı bulunmalıdır</li>
              </ul>
              <p className="text-blue-600 text-xs mt-3">
                <Link to="/organizasyonlar/bubble-show" className="underline hover:text-blue-800 font-semibold">Bubble show hizmetimiz</Link> tüm bu standartlara uygun şekilde gerçekleştirilmektedir.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">Y</span>
                Yüz Boyama Güvenliği
              </h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>- FDA onaylı, hipoalerjenik boyalar kullanılmalıdır</li>
                <li>- Her çocuk için ayrı fırça ve sünger kullanılmalıdır</li>
                <li>- Boyama öncesi küçük bir cilt testi yapılmalıdır</li>
                <li>- Göz çevresine boya uygulanmamalıdır</li>
                <li>- Temizleme mendili ve temiz su hazır bulundurulmalıdır</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs">S</span>
                Sosis Balon Güvenliği
              </h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>- Patlayan balon parçaları derhal toplanmalıdır</li>
                <li>- 3 yaş altı çocuklara sönmüş balon verilmemelidir</li>
                <li>- Lateks alerjisi önceden sorgulanmalıdır</li>
                <li>- Balon şişirme işlemi çocuklardan uzakta yapılmalıdır</li>
                <li>- Alternatif olarak lateks içermeyen balonlar bulundurulmalıdır</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">M</span>
                Müzikli Oyun Güvenliği
              </h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>- Ses seviyesi 75 desibeli geçmemelidir</li>
                <li>- Sandalye kapmaca gibi oyunlarda yumuşak minderler kullanılmalıdır</li>
                <li>- Koşma oyunlarında çarpışma riski minimize edilmelidir</li>
                <li>- Yarışmalarda düşme riski olan alanlar kontrol edilmelidir</li>
                <li>- Ödül dağıtımında itişme ve kakışma önlenmelidir</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <span className="text-yellow-600 text-2xl flex-shrink-0">&#9888;</span>
              <p className="text-yellow-700 text-sm">
                <strong>Önemli Not:</strong> Açık hava organizasyonlarında güneş çarpması ve sivrisinek ısırığı riskine karşı önlem alınmalıdır. Gölgelik alan oluşturulmalı, çocuklara düzenli su içirilmeli ve sivrisinek kovucu bulundurulmalıdır. Yaz aylarında saat 12:00-15:00 arası doğrudan güneş altında etkinlik yapılmamalıdır. Çocuklara güneş kremi sürülmesi ebeveynlere hatırlatılmalıdır.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Madde 4: Hijyen Standartları */}
      <div id="madde-4" className="mb-12">
        <div className="bg-slate-700 text-white px-6 py-3 rounded-t-lg flex items-center gap-3">
          <span className="bg-white text-slate-700 text-sm font-bold px-3 py-1 rounded">Madde 4</span>
          <h2 className="text-xl font-bold uppercase tracking-wide">Hijyen Standartları ve Dezenfeksiyon Protokolü</h2>
        </div>
        <div className="border border-t-0 border-slate-300 rounded-b-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Çocuk doğum günü partilerinde hijyen standartları, enfeksiyon hastalıklarının yayılmasını önlemenin en etkili yoludur. Özellikle kış aylarında grip ve soğuk algınlığı, yaz aylarında ise bağırsak enfeksiyonları riski artmaktadır. Çocukların bağışıklık sistemi yetişkinlere kıyasla daha zayıf olduğundan, hijyen protokollerine titizlikle uyulması hayati önem taşır. Kapsamlı bir hijyen protokolü hem etkinlik öncesi hazırlık sürecini hem de etkinlik sırasındaki uygulamaları kapsamalıdır.
          </p>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">4.1 Etkinlik Öncesi Dezenfeksiyon</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</span>
                <p className="text-gray-700 text-sm"><strong>Yüzey Dezenfeksiyonu:</strong> Tüm masalar, sandalyeler, kapı kolları ve tırabzanlar gıda güvenliğine uygun dezenfektanla silinmelidir. Özellikle çocukların sıkça temas ettiği yüzeyler öncelikli olarak temizlenmelidir.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</span>
                <p className="text-gray-700 text-sm"><strong>Zemin Temizliği:</strong> Organizasyon alanı profesyonel zemin temizleyici ile yıkanmalı veya silinmelidir. Küçük çocuklar yerde oynadığından zemin hijyeni kritik öneme sahiptir.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</span>
                <p className="text-gray-700 text-sm"><strong>Tuvalet Kontrolü:</strong> Tuvaletler temizlenmeli, sabun, kağıt havlu ve çocuk boy tuvalet aparatı kontrol edilmelidir. Tuvalet temizliği etkinlik süresince saatlik periyotlarla tekrarlanmalıdır.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">4</span>
                <p className="text-gray-700 text-sm"><strong>Havalandırma:</strong> Kapalı mekanlarda etkinlikten en az 30 dakika önce havalandırma yapılmalıdır. Pencereler açılarak doğal hava sirkülasyonu sağlanmalıdır.</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">4.2 Etkinlik Sırası Hijyen Uygulamaları</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Giriş noktasına ve ikram masası yakınına otomatik el dezenfektan dispenseri yerleştirilmelidir. Alkol bazlı ve çocuklara uygun formülde olmalıdır. Dezenfektanlar çocukların ulaşamayacağı ancak yetişkinlerin kolayca erişebileceği yüksekliğe monte edilmelidir.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Yemek öncesi tüm çocukların ellerini yıkaması veya dezenfekte etmesi sağlanmalıdır. Animatör bu süreci oyunlaştırarak yönlendirebilir. Örneğin "el yıkama yarışması" gibi eğlenceli bir aktivite ile çocuklar hijyen alışkanlığı kazanır.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Ortak kullanılan oyuncak ve ekipmanlar her 30 dakikada bir antiseptik mendille silinmelidir. Özellikle ağza götürülme riski olan oyuncaklar sık sterilize edilmelidir.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Çöp kutuları kapaklı olmalı ve düzenli aralıklarla boşaltılmalıdır. Islak çöp ile kuru çöp ayrı toplanmalıdır. Yiyecek artıkları sinek ve bakteri üremesini önlemek için kapalı poşetlerde atılmalıdır.</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-lg flex-shrink-0">&#10003;</span>
              <p className="text-gray-700 text-sm">Hasta belirtisi gösteren çocuklar nazikçe tespit edilmeli ve ebeveynleriyle iletişime geçilmelidir. Burun akıntısı, öksürük veya ateş belirtileri ciddiye alınmalıdır.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">4.3 Ekipman ve Malzeme Hijyeni</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white mx-auto mb-3 text-lg font-bold">M</div>
              <h4 className="font-bold text-slate-800 text-sm mb-2">Makyaj Malzemeleri</h4>
              <p className="text-gray-600 text-xs">Her etkinlik öncesi sterilize edilir. Tek kullanımlık aplikatörler tercih edilir. Son kullanma tarihi kontrol edilir.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white mx-auto mb-3 text-lg font-bold">K</div>
              <h4 className="font-bold text-slate-800 text-sm mb-2">Kostümler</h4>
              <p className="text-gray-600 text-xs">Her kullanım sonrası yıkanır ve dezenfekte edilir. Kumaş yumuşatıcı çocuklara uygun formülde seçilir.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white mx-auto mb-3 text-lg font-bold">S</div>
              <h4 className="font-bold text-slate-800 text-sm mb-2">Ses ve Işık Ekipmanı</h4>
              <p className="text-gray-600 text-xs">Mikrofon başlıkları her kullanım öncesi değiştirilir. Ekipman yüzeyleri dezenfektanla silinir.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Madde 5: Animatör Sertifikaları */}
      <div id="madde-5" className="mb-12">
        <div className="bg-slate-700 text-white px-6 py-3 rounded-t-lg flex items-center gap-3">
          <span className="bg-white text-slate-700 text-sm font-bold px-3 py-1 rounded">Madde 5</span>
          <h2 className="text-xl font-bold uppercase tracking-wide">Animatör ve Personel Güvenlik Sertifikaları</h2>
        </div>
        <div className="border border-t-0 border-slate-300 rounded-b-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Çocuklarla birebir temas halinde olan animatörler, palyaçolar ve organizasyon personeli, belirli yetkinlik ve güvenlik standartlarını karşılamalıdır. Bu standartlar hem çocukların güvenliğini hem de hizmet kalitesini garanti altına alır. Profesyonel bir organizasyon firmasının bünyesinde çalışan her personelin aşağıdaki sertifika ve belgelere sahip olması zorunludur. Sertifikasız personelle çalışmak hem güvenlik riski hem de yasal sorumluluk doğurur.
          </p>

          {/* Sertifika Kutuları */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-lg">&#10004;</span>
                </div>
                <h4 className="font-bold text-slate-800">Adli Sicil Kaydı</h4>
              </div>
              <p className="text-gray-600 text-sm">Tüm personelin adli sicil kaydı temiz olmalıdır. Özellikle çocuklara yönelik suçlardan sabıka kaydı bulunmamalıdır. Bu belge her 6 ayda bir yenilenmelidir.</p>
            </div>
            <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-lg">&#10004;</span>
                </div>
                <h4 className="font-bold text-slate-800">İlk Yardım Sertifikası</h4>
              </div>
              <p className="text-gray-600 text-sm">Kızılay veya Sağlık Bakanlığı onaylı temel ilk yardım sertifikası zorunludur. Sertifika her 2 yılda bir yenilenmelidir. CPR eğitimi dahil olmalıdır.</p>
            </div>
            <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-lg">&#10004;</span>
                </div>
                <h4 className="font-bold text-slate-800">Çocuk Gelişimi Eğitimi</h4>
              </div>
              <p className="text-gray-600 text-sm">Çocuk psikolojisi ve gelişim aşamaları konusunda en az 40 saatlik eğitim belgesi gereklidir. Yaş gruplarına uygun iletişim tekniklerini kapsamalıdır.</p>
            </div>
            <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-lg">&#10004;</span>
                </div>
                <h4 className="font-bold text-slate-800">Hijyen Eğitimi Belgesi</h4>
              </div>
              <p className="text-gray-600 text-sm">Gıda ve genel hijyen konusunda eğitim belgesi zorunludur. Kişisel hijyen, el yıkama protokolü ve bulaşıcı hastalıklar konusunda bilgi sahibi olunmalıdır.</p>
            </div>
            <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-lg">&#10004;</span>
                </div>
                <h4 className="font-bold text-slate-800">Yangın Güvenliği Eğitimi</h4>
              </div>
              <p className="text-gray-600 text-sm">Temel yangın söndürme, tahliye prosedürleri ve acil durum yönetimi konusunda eğitim belgesi gereklidir. Yılda en az bir kez tazeleme eğitimi alınmalıdır.</p>
            </div>
            <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-lg">&#10004;</span>
                </div>
                <h4 className="font-bold text-slate-800">Sağlık Raporu</h4>
              </div>
              <p className="text-gray-600 text-sm">Bulaşıcı hastalık taşımadığına dair güncel sağlık raporu zorunludur. Portör muayenesi yılda bir kez yaptırılmalıdır. Hepatit B aşısı önerilir.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <Link to="/organizasyonlar/palyaco-kiralama" className="text-slate-700 underline hover:text-slate-900 font-semibold">Palyaço kiralama hizmetimizde</Link> görev alan tüm animatörlerimiz yukarıdaki sertifikalara sahiptir. Ayrıca her animatör, göreve başlamadan önce 2 haftalık uygulamalı staj programından geçmektedir. Bu süreçte deneyimli ekip arkadaşları eşliğinde gerçek etkinliklerde gözlemci olarak yer alırlar. Staj sürecini başarıyla tamamlayan animatörler aktif görev alır.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <span className="text-yellow-600 text-2xl flex-shrink-0">&#9888;</span>
              <p className="text-yellow-700 text-sm">
                <strong>Dikkat:</strong> Bireysel olarak animatör veya palyaço kiralama yapan ailelerin, bu sertifikaları mutlaka sorgulamasını öneriyoruz. Sertifikasız personelle çalışmak hem güvenlik riski oluşturur hem de olası bir kaza durumunda yasal sorumluluk doğurabilir. Referans ve geçmiş etkinlik videoları da mutlaka istenmelidir.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Madde 6: Acil Durum Planı */}
      <div id="madde-6" className="mb-12">
        <div className="bg-slate-700 text-white px-6 py-3 rounded-t-lg flex items-center gap-3">
          <span className="bg-white text-slate-700 text-sm font-bold px-3 py-1 rounded">Madde 6</span>
          <h2 className="text-xl font-bold uppercase tracking-wide">Acil Durum Planı ve İlk Yardım Protokolü</h2>
        </div>
        <div className="border border-t-0 border-slate-300 rounded-b-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Her ne kadar tüm önlemler alınsa da beklenmedik durumlar her zaman yaşanabilir. Profesyonel bir organizasyon firması, olası senaryolara karşı kapsamlı bir acil durum planı hazırlamalı ve tüm ekip üyelerini bu plan hakkında bilgilendirmelidir. Acil durum planı yazılı olarak hazırlanmalı ve etkinlik süresince sorumlu kişinin yanında bulundurulmalıdır. Plansız müdahale, paniğe ve daha büyük sorunlara yol açabilir.
          </p>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">6.1 İlk Yardım Çantası İçeriği</h3>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
            <p className="text-red-800 font-bold text-sm mb-3">Zorunlu İlk Yardım Çantası Malzemeleri:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-red-600">&#10003;</span> Steril gazlı bez</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-red-600">&#10003;</span> Yara bandı (çeşitli boy)</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-red-600">&#10003;</span> Antiseptik solüsyon</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-red-600">&#10003;</span> Elastik bandaj</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-red-600">&#10003;</span> Buz kompresi</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-red-600">&#10003;</span> Makas ve cımbız</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-red-600">&#10003;</span> Tek kullanımlık eldiven</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-red-600">&#10003;</span> Ateş ölçer</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><span className="text-red-600">&#10003;</span> Göz yıkama solüsyonu</div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">6.2 Acil Durum Senaryoları ve Müdahale Prosedürleri</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white px-4 py-2 text-sm font-bold">Senaryo A: Düşme ve Çarpma Yaralanması</div>
              <div className="p-4">
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">1.</span> Çocuğu sakinleştirin ve yaralı bölgeyi inceleyin.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">2.</span> Hafif yaralanmalarda antiseptik ile temizleyip yara bandı uygulayın.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">3.</span> Şişme varsa buz kompresi uygulayın ve yüksekte tutun.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">4.</span> Ebeveynleri derhal bilgilendirin ve durumu aktarın.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">5.</span> Ciddi durumda 112 acil servisi arayın ve en yakın hastaneye yönlendirin.</li>
                </ol>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-orange-600 text-white px-4 py-2 text-sm font-bold">Senaryo B: Alerjik Reaksiyon</div>
              <div className="p-4">
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">1.</span> Alerjene maruziyeti derhal durdurun ve çocuğu uzaklaştırın.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">2.</span> Çocuğun nefes yolunun açık olduğundan emin olun. Dudak ve dil şişmesine dikkat edin.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">3.</span> Ebeveynlerle iletişime geçin ve epipen bilgisi varsa uygulayın.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">4.</span> 112 acil servisi arayın ve belirtileri aktarın.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">5.</span> Çocuğu serin ve rahat bir ortamda yatırarak bacaklarını yukarı kaldırın.</li>
                </ol>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-yellow-600 text-white px-4 py-2 text-sm font-bold">Senaryo C: Yangın veya Duman</div>
              <div className="p-4">
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">1.</span> Panik yapmadan tüm çocukları acil çıkışa yönlendirin. Sakin ve kararlı komutlar verin.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">2.</span> Çocukları sayarak tamamının tahliye edildiğinden emin olun.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">3.</span> 110 itfaiye hattını arayın ve adresi net olarak bildirin.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">4.</span> Küçük yangınlarda söndürücü kullanın, büyükse derhal tahliye edin.</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-slate-700">5.</span> Toplanma noktasında çocuk sayısını tekrar kontrol edin ve ebeveynleri arayın.</li>
                </ol>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">6.3 Acil İletişim Bilgileri Şablonu</h3>
          <div className="bg-slate-50 border-2 border-slate-300 rounded-lg p-5 mb-4">
            <p className="text-slate-700 text-sm mb-4">Aşağıdaki bilgiler etkinlik öncesinde doldurulmalı ve sorumlu personelde bulundurulmalıdır:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="text-slate-500 w-48 font-medium">En Yakın Hastane:</span>
                <span className="text-slate-400 italic">____________________________</span>
              </div>
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="text-slate-500 w-48 font-medium">Hastane Telefon:</span>
                <span className="text-slate-400 italic">____________________________</span>
              </div>
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="text-slate-500 w-48 font-medium">Organizatör Sorumlu:</span>
                <span className="text-slate-400 italic">____________________________</span>
              </div>
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="text-slate-500 w-48 font-medium">Acil Durum (112):</span>
                <span className="text-slate-700 font-bold">112</span>
              </div>
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="text-slate-500 w-48 font-medium">İtfaiye (110):</span>
                <span className="text-slate-700 font-bold">110</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 w-48 font-medium">Zehir Danışma (114):</span>
                <span className="text-slate-700 font-bold">114</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sertifika Kutusu: Best Event Güvenlik Taahhüdü */}
      <div id="sertifika" className="mb-12">
        <div className="bg-slate-800 text-white px-6 py-3 rounded-t-lg flex items-center gap-3">
          <span className="bg-amber-500 text-slate-900 text-sm font-bold px-3 py-1 rounded">Ek-1</span>
          <h2 className="text-xl font-bold uppercase tracking-wide">Best Event Güvenlik Taahhütnamesi</h2>
        </div>
        <div className="border-2 border-slate-800 rounded-b-lg p-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-full mb-4">
              <span className="text-amber-400 text-4xl">&#9733;</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">GÜVENLİK VE HİJYEN TAAHHÜT BELGESİ</h3>
            <p className="text-slate-500 text-sm">Best Event Organizasyon Hizmetleri</p>
          </div>

          <div className="border-t-2 border-b-2 border-slate-300 py-6 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              Best Event olarak, düzenlediğimiz tüm çocuk doğum günü organizasyonlarında aşağıdaki güvenlik ve hijyen standartlarına eksiksiz uyacağımızı taahhüt ederiz:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <span className="text-xs">&#10004;</span>
                </div>
                <p className="text-gray-700 text-sm">Tüm ekip üyelerimiz güncel ilk yardım sertifikasına, adli sicil kaydına ve hijyen eğitimi belgesine sahiptir.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <span className="text-xs">&#10004;</span>
                </div>
                <p className="text-gray-700 text-sm">Her etkinlik öncesinde 42 maddelik güvenlik kontrol listesi uygulanır ve belgelenir.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <span className="text-xs">&#10004;</span>
                </div>
                <p className="text-gray-700 text-sm">Kullandığımız tüm malzemeler (boya, sabun solüsyonu, balon, makyaj) uluslararası güvenlik standartlarına uygun ve sertifikalıdır.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <span className="text-xs">&#10004;</span>
                </div>
                <p className="text-gray-700 text-sm">Her etkinlikte tam donanımlı ilk yardım çantası ve acil durum iletişim planı bulundurulur.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <span className="text-xs">&#10004;</span>
                </div>
                <p className="text-gray-700 text-sm">Gıda alerjisi ve özel gereksinimler etkinlik öncesinde kaydedilir ve tüm ekibe bildirilir.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <span className="text-xs">&#10004;</span>
                </div>
                <p className="text-gray-700 text-sm">Yılda iki kez tüm ekip üyelerimize güvenlik ve hijyen tazeleme eğitimi verilir.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <span className="text-xs">&#10004;</span>
                </div>
                <p className="text-gray-700 text-sm">Mesleki sorumluluk sigortamız tüm etkinliklerimizi kapsamaktadır.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-sm mb-6">
            <Link to="/organizasyonlar/full-paket-organizasyon" className="text-slate-700 underline hover:text-slate-900 font-semibold">Full paket doğum günü organizasyonu hizmetimiz</Link>, bu taahhütnamedeki tüm standartları kapsayan entegre bir hizmet paketidir. Güvenliğiniz ve huzurunuz bizim birinci önceliğimizdir. Mekan keşfinden etkinlik sonrası temizliğe kadar her aşamada güvenlik standartlarımızdan taviz vermiyoruz.
          </p>

          <div className="text-center">
            <p className="text-slate-500 text-xs">Doküman No: BE-GH-2026-007 | Geçerlilik: 2026-2027</p>
          </div>
        </div>
      </div>

      {/* Kontrol Listesi: Parti Öncesi Güvenlik Checklist */}
      <div id="checklist" className="mb-12">
        <div className="bg-slate-800 text-white px-6 py-3 rounded-t-lg flex items-center gap-3">
          <span className="bg-amber-500 text-slate-900 text-sm font-bold px-3 py-1 rounded">Ek-2</span>
          <h2 className="text-xl font-bold uppercase tracking-wide">Parti Öncesi Güvenlik Kontrol Listesi</h2>
        </div>
        <div className="border-2 border-slate-800 rounded-b-lg p-6 bg-white">
          <p className="text-gray-700 text-sm mb-6">
            Aşağıdaki kontrol listesi, etkinlikten en az 2 saat önce sorumlu personel tarafından uygulanmalıdır. Her madde kontrol edildikten sonra işaretlenmelidir. Eksik madde varsa etkinlik başlatılmadan önce giderilmelidir. Bu liste aynı zamanda ebeveynlerin de organizasyon firmasını denetlemesi için bir referans niteliğindedir.
          </p>

          <h3 className="text-lg font-bold text-slate-800 mb-4 bg-slate-100 p-3 rounded">A. Mekan Güvenliği Kontrolleri</h3>
          <div className="space-y-2 mb-6 pl-2">
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Elektrik prizleri çocuk güvenlik kapağı ile kapatıldı</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Kablolar kablo kanalı ile sabitlendi</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Köşe koruyucular takıldı</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Balkon ve merdiven girişleri bariyerle kapatıldı</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Acil çıkış yolları açık ve işaretli</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Yangın söndürücü ve battaniye kontrol edildi</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Kırılabilir objeler kaldırıldı</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 bg-slate-100 p-3 rounded">B. Hijyen Kontrolleri</h3>
          <div className="space-y-2 mb-6 pl-2">
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Tüm yüzeyler dezenfekte edildi</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">El dezenfektan istasyonları yerleştirildi</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Tuvaletler temiz, sabun ve kağıt havlu mevcut</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Çöp kutuları kapaklı ve boş</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Havalandırma yapıldı</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 bg-slate-100 p-3 rounded">C. Gıda Güvenliği Kontrolleri</h3>
          <div className="space-y-2 mb-6 pl-2">
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Alerji bilgi listesi güncellendi ve personele dağıtıldı</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Yiyecek içerik kartları hazırlandı</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Soğuk zincir gerektiren ürünler buzdolabında</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Tek kullanımlık servis eldivenleri hazır</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 bg-slate-100 p-3 rounded">D. Acil Durum Hazırlığı</h3>
          <div className="space-y-2 mb-6 pl-2">
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">İlk yardım çantası tam ve kolay erişilebilir konumda</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Acil durum iletişim listesi hazır (hastane, ebeveynler, 112)</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Tüm personel acil durum prosedürleri hakkında bilgilendirildi</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Tahliye planı ekibe gösterildi</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4 bg-slate-100 p-3 rounded">E. Ekipman ve Personel Kontrolü</h3>
          <div className="space-y-2 mb-4 pl-2">
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Animatör sertifikaları kontrol edildi</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Makyaj malzemeleri sterilize ve son kullanma tarihi geçerli</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Kostümler temiz ve dezenfekte edilmiş</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Ses ve ışık ekipmanları test edildi</p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-green-50 rounded transition-colors">
              <div className="w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">&#10003;</span>
              </div>
              <p className="text-gray-700 text-sm">Yedek ekipman (balon, boya, müzik) hazır</p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg p-4 text-center">
            <p className="text-slate-600 text-xs">Kontrol Tarihi: ___ / ___ / 2026 &nbsp;&nbsp;|&nbsp;&nbsp; Kontrol Eden: _________________ &nbsp;&nbsp;|&nbsp;&nbsp; İmza: _________________</p>
          </div>
        </div>
      </div>

      {/* SSS */}
      <div id="sss" className="mb-12">
        <div className="bg-slate-800 text-white px-6 py-3 rounded-t-lg flex items-center gap-3">
          <span className="bg-amber-500 text-slate-900 text-sm font-bold px-3 py-1 rounded">Ek-3</span>
          <h2 className="text-xl font-bold uppercase tracking-wide">Sık Sorulan Sorular</h2>
        </div>
        <div className="border-2 border-slate-800 rounded-b-lg p-6 bg-white">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <h4 className="font-bold text-slate-800 mb-2 flex items-start gap-2">
                  <span className="bg-slate-700 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{index + 1}</span>
                  {faq.question}
                </h4>
                <p className="text-gray-700 text-sm pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sonuç ve CTA */}
      <div className="bg-slate-700 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Sonuç: Güvenli Parti, Mutlu Çocuklar</h3>
        <p className="text-slate-200 leading-relaxed mb-4">
          Çocuk doğum günü organizasyonlarında güvenlik ve hijyen standartları, eğlencenin kesintisiz ve sorunsuz geçmesi için olmazsa olmaz unsurlardır. Bu rehberde paylaştığımız standartları uygulayan aileler ve organizatörler, hem çocukların güvenliğini sağlar hem de ebeveynlere huzurlu bir deneyim sunar. Unutulmamalıdır ki güvenlik bir maliyet kalemi değil, bir yatırımdır.
        </p>
        <p className="text-slate-200 leading-relaxed mb-6">
          Best Event olarak yılda 1500'den fazla etkinlikte bu standartları eksiksiz uyguluyoruz. Profesyonel ekibimiz, sertifikalı personelimiz ve kapsamlı güvenlik protokollerimizle çocuğunuzun özel gününü hem eğlenceli hem de güvenli hale getiriyoruz. Güvenliğiniz bizim için her şeyden önemlidir. Ailelerimizden aldığımız en değerli geri bildirim "gönül rahatlığıyla keyif aldık" cümlesidir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-slate-700 font-bold text-base px-8 py-4 rounded-full hover:bg-slate-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Arayın: 05307309009
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20G%C3%BCvenli%20do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            WhatsApp ile Bilgi Alın
          </a>
        </div>
      </div>

      {/* Doküman Alt Bilgi */}
      <div className="bg-slate-100 border border-slate-300 rounded-lg p-4 text-center">
        <p className="text-slate-500 text-xs">
          Bu doküman Best Event Organizasyon Hizmetleri tarafından hazırlanmıştır. | Doküman No: BE-GH-2026-007 | Revizyon: 3.0 | Tüm hakları saklıdır.
        </p>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="cocuk-dogum-gunu-guvenlik-hijyen"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/full-paket-organizasyon"
      relatedServiceName="Doğum Günü Organizasyonu"
    />
  )
}

export default CocukDogumGunuGuvenlikHijyen
