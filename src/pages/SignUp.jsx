import React from 'react';

import { Link } from 'react-router-dom';

import { SignUpForm } from '@components';
import { authBanner } from '@images';

const SignUp = () => {
  return (
    <div className="min-h-screen flex pt-[3.75rem] pb-[8.75rem]">
      <img
        alt="auth-banner"
        className="w-full h-full left-0"
        src={authBanner}
      />
      <div className="container h-full relative ">
        <div className="w-full h-full flex flex-col justify-between my-auto pl-48 font-['Poppins']">
          <h1 className="text-4xl font-medium mb-6">Create an account</h1>
          <p className="mb-12">Enter your details below</p>
          <SignUpForm />
          <div className="flex items-center gap-4 mt-4">
            <span className="block">Already have account?</span>
            <span className="block border-b border-black pb-1 font-medium">
              <Link>Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
