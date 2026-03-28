import { openDB, DBSchema, IDBPDatabase } from 'idb'
import type { RootLesson, Progress, Meta, Category } from '@/types'

// 直接导入所有数据
import internetSoftwareData from '@/data/internet-software.json'
import web3Data from '@/data/web3.json'
import communicationData from '@/data/communication.json'
import seniorHighData from '@/data/senior-high.json'
import civilEngineeringData from '@/data/civil-engineering.json'
import tourismData from '@/data/tourism.json'
import semiconductorData from '@/data/semiconductor.json'
import chemicalData from '@/data/chemical.json'
import electricPowerData from '@/data/electric-power.json'
import mechanicalData from '@/data/mechanical.json'
import cet4Data from '@/data/cet-4.json'
import cet6Data from '@/data/cet-6.json'

// 合并所有数据 - 直接从JSON读取，不存IndexedDB
const allLessonsData: RootLesson[] = [
  ...(internetSoftwareData as RootLesson[]),
  ...(web3Data as RootLesson[]),
  ...(communicationData as RootLesson[]),
  ...(seniorHighData as RootLesson[]),
  ...(civilEngineeringData as RootLesson[]),
  ...(tourismData as RootLesson[]),
  ...(semiconductorData as RootLesson[]),
  ...(chemicalData as RootLesson[]),
  ...(electricPowerData as RootLesson[]),
  ...(mechanicalData as RootLesson[]),
  ...(cet4Data as RootLesson[]),
  ...(cet6Data as RootLesson[]),
]

console.log('[DEBUG] Total lessons loaded:', allLessonsData.length)
console.log('[DEBUG] Categories:', [...new Set(allLessonsData.map(l => l.category))])

interface FunWordsDB extends DBSchema {
  progress: {
    key: number
    value: Progress
  }
  meta: {
    key: string
    value: Meta
  }
}

let dbPromise: Promise<IDBPDatabase<FunWordsDB>> | null = null

export async function getDB() {
  if (!dbPromise) {
    dbPromise = openDB<FunWordsDB>('funwords-progress', 1, {
      upgrade(db) {
        // 只存储进度和元数据，不存储词根
        db.createObjectStore('progress', { keyPath: 'rootId' })
        db.createObjectStore('meta')
      },
    })
  }
  return dbPromise
}

// 获取所有词根课程 - 直接返回JSON数据
export async function getAllRootLessons(): Promise<RootLesson[]> {
  return allLessonsData
}

// 按类目获取词根课程 - 直接过滤JSON数据
export async function getRootLessonsByCategory(category: Category): Promise<RootLesson[]> {
  console.log('[DEBUG] Filtering category:', category)
  const filtered = allLessonsData.filter(l => l.category === category)
  console.log('[DEBUG] Result count:', filtered.length)
  return filtered.sort((a, b) => a.frequency - b.frequency)
}

// 获取单个词根课程
export async function getRootLesson(id: number): Promise<RootLesson | undefined> {
  return allLessonsData.find(l => l.id === id)
}

// 获取所有类目
export async function getCategories(): Promise<Category[]> {
  const categories = [...new Set(allLessonsData.map(l => l.category))]
  return categories as Category[]
}

// 进度操作
export async function getProgress(rootId: number): Promise<Progress | undefined> {
  const db = await getDB()
  return db.get('progress', rootId)
}

export async function getAllProgress(): Promise<Progress[]> {
  const db = await getDB()
  return db.getAll('progress')
}

export async function updateProgress(
  rootId: number,
  category: Category,
  masteryChange: number
): Promise<void> {
  const db = await getDB()
  const existing = await db.get('progress', rootId)

  const progress: Progress = existing
    ? {
        ...existing,
        masteryLevel: Math.min(5, Math.max(0, existing.masteryLevel + masteryChange)),
        lastPracticeAt: new Date().toISOString(),
      }
    : {
        rootId,
        category,
        studied: true,
        masteryLevel: Math.max(0, masteryChange),
        lastPracticeAt: new Date().toISOString(),
      }

  await db.put('progress', progress)
}

export async function markAsStudied(rootId: number, category: Category): Promise<void> {
  const db = await getDB()
  const existing = await db.get('progress', rootId)

  const progress: Progress = existing
    ? { ...existing, studied: true, lastPracticeAt: new Date().toISOString() }
    : { rootId, category, studied: true, masteryLevel: 0, lastPracticeAt: new Date().toISOString() }

  await db.put('progress', progress)
}

// 元数据操作
export async function getHighScore(): Promise<number> {
  const db = await getDB()
  const meta = await db.get('meta', 'highScore')
  return meta?.highScore || 0
}

export async function setHighScore(score: number): Promise<void> {
  const db = await getDB()
  await db.put('meta', { highScore: score }, 'highScore')
}

// 初始化 - 不再需要，数据直接从JSON读取
export async function initializeData(_lessons: RootLesson[]): Promise<void> {
  // 数据已经从JSON直接加载，无需初始化IndexedDB
  console.log('[DEBUG] initializeData - using direct JSON data')
}

// 获取所有单词（用于测试）
export async function getAllWords(): Promise<{ word: string; meaning: string; phonetic: string; rootLesson: RootLesson }[]> {
  const words: { word: string; meaning: string; phonetic: string; rootLesson: RootLesson }[] = []

  for (const lesson of allLessonsData) {
    for (const w of lesson.words) {
      words.push({
        word: w.word,
        meaning: w.meaning,
        phonetic: w.phonetic,
        rootLesson: lesson,
      })
    }
  }

  return words
}
