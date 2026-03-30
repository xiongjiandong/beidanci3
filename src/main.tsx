import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log('[DEBUG] main.tsx loading...')
console.log('[DEBUG] root element:', document.getElementById('root'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

console.log('[DEBUG] React app rendered')
