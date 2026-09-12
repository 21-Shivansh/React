import { createContext, useEffect, useState } from "react";


export const MyStore = createContext();

export const ContextProvider = ({children}) => {

    const [toggle, setToggle] = useState(true);

    const [isAuth, setIsAuth] = useState(false);

    const [users, setUsers] = useState( JSON.parse(localStorage.getItem('users')) || [] );

    useEffect(()=>{
        localStorage.setItem('users',JSON.stringify(users))
    },[users])


    return <MyStore.Provider value={{toggle,setToggle,isAuth,setIsAuth,users,setUsers}}>
        {children}
    </MyStore.Provider>
}