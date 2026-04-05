import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { careerHubPath, careerJobs } from '../../data/careerJobs'
import { createWebPageSchema } from '../../utils/schemaHelpers'

const JobsHub = () => {
  const title = 'İş İlanları İstanbul | Best Event Kariyer'
  const description =
    'Best Event iş ilanları sayfası. İstanbul palyaço, animatör, maskot ve oyun ablası abisi iş ilanlarına tek noktadan başvurun.'

  const schema = [
    createWebPageSchema(title, description, careerHubPath),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://bestevent.com.tr/is-ilanlari/#collection',
      name: 'Best Event İş İlanları',
      description,
      url: 'https://bestevent.com.tr/is-ilanlari',
      inLanguage: 'tr-TR',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: careerJobs.map((job, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://bestevent.com.tr${job.path}`,
        name: job.shortTitle,
      })),
    },
  ]

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Seo
        title={title}
        description={description}
        canonicalPath={careerHubPath}
        keywords={[
          'iş ilanları istanbul',
          'best event kariyer',
          'palyaço iş ilanı',
          'animatör iş ilanı',
          'maskot iş ilanı',
          'oyun ablası iş ilanı',
        ]}
        schema={schema}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.16),_transparent_38%)]" />
        <div className="relative layout-container py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-300/80">
              Best Event Kariyer
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              İstanbul İş İlanları
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Çocuk etkinlikleri ve organizasyon operasyonunda birlikte çalışacağımız ekip
              arkadaşlarını ayrı ilan sayfalarında topladık. Size uygun role tıklayın,
              detayları okuyun ve WhatsApp üzerinden hızlıca başvurun.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                İstanbul geneli saha görevleri
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Part-time / etkinlik bazlı çalışma
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Hızlı WhatsApp başvurusu
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07111f]">
        <div className="layout-container py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/75">
              Açık Pozisyonlar
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Her rol için ayrı optimize edilmiş ilan sayfası
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {careerJobs.map((job) => (
              <article
                key={job.slug}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
              >
                <img
                  src={job.image}
                  alt={job.imageAlt}
                  className="h-60 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6 md:p-7">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    {job.department}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {job.shortTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/70">{job.intro}</p>

                  <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/65">
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5">
                      {job.location}
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5">
                      {job.workModel}
                    </span>
                  </div>

                  <Link
                    to={job.path}
                    className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    İlanı İncele ve Başvur
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050816]">
        <div className="layout-container py-14 md:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">1. Adım</p>
              <h2 className="mt-3 text-xl font-semibold text-white">Uygun rolü seçin</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Palyaço, animatör, maskot veya oyun ablası abisi ilanlarından size uygun
                olanı açın ve detayları okuyun.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">2. Adım</p>
              <h2 className="mt-3 text-xl font-semibold text-white">Kısa formu doldurun</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Ad, telefon, ilçe ve deneyim bilgilerinizi yazın. Form doğrudan WhatsApp
                başvurusuna dönüşür.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">3. Adım</p>
              <h2 className="mt-3 text-xl font-semibold text-white">Hızlı değerlendirme</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Uygun adaylarla telefon görüşmesi ve gerekirse kısa saha değerlendirmesi
                yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobsHub
