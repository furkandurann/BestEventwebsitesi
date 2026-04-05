import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { careerHubPath, careerJobs, getCareerJobBySlug } from '../../data/careerJobs'
import {
  createFAQSchema,
  createJobPostingSchema,
  createWebPageSchema,
} from '../../utils/schemaHelpers'
import {
  trackFormSubmit,
  trackPhoneClick,
  trackWhatsAppClick,
} from '../../utils/tracking'

const initialFormState = {
  fullName: '',
  phone: '',
  district: '',
  experience: '',
  availability: '',
  message: '',
}

const JobListingPage = ({ jobSlug }) => {
  const job = getCareerJobBySlug(jobSlug)
  const relatedJobs = careerJobs.filter((item) => item.slug !== jobSlug)
  const [formData, setFormData] = useState(initialFormState)

  if (!job) {
    return null
  }

  const whatsappIntro = encodeURIComponent(
    `Merhaba Best Event, ${job.shortTitle} için başvuru yapmak istiyorum.`,
  )

  const schema = [
    createWebPageSchema(job.seoTitle, job.seoDescription, job.path),
    createJobPostingSchema(job),
    createFAQSchema(job.faqs),
  ]

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handlePhone = () => {
    trackPhoneClick(job.shortTitle, window.location.href)
  }

  const handleWhatsApp = () => {
    trackWhatsAppClick(job.shortTitle, window.location.href)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    trackFormSubmit(`${job.shortTitle} Başvuru Formu`, job.role)

    const text = [
      'Merhaba Best Event, iş başvurusu yapmak istiyorum.',
      `Pozisyon: ${job.shortTitle}`,
      `Ad Soyad: ${formData.fullName || '-'}`,
      `Telefon: ${formData.phone || '-'}`,
      `İlçe: ${formData.district || '-'}`,
      `Deneyim: ${formData.experience || '-'}`,
      `Müsaitlik: ${formData.availability || '-'}`,
      `Kısa Not: ${formData.message || '-'}`,
      `Sayfa: https://bestevent.com.tr${job.path}`,
    ].join('\n')

    window.open(`https://wa.me/905307309009?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Seo
        title={job.seoTitle}
        description={job.seoDescription}
        canonicalPath={job.path}
        keywords={job.keywords}
        image={job.image}
        schema={schema}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_32%)]" />
        <div className="relative layout-container py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/75">
                {job.badge}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {job.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                {job.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/72">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {job.location}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {job.workModel}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {job.department}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/905307309009?text=${whatsappIntro}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb158]"
                >
                  WhatsApp ile Başvur
                </a>
                <a
                  href="tel:+905307309009"
                  onClick={handlePhone}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Telefonla Ulaş
                </a>
                <Link
                  to={careerHubPath}
                  className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
                >
                  Tüm İş İlanları
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <img
                src={job.image}
                alt={job.imageAlt}
                className="h-full min-h-[320px] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07111f]">
        <div className="layout-container py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/75">
                Pozisyon Özeti
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {job.overviewTitle}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/72">
                {job.overviewText}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {job.summaryPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <p className="text-sm leading-6 text-white/75">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[30px] border border-white/10 bg-white/[0.05] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Hızlı Bilgi</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Başvuru öncesi kısa notlar
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/72">
                <li>Etkinlik bazlı çalışma modeli nedeniyle hafta sonu uygunluğu önemlidir.</li>
                <li>Başvuruda yaşadığınız ilçe ve müsait günlerinizi paylaşmanız süreci hızlandırır.</li>
                <li>Varsa etkinlik, çocuk iletişimi veya sahne deneyiminizi kısa notta belirtin.</li>
              </ul>

              <div className="mt-6 rounded-[24px] border border-emerald-400/20 bg-emerald-400/10 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/80">
                  İlgili Hizmet
                </p>
                <Link
                  to={job.relatedService.path}
                  className="mt-3 inline-flex text-base font-semibold text-white underline decoration-emerald-300/50 underline-offset-4"
                >
                  {job.relatedService.label}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#050816]">
        <div className="layout-container py-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">Rol Detayları</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Bu pozisyonda senden neler bekliyoruz?
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-white">Sorumluluklar</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/72">
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-white">Aranan Nitelikler</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/72">
                {job.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-white">Neler Sunuyoruz?</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/72">
                {job.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07111f]">
        <div className="layout-container py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/75">
                Kimler İçin Uygun?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Bu ilan özellikle şu adaylar için güçlü bir eşleşme sunar
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-white/72">
                {job.idealFor.map((item) => (
                  <li
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                  Diğer Pozisyonlar
                </p>
                <div className="mt-4 grid gap-3">
                  {relatedJobs.map((item) => (
                    <Link
                      key={item.slug}
                      to={item.path}
                      className="rounded-[20px] border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-white transition hover:bg-black/35"
                    >
                      {item.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-6 text-slate-950 shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Başvuru Formu</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                {job.shortTitle} için hızlı başvuru
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Formu gönderdiğinizde bilgileriniz WhatsApp mesajı olarak bize ulaşır.
                Dilerseniz doğrudan arayarak da başvuru bırakabilirsiniz.
              </p>

              <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                <div className="md:col-span-1">
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange('fullName')}
                    placeholder="Adınız ve soyadınız"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Yaşadığınız İlçe
                  </label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={handleChange('district')}
                    placeholder="Kadıköy, Beşiktaş, Ataşehir..."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Müsaitlik
                  </label>
                  <input
                    type="text"
                    value={formData.availability}
                    onChange={handleChange('availability')}
                    placeholder="Hafta sonu / tam esnek / belirli günler"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Deneyim
                  </label>
                  <input
                    type="text"
                    value={formData.experience}
                    onChange={handleChange('experience')}
                    placeholder="Etkinlik, çocuk iletişimi, sahne, mağaza aktivitesi vb."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Kısa Not
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={handleChange('message')}
                    placeholder="Varsa eğitim alanınız, daha önce görev aldığınız işler veya kendinizi kısaca anlatın."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    WhatsApp ile Başvuruyu Gönder
                  </button>
                  <a
                    href="tel:+905307309009"
                    onClick={handlePhone}
                    className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                  >
                    05307309009
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050816]">
        <div className="layout-container py-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">Sık Sorulanlar</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {job.shortTitle} hakkında en çok sorulan sorular
          </h2>

          <div className="mt-10 space-y-4">
            {job.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-white/72">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobListingPage
