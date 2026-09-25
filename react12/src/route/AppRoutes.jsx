import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// import AuthRoute from '../route/AuthRoute'
import ProtectRoute from '../route/ProtectRoute'
import AuthLayout from '../layout/AuthLayout'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import AuthRoute from './AuthRoute';
import UsersPage from '../pages/UsersPage'
import ProductPage from '../pages/ProductPage'


const AppRoutes = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthRoute />,
      children: [
        {
          path: '',
          element: <AuthLayout />,
          children: [
            {
              path: '',
              element: <LoginPage />
            },
            {
              path: 'register',
              element: <RegisterPage />
            }
          ]
        }
      ]
    },
    {
      path: '/home',
      element: <ProtectRoute />,
      children: [
        {
          path: '',
          element: <HomePage />,
          children: [
            {
              path: 'users',
              element: <UsersPage />
            },
            {
              path: 'products',
              element: <ProductPage />
            }
          ]
        }
      ]
    }
  ])

  return (<RouterProvider router={router} />)
}

export default AppRoutes
