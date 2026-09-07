import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { MyStore } from '../context/MyContext';

const ProtectedRoute = ({children}) => {

  const {isAuth} = useContext(MyStore);   


    if( !isAuth ){
        return <Navigate to={'/'}/>
    }
    
  return children;
}

export default ProtectedRoute
