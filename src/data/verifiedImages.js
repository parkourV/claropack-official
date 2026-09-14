export const verifiedImages = {
  ppFlatLid: 'https://s.alicdn.com/@sc04/kf/Hece03996e8bc471a8311d3d3363442741.png_960x960q80.jpg',
  petSealingFilm: 'https://s.alicdn.com/@sc04/kf/Hb62c403052d449f887488b58f1a9a754l.jpg_960x960q80.jpg',
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

export function getVerifiedImage(url) {
  return url && verifiedImageSet.has(url) ? url : null
}

export function getImage(url, fallback) {
  return getVerifiedImage(url) || fallback
}

export function getPostFallback(slug = '') {
  const key = slug.toLowerCase()
  if (key.includes('lid') || key.includes('sealing') || key.includes('accessor')) return fallbackImages.lids
  if (key.includes('paper') || key.includes('pla') || key.includes('sustainable')) return fallbackImages.paper
  if (key.includes('pp') || key.includes('injection') || key.includes('square') || key.includes('frosted') || key.includes('u-shape')) return fallbackImages.pp
  return fallbackImages.pet
}
