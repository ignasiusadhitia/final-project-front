import React from 'react';

import { Link, useLocation } from 'react-router-dom';

const AccountSidebar = () => {
  const location = useLocation().pathname;

  return (
    <section className="mt-20 flex flex-row lg:flex-col gap-0 lg:gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-base text-black hidden lg:block">
          Manage My Account
        </h2>
        <ul className="flex flex-row lg:flex-col gap-5 lg:gap-3 ml-7">
          <li>
            <Link
              className={`flex lg:inline justify-center items-center lg:text-base font-medium w-[86px] h-[28px] lg:w-auto lg:h-0 text-xs rounded-md ${location === '/account' ? 'lg:text-secondary-3 lg:bg-transparent bg-secondary-3 text-text-1' : 'lg:text-text-2 border lg:border-none'}`}
              to={'/account'}
            >
              My Profile
            </Link>
          </li>

          <li>
            <Link
              className={`flex lg:inline justify-center items-center lg:text-base font-medium w-[92px] h-[28px] lg:w-auto lg:h-0 text-xs rounded-md ${location === '/account/address' ? 'lg:text-secondary-3 lg:bg-transparent bg-secondary-3 text-text-1' : 'lg:text-text-2 border border-text-2 lg:border-none'}`}
              to={'/account/address'}
            >
              Address Book
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-base text-black hidden lg:block">
          My Orders
        </h2>
        <ul className="flex flex-col ml-4 lg:ml-7">
          <li>
            <Link
              className={`flex lg:inline justify-center items-center lg:text-base font-medium w-[80px] h-[28px] lg:w-auto lg:h-0 text-xs rounded-md ${location === '/account/my-orders' ? 'lg:text-secondary-3 bg-secondary-3 lg:bg-transparent text-text-1' : 'lg:text-text-2 border border-text-2 lg:border-none'}`}
              to={'/account/my-orders'}
            >
              My Orders
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AccountSidebar;
