export const verifiedImages = {
  ppFlatLid: 'https://s.alicdn.com/@sc04/kf/Hece03996e8bc471a8311d3d3363442741.png_960x960q80.jpg',
  petSealingFilm: 'https://s.alicdn.com/@sc04/kf/Hb62c403052d449f887488b58f1a9a754l.jpg_960x960q80.jpg',
}

// Product-type matches confirmed from Alibaba detail-page title + main-image review.
// Some Jinghai images carry the store's JH corner mark; they are not presented as watermark-free assets.
export const productImages = {
  pet78: 'https://s.alicdn.com/@sc04/kf/H7e51edb056c34c63a1152e032976f7f8B.jpg_960x960q80.jpg',
  pet93: 'https://s.alicdn.com/@sc04/kf/Hd4d2ac6de8614459b02b9c3d6d96bab3W.jpg_960x960q80.jpg',
  pet95: 'https://s.alicdn.com/@sc04/kf/H1379cd5be5a243e0ac2aaa7684790701i.jpg_960x960q80.jpg',
  pet107: 'https://s.alicdn.com/@sc04/kf/Hf16c6511e7f9483687f8b78592ac8f9ak.jpg_960x960q80.jpg',
  petDessert95: 'https://s.alicdn.com/@sc04/kf/He66a9385cd2748aab0f0ad8bd610f9adx.jpg_960x960q80.jpg',
  petUShape90: 'https://s.alicdn.com/@sc04/kf/H13aef9c37c2d4f418470fa8999d96203O.jpg_960x960q80.jpg',
  ppRound500: 'https://s.alicdn.com/@sc04/kf/Hf8eb24760f9a4ae7bf38c2b87b0a3dafb.jpg_960x960q80.jpg',
  ppRound700: 'https://s.alicdn.com/@sc04/kf/H0d64b4cff9ee45b6b1a1ba3c495f10d3b.jpg_960x960q80.jpg',
  ppFrosted90: 'https://s.alicdn.com/@sc04/kf/H30f1c38fb1bb4030ae21d5e3f7f56680P.jpg_960x960q80.jpg',
  ppSquare650: 'https://s.alicdn.com/@sc04/kf/H934b1612f80a42a6ab30a79acd35d8b9T.jpg_960x960q80.jpg',
  ppSquare960: 'https://s.alicdn.com/@sc04/kf/H022f3f2f16d54b469810502e39521b6eR.jpg_960x960q80.jpg',
}

export const fallbackImages = {
  pet: '/assets/images/prod-pet.webp',
  pp: '/assets/images/prod-pp-hard.webp',
  ppFrosted: '/assets/images/prod-pp-frosted.webp',
  lids: '/assets/images/prod-lids.webp',
  paper: '/assets/images/prod-paper.webp',
  pla: '/assets/images/prod-pla.webp',
}

export const verifiedImageSet = new Set(Object.values(verifiedImages))
export const productImageSet = new Set(Object.values(productImages))

export function getVerifiedImage(url) {
  return url && verifiedImageSet.has(url) ? url : null
}

export function getImage(url, fallback) {
  return url && (verifiedImageSet.has(url) || productImageSet.has(url)) ? url : fallback
}

export const blogCovers = {
  pet: '/assets/blog/pet-cups-cover.png',
  printing: '/assets/blog/printing-cover.png',
  lids: '/assets/blog/lids-cover.png',
  sustainability: '/assets/blog/sustainability-cover.png',
  logistics: '/assets/blog/logistics-cover.png',
  pp: '/assets/blog/pp-cups-cover.png',
}

const coverGroups = {
  printing: new Set(['cup-custom-printing-methods-guide', 'custom-printed-cups-guide', 'pet-cup-printing-design-guide', 'custom-cup-printing-cost-guide']),
  lids: new Set(['cup-lid-compatibility-guide', 'cup-lid-weight-caliber-guide', 'strawless-sipper-lids-guide', '90mm-injection-lid-selection-guide']),
  sustainability: new Set(['sustainable-cup-sourcing-guide', 'pet-cup-recycling-sustainability-guide', 'paper-vs-pla-cups-guide']),
  logistics: new Set(['how-to-import-plastic-cups-from-china', 'leak-proof-takeaway-cups-and-carriers']),
  pp: new Set(['pet-vs-pp-cups', 'injection-vs-thermoformed-cups', 'square-injection-pp-cups-branding', 'injection-pp-cup-model-weight-guide', 'clear-vs-frosted-pp-cups-guide', 'u-shape-fat-cup-guide', 'u-shape-pet-vs-pp-cups-comparison', '80mm-caliber-high-foot-injection-cups']),
}

export function getPostFallback(slug = '') {
  const key = slug.toLowerCase()
  if (key.includes('lid') || key.includes('sealing') || key.includes('accessor')) return fallbackImages.lids
  if (key.includes('paper') || key.includes('pla') || key.includes('sustainable')) return fallbackImages.paper
  if (key.includes('pp') || key.includes('injection') || key.includes('square') || key.includes('frosted') || key.includes('u-shape')) return fallbackImages.pp
  return fallbackImages.pet
}

export function getBlogImage(slug, originalImage) {
  for (const [group, slugs] of Object.entries(coverGroups)) {
    if (slugs.has(slug)) return blogCovers[group]
  }
  return originalImage || blogCovers.pet
}
