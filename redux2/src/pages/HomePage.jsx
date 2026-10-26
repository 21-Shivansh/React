import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, incrementByValue } from '../feature/counterSlice';

const HomePage = () => {
  const [inpValue,setInpValue] = useState(0)
  let dispatch = useDispatch();
  const {count} = useSelector((state)=>state.counter)
  return (
    <div className='h-screen bg-black text-white text-6xl'>
      <h1>Count is {count}</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <input type="number" placeholder='Enter any number to add...' onChange={(e)=> setInpValue(e.target.value)} />
      <button onClick={()=>dispatch(incrementByValue(Number(inpValue)))}>Add</button>
    </div>
  )
}

export default HomePage
