import React from 'react'
import { BsFacebook } from 'react-icons/bs'
function Facebook() {
  return (
    <div>
        <button className="px-4 py-2 rounded-lg bg-white flex items-center gap-x-2">
            <BsFacebook className='text-blue-500'/>
            <span className='text-base font-semibold tracking-tight'>Login with Facebook</span>
        </button>
    </div>
  )
}

export default Facebook