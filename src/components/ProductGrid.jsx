import React from 'react';
import ProductCard from './ProductsCard';

const ProductGrid = ({ products, gridCols = 3 }) => {
  const gridColsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={`grid ${gridColsClass[gridCols]} gap-6 my-16`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
