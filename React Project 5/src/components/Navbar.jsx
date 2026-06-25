import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-600 text-white px-8 py-4 flex justify-between'>
        <h1 className='text-2xl font-bold'>Student Portal</h1>
        <div className='flex gap-6'>
            <Link to="/" className='hover:text-yellow-300'>Home</Link>
            <Link to = "/about" className='hover:text-yellow-300'>About</Link>
            <Link to = "/contact" className='hover:text-yellow-300'>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar