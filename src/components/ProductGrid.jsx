import React from 'react';
import ProductCard from './ProductsCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-6 my-16">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
