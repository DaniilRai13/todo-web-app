import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import Auth from './components/screens/Auth/Auth.tsx'
import { pageRoutes } from './config/pageRoutes.ts'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import AuthProvider from './provider/AuthProvider.tsx'
import ModalProvider from './provider/ModalProvider.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <ModalProvider>
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
          </ModalProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
