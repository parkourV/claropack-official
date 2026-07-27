import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'https://claropack.com'

// Sets per-route title, description and canonical for crawlers and social shares.
export function useSEO({ title, description }) {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', SITE + pathname)
    setMeta('property', 'og:type', 'website')
    setLink('canonical', SITE + pathname)
    window.scrollTo(0, 0)
  }, [title, description, pathname])
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

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
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
