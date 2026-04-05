let serviceDetailModulePromise

const loadServiceDetailModule = () => {
  if (!serviceDetailModulePromise) {
    serviceDetailModulePromise = import('./serviceDetailPages')
  }

  return serviceDetailModulePromise
}

export async function getServiceDetailEntryBySlugAsync(slug) {
  const { getServiceDetailBySlug, getServiceDetailUrl } = await loadServiceDetailModule()
  const detail = getServiceDetailBySlug(slug)

  if (!detail) {
    return null
  }

  return {
    detail,
    canonicalPath: getServiceDetailUrl(detail.slug),
  }
}
