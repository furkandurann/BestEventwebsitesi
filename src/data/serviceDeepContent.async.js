let serviceDeepContentModulePromise

const loadServiceDeepContentModule = () => {
  if (!serviceDeepContentModulePromise) {
    serviceDeepContentModulePromise = import('./serviceDeepContent')
  }

  return serviceDeepContentModulePromise
}

export async function getServiceDeepContentByKeyAsync(serviceKey) {
  const { serviceDeepContent } = await loadServiceDeepContentModule()
  return serviceDeepContent[serviceKey] || null
}
