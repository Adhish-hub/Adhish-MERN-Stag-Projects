import React from 'react'

const AddToCartButton = ({ product, addToCart }) => {
  return (
    <button 
    onClick={() => addToCart(product)} 
    className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700'>
      Add to cart
    </button>
  )
}

export default AddToCartButton