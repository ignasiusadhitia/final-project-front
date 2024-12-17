import { Cart } from '@icons';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-white group">
      <div className="relative">
        <div className="relative bg-gray-200">
          <img className="p-10 relative" src={product.imageUrl} alt={product.name} />
          <div className="bottom-0 left-0 right-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.stock > 0 ? (
              <button className="w-full py-3 text-center">
                <span className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  <Cart className="inline-block mr-2" />
                  Add to Cart
                </span>
              </button>
            ) : (
              <div className="w-full py-3 text-center">
                <span className="text-white font-bold">
                  <Cart className="inline-block mr-2" />
                  Out of Stock</span>
              </div>
            )}
          </div>
        </div>
        {product.discount && (
          <span className="bg-red-500 absolute top-4 left-4 text-white font-bold py-1 px-3 rounded text-xs">{product.discount}</span>
        )}
      </div>
      <div className="px-3 py-4 h-20">
        <div className="font-bold text-xl line-clamp-2">{product.name}</div>
      </div>
      <div className="px-3 pb-4">
        <span className="inline-block text-secondary-3 me-3">${product.price}</span>
        {product.discount && (
          <span className="line-through text-gray-500">${product.originalPrice}</span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;