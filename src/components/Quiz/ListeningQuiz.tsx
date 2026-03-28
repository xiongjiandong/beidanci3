import { useState, useEffect } from 'react'
import { Volume2, HelpCircle, Check, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ListeningQuizProps {
  word: string
  meaning: string
  options: string[]
  onAnswer: (isCorrect: boolean) => void
}

export function ListeningQuiz({ word, meaning, options, onAnswer }: ListeningQuizProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [hintUsed, setHintUsed] = useState(0)

  const speak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'en-US'
      speechSynthesis.speak(utterance)
    }
  }

  // 自动播放
  useEffect(() => {
    const timer = setTimeout(speak, 300)
    return () => clearTimeout(timer)
  }, [word])

  const handleSelect = (option: string) => {
    if (showResult) return
    setSelected(option)
  }

  const handleConfirm = () => {
    if (!selected) return
    const isCorrect = selected === word
    setShowResult(true)
    setTimeout(() => onAnswer(isCorrect), 1000)
  }

  const handleHint = () => {
    if (hintUsed >= 2) return
    setHintUsed(hintUsed + 1)
  }

  const getOptionStyle = (option: string) => {
    if (!showResult) {
      return selected === option
        ? 'border-primary bg-primary/10'
        : 'border-border hover:border-primary/50'
    }
    if (option === word) {
      return 'border-primary bg-primary/20 text-primary'
    }
    if (option === selected && option !== word) {
      return 'border-destructive bg-destructive/20 text-destructive'
    }
    return 'border-border opacity-50'
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={speak}
            className="h-20 w-20 rounded-full"
          >
            <Volume2 className="h-10 w-10" />
          </Button>
        </div>
        <CardTitle className="text-center text-lg mt-4">听音选词</CardTitle>
        <p className="text-sm text-muted-foreground text-center">
          点击播放发音，选择正确的单词
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(option)}
            disabled={showResult}
            className={cn(
              'w-full p-4 text-left rounded-lg border-2 transition-all',
              getOptionStyle(option)
            )}
          >
            <span className="font-medium">{String.fromCharCode(65 + index)}. </span>
            {option}
            {showResult && option === word && (
              <Check className="inline-block ml-2 h-5 w-5 text-primary" />
            )}
            {showResult && option === selected && option !== word && (
              <X className="inline-block ml-2 h-5 w-5 text-destructive" />
            )}
          </button>
        ))}

        <div className="flex gap-2 pt-4">
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
            disabled={!selected || showResult}
            className="flex-1"
          >
            确认
          </Button>
        </div>

        {hintUsed > 0 && !showResult && (
          <p className="text-sm text-muted-foreground">
            提示：首字母是 "{word[0].toUpperCase()}"，共 {word.length} 个字母
          </p>
        )}

        {showResult && (
          <p className="text-sm text-muted-foreground text-center">
            中文释义：{meaning}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
