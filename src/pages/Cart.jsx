import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Minus, Plus } from '@icons';
import { productSmall } from '@images';
import { useSelector } from 'react-redux';

const order = {
  products: [
    { id: 1, img: productSmall, name: 'Game Pad', price: 650, qty: 12 },
    { id: 2, img: productSmall, name: 'Game Pad 2', price: 1100, qty: 10 },
  ],
  shipping: 'Free',
};

const Cart = () => {
  const [userOrder, setUserOrder] = useState([]);
  const lang = useSelector((state) => state.lang.lang);

  const subtotal = order.products.reduce(
    (sum, current) => sum + current.price,
    0
  );

  const total = subtotal + (order.shipping === 'Free' ? 0 : order.shipping);

  const setQuantity = (id, type) => {
    setUserOrder((prevOrders) =>
      prevOrders.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === 'inc' ? item.qty + 1 : Math.max(item.qty - 1, 0),
            }
          : item
      )
    );
  };

  const handleInputChange = (id, event) => {
    const newQty = Math.max(0, parseInt(event.target.value, 10) || 0);
    setUserOrder((prevOrders) =>
      prevOrders.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  useEffect(() => {
    setUserOrder(order.products);
  }, []);

  const translations = {
    en: {
      product: "Product",
      price: "Price",
      quantity: "Quantity",
      subtotal: "Subtotal",
      shipping: "Shipping",
      couponCode: "Coupon Code",
      applyCoupon: "Apply Coupon",
      cartTotal: "Cart Total",
      returnToShop: "Return to Shop",
      freeShipping: "Free",
      processToCheckout: "Process to checkout",
    },
    id: {
      product: "Produk",
      price: "Harga",
      quantity: "Jumlah",
      subtotal: "Subtotal",
      shipping: "Pengiriman",
      couponCode: "Kode Kupon",
      applyCoupon: "Terapkan Kupon",
      cartTotal: "Total Keranjang",
      returnToShop: "Kembali ke Toko",
      freeShipping: "Gratis",
      processToCheckout: "Proses ke Checkout",
    },
  };

  const text = translations[lang];

  return (
    <main className="container mt-6 md:mt-20 mb-6 md:mb-[8.75rem] px-6 md:px-0">
      {/* Desktop Cart */}
      <section className="hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="py-6 px-10 grid grid-cols-4 rounded shadow-md mb-10">
              <th className="font-normal text-base text-left">{text.product}</th>
              <th className="font-normal text-base">{text.price}</th>
              <th className="font-normal text-base">{text.quantity}</th>
              <th className="font-normal text-base text-right">{text.subtotal}</th>
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
                    onClick={() => setQuantity(item.id, 'dec')}
                  >
                    <Minus height="32" width="32" />
                  </button>
                  <input
                    className="w-20 h-11 text-center border-y-[1px] border-black border-opacity-50"
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={item.qty}
                    onChange={(event) => handleInputChange(item.id, event)}
                  />
                  <button
                    className="flex justify-center items-center w-10 h-11 border-[1px] border-black border-opacity-50 rounded-tr rounded-br hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
                    onClick={() => setQuantity(item.id, 'inc')}
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
            {text.returnToShop}
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
                <span className="block text-sm md:text-base">{text.price}</span>
                <span className="block text-button-2">${item.price}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="block text-sm md:text-base">{text.quantity}</span>
                <div className="flex items-center justify-center">
                  <button
                    className="flex justify-center items-center w-7 h-7 border-[1px] border-black border-opacity-50 rounded-tl rounded-bl hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
                    onClick={() => setQuantity(item.id, 'dec')}
                  >
                    <Minus height="16" width="16" />
                  </button>
                  <input
                    className="w-12 h-7 text-center border-y-[1px] border-black border-opacity-50"
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={item.qty}
                    onChange={(event) => handleInputChange(item.id, event)}
                  />
                  <button
                    className="flex justify-center items-center w-7 h-7 border-[1px] border-black border-opacity-50 rounded-tr rounded-br hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
                    onClick={() => setQuantity(item.id, 'inc')}
                  >
                    <Plus height="16" width="16" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="block text-sm md:text-base">{text.subtotal}</span>
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
            placeholder={text.couponCode}
            type="text"
          />
          <button className="py-4 px-12 w-fit md:w-auto  bg-button-2 hover:bg-button-hover-1 text-text-1 rounded">
            {text.applyCoupon}
          </button>
        </form>

        <div className="py-8 px-6 border-[1px] border-black rounded">
          <span className="text-base md:text-2xl leading-7 font-medium">
            {text.cartTotal}
          </span>

          <div className="flex justify-between mt-8 pb-4 border-b-[1px] border-black border-opacity-30 ">
            <span className="block">{text.subtotal}:</span>
            <span className="block">${subtotal}</span>
          </div>

          <div className="flex justify-between py-4 border-b-[1px] border-black border-opacity-30">
            <span className="block">{text.shipping}:</span>
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
            <Link to={'/checkout'} className="hidden text-center md:block mt-4 mx-auto py-4 px-12 bg-button-2 hover:bg-button-hover-1 rounded text-text-1">
              {text.processToCheckout}
            </Link>
          </div>
        </div>
        <Link to={'/checkout'} className="block text-center md:hidden py-4 px-12 bg-button-2 hover:bg-button-hover-1 rounded text-text-1">
          {text.processToCheckout}
        </Link>
      </section>
    </main>
  );
};

export default Cart;
