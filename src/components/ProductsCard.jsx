import { WhiteCart, Trash, Favorite } from '@icons';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';


const ProductCard = ({ product, showTrashButton = false, showRating = false, showFavoriteButton = false }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="max-w-[173px] lg:min-w-[270px] rounded overflow-hidden bg-white group">
      <div className="relative">
        <div className="relative bg-secondary-1">
          <img
            alt={product.name}
            className="p-10 relative"
            src={product.imageUrl}
          />
          <div className="bg-black rounded-b-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.stock > 0 ? (
              <button className="w-full py-3 text-center">
                <span className="bg-black text-white font-normal text-xs py-2 px-4">
                  <WhiteCart className="inline-block mr-2" />
                  Add to Cart
                </span>
              </button>
            ) : (
              <div className="w-full py-3 text-center">
                <span className="text-white font-normal text-xs">
                  <WhiteCart className="inline-block mr-2" />
                  Out of Stock</span>
              </div>
            )}
          </div>
          {showTrashButton && (
            <button className="absolute top-4 right-4 hover:bg-gray-200 rounded-full h-fit shadow-lg bg-white p-2">
              <Trash />
            </button>
          )}
          {showFavoriteButton && (
            <button
              onClick={handleFavoriteClick}
              className={`absolute top-4 right-4 hover:bg-gray-200 rounded-full h-fit shadow-lg ${isFavorite ? "bg-secondary-3" : "bg-white"} p-2`}
            >
              <Favorite />
            </button>
          )}
          <div className="absolute top-4 left-4 flex gap-2">
            {product.isNew && (
              <span className="bg-green-500 text-white font-normal py-1 px-3 rounded text-xs">
                New
              </span>
            )}
            {product.discount && (
              <span className="bg-secondary-3 text-white font-normal py-1 px-3 rounded text-xs">
                {product.discount}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="px-3 py-4">
        <div className="font-medium text-sm lg:text-base line-clamp-2">{product.name}</div>
      </div>
      <div className="px-3">
        <span className="inline-block text-sm lg:text-base font-medium text-secondary-3 me-3">
          ${product.price}
        </span>
        {product.discount && (
          <span className="line-through text-sm lg:text-base text-gray-500">
            ${product.originalPrice}
          </span>
        )}
      </div>
      <div className="flex items-center px-3 pb-4">
        {showRating && (
          <div className="flex gap-2 items-center mt-1">
            <div className='hidden lg:block'>
              <ReactStars
                count={5}
                value={product.rating}
                isHalf={true}
                edit={false}
                size={24}
                activeColor="#FBBF24"
              />
            </div>
            <div className='blok lg:hidden'>
              <ReactStars
                count={5}
                value={product.rating}
                isHalf={true}
                edit={false}
                size={16}
                activeColor="#FBBF24"
              />
            </div>
            <span className="text-gray-600 text-xs lg:text-sm font-semibold">({product.ratingCount})</span>
          </div>
        )}
      </div>
    </div>);
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
    stock: PropTypes.number.isRequired,
    isNew: PropTypes.bool
  }).isRequired,
  showTrashButton: PropTypes.bool,
  showRating: PropTypes.bool,
  showFavoriteButton: PropTypes.bool,
};

ProductCard.defaultProps = {
  showTrashButton: false,
  showFavoriteButton: false,
  showRating: false,
};
export default ProductCard;