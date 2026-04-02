import { Link } from 'react-router-dom'
import { BookOpen, Trophy, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useWordData } from '@/hooks/useWordData'
import type { Category } from '@/types'

const availableCategories: Category[] = [
  '互联网和软件', 'Web3.0', '通信', '机械', '土木',
  '半导体', '高中', '四级', '六级', '化工', '电力', '旅游'
]

// 骨架加载组件
function SkeletonCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="h-4 w-16 bg-muted rounded animate-pulse" />
      </CardHeader>
      <CardContent>
        <div className="h-8 w-20 bg-muted rounded animate-pulse" />
      </CardContent>
    </Card>
  )
}

function SkeletonCategories() {
  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-9 w-28 bg-muted rounded animate-pulse" />
      ))}
    </div>
  )
}

export function HomePage() {
  console.log('[DEBUG] HomePage rendering...')
  const { rootLessons, progress, highScore, lessonsLoading, progressLoading, getCategoryStats } = useWordData()
  console.log('[DEBUG] HomePage lessonsLoading:', lessonsLoading, 'progressLoading:', progressLoading)

  const totalStudied = progress.filter(p => p.studied).length
  const totalMastered = progress.filter(p => p.masteryLevel >= 4).length
  const totalLessons = rootLessons.length || 12000 // 使用默认值避免布局跳动

  return (
    <div className="space-y-6">
      {/* 标题区域 - 立即显示 */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2">FunWords</h1>
        <p className="text-muted-foreground">高效背单词</p>
      </div>

      {/* 统计卡片 - 进度数据加载快，先显示 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {progressLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  最高分
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{highScore}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  已学习词根
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalStudied}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  已掌握词根
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{totalMastered}</div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* 学习进度 - 使用已有数据 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            学习进度
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>总进度</span>
              <span>{totalStudied} / {lessonsLoading ? '...' : totalLessons}</span>
            </div>
            <Progress value={(totalStudied / totalLessons) * 100} />
          </div>
        </CardContent>
      </Card>

      {/* 快速入口 - 立即显示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/learn">
          <Card className="hover:border-primary transition-colors cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                开始学习
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                按频率学习词根，图文并茂，轻松记忆
              </p>
              <p className="text-sm text-primary mt-2">
                {lessonsLoading ? '加载中...' : `${totalLessons} 个词根待学习`}
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/quiz">
          <Card className="hover:border-primary transition-colors cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                开始测试
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                选择题、拼写题、听音题，多种题型巩固记忆
              </p>
              <p className="text-sm text-primary mt-2">
                最高分：{progressLoading ? '...' : highScore}
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* 类目列表 - 加载完成后显示 */}
      <Card>
        <CardHeader>
          <CardTitle>单词类目</CardTitle>
        </CardHeader>
        <CardContent>
          {lessonsLoading ? (
            <SkeletonCategories />
          ) : (
            <div className="flex flex-wrap gap-2">
              {availableCategories.map((category) => {
                const stats = getCategoryStats(category as any)
                return (
                  <Link key={category} to={`/learn?category=${encodeURIComponent(category)}`}>
                    <Button variant="outline" className="gap-2 text-base px-4 py-2 h-auto">
                      {category}
                      <span className="text-sm text-muted-foreground">({stats.total}词根)</span>
                    </Button>
                  </Link>
                )
              })}
            </div>
          )}
          <p className="text-xs text-muted-foreground mt-3">
            更多类目陆续开放中...
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
