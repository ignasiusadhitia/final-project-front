import React from 'react';

import { CheckoutProductCard } from '@components';
import { EditAddress } from '@icons';
import { bank, productSmall } from '@images';
import { useSelector } from 'react-redux';

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
  const lang = useSelector((state) => state.lang.lang);
  const subtotal = order.products.reduce(
    (sum, current) => sum + current.price,
    0
  );

  const total = subtotal + (order.shipping === 'Free' ? 0 : order.shipping);

  const translations = {
    en: {
      billingDetails: "Billing Details",
      yourAddress: "Your Address",
      yourShipping: "Your Shipping",
      yourNote: "Your Note",
      messagePlaceholder: "Message for Sellers",
      subtotal: "Subtotal",
      shipping: "Shipping",
      total: "Total",
      paymentMethod: "Payment Method",
      bank: "Bank",
      cod: "Cash on delivery",
      placeOrder: "Place Order",
      regularShipping: "Regular Shipping",
      shippingVoucher:
        "Get voucher if your order doesn't arrive by 19 Nov 2024",
    },
    id: {
      billingDetails: "Detail Tagihan",
      yourAddress: "Alamat Anda",
      yourShipping: "Pengiriman Anda",
      yourNote: "Catatan Anda",
      messagePlaceholder: "Pesan untuk Penjual",
      subtotal: "Subtotal",
      shipping: "Pengiriman",
      total: "Total",
      paymentMethod: "Metode Pembayaran",
      bank: "Bank",
      cod: "Bayar di Tempat",
      placeOrder: "Pesan Sekarang",
      regularShipping: "Pengiriman Reguler",
      shippingVoucher:
        "Dapatkan voucher jika pesanan Anda tidak tiba pada 19 Nov 2024",
    },
  };

  const text = translations[lang];

  return (
    <main className="container lg:pb-96 mt-6 md:mt-20 px-6 md:px-0">
      <h1 className="text-base md:text-4xl font-medium">{text.billingDetails}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[4.563rem]">
        {/* Billing Section */}
        <section className="mt-4 md:mt-10">
          {/* Address */}
          <div className="w-full">
            <h2 className="text-base md:text-xl font-medium text-secondary-3">
              {text.yourAddress}
            </h2>
            <div className="flex items-center gap-4 md:gap-[42px] mt-4 mb-[21px] bg-secondary-1 rounded pl-4 pr-[21px] md:pr-[29px]">
              <div className="pt-[13px] pb-5">
                <p className="text-sm md:text-base leading-5 font-semibold">
                  {user?.name} | {user?.email}
                </p>
                <p className=" text-sm md:text-base line-clamp-1 leading-6">
                  {user.address}
                </p>
              </div>
              <div className="cursor-pointer">
                <EditAddress />
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="w-full">
            <h2 className="text-base md:text-xl font-medium text-secondary-3">
              {text.yourShipping}
            </h2>
            <div className="mt-[9px] mb-7 bg-secondary-1 rounded">
              <div className="py-4 px-[18px]">
                <span className="leading-5 font-semibold">
                  {text.regularShipping}
                </span>
                <p className="text-sm md:text-base leading-6 text-text-2">
                  {text.shippingVoucher}
                </p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="w-full">
            <h2 className="text-base md:text-xl font-medium text-secondary-3">
              {text.yourNote}
            </h2>
            <input
              className="w-full mt-2 border-[1px] text-sm md:text-base border-black rounded border-opacity-80 py-4 px-6"
              placeholder="Message for Sellers"
              type="text"
            />
          </div>
        </section>

        {/* Order Section */}
        <section className="max-w-[427px] mt-12 md:mt-10 mb-6 md:mb-0">
          <div className=" flex flex-col gap-8">
            {order.products.map((item) => (
              <CheckoutProductCard key={item.id} product={item} />
            ))}
          </div>

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
            <span className="block">{text.total}:</span>
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
                <label htmlFor="bank">{text.bank}</label>
              </div>
              <div>
                <img alt="bank-payment" src={bank} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input className="w-6 h-6" id="cod" name="payment" type="radio" />
              <label htmlFor="cod">{text.cod}</label>
            </div>
          </div>

          <button className="w-full md:w-fit mt-8 block bg-button-2 hover:bg-button-hover-1 text-text-1 rounded py-4 px-12 text-center">
            {text.placeOrder}
          </button>
        </section>
      </div>
    </main>
  );
};

export default Checkout;
