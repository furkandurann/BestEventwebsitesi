import Seo from '../components/Seo'

const TermsOfUse = () => {
  return (
    <>
      <Seo
        title="Kullanım Koşulları | Best Event"
        description="Best Event web sitesi kullanım koşulları. Hizmet şartları, sorumluluklar ve yasal bilgiler."
        canonicalPath="/kullanim-kosullari"
      />

      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Kullanım Koşulları</h1>
            <p className="text-sm text-gray-500 mb-8">Son güncelleme: 1 Ocak 2026</p>

            <div className="prose prose-gray max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Genel Hükümler</h2>
                <p className="text-gray-600 leading-relaxed">
                  Bu web sitesini (bestevent.com.tr) kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Best Event, bu koşulları önceden bildirmeksizin değiştirme hakkını saklı tutar.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Hizmet Tanımı</h2>
                <p className="text-gray-600 leading-relaxed">
                  Best Event, İstanbul genelinde çocuk etkinlikleri, doğum günü organizasyonları, palyaço kiralama, sihirbaz gösterileri, bubble show, yüz boyama, kostümlü karakter kiralama, maskot kiralama, pamuk şeker arabası ve benzeri organizasyon hizmetleri sunmaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Rezervasyon ve İptal</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Rezervasyonlar telefon veya WhatsApp üzerinden onaylanır</li>
                  <li>Onaylanan rezervasyonlar için ön ödeme talep edilebilir</li>
                  <li>İptal talepleri etkinlik tarihinden en az 48 saat önce yapılmalıdır</li>
                  <li>Son 48 saat içinde yapılan iptallerde ön ödeme iade edilmez</li>
                  <li>Hava koşulları veya mücbir sebepler nedeniyle erteleme yapılabilir</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Fiyatlandırma</h2>
                <p className="text-gray-600 leading-relaxed">
                  Web sitesinde yer alan fiyat bilgileri bilgilendirme amaçlıdır ve değişiklik gösterebilir. Kesin fiyat, etkinlik detaylarına göre belirlenir ve rezervasyon sırasında bildirilir. Fiyatlara KDV dahildir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Sorumluluk Sınırları</h2>
                <p className="text-gray-600 leading-relaxed">
                  Best Event, hizmet kalitesini en üst düzeyde tutmak için azami özen gösterir. Ancak:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>Mücbir sebepler (doğal afet, salgın, ulaşım engeli vb.) nedeniyle hizmet aksamalarından sorumlu tutulamaz</li>
                  <li>Etkinlik mekanının uygunluğu müşterinin sorumluluğundadır</li>
                  <li>Çocukların güvenliği etkinlik süresince ebeveynlerin sorumluluğundadır</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Fikri Mülkiyet</h2>
                <p className="text-gray-600 leading-relaxed">
                  Web sitesindeki tüm içerik (metin, görsel, logo, tasarım) Best Event'e aittir ve telif hakkı ile korunmaktadır. İzinsiz kopyalama, dağıtma veya ticari amaçla kullanma yasaktır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Fotoğraf ve Görsel Kullanımı</h2>
                <p className="text-gray-600 leading-relaxed">
                  Etkinliklerde çekilen fotoğraflar, müşteri onayı dahilinde Best Event'in tanıtım materyallerinde ve web sitesinde kullanılabilir. Onay vermek istemeyenler bunu etkinlik öncesi yazılı olarak bildirebilir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Uyuşmazlık Çözümü</h2>
                <p className="text-gray-600 leading-relaxed">
                  Bu kullanım koşullarından doğabilecek uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir. Türkiye Cumhuriyeti yasaları uygulanır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">9. İletişim</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kullanım koşulları hakkında sorularınız için:
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Telefon:</strong> 05307309009<br />
                  <strong>E-posta:</strong> info@bestevent.com.tr<br />
                  <strong>Web:</strong> bestevent.com.tr
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsOfUse
