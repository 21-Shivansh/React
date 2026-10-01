import React, { lazy } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import MainLayout from '../layout/MainLayout'
import App from '../App'
// import About from '../pages/About'
import Contact from '../pages/Contact'
import { getUsers } from '../apis/ApiCalls'

let About = lazy(()=> import('../pages/About'))

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout/>,
            children:[
                {
                    path:'',
                    element:<App/>
                },
                {
                    path:'about',
                    element:<About/>,
                    loader:getUsers,
                    hydrateFallbackElement:<h1>Helloo i'm waiting</h1>
                },
                {
                    path:'contact',
                    element:<Contact/>
                }
            ]
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoutes
