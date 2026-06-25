import React from 'react'

const ProductCard = ({ product,AddButtonComponent, OutOfStockComponent, addToCart }) => {
  return (
    <div className='w-72 bg-white text-black rounded-2xl p-6 shadow-lg'>
        <h2 className='text-2xl font-bold mb-3'>{product.title}</h2>

        <p className='text-gray-700'>Price : {product.price}</p>
        <p className='text-gray-700 mb-5'>Stock : {product.stock}</p>

        {product.stock > 0 ? (
            <AddButtonComponent product = {product} addToCart = {addToCart}/>
        ) : (
            <OutOfStockComponent />
        )}
    </div>
  )
}

export default ProductCard