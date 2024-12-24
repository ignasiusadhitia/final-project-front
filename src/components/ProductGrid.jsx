import React from 'react';

import ProductCard from './ProductsCard';
import PropTypes from 'prop-types';

const ProductGrid = ({ products, gridCols = 3, showTrashButton = false, showRating = false, showFavoriteButton = false }) => {
  const gridColsClass = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-2 md:${gridColsClass[gridCols]} gap-6 my-3 lg:my-16`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} showTrashButton={showTrashButton} showRating={showRating} showFavoriteButton={showFavoriteButton} />
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
      category: PropTypes.string
    })
  ).isRequired,
  gridCols: PropTypes.number,
  showTrashButton: PropTypes.bool,
  showRating: PropTypes.bool,
  showFavoriteButton: PropTypes.bool,
};

ProductGrid.defaultProps = {
  gridCols: 3,
  showTrashButton: false,
  showFavoriteButton: false,
};

export default ProductGrid;