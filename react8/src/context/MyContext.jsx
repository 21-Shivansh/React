import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';


export const MyStore = createContext();

export const ContextProvider = ({children}) => {

    const [products,setProducts] = useState([]);
    const getData = async() => {
        let response = await axios('https://fakestoreapi.com/products')
        setProducts(response.data);
    }
    useEffect(()=>{
        getData();
    },[])

    const [toggle,setToggle] = useState(true);

    const [cartProduct,setCartProduct] = useState([]);
    console.log(cartProduct)
    

    return <MyStore.Provider value={{products,toggle,setToggle,cartProduct,setCartProduct}} >
        {children};
    </MyStore.Provider>
}