import React from 'react'

const OutOfStockButton = () => {
  return (
    <button 
    disabled 
    className='bg-gray-500 text-white px-5 py-2 rounded-lg cursor-not-allowed'>
        Out of stock
    </button>
  )
}

export default OutOfStockButton