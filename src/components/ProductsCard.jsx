import { WhiteCart, Trash } from '@icons';
import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';


const ProductCard = ({ product, showTrashButton = false }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-white group">
      <div className="relative">
        <div className="relative bg-gray-200">
          <img
            alt={product.name}
            className="p-10 relative"
            src={product.imageUrl}
          />
          <div className="bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.stock > 0 ? (
              <button className="w-full py-3 text-center">
                <span className="bg-black text-white font-bold py-2 px-4 rounded">
                  <WhiteCart className="inline-block mr-2" />
                  Add to Cart
                </span>
              </button>
            ) : (
              <div className="w-full py-3 text-center">
                <span className="text-white font-bold">
                  <WhiteCart className="inline-block mr-2" />
                  Out of Stock</span>
              </div>
            )}
          </div>
          {showTrashButton && (
            <button className="absolute top-4 right-4 hover:bg-gray-200 rounded-full h-fit shadow-lg bg-white p-2">
              <Trash className="" />
            </button>
          )}
        </div>
        {product.discount && (
          <span className="bg-red-500 absolute top-4 left-4 text-white font-bold py-1 px-3 rounded text-xs">
            {product.discount}
          </span>
        )}
      </div>
      <div className="px-3 py-4 h-20">
        <div className="font-bold text-xl line-clamp-2">{product.name}</div>
      </div>
      <div className="px-3">
        <span className="inline-block text-secondary-3 me-3">
          ${product.price}
        </span>
        {product.discount && (
          <span className="line-through text-gray-500">
            ${product.originalPrice}
          </span>
        )}
      </div>
      <div className="flex items-center px-3 pb-4">
        <ReactStars
          count={5}
          value={product.rating}
          isHalf={true}
          edit={false}
          size={24}
          activeColor="#FBBF24"
        />

        <span className="ml-1 me-2">{product.rating}</span>
        <span className="text-gray-600">({product.ratingCount})</span>
      </div>
    </div>
  );
}


ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    originalPrice: PropTypes.string,
    discount: PropTypes.string,
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
    categoryId: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired
  }).isRequired,
  showTrashButton: PropTypes.bool,
};

export default ProductCard;