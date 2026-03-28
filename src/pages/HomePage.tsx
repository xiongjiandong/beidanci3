import { Link } from 'react-router-dom'
import { BookOpen, Trophy, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useWordData } from '@/hooks/useWordData'
import type { Category } from '@/types'

const availableCategories: Category[] = [
  '互联网和软件', 'Web3.0', '通信', '机械', '土木', '旅游',
  '半导体', '化工', '电力', '高中', '四级', '六级'
]

export function HomePage() {
  const { rootLessons, progress, highScore, loading, getCategoryStats } = useWordData()

  const totalStudied = progress.filter(p => p.studied).length
  const totalMastered = progress.filter(p => p.masteryLevel >= 4).length
  const totalLessons = rootLessons.length

  return (
    <div className="space-y-6">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2">FunWords</h1>
        <p className="text-muted-foreground">高考趣味背单词</p>
      </div>

      {loading ? (
        <div className="text-center py-12">加载中...</div>
      ) : (
        <>
          {/* 统计卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </div>

          {/* 学习进度 */}
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
                  <span>{totalStudied} / {totalLessons}</span>
                </div>
                <Progress value={(totalStudied / totalLessons) * 100} />
              </div>
            </CardContent>
          </Card>

          {/* 快速入口 */}
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
                    {totalLessons} 个词根待学习
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
                    最高分：{highScore}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* 类目列表 */}
          <Card>
            <CardHeader>
              <CardTitle>单词类目</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {availableCategories.map((category) => {
                  const stats = getCategoryStats(category as any)
                  return (
                    <Link key={category} to={`/learn?category=${encodeURIComponent(category)}`}>
                      <Button variant="outline" size="sm" className="gap-1">
                        {category}
                        <span className="text-xs text-muted-foreground">({stats.total}词根)</span>
                      </Button>
                    </Link>
                  )
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                更多类目陆续开放中...
              </p>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
