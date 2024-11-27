import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { LeaveProvider } from './context/LeaveContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <LeaveProvider>
        <App />
      </LeaveProvider>
    </HashRouter>
  </StrictMode>,
)
