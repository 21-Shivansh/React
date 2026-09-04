import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col'>
      Contact Page

      <button onClick={() => navigate('/contact/nestedContact')}>Show Component</button>
      <Outlet/>
    </div>
  )
}

export default Contact
