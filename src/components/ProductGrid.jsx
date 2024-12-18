import React from 'react';

import ProductCard from './ProductsCard';

const ProductGrid = ({ products, gridCols = 3 }) => {
  return (
    <div className={`grid grid-cols-${gridCols} gap-6 my-16`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
