import { useState, useCallback } from 'react'
import type { QuizType, QuizQuestion, QuizWordInfo, RootLesson } from '@/types'
import { shuffle, randomSelect } from '@/lib/utils'

interface WordForQuiz extends QuizWordInfo {
  rootLesson: RootLesson
}

const QUESTIONS_PER_ROUND = 10

export function useQuiz(words: WordForQuiz[]) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const generateQuestions = useCallback((selectedWords: WordForQuiz[], types: QuizType[]) => {
    const selected = randomSelect(selectedWords, Math.min(QUESTIONS_PER_ROUND, selectedWords.length))
    const generated: QuizQuestion[] = selected.map((wordItem) => {
      const type = types[Math.floor(Math.random() * types.length)]
      let options: string[] | undefined

      if (type === 'choice') {
        // 生成选项
        const otherMeanings = words
          .filter((w) => w.word !== wordItem.word)
          .map((w) => w.meaning)
        const wrongOptions = randomSelect(shuffle(otherMeanings), 3)
        options = shuffle([wordItem.meaning, ...wrongOptions])
      } else if (type === 'listening') {
        // 生成选项
        const otherWords = words
          .filter((w) => w.word !== wordItem.word)
          .map((w) => w.word)
        const wrongOptions = randomSelect(shuffle(otherWords), 3)
        options = shuffle([wordItem.word, ...wrongOptions])
      }

      return {
        wordItem,
        rootLesson: wordItem.rootLesson,
        type,
        options,
        hintUsed: 0,
      }
    })

    setQuestions(generated)
    setCurrentIndex(0)
    setScore(0)
    setCorrect(0)
    setWrong(0)
    setIsFinished(false)
  }, [words])

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore((s) => s + 1)
      setCorrect((c) => c + 1)
    } else {
      setScore((s) => Math.max(0, s - 1))
      setWrong((w) => w + 1)
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
    } else {
      setIsFinished(true)
    }
  }, [currentIndex, questions.length])

  const currentQuestion = questions[currentIndex]
  const totalQuestions = questions.length

  return {
    questions,
    currentQuestion,
    currentIndex,
    score,
    correct,
    wrong,
    isFinished,
    generateQuestions,
    handleAnswer,
    totalQuestions,
  }
}
