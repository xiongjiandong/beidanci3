import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BookOpen, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useWordData } from '@/hooks/useWordData'
import { RootLessonCard } from '@/components/Learn'
import type { RootLesson, Category } from '@/types'

// 可用类目
const availableCategories: Category[] = [
  '互联网和软件', 'Web3.0', '通信', '机械', '土木', '旅游',
  '半导体', '化工', '电力', '高中', '四级', '六级'
]

export function LearnPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') as Category | null
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categoryParam && availableCategories.includes(categoryParam) ? categoryParam : '互联网和软件'
  )
  const [lessons, setLessons] = useState<RootLesson[]>([])

  const { progress, loading, getLessonsByCategory, markLessonStudied, getCategoryStats } = useWordData()

  useEffect(() => {
    async function loadLessons() {
      console.log('[DEBUG LearnPage] Loading lessons for category:', selectedCategory)
      const categoryLessons = await getLessonsByCategory(selectedCategory)
      console.log('[DEBUG LearnPage] Got lessons:', categoryLessons.length)
      setLessons(categoryLessons)
    }
    if (!loading) {
      loadLessons()
    }
  }, [selectedCategory, loading, getLessonsByCategory])

  useEffect(() => {
    if (categoryParam && availableCategories.includes(categoryParam)) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category)
    setSearchParams({ category })
  }

  const handleStudy = (rootId: number) => {
    markLessonStudied(rootId, selectedCategory)
  }

  if (loading) {
    return <div className="text-center py-12">加载中...</div>
  }

  const stats = getCategoryStats(selectedCategory)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          词根学习
        </h1>
        <div className="text-sm text-muted-foreground">
          按频率排序 · 由易到难
        </div>
      </div>

      {/* 类目选择 */}
      <div className="flex flex-wrap gap-2">
        {availableCategories.map((category) => {
          const catStats = getCategoryStats(category)
          return (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? 'bg-primary text-white' : ''}
            >
              {category}
              <span className="ml-1 text-xs opacity-70">({catStats.total}词根)</span>
            </Button>
          )
        })}
      </div>

      {/* 学习进度 */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            {selectedCategory} - 学习进度
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center mb-3">
            <div>
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-xs text-muted-foreground">总词根</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{stats.studied}</div>
              <div className="text-xs text-muted-foreground">已学习</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{stats.mastered}</div>
              <div className="text-xs text-muted-foreground">已掌握</div>
            </div>
          </div>
          <Progress value={(stats.studied / stats.total) * 100} className="h-2" />
        </CardContent>
      </Card>

      {/* 词根课程列表 */}
      <div className="space-y-3">
        {lessons.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              该类目暂无词根数据
            </CardContent>
          </Card>
        ) : (
          lessons.map((lesson) => {
            const lessonProgress = progress.find(p => p.rootId === lesson.id)
            return (
              <RootLessonCard
                key={lesson.id}
                lesson={lesson}
                masteryLevel={lessonProgress?.masteryLevel || 0}
                studied={lessonProgress?.studied || false}
                onStudy={() => handleStudy(lesson.id)}
              />
            )
          })
        )}
      </div>
    </div>
  )
}
