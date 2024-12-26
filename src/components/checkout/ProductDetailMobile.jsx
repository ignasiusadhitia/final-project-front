import React from 'react';

import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';

import { DeliveryPlain, Return } from '@icons';

const ProductDetailMobile = ({ product }) => {
  return (
    <section className="flex gap-[37px] px-6">
      {/* Product Image */}

      {/* <div className="grow">
        <div className="w-full h-[496px] flex justify-center items-center bg-secondary-1 rounded">
          <img alt="product-image" className="h-[315px]" src={selectedImage} />
        </div>

        <div className="mt-5 grid grid-cols-4 gap-[23px]">
          {product.images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[138px] flex justify-center items-center cursor-pointer rounded bg-secondary-1"
              onClick={() => onImageClickHandler(image)}
            >
              <img alt="product-image" className="h-[114px] p-3" src={image} />
            </div>
          ))}
        </div>
      </div> */}
      {/* Product Details */}
      <div className="w-full mt-6">
        <h1 className="text-xl leading-5 font-semibold">{product.name}</h1>
        <h2 className="mt-3 text-xl leading-5">${product.price}</h2>
        <div className="mt-4 flex items-center gap-2">
          <ReactStars
            activeColor="#FBBF24"
            count={5}
            edit={false}
            isHalf={true}
            size={16}
            value={product.rating}
          />
          <div className="flex items-center gap-4">
            <span className="block text-black opacity-50 text-xs">
              ({product.ratingCount} Reviews)
            </span>

            <span className="block">|</span>
            <span
              className={`block text-xs ${product.stock > 0 ? 'text-button-1' : 'text-button-2'}`}
            >
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
        <p className="mt-3 mb-6 text-xs">{product.desc}</p>
        <hr className="border-t-[1px] border-black opacity-50" />

        <div className="mt-6 grid grid-cols-2">
          <div className="flex items-center gap-4 ">
            <div>
              <DeliveryPlain height={32} width={32} />
            </div>
            <div>
              <h3 className="font-medium text-sm">Free Delivery</h3>
              <p className="mt-2 text-[8px] underline cursor-pointer">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <Return height={32} width={32} />
            </div>
            <div>
              <h3 className="font-medium text-sm">Return Delivery</h3>
              <p className="mt-2 text-[8px]">
                Free 30 Days Delivery Returns.{' '}
                <span className="cursor-pointer underline">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductDetailMobile.propTypes = {
  product: PropTypes.object,
  selectedImage: PropTypes.string,
  selectedVariant: PropTypes.string,
  onImageClickHandler: PropTypes.func,
  onVariantClickHandler: PropTypes.func,
};

export default ProductDetailMobile;
