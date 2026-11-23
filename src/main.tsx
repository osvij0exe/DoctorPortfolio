import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DoctorsApp } from './components/DoctorsApp'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DoctorsApp />
  </StrictMode>,
)
