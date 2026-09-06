import React from 'react'
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />

      <AppRoutes />
    </div>
  )
}

export default App
