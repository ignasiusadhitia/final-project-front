import React from 'react';
import { Link } from 'react-router-dom';  // Asumsikan menggunakan React Router

const ErrorPage = ({ errorCode, message }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold">{errorCode}</h1>
      <p className="text-lg mb-4">{message}</p>
      <Link to="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Back to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
