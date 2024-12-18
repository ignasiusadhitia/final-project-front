import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LogInForm = ({ onSubmitHandler, onInputChangeHandler }) => {
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmitHandler}>
      <input
        className="w-full border-b-[1px] border-black border-opacity-50  py-2 leading-6 focus:outline-none"
        id="email"
        name="email"
        placeholder="Email or Phone Number"
        type="text"
        onChange={onInputChangeHandler}
      />
      <input
        className="w-full border-b-[1px] border-black border-opacity-50 py-2 leading-6 focus:outline-none"
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        onChange={onInputChangeHandler}
      />

      <div className="flex flex-col-reverse md:flex-row items-end md:items-center justify-between mt-2">
        <button
          className="w-full md:w-fit bg-button-2 hover:bg-button-hover-1 py-4 px-12 rounded text-white"
          type="submit"
        >
          Log In
        </button>

        <span className="block text-secondary-3 text-base mb-2 md:mb-0 ">
          <Link>Forget Password?</Link>
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
