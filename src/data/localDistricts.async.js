import { districts as districtDirectory } from './districts'

const districtLoaders = {
  'kadikoy': () => import('./localDistrictDetails/kadikoy.js'),
  'besiktas': () => import('./localDistrictDetails/besiktas.js'),
  'sisli': () => import('./localDistrictDetails/sisli.js'),
  'bakirkoy': () => import('./localDistrictDetails/bakirkoy.js'),
  'atasehir': () => import('./localDistrictDetails/atasehir.js'),
  'uskudar': () => import('./localDistrictDetails/uskudar.js'),
  'maltepe': () => import('./localDistrictDetails/maltepe.js'),
  'kartal': () => import('./localDistrictDetails/kartal.js'),
  'pendik': () => import('./localDistrictDetails/pendik.js'),
  'umraniye': () => import('./localDistrictDetails/umraniye.js'),
  'beylikduzu': () => import('./localDistrictDetails/beylikduzu.js'),
  'sariyer': () => import('./localDistrictDetails/sariyer.js'),
  'fatih': () => import('./localDistrictDetails/fatih.js'),
  'eyupsultan': () => import('./localDistrictDetails/eyupsultan.js'),
  'beyoglu': () => import('./localDistrictDetails/beyoglu.js'),
  'basaksehir': () => import('./localDistrictDetails/basaksehir.js'),
  'kucukcekmece': () => import('./localDistrictDetails/kucukcekmece.js'),
  'tuzla': () => import('./localDistrictDetails/tuzla.js'),
  'cekmekoy': () => import('./localDistrictDetails/cekmekoy.js'),
  'zeytinburnu': () => import('./localDistrictDetails/zeytinburnu.js'),
  'maslak': () => import('./localDistrictDetails/maslak.js'),
  'esenyurt': () => import('./localDistrictDetails/esenyurt.js')
}

export { districtDirectory }

export async function getDistrictBySlugAsync(slug) {
  const normalizedSlug = String(slug || '').toLowerCase().trim()
  const loader = districtLoaders[normalizedSlug]

  if (!loader) {
    return null
  }

  const module = await loader()
  return module.default || null
}
