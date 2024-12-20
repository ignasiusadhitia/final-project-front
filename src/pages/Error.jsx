import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ code }) => {
  const errorTypes = {
    404: {
      errorCode: "404 Not Found",
      message: "Your visited page not found. You may go home page"
    },
    500: {
      errorCode: "Error Code 500", 
      message: "We apologize for the inconvenience and appreciate your patience"
    },
    401: {
      errorCode: "Access Denied 401",
      message: "You do not have permission to view this page"
    }
  };

  const error = errorTypes[code] || errorTypes[404];

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-8xl font-semibold mb-4">{error.errorCode}</h1>
      <p className="text-sm mb-8 text-gray-600">{error.message}</p>
      <Link 
        to="/" 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
      >
        Back to home page
      </Link>
    </div>
  );
};

export default ErrorPage;


/*
import { useErrorHandler } from '../utils/errorHandler';

const ExampleComponent = () => {
  const { handleError } = useErrorHandler();

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };
};

  */
