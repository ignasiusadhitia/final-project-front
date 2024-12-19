import React from 'react';

import PropTypes from 'prop-types';

import ProductCard from './ProductsCard';

const ProductGrid = ({ products, gridCols = 3, showTrashButton = false }) => {
  return (
    <div className={`grid grid-cols-${gridCols} gap-6 my-16`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showTrashButton={showTrashButton}
        />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      originalPrice: PropTypes.number,
      discount: PropTypes.number,
      stock: PropTypes.number.isRequired,
      description: PropTypes.string,
      category: PropTypes.string,
    })
  ).isRequired,
  gridCols: PropTypes.number,
  showTrashButton: PropTypes.bool,
};

ProductGrid.defaultProps = {
  gridCols: 3,
};

export default ProductGrid;
