import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router"
import AuthLayout from '../layout/AuthLayout'
import MainLayout from '../layout/MainLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import AboutPage from '../pages/AboutPage'
import PublicProtected from './protected/PublicProtected'
import MainProtected from './protected/MainProtected'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../feature/authSlice'
import CounterPage from '../pages/CounterPage'

const AppRoutes = () => {

    const dispatch = useDispatch();

    const hydrateUser = () => {
        let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (!loggedInUser) {
            toast.error('Unautherized access')
            return;
        }

        dispatch(addUser(loggedInUser));

    }
    useEffect(() => {
        hydrateUser();
    }, [])

    const router = createBrowserRouter([
        {
            path: '/',
            element: <PublicProtected />,
            children: [
                {
                    path: "",
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
            element: <MainProtected />,
            children: [
                {
                    element: <MainLayout />,
                    children: [
                        {
                            path: '/home',
                            element: <HomePage />
                        },
                        {
                            path: '/contact',
                            element: <ContactPage />
                        },
                        {
                            path:'/counter',
                            element: <CounterPage />
                        },
                        {
                            path:'/about',
                            element: <AboutPage/>
                        }
                    ]
                }
            ]
        }

    ])


    return (<RouterProvider router={router} />)
}

export default AppRoutes
