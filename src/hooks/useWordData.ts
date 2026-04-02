import { useState, useEffect, useCallback, useMemo } from 'react'
import {
  getAllRootLessons,
  getRootLessonsByCategory,
  getAllProgress,
  getHighScore,
  setHighScore,
  updateProgress,
  markAsStudied,
  getAllWords
} from '@/lib/db'
import type { RootLesson, Progress, Category } from '@/types'

export function useWordData() {
  const [rootLessons, setRootLessons] = useState<RootLesson[]>([])
  const [progress, setProgress] = useState<Progress[]>([])
  const [highScore, setHighScoreState] = useState(0)
  const [lessonsLoading, setLessonsLoading] = useState(true)
  const [progressLoading, setProgressLoading] = useState(true)

  // 快速加载IndexedDB数据（进度、高分）
  useEffect(() => {
    async function loadProgressData() {
      try {
        const [loadedProgress, loadedHighScore] = await Promise.all([
          getAllProgress(),
          getHighScore(),
        ])
        setProgress(loadedProgress)
        setHighScoreState(loadedHighScore)
      } catch (error) {
        console.error('Failed to load progress:', error)
      } finally {
        setProgressLoading(false)
      }
    }
    loadProgressData()
  }, [])

  // 后台加载课程数据（较慢）
  useEffect(() => {
    async function loadLessonData() {
      try {
        console.log('[DEBUG useWordData] Starting lesson data load...')
        const loadedLessons = await getAllRootLessons()
        console.log('[DEBUG useWordData] Loaded lessons:', loadedLessons.length)
        setRootLessons(loadedLessons)
      } catch (error) {
        console.error('Failed to load lessons:', error)
      } finally {
        setLessonsLoading(false)
      }
    }
    loadLessonData()
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

  // 合并的loading状态（用于向后兼容）
  const loading = lessonsLoading || progressLoading

  return {
    rootLessons,
    progress,
    highScore,
    loading,
    lessonsLoading,
    progressLoading,
    categories,
    getLessonsByCategory,
    updateLessonProgress,
    markLessonStudied,
    saveHighScore,
    getWordsForQuiz,
    getCategoryStats,
  }
}
