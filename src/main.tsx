import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { LoginApp } from './LoginApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LoginApp />
    </BrowserRouter>
  </StrictMode>,
)
