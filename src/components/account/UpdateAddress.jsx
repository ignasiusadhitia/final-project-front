import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

const UpdateAddress = () => {
  const { id } = useParams;
  const [isEdit, setIsEdit] = useState(id ? true : false);

  return (
    <section className="mt-5 lg:mt-20 flex flex-col px-5 lg:px-20 justify-between py-5 lg:py-12 gap-7 lg:gap-4 w-full lg:w-[870px] h-full lg:h-[630px]">
      <div className="flex flex-col gap-8">
        <h3 className="text-base lg:text-xl font-medium text-secondary-3">
          {isEdit ? 'Update Your Address' : 'Create Your Address'}
        </h3>
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between">
          <div className="flex flex-col gap-3">
            <label className="text-xs lg:text-base font-normal" htmlFor="name">
              Full Name
            </label>
            <input
              className="bg-secondary-1 text-xs lg:text-base font-normal border border-transparent w-full lg:w-[330px] h-[50px] px-5 py-2 focus:outline-none focus:border-secondary-3"
              id="name"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs lg:text-base font-normal" htmlFor="email">
              Email
            </label>
            <input
              className="bg-secondary-1 text-xs lg:text-base font-normal border border-transparent w-full lg:w-[330px] h-[50px] px-5 py-2 focus:outline-none focus:border-secondary-3"
              id="email"
              type="email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-xs lg:text-base" htmlFor="address">
            Address
          </label>
          <textarea
            className="bg-secondary-1 text-xs lg:text-base font-normal border border-transparent px-5 py-2 focus:outline-none focus:border-secondary-3"
            cols="30"
            id="address"
            name="address"
            rows="4"
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end items-end">
        <div className="w-full lg:w-auto flex justify-between lg:justify-center lg:items-center gap-2 lg:gap-8">
          <Link
            className="flex items-center justify-center bg-secondary-1 lg:bg-transparent w-[181px] h-11 lg:w-auto lg:h-auto border-none text-sm lg:text-base font-medium rounded-md lg:font-normal text-black"
            to={'/my-account/address'}
          >
            Cancel
          </Link>
          <button className="w-[181px] h-11 lg:w-[214px] lg:h-14 bg-secondary-3 rounded-md text-sm lg:text-base font-medium text-text-1">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpdateAddress;
