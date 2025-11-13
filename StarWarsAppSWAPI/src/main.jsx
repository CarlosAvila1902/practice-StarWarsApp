import { BrowserRouter } from "react-router-dom"; //importo el React router. y wrappeo mi App con el BrowserRouter para que toda la aplicacion tenga acceso al enrutamiento
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
