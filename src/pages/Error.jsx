import React from 'react';

import { Link } from 'react-router-dom';

const ErrorPage = ({ code }) => {
  const errorTypes = {
    404: {
      errorCode: '404 Not Found',
      message: 'Your visited page not found. You may go home page',
    },
    500: {
      errorCode: 'Error Code 500',
      message:
        'We apologize for the inconvenience and appreciate your patience',
    },
    401: {
      errorCode: 'Access Denied 401',
      message: 'You do not have permission to view this page',
    },
  };

  const error = errorTypes[code] || errorTypes[404];

  return (
    <div className="h-[50vh] lg:h-[70vh] flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-2xl font-bold lg:text-[110px] lg:font-medium mb-3 lg:mb-20">
        {error.errorCode}
      </h2>
      <p className="text-[8px] lg:text-sm mb-8 text-gray-600">
        {error.message}
      </p>
      <Link
        className="lg:mt-10 text-sm lg:text-base bg-button-2 hover:bg-button-hover-1 text-text-1 font-medium py-3 px-6 rounded transition duration-300"
        to="/"
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
