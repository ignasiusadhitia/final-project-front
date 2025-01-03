import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearCart, selectCartSubtotal } from '@store/features/productSlice';

import { CheckoutProductCard } from '@components';
import { productSmall } from '@images';

const order = {
  products: [
    { id: 1, img: productSmall, name: 'Game Pad', price: 650 },
    { id: 2, img: productSmall, name: 'Game Pad 2', price: 1100 },
  ],
  shipping: 'Free',
};

const Success = () => {
  const { cart } = useSelector((state) => state.product);
  const subtotal = useSelector(selectCartSubtotal);
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();

  const translations = {
    en: {
      orderSuccess: 'Order Success',
      somethingWrong: 'Something wrong!',
      tryAgain: 'Please try again later.',
      subtotal: 'Subtotal:',
      shipping: 'Shipping:',
      total: 'Total:',
      backToHome: 'Back to Home',
      backToCart: 'Back to Cart',
      free: 'Free',
    },
    id: {
      orderSuccess: 'Pesanan Berhasil',
      somethingWrong: 'Ada yang salah!',
      tryAgain: 'Silakan coba lagi nanti.',
      subtotal: 'Subtotal:',
      shipping: 'Pengiriman:',
      total: 'Total:',
      backToHome: 'Kembali ke Beranda',
      backToCart: 'Kembali ke Keranjang',
      free: 'Gratis',
    },
  };
  const t = translations[lang];

  const total = subtotal + (order.shipping === 'Free' ? 0 : order.shipping);

  return (
    <main className="container lg:pb-96 px-6 md:px-0">
      <div className="max-w-[27.813rem] mx-auto mt-6 md:mt-[4.438rem]">
        {order?.products?.length !== 0 ? (
          <>
            <h1 className="w-full text-left md:text-center text-base md:text-4xl font-medium">
              {t.orderSuccess}
            </h1>
            <div className="flex flex-col mt-4 md:mt-[4.563rem] gap-8">
              {cart.map((item) => (
                <CheckoutProductCard key={item.id} product={item} />
              ))}
            </div>

            <div className="flex justify-between mt-8 pb-4 border-b-[1px] border-black border-opacity-30">
              <span className="block">{t.subtotal}</span>
              <span className="block">${subtotal}</span>
            </div>

            <div className="flex justify-between py-4 border-b-[1px] border-black border-opacity-30">
              <span className="block">{t.shipping}</span>
              <span className="block">
                {order?.shipping === 'Free' ? t.free : '$' + order?.shipping}
              </span>
            </div>

            <div className="flex justify-between mt-4">
              <span className="block">{t.total}</span>
              <span className="block font-semibold md:font-normal">
                ${total}
              </span>
            </div>

            <Link
              className="w-full mt-8 mb-12 md:mb-0 block bg-button-2 hover:bg-button-hover-1 text-text-1 rounded py-4 text-center"
              to="/"
              onClick={() => dispatch(clearCart())}
            >
              {t.backToHome}
            </Link>
          </>
        ) : (
          <>
            <h1 className="w-full text-center text-4xl font-medium">
              {t.somethingWrong}
            </h1>
            <p className="text-center my-12">{t.tryAgain}</p>
            <Link
              className="w-full block bg-button-2 hover:bg-button-hover-1 text-text-1 rounded py-4 text-center"
              to="/cart"
            >
              {t.backToCart}
            </Link>
          </>
        )}
      </div>
    </main>
  );
};

export default Success;
