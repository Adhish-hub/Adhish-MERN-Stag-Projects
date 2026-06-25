import React from 'react'
import ProductList from './components/ProductList';
import AddToCartButton from './components/AddToCartButton';
import OutOfStockButton from './components/OutOfStockButton';

const App = () => {
  const products = [
    {
      id: 1,
      title: "laptop",
      price: 55000,
      stock: 5,
    }, 

    {
      id: 2,
      title: "headphones",
      price: 2500,
      stock: 0,
    },
  ];

  const addToCart = (product) => {
    alert(`${product.title} added to cart`)
  }
  return (
    <div className='min-h-screen bg-slate-900 text-white p-10'>
      <h1 className='text-4xl font-bold text-center mb-10'>Product Catalog</h1>
      <ProductList 
      products = {products}
      AddButtonComponent = {AddToCartButton}
      OutOfStockComponent = {OutOfStockButton}
      addToCart = {addToCart}
      />
    </div>
  )
}

export default App