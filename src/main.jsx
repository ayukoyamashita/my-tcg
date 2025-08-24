import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Battle from './components/Battle/Battle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Battle />
  </StrictMode>,
)
