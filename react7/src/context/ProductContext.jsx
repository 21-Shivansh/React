import { createContext, useState } from "react";


const MyStore = createContext();

export const ContextProvider = ({children}) => {
    const [count,setCount] = useState();//state sharing 
    return <MyStore.Provider value={{count,setCount}}>
        {children}
    </MyStore.Provider>
}