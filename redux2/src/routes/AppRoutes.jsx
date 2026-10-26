import React from 'react'
import { RouterProvider,createBrowserRouter } from "react-router"
import AuthLayout from '../layout/AuthLayout'
import MainLayout from '../layout/MainLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<AuthLayout/>,
            children:[
                {
                    path:'',
                    element:<LoginPage/>
                },
                {
                    path:'register',
                    element:<RegisterPage/>
                }
            ]
        },
        {
            element:<MainLayout/>,
            children:[
                {
                    path:'/home',
                    element:<HomePage/>
                },
                {
                    path:'/contact',
                    element:<ContactPage/>
                }
            ]
        }

    ])


  return (<RouterProvider router={router}/>)
}

export default AppRoutes
