import React from 'react';

import { Delivery, CustomerService, MoneyBack } from '@icons';
import { useSelector } from 'react-redux';

const Guarantee = () => {
  const lang = useSelector((state) => state.lang.lang);

  const translations = {
    en: {
      freeAndFastDelivery: 'FREE AND FAST DELIVERY',
      freeDeliveryDescription: 'Free delivery for all orders over $140',
      customerService: '24/7 CUSTOMER SERVICE',
      customerServiceDescription: 'Friendly 24/7 customer support',
      moneyBackGuarantee: 'MONEY BACK GUARANTEE',
      moneyBackDescription: 'We return money within 30 days',
    },
    id: {
      freeAndFastDelivery: 'PENGIRIMAN CEPAT & GRATIS',
      freeDeliveryDescription: 'Pengiriman gratis untuk semua pesanan di atas $140',
      customerService: 'LAYANAN PELANGGAN 24/7',
      customerServiceDescription: 'Dukungan pelanggan ramah 24/7',
      moneyBackGuarantee: 'JAMINAN UANG KEMBALI',
      moneyBackDescription: 'Kami mengembalikan uang dalam 30 hari',
    },
  };

  const text = translations[lang];
  
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="flex flex-col gap-5 justify-center items-center lg:p-10 text-center">
        <Delivery className="w-[42px] h-[42px] lg:w-[80px] lg:h-[80px]" />
        <div className="space-y-2">
          <p className="font-semibold text-xs lg:text-xl capitalize">
            {text.freeAndFastDelivery}
          </p>
          <p className="text-xs lg:text-sm">
            {text.freeDeliveryDescription}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:p-10 text-center">
        <CustomerService className="w-[42px] h-[42px] lg:w-[80px] lg:h-[80px]" />
        <div className="space-y-2">
          <p className="font-semibold text-xs lg:text-xl capitalize">
            {text.customerService}
          </p>
          <p className="text-xs lg:text-sm">{text.customerServiceDescription}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:p-10 text-center col-span-2 lg:col-span-1">
        <MoneyBack className="w-[42px] h-[42px] lg:w-[80px] lg:h-[80px]" />
        <div className="space-y-2">
          <p className="font-semibold text-xs lg:text-xl capitalize">
            {text.moneyBackGuarantee}
          </p>
          <p className="text-xs lg:text-sm">{text.moneyBackDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
