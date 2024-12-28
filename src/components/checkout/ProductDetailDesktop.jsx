import React from 'react';

import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DeliveryPlain, Minus, Plus, Return, Reviews, WishList } from '@icons';

import 'swiper/css';
import { useSelector } from 'react-redux';

const ProductDetailDesktop = ({
  product,
  selectedImage,
  selectedVariant,
  onImageClickHandler,
  onVariantClickHandler,
  quantity,
  onAddToCartHandler,
  onQuantityInputChangeHandler,
  onSetQuantityHandler,
}) => {
  const lang = useSelector((state) => state.lang.lang);

  const translations = {
    en: {
      reviews: 'Reviews',
      size: 'Size',
      addToCart: 'Add to Cart',
      freeDelivery: 'Free Delivery',
      deliveryAvailability: 'Enter your postal code for Delivery Availability',
      returnDelivery: 'Return Delivery',
      freeReturns: 'Free 30 Days Delivery Returns.',
      details: 'Details',
    },
    id: {
      reviews: 'Ulasan',
      size: 'Ukuran',
      addToCart: 'Keranjang',
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
    <section className="flex gap-[37px]">
      {/* Product Image */}

      <div className="grow">
        <div className="w-full h-[496px] flex justify-center items-center bg-secondary-1 rounded">
          <img alt="product-image" className="h-[315px]" src={selectedImage} />
        </div>

        <div className="mt-5 max-w-[730px]">
          <Swiper className="mySwiper" slidesPerView={4} spaceBetween={23}>
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-[138px] flex justify-center cursor-pointer rounded bg-secondary-1"
                  onClick={() => onImageClickHandler(image)}
                >
                  <img
                    alt="product-image"
                    className="h[114px] p-3"
                    src={image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Product Details */}
      <div className="w-[405px] mt-[47px]">
        <h1 className="text-2xl leading-6 font-semibold">{product.name}</h1>
        <div className="mt-4 flex items-center gap-2">
          <ReactStars
            activeColor="#FBBF24"
            count={5}
            edit={false}
            isHalf={true}
            size={24}
            value={product.rating}
          />
          <div className="flex items-center gap-4">
            <span className="block text-black opacity-50 text-sm">
              ({product.ratingCount} Reviews)
            </span>

            <span className="block">|</span>
            <span
              className={`block text-sm ${product.stock > 0 ? 'text-button-1' : 'text-button-2'}`}
            >
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
        <h2 className="mt-4 text-2xl">${product.price}</h2>
        <p className="mt-6 mb-6 text-sm">{product.desc}</p>
        <hr className="border-t-[1px] border-black opacity-50" />

        {product.variant && (
          <div className="mt-6 flex items-center gap-6">
            <h3 className="text-xl font-normal">{text.size}:</h3>
            <div className="flex gap-4">
              {product.variant.size.map((size, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 flex justify-center items-center border-[1px] border-black border-opacity-50 rounded hover:bg-button-2 hover:text-text-1 hover:border-none ${selectedVariant === size ? 'bg-button-2 text-text-1 border-none' : ''}`}
                  onClick={() => onVariantClickHandler(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-[58px] flex items-center gap-[13px]">
          <div className="flex items-center">
            <button
              className="flex justify-center items-center w-10 h-11 border-[1px] border-black border-opacity-50 rounded-tl rounded-bl hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
              disabled={quantity < 2}
              onClick={() => onSetQuantityHandler('dec')}
            >
              <Minus />
            </button>
            <input
              className="w-20 h-11 text-center border-y-[1px] border-black border-opacity-50"
              id="quantity"
              name="quantity"
              type="text"
              value={quantity}
              onChange={onQuantityInputChangeHandler}
            />
            <button
              className="flex justify-center items-center w-10 h-11 border-[1px] border-black border-opacity-50 rounded-tr rounded-br hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
              onClick={() => onSetQuantityHandler('inc')}
            >
              <Plus />
            </button>
          </div>
          <div className="w-full flex items-center gap-[2px]">
            <button
              className="py-[10px] px-12 text-text-1 bg-button-2 hover:bg-button-hover-1 rounded"
              onClick={onAddToCartHandler}
            >
              {text.addToCart}
            </button>
            <button className="w-10 h-10 flex justify-center items-center border-[1px] border-black border-opacity-50 rounded">
              <WishList />
            </button>
          </div>
        </div>

        <div className="border-[1px] border-black border-opacity-50 mt-[58px] rounded">
          <div className="mt-6 mb-4 mx-4 flex items-center gap-4 ">
            <div>
              <DeliveryPlain />
            </div>
            <div>
              <h3 className="font-medium">{text.freeDelivery}</h3>
              <p className="mt-2 text-xs underline cursor-pointer">
                {text.deliveryAvailability}
              </p>
            </div>
          </div>
          <div className="border-b-[1px] border-black border-opacity-50"></div>
          <div className="mt-4 mb-6 mx-4 flex items-center gap-4">
            <div>
              <Return />
            </div>
            <div>
              <h3 className="font-medium">{text.returnDelivery}</h3>
              <p className="mt-2 text-xs">
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

ProductDetailDesktop.propTypes = {
  product: PropTypes.object,
  selectedImage: PropTypes.string,
  selectedVariant: PropTypes.string,
  onImageClickHandler: PropTypes.func,
  onVariantClickHandler: PropTypes.func,
  quantity: PropTypes.number,
  onQuantityInputChangeHandler: PropTypes.func,
  onAddToCartHandler: PropTypes.func,
  onSetQuantityHandler: PropTypes.func,
};

export default ProductDetailDesktop;
