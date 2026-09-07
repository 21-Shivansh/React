import React from 'react'
import { Routes, Route } from 'react-router';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';
import LRPage from '../pages/LRPage';
import ProtectedRoute from './ProtectedRoute';
import CollectionPage from '../pages/CollectionPage';



const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LRPage />} />

        <Route path='/home' element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path='/collection' element={
          <ProtectedRoute>
            <CollectionPage />
          </ProtectedRoute>
        } />
        <Route path='/about' element={
          <ProtectedRoute>
            <AboutPage />
          </ProtectedRoute>
        } />
        <Route path='/contact' element={
          <ProtectedRoute>
            <ContactPage />
          </ProtectedRoute>
        } />
        <Route path='/cart' element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default AppRoutes
