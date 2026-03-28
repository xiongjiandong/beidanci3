import { useState } from 'react'
import { Check, X, HelpCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ChoiceQuizProps {
  word: string
  phonetic: string
  meaning: string
  options: string[]
  onAnswer: (isCorrect: boolean) => void
}

export function ChoiceQuiz({ word, phonetic, meaning, options, onAnswer }: ChoiceQuizProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [hintUsed, setHintUsed] = useState(0)

  const handleSelect = (option: string) => {
    if (showResult) return
    setSelected(option)
  }

  const handleConfirm = () => {
    if (!selected) return
    const isCorrect = selected === meaning
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
    if (option === meaning) {
      return 'border-primary bg-primary/20 text-primary'
    }
    if (option === selected && option !== meaning) {
      return 'border-destructive bg-destructive/20 text-destructive'
    }
    return 'border-border opacity-50'
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{word}</CardTitle>
          <span className="text-sm text-muted-foreground">{phonetic}</span>
        </div>
        <p className="text-sm text-muted-foreground">选择正确的中文释义</p>
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
            {showResult && option === meaning && (
              <Check className="inline-block ml-2 h-5 w-5 text-primary" />
            )}
            {showResult && option === selected && option !== meaning && (
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
            提示：首字母是 "{word[0].toUpperCase()}"
          </p>
        )}
      </CardContent>
    </Card>
  )
}
