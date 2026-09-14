import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';
import { Navigate } from 'react-router';

const PublicRoute = ({children}) => {
    const { isAuth } = useContext(MyStore);
    
    if(isAuth){
        return <Navigate to={'/home'} replace/>
    }
  return children;
}

export default PublicRoute
