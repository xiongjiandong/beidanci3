import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

export function useSEO({ title, description, keywords, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    // 更新标题
    document.title = title

    // 更新或创建meta标签
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector) as HTMLMetaElement

      if (!meta) {
        meta = document.createElement('meta')
        if (isProperty) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // 更新描述
    updateMeta('description', description)
    updateMeta('og:description', description, true)
    updateMeta('twitter:description', description, true)

    // 更新标题
    updateMeta('og:title', title, true)
    updateMeta('twitter:title', title, true)

    // 更新关键词
    if (keywords) {
      updateMeta('keywords', keywords)
    }

    // 更新canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    }

    // 更新OG图片
    if (ogImage) {
      updateMeta('og:image', ogImage, true)
      updateMeta('twitter:image', ogImage, true)
    }
  }, [title, description, keywords, canonical, ogImage])
}
