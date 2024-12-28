import React from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const SignUpForm = ({ onSubmitHandler, onInputChangeHandler }) => {
  const lang = useSelector((state) => state.lang.lang);

  const translations = {
    en: {
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email or Phone Number',
      passwordPlaceholder: 'Password',
      createAccountButton: 'Create Account',
    },
    id: {
      namePlaceholder: 'Nama',
      emailPlaceholder: 'Email atau Nomor Telepon',
      passwordPlaceholder: 'Kata Sandi',
      createAccountButton: 'Buat Akun',
    },
  };

  const text = translations[lang];

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmitHandler}>
      <input
        className="w-full py-2 leading-6 border-b-[1px] border-black border-opacity-50 focus:outline-none"
        id="name"
        name="name"
        placeholder={text.namePlaceholder}
        type="text"
        onChange={onInputChangeHandler}
      />
      <input
        className="w-full py-2 leading-6 border-b-[1px] border-black border-opacity-50 focus:outline-none"
        id="email"
        name="email"
        placeholder={text.emailPlaceholder}
        type="text"
        onChange={onInputChangeHandler}
      />
      <input
        className="w-full py-2 leading-6 border-b-[1px] border-black border-opacity-50 focus:outline-none"
        id="password"
        name="password"
        placeholder={text.passwordPlaceholder}
        type="password"
        onChange={onInputChangeHandler}
      />
      <button
        className="bg-button-2 hover:bg-button-hover-1 py-4 rounded text-white"
        type="submit"
      >
        {text.createAccountButton}
      </button>
    </form>
  );
};

SignUpForm.propTypes = {
  onSubmitHandler: PropTypes.func,
  onInputChangeHandler: PropTypes.func,
};

export default SignUpForm;
