import { AnimatePresence } from 'motion/react'
import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import './App.scss'
import Layout from './components/layout/Layout'
import Calendar from './components/pages/Calendar/Calendar'
import Profile from './components/pages/Profile/Profile'
import Home from './components/screens/Home'
import { pageRoutes } from './config/pageRoutes'
import { useActions } from './shared/hooks/useActions'
import { useTypedSelector } from './shared/hooks/useTypedSelector'
import Alert from './shared/notification/Alert'
import { saveUserToStorage } from './store/user/user.localstorage'

function App() {
  const { user, isSuccess, error } = useTypedSelector(({ user }) => user)
  const { resetStatus } = useActions()

  useEffect(() => {
    if (isSuccess && user) saveUserToStorage(user)
    if (error || isSuccess) {
      const timer = setTimeout(() => {
        resetStatus()
      }, 2600)

      return () => clearTimeout(timer)
    }
  }, [error, isSuccess, resetStatus, user])

  return (
    <>
      <Routes>
        <Route
          path={pageRoutes.home}
          element={<Layout />}
        >
          <Route index element={<Navigate to={'/overview'} />} />
          <Route path='overview' element={<Home />} />
          <Route path='todo-list' element={<Home />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
      <AnimatePresence>
        {error && <Alert type='error' message={error} />}
        {isSuccess && <Alert type='success' />}
      </AnimatePresence>
    </>
  )
}



export default App
