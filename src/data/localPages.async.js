import { districts as districtDirectory } from './districts'
import { services } from './localServices'
import { getDistrictBySlugAsync } from './localDistricts.async'
import { getLocalContentAsync } from './localContent.async'

const serviceAliasMap = {
  'sihirbaz-kiralama': 'magic-show',
  'bubble-show-kiralama': 'bubble-show',
  'profesyonel-yuz-boyama': 'yuz-boyama',
  'profesyonel-makyaj': 'yuz-boyama',
  'dogum-gunu': 'dogum-gunu-organizasyonu',
  'pamuk-seker-arabasi-kiralama': 'pamuk-seker',
}

const normalizeServiceSlug = (serviceSlug) => serviceAliasMap[serviceSlug] || serviceSlug

const normalizeDistrictSlug = (districtSlug) => String(districtSlug || '')
  .toLowerCase()
  .trim()
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9-]/g, '')

export async function getLocalPageEntryAsync(districtSlug, serviceSlug) {
  const normalizedDistrictSlug = normalizeDistrictSlug(districtSlug)
  const normalizedServiceSlug = normalizeServiceSlug(String(serviceSlug || '').toLowerCase().trim())
  const [district, service, content] = await Promise.all([
    getDistrictBySlugAsync(normalizedDistrictSlug),
    Promise.resolve(services.find((item) => item.slug === normalizedServiceSlug) || null),
    getLocalContentAsync(normalizedDistrictSlug, normalizedServiceSlug),
  ])

  if (!district || !service || !content) {
    return null
  }

  return {
    district,
    service,
    content,
    otherDistricts: districtDirectory.filter((item) => item.slug !== normalizedDistrictSlug).slice(0, 12),
    otherServices: services.filter((item) => item.slug !== normalizedServiceSlug),
    districtSlug: normalizedDistrictSlug,
    serviceSlug: normalizedServiceSlug,
  }
}
