import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  AddButtonComponent,
  OutOfStockComponent,
  addToCart,
}) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          AddButtonComponent={AddButtonComponent}
          OutOfStockComponent={OutOfStockComponent}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
