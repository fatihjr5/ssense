import React from 'react'
import { FcGoogle } from 'react-icons/fc'
function Google() {
  return (
    <div>
        <button className="px-4 py-2 rounded-lg bg-white flex items-center gap-x-2">
            <FcGoogle/>
            <span className='text-base font-semibold tracking-tight'>Login with Google</span>
        </button>
    </div>
  )
}

export default Google