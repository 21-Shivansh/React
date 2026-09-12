import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const MyStore = createContext();

export const ContextProvider = ({children}) => {

    const [toggle, setToggle] = useState(true);

    const [isAuth, setIsAuth] = useState(false);
    

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

    useEffect(()=>{
        localStorage.setItem('users',JSON.stringify(users))
    },[users])
    

    const [products,setProducts] = useState([]);

    const getData = async() => {
        const res = await axios.get('https://fakestoreapi.com/products')
        setProducts(res.data)
    }

    useEffect(()=>{
        getData();
    },[])


    const [selectedCategory, setSelectedCategory] = useState('all');

    const [filterProducts,setFilterProducts] = useState([]);

    useEffect(() => {

        if(selectedCategory === 'all'){
            setFilterProducts(products);
        }
        else if(selectedCategory === "clothing"){
            let filter = products.filter((ele) => 
                ele.category === "women's clothing" || 
                ele.category === "men's clothing"
            );
            setFilterProducts(filter);
        }
        else if(selectedCategory === 'jewelery'){
            let filter = products.filter((ele) => 
                ele.category === "jewelery"
            );
            setFilterProducts(filter);
        }
        else{
            let filter = products.filter((ele) => 
                ele.category === "electronics"
            );
            setFilterProducts(filter);
        }
    }, [selectedCategory, products])


    const [cartItems,setCartItems] = useState([]);


    return (
        <MyStore.Provider 
            value={{
                toggle,
                setToggle,
                isAuth,
                setIsAuth,
                users,
                setUsers,
                setCartItems,
                cartItems,
                products,
                setProducts,
                selectedCategory,
                setSelectedCategory,
                filterProducts
            }}
        >
            {children}
        </MyStore.Provider>
    )
}
