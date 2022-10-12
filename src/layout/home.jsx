import React from 'react'
import Navbar from '../components/header/navbar'
function Home({children}) {
  return (
    <div className='mx-auto'>
        <Navbar/>
        {children}
    </div>
  )
}

export default Home