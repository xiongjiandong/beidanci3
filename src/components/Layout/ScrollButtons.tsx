import { useState, useEffect } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ScrollButtons() {
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 滚动超过200px时显示按钮
      setShowButtons(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  if (!showButtons) return null

  return (
    <div className="fixed right-6 bottom-24 z-50 flex flex-col gap-2">
      <Button
        variant="secondary"
        size="icon"
        className="h-10 w-10 rounded-full shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={scrollToTop}
        title="回到顶部"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="h-10 w-10 rounded-full shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={scrollToBottom}
        title="滚动到底部"
      >
        <ChevronDown className="h-5 w-5" />
      </Button>
    </div>
  )
}
