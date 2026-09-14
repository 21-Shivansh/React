import React from 'react'
import { Routes, Route } from 'react-router';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';
import LRPage from '../pages/LRPage';
import ProtectedRoute from './ProtectedRoute';
import CollectionPage from '../pages/CollectionPage';
import ProductPage from '../pages/ProductPage';
import PublicRoute from './PublicRoute';
import CheckoutPage from '../pages/CheckoutPage';



const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <PublicRoute>
            <LRPage/>
          </PublicRoute>
        } />

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
        <Route path='/collection/:id' element={
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        } />
        <Route path='/payment_gateway' element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default AppRoutes
