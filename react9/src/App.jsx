import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Help from './pages/Help'
import NestAbout from './component/NestAbout'
import NestContact from './component/NestContact'

const App = () => {
  return (
    <div className='bg-gray-800 h-screen text-white'>
      <Navbar />

      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}>
            <Route path='nestedAbout' element={<NestAbout />}/>
          </Route>
          <Route path='/contact' element={<Contact />}>
            <Route path='nestedContact' element={<NestContact/>}/>
          </Route>
          <Route path='/help' element={<Help />}/>
        </Routes>
      </div>
    </div>

  )
}

export default App
