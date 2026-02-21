import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Allowing App to work with Router dom (router links) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
