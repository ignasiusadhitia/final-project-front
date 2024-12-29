import React from 'react';

import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import { useSelector } from 'react-redux';

import { DeliveryPlain, Return } from '@icons';

const ProductDetailMobile = ({ product }) => {
  const lang = useSelector((state) => state.lang.lang);

  const translations = {
    en: {
      reviews: 'Reviews',
      freeDelivery: 'Free Delivery',
      deliveryAvailability: 'Enter your postal code for Delivery Availability',
      returnDelivery: 'Return Delivery',
      freeReturns: 'Free 30 Days Delivery Returns.',
      details: 'Details',
    },
    id: {
      reviews: 'Ulasan',
      freeDelivery: 'Pengiriman Gratis',
      deliveryAvailability:
        'Masukkan kode pos Anda untuk ketersediaan pengiriman',
      returnDelivery: 'Pengembalian Pengiriman',
      freeReturns: 'Gratis pengembalian dalam 30 hari.',
      details: 'Rinci',
    },
  };

  const text = translations[lang];

  return (
    <section className="flex gap-[37px] px-6">
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
              ({product.ratingCount} {text.reviews})
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
              <h3 className="font-medium text-sm">{text.freeDelivery}</h3>
              <p className="mt-2 text-[8px] underline cursor-pointer">
                {text.deliveryAvailability}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <Return height={32} width={32} />
            </div>
            <div>
              <h3 className="font-medium text-sm">{text.returnDelivery}</h3>
              <p className="mt-2 text-[8px]">
                {text.freeReturns}.{' '}
                <span className="cursor-pointer underline">{text.details}</span>
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
