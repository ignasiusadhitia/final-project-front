import React from 'react';

import { useSelector } from 'react-redux';

const MyOrders = () => {
  const status = ['created', 'process', 'success'];
  const lang = useSelector((state) => state.lang.lang);

  const translations = {
    en: {
      myOrders: 'My Orders',
      orderNo: 'Order No',
      items: 'items',
      otherItems: '...Other items',
      loadMore: 'Load More',
      status: {
        created: 'created',
        process: 'process',
        success: 'success',
      },
    },
    id: {
      myOrders: 'Pesanan Saya',
      orderNo: 'Nomor Pesanan',
      items: 'barang',
      otherItems: '...Barang lainnya',
      loadMore: 'Muat Lebih Banyak',
      status: {
        created: 'dibuat',
        process: 'diproses',
        success: 'berhasil',
      },
    },
  };

  const text = translations[lang];

  return (
    <section className="mt-5 lg:mt-20 flex flex-col px-5 lg:px-20 justify-between py-5 lg:py-12 gap-7 lg:gap-4 w-full lg:w-[870px] h-full lg:h-[630px]">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h3 className="text-base lg:text-xl font-medium text-secondary-3">
            {text.myOrders}
          </h3>
        </div>
        <div className="relative flex flex-col gap-3 lg:gap-6 justify-between">
          {status.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-start w-full lg:w-[710px] justify-between py-4 px-8 bg-secondary-1"
            >
              <div className="flex flex-col lg:flex-row gap-7 lg:gap-12">
                <div>
                  <img alt="order-item" src="https://picsum.photos/80/80" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold">
                    {text.orderNo} 312312365412
                  </p>
                  <p className="text-base font-normal">
                    ASUS FHD Gaming Laptop (1 {text.items})
                  </p>
                  <p className="text-xs font-normal">{text.otherItems}</p>
                </div>
              </div>

              <div className="absolute right-3 flex items-start border">
                <span className="px-4 py-1 font-medium text-xs bg-black text-text-1">
                  {text.status[item]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-end">
        <button className="w-[181px] h-11 lg:w-[191px] lg:h-8 bg-secondary-3 rounded-md text-sm lg:text-base font-medium text-text-1">
          {text.loadMore}
        </button>
      </div>
    </section>
  );
};

export default MyOrders;
