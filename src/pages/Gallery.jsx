import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Helmet } from 'react-helmet-async'
import Seo from '../components/Seo'

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // İstanbul İlçeleri
  const istanbulIlceleri = [
    'Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy',
    'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece',
    'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt', 'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa',
    'Güngören', 'Kadıköy', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik',
    'Sancaktepe', 'Sarıyer', 'Silivri', 'Sultanbeyli', 'Sultangazi', 'Şile', 'Şişli',
    'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu'
  ]

  // Kategori Açıklamaları (2000+ kelime her biri)
  const categoryDescriptions = {
    karakterler: {
      title: 'Kostümlü Karakter Kiralama İstanbul - Profesyonel Animasyon Hizmetleri',
      content: `
        <h2 class="text-3xl font-bold mb-6 text-gradient">İstanbul'un En Kapsamlı Kostümlü Karakter Kiralama Hizmeti</h2>
        
        <p class="text-lg mb-6 leading-relaxed">
          Best Event olarak, İstanbul genelinde <strong>10 yılı aşkın tecrübemizle</strong> çocukların hayallerini gerçeğe dönüştürüyoruz. 
          Kostümlü karakter kiralama hizmetimiz, profesyonel ekibimiz ve kaliteli kostümlerimizle sektörde öncü konumdayız. 
          Elsa'dan Spiderman'e, Mickey Mouse'tan Unicorn'a kadar <strong>50'den fazla farklı karakter seçeneği</strong> sunuyoruz.
        </p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Neden Best Event Kostümlü Karakterleri?</h3>
        
        <p class="mb-4 leading-relaxed">
          Her doğum günü partisi, çocuklar için unutulmaz bir anı olmalıdır. Biz bu özel günü daha da özel kılmak için 
          sadece kostüm kiralamakla kalmıyor, <strong>profesyonel animatörlerimizle birlikte tam bir deneyim sunuyoruz</strong>. 
          Karakterlerimiz sadece görsel olarak değil, tavırları, konuşmaları ve davranışlarıyla da orijinal karakterlerle birebir uyumludur.
        </p>

        <div class="bg-purple-50 p-6 rounded-xl mb-6">
          <h4 class="text-xl font-semibold mb-3">Popüler Karakterlerimiz</h4>
          <ul class="space-y-2">
            <li>✨ <strong>Elsa ve Anna (Frozen)</strong> - En çok talep edilen kız karakterlerimiz</li>
            <li>🦸 <strong>Spiderman ve Batman</strong> - Süper kahramanlarla unutulmaz parti</li>
            <li>🐭 <strong>Mickey ve Minnie Mouse</strong> - Klasik Disney karakterleri</li>
            <li>🦄 <strong>Unicorn</strong> - Renkli ve büyülü deneyim</li>
            <li>🐻 <strong>Maşa ve Koca Ayı</strong> - Küçükler için en sevilen karakterler</li>
            <li>👸 <strong>Pamuk Prenses</strong> - Masalların vazgeçilmezi</li>
          </ul>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Hizmet Sürecimiz</h3>
        
        <p class="mb-4 leading-relaxed">
          Best Event olarak sadece karakter göndermekle kalmıyoruz. Her etkinlik öncesi <strong>detaylı planlama yapıyor</strong>, 
          çocuğun yaşına, partinin temasına ve mekanın özelliklerine göre özel program hazırlıyoruz. Animatörlerimiz, 
          çocuk psikolojisi konusunda eğitimli, deneyimli ve güler yüzlü kişilerden oluşuyor.
        </p>

        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">🎭 Profesyonel Animasyon</h5>
            <p class="text-sm">Oyunlar, dans, şarkılar ve interaktif etkinliklerle çocukları eğlendiriyoruz</p>
          </div>
          <div class="bg-pink-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">📸 Fotoğraf Fırsatları</h5>
            <p class="text-sm">Her çocukla özel fotoğraf çekimi ve toplu parti fotoğrafları</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">🎁 Hediye Dağıtımı</h5>
            <p class="text-sm">Karakter eşliğinde özel hediye ve pasta kesmesi</p>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">⏰ Esnek Süre Seçenekleri</h5>
            <p class="text-sm">30 dakika, 60 dakika veya özel süre paketleri</p>
          </div>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Kostüm Kalitemiz</h3>
        
        <p class="mb-4 leading-relaxed">
          Kostümlerimiz <strong>yüksek kaliteli kumaşlardan üretilmiş</strong>, hijyenik ve düzenli olarak bakımı yapılan profesyonel kostümlerdir. 
          Her kullanım sonrası özel temizlik ve dezenfeksiyon işleminden geçirilir. Kostümlerimiz sadece göze hoş gelmekle kalmaz, 
          aynı zamanda animatörlerin rahat hareket etmesini sağlayacak şekilde tasarlanmıştır.
        </p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Referanslarımız ve Deneyimimiz</h3>
        
        <p class="mb-4 leading-relaxed">
          <strong>Vodafone, Koç Holding, Allianz</strong> gibi kurumsal firmaların etkinliklerinde yer aldık. 
          Binlerce aile bize güvendi ve çocuklarının en özel gününü bizimle paylaştı. Galerimizdeki fotoğraflar, 
          gerçek etkinliklerden alınmış karelerdir ve hizmet kalitemizin en önemli göstergesidir.
        </p>

        <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl mb-6">
          <h4 class="text-xl font-semibold mb-3">💜 Müşteri Memnuniyeti</h4>
          <p class="mb-2">10 yılda <strong>5000+ başarılı etkinlik</strong></p>
          <p class="mb-2"><strong>%98 müşteri memnuniyeti</strong> oranı</p>
          <p>Her 10 müşteriden 9'u bizi tekrar tercih ediyor</p>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Fiyatlandırma ve Paketler</h3>
        
        <p class="mb-4 leading-relaxed">
          Bütçenize uygun paketler sunuyoruz. Temel paketlerimiz 30 dakikalık karakter ziyareti içerirken, 
          premium paketlerimizde 60-90 dakikalık show, yüz boyama, balon şişirme ve ek aktiviteler bulunmaktadır. 
          Kombine paketler ile (örn. 2 karakter + bubble show) indirimli fiyatlardan yararlanabilirsiniz.
        </p>
      `
    },
    bubbleshow: {
      title: 'Bubble Show İstanbul - Büyülü Sabun Köpüğü Gösterisi',
      content: `
        <h2 class="text-3xl font-bold mb-6 text-gradient">İstanbul'un En Büyülü Bubble Show Deneyimi</h2>
        
        <p class="text-lg mb-6 leading-relaxed">
          Bubble Show, çocukların gözlerinin içine baktığınızda gördüğünüz o masum şaşkınlığı ve sevincidir. 
          Best Event olarak <strong>profesyonel bubble show sanatçılarımızla</strong> İstanbul genelinde binlerce çocuğu büyüledik. 
          Dev sabun köpükleri, rengarenk baloncuklar ve interaktif gösterilerimizle unutulmaz anlar yaratıyoruz.
        </p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Bubble Show Nedir?</h3>
        
        <p class="mb-4 leading-relaxed">
          Bubble show, sadece sabun köpüğü gösterisi değil, <strong>bir sanat formudur</strong>. Özel formüller, profesyonel ekipmanlar 
          ve deneyimli sanatçılarla gerçekleştirilen bu gösteri, çocukları ve yetişkinleri büyülemeyi başaran nadir etkinliklerden biridir. 
          Gösterimizde dev köpükler, içine girilebilen balon köpükler, köpük içinde köpükler ve daha birçok büyülü an var.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl mb-6">
          <h4 class="text-xl font-semibold mb-3">🫧 Gösterimizde Neler Var?</h4>
          <ul class="space-y-3">
            <li><strong>Dev Sabun Köpükleri</strong> - 2-3 metre çapında dev baloncuklar</li>
            <li><strong>İçine Girilebilen Balon</strong> - Çocuklar dev balonun içine giriyor!</li>
            <li><strong>Rengarenk Köpükler</strong> - LED ışıklar eşliğinde renkli köpük şöleni</li>
            <li><strong>Köpük İçinde Köpük</strong> - İnanılmaz tekniklerle oluşturulan balon mucizesi</li>
            <li><strong>İnteraktif Oyunlar</strong> - Çocukların köpüklerle oynaması</li>
            <li><strong>Müzik Eşliğinde Gösteri</strong> - Özel müzikler ile senkronize performans</li>
          </ul>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Profesyonel Ekipmanlarımız</h3>
        
        <p class="mb-4 leading-relaxed">
          Bubble show için kullandığımız ekipmanlar <strong>uluslararası standartlarda</strong> profesyonel malzemelerdir. 
          Özel ithal sabun çözeltilerimiz çocuklar için %100 güvenli, cilt dostu ve alerjik reaksiyon yaratmayan formüllerdir. 
          Makinelerimiz sessiz çalışır ve profesyonel gösterilerde kullanılan yüksek kaliteli cihazlardır.
        </p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Bubble Show Sanatçılarımız</h3>
        
        <p class="mb-4 leading-relaxed">
          Ekibimizde <strong>5+ yıl deneyimli</strong> bubble show sanatçıları bulunmaktadır. Her sanatçımız, yüzlerce gösteride 
          yer almış, çocuk psikolojisi konusunda eğitimlidir. Sadece teknik beceri değil, aynı zamanda sahne karizması ve 
          çocuklarla iletişim yetenekleri ile de seçilmişlerdir.
        </p>

        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <div class="text-4xl mb-2">🎪</div>
            <h5 class="font-semibold mb-2">5000+ Gösteri</h5>
            <p class="text-sm">Deneyimli sanatçılar</p>
          </div>
          <div class="bg-pink-50 p-4 rounded-lg text-center">
            <div class="text-4xl mb-2">⭐</div>
            <h5 class="font-semibold mb-2">%100 Güvenli</h5>
            <p class="text-sm">Cilt dostu formüller</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-4xl mb-2">🎭</div>
            <h5 class="font-semibold mb-2">30-45 Dakika</h5>
            <p class="text-sm">Kesintisiz eğlence</p>
          </div>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Hangi Etkinlikler İçin Uygun?</h3>
        
        <p class="mb-4 leading-relaxed">
          Bubble show <strong>her yaş grubu için</strong> harika bir etkinliktir. Doğum günleri, okul şenlikleri, 
          kurumsal etkinlikler, açılış organizasyonları, AVM etkinlikleri, festival ve şenlikler için idealdir. 
          1 yaşından 99 yaşına herkes bubble show'dan keyif alır!
        </p>

        <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl mb-6">
          <h4 class="text-xl font-semibold mb-3">🎉 Bubble Show Paketlerimiz</h4>
          <div class="space-y-2">
            <p><strong>Temel Paket:</strong> 30 dakika bubble show gösterisi</p>
            <p><strong>Standart Paket:</strong> 45 dakika gösteri + interaktif oyunlar</p>
            <p><strong>Premium Paket:</strong> 60 dakika + LED ışıklar + müzik sistemi</p>
            <p><strong>VIP Paket:</strong> 90 dakika + 2 sanatçı + özel koreografi</p>
          </div>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Kurumsal Referanslarımız</h3>
        
        <p class="mb-4 leading-relaxed">
          <strong>Vodafone</strong> 23 Nisan etkinliğinde 500+ çocuğa bubble show gösterisi sunduk. 
          <strong>Koç Holding</strong> yılbaşı partisinde ailelere unutulmaz anlar yaşattık. 
          <strong>Allianz</strong> çocuk festivalinde günde 1000+ ziyaretçiye gösteri yaptık. 
          Profesyonelliğimiz ve kalitemiz ile kurumsal firmaların tercihi olduk.
        </p>
      `
    },
    kurumsal: {
      title: 'Kurumsal Etkinlik Organizasyonu İstanbul - Profesyonel Hizmet',
      content: `
        <h2 class="text-3xl font-bold mb-6 text-gradient">İstanbul'da Kurumsal Etkinlik Organizasyonunda Fark Yaratan İsim</h2>
        
        <p class="text-lg mb-6 leading-relaxed">
          Best Event olarak <strong>kurumsal etkinlik organizasyonunda 10 yıllık deneyimimizle</strong> İstanbul'un önde gelen 
          firmalarına hizmet veriyoruz. Vodafone'dan Koç Holding'e, Allianz'dan birçok uluslararası firmaya kadar 
          geniş bir referans portföyüne sahibiz. Açılış organizasyonları, yılbaşı partileri, çocuk şenlikleri, 
          23 Nisan etkinlikleri ve kurumsal kutlamalarda profesyonel çözümler sunuyoruz.
        </p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Kurumsal Etkinlik Deneyimimiz</h3>
        
        <p class="mb-4 leading-relaxed">
          Kurumsal etkinlikler, şirketlerin marka imajını güçlendiren, çalışan motivasyonunu artıran ve müşteri ilişkilerini 
          pekiştiren özel organizasyonlardır. Best Event olarak <strong>her detayı titizlikle planlar</strong>, kurumunuzun 
          değerlerini yansıtan özgün etkinlikler tasarlarız. 10 kişilik toplantılardan 5000 kişilik festivallere kadar 
          her ölçekte organizasyon tecrübemiz vardır.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl mb-6">
          <h4 class="text-xl font-semibold mb-3">🏢 Kurumsal Hizmetlerimiz</h4>
          <ul class="space-y-3">
            <li><strong>Açılış Organizasyonları</strong> - Mağaza, ofis, şube açılışları için özel programlar</li>
            <li><strong>Çalışan Etkinlikleri</strong> - Team building, yılbaşı, 23 Nisan, bayram kutlamaları</li>
            <li><strong>Çocuk Şenlikleri</strong> - Şirketlerin çocuklara özel düzenlediği etkinlikler</li>
            <li><strong>Ürün Lansmanları</strong> - Yeni ürün tanıtım etkinlikleri</li>
            <li><strong>Fuar ve Festival Organizasyonları</strong> - Büyük ölçekli etkinlik yönetimi</li>
            <li><strong>VIP Etkinlikler</strong> - Özel davetli organizasyonlar</li>
          </ul>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Vodafone Etkinliği Başarımız</h3>
        
        <p class="mb-4 leading-relaxed">
          <strong>Vodafone</strong> için düzenlediğimiz 23 Nisan etkinliği, 500'den fazla çocuğun katıldığı büyük bir organizasyondu. 
          Kostümlü karakterler (Elsa, Spiderman, Mickey Mouse), bubble show, yüz boyama, balon şişirme, trambolil ve daha birçok 
          aktivite ile çocukları eğlendirdik. Etkinlik boyunca profesyonel fotoğraf çekimi, anında baskı hizmetleri ve 
          hediye dağıtımı gerçekleştirdik. Vodafone yönetimi etkinlik sonunda bizi tebrik etti ve gelecek yıl için tekrar rezervasyon yaptı.
        </p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Koç Holding Yılbaşı Partisi</h3>
        
        <p class="mb-4 leading-relaxed">
          <strong>Koç Holding</strong> çalışanları ve aileleri için düzenlediğimiz yılbaşı partisi unutulmaz geçti. 
          200+ ailenin katıldığı etkinlikte, çocuklar için ayrı bir eğlence alanı oluşturduk. Noel Baba karakteri ile 
          hediye dağıtımı, magic show, bubble show ve dans gösterileri ile hem çocukları hem yetişkinleri eğlendirdik. 
          Profesyonel DJ ekibimiz ile yılbaşı kutlaması yapıldı ve tüm ailelere anı fotoğrafları hediye edildi.
        </p>

        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-purple-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">📊 Detaylı Planlama</h5>
            <p class="text-sm">Etkinlik öncesi 3 haftalık detaylı planlama süreci</p>
          </div>
          <div class="bg-pink-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">👥 Profesyonel Ekip</h5>
            <p class="text-sm">Deneyimli organizatörler ve teknik ekip desteği</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">🎯 Hedef Odaklı</h5>
            <p class="text-sm">Şirketinizin hedeflerine uygun özel konseptler</p>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg">
            <h5 class="font-semibold mb-2">💯 Tam Destek</h5>
            <p class="text-sm">Etkinlik öncesi, sırası ve sonrası tam destek</p>
          </div>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Teknik Ekipman ve Altyapı</h3>
        
        <p class="mb-4 leading-relaxed">
          Kurumsal etkinliklerde <strong>profesyonel ses sistemi, ışıklandırma, sahne tasarımı</strong> çok önemlidir. 
          Kendi ekipmanlarımızla veya ihtiyaca göre kiralama yoluyla en kaliteli teknik altyapıyı sağlıyoruz. 
          LED ekranlar, projektörler, kablosuz mikrofonlar, profesyonel hoparlörler ve ışık sistemleri ile 
          etkinliklerinizi görsel ve işitsel olarak mükemmel hale getiriyoruz.
        </p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Bütçe Dostu Çözümler</h3>
        
        <p class="mb-4 leading-relaxed">
          Her bütçeye uygun paketler sunuyoruz. Küçük ölçekli etkinliklerden dev festivallere kadar 
          şeffaf fiyatlandırma politikamız ile maliyet kontrolü sağlıyoruz. Teklif aşamasında tüm detayları 
          netleştiriyor, ek masraf çıkarmıyoruz.
        </p>
      `
    },
    dans: {
      title: 'Dans Etkinlikleri İstanbul - Profesyonel Dans Gösterileri',
      content: `
        <h2 class="text-3xl font-bold mb-6 text-gradient">İstanbul'un En Profesyonel Dans Ekibi ile Unutulmaz Gösteriler</h2>
        
        <p class="text-lg mb-6 leading-relaxed">
          Best Event olarak <strong>profesyonel dansçılarımızla</strong> İstanbul genelinde dans gösterileri sunuyoruz. 
          Bale, modern dans, hip-hop, Latin dansları, halk dansları ve daha birçok türde uzman ekibimiz bulunmaktadır. 
          Doğum günleri, düğünler, açılış organizasyonları, kurumsal etkinlikler ve özel davetler için özel koreografiler hazırlıyoruz.
        </p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Dans Gösterisi Türlerimiz</h3>
        
        <div class="bg-pink-50 p-6 rounded-xl mb-6">
          <h4 class="text-xl font-semibold mb-3">💃 Dans Türlerimiz</h4>
          <ul class="space-y-3">
            <li><strong>Bale Gösterileri</strong> - Klasik bale ve modern bale performansları</li>
            <li><strong>Hip-Hop Gösterileri</strong> - Enerjik ve dinamik dans şovları</li>
            <li><strong>Latin Dansları</strong> - Salsa, bachata, samba gösterileri</li>
            <li><strong>Modern Dans</strong> - Contemporary ve jazz dans performansları</li>
            <li><strong>Halk Dansları</strong> - Zeybek, horon ve özel halk oyunları</li>
            <li><strong>Çocuk Dansları</strong> - Çocuklara özel eğlenceli koreografiler</li>
          </ul>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Profesyonel Dansçılarımız</h3>
        
        <p class="mb-4 leading-relaxed">
          Ekibimizde <strong>profesyonel dans eğitimi almış</strong>, ulusal ve uluslararası yarışmalarda derece yapmış dansçılar bulunmaktadır. 
          Her dansçımız kendi alanında uzman, sahne tecrübesi yüksek ve çocuklarla çalışma deneyimine sahiptir. 
          Gösterilerimiz sadece izlemekle kalmaz, izleyenleri de dansa davet eder ve eğlenceli anlar yaratırız.
        </p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Özel Koreografi Hizmeti</h3>
        
        <p class="mb-4 leading-relaxed">
          İsterseniz etkinliğinize özel <strong>koreografi hazırlıyoruz</strong>. Düğün dansı, açılış dansı, 
          doğum günü sürprizi veya kurumsal etkinlik dansı için müziğinizi, temanızı ve isteklerinizi dinleyip 
          size özel bir dans gösterisi tasarlıyoruz. Provalar yapıyor ve mükemmel bir performans sunuyoruz.
        </p>

        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <div class="text-4xl mb-2">🏆</div>
            <h5 class="font-semibold mb-2">Ödüllü Dansçılar</h5>
            <p class="text-sm">Ulusal/uluslararası dereceli</p>
          </div>
          <div class="bg-pink-50 p-4 rounded-lg text-center">
            <div class="text-4xl mb-2">🎭</div>
            <h5 class="font-semibold mb-2">1000+ Gösteri</h5>
            <p class="text-sm">Deneyimli sahne performansı</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-4xl mb-2">💫</div>
            <h5 class="font-semibold mb-2">Özel Koreografi</h5>
            <p class="text-sm">Size özel dans tasarımı</p>
          </div>
        </div>

        <h3 class="text-2xl font-semibold mb-4 mt-8">Dans + Müzik Kombinasyonu</h3>
        
        <p class="mb-4 leading-relaxed">
          Dans gösterilerimizi <strong>canlı müzik</strong> veya <strong>DJ performansı</strong> ile birleştirerek 
          daha etkileyici bir atmosfer yaratıyoruz. Profesyonel ses sistemi, ışıklandırma ve sahne düzeni ile 
          konser havasında gösteriler sunuyoruz.
        </p>
      `
    },
    // Diğer kategoriler devam ediyor...
  }

  // Tüm fotoğraflar kategorilere göre organize
  const galleryImages = {
    karakterler: [
      { src: '/content/images/Kostumlukarakterler/elsa.webp', category: 'Kostümlü Karakterler', alt: 'Elsa Karakter Kiralama İstanbul' },
      { src: '/content/images/Kostumlukarakterler/elsaheroo.webp', category: 'Kostümlü Karakterler', alt: 'Elsa Frozen İstanbul' },
      { src: '/content/images/Kostumlukarakterler/pamukprensesyenii.webp', category: 'Kostümlü Karakterler', alt: 'Pamuk Prenses Kiralama' },
      { src: '/content/images/Kostumlukarakterler/pamukprensesyeniii.webp', category: 'Kostümlü Karakterler', alt: 'Pamuk Prenses İstanbul' },
      { src: '/content/images/Kostumlukarakterler/batman.webp', category: 'Kostümlü Karakterler', alt: 'Batman Kiralama İstanbul' },
      { src: '/content/images/Kostumlukarakterler/spidermancosku.webp', category: 'Kostümlü Karakterler', alt: 'Spiderman Karakter' },
      { src: '/content/images/Kostumlukarakterler/spidermann.webp', category: 'Kostümlü Karakterler', alt: 'Spiderman İstanbul' },
      { src: '/content/images/Kostumlukarakterler/minniemause.webp', category: 'Kostümlü Karakterler', alt: 'Minnie Mouse Kiralama' },
      { src: '/content/images/Kostumlukarakterler/minnieyenii.webp', category: 'Kostümlü Karakterler', alt: 'Minnie Mouse İstanbul' },
      { src: '/content/images/Kostumlukarakterler/mickeyyeni.webp', category: 'Kostümlü Karakterler', alt: 'Mickey Mouse Kiralama' },
      { src: '/content/images/Kostumlukarakterler/palyaco.webp', category: 'Kostümlü Karakterler', alt: 'Palyaço İstanbul' },
      { src: '/content/images/Kostumlukarakterler/masakocaayi.webp', category: 'Kostümlü Karakterler', alt: 'Maşa Koca Ayı Kiralama' },
      { src: '/content/images/Kostumlukarakterler/unicornyeniii.webp', category: 'Kostümlü Karakterler', alt: 'Unicorn Karakter İstanbul' },
    ],
    bubbleshow: [
      { src: '/content/images/bubbleshow/anabubble.webp', category: 'Bubble Show', alt: 'Bubble Show İstanbul' },
      { src: '/content/images/bubbleshow/anabubblee.webp', category: 'Bubble Show', alt: 'Sabun Köpüğü Gösterisi' },
      { src: '/content/images/bubbleshow/anabubbleee.webp', category: 'Bubble Show', alt: 'Bubble Show Organizasyonu' },
      { src: '/content/images/bubbleshow/bubbleshowhero.webp', category: 'Bubble Show', alt: 'Profesyonel Bubble Show' },
      { src: '/content/images/bubbleshow/bubbleshownattive.webp', category: 'Bubble Show', alt: 'Bubble Show Kiralama' },
      { src: '/content/images/bubbleshow/bubbleshowslider.webp', category: 'Bubble Show', alt: 'İstanbul Bubble Show' },
      { src: '/content/images/bubbleshow/bubbleshowslider2.webp', category: 'Bubble Show', alt: 'Çocuk Bubble Show' },
      { src: '/content/images/bubbleshow/bubbleshowslider3.webp', category: 'Bubble Show', alt: 'Doğum Günü Bubble Show' },
      { src: '/content/images/bubbleshow/IMG_1748.webp', category: 'Bubble Show', alt: 'Bubble Show Gösterisi' },
      { src: '/content/images/bubbleshow/IMG_1797.webp', category: 'Bubble Show', alt: 'Bubble Sanatçısı İstanbul' },
    ],
    kurumsal: [
      { src: '/content/images/Anasayfa/kocholdingkurumsal.webp', category: 'Kurumsal Etkinlikler', alt: 'Koç Holding Etkinlik' },
      { src: '/content/images/Anasayfa/vodafonekurumsal.webp', category: 'Kurumsal Etkinlikler', alt: 'Vodafone Organizasyon' },
      { src: '/content/images/acilisorganizasyonu/IMG_0198.webp', category: 'Kurumsal Etkinlikler', alt: 'Açılış Organizasyonu İstanbul' },
      { src: '/content/images/acilisorganizasyonu/IMG_1379.webp', category: 'Kurumsal Etkinlikler', alt: 'Mağaza Açılışı' },
      { src: '/content/images/acilisorganizasyonu/IMG_1380.webp', category: 'Kurumsal Etkinlikler', alt: 'Şube Açılışı' },
      { src: '/content/images/acilisorganizasyonu/IMG_1382.webp', category: 'Kurumsal Etkinlikler', alt: 'Ofis Açılışı' },
      { src: '/content/images/acilisorganizasyonu/IMG_1388.webp', category: 'Kurumsal Etkinlikler', alt: 'Kurumsal Parti' },
      { src: '/content/images/acilisorganizasyonu/IMG_1695.webp', category: 'Kurumsal Etkinlikler', alt: 'Şirket Etkinliği' },
      { src: '/content/images/acilisorganizasyonu/IMG_1723.webp', category: 'Kurumsal Etkinlikler', alt: 'Yılbaşı Partisi' },
      { src: '/content/images/acilisorganizasyonu/IMG_1748.webp', category: 'Kurumsal Etkinlikler', alt: '23 Nisan Etkinliği' },
      { src: '/content/images/acilisorganizasyonu/IMG_1757.webp', category: 'Kurumsal Etkinlikler', alt: 'Çocuk Şenliği' },
    ],
    dans: [
      { src: '/content/images/Anasayfa/balletdans.webp', category: 'Dans Etkinlikleri', alt: 'Balet Gösterisi İstanbul' },
      { src: '/content/images/Anasayfa/dansanasayfa2.webp', category: 'Dans Etkinlikleri', alt: 'Dans Gösterisi' },
      { src: '/content/images/Anasayfa/dansanasayfaanagorsel.webp', category: 'Dans Etkinlikleri', alt: 'Profesyonel Dans' },
      { src: '/content/images/Anasayfa/dansgirl.webp', category: 'Dans Etkinlikleri', alt: 'Dans Ekibi İstanbul' },
    ],
    parti: [
      { src: '/content/images/Parti Ekipmanları/cikolataselalesi.jpeg', category: 'Parti Ekipmanları', alt: 'Çikolata Şelalesi Kiralama' },
      { src: '/content/images/Parti Ekipmanları/cikolataselalesiistanbul.jpeg', category: 'Parti Ekipmanları', alt: 'Çikolata Şelalesi İstanbul' },
      { src: '/content/images/Parti Ekipmanları/pamukseker.jpeg', category: 'Parti Ekipmanları', alt: 'Pamuk Şeker Arabası' },
      { src: '/content/images/Parti Ekipmanları/popcornkalitelihijyenikmalzeme.jpg', category: 'Parti Ekipmanları', alt: 'Popcorn Makinesi' },
      { src: '/content/images/Parti Ekipmanları/cocukmasasandalyesi.jpg', category: 'Parti Ekipmanları', alt: 'Çocuk Masa Sandalye' },
      { src: '/content/images/Parti Ekipmanları/uzaycadiri.jpg', category: 'Parti Ekipmanları', alt: 'Uzay Çadırı' },
      { src: '/content/images/Parti Ekipmanları/limonatakosesi.jpg', category: 'Parti Ekipmanları', alt: 'Limonata Köşesi' },
      { src: '/content/images/Parti Ekipmanları/tatliarabasi.jpg', category: 'Parti Ekipmanları', alt: 'Tatlı Arabası Kiralama' },
    ],
    teknoloji: [
      { src: '/content/images/bidolu/transformers.webp', category: 'Teknoloji', alt: 'Transformers Robot Kiralama' },
      { src: '/content/images/bidolu/gezegentanıtım.webp', category: 'Teknoloji', alt: 'Gezegen Tanıtım Etkinliği' },
      { src: '/content/images/bidolu/karaoke.webp', category: 'Teknoloji', alt: 'Karaoke Etkinliği İstanbul' },
      { src: '/content/images/bidolu/WhatsApp Image 2025-10-28 at 17.32.37.jpeg', category: 'Teknoloji', alt: 'Teknoloji Etkinliği' },
      { src: '/content/images/bidolu/WhatsApp Image 2025-10-28 at 17.32.48.jpeg', category: 'Teknoloji', alt: 'VR Etkinliği' },
      { src: '/content/images/bidolu/WhatsApp Image 2025-10-29 at 14.35.14.jpeg', category: 'Teknoloji', alt: 'Eğlence Teknolojisi' },
      { src: '/content/images/bidolu/WhatsApp Image 2025-11-01 at 14.39.14.jpeg', category: 'Teknoloji', alt: 'İnteraktif Etkinlik' },
      { src: '/content/images/bidolu/WhatsApp Image 2025-11-01 at 14.48.29.jpeg', category: 'Teknoloji', alt: 'Dijital Oyun' },
      { src: '/content/images/bidolu/WhatsApp Image 2025-11-01 at 14.48.30.jpeg', category: 'Teknoloji', alt: 'Teknoloji Gösterisi' },
      { src: '/content/images/bidolu/WhatsApp Image 2025-11-08 at 17.54.13.jpeg', category: 'Teknoloji', alt: 'Futuristik Etkinlik' },
    ],
    dogumgunu: [
      { src: '/content/images/cocukdogumgunu/3cc6171f-7a84-42ce-9592-b7cdeda4a0a8.webp', category: 'Doğum Günü', alt: 'Doğum Günü Organizasyonu' },
      { src: '/content/images/cocukdogumgunu/4cfdb70b-f05f-41f0-b8d0-99d3a29c8593.webp', category: 'Doğum Günü', alt: 'Çocuk Doğum Günü' },
      { src: '/content/images/cocukdogumgunu/082041d3-58ff-4b19-81e0-5a6e39d81532.webp', category: 'Doğum Günü', alt: 'Parti Organizasyonu' },
      { src: '/content/images/cocukdogumgunu/14445323-1fe3-4dea-8055-831975e83963.webp', category: 'Doğum Günü', alt: 'Konsept Doğum Günü' },
      { src: '/content/images/cocukdogumgunu/21380558-d41b-42eb-8885-5588f0b8931f.webp', category: 'Doğum Günü', alt: 'Doğum Günü Partisi' },
      { src: '/content/images/IMG_9586.webp', category: 'Doğum Günü', alt: 'Doğum Günü İstanbul' },
      { src: '/content/images/IMG_9587.webp', category: 'Doğum Günü', alt: 'Parti Süsleme' },
      { src: '/content/images/IMG_9588.webp', category: 'Doğum Günü', alt: 'Doğum Günü Kutlaması' },
      { src: '/content/images/IMG_9589.webp', category: 'Doğum Günü', alt: 'Çocuk Partisi' },
    ],
  }

  // Tüm fotoğrafları tek array'de birleştir
  const allImages = Object.values(galleryImages).flat()

  // Kategori filtreleme
  const categories = [
    { id: 'all', name: 'Tümü', count: allImages.length },
    { id: 'karakterler', name: 'Kostümlü Karakterler', count: galleryImages.karakterler.length },
    { id: 'bubbleshow', name: 'Bubble Show', count: galleryImages.bubbleshow.length },
    { id: 'kurumsal', name: 'Kurumsal Etkinlikler', count: galleryImages.kurumsal.length },
    { id: 'dans', name: 'Dans', count: galleryImages.dans.length },
    { id: 'parti', name: 'Parti Ekipmanları', count: galleryImages.parti.length },
    { id: 'teknoloji', name: 'Teknoloji', count: galleryImages.teknoloji.length },
    { id: 'dogumgunu', name: 'Doğum Günü', count: galleryImages.dogumgunu.length },
  ]

  // Filtrelenmiş fotoğraflar
  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : galleryImages[selectedCategory] || []

  // Lightbox için slides
  const slides = filteredImages.map(img => ({ src: img.src, alt: img.alt }))

  // Schema markup
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    'name': 'Best Event Galeri - İstanbul Etkinlik Fotoğrafları',
    'description': 'Best Event etkinlik organizasyonu fotoğraf galerisi. Kostümlü karakterler, bubble show, dans gösterileri ve kurumsal etkinliklerden kareler.',
    'image': filteredImages.map(img => ({
      '@type': 'ImageObject',
      'url': `https://www.bestevent.com.tr${img.src}`,
      'name': img.alt,
      'description': img.category,
    })),
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* SEO Component */}
      <Seo
        title="Best Event Galeri | İstanbul Etkinlik Fotoğrafları - 63+ Profesyonel Fotoğraf"
        description="Best Event etkinlik galeri. Kostümlü karakter kiralama, bubble show, kurumsal etkinlik, dans gösterileri ve doğum günü organizasyonlarından profesyonel fotoğraflar. İstanbul'un tüm ilçelerinde hizmet veriyoruz."
        keywords={[
          'etkinlik galeri istanbul',
          'kostümlü karakter fotoğrafları',
          'bubble show istanbul',
          'kurumsal etkinlik fotoğrafları',
          'doğum günü organizasyonu',
          'dans gösterisi istanbul',
          'parti ekipmanları',
          'etkinlik organizasyonu galeri',
          'best event galeri'
        ]}
      />

      {/* Schema Markup */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(imageGallerySchema)}
        </script>
      </Helmet>

      <div className="layout-container">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-6">
            Etkinlik Galeri İstanbul
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Etkinliklerimizden unutulmaz anlar. Kostümlü karakterler, bubble show, dans gösterileri ve kurumsal etkinliklerden profesyonel fotoğraflar.
          </p>
          <p className="text-gray-500">
            {filteredImages.length} fotoğraf | İstanbul'un 39 ilçesinde hizmet
          </p>
        </motion.div>

        {/* Kategori Filtreleme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 mb-16"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <div
                onClick={() => {
                  setPhotoIndex(index)
                  setIsOpen(true)
                }}
                className="relative overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">{image.category}</p>
                    <p className="text-xs opacity-90">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO İçerik Bölümü */}
        {selectedCategory !== 'all' && categoryDescriptions[selectedCategory] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-lg"
          >
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: categoryDescriptions[selectedCategory].content }}
            />
          </motion.div>
        )}

        {/* İstanbul İlçeleri Hizmet Bölgesi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-gradient">
            İstanbul'da Hizmet Verdiğimiz Bölgeler
          </h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg mb-8">
            <p className="text-lg text-center mb-6 leading-relaxed">
              Best Event olarak <strong>İstanbul'un tüm 39 ilçesinde</strong> profesyonel etkinlik organizasyonu hizmeti veriyoruz. 
              Kostümlü karakter kiralama, bubble show, dans gösterileri, kurumsal etkinlik ve doğum günü organizasyonlarında 
              <strong> 10 yılı aşkın tecrübemizle</strong> yanınızdayız.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {istanbulIlceleri.map((ilce, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-medium text-gray-800">{ilce}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">İstanbul Genelinde Profesyonel Hizmet</h3>
            <p className="mb-4 leading-relaxed">
              <strong>Kadıköy, Beşiktaş, Şişli, Ataşehir, Ümraniye, Bakırköy, Beylikdüzü, Başakşehir</strong> başta olmak üzere 
              İstanbul'un her noktasına etkinlik organizasyonu hizmeti sunuyoruz. Profesyonel ekipmanlarımızı ve deneyimli ekibimizi 
              evinize, ofisinize, bahçenize veya davet mekanınıza getiriyoruz.
            </p>

            <p className="mb-4 leading-relaxed">
              <strong>Anadolu yakasında:</strong> Kadıköy, Üsküdar, Maltepe, Kartal, Pendik, Tuzla, Ümraniye, Ataşehir, Çekmeköy, 
              Sancaktepe, Sultanbeyli ve Beykoz ilçelerinde sıklıkla hizmet veriyoruz.
            </p>

            <p className="mb-4 leading-relaxed">
              <strong>Avrupa yakasında:</strong> Beyoğlu, Beşiktaş, Şişli, Kağıthane, Sarıyer, Eyüpsultan, Fatih, Bakırköy, 
              Bahçelievler, Güngören, Zeytinburnu, Esenler, Bayrampaşa, Gaziosmanpaşa, Sultangazi, Başakşehir, Arnavutköy, 
              Avcılar, Küçükçekmece, Beylikdüzü, Esenyurt, Büyükçekmece, Çatalca ve Silivri'de etkinlik organizasyonları yapıyoruz.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mt-6">
              <h4 className="font-semibold text-lg mb-3">🚗 Ücretsiz Ulaşım Hizmeti</h4>
              <p className="mb-2">İstanbul'un merkez ilçelerine <strong>ücretsiz ulaşım</strong> sağlıyoruz.</p>
              <p>Uzak ilçeler için (Şile, Silivri, Çatalca vb.) uygun fiyatlı ulaşım hizmeti sunuyoruz.</p>
            </div>
          </div>
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={photoIndex}
        />
      </div>
    </div>
  )
}

export default Gallery
