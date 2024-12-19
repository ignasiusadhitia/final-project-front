import React from 'react';

import { Link } from 'react-router-dom';

import { EditAddress, DeleteAddress, AddAddress } from '@icons';

const MyOrders = () => {
  const status = ['created', 'process', 'success'];

  return (
    <section className="mt-5 lg:mt-20 flex flex-col px-5 lg:px-20 justify-between py-5 lg:py-12 gap-7 lg:gap-4 w-full lg:w-[870px] h-full lg:h-[630px]">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h3 className="text-base lg:text-xl font-medium text-secondary-3">
            My Orders
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
                    Order No 312312365412
                  </p>
                  <p className="text-base font-normal">
                    ASUS FHD Gaming Laptop (1 items)
                  </p>
                  <p className="text-xs font-normal">...Other items</p>
                </div>
              </div>

              <div className="absolute right-3 flex items-start border">
                <span className="px-4 py-1 font-medium text-xs bg-black text-text-1">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-end">
        <button className="w-[181px] h-11 lg:w-[191px] lg:h-8 bg-secondary-3 rounded-md text-sm lg:text-base font-medium text-text-1">
          Load More
        </button>
      </div>
    </section>
  );
};

export default MyOrders;
