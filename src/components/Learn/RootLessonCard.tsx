import { useState, useRef } from 'react'
import { ChevronDown, ChevronUp, Volume2, Lightbulb, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import type { RootLesson } from '@/types'
import { cn } from '@/lib/utils'

interface RootLessonCardProps {
  lesson: RootLesson
  masteryLevel?: number
  studied?: boolean
  onStudy?: () => void
}

export function RootLessonCard({ lesson, masteryLevel = 0, studied = false, onStudy }: RootLessonCardProps) {
  const [expanded, setExpanded] = useState(false)
  // 记录已显示的词根，避免重复显示
  const shownRootsRef = useRef<Set<string>>(new Set())

  const speak = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'en-US'
      speechSynthesis.speak(utterance)
    }
  }

  // 检查词根是否已显示过，每次展开时重置
  const isRootShown = (root: string) => {
    if (shownRootsRef.current.has(root)) {
      return true
    }
    shownRootsRef.current.add(root)
    return false
  }

  // 展开时重置已显示的词根记录
  const handleToggle = () => {
    if (!expanded) {
      // 即将展开，重置记录
      shownRootsRef.current = new Set()
    }
    setExpanded(!expanded)
    if (!expanded && onStudy) onStudy()
  }

  return (
    <Card className={cn(
      'w-full transition-all',
      studied && 'border-primary/50'
    )}>
      <CardHeader
        className="cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {studied && <CheckCircle className="h-5 w-5 text-primary" />}
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                #{lesson.frequency}
              </span>
            </div>
            <div>
              <CardTitle className="text-lg">
                词根：<span className="text-primary">{lesson.root}</span>
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  {lesson.phonetic}
                </span>
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{lesson.mnemonic}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>

        {/* 掌握进度 */}
        {studied && (
          <div className="mt-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
              <span>掌握程度</span>
              <span>{masteryLevel}/5</span>
            </div>
            <Progress value={(masteryLevel / 5) * 100} className="h-1" />
          </div>
        )}
      </CardHeader>

      {expanded && (
        <CardContent className="space-y-4">
          {/* 词根详情 */}
          <div className="p-3 bg-primary/5 rounded-lg">
            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
              <span className="text-primary">📖 词根详情</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">词根：</span>
                <span className="font-bold text-primary text-lg">{lesson.root}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation()
                    speak(lesson.root)
                  }}
                >
                  <Volume2 className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">音标：</span>
                <span className="font-medium">{lesson.phonetic}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">词性：</span>
                <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                  {lesson.partOfSpeech}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">意思：</span>
                <span className="font-medium">{lesson.meaning || '见核心词汇'}</span>
              </div>
            </div>
            {/* 词根常用短语 */}
            <div className="mt-3 pt-3 border-t border-primary/10">
              <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                <span>📝 词根常用短语</span>
                <span className="text-xs text-muted-foreground font-normal">（含 {lesson.root} 的常见搭配）</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {lesson.phrases.map((phrase, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-sm bg-white/50 dark:bg-black/20 rounded"
                  >
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 核心词汇表格 */}
          <div>
            <h4 className="font-medium text-sm mb-2">核心词汇：</h4>
            <div className="space-y-3">
              {lesson.words.map((w, idx) => {
                // 检查该词根是否已经显示过
                const shouldShowRoot = w.root && !isRootShown(w.root)

                return (
                  <div key={idx} className="border rounded-lg p-3 hover:bg-muted/30">
                    {/* 单词基本信息 */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-lg text-primary">{w.word}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={(e) => {
                          e.stopPropagation()
                          speak(w.word)
                        }}
                      >
                        <Volume2 className="h-3 w-3" />
                      </Button>
                      <span className="text-muted-foreground">{w.phonetic}</span>
                      <span className="text-xs px-1.5 py-0.5 bg-muted rounded">{w.partOfSpeech}</span>
                      <span className="text-sm ml-2">{w.meaning}</span>
                    </div>

                    {/* 单词的词根信息 - 只在第一次出现时显示 */}
                    {shouldShowRoot && (
                      <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span>
                            <span className="text-muted-foreground">词根：</span>
                            <span className="font-bold text-blue-600 dark:text-blue-400">{w.root}</span>
                          </span>
                          {w.rootPhonetic && (
                            <span>
                              <span className="text-muted-foreground">音标：</span>
                              <span>{w.rootPhonetic}</span>
                            </span>
                          )}
                          {w.rootMeaning && (
                            <span>
                              <span className="text-muted-foreground">意思：</span>
                              <span>{w.rootMeaning}</span>
                            </span>
                          )}
                          {w.root && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-5 w-5"
                              onClick={(e) => {
                                e.stopPropagation()
                                speak(w.root!)
                              }}
                            >
                              <Volume2 className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                        {w.rootPhrases && w.rootPhrases.length > 0 && (
                          <div className="mt-1">
                            <span className="text-muted-foreground">常用短语：</span>
                            <span className="ml-1">{w.rootPhrases.join('、')}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 记忆技巧 */}
                    <div className="mt-2 text-sm text-muted-foreground">
                      💡 {w.memoryTip}
                    </div>

                    {/* 单词常用短语 */}
                    {(w as any).wordPhrases && (w as any).wordPhrases.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {(w as any).wordPhrases.map((phrase: string, pidx: number) => (
                          <span key={pidx} className="px-2 py-1 text-sm bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded">
                            {phrase}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* 记忆口诀 */}
          <div className="flex items-start gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <Lightbulb className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                记忆口诀
              </p>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 italic">
                {lesson.mnemonic}
              </p>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
