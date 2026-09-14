export const verifiedImages = {
  ppFlatLid: 'https://s.alicdn.com/@sc04/kf/Hece03996e8bc471a8311d3d3363442741.png_960x960q80.jpg',
  petSealingFilm: 'https://s.alicdn.com/@sc04/kf/Hb62c403052d449f887488b58f1a9a754l.jpg_960x960q80.jpg',
}

export const verifiedImageSet = new Set(Object.values(verifiedImages))

export function getVerifiedImage(url) {
  return url && verifiedImageSet.has(url) ? url : null
}
