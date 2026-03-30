import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Toaster } from '@/components/ui/toaster'
import { HomePage, LearnPage, QuizPage } from '@/pages'

console.log('[DEBUG] App.tsx loading...')

function App() {
  console.log('[DEBUG] App function called')
  const basename = import.meta.env.BASE_URL || '/'
  console.log('[DEBUG] BrowserRouter basename:', basename)
  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
