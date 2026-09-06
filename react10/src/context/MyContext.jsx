import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const MyStore = createContext();

export const ContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    
    console.log(products)

    const getData = async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
    }

    useEffect(()=>{
        getData();
    },[ ])

    
    return <MyStore.Provider value={{products,setProducts}}>
        {children}
    </MyStore.Provider>
}