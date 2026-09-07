import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import { useLocation } from 'react-router'

const App = () => {
  const location = useLocation();
  return (
    <div className='h-screen bg-gray-900 text-white'>

      {
        location.pathname !== '/' && <Navbar />
      }

      <AppRoutes />
    </div>
  )
}

export default App
