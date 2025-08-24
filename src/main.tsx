import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'reset-css'; 
import './styles/index.css'
import Battle from './components/Battle/Battle'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <Battle />
  </StrictMode>,
)
