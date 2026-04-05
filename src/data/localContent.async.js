const contentLoaders = {
  'palyaco-kiralama': () => import('./localContent-palyaco-kiralama.js'),
  'bubble-show-kiralama': () => import('./localContent-bubble-show-kiralama.js'),
  'bubble-show': () => import('./localContent-bubble-show-kiralama.js'),
  'magic-show': () => import('./localContent-sihirbaz-kiralama.js'),
  'sihirbaz-kiralama': () => import('./localContent-sihirbaz-kiralama.js'),
  'yuz-boyama': () => import('./localContent-profesyonel-yuz-boyama.js'),
  'pamuk-seker': () => import('./localContent-pamuk-seker-arabasi-kiralama.js'),
  'pamuk-seker-arabasi-kiralama': () => import('./localContent-pamuk-seker-arabasi-kiralama.js'),
  'dogum-gunu-organizasyonu': () => import('./localContent-dogum-gunu-organizasyonu.js'),
  'profesyonel-yuz-boyama': () => import('./localContent-profesyonel-yuz-boyama.js'),
  'popcorn-arabasi-kiralama': () => import('./localContent-popcorn-arabasi-kiralama.js'),
}

const legacyContentAliases = {
  'bubble-show': 'bubble-show-kiralama',
  'magic-show': 'sihirbaz-kiralama',
  'pamuk-seker': 'pamuk-seker-arabasi-kiralama',
  'yuz-boyama': 'profesyonel-yuz-boyama',
}

const contentCache = {}

export async function getLocalContentAsync(districtSlug, serviceSlug) {
  const contentServiceSlug = legacyContentAliases[serviceSlug] || serviceSlug

  if (!contentCache[contentServiceSlug]) {
    const loader = contentLoaders[contentServiceSlug]

    if (!loader) {
      return null
    }

    const module = await loader()
    contentCache[contentServiceSlug] = module.default
  }

  const canonicalKey = `${districtSlug}-${serviceSlug}`
  const aliasKey = `${districtSlug}-${contentServiceSlug}`

  return contentCache[contentServiceSlug][canonicalKey] || contentCache[contentServiceSlug][aliasKey] || null
}
