import { createContext, useEffect, useState, useSyncExternalStore } from "react";
import { axiosInstance } from "../config/axiosInstance";

export const Auth = createContext();

export const ContextProvider = ({children}) => {

    const [registeredUser,setRegisteredUser] = useState( JSON.parse(localStorage.getItem('registeredUser')) || []);

    useEffect(()=>{
        localStorage.setItem('registeredUser',JSON.stringify(registeredUser))
    },[registeredUser])

    const [loginedUser,setLoginedUser] = useState(JSON.parse(localStorage.getItem('loginedUser')) || null);

    useEffect(()=>{
        localStorage.setItem('loginedUser',JSON.stringify(loginedUser))
    },[loginedUser])
    
    const [userData, setUserData] = useState([]);
    const [productsData, setProductsData] = useState([]);

    const getUserData = async() => {
        let res = await axiosInstance.get('/users')
        setUserData(res.data)
    }
    const getProductsData = async () => {
        let res = await axiosInstance.get('/products')
        setProductsData(res.data)
    }
    useEffect(()=>{
        getUserData()
        getProductsData()
    },[])

    return <Auth.Provider value={{
        registeredUser,
        setRegisteredUser,
        loginedUser,
        setLoginedUser,
        userData,
        productsData
    }}>{children}</Auth.Provider>
}