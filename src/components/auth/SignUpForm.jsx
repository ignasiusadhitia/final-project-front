import React from 'react';

import PropTypes from 'prop-types';

const SignUpForm = ({ submitHandlder }) => {
  return (
    <form className="flex flex-col gap-10" onSubmit={submitHandlder}>
      <input
        className="w-full border-b-2 pb-2 leading-6"
        id="name"
        name="name"
        placeholder="Name"
        type="text"
      />
      <input
        className="w-full border-b-2 pb-2 leading-6"
        id="email"
        name="email"
        placeholder="Email or Phone Number"
        type="text"
      />
      <input
        className="w-full border-b-2 pb-2 leading-6"
        id="password"
        name="password"
        placeholder="Password"
        type="password"
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
  submitHandlder: PropTypes.func,
};

export default SignUpForm;
