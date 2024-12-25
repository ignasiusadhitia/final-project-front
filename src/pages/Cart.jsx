import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Minus, Plus } from '@icons';
import { productSmall } from '@images';

const order = {
  products: [
    { id: 1, img: productSmall, name: 'Game Pad', price: 650, qty: 12 },
    { id: 2, img: productSmall, name: 'Game Pad 2', price: 1100, qty: 10 },
  ],
  shipping: 'Free',
};

const Cart = () => {
  const [userOrder, setUserOrder] = useState([]);

  const subtotal = order.products.reduce(
    (sum, current) => sum + current.price,
    0
  );

  const total = subtotal + (order.shipping === 'Free' ? 0 : order.shipping);

  const setQuantity = (type) => {
    if (type === 'inc') {
      setUserOrder((prev) => prev.qty + 1);
    }

    if (type === 'dec') {
      setUserOrder((prev) => prev.qty - 1);
    }
  };

  // const handleInputChange = (event) => {
  //   setUserOrder((userOrder.qty = event.target.value));
  // };

  useEffect(() => {
    setUserOrder(order.products);
  }, []);

  return (
    <main className="container mt-6 md:mt-20 mb-6 md:mb-[8.75rem] px-6 md:px-0">
      {/* Desktop Cart */}
      <section className="hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="py-6 px-10 grid grid-cols-4 rounded shadow-md mb-10">
              <th className="font-normal text-base text-left">Product</th>
              <th className="font-normal text-base">Price</th>
              <th className="font-normal text-base">Quantity</th>
              <th className="font-normal text-base text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-10">
            {userOrder?.map((item) => (
              <tr
                key={item?.id}
                className="py-6 px-[66px] grid grid-cols-4 rounded shadow-md"
              >
                <td className="flex items-center justify-start gap-5">
                  <img alt="" src={item.img} />
                  <span>{item.name}</span>
                </td>
                <td className="flex items-center justify-center">
                  ${item.price}
                </td>
                <td className="flex items-center justify-center">
                  <button
                    className="flex justify-center items-center w-10 h-11 border-[1px] border-black border-opacity-50 rounded-tl rounded-bl hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
                    onClick={() => setQuantity('dec')}
                  >
                    <Minus height="32" width="32" />
                  </button>
                  <input
                    className="w-20 h-11 text-center border-y-[1px] border-black border-opacity-50"
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={item.qty}
                    // onChange={handleInputChange}
                  />
                  <button
                    className="flex justify-center items-center w-10 h-11 border-[1px] border-black border-opacity-50 rounded-tr rounded-br hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
                    onClick={() => setQuantity('inc')}
                  >
                    <Plus height="32" width="32" />
                  </button>
                </td>
                <td className="flex items-center justify-end">
                  ${item.price * item.qty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/">
          <span className="block mt-6 py-4 px-12 border-[1px] border-black border-opacity-50 rounded w-fit">
            Return to Shop
          </span>
        </Link>
      </section>

      {/* Mobile Cart */}
      <section className="block md:hidden">
        <ul>
          {userOrder?.map((item) => (
            <li
              key={item?.id}
              className="border-b-[1px] flex flex-col py-6 gap-4"
            >
              <div className="flex justify-between items-center">
                <span className="block text-sm md:text-base">Product</span>
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 ">
                    <img alt="item-image" src={item.img} />
                  </div>
                  <span>{item.name}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="block text-sm md:text-base">Price</span>
                <span className="block text-button-2">${item.price}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="block text-sm md:text-base">Quantity</span>
                <div className="flex items-center justify-center">
                  <button
                    className="flex justify-center items-center w-7 h-7 border-[1px] border-black border-opacity-50 rounded-tl rounded-bl hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
                    onClick={() => setQuantity('dec')}
                  >
                    <Minus height="16" width="16" />
                  </button>
                  <input
                    className="w-12 h-7 text-center border-y-[1px] border-black border-opacity-50"
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={item.qty}
                    // onChange={handleInputChange}
                  />
                  <button
                    className="flex justify-center items-center w-7 h-7 border-[1px] border-black border-opacity-50 rounded-tr rounded-br hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
                    onClick={() => setQuantity('inc')}
                  >
                    <Plus height="16" width="16" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="block text-sm md:text-base">Subtotal</span>
                <span className="block text-button-2 font-semibold">
                  ${item.price * item.qty}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Coupon & Total Cart */}
      <section className="mt-6 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[10.813rem]">
        <form className="h-fit flex flex-col items-end md:items-center md:flex-row gap-4">
          <input
            className="py-4 px-6 border-[1px] w-full md:w-auto border-black border-opacity-50 grow rounded"
            id="coupon"
            name="coupon"
            placeholder="Coupon Code"
            type="text"
          />
          <button className="py-4 px-12 w-fit md:w-auto  bg-button-2 hover:bg-button-hover-1 text-text-1 rounded">
            Apply Coupon
          </button>
        </form>

        <div className="py-8 px-6 border-[1px] border-black rounded">
          <span className="text-base md:text-2xl leading-7 font-medium">
            Cart Total
          </span>

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
            <span className="block">${total}</span>
          </div>

          <div className="flex justify-between">
            <button className="hidden md:block mt-4 mx-auto py-4 px-12 bg-button-2 hover:bg-button-hover-1 rounded text-text-1">
              Proccess to checkout
            </button>
          </div>
        </div>
        <button className="block md:hidden py-4 px-12 bg-button-2 hover:bg-button-hover-1 rounded text-text-1">
          Proccess to checkout
        </button>
      </section>
    </main>
  );
};

export default Cart;
