import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const EvdeDogumGunuMaliyeti = () => {
  const faqData = [
    {
      question: 'Evde 20 kişilik doğum günü organizasyonu ortalama ne kadar tutar?',
      answer: 'Evde 20 kişilik bir doğum günü organizasyonu 2026 yılı itibarıyla ekonomik düzeyde 3.000-5.000 TL, standart düzeyde 5.000-10.000 TL, premium düzeyde ise 10.000-20.000 TL aralığında tutabilir. Bu rakamlar dekorasyon, yiyecek-içecek, pasta, eğlence hizmetleri ve hediyelik çantaları kapsar. Bütçeyi belirleyen en önemli etken profesyonel gösteri hizmetlerinin (palyaço, sihirbaz, bubble show) dahil edilip edilmediğidir.'
    },
    {
      question: 'Evde doğum günü yapmak dışarıda yapmaktan daha mı ucuz?',
      answer: 'Evet, evde doğum günü yapmak genellikle dışarıda yapmaktan daha ekonomiktir. Mekan kirası ödemediğiniz için bütçenizin %25-35 oranında tasarruf sağlarsınız. Bir oyun salonunun veya restoranın kişi başı 500-1.500 TL arasında ücret aldığını düşünürsek, 20 kişi için 10.000-30.000 TL mekan masrafını ortadan kaldırmış olursunuz. Bu tutarı profesyonel gösteri hizmetlerine ve daha kaliteli ikramlara aktarabilirsiniz.'
    },
    {
      question: 'Profesyonel palyaço veya sihirbaz kiralamanın maliyeti ne kadar?',
      answer: '2026 fiyatlarıyla İstanbul\'da profesyonel palyaço kiralama 3.000-6.000 TL, sihirbaz kiralama 4.000-8.000 TL, bubble show 3.500-7.000 TL, yüz boyama hizmeti ise 2.000-4.500 TL aralığında değişmektedir. Fiyatlar gösteri süresine, sanatçının deneyimine, hafta sonu/hafta içi farkına ve İstanbul\'un hangi ilçesine hizmet verileceğine göre farklılık gösterir.'
    },
    {
      question: 'Evde doğum gününde en çok hangi kalem bütçeyi etkiler?',
      answer: 'En büyük maliyet kalemi profesyonel eğlence hizmetleridir ve toplam bütçenin %35-45\'ini oluşturur. İkinci sırada yiyecek-içecek ve pasta giderleri gelir (%20-30). Dekorasyon %10-15, hediyelik çantalar %5-10 ve beklenmedik giderler %5-10 civarındadır. Profesyonel hizmet almadan düzenlenen basit bir parti ise bütçenin çoğunu yiyecek-içecek ve dekorasyona ayırır.'
    },
    {
      question: 'Evde doğum günü için en çok tasarruf nasıl sağlanır?',
      answer: 'En büyük tasarruf mekan masrafını sıfırlamakla başlar. Bunun dışında hafta içi organizasyon tercih etmek %10-20 indirim sağlar, erken rezervasyon ile profesyonel hizmetlerde %5-15 avantaj elde edebilirsiniz. Kendin yap (DIY) dekorasyon yaparak dekorasyon bütçesini %50-60 düşürebilirsiniz. Full paket organizasyon satın almak bireysel kiralamaya göre %15-25 daha ekonomiktir. Mevsim meyveleri ve ev yapımı ikramlar da yiyecek bütçesini ciddi ölçüde azaltır.'
    },
    {
      question: 'Full paket doğum günü organizasyonu mu yoksa tek tek hizmet almak mı daha uygun?',
      answer: 'Full paket organizasyon almak bireysel kiralamaya göre neredeyse her zaman daha ekonomiktir. Bireysel olarak palyaço (4.500 TL) + sihirbaz (5.500 TL) + bubble show (5.000 TL) kiralamak toplamda 15.000 TL tutarken, aynı hizmetleri full paket içinde almak 10.000-12.000 TL arasında mal olur. Üstelik full pakette koordinasyon, zaman yönetimi ve yedek ekip garantisi de dahildir.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-emerald-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#giris" className="text-emerald-700 hover:text-emerald-800 font-semibold">1. Giriş: Evde Doğum Günü Bütçesi Gerçekleri</a></li>
          <li><a href="#temel-maliyet" className="text-emerald-700 hover:text-emerald-800 font-semibold">2. Temel Maliyet Kalemleri Tablosu</a></li>
          <li><a href="#butce-senaryolari" className="text-emerald-700 hover:text-emerald-800 font-semibold">3. Üç Bütçe Senaryosu: Ekonomik / Standart / Premium</a></li>
          <li><a href="#profesyonel-hizmet" className="text-emerald-700 hover:text-emerald-800 font-semibold">4. Profesyonel Hizmet Maliyetleri</a></li>
          <li><a href="#kendin-yap-vs-profesyonel" className="text-emerald-700 hover:text-emerald-800 font-semibold">5. Kendin Yap vs Profesyonel Karşılaştırması</a></li>
          <li><a href="#gizli-maliyetler" className="text-emerald-700 hover:text-emerald-800 font-semibold">6. Gizli Maliyetler ve Beklenmedik Giderler</a></li>
          <li><a href="#tasarruf-ipuclari" className="text-emerald-700 hover:text-emerald-800 font-semibold">7. Tasarruf İpuçları: 10 Pratik Öneri</a></li>
          <li><a href="#optimizasyon-tablosu" className="text-emerald-700 hover:text-emerald-800 font-semibold">8. Maliyet Optimizasyon Tablosu</a></li>
          <li><a href="#sss" className="text-emerald-700 hover:text-emerald-800 font-semibold">9. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* BÖLÜM 1 - Giriş */}
      <h2 id="giris" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Evde Doğum Günü Bütçesi Gerçekleri
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Çocuğunuzun doğum günü yaklaşıyor ve bu özel günü evde kutlamaya karar verdiniz. Peki 20 kişilik bir ev partisinin gerçek maliyeti ne kadar? 2026 yılı itibarıyla Türkiye'de enflasyon, hizmet fiyatları ve malzeme giderlerindeki artışlar, doğum günü organizasyonu bütçesini doğrudan etkiliyor. Bu rehberde, evde 20 kişilik bir doğum günü partisinin tüm maliyet kalemlerini şeffaf bir şekilde inceliyoruz. Amacımız, bütçenizi en verimli şekilde yönetmenize yardımcı olmak ve sürpriz giderlerle karşılaşmadan sorunsuz bir organizasyon gerçekleştirmenizi sağlamaktır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Evde doğum günü yapmak, dışarıda yapmaya kıyasla önemli avantajlar sunar. Mekan kirası ödemezsiniz, kendi mutfağınızda hazırlık yapabilirsiniz ve zaman konusunda daha esneksinizdir. Ancak evde organizasyonun da kendine özgü maliyetleri vardır: dekorasyon, yiyecek-içecek, eğlence hizmetleri, pasta, hediyelik çantalar ve daha birçok kalem bütçenizi şekillendiren unsurlardandır. İstanbul gibi büyük bir şehirde profesyonel hizmet alımı sırasında fiyatlar ilçeden ilçeye, hafta içi ve hafta sonuna göre değişkenlik gösterir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bu rehberde üç farklı bütçe senaryosunu (ekonomik, standart ve premium), profesyonel hizmet fiyatlarını, kendin yap ile profesyonel organizasyon arasındaki farkları, gizli maliyetleri ve tasarruf ipuçlarını detaylıca ele alacağız. Tüm fiyatlar 2026 yılı İstanbul piyasa koşullarını baz almaktadır. Ayrıca kalem kalem maliyet hesaplayıcı tabloları ve maliyet optimizasyon stratejileri ile bütçenizi en verimli şekilde planlamanıza katkı sağlamayı hedefliyoruz.
      </p>

      <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Önemli Not:</strong> Bu rehberdeki tüm fiyatlar 2026 yılı İstanbul piyasa koşullarını yansıtmaktadır. Fiyatlar mevsime, hizmet sağlayıcıya ve bölgeye göre değişebilir. Kesin fiyat bilgisi için profesyonel organizasyon firmalarından teklif almanızı öneririz.
        </p>
      </div>

      {/* BÖLÜM 2 - Temel Maliyet Kalemleri */}
      <h2 id="temel-maliyet" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Temel Maliyet Kalemleri Tablosu
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Evde 20 kişilik bir doğum günü organizasyonu planlarken bütçenizi oluşturan temel maliyet kalemlerini bilmek büyük önem taşır. Aşağıdaki tablo, her bir kalemin ortalama fiyat aralığını ve toplam bütçe içindeki payını göstermektedir. Bu rakamları referans alarak kendi bütçenizi oluşturabilirsiniz. Her kalem için minimum ve maksimum fiyat aralıkları verilmiş olup, seçtiğiniz kalite düzeyine göre bu aralığın neresinde konumlanacağınızı belirleyebilirsiniz.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <th className="py-4 px-5 text-left font-bold">Maliyet Kalemi</th>
              <th className="py-4 px-5 text-left font-bold">Minimum (TL)</th>
              <th className="py-4 px-5 text-left font-bold">Maksimum (TL)</th>
              <th className="py-4 px-5 text-left font-bold">Bütçe Payı</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 px-5 font-semibold">Dekorasyon</td>
              <td className="py-3 px-5">1.000 TL</td>
              <td className="py-3 px-5">5.000 TL</td>
              <td className="py-3 px-5">%10-15</td>
            </tr>
            <tr className="border-b bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-5 font-semibold">Yiyecek-İçecek</td>
              <td className="py-3 px-5">1.500 TL</td>
              <td className="py-3 px-5">6.000 TL</td>
              <td className="py-3 px-5">%15-20</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 px-5 font-semibold">Pasta (20 kişi)</td>
              <td className="py-3 px-5">1.500 TL</td>
              <td className="py-3 px-5">4.000 TL</td>
              <td className="py-3 px-5">%8-12</td>
            </tr>
            <tr className="border-b bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-5 font-semibold">Eğlence Hizmetleri</td>
              <td className="py-3 px-5">3.000 TL</td>
              <td className="py-3 px-5">15.000 TL</td>
              <td className="py-3 px-5">%35-45</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 px-5 font-semibold">Hediyelik Çantalar</td>
              <td className="py-3 px-5">500 TL</td>
              <td className="py-3 px-5">2.000 TL</td>
              <td className="py-3 px-5">%5-8</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-5 font-semibold">Diğer Giderler</td>
              <td className="py-3 px-5">300 TL</td>
              <td className="py-3 px-5">1.500 TL</td>
              <td className="py-3 px-5">%3-5</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-emerald-50 font-bold text-gray-900">
              <td className="py-4 px-5">TOPLAM</td>
              <td className="py-4 px-5">7.800 TL</td>
              <td className="py-4 px-5">33.500 TL</td>
              <td className="py-4 px-5">%100</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Bütçe dağılımı - renkli çubuklar */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Bütçe Dağılım Grafiği (Standart Senaryo)</h3>
        <p className="text-gray-600 text-sm mb-4">Aşağıdaki renkli çubuklar, 20 kişilik standart bir ev doğum günü partisinde her bir kalemin bütçe içindeki yaklaşık payını göstermektedir.</p>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span className="font-semibold">Eğlence Hizmetleri</span>
              <span>%40</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div className="bg-gradient-to-r from-red-500 to-red-600 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '40%'}}>
                <span className="text-white text-xs font-bold">4.000 TL</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span className="font-semibold">Yiyecek-İçecek</span>
              <span>%20</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '20%'}}>
                <span className="text-white text-xs font-bold">2.000 TL</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span className="font-semibold">Dekorasyon</span>
              <span>%13</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '13%'}}>
                <span className="text-white text-xs font-bold">1.300 TL</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span className="font-semibold">Pasta</span>
              <span>%12</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '12%'}}>
                <span className="text-white text-xs font-bold">1.200 TL</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span className="font-semibold">Hediyelik Çantalar</span>
              <span>%8</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '8%'}}>
                <span className="text-white text-xs font-bold">800 TL</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span className="font-semibold">Diğer</span>
              <span>%7</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '7%'}}>
                <span className="text-white text-xs font-bold">700 TL</span>
              </div>
            </div>
          </div>
          <div className="pt-2 border-t border-gray-300">
            <div className="flex justify-between text-gray-900 font-bold">
              <span>Toplam Standart Bütçe</span>
              <span>10.000 TL</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Yukarıdaki maliyet dağılımında görüldüğü üzere, evde bir doğum günü organizasyonunda bütçenin en büyük dilimini eğlence hizmetleri oluşturuyor. Profesyonel bir palyaço, sihirbaz veya bubble show gösterisi kiraladığınızda, bu hizmetler partinin kalitesini ve çocukların mutluluğunu doğrudan belirliyor. Yiyecek-içecek kalemi ise ikinci büyük gider olarak öne çıkıyor; özellikle 20 kişilik bir partide hem çocuklar hem de yetişkinler için yeterli ikram hazırlamak önemli bir bütçe kalemidir. Dekorasyon, pasta ve hediyelik çantalar da toplam bütçenin kayda değer bir bölümünü oluşturuyor. Her bir kalemi detaylı incelediğimizde, nerede tasarruf edebileceğinizi ve nereye daha fazla yatırım yapmanız gerektiğini net olarak görebilirsiniz.
      </p>

      {/* BÖLÜM 3 - Üç Bütçe Senaryosu */}
      <h2 id="butce-senaryolari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Üç Bütçe Senaryosu: Ekonomik / Standart / Premium
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Her ailenin bütçesi ve beklentileri farklıdır. Bu nedenle üç farklı senaryo hazırladık: biri bütçeye duyarlı aileler için, biri orta segment için, biri de özel bir deneyim isteyen aileler için. Her senaryoda 20 kişilik bir ev partisi baz alınmıştır. Kendi ihtiyaçlarınıza göre bu senaryoları referans alabilir veya karma bir plan oluşturabilirsiniz.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Ekonomik */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-green-200">
          <div className="bg-gradient-to-br from-green-400 to-green-600 p-6 text-white text-center">
            <div className="text-sm font-semibold uppercase tracking-wider mb-1">Ekonomik</div>
            <div className="text-4xl font-extrabold mb-1">3.000 - 5.000</div>
            <div className="text-lg font-semibold">TL</div>
          </div>
          <div className="bg-white p-6">
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                <span>DIY balon ve flamalı dekorasyon (500-800 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                <span>Ev yapımı ikramlar + hazır atıştırmalıklar (800-1.200 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                <span>Pastane pastası, standart boyut (1.000-1.500 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                <span>Kendin yap oyunlar, müzik listesi (0 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                <span>Basit hediyelik poşetler (300-500 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold mt-0.5">&#10007;</span>
                <span className="text-gray-400">Profesyonel gösteri yok</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold mt-0.5">&#10007;</span>
                <span className="text-gray-400">Fotoğrafçı yok</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">Bütçe bilincli aileler için ideal. Eğlenceyi kendi başına organize eden ebeveynler tercih eder.</p>
            </div>
          </div>
        </div>

        {/* Standart */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-200 ring-2 ring-blue-400">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white text-center relative">
            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">EN POPÜLER</div>
            <div className="text-sm font-semibold uppercase tracking-wider mb-1">Standart</div>
            <div className="text-4xl font-extrabold mb-1">5.000 - 10.000</div>
            <div className="text-lg font-semibold">TL</div>
          </div>
          <div className="bg-white p-6">
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">&#10003;</span>
                <span>Temalı balon ve dekorasyon seti (1.000-2.000 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">&#10003;</span>
                <span>Karışık ikram menüsü + içecekler (1.500-2.500 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">&#10003;</span>
                <span>Butik pasta, temalı tasarım (1.500-2.500 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">&#10003;</span>
                <span><Link to="/organizasyonlar/palyaco-kiralama" className="text-blue-600 hover:text-blue-800 font-semibold underline">Palyaço gösterisi</Link> (3.000-5.000 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">&#10003;</span>
                <span>Hediyelik çantalar + küçük oyuncaklar (500-1.000 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">&#10003;</span>
                <span>Müzik sistemi (mevcut veya kiralama)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold mt-0.5">&#10007;</span>
                <span className="text-gray-400">Profesyonel fotoğrafçı yok</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">Çoğu ailenin tercih ettiği denge noktası. Profesyonel eğlence ile kaliteli bir parti sağlar.</p>
            </div>
          </div>
        </div>

        {/* Premium */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-purple-200">
          <div className="bg-gradient-to-br from-purple-500 to-purple-800 p-6 text-white text-center">
            <div className="text-sm font-semibold uppercase tracking-wider mb-1">Premium</div>
            <div className="text-4xl font-extrabold mb-1">10.000 - 20.000</div>
            <div className="text-lg font-semibold">TL</div>
          </div>
          <div className="bg-white p-6">
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">&#10003;</span>
                <span>Profesyonel tema dekorasyonu + backdrop (2.500-5.000 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">&#10003;</span>
                <span>Catering hizmeti + özel menü (3.000-5.000 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">&#10003;</span>
                <span>Özel tasarım fondant pasta (2.500-4.000 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">&#10003;</span>
                <span><Link to="/organizasyonlar/full-paket-organizasyon" className="text-purple-600 hover:text-purple-800 font-semibold underline">Full paket organizasyon</Link>: Palyaço + Sihirbaz + Bubble Show</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">&#10003;</span>
                <span><Link to="/organizasyonlar/pamuk-seker" className="text-purple-600 hover:text-purple-800 font-semibold underline">Pamuk şeker arabası</Link> + popcorn makinesi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">&#10003;</span>
                <span>Profesyonel fotoğrafçı (1.500-3.000 TL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">&#10003;</span>
                <span>Özel hediyelik kutular + kişiselleştirilmiş hediyeler</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">Hiçbir detayı atlamak istemeyenler için. Profesyonel ekip her şeyi baştan sona yönetir.</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Ekonomik senaryo ile basit ama sıcak bir kutlama gerçekleştirebilirsiniz. Çocuklar için müzikli oyunlar, balon patlatma yarışması, sandalye kapmaca gibi klasik parti oyunları hiç maliyet gerektirmeden büyük eğlence sağlar. Standart senaryoda ise profesyonel bir palyaço veya animatörün partiye katılması, çocukların deneyimini tamamen farklı bir boyuta taşıyor. Premium senaryo ise her detayın profesyonellerce yönetildiği, ailenin sadece keyfini çıkardığı bir kutlama vaat ediyor. Hangi seviyeyi seçerseniz seçin, önemli olan çocuğunuzun mutluluğunu ve güvenliğini ön planda tutmanızdır.
      </p>

      {/* BÖLÜM 4 - Profesyonel Hizmet Maliyetleri */}
      <h2 id="profesyonel-hizmet" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Profesyonel Hizmet Maliyetleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Evde doğum günü partisinde profesyonel eğlence hizmetleri, organizasyonun kalitesini ve çocukların deneyimini doğrudan belirleyen en önemli etkendir. İstanbul'da 2026 yılı itibarıyla profesyonel gösteri hizmetlerinin güncel fiyat aralıkları aşağıdaki gibidir. Fiyatlar gösteri süresi, sanatçının deneyim seviyesi ve hizmet verilen bölgeye göre değişkenlik gösterir.
      </p>

      {/* Fiyat kartları */}
      <div className="space-y-4 mb-8">
        {/* Palyaço */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                <Link to="/organizasyonlar/palyaco-kiralama" className="text-red-600 hover:text-red-700 underline">Palyaço Kiralama</Link>
              </h4>
              <p className="text-gray-600 text-sm">Sosis balon, yüz boyama, müzikli oyunlar, dans, interaktif gösteri</p>
              <p className="text-gray-500 text-xs mt-1">Süre: 45-90 dakika | Yaş grubu: 3-12 yaş</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-extrabold text-gray-900">3.000 - 6.000 TL</div>
              <div className="text-xs text-gray-500">Gösteri süresi ve gün seçimine göre</div>
            </div>
          </div>
          <div className="mt-3 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
            <div className="flex justify-between"><span>Hafta içi (45 dk)</span><span className="font-semibold">3.000 - 3.500 TL</span></div>
            <div className="flex justify-between"><span>Hafta sonu (60 dk)</span><span className="font-semibold">3.500 - 4.500 TL</span></div>
            <div className="flex justify-between"><span>Hafta sonu (90 dk)</span><span className="font-semibold">4.500 - 6.000 TL</span></div>
          </div>
        </div>

        {/* Sihirbaz */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-1">Sihirbaz Gösterisi</h4>
              <p className="text-gray-600 text-sm">Sahne illüzyonları, kart numaraları, interaktif sihir, çocuk katılımlı numaralar</p>
              <p className="text-gray-500 text-xs mt-1">Süre: 30-60 dakika | Yaş grubu: 4-12 yaş</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-extrabold text-gray-900">4.000 - 8.000 TL</div>
              <div className="text-xs text-gray-500">Gösteri kapsamına göre</div>
            </div>
          </div>
          <div className="mt-3 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
            <div className="flex justify-between"><span>Hafta içi (30 dk)</span><span className="font-semibold">4.000 - 5.000 TL</span></div>
            <div className="flex justify-between"><span>Hafta sonu (45 dk)</span><span className="font-semibold">5.000 - 6.500 TL</span></div>
            <div className="flex justify-between"><span>Hafta sonu (60 dk, premium)</span><span className="font-semibold">6.500 - 8.000 TL</span></div>
          </div>
        </div>

        {/* Bubble Show */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                <Link to="/organizasyonlar/bubble-show" className="text-blue-600 hover:text-blue-700 underline">Bubble Show Gösterisi</Link>
              </h4>
              <p className="text-gray-600 text-sm">Dev sabun balonları, renkli köpük gösterisi, interaktif balon oyunları</p>
              <p className="text-gray-500 text-xs mt-1">Süre: 30-60 dakika | Yaş grubu: 2-12 yaş</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-extrabold text-gray-900">3.500 - 7.000 TL</div>
              <div className="text-xs text-gray-500">Gösteri süresi ve ekipman kapsamına göre</div>
            </div>
          </div>
          <div className="mt-3 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
            <div className="flex justify-between"><span>Hafta içi (30 dk)</span><span className="font-semibold">3.500 - 4.500 TL</span></div>
            <div className="flex justify-between"><span>Hafta sonu (45 dk)</span><span className="font-semibold">4.500 - 5.500 TL</span></div>
            <div className="flex justify-between"><span>Hafta sonu (60 dk, premium)</span><span className="font-semibold">5.500 - 7.000 TL</span></div>
          </div>
        </div>

        {/* Yüz Boyama */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-1">Yüz Boyama Hizmeti</h4>
              <p className="text-gray-600 text-sm">Profesyonel yüz boyama, glitter tattoo, kelebek/kahraman desenleri</p>
              <p className="text-gray-500 text-xs mt-1">Süre: 60-120 dakika (kişi başına 5-8 dk) | Yaş grubu: 3-12 yaş</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-extrabold text-gray-900">2.000 - 4.500 TL</div>
              <div className="text-xs text-gray-500">Çocuk sayısı ve tasarım detayına göre</div>
            </div>
          </div>
          <div className="mt-3 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
            <div className="flex justify-between"><span>10 çocuğa kadar</span><span className="font-semibold">2.000 - 2.500 TL</span></div>
            <div className="flex justify-between"><span>11-20 çocuk</span><span className="font-semibold">2.500 - 3.500 TL</span></div>
            <div className="flex justify-between"><span>20+ çocuk (2 sanatçı)</span><span className="font-semibold">3.500 - 4.500 TL</span></div>
          </div>
        </div>
      </div>

      {/* Fiyat hesaplayıcı tarzı bölüm */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Örnek Maliyet Hesaplayıcı: Standart Ev Partisi</h3>
        <p className="text-gray-600 text-sm mb-4">Aşağıda 20 kişilik standart bir ev doğum günü partisinin maliyet dağılımını kalem kalem görebilirsiniz.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-4 text-left">Kalem</th>
                <th className="py-3 px-4 text-center">Birim Fiyat</th>
                <th className="py-3 px-4 text-center">Miktar/Detay</th>
                <th className="py-3 px-4 text-right">Toplam</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="py-2.5 px-4 font-semibold">Temalı balon dekorasyon</td>
                <td className="py-2.5 px-4 text-center">-</td>
                <td className="py-2.5 px-4 text-center">1 set</td>
                <td className="py-2.5 px-4 text-right font-semibold">1.500 TL</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-2.5 px-4 font-semibold">İkram (sandviç, börek, meyve)</td>
                <td className="py-2.5 px-4 text-center">100 TL/kişi</td>
                <td className="py-2.5 px-4 text-center">x 20 kişi</td>
                <td className="py-2.5 px-4 text-right font-semibold">2.000 TL</td>
              </tr>
              <tr className="border-b">
                <td className="py-2.5 px-4 font-semibold">Doğum günü pastası</td>
                <td className="py-2.5 px-4 text-center">-</td>
                <td className="py-2.5 px-4 text-center">3 kg temalı</td>
                <td className="py-2.5 px-4 text-right font-semibold">1.800 TL</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-2.5 px-4 font-semibold">Palyaço gösterisi (60 dk)</td>
                <td className="py-2.5 px-4 text-center">-</td>
                <td className="py-2.5 px-4 text-center">1 seans</td>
                <td className="py-2.5 px-4 text-right font-semibold">4.000 TL</td>
              </tr>
              <tr className="border-b">
                <td className="py-2.5 px-4 font-semibold">İçecekler (meyve suyu, su)</td>
                <td className="py-2.5 px-4 text-center">25 TL/kişi</td>
                <td className="py-2.5 px-4 text-center">x 20 kişi</td>
                <td className="py-2.5 px-4 text-right font-semibold">500 TL</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-2.5 px-4 font-semibold">Hediyelik çantalar</td>
                <td className="py-2.5 px-4 text-center">50 TL/adet</td>
                <td className="py-2.5 px-4 text-center">x 15 çocuk</td>
                <td className="py-2.5 px-4 text-right font-semibold">750 TL</td>
              </tr>
              <tr className="border-b">
                <td className="py-2.5 px-4 font-semibold">Tabak, bardak, peçete seti</td>
                <td className="py-2.5 px-4 text-center">-</td>
                <td className="py-2.5 px-4 text-center">1 set (20 kişilik)</td>
                <td className="py-2.5 px-4 text-right font-semibold">250 TL</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2.5 px-4 font-semibold">Mum, konfeti, parti aksesuarları</td>
                <td className="py-2.5 px-4 text-center">-</td>
                <td className="py-2.5 px-4 text-center">Çeşitli</td>
                <td className="py-2.5 px-4 text-right font-semibold">200 TL</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-emerald-600 text-white font-bold">
                <td className="py-3 px-4" colSpan="3">GENEL TOPLAM</td>
                <td className="py-3 px-4 text-right text-lg">11.000 TL</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Yukarıdaki hesaplamada görüldüğü gibi, standart seviyede bir ev doğum günü organizasyonunun toplam maliyeti yaklaşık 11.000 TL civarına çıkıyor. Bu tutar, profesyonel bir palyaço gösterisi, temalı dekorasyon, 20 kişilik ikram ve pasta gibi temel kalemleri kapsıyor. Eğer profesyonel hizmeti çıkarıp kendiniz eğlence organize ederseniz maliyet 5.000-6.000 TL seviyesine düşebilir. Ancak profesyonel gösteri hizmetlerinin çocukların deneyimi üzerindeki etkisi tartışılamaz derecede büyüktür.
      </p>

      {/* BÖLÜM 5 - Kendin Yap vs Profesyonel */}
      <h2 id="kendin-yap-vs-profesyonel" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Kendin Yap vs Profesyonel Karşılaştırması
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Evde doğum günü organize ederken en önemli kararlardan biri "Her şeyi kendim mi yapayım, yoksa profesyonel destek mi alayım?" sorusunun cevabıdır. Her iki yaklaşımın da avantaj ve dezavantajları var. Aşağıdaki karşılaştırma tablosu, bu kararı vermenize yardımcı olacaktır. Maliyet, zaman, kalite ve stres seviyesi gibi kriterleri yan yana incelediğinizde, hangi yöntemin size daha uygun olduğunu kolayca belirleyebilirsiniz.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
              <th className="py-3 px-4 text-left font-bold">Kriter</th>
              <th className="py-3 px-4 text-center font-bold">Kendin Yap (DIY)</th>
              <th className="py-3 px-4 text-center font-bold">Profesyonel Hizmet</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Maliyet</td>
              <td className="py-3 px-4 text-center">3.000 - 5.000 TL</td>
              <td className="py-3 px-4 text-center">8.000 - 20.000 TL</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4 font-semibold">Hazırlık Süresi</td>
              <td className="py-3 px-4 text-center">2-3 hafta planlama + tüm gün hazırlık</td>
              <td className="py-3 px-4 text-center">Telefon/WhatsApp ile birkaç dakika</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Eğlence Kalitesi</td>
              <td className="py-3 px-4 text-center">Sınırlı (YouTube oyunları, müzik listesi)</td>
              <td className="py-3 px-4 text-center">Yüksek (palyaço, sihirbaz, bubble show)</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4 font-semibold">Stres Seviyesi</td>
              <td className="py-3 px-4 text-center text-red-600 font-semibold">Yüksek</td>
              <td className="py-3 px-4 text-center text-green-600 font-semibold">Düşük</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Çocukların Tepkisi</td>
              <td className="py-3 px-4 text-center">İyi, ama sınırlı</td>
              <td className="py-3 px-4 text-center">Çok heyecanlı, unutulmaz</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4 font-semibold">Zaman Yönetimi</td>
              <td className="py-3 px-4 text-center">Ebeveyn sorumlu</td>
              <td className="py-3 px-4 text-center">Profesyonel ekip yönetir</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Risk/Yedek Plan</td>
              <td className="py-3 px-4 text-center">Hiçbir yedek plan yok</td>
              <td className="py-3 px-4 text-center">Yedek ekip ve ekipman garantisi</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 font-semibold">Fotoğraflar</td>
              <td className="py-3 px-4 text-center">Telefonla çekim</td>
              <td className="py-3 px-4 text-center">Profesyonel (opsiyonel)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-emerald-800 mb-2">Tasarruf İpucu</h4>
        <p className="text-gray-700 text-sm">
          En akıllı yaklaşım "hibrit model" kullanmaktır: Dekorasyonu kendiniz yapın (DIY ile %50-60 tasarruf), yiyecek-içecekleri evde hazırlayın, ancak eğlence için profesyonel bir hizmet alın. Bu sayede hem bütçenizi kontrol altında tutarsınız hem de çocuklara unutulmaz bir deneyim sunarsınız. Örneğin, dekorasyon ve ikramı kendiniz organize edip sadece <Link to="/organizasyonlar/palyaco-kiralama" className="text-emerald-700 hover:text-emerald-800 font-semibold underline">palyaço gösterisi</Link> veya <Link to="/organizasyonlar/bubble-show" className="text-emerald-700 hover:text-emerald-800 font-semibold underline">bubble show</Link> kiralarsanız toplam maliyet 6.000-8.000 TL arasında kalabilir.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Kendin yap yaklaşımında maliyet düşük olsa da harcanan emek ve zaman büyük olur. Balon şişirme, masa düzenleme, ikram hazırlama, oyun organize etme ve çocukları kontrol altında tutma gibi görevlerin tamamı ebeveynlerin omuzundadır. Profesyonel hizmet aldığınızda ise bu yükten büyük ölçüde kurtulursunuz. Özellikle 15-20 çocuğun olduğu bir partide profesyonel bir animatör olmadan çocukların ilgisini 2-3 saat boyunca canlı tutmak son derece zordur. Yıllık deneyimimizle söyleyebiliriz ki, 15 ve üzeri çocuklu partilerde profesyonel hizmet almak hem ebeveyn hem de çocuk memnuniyetini kat be kat artırmaktadır.
      </p>

      {/* BÖLÜM 6 - Gizli Maliyetler */}
      <h2 id="gizli-maliyetler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Gizli Maliyetler ve Beklenmedik Giderler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Doğum günü bütçesi planlarken çoğu aile sadece ana kalemleri hesaba katar ve beklenmedik giderlerle karşılaştığında sürpriz yaşar. Aşağıda, evde 20 kişilik bir doğum günü partisinde sıklıkla gözden kaçırılan gizli maliyet kalemlerini listeliyoruz. Bu kalemleri bütçenize dahil etmeniz, son dakika stresinden kurtulmanızı sağlar.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <h4 className="font-bold text-red-800 mb-3">Temizlik Giderleri</h4>
          <p className="text-gray-700 text-sm">Partiden sonra ev temizliği için profesyonel temizlik hizmeti almak gerekebilir. 20 kişilik bir partiden sonra derin temizlik: <strong>500-1.500 TL</strong></p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <h4 className="font-bold text-red-800 mb-3">Ekstra İkram İhtiyacı</h4>
          <p className="text-gray-700 text-sm">Davetlilerin beklenenden fazla gelmesi veya yetişkinlerin de yemesi durumunda ek ikram masrafı: <strong>300-800 TL</strong></p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <h4 className="font-bold text-red-800 mb-3">Kırılma ve Hasar</h4>
          <p className="text-gray-700 text-sm">Çocukların oyun sırasında eşyalara zarar vermesi riski vardır. Kırılan bardak, dökülen içecekler, lekelenme: <strong>200-1.000 TL</strong></p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <h4 className="font-bold text-red-800 mb-3">Otopark ve Ulaşım</h4>
          <p className="text-gray-700 text-sm">Apartmanda otopark sorunu yaşanabilir. Vale hizmeti veya misafirler için park yönlendirmesi: <strong>0-500 TL</strong></p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <h4 className="font-bold text-red-800 mb-3">Son Dakika Alışverişleri</h4>
          <p className="text-gray-700 text-sm">Unutulan malzemeler, eksik kalan balonlar, ek mum, yapışkan bant ve benzeri: <strong>100-400 TL</strong></p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <h4 className="font-bold text-red-800 mb-3">Elektrik ve Enerji</h4>
          <p className="text-gray-700 text-sm">Ses sistemi, ısıtma/soğutma, ekstra aydınlatma için artan elektrik tüketimi: <strong>50-200 TL</strong></p>
        </div>
      </div>

      {/* Gizli maliyet toplam kartı */}
      <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="font-bold text-orange-800 text-lg mb-1">Toplam Gizli Maliyet Tahmini</h4>
            <p className="text-gray-700 text-sm">Yukarıdaki kalemlerin toplamı, bütçenize ek olarak beklenmeyen bir yük getirebilir.</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-extrabold text-orange-700">1.150 - 4.400 TL</div>
            <div className="text-xs text-gray-500">Ortalama: ~2.000 TL ek gider</div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-emerald-800 mb-2">Tasarruf İpucu</h4>
        <p className="text-gray-700 text-sm">
          Bütçenize %10-15 oranında "beklenmedik gider" fonu ekleyin. 10.000 TL'lik bir bütçe planladığınızda, 1.000-1.500 TL'lik bir tampon bırakmanız sürpriz masrafları rahatlıkla karşılamanızı sağlar. Ayrıca parti öncesinde detaylı bir kontrol listesi hazırlayarak son dakika alışverişlerine olan ihtiyacı minimize edebilirsiniz.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Gizli maliyetler genellikle toplam bütçenin %10-20'sine tekabül eder. Bu kalemler çok büyük tutarlar olmasa da, planlanmamış olduklarında psikolojik olarak bütçeyi aşmış hissettirir. Profesyonel bir organizasyon firması ile çalıştığınızda bu risklerin büyük bölümü ortadan kalkar; çünkü deneyimli ekipler olası sorunları önceden öngörüp bütçe teklifine dahil eder. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-emerald-700 hover:text-emerald-800 font-semibold underline">Full paket doğum günü organizasyonu</Link> seçeneği ile tüm bu belirsizlikleri ortadan kaldırıp sabit bir bütçe ile yola çıkabilirsiniz.
      </p>

      {/* BÖLÜM 7 - Tasarruf İpuçları */}
      <h2 id="tasarruf-ipuclari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Tasarruf İpuçları: 10 Pratik Öneri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Evde doğum günü organizasyonunda bütçeyi kontrol altında tutmanın pek çok yolu vardır. Yıllardır yüzlerce organizasyon gerçekleştiren ekibimizin derlediği 10 pratik tasarruf önerisini aşağıda paylaşıyoruz. Bu ipuçları, kaliteden ödün vermeden önemli miktarda tasarruf sağlamanıza yardımcı olacaktır.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
          <h4 className="font-bold text-emerald-800 mb-1">1. Hafta İçi Organizasyon Tercih Edin</h4>
          <p className="text-gray-700 text-sm">Cumartesi-Pazar yerine Perşembe veya Cuma günlerini seçin. Profesyonel hizmetlerde %10-20 indirim, pastanelerde daha uygun fiyatlar elde edebilirsiniz. <strong>Tasarruf: 500-2.000 TL</strong></p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
          <h4 className="font-bold text-emerald-800 mb-1">2. Erken Rezervasyon Yapın</h4>
          <p className="text-gray-700 text-sm">6 hafta ve daha öncesinden yapılan rezervasyonlarda çoğu firma %5-15 erken kayıt indirimi uygular. Pasta siparişlerinde de erken sipariş avantajı alınır. <strong>Tasarruf: 300-1.500 TL</strong></p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
          <h4 className="font-bold text-emerald-800 mb-1">3. DIY Dekorasyon Yapın</h4>
          <p className="text-gray-700 text-sm">Online mağazalardan toptan balon, flamalar ve tema kitleri alın. Pinterest ve YouTube'dan ilham alarak kendiniz süsleyin. Profesyonel dekorasyon yerine DIY ile bütçenizi %50-60 düşürürsünüz. <strong>Tasarruf: 500-2.500 TL</strong></p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
          <h4 className="font-bold text-emerald-800 mb-1">4. Ev Yapımı İkramlar Hazırlayın</h4>
          <p className="text-gray-700 text-sm">Hazır catering yerine ev yapımı sandviçler, börekler, kurabiyeler ve mevsim meyveleri hazırlayarak büyük tasarruf sağlayabilirsiniz. Çocuklar zaten mini sandviçler ve kurabiyelerden çok hoşlanır. <strong>Tasarruf: 500-2.000 TL</strong></p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
          <h4 className="font-bold text-emerald-800 mb-1">5. Full Paket Organizasyon Alın</h4>
          <p className="text-gray-700 text-sm">Tek tek hizmet kiralamak yerine <Link to="/organizasyonlar/full-paket-organizasyon" className="text-emerald-700 hover:text-emerald-800 font-semibold underline">full paket organizasyon</Link> seçimi hem %15-25 fiyat avantajı sağlar hem de koordinasyon sorunlarını ortadan kaldırır. <strong>Tasarruf: 1.500-3.000 TL</strong></p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
          <h4 className="font-bold text-emerald-800 mb-1">6. Dijital Davetiye Kullanın</h4>
          <p className="text-gray-700 text-sm">Basılı davetiye yerine WhatsApp veya e-posta ile dijital davetiye gönderin. Canva gibi ücretsiz araçlarla profesyonel görünen davetiyeler tasarlayabilirsiniz. <strong>Tasarruf: 200-500 TL</strong></p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
          <h4 className="font-bold text-emerald-800 mb-1">7. Mevsim Meyveleri ve Yerel Ürünler Tercih Edin</h4>
          <p className="text-gray-700 text-sm">İthal meyveler ve pahalı atıştırmalıklar yerine mevsim meyveleri, yerel pastane ürünleri ve ev yapımı limonata tercih edin. Hem daha sağlıklı hem daha ekonomik. <strong>Tasarruf: 300-800 TL</strong></p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
          <h4 className="font-bold text-emerald-800 mb-1">8. Hediyelik Çantaları Kendiniz Hazırlayın</h4>
          <p className="text-gray-700 text-sm">Hazır parti çantası setleri yerine toptan alınan kraft çantalar, küçük oyuncaklar ve ev yapımı kurabiyelerle kişiselleştirilmiş hediye çantaları oluşturun. <strong>Tasarruf: 200-600 TL</strong></p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
          <h4 className="font-bold text-emerald-800 mb-1">9. Fotoğrafçılığı Yetenekli Bir Yakınına Bırakın</h4>
          <p className="text-gray-700 text-sm">Profesyonel fotoğrafçı yerine iyi fotoğraf çeken bir akraba veya arkadaşınızdan yardım isteyin. Günümüzde telefon kameraları harika sonuçlar veriyor. <strong>Tasarruf: 1.500-3.000 TL</strong></p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
          <h4 className="font-bold text-emerald-800 mb-1">10. Pasta Boyutunu Optimize Edin</h4>
          <p className="text-gray-700 text-sm">20 kişi için büyük bir pasta yerine orta boy bir gösteriş pastası + cupcake veya mini kekler tercih edin. Hem görsel etki oluşturur hem de kişi başı pasta maliyetini %30-40 düşürür. <strong>Tasarruf: 500-1.500 TL</strong></p>
        </div>
      </div>

      {/* Toplam tasarruf kartı */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="font-bold text-xl mb-1">10 İpucunun Toplam Tasarruf Potansiyeli</h4>
            <p className="text-emerald-100 text-sm">Tüm önerileri uyguladığınızda elde edebileceğiniz toplam tasarruf miktarı</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-extrabold">6.000 - 17.400 TL</div>
            <div className="text-emerald-200 text-sm">Bütçe seviyesine göre değişir</div>
          </div>
        </div>
      </div>

      {/* BÖLÜM 8 - Maliyet Optimizasyon Tablosu */}
      <h2 id="optimizasyon-tablosu" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        8. Maliyet Optimizasyon Tablosu
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Aşağıdaki tablo, her bir maliyet kalemi için "standart harcama" ve "optimize edilmiş harcama" tutarlarını karşılaştırmaktadır. Optimizasyon önerileri, kaliteden önemli derecede taviz vermeden uygulanabilecek pratik değişiklikleri kapsamaktadır. Bu tabloyu kullanarak kendi bütçe planınızı oluşturabilirsiniz.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <th className="py-3 px-4 text-left font-bold">Kalem</th>
              <th className="py-3 px-4 text-center font-bold">Standart (TL)</th>
              <th className="py-3 px-4 text-center font-bold">Optimize (TL)</th>
              <th className="py-3 px-4 text-center font-bold">Tasarruf</th>
              <th className="py-3 px-4 text-left font-bold">Nasıl?</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Dekorasyon</td>
              <td className="py-3 px-4 text-center">2.000</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">800</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">1.200</td>
              <td className="py-3 px-4">DIY balon + online toptan alış</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4 font-semibold">Yiyecek-İçecek</td>
              <td className="py-3 px-4 text-center">2.500</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">1.200</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">1.300</td>
              <td className="py-3 px-4">Ev yapımı ikramlar + mevsim meyve</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Pasta</td>
              <td className="py-3 px-4 text-center">2.000</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">1.200</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">800</td>
              <td className="py-3 px-4">Orta boy pasta + cupcake kombinasyonu</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4 font-semibold">Eğlence</td>
              <td className="py-3 px-4 text-center">5.000</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">3.500</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">1.500</td>
              <td className="py-3 px-4">Full paket + hafta içi indirim</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Hediyelik</td>
              <td className="py-3 px-4 text-center">1.000</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">500</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">500</td>
              <td className="py-3 px-4">DIY kraft çanta + ev yapımı kurabiye</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4 font-semibold">Fotoğrafçı</td>
              <td className="py-3 px-4 text-center">2.000</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">0</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">2.000</td>
              <td className="py-3 px-4">Yetenekli yakına devretme</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 font-semibold">Diğer</td>
              <td className="py-3 px-4 text-center">500</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">300</td>
              <td className="py-3 px-4 text-center text-emerald-600 font-semibold">200</td>
              <td className="py-3 px-4">Detaylı kontrol listesi</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-indigo-50 font-bold text-gray-900">
              <td className="py-4 px-4">TOPLAM</td>
              <td className="py-4 px-4 text-center">15.000 TL</td>
              <td className="py-4 px-4 text-center text-emerald-600">7.500 TL</td>
              <td className="py-4 px-4 text-center text-emerald-600">7.500 TL</td>
              <td className="py-4 px-4">%50 tasarruf!</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Yukarıdaki optimizasyon tablosundan görüldüğü gibi, doğru stratejilerle 15.000 TL'lik standart bir bütçeyi 7.500 TL'ye düşürmek mümkündür. Bu %50'lik tasarruf, kaliteden ciddi bir taviz vermeden, akıllıca seçimlerle elde edilebilir. Önemli olan, her kalemde bilinçli tercihler yapmak ve gereksiz harcamalardan kaçınmaktır. Profesyonel eğlence hizmetinden vazgeçmenizi önermiyoruz; bunun yerine hafta içi organizasyon veya full paket seçenekleri ile eğlence maliyetini optimize etmenizi tavsiye ederiz. Çocukların yüzündeki gülümseme ve yarattığınız anılar, yapılan her yatırıma değecektir.
      </p>

      {/* Final özet kartı */}
      <div className="bg-white border-2 border-gray-800 rounded-2xl overflow-hidden mb-8 shadow-lg">
        <div className="bg-gray-800 text-white p-6 text-center">
          <h3 className="text-2xl font-bold">Evde 20 Kişilik Doğum Günü - Maliyet Özeti</h3>
          <p className="text-gray-300 text-sm mt-1">2026 Yılı İstanbul Fiyatları ile</p>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1 font-semibold">Ekonomik</div>
              <div className="text-3xl font-extrabold text-green-600">3.000 - 5.000 TL</div>
              <div className="text-xs text-gray-500 mt-1">DIY dekor + ev yapımı ikram</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl ring-2 ring-blue-300">
              <div className="text-sm text-gray-600 mb-1 font-semibold">Standart</div>
              <div className="text-3xl font-extrabold text-blue-600">5.000 - 10.000 TL</div>
              <div className="text-xs text-gray-500 mt-1">Profesyonel gösteri + temalı parti</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1 font-semibold">Premium</div>
              <div className="text-3xl font-extrabold text-purple-600">10.000 - 20.000 TL</div>
              <div className="text-xs text-gray-500 mt-1">Full paket + tüm hizmetler dahil</div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-gray-700 text-sm"><strong>Gizli Maliyetler Eklenmiş Ortalama:</strong></p>
                <p className="text-gray-500 text-xs">Beklenmedik giderler için +%10-15 tampon eklenmiştir</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-gray-900">+1.000 - 2.500 TL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-emerald-800 mb-2">Tasarruf İpucu - Son Söz</h4>
        <p className="text-gray-700 text-sm">
          Bütçeniz ne olursa olsun, en önemli yatırım çocuğunuzun mutluluğu ve güvenliği için yaptığınız yatırımdır. Ekonomik bir partide bile sıcak bir ortam, sevgi dolu bir hazırlık ve birkaç eğlenceli oyun, çocuğunuzun yıllar sonra bile hatırlayacağı güzel anılar bırakmaya yetecektir. Profesyonel destek almak isterseniz, <Link to="/organizasyonlar/full-paket-organizasyon" className="text-emerald-700 hover:text-emerald-800 font-semibold underline">full paket doğum günü organizasyonu</Link> ile her bütçeye uygun seçeneklerden faydalanabilirsiniz.
        </p>
      </div>

      {/* Hizmet CTA */}
      <div className="bg-gradient-to-br from-gray-50 to-emerald-50 border border-emerald-200 rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Profesyonel Doğum Günü Organizasyonu ile Bütçenizi Optimize Edin</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          İstanbul'da evde doğum günü organizasyonu planlıyorsanız, hem bütçenize uygun hem de çocuğunuzun mutluluğunu garanti altına alacak profesyonel hizmetlerimizi inceleyin. <Link to="/organizasyonlar/palyaco-kiralama" className="text-emerald-700 hover:text-emerald-800 font-semibold underline">Palyaço kiralama</Link>, <Link to="/organizasyonlar/bubble-show" className="text-emerald-700 hover:text-emerald-800 font-semibold underline">bubble show gösterisi</Link>, <Link to="/organizasyonlar/pamuk-seker" className="text-emerald-700 hover:text-emerald-800 font-semibold underline">pamuk şeker arabası</Link> ve daha birçok hizmetimizle çocukların en özel gününü unutulmaz kılıyoruz. Full paket organizasyon seçeneği ile bireysel kiralamaya kıyasla %15-25 tasarruf edersiniz.
        </p>
        <Link
          to="/organizasyonlar/full-paket-organizasyon"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Full Paket Organizasyon Detayları
        </Link>
      </div>

      {/* SSS Bölümü */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        9. Sık Sorulan Sorular (SSS)
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
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Evde Doğum Günü Bütçenizi Profesyonel Destekle Planlayın!</h3>
        <p className="mb-6 leading-relaxed">
          Çocuğunuzun doğum gününü evde kutlamak istiyorsanız ve bütçenizi en verimli şekilde yönetmek istiyorsanız, profesyonel ekibimizle iletişime geçin. Her bütçeye uygun paket seçenekleri, şeffaf fiyatlandırma ve deneyimli kadromuzla sizin için en uygun çözümü bulalım. 10 yıllık deneyim, binlerce başarılı etkinlik ve yüzlerce mutlu aile ile gurur duyuyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-emerald-700 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            +90 530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Evde%20do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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
      slug="evde-dogum-gunu-maliyeti"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/full-paket-organizasyon"
      relatedServiceName="Doğum Günü Organizasyonu"
    />
  )
}

export default EvdeDogumGunuMaliyeti
