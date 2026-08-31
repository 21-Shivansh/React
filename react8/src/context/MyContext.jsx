import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';


export const MyStore = createContext();

export const ContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const getData = async () => {
        let response = await axios('https://fakestoreapi.com/products')
        setProducts(response.data);
    }
    useEffect(() => {
        getData();
    }, [])

    const [toggle, setToggle] = useState(true);

    const [cartProduct, setCartProduct] = useState([]);

    const handleInc = (id) => {
        setCartProduct( prev => 
            prev.map( ele => 
                ele.id === id ? {...ele , quantity: ele.quantity + 1 } : ele
            )
        )
    }

    const handleDec = (id) => {
        let decEle = cartProduct.find(ele => ele.id === id);
        if (decEle.quantity > 1) {
            setCartProduct(prev =>
                prev.map(ele =>
                    ele.id === id ? { ...ele, quantity: ele.quantity - 1 } : ele
                )
            )
        }else{
            setCartProduct( prev => 
                prev.filter( ele => ele !== decEle)
            )
        }
    }

    return <MyStore.Provider value={{ products, toggle, setToggle, cartProduct, setCartProduct,handleInc,handleDec }} >
        {children};
    </MyStore.Provider>
}