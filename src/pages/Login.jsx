import React, { useEffect, useState } from 'react';

import { LogInForm } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { errorLogin, loginSuccess } from '@store/features/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputForm, setInputForm] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) return navigate("/");
  }, []);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputForm({...inputForm, [name]: value});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { email, password } = inputForm;
    if (email !== "user@gmail.com" || password !== "user1234") {
      dispatch(errorLogin("Invalid email or password!"));
      return;
    }

    dispatch(loginSuccess(inputForm))
    navigate("/");
  };

  return (
    <div className="h-screen md:bg-auth-banner bg-no-repeat bg-contain flex mt-6 md:mt-[3.75rem] md:mb-[8.75rem]">
      <div className="container h-full grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block"></div>
        <div className="w-full h-full flex flex-col justify-start md:justify-center my-auto px-6 md:pl-48 bg-white">
          <h1 className="text-2xl md:text-4xl font-medium mb-6 font-['Inter']">
            Log in to Exclusive
          </h1>
          <p className="mb-12 text-xs md:text-base">Enter your details below</p>
          <LogInForm
            onInputChangeHandler={inputChangeHandler}
            onSubmitHandler={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
