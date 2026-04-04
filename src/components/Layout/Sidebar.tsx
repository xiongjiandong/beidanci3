import { Header } from './Header'
import { ScrollButtons } from './ScrollButtons'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">{children}</main>
      <ScrollButtons />
    </div>
  )
}
