import Seo from '../components/Seo'

const PrivacyPolicy = () => {
  return (
    <>
      <Seo
        title="Gizlilik Politikası | Best Event"
        description="Best Event gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi."
        canonicalPath="/gizlilik"
      />

      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Gizlilik Politikası</h1>
            <p className="text-sm text-gray-500 mb-8">Son güncelleme: 1 Ocak 2026</p>

            <div className="prose prose-gray max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Genel Bilgi</h2>
                <p className="text-gray-600 leading-relaxed">
                  Best Event ("Şirket", "biz") olarak, web sitemizi (bestevent.com.tr) ziyaret eden kullanıcılarımızın gizliliğine önem veriyoruz. Bu gizlilik politikası, kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Toplanan Veriler</h2>
                <p className="text-gray-600 leading-relaxed">
                  Web sitemiz üzerinden aşağıdaki verileri toplayabiliriz:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>İletişim formu aracılığıyla paylaştığınız ad, e-posta ve telefon bilgileri</li>
                  <li>WhatsApp veya telefon yoluyla ilettiğiniz iletişim bilgileri</li>
                  <li>Web sitesi kullanım verileri (çerezler, sayfa görüntülemeleri, ziyaret süreleri)</li>
                  <li>IP adresi ve tarayıcı bilgileri</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Verilerin Kullanım Amacı</h2>
                <p className="text-gray-600 leading-relaxed">
                  Topladığımız verileri aşağıdaki amaçlarla kullanmaktayız:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>Hizmet taleplerinizi değerlendirmek ve size geri dönüş yapmak</li>
                  <li>Organizasyon ve etkinlik planlaması yapmak</li>
                  <li>Web sitemizi geliştirmek ve kullanıcı deneyimini iyileştirmek</li>
                  <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Çerezler (Cookies)</h2>
                <p className="text-gray-600 leading-relaxed">
                  Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. Çerezler, tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Google Analytics gibi üçüncü taraf hizmetlerinin çerezlerini de kullanabiliriz. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Verilerin Paylaşımı</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz. Hizmet sunumumuz kapsamında iş ortaklarımızla (animatörler, organizatörler) yalnızca etkinlik gerçekleştirmek için gerekli minimum bilgiler paylaşılabilir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Veri Güvenliği</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve idari tedbirler alınmaktadır. Web sitemiz SSL sertifikası ile korunmaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. KVKK Kapsamındaki Haklarınız</h2>
                <p className="text-gray-600 leading-relaxed">
                  6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse bilgi talep etme</li>
                  <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                  <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                  <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini isteme</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">8. İletişim</h2>
                <p className="text-gray-600 leading-relaxed">
                  Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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

export default PrivacyPolicy
