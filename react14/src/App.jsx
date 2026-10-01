import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [products,setProducts] = useState([]);

  let getData = async () => {
    try {
      let res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    } catch (error) {
      console.log('error is -> ',error)
    }
  }
  useEffect(()=>{
    getData();
  },[])

  const [search,setSearch] = useState(null);

  const searchedProducts = () => {
    console.log('filter running....')
    let filterProducts = products.filter((ele)=>{
      return ele.title.toLowerCase().includes(search.toLowerCase())
    })
    setProducts(filterProducts)
  }
  //Debouncing
  useEffect(() => {

    if (!search) return;

    let delay = setTimeout(() => {
      searchedProducts()
      
    }, 3000);

    return () => clearTimeout(delay)

  }, [search])


  //Throtling
  const [ throtle,setThrotle] = useState(false);
  
  useEffect(()=>{

    let handleScroll = ()=>{
      console.log('Scrolling triggered....')
      if (throtle) return;
      setThrotle(true)
      setTimeout(()=>{
        setThrotle(false)
      },1000)
    }
    window.addEventListener('scroll',handleScroll)
  },[])
  
  return (
    <div className='bg-gray-900 h-screen text-white'>
      <input type="text" onChange={(e)=>setSearch(e.target.value)} className='bg-white border-none rounded-lg px-2 py-1 w-120 text-black' />
      <div className='text-white'>
        {products.map((ele)=>
          <p>{ele.title}</p>
        )}
      </div>
    </div>
  )
}

export default App
