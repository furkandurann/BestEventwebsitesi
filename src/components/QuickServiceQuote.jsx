import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking'

const QuickServiceQuote = ({
  eyebrow,
  title,
  description,
  bullets = [],
  whatsappText,
  whatsappLabel = 'WhatsApp’tan Hızlı Fiyat Al',
  phoneLabel = 'Telefonla Ulaş',
  anchorLabel = 'Rezervasyon Formuna Git',
  anchorHref = '#rezervasyon',
}) => {
  const handleWhatsApp = () => {
    trackWhatsAppClick(title, window.location.href)
  }

  const handlePhone = () => {
    trackPhoneClick(title, window.location.href)
  }

  return (
    <section className="border-b border-white/10 bg-[#060b16]">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/75">{eyebrow}</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base leading-7 text-white/72">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {bullets.map((bullet) => (
                <span
                  key={bullet}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs md:text-sm text-white/78"
                >
                  {bullet}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80">Hızlı Teklif</p>
            <p className="mt-3 text-sm md:text-base leading-6 text-white/80">
              Tarih + ilçe + kişi sayısı gönderin; ekibimiz size hızlı fiyat dönüşü yapsın.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`https://wa.me/905307309009?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb158]"
              >
                {whatsappLabel}
              </a>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+905307309009"
                  onClick={handlePhone}
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {phoneLabel}
                </a>
                <a
                  href={anchorHref}
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/15"
                >
                  {anchorLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuickServiceQuote
