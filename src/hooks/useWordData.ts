import { useState, useEffect, useCallback, useMemo } from 'react'
import {
  getAllRootLessons,
  getRootLessonsByCategory,
  getAllProgress,
  getHighScore,
  setHighScore,
  updateProgress,
  markAsStudied,
  initializeData,
  getAllWords
} from '@/lib/db'
import type { RootLesson, Progress, Category } from '@/types'

export function useWordData() {
  const [rootLessons, setRootLessons] = useState<RootLesson[]>([])
  const [progress, setProgress] = useState<Progress[]>([])
  const [highScore, setHighScoreState] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        console.log('[DEBUG useWordData] Starting data load...')

        // 初始化（现在只是打印日志，数据直接从JSON读取）
        await initializeData([])

        const [loadedLessons, loadedProgress, loadedHighScore] = await Promise.all([
          getAllRootLessons(),
          getAllProgress(),
          getHighScore(),
        ])

        console.log('[DEBUG useWordData] Loaded lessons:', loadedLessons.length)
        console.log('[DEBUG useWordData] Categories:', [...new Set(loadedLessons.map(l => l.category))])

        setRootLessons(loadedLessons)
        setProgress(loadedProgress)
        setHighScoreState(loadedHighScore)
      } catch (error) {
        console.error('Failed to load data:', error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const getLessonsByCategory = useCallback(async (category: Category) => {
    return getRootLessonsByCategory(category)
  }, [])

  const updateLessonProgress = useCallback(async (rootId: number, category: Category, masteryChange: number) => {
    await updateProgress(rootId, category, masteryChange)
    const newProgress = await getAllProgress()
    setProgress(newProgress)
  }, [])

  const markLessonStudied = useCallback(async (rootId: number, category: Category) => {
    await markAsStudied(rootId, category)
    const newProgress = await getAllProgress()
    setProgress(newProgress)
  }, [])

  const saveHighScore = useCallback(async (score: number) => {
    if (score > highScore) {
      await setHighScore(score)
      setHighScoreState(score)
    }
  }, [highScore])

  const getWordsForQuiz = useCallback(async () => {
    return getAllWords()
  }, [])

  // 获取所有类目
  const categories = useMemo(() =>
    [...new Set(rootLessons.map(l => l.category))] as Category[],
    [rootLessons]
  )

  // 按类目统计 - 使用 useMemo 优化性能
  const categoryStats = useMemo(() => {
    const stats: Record<string, { total: number; studied: number; mastered: number }> = {}

    for (const lesson of rootLessons) {
      if (!stats[lesson.category]) {
        stats[lesson.category] = { total: 0, studied: 0, mastered: 0 }
      }
      stats[lesson.category].total++
    }

    for (const p of progress) {
      if (stats[p.category]) {
        if (p.studied) stats[p.category].studied++
        if (p.masteryLevel >= 4) stats[p.category].mastered++
      }
    }

    return stats
  }, [rootLessons, progress])

  const getCategoryStats = useCallback((category: Category) => {
    return categoryStats[category] || { total: 0, studied: 0, mastered: 0 }
  }, [categoryStats])

  return {
    rootLessons,
    progress,
    highScore,
    loading,
    categories,
    getLessonsByCategory,
    updateLessonProgress,
    markLessonStudied,
    saveHighScore,
    getWordsForQuiz,
    getCategoryStats,
  }
}
