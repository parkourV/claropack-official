import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'https://claropack.com'
const DEFAULT_OG_IMAGE = '/assets/images/hero-banner.webp'

// Sets per-route title, description, canonical and social metadata.
export function useSEO({ title, description, type = 'website', image, imageAlt }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const selectedImage = image || DEFAULT_OG_IMAGE
    const ogImage = selectedImage.startsWith('http') ? selectedImage : SITE + selectedImage
    const canonicalUrl = SITE + (pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`)
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:site_name', 'Claropack')
    setMeta('property', 'og:locale', 'en_US')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:image:alt', imageAlt || title)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)
    setMeta('name', 'twitter:url', canonicalUrl)
    setLink('canonical', canonicalUrl)
    setLink('alternate', canonicalUrl, 'en')
    setLink('alternate', canonicalUrl, 'x-default')
    window.scrollTo(0, 0)
  }, [title, description, type, image, pathname])
}

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href, hreflang) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Injects a JSON-LD script for the current route; removed on unmount.
export function useJsonLd(data) {
  useEffect(() => {
    if (!data) return
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.textContent = JSON.stringify(data)
    document.head.appendChild(el)
    return () => document.head.removeChild(el)
  }, [JSON.stringify(data)])
}
