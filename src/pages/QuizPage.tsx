import { useState, useEffect } from 'react'
import { Trophy, RefreshCw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { useWordData } from '@/hooks/useWordData'
import { useQuiz } from '@/hooks/useQuiz'
import { ChoiceQuiz, SpellingQuiz, ListeningQuiz } from '@/components/Quiz'
import type { QuizType, RootLesson } from '@/types'

interface WordForQuiz {
  word: string
  meaning: string
  phonetic: string
  rootLesson: RootLesson
}

export function QuizPage() {
  const { highScore, saveHighScore, loading, getWordsForQuiz } = useWordData()
  const [words, setWords] = useState<WordForQuiz[]>([])
  const [selectedTypes, setSelectedTypes] = useState<QuizType[]>(['choice', 'spelling', 'listening'])
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    async function loadWords() {
      const allWords = await getWordsForQuiz()
      setWords(allWords)
    }
    if (!loading) {
      loadWords()
    }
  }, [loading])

  const {
    currentQuestion,
    currentIndex,
    score,
    correct,
    wrong,
    isFinished,
    generateQuestions,
    handleAnswer,
    totalQuestions,
  } = useQuiz(words)

  const startQuiz = () => {
    if (words.length < 4) {
      alert('单词数量不足，请先添加更多词根数据')
      return
    }
    generateQuestions(words, selectedTypes)
    setIsStarted(true)
  }

  const handleQuizAnswer = async (isCorrect: boolean) => {
    handleAnswer(isCorrect)
  }

  const handleFinish = async () => {
    await saveHighScore(score)
    setIsStarted(false)
  }

  const toggleType = (type: QuizType) => {
    if (selectedTypes.includes(type)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter(t => t !== type))
      }
    } else {
      setSelectedTypes([...selectedTypes, type])
    }
  }

  if (loading) {
    return <div className="text-center py-12">加载中...</div>
  }

  if (!isStarted) {
    return (
      <div className="space-y-6 max-w-lg mx-auto">
        <div className="text-center py-8">
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold">单词测试</h1>
          <p className="text-muted-foreground">选择题型开始测试</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>题库统计</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{words.length}</div>
                <div className="text-xs text-muted-foreground">总单词数</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{highScore}</div>
                <div className="text-xs text-muted-foreground">最高分</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>选择题型</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTypes.includes('choice') ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleType('choice')}
                className={selectedTypes.includes('choice') ? 'bg-primary text-white' : ''}
              >
                选择题
              </Button>
              <Button
                variant={selectedTypes.includes('spelling') ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleType('spelling')}
                className={selectedTypes.includes('spelling') ? 'bg-primary text-white' : ''}
              >
                拼写题
              </Button>
              <Button
                variant={selectedTypes.includes('listening') ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleType('listening')}
                className={selectedTypes.includes('listening') ? 'bg-primary text-white' : ''}
              >
                听音选词
              </Button>
            </div>
          </CardContent>
        </Card>

        <Button onClick={startQuiz} className="w-full" size="lg">
          开始测试
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-lg mx-auto">
      {/* 进度条 */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>第 {currentIndex + 1} / {totalQuestions} 题</span>
          <span>得分：{score}</span>
        </div>
        <Progress value={(currentIndex / totalQuestions) * 100} />
      </div>

      {/* 题目 */}
      {currentQuestion && (
        <>
          {currentQuestion.type === 'choice' && (
            <ChoiceQuiz
              word={currentQuestion.wordItem.word}
              phonetic={currentQuestion.wordItem.phonetic}
              meaning={currentQuestion.wordItem.meaning}
              options={currentQuestion.options!}
              onAnswer={handleQuizAnswer}
            />
          )}
          {currentQuestion.type === 'spelling' && (
            <SpellingQuiz
              word={currentQuestion.wordItem.word}
              phonetic={currentQuestion.wordItem.phonetic}
              meaning={currentQuestion.wordItem.meaning}
              partOfSpeech={currentQuestion.rootLesson.partOfSpeech}
              onAnswer={handleQuizAnswer}
            />
          )}
          {currentQuestion.type === 'listening' && (
            <ListeningQuiz
              word={currentQuestion.wordItem.word}
              meaning={currentQuestion.wordItem.meaning}
              options={currentQuestion.options!}
              onAnswer={handleQuizAnswer}
            />
          )}
        </>
      )}

      {/* 结算弹窗 */}
      <Dialog open={isFinished} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              测试完成！
            </DialogTitle>
            <DialogDescription className="text-center">
              <div className="py-6 space-y-4">
                <div className="text-5xl font-bold text-primary">{score}</div>
                <div className="flex justify-center gap-6 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{correct}</div>
                    <div className="text-muted-foreground">正确</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-destructive">{wrong}</div>
                    <div className="text-muted-foreground">错误</div>
                  </div>
                </div>
                {score > highScore && (
                  <div className="text-primary font-medium">🎉 新纪录！</div>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleFinish} className="flex-1">
              返回
            </Button>
            <Button onClick={startQuiz} className="flex-1 gap-1">
              <RefreshCw className="h-4 w-4" />
              再来一局
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
