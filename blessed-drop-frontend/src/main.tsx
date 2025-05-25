import "primereact/resources/themes/lara-light-blue/theme.css"; // Escolha o tema desejado
import "primereact/resources/primereact.min.css"; // Estilos básicos do PrimeReact
import "primeicons/primeicons.css"; // Ícones do PrimeIcons
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
