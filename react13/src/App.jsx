import React, { useState } from 'react'
import About from './About';
import Second from './Second'

const App = () => {
  const [count,setCount] = useState(0);
  console.log('App component rendering.......')
  return (
    <div className='h-screen bg-gray-900 text-white'>
      app 
      Count is {count}.
      <p onClick={()=>setCount(count + 1)}>INCREMENT</p>
      <About/>
      <Second/>
    </div>
  )
}

export default App
