import React, { useState } from 'react';

import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { addToWishlist } from '@store/features/authSlice';
import { addToCart, setProduct } from '@store/features/productSlice';

import { WhiteCart, Trash, Favorite } from '@icons';

const ProductCard = ({
  product,
  showTrashButton = false,
  showRating = false,
  showFavoriteButton = false,
}) => {
  const lang = useSelector((state) => state.lang.lang);
  const [isFavorite, setIsFavorite] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      return navigate('/login');
    }
    dispatch(addToWishlist(product));
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      return navigate('/login');
    } else {
      dispatch(addToCart({ product, quantity: 1 }));
    }
  };

  const translations = {
    en: {
      addToCart: 'Add to Cart',
      outOfStock: 'Out of Stock',
      newLabel: 'New',
    },
    id: {
      addToCart: 'Tambahkan ke Keranjang',
      outOfStock: 'Stok Habis',
      newLabel: 'Baru',
    },
  };

  const text = translations[lang];

  return (
    <div className="rounded overflow-hidden bg-white group">
      <div className="relative">
        <div className="relative h-[153px] md:h-auto lg:h-[250px] bg-secondary-1">
          <img
            alt={product.name}
            className="p-8 md:p-10 relative w-full h-full object-cover"
            src={product.imageUrl}
          />
          <div className="bg-[#363738] h-[41px] flex justify-center items-center absolute bottom-0 w-full rounded-b-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.stock > 0 ? (
              <button
                className="w-full cursor-pointer text-center"
                onClick={handleAddToCart}
              >
                <span className="text-white font-normal text-[10px] md:text-xs">
                  <WhiteCart className="inline-block mr-2 w-[20px] md:w-auto" />
                  {text.addToCart}
                </span>
              </button>
            ) : (
              <div className="w-full text-center">
                <span className="text-white font-normal text-[10px] md:text-xs">
                  <WhiteCart className="inline-block mr-2 w-[20px] md:w-auto" />
                  {text.outOfStock}
                </span>
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
              className={`absolute top-4 right-4 hover:bg-gray-200 rounded-full h-fit shadow-lg ${isFavorite ? 'bg-secondary-3 text-white' : 'bg-white'} p-2`}
              onClick={handleFavoriteClick}
            >
              <Favorite />
            </button>
          )}
          <div className="absolute top-4 left-4 flex gap-2">
            {product.isNew && (
              <span className="bg-green-500 text-white font-normal py-1 px-3 rounded text-xs">
                {text.newLabel}
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
        <div className="font-medium text-sm lg:text-base line-clamp-2">
          <Link
            to={`/products/${product.name.split(' ').join('-')}`}
            onClick={() => dispatch(setProduct(product))}
          >
            {product.name}
          </Link>
        </div>
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
            <div className="hidden lg:block">
              <ReactStars
                activeColor="#FBBF24"
                count={5}
                edit={false}
                isHalf={true}
                size={24}
                value={product.rating}
              />
            </div>
            <div className="blok lg:hidden">
              <ReactStars
                activeColor="#FBBF24"
                count={5}
                edit={false}
                isHalf={true}
                size={16}
                value={product.rating}
              />
            </div>
            <span className="text-gray-600 text-xs lg:text-sm font-semibold">
              ({product.ratingCount})
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

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
    isNew: PropTypes.bool,
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
