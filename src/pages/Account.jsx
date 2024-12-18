import React from 'react';

import AccountSidebar from '../components/account/AccountSidebar';
import UpdateProfile from '../components/account/UpdateProfile';

const Account = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between container">
      <AccountSidebar />
      <UpdateProfile />
    </div>
  );
};

export default Account;
