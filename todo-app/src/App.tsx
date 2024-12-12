import { Route, Routes } from 'react-router'
import './App.scss'
import Layout from './components/layout/Layout'
import Calendar from './components/pages/Calendar/Calendar'
import Profile from './components/pages/Profile/Profile'
import Home from './components/screens/Home'
import { pageRoutes } from './config/pageRoutes'

function App() {
  return (
    <Routes>
      <Route
        path={pageRoutes.home}
        element={<Layout />}
      >
        <Route path='dashboard' element={<Home />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}



export default App
