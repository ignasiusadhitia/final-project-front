import React from 'react';

import { CheckoutProductCard } from '@components';
import { EditAddress } from '@icons';
import { bank, productSmall } from '@images';

const user = {
  name: 'Deni Irawan',
  email: 'user@lumoshive.com',
  address:
    'Komp. Ruko Green Garden Blk. Z, Jl. Panjang Arteri Klp. Dua Raya No.5 4 No.15, RT.5/RW.8, Kedoya Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11520',
};

const order = {
  products: [
    { id: 1, img: productSmall, name: 'Game Pad', price: 650 },
    { id: 2, img: productSmall, name: 'Game Pad 2', price: 1100 },
  ],
  shipping: 'Free',
};

const Checkout = () => {
  const subtotal = order.products.reduce(
    (sum, current) => sum + current.price,
    0
  );

  const total = subtotal + (order.shipping === 'Free' ? 0 : order.shipping);

  return (
    <main className="container mt-20">
      <h1 className="text-4xl font-medium">Billing Details</h1>
      <div className="grid grid-cols-2 gap-[4.563rem]">
        {/* Billing Section */}
        <section className="mt-10">
          {/* Address */}
          <div className="w-full">
            <h2 className="text-xl font-medium text-secondary-3">
              Your Address
            </h2>
            <div className="flex items-center gap-[42px] mt-4 mb-[21px] bg-secondary-1 rounded pl-4 pr-[29px]">
              <div className="pt-[13px] pb-5">
                <span className="leading-5 font-semibold">
                  {user?.name} | {user?.email}
                </span>
                <p className="line-clamp-1 leading-6">{user.address}</p>
              </div>
              <div className="cursor-pointer">
                <EditAddress />
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="w-full">
            <h2 className="text-xl font-medium text-secondary-3">
              Your Shipping
            </h2>
            <div className="mt-[9px] mb-7 bg-secondary-1 rounded">
              <div className="py-4 px-[18px]">
                <span className="leading-5 font-semibold">
                  Regular Shipping
                </span>
                <p className="leading-6 text-text-2">
                  Get voucher if your order doesn&apos;t arrive by 19 Nov 2024
                </p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="w-full">
            <h2 className="text-xl font-medium text-secondary-3">Your Note</h2>
            <input
              className="w-full mt-2 border-[1px] border-black rounded border-opacity-80 py-4 px-6"
              placeholder="Message for Sellers"
              type="text"
            />
          </div>
        </section>

        {/* Order Section */}
        <section className="max-w-[427px] mt-10">
          <div className=" flex flex-col gap-8">
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
            <span className="block">${total}</span>
          </div>

          <div className="mt-[34px] mb-8 flex flex-col gap-8 items-start">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-4">
                <input
                  className="w-6 h-6 "
                  id="bank"
                  name="payment"
                  type="radio"
                />
                <label htmlFor="bank">Bank</label>
              </div>
              <div>
                <img alt="bank-payment" src={bank} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input className="w-6 h-6" id="cod" name="payment" type="radio" />
              <label htmlFor="cod">Cash on delivery</label>
            </div>
          </div>

          <button className="w-fit mt-8 block bg-button-2 hover:bg-button-hover-1 text-text-1 rounded py-4 px-12 text-center">
            Place Order
          </button>
        </section>
      </div>
    </main>
  );
};

export default Checkout;
