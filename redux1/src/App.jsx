import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './app/store'
import { decrement, increment } from './features/counterSlice';

const App = () => {
  const dispatch = useDispatch();
  const {count} = useSelector((store) => store.counter)
  return (
    <div className='h-screen bg-black text-white font-bold'>
      <h1 className='text-5xl'>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
