import React from 'react';

import { Link } from 'react-router-dom';

import { SignUpForm } from '@components';

const SignUp = () => {
  const inputChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Submitted');
  };

  return (
    <div className="h-screen md:bg-auth-banner bg-no-repeat bg-contain flex mt-6 md:mt-[3.75rem] md:mb-[8.75rem]">
      <div className="container h-full grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block"></div>
        <div className="w-full h-full flex flex-col justify-start md:justify-center my-auto px-6 md:pl-48 bg-white">
          <h1 className="text-2xl md:text-4xl font-medium mb-6 font-['Inter']">
            Create an account
          </h1>
          <p className="mb-12 text-xs md:text-base">Enter your details below</p>
          <SignUpForm
            onInputChangeHandler={inputChangeHandler}
            onSubmitHandler={submitHandler}
          />
          <div className="flex items-center gap-4 mt-4">
            <span className="block text-xs md:text-base">
              Already have account?
            </span>
            <span className="block border-b border-black pb-1 text-sm md:text-base md:font-medium">
              <Link to="/login">Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
