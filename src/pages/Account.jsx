import React from 'react';

import { Breadcrumb } from '@components';

const Account = () => {
  return (
    <>
      {/* Local Breadcrumb, specific use for my account */}
      <Breadcrumb userName="Dimitri Ivanovic" />
      <div className="container">Account</div>
    </>
  );
};

export default Account;
