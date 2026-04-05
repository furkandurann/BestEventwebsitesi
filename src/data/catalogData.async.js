let costumedCharactersModulePromise
let mascotsModulePromise
let conceptsModulePromise

const loadCostumedCharactersModule = () => {
  if (!costumedCharactersModulePromise) {
    costumedCharactersModulePromise = import('./costumedCharactersData')
  }

  return costumedCharactersModulePromise
}

const loadMascotsModule = () => {
  if (!mascotsModulePromise) {
    mascotsModulePromise = import('./mascotsData')
  }

  return mascotsModulePromise
}

const loadConceptsModule = () => {
  if (!conceptsModulePromise) {
    conceptsModulePromise = import('./conceptsData')
  }

  return conceptsModulePromise
}

export async function getCostumedCharactersIndexData() {
  const { costumedCharactersData } = await loadCostumedCharactersModule()
  return costumedCharactersData
}

export async function getMascotsIndexData() {
  const { mascotsData } = await loadMascotsModule()
  return mascotsData
}

export async function getConceptsIndexData() {
  const { allConcepts } = await loadConceptsModule()
  return allConcepts
}

export async function getCharacterDetailEntryBySlugAsync(slug) {
  const [
    { getCharacterBySlug, allCostumedCharacters },
    { getMascotBySlug },
  ] = await Promise.all([
    loadCostumedCharactersModule(),
    loadMascotsModule(),
  ])

  let character = getCharacterBySlug(slug)

  if (!character) {
    character = getMascotBySlug(slug)
  }

  if (!character) {
    return null
  }

  const relatedItems = (character.relatedCharacters || [])
    .map((relatedSlug) => allCostumedCharacters.find((item) => item.slug === relatedSlug) || null)
    .filter(Boolean)

  return {
    character,
    relatedItems,
  }
}

export async function getMascotDetailEntryBySlugAsync(slug) {
  const { getMascotBySlug, allMascots } = await loadMascotsModule()
  const mascot = getMascotBySlug(slug)

  if (!mascot) {
    return null
  }

  const relatedItems = (mascot.relatedMascots || [])
    .map((relatedSlug) => allMascots.find((item) => item.slug === relatedSlug) || null)
    .filter(Boolean)

  return {
    mascot,
    relatedItems,
  }
}

export async function getConceptDetailEntryBySlugAsync(slug) {
  const { getConceptBySlug, allConcepts } = await loadConceptsModule()
  const concept = getConceptBySlug(slug)

  if (!concept) {
    return null
  }

  const relatedItems = (concept.relatedConcepts || [])
    .map((relatedSlug) => allConcepts.find((item) => item.slug === relatedSlug) || null)
    .filter(Boolean)
    .slice(0, 3)

  return {
    concept,
    relatedItems,
  }
}
