import { useState } from 'react'
import { HelpCircle, Check, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface SpellingQuizProps {
  word: string
  phonetic: string
  meaning: string
  partOfSpeech: string
  onAnswer: (isCorrect: boolean) => void
}

export function SpellingQuiz({ word, phonetic, meaning, partOfSpeech, onAnswer }: SpellingQuizProps) {
  const [input, setInput] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [hintUsed, setHintUsed] = useState(0)

  const handleConfirm = () => {
    if (!input.trim()) return
    const isCorrect = input.trim().toLowerCase() === word.toLowerCase()
    setShowResult(true)
    setTimeout(() => onAnswer(isCorrect), 1000)
  }

  const handleHint = () => {
    if (hintUsed >= 2) return
    setHintUsed(hintUsed + 1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConfirm()
    }
  }

  const getHint = () => {
    if (hintUsed === 0) return ''
    const revealed = word.slice(0, hintUsed)
    const hidden = '_'.repeat(word.length - hintUsed)
    return revealed + hidden
  }

  const isCorrect = input.trim().toLowerCase() === word.toLowerCase()

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">{meaning}</CardTitle>
        <p className="text-sm text-muted-foreground">
          请拼写对应的英文单词
          <span className="ml-2 text-xs">({partOfSpeech})</span>
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入英文单词..."
            disabled={showResult}
            className={cn(
              'text-lg h-12',
              showResult && (isCorrect ? 'border-primary' : 'border-destructive')
            )}
            autoFocus
          />
          {showResult && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {isCorrect ? (
                <Check className="h-5 w-5 text-primary" />
              ) : (
                <X className="h-5 w-5 text-destructive" />
              )}
            </div>
          )}
        </div>

        {showResult && !isCorrect && (
          <p className="text-sm text-destructive">
            正确答案：<span className="font-medium">{word}</span>
            <span className="text-muted-foreground ml-2">{phonetic}</span>
          </p>
        )}

        {hintUsed > 0 && !showResult && (
          <p className="text-sm text-muted-foreground font-mono">
            提示：{getHint()}
          </p>
        )}

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleHint}
            disabled={hintUsed >= 2 || showResult}
            className="gap-1"
          >
            <HelpCircle className="h-4 w-4" />
            提示 ({2 - hintUsed}次)
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={!input.trim() || showResult}
            className="flex-1"
          >
            确认
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
