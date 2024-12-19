import React from 'react';
import ProductCard from './ProductsCard';
import PropTypes from 'prop-types';

const ProductGrid = ({ products, gridCols = 3 }) => {

  return (
    <div className={`grid grid-cols-${gridCols} gap-6 my-16`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} showTrashButton={false} />
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
      price: PropTypes.string.isRequired,
      originalPrice: PropTypes.string,
      discount: PropTypes.string,
      stock: PropTypes.number.isRequired
    })
  ).isRequired,
  gridCols: PropTypes.oneOf([2, 3, 4])
};

ProductGrid.defaultProps = {
  gridCols: 3
};

export default ProductGrid;
