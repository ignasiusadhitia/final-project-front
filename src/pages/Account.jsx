import React from 'react';

import { Outlet } from 'react-router-dom';

import { Breadcrumb } from '@components';

import AccountSidebar from '../components/account/AccountSidebar';
import UpdateProfile from '../components/account/UpdateProfile';

const Account = () => {
  return (
    <>
      {/* Local Breadcrumb, specific use for my account */}
      <Breadcrumb userName="Dimitri Ivanovic" />
      <div className="flex flex-col lg:flex-row justify-between container">
        <AccountSidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Account;
