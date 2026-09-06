import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import Product from '../pages/Product'
import CartPage from '../pages/CartPage'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ < HomePage /> }/>
        <Route path='/about' element={ 
          <ProtectedRoute>
            <AboutPage />
          </ProtectedRoute>
         }/>
        <Route path='/contact' element={ < ContactPage /> }/>
        <Route path='/product/:id' element={ <Product/> }/>
        <Route path='/cart' element={ <CartPage/> }/>
      </Routes>
    </div>
  )
}

export default AppRoutes
