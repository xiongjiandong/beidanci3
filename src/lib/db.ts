import { openDB, DBSchema, IDBPDatabase } from 'idb'
import type { RootLesson, Progress, Meta, Category } from '@/types'

// 数据缓存
let cachedLessons: RootLesson[] = []
let dataLoadPromise: Promise<RootLesson[]> | null = null

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
        // 只存储进度和元数据
        if (!db.objectStoreNames.contains('progress')) {
          db.createObjectStore('progress', { keyPath: 'rootId' })
        }
        if (!db.objectStoreNames.contains('meta')) {
          db.createObjectStore('meta')
        }
      },
    })
  }
  return dbPromise
}

// 异步加载数据（从public目录）
async function loadAllData(): Promise<RootLesson[]> {
  if (cachedLessons.length > 0) {
    return cachedLessons
  }

  const categories = [
    { file: 'internet-software.json', category: '互联网和软件' },
    { file: 'web3.json', category: 'Web3.0' },
    { file: 'communication.json', category: '通信' },
    { file: 'mechanical.json', category: '机械' },
    { file: 'civil-engineering.json', category: '土木' },
    { file: 'semiconductor.json', category: '半导体' },
    { file: 'senior-high.json', category: '高中' },
    { file: 'cet-4.json', category: '四级' },
    { file: 'cet-6.json', category: '六级' },
    { file: 'chemical.json', category: '化工' },
    { file: 'electric-power.json', category: '电力' },
    { file: 'tourism.json', category: '旅游' },
  ]

  const allData: RootLesson[] = []

  // 并行加载所有数据
  const promises = categories.map(async ({ file }) => {
    try {
      const baseUrl = import.meta.env.BASE_URL || '/'
      const response = await fetch(`${baseUrl}data/${file}`)
      if (!response.ok) {
        console.error(`Failed to load ${file}`)
        return []
      }
      const data = await response.json()
      return data as RootLesson[]
    } catch (error) {
      console.error(`Error loading ${file}:`, error)
      return []
    }
  })

  const results = await Promise.all(promises)
  for (const data of results) {
    allData.push(...data)
  }

  cachedLessons = allData
  console.log('[DEBUG] Loaded', allData.length, 'lessons')
  return allData
}

// 获取所有词根课程
export async function getAllRootLessons(): Promise<RootLesson[]> {
  if (cachedLessons.length > 0) {
    return cachedLessons
  }

  if (!dataLoadPromise) {
    dataLoadPromise = loadAllData()
  }

  return dataLoadPromise
}

// 按类目获取词根课程
export async function getRootLessonsByCategory(category: Category): Promise<RootLesson[]> {
  const all = await getAllRootLessons()
  const filtered = all.filter(l => l.category === category)
  return filtered.sort((a, b) => a.frequency - b.frequency)
}

// 获取单个词根课程
export async function getRootLesson(id: number): Promise<RootLesson | undefined> {
  const all = await getAllRootLessons()
  return all.find(l => l.id === id)
}

// 获取所有类目
export async function getCategories(): Promise<Category[]> {
  const all = await getAllRootLessons()
  const categories = [...new Set(all.map(l => l.category))]
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

// 初始化（现在只是预加载数据）
export async function initializeData(_lessons: RootLesson[]): Promise<void> {
  // 预加载数据
  await getAllRootLessons()
}

// 获取所有单词（用于测试）
export async function getAllWords(): Promise<{ word: string; meaning: string; phonetic: string; rootLesson: RootLesson }[]> {
  const lessons = await getAllRootLessons()
  const words: { word: string; meaning: string; phonetic: string; rootLesson: RootLesson }[] = []

  for (const lesson of lessons) {
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
