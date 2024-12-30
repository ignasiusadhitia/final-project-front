import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LogInForm = ({ onSubmitHandler, onInputChangeHandler }) => {
  const lang = useSelector((state) => state.lang.lang);
  const { error } = useSelector((state) => state.auth);

  const translations = {
    en: {
      emailPlaceholder: 'Email or Phone Number',
      passwordPlaceholder: 'Password',
      logInButton: 'Log In',
      forgetPassword: 'Forget Password?',
    },
    id: {
      emailPlaceholder: 'Email atau Nomor Telepon',
      passwordPlaceholder: 'Kata Sandi',
      logInButton: 'Masuk',
      forgetPassword: 'Lupa Kata Sandi?',
    },
  };

  const text = translations[lang];

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmitHandler}>
      <input
        className="w-full border-b-[1px] border-black border-opacity-50  py-2 leading-6 focus:outline-none"
        id="email"
        name="email"
        placeholder={text.emailPlaceholder}
        type="text"
        onChange={onInputChangeHandler}
      />
      <input
        className="w-full border-b-[1px] border-black border-opacity-50 py-2 leading-6 focus:outline-none"
        id="password"
        name="password"
        placeholder={text.passwordPlaceholder}
        type="password"
        onChange={onInputChangeHandler}
      />
      <p className="text-secondary-3">{error && error}</p>

      <div className="flex flex-col-reverse md:flex-row items-end md:items-center justify-between mt-2">
        <button
          className="w-full md:w-fit bg-button-2 hover:bg-button-hover-1 py-4 px-12 rounded text-white"
          type="submit"
        >
          {text.logInButton}
        </button>

        <span className="block text-secondary-3 text-base mb-2 md:mb-0 ">
          <Link>{text.forgetPassword}</Link>
        </span>
      </div>
    </form>
  );
};

LogInForm.propTypes = {
  onSubmitHandler: PropTypes.func,
  onInputChangeHandler: PropTypes.func,
};

export default LogInForm;
