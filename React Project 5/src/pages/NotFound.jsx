import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='p-10 text-center'>
        <h2 className='text-5xl font-bold text-red-600 mb-4'>404</h2>
        <p>Page not found</p>

        <Link to= "/" className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>Go Home</Link>
    </div>
  )
}

export default NotFound;