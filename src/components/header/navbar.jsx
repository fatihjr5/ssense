import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-black flex justify-between items-center px-10 lg:px-16 py-6 z-40 w-full absolute top-0 left-0'>
      <h5 className="font-extrabold text-xl tracking-tighter text-white">SSense.</h5>
      <div className="flex flex-row gap-x-8">
        <div className="flex items-center flex-row gap-x-4 text-white">
            <Link to='/' className='hover:text-wavy'>Home</Link>
            <Link to='/composition'>Composition</Link>
        </div>
        <button className="px-4 py-2 bg-white rounded-lg">Login</button>
      </div>
    </div>
  )
}

export default Navbar