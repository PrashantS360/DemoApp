import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly py-4 items-center'>
        <Link href="/"><a className='text-xl font-bold cursor-pointer'>E-Store</a></Link>
        <input className='shadow-md shadow-gray-300 py-3 px-4 outline-none rounded-md w-[40%]' type="text" placeholder='Search stocks by tickers'/>
        <button className='text-white bg-[#2874f0] px-7 py-2 text-[1.1rem] rounded-md'>Login / Signup</button>
    </div>
  )
}

export default Navbar