import React,{ useContext } from 'react'
import Navbar from './components/Navbar'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'
import { MyStore } from './context/MyContext'

const App = () => {
  const {toggle} = useContext(MyStore);
  return (
    <div className='min-h-screen p-2 bg-[#030712]'>
      <Navbar/>
      {
        toggle ? <ProductPage/> : <CartPage/>
      }
    </div>
  )
}

export default App
