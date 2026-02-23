import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';
import { BudgetProvider } from './context/BudgetContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Allowing app to work with Router Dom (router linsk) */}
    <BrowserRouter>
      <AuthProvider>
        <BudgetProvider>
          <App />
        </BudgetProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
