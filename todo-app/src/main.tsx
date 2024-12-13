import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import Auth from './components/screens/Auth/Auth.tsx'
import { pageRoutes } from './config/pageRoutes.ts'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={pageRoutes.home + '*'}
          element={<App />}
        />
        <Route
          path={pageRoutes.auth + '/*'}
          element={<Auth />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
