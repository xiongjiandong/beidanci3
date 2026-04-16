import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Trophy, Home, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: '首页', icon: Home },
    { path: '/learn', label: '学习', icon: BookOpen },
    { path: '/quiz', label: '测试', icon: Trophy },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">FunWords</span>
        </Link>
        <nav className="flex items-center space-x-1 ml-auto">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={location.pathname === item.path ? 'default' : 'ghost'}
                size="sm"
                className={cn(
                  'gap-1',
                  location.pathname === item.path && 'bg-primary text-white'
                )}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            </Link>
          ))}
          <Link to="/subscribe">
            <Button
              variant="default"
              size="sm"
              className="gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
            >
              <Crown className="h-4 w-4" />
              <span className="hidden sm:inline">会员</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
