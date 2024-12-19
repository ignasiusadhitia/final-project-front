import React from 'react';

import { Link } from 'react-router-dom';

import { EditAddress, DeleteAddress, AddAddress } from '@icons';

const AddressList = () => {
  return (
    <section className="mt-5 lg:mt-20 flex flex-col px-5 lg:px-20 justify-between py-5 lg:py-12 gap-7 lg:gap-4 w-full lg:w-[870px] h-full lg:h-[630px]">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h3 className="text-base lg:text-xl font-medium text-secondary-3">
            Your Address
          </h3>
          <Link className="block lg:hidden" to={'/my-account/address/add'}>
            <AddAddress />
          </Link>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-row items-center w-full lg:w-[710px] justify-between p-4 bg-secondary-1">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium line-clamp-1">
                Deni Irawan | user@lumoshive.com
              </p>
              <p className="text-sm line-clamp-1">
                Komp. Ruko Green Garden Blk. Z, Jl. Panjang Arteri Klp. Dua Raya
                No.5
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link to={'/my-account/address/edit/1'}>
                <EditAddress />
              </Link>
              <button>
                <DeleteAddress />
              </button>
            </div>
          </div>

          <div className="flex flex-row items-center w-full lg:w-[710px] justify-between p-4 bg-secondary-1">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium line-clamp-1">
                Deni Irawan | user@lumoshive.com
              </p>
              <p className="text-sm line-clamp-1">
                Komp. Ruko Green Garden Blk. Z, Jl. Panjang Arteri Klp. Dua Raya
                No.5
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link to={'/my-account/address/edit/2'}>
                <EditAddress />
              </Link>
              <button>
                <DeleteAddress />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-end items-end">
        <div className="w-full lg:w-auto flex justify-between lg:justify-center lg:items-center gap-2 lg:gap-8">
          <Link
            className="flex justify-center items-center w-[181px] h-11 lg:w-[214px] lg:h-14 bg-secondary-3 rounded-md text-sm lg:text-base font-medium text-text-1"
            to={'/my-account/address/add'}
          >
            Add New Address
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddressList;
