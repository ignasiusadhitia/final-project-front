import React from 'react';

import PropTypes from 'prop-types';

import ProductCard from './ProductsCard';
import { useSelector } from 'react-redux';

const ProductGrid = ({
  products,
  gridCols = 3,
  showTrashButton = false,
  showRating = false,
  showFavoriteButton = false,
}) => {
  const gridColsClass = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  const lang = useSelector((state) => state.lang.lang);

  return (
    <div
      className={`grid grid-cols-2 md:${gridColsClass[gridCols]} gap-6 my-3 lg:my-16`}
    >
      {products.length === 0 && (
        <div className='min-w-full md:max-w-[270px]'>
          <p>{lang === 'en' ? 'Empty' : 'Kosong'}</p>
        </div>
      )}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showFavoriteButton={showFavoriteButton}
          showRating={showRating}
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
  showRating: PropTypes.bool,
  showFavoriteButton: PropTypes.bool,
};

ProductGrid.defaultProps = {
  gridCols: 3,
  showTrashButton: false,
  showFavoriteButton: false,
};

export default ProductGrid;
