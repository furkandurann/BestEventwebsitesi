import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main className="bg-black min-h-screen text-white">
      <Helmet>
        <title>Hakkımızda | Best Event</title>
        <meta
          name="description"
          content="Best Event, 10 yılı aşkın deneyimiyle Türkiye'nin dört bir yanında markalara ve ailelere unutulmaz etkinlikler tasarlayan profesyonel bir etkinlik stüdyosudur."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20 sm:px-10 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Hakkımızda
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Best Event, 10 yılı aşkın deneyimiyle Türkiye'nin dört bir yanında
            yüzlerce markaya, binlerce aileye ve on binlerce çocuğa unutulmaz
            anlar yaşatan profesyonel bir etkinlik tasarım ekibidir. Her
            projemiz, bizi tercih edenler için özel olarak planlanır — çünkü
            biz, sıradan bir etkinliği değil, <span className="font-medium">etkisi olan deneyimler</span> üretiriz.
          </p>
        </div>
      </section>

      {/* Biz Kimiz */}
      <section className="px-6 pb-16 sm:px-10 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-xl tracking-[0.2em] text-zinc-400 uppercase">
            Biz Kimiz?
          </h2>
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
            Yaratıcıları, sahne sanatçıları, tasarımcıları ve organizasyon
            uzmanlarını aynı çatı altında buluşturan bağımsız bir etkinlik
            stüdyosuyuz. Amacımız, hayal ettiğiniz atmosferi gerçeğe dönüştürmek
            ve bunu her defasında kusursuz bir kaliteyle sunmak.
          </p>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="px-6 pb-20 sm:px-10 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl tracking-[0.2em] text-zinc-400 uppercase text-center">
            Değerlerimiz
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-zinc-900/70 border border-zinc-800/80 p-8">
              <h3 className="text-lg font-semibold mb-3 text-zinc-50">
                Kusursuzluk Standarttır.
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Her etkinlikte dünya standartlarında kalite sunarız. Detayları
                atlamayız, zamanlamayı kaçırmayız, tesadüfe yer bırakmayız.
              </p>
            </article>

            <article className="rounded-3xl bg-zinc-900/70 border border-zinc-800/80 p-8">
              <h3 className="text-lg font-semibold mb-3 text-zinc-50">
                Güven En Büyük Sözümüzdür.
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Aileler, markalar ve kurumlar bize gönül rahatlığıyla teslim
                olur. 10 yıldır tek bir projede bile güven kırmadık.
              </p>
            </article>

            <article className="rounded-3xl bg-zinc-900/70 border border-zinc-800/80 p-8">
              <h3 className="text-lg font-semibold mb-3 text-zinc-50">
                Çocuk Önceliği.
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Etkinliklerimizde güvenlik, hijyen ve çocuk psikolojisine
                uygunluk ilk sıradadır. Eğlence yalnızca eğlence değildir —
                sorumluluktur.
              </p>
            </article>

            <article className="rounded-3xl bg-zinc-900/70 border border-zinc-800/80 p-8">
              <h3 className="text-lg font-semibold mb-3 text-zinc-50">
                Yaratıcılık DNA'mızda.
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Her konsept özgündür. Kopya iş yapmayız; yaparsak da daha
                iyisini yaparız.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="px-6 pb-20 sm:px-10 lg:px-24">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-8 sm:p-10">
            <h2 className="text-sm tracking-[0.25em] uppercase text-emerald-300/80 mb-4">
              Vizyonumuz
            </h2>
            <p className="text-base sm:text-lg text-zinc-100 leading-relaxed">
              Türkiye'nin en güvenilir, en yaratıcı ve en profesyonel etkinlik
              stüdyosu olmak. Her yaştan insana sadece "bir gün" değil,{" "}
              <span className="font-medium">
                hatırladıkça gülümsetecek deneyimler
              </span>{" "}
              sunmak.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-8 sm:p-10">
            <h2 className="text-sm tracking-[0.25em] uppercase text-sky-300/80 mb-4">
              Misyonumuz
            </h2>
            <p className="text-base sm:text-lg text-zinc-100 leading-relaxed">
              Her etkinliği kendi etkinliğimiz gibi sahiplenmek, yaratıcı
              çözümlerle beklentiyi aşmak ve her projede premium kaliteyi
              ulaşılabilir kılmak.
            </p>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="px-6 pb-20 sm:px-10 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl tracking-[0.2em] text-zinc-400 uppercase text-center">
            Neden Best Event?
          </h2>

          <ul className="mt-8 space-y-3 text-sm sm:text-base text-zinc-200 leading-relaxed">
            <li>• 10+ yıllık deneyim</li>
            <li>• 1.000+ başarılı organizasyon</li>
            <li>• Kurumsal ve bireysel güçlü referanslar</li>
            <li>• Profesyonel performans ve sahne ekibi</li>
            <li>• Hijyenik, bakımlı ve lisanslı kostümler</li>
            <li>• Özel tasarım sahne ve dekor üretimi</li>
            <li>• Türkiye genelinde yaygın hizmet ağı</li>
          </ul>
        </div>
      </section>

      {/* Kapanış Sözü */}
      <section className="px-6 pb-28 sm:px-10 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            "Hayalini kurduğunuz ne varsa, biz onu sahneye taşırız."
          </p>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Her etkinlik bittiğinde arkamızda bıraktığımız tek şey:{" "}
            <span className="text-zinc-100 font-medium">mutluluk.</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
