import React from 'react';

import { Delivery, CustomerService, MoneyBack } from '@icons';

const Guarantee = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="flex flex-col gap-5 justify-center items-center lg:p-10 text-center">
        <Delivery className="w-[42px] h-[42px] lg:w-[80px] lg:h-[80px]" />
        <div className="space-y-2">
          <p className="font-semibold text-xs lg:text-xl capitalize">
            FREE AND FAST DELIVERY
          </p>
          <p className="text-xs lg:text-sm">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:p-10 text-center">
        <CustomerService className="w-[42px] h-[42px] lg:w-[80px] lg:h-[80px]" />
        <div className="space-y-2">
          <p className="font-semibold text-xs lg:text-xl capitalize">
            24/7 CUSTOMER SERVICE
          </p>
          <p className="text-xs lg:text-sm">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:p-10 text-center col-span-2 lg:col-span-1">
        <MoneyBack className="w-[42px] h-[42px] lg:w-[80px] lg:h-[80px]" />
        <div className="space-y-2">
          <p className="font-semibold text-xs lg:text-xl capitalize">
            MONEY BACK GUARANTEE
          </p>
          <p className="text-xs lg:text-sm">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
