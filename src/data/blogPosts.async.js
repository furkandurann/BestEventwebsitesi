let blogModulePromise

const loadBlogModule = () => {
  if (!blogModulePromise) {
    blogModulePromise = import('./blogPosts')
  }

  return blogModulePromise
}

export async function getBlogIndexData() {
  const { blogPosts, subCategories } = await loadBlogModule()
  return { blogPosts, subCategories }
}

export async function getBlogBySlugAsync(slug) {
  const { getBlogBySlug } = await loadBlogModule()
  return getBlogBySlug(slug)
}

export async function getBlogsByPillarServiceAsync(servicePath) {
  const { getBlogsByPillarService } = await loadBlogModule()
  return getBlogsByPillarService(servicePath)
}

export async function getBlogsBySubCategoryAsync(subCategory) {
  const { getBlogsBySubCategory } = await loadBlogModule()
  return getBlogsBySubCategory(subCategory)
}

export async function getRelatedBlogObjectsAsync(slugs) {
  const { getRelatedBlogObjects } = await loadBlogModule()
  return getRelatedBlogObjects(slugs)
}

export async function getDistrictBlogsAsync(districtSlug, maxPosts = 4) {
  const { blogPosts } = await loadBlogModule()

  const getIntentPriority = (intent) => {
    if (intent === 'commercial') return 0
    if (intent === 'informational') return 1
    return 2
  }

  return blogPosts
    .filter((post) => post.relatedDistricts && post.relatedDistricts.includes(districtSlug))
    .filter((post) => post.searchIntent !== 'local')
    .sort((a, b) => {
      const priorityDiff = getIntentPriority(a.searchIntent) - getIntentPriority(b.searchIntent)
      if (priorityDiff !== 0) return priorityDiff

      return (b.dateISO || '').localeCompare(a.dateISO || '')
    })
    .slice(0, maxPosts)
}
