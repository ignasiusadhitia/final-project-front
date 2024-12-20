import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({ userName }) => {
  const location = useLocation();
  const [productNames, setProductNames] = useState({});
  const currentPath = location.pathname;
  let pathnames = currentPath.split('/').filter((x) => x);

  pathnames = pathnames[0] === 'my-account' ? ['my-account'] : pathnames;

  // Function to format a bredcrumb
  const formatBreadcrumb = (value) => {
    return value
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  useEffect(() => {
    const fetchProductNames = async () => {
      // Mock product data
      const mockProductData = {
        1: 'Product One',
        2: 'Product Two',
        3: 'Product Three',
      };

      setProductNames(mockProductData);
    };

    fetchProductNames();
  }, []);

  return (
    <nav className="container flex justify-between items-center mt-6 md:mt-20 px-6 md:px-0">
      {/* Breadcrumb Links */}
      <ol className="flex">
        <li className="text-xs md:text-sm opacity-100 md:opacity-50">
          <Link to="/">Home</Link>
        </li>

        {pathnames?.map((value, index) => {
          const isId = /^\d+$/.test(value); // Check if the value is a number
          const label =
            isId && productNames[value] ? productNames[value] : value; // Use product name if available

          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={to} className="text-xs md:text-sm">
              <span className="opacity-100 md:opacity-50">&nbsp;/&nbsp;</span>
              {index === pathnames.length - 1 ? (
                <span className="capitalize font-semibold md:font-normal">
                  {formatBreadcrumb(label)}
                </span>
              ) : (
                <Link className="capitalize opacity-100 md:opacity-50" to={to}>
                  {formatBreadcrumb(label)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      {/* Welcome Message */}
      {userName && (
        <div className="hidden md:block text-sm">
          Welcome! <span className="text-secondary-3">{userName}</span>
        </div>
      )}
    </nav>
  );
};

Breadcrumb.propTypes = {
  userName: PropTypes.string,
};

export default Breadcrumb;
