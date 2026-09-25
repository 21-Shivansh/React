import React, { useContext } from 'react'
import { Auth } from '../context/MyContext'
import { Navigate, Outlet } from 'react-router';

const AuthRoute = () => {
  const {loginedUser} = useContext(Auth);

  if(loginedUser){
    return <Navigate to={'/home'} />
  }

  return <Outlet/>
}

export default AuthRoute
