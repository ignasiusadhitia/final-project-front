import React from 'react';

import AccountSidebar from '../components/account/AccountSidebar';
import UpdateProfile from '../components/account/UpdateProfile';
import { Breadcrumb } from '@components';
import { Outlet } from 'react-router-dom';

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
  )
};

export default Account;
