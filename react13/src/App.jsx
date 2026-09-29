import React, { useCallback, useMemo, useState } from 'react'
import About from './About';
import Second from './Second'

const App = () => {
  const [count,setCount] = useState(0);
  console.log('App component rendering.......')

  // const greet = () => {
  //   console.log('Hello from Aboutgreet function.....')
  // }

  let a = useMemo(()=>{
    return 100;
  },[])

  const secondGreet = useCallback(() => {
    console.log('Hello from secondGreet function......')
  },[])//to memoize the reference of reference data types


  return (
    <div className='h-screen bg-gray-900 text-white'>
      app 
      Count is {count}.
      <p onClick={()=>setCount(count + 1)}>INCREMENT</p>
      <About abc={a}/>
      <Second secondGreet={secondGreet}/>
    </div>
  )
}

export default App
