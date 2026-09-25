import React, { useContext } from 'react'
import { Auth } from '../context/MyContext'
import { Navigate, Outlet } from 'react-router';

const ProtectRoute = () => {
  const {loginedUser} = useContext(Auth);

  if(!loginedUser){
    return <Navigate to={'/'} />
  }

  return <Outlet />
}

export default ProtectRoute
