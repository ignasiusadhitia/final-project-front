import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SignUpForm } from '@components';

const SignUp = () => {
  const lang = useSelector((state) => state.lang.lang);
  const inputChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Submitted');
  };

  const translations = {
    en: {
      createAccountTitle: 'Create an account',
      enterDetails: 'Enter your details below',
      alreadyHaveAccount: 'Already have an account?',
      loginLink: 'Log in',
    },
    id: {
      createAccountTitle: 'Buat akun',
      enterDetails: 'Masukkan detail Anda di bawah',
      alreadyHaveAccount: 'Sudah memiliki akun?',
      loginLink: 'Masuk',
    },
  };

  const text = translations[lang];

  return (
    <div className="h-screen md:bg-auth-banner bg-no-repeat bg-contain flex mt-6 md:mt-[3.75rem] md:mb-[8.75rem]">
      <div className="container h-full grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block"></div>
        <div className="w-full h-full flex flex-col justify-start md:justify-center my-auto px-6 md:pl-48 bg-white">
          <h1 className="text-2xl md:text-4xl font-medium mb-6 font-['Inter']">
            {text.createAccountTitle}
          </h1>
          <p className="mb-12 text-xs md:text-base">{text.enterDetails}</p>
          <SignUpForm
            onInputChangeHandler={inputChangeHandler}
            onSubmitHandler={submitHandler}
          />
          <div className="flex items-center gap-4 mt-4">
            <span className="block text-xs md:text-base">
              {text.alreadyHaveAccount}
            </span>
            <span className="block border-b border-black pb-1 text-sm md:text-base md:font-medium">
              <Link to="/login">{text.loginLink}</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
