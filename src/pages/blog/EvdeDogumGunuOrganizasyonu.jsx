import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const EvdeDogumGunuOrganizasyonu = () => {
  const faqData = [
    {
      question: 'Evde doğum günü organizasyonu için en az kaç gün önceden hazırlığa başlamalıyım?',
      answer: 'İdeal olarak 3-4 hafta önceden hazırlığa başlamanız önerilir. Tema belirleme, davetiye gönderme, malzeme tedariki ve mekan düzenlemesi gibi adımlar zaman alır. Son dakika sürprizlerinden kaçınmak için erken planlamak her zaman daha iyidir.'
    },
    {
      question: 'Evde doğum günü partisi için bütçe nasıl belirlenir?',
      answer: 'Öncelikle davetli sayısını belirleyin. Kişi başı 150-300 TL arası bir bütçe ayırmak makul bir başlangıçtır. Bu bütçeye dekorasyon, yiyecek-içecek, pasta, hediyelik ve eğlence dahildir. Profesyonel hizmetler (palyaço, sihirbaz, bubble show) için ayrı bir bütçe kalemi oluşturun.'
    },
    {
      question: 'Apartman dairesinde doğum günü partisi yaparken komşulara karşı ne yapmalıyım?',
      answer: 'Parti tarihinden en az bir hafta önce komşularınızı bilgilendirin. Partinin başlangıç ve bitiş saatlerini belirtin. Müzik sesini makul seviyede tutun ve saat 21:00\'den sonra ses düzeyini düşürün. Komşulara küçük bir ikram göndermek de nezaket göstergesidir.'
    },
    {
      question: 'Evde doğum günü partisi kaç saat sürmeli?',
      answer: '2-4 yaş arası çocuklar için 1.5-2 saat, 5-8 yaş arası için 2-3 saat, 9-12 yaş arası için 3-4 saat ideal süredir. Çok uzun partiler çocukları yorar ve huzursuzluğa neden olabilir.'
    },
    {
      question: 'Evde parti için hangi eğlence aktiviteleri tercih edilmeli?',
      answer: 'Yaş grubuna göre değişmekle birlikte; müzikli sandalye, hazine avı, yüz boyama, balon modelleme, kukla gösterisi gibi aktiviteler evde kolayca uygulanabilir. Profesyonel bir palyaço veya bubble show gibi hizmetler ise partiyi unutulmaz kılar.'
    },
    {
      question: 'Evde doğum günü organizasyonu mu yoksa dışarıda mı daha avantajlı?',
      answer: 'Evde organizasyon maliyet açısından daha avantajlıdır ve çocuğun kendi ortamında olması güven hissi verir. Ancak alan kısıtlaması, temizlik ve hazırlık yükü dezavantajlarıdır. Profesyonel organizasyon desteği alarak evde parti yapmanın avantajlarını korurken dezavantajları minimize edebilirsiniz.'
    }
  ]

  const relatedServicePath = '/organizasyonlar/full-paket-organizasyon'
  const relatedServiceName = 'Full Paket Organizasyon'

  const content = (
    <>
      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Çocuğunuzun doğum gününü evde kutlamak, hem samimi hem de bütçe dostu bir tercih olabilir. Ancak profesyonel bir dokunuş olmadan ev partileri bazen beklentilerin altında kalabilir. Bu rehberde, evde doğum günü organizasyonunu adım adım nasıl planlayacağınızı, nelere dikkat etmeniz gerektiğini ve partinizi profesyonel seviyeye nasıl taşıyabileceğinizi detaylı şekilde anlatıyoruz. İster her şeyi kendiniz yapın, ister bazı aşamalarda uzman desteği alın; bu kılavuz size yol gösterecek.
      </p>

      {/* İçindekiler */}
      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-4">İçindekiler</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#adim-1-tema-ve-tarih" className="text-blue-600 hover:text-blue-800 hover:underline transition">
                1. Tema ve Tarih Belirleme
              </a>
            </li>
            <li>
              <a href="#adim-2-davetli-listesi" className="text-blue-600 hover:text-blue-800 hover:underline transition">
                2. Davetli Listesi ve Davetiye Hazırlama
              </a>
            </li>
            <li>
              <a href="#adim-3-mekan-duzenleme" className="text-blue-600 hover:text-blue-800 hover:underline transition">
                3. Mekan Düzenleme ve Dekorasyon
              </a>
            </li>
            <li>
              <a href="#adim-4-yiyecek-icecek" className="text-blue-600 hover:text-blue-800 hover:underline transition">
                4. Yiyecek-İçecek ve Pasta Planlaması
              </a>
            </li>
            <li>
              <a href="#adim-5-eglence-aktiviteleri" className="text-blue-600 hover:text-blue-800 hover:underline transition">
                5. Eğlence ve Aktivite Programı
              </a>
            </li>
            <li>
              <a href="#adim-6-parti-gunu-akisi" className="text-blue-600 hover:text-blue-800 hover:underline transition">
                6. Parti Günü Akışı ve Zamanlama
              </a>
            </li>
            <li>
              <a href="#adim-7-profesyonel-destek" className="text-blue-600 hover:text-blue-800 hover:underline transition">
                7. Profesyonel Destek ile Farkı Hissedin
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* ADIM 1 */}
      <section id="adim-1-tema-ve-tarih" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">1</span>
          Tema ve Tarih Belirleme
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Başarılı bir evde doğum günü organizasyonunun ilk ve en kritik adımı, doğru temayı seçmek ve tarihi belirlemektir. Tema, partinin tüm görsel kimliğini, dekorasyonunu, pastasını hatta oyunlarını şekillendirecek ana unsurdur. Çocuğunuzun en sevdiği çizgi film karakteri, renk paleti veya hobi alanı temanız olabilir.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Checklist: Tema Belirleme</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Çocuğunuzun en sevdiği karakter veya konuyu belirleyin (Spiderman, Elsa, Unicorn, Uzay vb.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Temaya uygun renk paleti oluşturun (2-3 ana renk yeterlidir)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Temanın yaş grubuna uygunluğunu kontrol edin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Tarih için hafta sonunu tercih edin ve en az 3 hafta öncesinden planlayın</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Alternatif bir tarih belirleyin (kötü hava koşulları veya beklenmedik durumlar için)</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Popüler temalar arasında prenses partisi, süper kahraman partisi, deniz altı macerası, orman teması, uzay teması ve gökkuşağı partisi yer alır. Tema seçerken çocuğunuzun fikrini almayı unutmayın; sonuçta bu onun özel günü. Ancak çok niş bir tema seçmek malzeme bulmayı zorlaştırabilir, bu nedenle piyasada kolayca bulunabilecek temalar arasından seçim yapmanız pratik olacaktır.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Tarih belirlerken okul takvimini, resmi tatilleri ve yakın çevredeki diğer doğum günlerini göz önünde bulundurun. Hafta sonu öğleden sonra saatleri (14:00-17:00 arası) en ideal zaman dilimidir. Bu saatler hem çocukların enerjik olduğu hem de ailelerin müsait olduğu bir pencere sunar.
        </p>
      </section>

      {/* ADIM 2 */}
      <section id="adim-2-davetli-listesi" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">2</span>
          Davetli Listesi ve Davetiye Hazırlama
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Evde parti yapmanın en belirleyici faktörlerinden biri alan kısıtlamasıdır. Bu nedenle davetli listesini dikkatli bir şekilde oluşturmak gerekir. Genel kural olarak, çocuğunuzun yaşı kadar arkadaş davet etmek makul bir sayıdır. Örneğin 5 yaşına giren bir çocuk için 5-7 çocuk ideal bir gruptur.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Checklist: Davetli ve Davetiye</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Evin kapasitesine göre maksimum davetli sayısını belirleyin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Davetli listesini çocuğunuzla birlikte oluşturun</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Dijital veya basılı davetiye hazırlayın (Canva gibi ücretsiz araçlar kullanabilirsiniz)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Davetiyelerde tarih, saat, adres ve RSVP bilgisini net şekilde belirtin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Alerji veya özel beslenme durumları için ailelere not bırakın</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Davetiyeleri en az 2 hafta önce gönderin</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Davetiye tasarımında temayı yansıtmayı unutmayın. WhatsApp üzerinden gönderilecek dijital davetiyeler hem pratik hem de çevre dostudur. Davetiyenize parti programının kısa bir özetini eklemeniz, ailelerin ne bekleyeceğini bilmesi açısından faydalıdır. Özellikle kostümlü bir parti planlıyorsanız, bu bilgiyi davetiyede belirtmeyi ihmal etmeyin.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Ebeveynlerin de partide kalıp kalmayacağını önceden belirlemek, yiyecek-içecek planlamasını ve oturma düzenini doğrudan etkiler. 4 yaş ve altı çocukların partilerinde genellikle ebeveynler de kalır, bu durumda yetişkinler için de ikramlık hazırlamayı plana dahil etmelisiniz.
        </p>
      </section>

      {/* ADIM 3 */}
      <section id="adim-3-mekan-duzenleme" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">3</span>
          Mekan Düzenleme ve Dekorasyon
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Evinizi bir parti mekanına dönüştürmek, düşündüğünüzden daha kolaydır. Anahtar nokta, bir veya iki odayı parti alanı olarak belirleyip tüm enerjinizi oraya yoğunlaştırmaktır. Kırılabilir eşyaları kaldırın, halıları temizleyin veya kaldırın, ve çocukların güvenle hareket edebileceği geniş bir alan oluşturun.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Checklist: Dekorasyon Malzemeleri</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Temaya uygun balonlar (helyum ve normal balonlar karışık kullanın)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Banner veya yazı süslemeleri (&quot;İyi ki Doğdun&quot; yazısı)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Masa örtüsü, tabak, bardak ve peçete seti (temaya uygun)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Fotoğraf köşesi için arka plan ve aksesuarlar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>LED ışık zincirleri veya peri ışıkları (atmosfer için)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Kapı süslemesi (misafirleri karşılayan ilk izlenim)</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Dekorasyon için en etkili yöntem, odanın bir köşesinde etkileyici bir &quot;focal point&quot; (odak noktası) oluşturmaktır. Bu genellikle pasta masası veya fotoğraf köşesi olur. Balon kemer veya balon sütunu bu alanda harika görünür. Duvarlara temaya uygun görseller asabilir, masalara konfeti serpebilirsiniz.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Fotoğraf köşesi hem çocuklar hem de aileler için partinin en keyifli anlarından birini oluşturur. Basit bir zemin kağıdı veya kumaş, birkaç aksesuar (şapka, gözlük, çerçeve) ile harika bir fotoğraf köşesi kurabilirsiniz. Bu köşede çekilen fotoğraflar, partinin en güzel anıları olarak kalacaktır.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Güvenlik konusunu asla ihmal etmeyin. Mumları çocukların erişemeyeceği yerlere koyun, balon patlamalarına karşı yedek balon bulundurun ve prize takılı kabloların üzerini örtün. Kapı ve pencere güvenliğini tekrar kontrol edin. Çocukların güvenliği her zaman dekorasyondan önce gelir.
        </p>
      </section>

      {/* ADIM 4 */}
      <section id="adim-4-yiyecek-icecek" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">4</span>
          Yiyecek-İçecek ve Pasta Planlaması
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Parti ikramları, konukların en çok hatırladığı detaylardan biridir. Çocuk partilerinde abartılı bir menüye gerek yoktur; önemli olan sunumun temaya uygun, pratik ve çocuk dostu olmasıdır. Parmak yiyecekler (finger food) evde partilerin vazgeçilmezidir.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Checklist: Yiyecek-İçecek Planı</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Ana menü: Mini sandviçler, pizza dilimleri, nugget ve patates kızartması</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Tatlılar: Cupcake, kurabiye, meyve şişleri ve dondurma</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>İçecekler: Meyve suyu, limonata, su (gazlı içeceklerden kaçının)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Doğum günü pastasını en az 1 hafta önceden sipariş edin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Alerji bilgilerini kontrol edin (fıstık, gluten, laktoz)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Yetişkin misafirler için ayrı ikramlık hazırlayın (çay, kahve, kuru pasta)</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Pasta, partinin en önemli görsel unsurlarından biridir. Temaya uygun bir pasta sipariş etmek veya evde kendiniz hazırlamak mümkündür. Evde pasta yapacaksanız, bir gün önceden hazırlayıp buzdolabında bekletmeniz hem lezzet hem de pratiklik açısından avantajlıdır. Pasta kesme anı partinin doruk noktasıdır; bu anı güzel bir şekilde fotoğraflamayı planlayın.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Yiyeceklerin sunumu da en az lezzeti kadar önemlidir. Temaya uygun etiketler hazırlayın, meyveleri eğlenceli şekillerde kesin, sandviçleri kurabiye kalıplarıyla şekillendirin. Bu küçük dokunuşlar masanızı profesyonel bir catering masası gibi gösterecektir.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Partiye özel bir <strong>pamuk şeker arabası</strong> veya dondurma standı eklemek, çocukların gözlerini parlatır. Bu tür hizmetleri profesyonel firmalardan kısa süreli kiralayabilirsiniz. Evdeki partiye profesyonel bir dokunuş katmanın en kolay yollarından biridir.
        </p>
      </section>

      {/* ADIM 5 */}
      <section id="adim-5-eglence-aktiviteleri" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">5</span>
          Eğlence ve Aktivite Programı
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Eğlence programı, partinin kalbi ve ruhudur. Çocuklar yemek için değil, eğlenmek için gelirler. İyi planlanmış bir aktivite programı, çocukların partiden mutlu ayrılmasını sağlar ve velilere &quot;Ne güzel bir partiydi!&quot; dedirtir. Burada hem kendiniz yapabileceğiniz oyunlar hem de profesyonel destek alabileceğiniz gösterileri bir arada sunuyoruz.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Checklist: Eğlence Aktiviteleri</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Grup oyunları planlayın: Müzikli sandalye, donmuş dans, hazine avı</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Yaratıcı aktiviteler ekleyin: Boyama, hamur, slime yapımı</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Müzik listesi hazırlayın (çocuk şarkıları ve dans müzikleri)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Oyunlar için ödüller ve küçük hediyeler temin edin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Profesyonel eğlence seçeneklerini araştırın (palyaço, sihirbaz, bubble show)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">&#9744;</span>
              <span>Her aktivite için malzeme listesi oluşturup önceden temin edin</span>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Kendiniz Yapabileceğiniz Oyunlar</h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Hazine Avı:</strong> Evin farklı noktalarına küçük hediyeler veya ipuçları saklayarak çocukları maceraya davet edin. Her ipucu bir sonraki noktaya yönlendirsin. Temaya uygun bir hikaye ile hazine avını daha da heyecanlı hale getirebilirsiniz. Örneğin korsan temalı bir partide &quot;hazine haritası&quot; kullanmak çocukların hayal gücünü ateşler.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Müzikli Sandalye:</strong> Klasik ama her zaman eğlenceli! Sandalyeleri daire şeklinde dizin, müziği açın ve çocukları dans ettirin. Müzik durduğunda oturamayan elenir. Elenen çocukların sıkılmaması için onlara küçük bir görev verin; örneğin bir sonraki turun hakemliğini yapabilirler.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Yüz Boyama İstasyonu:</strong> Yüze uygulanabilen boyalarla çocukların yüzlerine kelebek, kaplan, süper kahraman maskesi gibi desenler çizebilirsiniz. Bu aktivite hem sakinleştirici hem de yaratıcıdır. Çocuklar boyanan yüzleriyle fotoğraf çektirmeyi de çok sever.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Profesyonel Eğlence Seçenekleri</h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Eğer partinize gerçekten profesyonel bir hava katmak istiyorsanız, bazı aktivitelerde uzman desteği almak büyük fark yaratır. Deneyimli bir{' '}
          <Link to="/organizasyonlar/palyaco-kiralama" className="text-blue-600 font-semibold hover:underline">
            palyaço kiralama
          </Link>{' '}
          hizmeti, çocukları 45-60 dakika boyunca kesintisiz eğlendirir, oyunlar oynatır, balon büker ve partiye enerji katar. Ebeveynler olarak sizin de nefes almanızı sağlar.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Bir diğer gözde seçenek ise{' '}
          <Link to="/organizasyonlar/bubble-show" className="text-blue-600 font-semibold hover:underline">
            bubble show
          </Link>{' '}
          gösterisidir. Dev baloncuklar, çocukların içine girebileceği baloncuklar ve ışıklı balon gösterisi, evde yapılan bir partiyi sihirli bir deneyime dönüştürür. Ev ortamında bile uygulanabilen bu gösteri, hem çocukların hem yetişkinlerin hayran kalacağı görsel bir şölene dönüşür. Özellikle 3-8 yaş grubu çocuklar için inanılmaz etkileyicidir.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Bu profesyonel eğlence seçeneklerinin avantajı, sizin organizasyon yükünüzü hafifletmesidir. Profesyonel bir ekip gelir, gösterisini yapar, çocukları eğlendirir ve siz de partinin diğer detaylarıyla ilgilenebilirsiniz. Bu nedenle bütçenizden mutlaka profesyonel eğlence için bir pay ayırmanızı öneririz.
        </p>
      </section>

      {/* ADIM 6 */}
      <section id="adim-6-parti-gunu-akisi" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">6</span>
          Parti Günü Akışı ve Zamanlama
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Her şeyi planladınız, malzemeleri aldınız, dekorasyonu yaptınız. Peki parti günü her şey nasıl akacak? İşte tipik bir evde doğum günü partisi için dakika dakika program önerisi. Bu zamanlama 3 saatlik bir parti için optimize edilmiştir, ancak kendi ihtiyaçlarınıza göre uyarlayabilirsiniz.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mb-6">
          <h3 className="font-semibold text-blue-800 mb-3">Örnek Parti Akışı (3 Saat)</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-700 whitespace-nowrap min-w-[90px]">14:00-14:30</span>
              <span>Karşılama, serbest oyun ve tanışma süresi. Erken gelen çocuklar için boyama veya lego köşesi hazırlayın.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-700 whitespace-nowrap min-w-[90px]">14:30-15:15</span>
              <span>Grup oyunları ve eğlence aktiviteleri. Müzikli sandalye, hazine avı veya yarışmalar.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-700 whitespace-nowrap min-w-[90px]">15:15-16:00</span>
              <span>Profesyonel gösteri (palyaço, bubble show veya sihirbaz gösterisi). Bu, partinin en enerjik bölümüdür.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-700 whitespace-nowrap min-w-[90px]">16:00-16:30</span>
              <span>Yiyecek-içecek servisi ve pasta kesimi. Mumları üfleme, &quot;İyi ki Doğdun&quot; şarkısı ve fotoğraf çekimi.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-700 whitespace-nowrap min-w-[90px]">16:30-17:00</span>
              <span>Hediye açılışı (tercihe bağlı), hediyelik dağıtımı ve uğurlama.</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Parti akışında esneklik bırakın. Çocuklar her zaman plana uygun hareket etmeyebilir ve bu tamamen normaldir. Bir aktivite beklenenden uzun sürerse zorla sonlandırmayın; bir sonraki aktiviteyi kısaltarak zaman dengesini koruyabilirsiniz. Önemli olan çocukların eğlenmesidir, dakikalara takılmak değil.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Hediyelik poşetleri (goodie bags)</strong> önceden hazırlayın ve kapıda dağıtın. İçine küçük oyuncaklar, şekerler, çıkartmalar ve belki bir teşekkür notu koyabilirsiniz. Bu küçük jestler, aileler üzerinde kalıcı bir izlenim bırakır. Her çocuğun ismini poşetin üzerine yazmak da kişisel bir dokunuş olur.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Parti sonrasında temizlik için bir plan yapın. Misafirler ayrıldıktan sonra en az 1-2 kişinin temizlikle ilgilenmesi gerekir. Büyük çöp poşetlerini önceden hazırlayın, tek kullanımlık ürünler tercih edin ve bulaşık yığınını minimize etmek için kağıt tabak ve bardak kullanın. Parti günü sonrası temizlik yükünü hafifletmenin en iyi yolu, kullanım kolaylığı sunan ürünleri tercih etmektir.
        </p>
      </section>

      {/* ADIM 7 */}
      <section id="adim-7-profesyonel-destek" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0">7</span>
          Profesyonel Destek ile Farkı Hissedin
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Tüm bu adımları tek başınıza uygulamak elbette mümkün. Ancak deneyimlerimiz gösteriyor ki, en iyi evde partiler bile bir noktada profesyonel desteğe ihtiyaç duyar. Dekorasyon yaparken aynı zamanda yemek hazırlamak, müziği ayarlarken çocuklara göz kulak olmak... Tüm bunları aynı anda yönetmek oldukça yorucu olabilir.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          İşte tam bu noktada profesyonel bir organizasyon desteği devreye girer. Tüm partiyi sıfırdan organize etmenize gerek yok; sadece eğlence kısmını profesyonellere bırakmanız bile büyük bir fark yaratır. Deneyimli bir{' '}
          <Link to="/organizasyonlar/palyaco-kiralama" className="text-blue-600 font-semibold hover:underline">
            palyaço
          </Link>
          , etkileyici bir{' '}
          <Link to="/organizasyonlar/bubble-show" className="text-blue-600 font-semibold hover:underline">
            bubble show gösterisi
          </Link>{' '}
          veya interaktif bir sihirbaz gösterisi, ev partinizi çocuğunuzun yıllarca hatırlayacağı büyülü bir deneyime dönüştürebilir.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Eğer &quot;Her şeyi ben halletmek istemiyorum, ama evimde de parti yapmak istiyorum&quot; diyorsanız, {' '}
          <Link to="/organizasyonlar/full-paket-organizasyon" className="text-blue-600 font-semibold hover:underline">
            full paket organizasyon
          </Link>{' '}
          tam size göre. Dekorasyondan eğlenceye, pastadan fotoğrafçılığa kadar her şey profesyonel ekip tarafından evinizde hazırlanır. Siz sadece kapıyı açar ve partinin tadını çıkarırsınız.
        </p>

        {/* Hizmet Kutusu */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Full Paket Doğum Günü Organizasyonu</h3>
              <p className="text-gray-700 mb-3">
                Evinizde profesyonel bir doğum günü partisi istiyorsanız, her şeyi biz halledelim. Dekorasyon, eğlence, ikramlık ve daha fazlası tek pakette.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 mb-4">
                <li>&#10003; Temaya uygun dekorasyon ve balon süsleme</li>
                <li>&#10003; Profesyonel palyaço veya bubble show gösterisi</li>
                <li>&#10003; Pasta ve ikramlık organizasyonu</li>
                <li>&#10003; Fotoğraf ve video çekimi</li>
                <li>&#10003; Hediyelik poşet hazırlığı</li>
              </ul>
              <Link
                to="/organizasyonlar/full-paket-organizasyon"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Full Paket Detaylarını İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus İpuçları */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bonus: Sık Yapılan Hatalar ve Kaçınma Yolları</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Evde doğum günü organizasyonu yaparken en sık yapılan hatalardan biri, programı çok sıkıştırmaktır. Her dakikayı planlamaya çalışmak yerine, çocukların kendi aralarında serbest oynayacakları boş zamanlar bırakın. Bir diğer yaygın hata ise yiyecek çeşitliliğinde abartıya kaçmaktır; çocuklar çoğunlukla tanıdık ve basit lezzetleri tercih eder.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Dekorasyon konusunda sıklıkla yapılan hata, her yeri süslemeye çalışmaktır. Bir veya iki ana noktayı etkileyici şekilde süslemek, her yere dağınık dekorasyon yapmaktan çok daha etkilidir. Profesyonel organizatörlerin sırrı budur: odak noktası yaratmak.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Son olarak, fotoğraf ve video çekimini ihmal etmeyin. Parti başladığında koşuşturmanın içinde kalır ve güzel anları kaçırabilirsiniz. Ya bir yakınınızı fotoğrafçı olarak görevlendirin ya da profesyonel bir çekim hizmeti alın. Bu anılar paha biçilmezdir.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-3">Evde Doğum Günü Partinizi Profesyonelce Planlayalım!</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Tüm bu adımları sizin yerinize uygulayacak deneyimli bir ekip arıyorsanız, Best Event olarak yanınızdayız. Palyaço, bubble show, sihirbaz, dekorasyon ve daha fazlası için hemen bize ulaşın.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+905307309009"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Hemen Ara
          </a>
          <a
            href="https://wa.me/905307309009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp ile Ulaşın
          </a>
        </div>
      </section>
    </>
  )

  return (
    <BlogDetail
      slug="evde-dogum-gunu-organizasyonu"
      faqData={faqData}
      relatedServicePath={relatedServicePath}
      relatedServiceName={relatedServiceName}
    >
      {content}
    </BlogDetail>
  )
}

export default EvdeDogumGunuOrganizasyonu
