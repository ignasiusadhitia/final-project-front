import React from 'react';

import PropTypes from 'prop-types';

const SignUpForm = ({ onSubmitHandler, onInputChangeHandler }) => {
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmitHandler}>
      <input
        className="w-full py-2 leading-6 border-b-[1px] border-black border-opacity-50 focus:outline-none"
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        onChange={onInputChangeHandler}
      />
      <input
        className="w-full py-2 leading-6 border-b-[1px] border-black border-opacity-50 focus:outline-none"
        id="email"
        name="email"
        placeholder="Email or Phone Number"
        type="text"
        onChange={onInputChangeHandler}
      />
      <input
        className="w-full py-2 leading-6 border-b-[1px] border-black border-opacity-50 focus:outline-none"
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        onChange={onInputChangeHandler}
      />
      <button
        className="bg-button-2 hover:bg-button-hover-1 py-4 rounded text-white"
        type="submit"
      >
        Create Account
      </button>
    </form>
  );
};

SignUpForm.propTypes = {
  onSubmitHandler: PropTypes.func,
  onInputChangeHandler: PropTypes.func,
};

export default SignUpForm;
