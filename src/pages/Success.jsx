import React from 'react';

import { Link } from 'react-router-dom';

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
  const subtotal = order.products.reduce(
    (sum, current) => sum + current.price,
    0
  );

  const total = subtotal + (order.shipping === 'Free' ? 0 : order.shipping);

  return (
    <main className="container px-6 md:px-0">
      <div className="max-w-[27.813rem] mx-auto mt-6 md:mt-[4.438rem]">
        {order?.products?.length !== 0 ? (
          <>
            <h1 className="w-full text-left md:text-center text-base md:text-4xl font-medium">
              Order Success
            </h1>
            <div className=" flex flex-col mt-4 md:mt-[4.563rem] gap-8">
              {order.products.map((item) => (
                <CheckoutProductCard key={item.id} product={item} />
              ))}
            </div>

            <div className="flex justify-between mt-8 pb-4 border-b-[1px] border-black border-opacity-30 ">
              <span className="block">Subtotal:</span>
              <span className="block">${subtotal}</span>
            </div>

            <div className="flex justify-between py-4 border-b-[1px] border-black border-opacity-30">
              <span className="block">Shipping:</span>
              <span className="block">
                {order?.shipping === 'Free'
                  ? order?.shipping
                  : '$' + order?.shipping}
              </span>
            </div>

            <div className="flex justify-between mt-4">
              <span className="block">Total:</span>
              <span className="block font-semibold md:font-normal">
                ${total}
              </span>
            </div>

            <Link
              className="w-full mt-8 mb-12 md:mb-0 block bg-button-2 hover:bg-button-hover-1 text-text-1 rounded py-4 text-center"
              to="/"
            >
              Back to Home
            </Link>
          </>
        ) : (
          <>
            <h1 className="w-full text-center text-4xl font-medium">
              Something wrong!
            </h1>
            <p className="text-center my-12">Please try again later.</p>
            <Link
              className="w-full block bg-button-2 hover:bg-button-hover-1 text-text-1 rounded py-4 text-center"
              to="/cart"
            >
              Back to Cart
            </Link>
          </>
        )}
      </div>
    </main>
  );
};

export default Success;
