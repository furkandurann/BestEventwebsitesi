import BlogDetail from '../../components/BlogDetail'

const PalyacoGezegeni = () => {
  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-purple-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#hakkimizda" className="text-purple-600 hover:text-purple-700 font-semibold">1. Palyaço Gezegeni Hakkında: 6 Yıllık Güven</a></li>
          <li><a href="#dogum-gunu" className="text-purple-600 hover:text-purple-700 font-semibold">2. Profesyonel Doğum Günü Organizasyonu</a></li>
          <li><a href="#bubble-show" className="text-purple-600 hover:text-purple-700 font-semibold">3. Bubble Show Gösterileri</a></li>
          <li><a href="#sihirbaz" className="text-purple-600 hover:text-purple-700 font-semibold">4. Sihirbaz Gösterileri ve Magic Show</a></li>
          <li><a href="#kurumsal" className="text-purple-600 hover:text-purple-700 font-semibold">5. Kurumsal Etkinlik Hizmetleri</a></li>
          <li><a href="#kostumlu-karakterler" className="text-purple-600 hover:text-purple-700 font-semibold">6. Kostümlü Karakter Kiralama</a></li>
          <li><a href="#parti-ekipmanlari" className="text-purple-600 hover:text-purple-700 font-semibold">7. Parti Ekipmanları: Popcorn ve Pamuk Şeker Makinası</a></li>
          <li><a href="#yorumlar" className="text-purple-600 hover:text-purple-700 font-semibold">8. 217 Memnun Müşteri Yorumu</a></li>
          <li><a href="#sss" className="text-purple-600 hover:text-purple-700 font-semibold">9. Sık Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Palyaço Gezegeni</strong>, İstanbul'da 6 yıldır profesyonel doğum günü organizasyonu, bubble show gösterileri, sihirbaz performansları, kurumsal etkinlik hizmetleri ve parti ekipmanları kiralama konusunda hizmet veren güvenilir bir markadır. 217 memnun müşteri yorumu ile sektörün en beğenilen organizasyon şirketlerinden biri haline geldik.
      </p>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          🎪 <strong>Öne Çıkan Özellik:</strong> Palyaçolarımız, bubble show uzmanlarımız, sihirbazlarımız ve kostümlü karakterlerimiz ile İstanbul'un her noktasında profesyonel etkinlik hizmeti sunuyoruz. Popcorn makinası, pamuk şeker makinası ve tüm parti ekipmanları ile tam paket organizasyon!
        </p>
      </div>

      {/* Bölüm 1 */}
      <h2 id="hakkimizda" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Palyaço Gezegeni Hakkında: 6 Yıllık Güven ve Tecrübe
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        <a 
          href="https://www.palyacogezegeni.com.tr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-700 font-semibold underline decoration-wavy"
        >
          Palyaço Gezegeni
        </a>, 2019 yılından bu yana İstanbul'da çocuk doğum günleri, okul etkinlikleri ve kurumsal organizasyonlarda hizmet vermektedir. Erenköy merkezli firmamız, Kadıköy başta olmak üzere İstanbul'un tüm ilçelerinde profesyonel etkinlik hizmetleri sunmaktadır.
      </p>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8 border border-purple-200">
        <h3 className="font-bold text-gray-900 mb-4 text-xl">🏆 Neden Palyaço Gezegeni?</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⭐</span>
              <h4 className="font-bold text-gray-900">217 Memnun Müşteri</h4>
            </div>
            <p className="text-gray-700 text-sm">
              6 yılda 217 müşteri yorumu, 5.0 puan ortalaması ile sektörde lider konumdayız.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🎯</span>
              <h4 className="font-bold text-gray-900">Profesyonel Ekip</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Deneyimli palyaçolar, sihirbazlar, bubble show uzmanları ve animatörlerden oluşan ekibimiz.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📍</span>
              <h4 className="font-bold text-gray-900">İstanbul Geneli Hizmet</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Kadıköy, Üsküdar, Beşiktaş, Şişli, Sarıyer ve tüm İstanbul'da organizasyon.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💼</span>
              <h4 className="font-bold text-gray-900">Kurumsal Çözümler</h4>
            </div>
            <p className="text-gray-700 text-sm">
              Şirket etkinlikleri, açılış organizasyonları ve kurumsal kutlamalar için özel hizmet.
            </p>
          </div>
        </div>
      </div>

      {/* Bölüm 2 */}
      <h2 id="dogum-gunu" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Profesyonel Doğum Günü Organizasyonu İstanbul
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Palyaço Gezegeni olarak doğum günü organizasyonu hizmetlerimiz, çocuklarınızın hayallerini gerçeğe dönüştürür. Palyaço gösterisinden bubble show'a, sihirbaz performansından kostümlü karakterlere kadar her şey dahil!
      </p>

      <div className="space-y-4 mb-8">
        <h3 className="text-2xl font-bold text-gray-900">🎉 Doğum Günü Paketlerimiz</h3>

        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎪</span> Paketimize Dahil Hizmetler:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">✓</span>
              <div>
                <strong>Profesyonel Palyaço:</strong> Eğlenceli oyunlar, sosis balon şekilleri, komedi show
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">✓</span>
              <div>
                <strong>Bubble Show Gösterisi:</strong> LED bubble show veya klasik köpük gösterileri
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">✓</span>
              <div>
                <strong>Sihirbaz Performansı:</strong> İllüzyon, kart hileleri, tavşan ve güvercin gösterileri
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">✓</span>
              <div>
                <strong>Kostümlü Karakterler:</strong> Elsa, Spider-Man, Mickey Mouse ve 50+ karakter seçeneği
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">✓</span>
              <div>
                <strong>Popcorn & Pamuk Şeker:</strong> Popcorn makinası ve pamuk şeker makinası kiralama
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">✓</span>
              <div>
                <strong>Yüz Boyama:</strong> Glitter tattoo ve profesyonel yüz boyama sanatçıları
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">💡 Doğum Günü İpuçları:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• <strong>3-6 Yaş:</strong> Palyaço + Kostümlü Karakter + Popcorn Makinası (İdeal Paket)</li>
          <li>• <strong>7-10 Yaş:</strong> Bubble Show + Sihirbaz + Pamuk Şeker Makinası</li>
          <li>• <strong>Kurumsal:</strong> Tüm paket + DJ + Hostes hizmeti</li>
        </ul>
      </div>

      {/* Bölüm 3 */}
      <h2 id="bubble-show" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Bubble Show Gösterileri: Büyülü Köpük Dünyası
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bubble show, çocukların en sevdiği etkinliklerden biri! Palyaço Gezegeni bubble show gösterilerimiz, LED ışıklı köpükler, dev balonlar ve etkileşimli performanslar ile doğum günü partilerinizi unutulmaz kılar.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">✨</span> LED Bubble Show
          </h3>
          <p className="text-gray-700 text-sm mb-2"><strong>Özellik:</strong> Işıklı köpükler, karanlık ortamda görsellık</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 20-30 dakika</p>
          <p className="text-gray-700 text-sm"><strong>En Uygun:</strong> Akşam doğum günleri, kurumsal etkinlikler</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">🫧</span> Klasik Bubble Show
          </h3>
          <p className="text-gray-700 text-sm mb-2"><strong>Özellik:</strong> Dev köpükler, çocukları içine alan balonlar</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Süre:</strong> 15-20 dakika</p>
          <p className="text-gray-700 text-sm"><strong>En Uygun:</strong> Gündüz partileri, 3-8 yaş çocuklar</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 mb-8 border border-cyan-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🎭 Bubble Show Deneyimi:</h4>
        <p className="text-gray-700 text-sm mb-4">
          "Kızımın 5. doğum gününde bubble show yaptırdık. Çocuklar dev köpüklerin içine girdiler, LED ışıklar muhteşemdi. Palyaço Gezegeni ekibi çok profesyoneldi!" 
        </p>
        <p className="text-gray-600 text-xs italic">
          — Ayşe Hanım, Kadıköy (Google Yorumu ⭐⭐⭐⭐⭐)
        </p>
      </div>

      {/* Bölüm 4 */}
      <h2 id="sihirbaz" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Sihirbaz Gösterileri ve Magic Show İstanbul
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Profesyonel sihirbaz gösterilerimiz, çocukların hayal gücünü harekete geçirir. Tavşan ve güvercin gösterileri, kart hileleri, illüzyon performansları ve etkileşimli magic show ile doğum günü partiniz efsaneleşir!
      </p>

      <div className="space-y-4 mb-8">
        <h3 className="text-2xl font-bold text-gray-900">🎩 Sihirbaz Gösterisi Paketleri</h3>

        <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
          <h4 className="font-bold text-gray-900 mb-3">🐰 Klasik Magic Show (30 Dakika)</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Tavşan gösterisi (canlı tavşan ile etkileşim)</li>
            <li>• Kart hileleri ve illüzyonlar</li>
            <li>• Çocukları sahneye çıkarma</li>
            <li>• Komedi ve eğlence</li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
          <h4 className="font-bold text-gray-900 mb-3">🕊️ Premium Magic Show (45-60 Dakika)</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Tavşan + Güvercin gösterileri</li>
            <li>• İllüzyon numaraları (kutulardan nesneler çıkarma)</li>
            <li>• Doğum günü çocuğuna özel sihir numarası</li>
            <li>• Profesyonel sahne düzeneği</li>
            <li>• Müzikli performans</li>
          </ul>
        </div>
      </div>

      {/* Bölüm 5 */}
      <h2 id="kurumsal" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Kurumsal Etkinlik Organizasyonu ve Şirket Partileri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Palyaço Gezegeni, sadece çocuk doğum günleri değil, aynı zamanda kurumsal etkinlik organizasyonu konusunda da uzmanlaşmıştır. Şirket yılbaşı partileri, çocuk şenlikleri, açılış organizasyonları ve kurumsal kutlamalar için tam paket hizmet sunuyoruz.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">🏢 Şirket Etkinlikleri</h3>
          <p className="text-gray-700 text-sm">
            Yılbaşı partileri, çalışan çocukları için organizasyonlar, ofis kutlamaları
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">🎪 Açılış Organizasyonları</h3>
          <p className="text-gray-700 text-sm">
            Mağaza açılışları, lansman etkinlikleri, tanıtım organizasyonları
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">🎉 Çocuk Şenlikleri</h3>
          <p className="text-gray-700 text-sm">
            Okullar, AVM'ler, belediyeler için büyük çaplı etkinlikler
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 mb-8">
        <h4 className="font-bold mb-3 text-xl">💼 Kurumsal Paketimize Dahil:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p>✓ Sihirbaz gösterisi</p>
            <p>✓ Bubble show</p>
            <p>✓ Palyaço ekibi</p>
          </div>
          <div>
            <p>✓ Kostümlü karakterler</p>
            <p>✓ Popcorn + Pamuk şeker makinası</p>
            <p>✓ DJ ve ses sistemi</p>
          </div>
        </div>
      </div>

      {/* Bölüm 6 */}
      <h2 id="kostumlu-karakterler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Kostümlü Karakter Kiralama: 50+ Karakter Seçeneği
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Çocukların en sevdiği karakterlerle tanışma fırsatı! Palyaço Gezegeni olarak 50'den fazla kostümlü karakter seçeneği sunuyoruz. Elsa, Anna, Spider-Man, Mickey Mouse, Minnie Mouse, Batman ve daha fazlası!
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">👸 Kız Çocukları İçin</h3>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>• Elsa & Anna (Frozen)</li>
            <li>• Minnie Mouse</li>
            <li>• Peppa Pig</li>
            <li>• Wonder Woman</li>
            <li>• Prenses Sofia</li>
            <li>• Barbie</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">🦸 Erkek Çocukları İçin</h3>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>• Spider-Man</li>
            <li>• Batman</li>
            <li>• Mickey Mouse</li>
            <li>• Captain America</li>
            <li>• Superman</li>
            <li>• Iron Man</li>
          </ul>
        </div>
      </div>

      {/* Bölüm 7 */}
      <h2 id="parti-ekipmanlari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Parti Ekipmanları: Popcorn Makinası ve Pamuk Şeker Makinası Kiralama
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Doğum günü partilerinizi daha lezzetli hale getirin! Popcorn makinası ve pamuk şeker makinası kiralama hizmetlerimiz ile çocuklar hem eğlenir hem de taze atıştırmalıkların tadını çıkarır.
      </p>

      <div className="space-y-4 mb-8">
        <h3 className="text-2xl font-bold text-gray-900">🍿 Popcorn Makinası Kiralama</h3>

        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
          <h4 className="font-bold text-gray-900 mb-3">Paketimize Dahil:</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Profesyonel popcorn makinası</li>
            <li>• Mısır taneleri (sınırsız)</li>
            <li>• Popcorn kutuları/bardakları</li>
            <li>• Operatör hizmeti</li>
            <li>• Tuz ve tereyağı</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-6">🍬 Pamuk Şeker Makinası Kiralama</h3>

        <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
          <h4 className="font-bold text-gray-900 mb-3">Paketimize Dahil:</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Profesyonel pamuk şeker makinası</li>
            <li>• Renkli şekerler (pembe, mavi, sarı)</li>
            <li>• Pamuk şeker çubukları (sınırsız)</li>
            <li>• Operatör hizmeti</li>
            <li>• Dekoratif sunum standı</li>
          </ul>
        </div>
      </div>

      {/* Bölüm 8 */}
      <h2 id="yorumlar" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        8. 217 Memnun Müşteri Yorumu: Palyaço Gezegeni Google Değerlendirmeleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        6 yıldır hizmet verdiğimiz Palyaço Gezegeni markamız, 217 Google yorumu ile <strong>5.0 yıldız</strong> ortalamasına sahiptir. İstanbul'da doğum günü organizasyonu alanında en çok tercih edilen firmalardan biriyiz.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="font-bold text-gray-900">5.0/5.0</span>
          </div>
          <p className="text-gray-700 text-sm italic mb-2">
            "Oğlumun 4. doğum gününde bubble show, palyaço ve sihirbaz hizmetlerini aldık. Ekip çok profesyoneldi, çocuklar bayıldı! Kesinlikle tavsiye ederim."
          </p>
          <p className="text-gray-600 text-xs">— Mehmet B., Kadıköy</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="font-bold text-gray-900">5.0/5.0</span>
          </div>
          <p className="text-gray-700 text-sm italic mb-2">
            "Kurumsal etkinliğimizde Palyaço Gezegeni ile çalıştık. Popcorn ve pamuk şeker makinası, kostümlü karakterler harikaydı. 150 çocuk katıldı, hepsi mutlu ayrıldı!"
          </p>
          <p className="text-gray-600 text-xs">— Zeynep Y., Şirket Etkinliği</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="font-bold text-gray-900">5.0/5.0</span>
          </div>
          <p className="text-gray-700 text-sm italic mb-2">
            "Kızım Elsa'yı çok seviyor, doğum gününde Elsa kostümlü karakter kiralad ık. Palyaço Gezegeni ekibi çok ilgiliydi, fotoğraflar muhteşem çıktı!"
          </p>
          <p className="text-gray-600 text-xs">— Ayşe K., Üsküdar</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-8 border border-yellow-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">🏆 Başarımız Rakamlarla:</h4>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-purple-600">6</p>
            <p className="text-gray-700 text-sm">Yıllık Tecrübe</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-600">217</p>
            <p className="text-gray-700 text-sm">Müşteri Yorumu</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-600">5.0</p>
            <p className="text-gray-700 text-sm">Yıldız Ortalaması</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-600">1000+</p>
            <p className="text-gray-700 text-sm">Mutlu Çocuk</p>
          </div>
        </div>
      </div>

      {/* Bölüm 9 */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        9. Sık Sorulan Sorular (SSS)
      </h2>

      <div className="space-y-4 mb-12">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-2">❓ Palyaço Gezegeni hangi bölgelerde hizmet veriyor?</h4>
          <p className="text-gray-700 text-sm">
            İstanbul'un tüm ilçelerinde hizmet vermekteyiz. Kadıköy, Üsküdar, Beşiktaş, Şişli, Sarıyer, Ataşehir ve diğer tüm bölgelere ulaşıyoruz.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-2">❓ Doğum günü paketi ne kadar sürer?</h4>
          <p className="text-gray-700 text-sm">
            Standart paket 45-60 dakika sürer. Palyaço + bubble show + sihirbaz kombinasyonları için 90-120 dakika paketleri mevcuttur.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-2">❓ Popcorn ve pamuk şeker makinası kiralama fiyatı nedir?</h4>
          <p className="text-gray-700 text-sm">
            Popcorn makinası ve pamuk şeker makinası genellikle paketlerimize dahildir. Sadece makina kiralama için de hizmet vermekteyiz. Detaylı fiyat için iletişime geçin.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-2">❓ Kostümlü karakter seçenekleri nelerdir?</h4>
          <p className="text-gray-700 text-sm">
            50'den fazla kostümlü karakter seçeneğimiz var: Elsa, Anna, Spider-Man, Batman, Mickey Mouse, Minnie Mouse, Peppa Pig ve daha fazlası. Özel karakter taleplerinizi de karşılayabiliriz.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-2">❓ Kurumsal etkinlikler için ne gibi hizmetler sunuyorsunuz?</h4>
          <p className="text-gray-700 text-sm">
            Şirket yılbaşı partileri, çocuk şenlikleri, açılış organizasyonları için tam paket hizmet: palyaço, sihirbaz, bubble show, kostümlü karakterler, popcorn makinası, pamuk şeker makinası, DJ ve ses sistemi.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-2">❓ Rezervasyon nasıl yapılır?</h4>
          <p className="text-gray-700 text-sm">
            Telefon veya WhatsApp ile iletişime geçerek rezervasyon yapabilirsiniz. Tarih, saat, katılımcı sayısı ve tercih ettiğiniz hizmetleri belirtin.
          </p>
        </div>
      </div>

      {/* Sonuç */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎪 Palyaço Gezegeni ile Unutulmaz Doğum Günleri!</h3>
        <p className="mb-6 leading-relaxed">
          6 yıldır İstanbul'da profesyonel doğum günü organizasyonu, bubble show, sihirbaz gösterileri, kurumsal etkinlikler, kostümlü karakter kiralama, popcorn ve pamuk şeker makinası hizmetleri sunuyoruz. 217 memnun müşteri yorumu ile güvence altında!
        </p>
        <div className="mb-6">
          <a 
            href="https://www.palyacogezegeni.com.tr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 font-semibold underline text-lg"
          >
            🌐 www.palyacogezegeni.com.tr
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="tel:+905307309009"
            className="bg-white text-purple-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            📞 Hemen Ara
          </a>
          <a 
            href="https://wa.me/905307309009?text=Merhaba, Palyaço Gezegeni hakkında bilgi almak istiyorum"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      {/* Backlink Bölümü */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-purple-600">
        <h4 className="font-bold text-gray-900 mb-3">🔗 Daha Fazla Bilgi İçin:</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Palyaço Gezegeni hakkında daha detaylı bilgi, fiyatlar, fotoğraflar ve müsaitlik durumu için{" "}
          <a 
            href="https://www.palyacogezegeni.com.tr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 font-semibold underline"
          >
            resmi web sitemizi ziyaret edin
          </a>
          . 6 yıllık tecrübemiz, 217 memnun müşteri yorumumuz ve 5.0 yıldız ortalaması ile güvenle hizmet veriyoruz!
        </p>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="palyaco-gezegeni"
      relatedServicePath="/organizasyonlar/palyaco-kiralama"
      relatedServiceName="Palyaço Kiralama"
    >
      {content}
    </BlogDetail>
  )
}

export default PalyacoGezegeni
