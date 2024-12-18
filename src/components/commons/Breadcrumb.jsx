import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({ userName }) => {
  const location = useLocation();
  const [productNames, setProductNames] = useState({});
  const currentPath = location.pathname;
  const pathnames = currentPath.split('/').filter((x) => x);

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
    <nav>
      {/* Breadcrumb Links */}
      <ol className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>

        {pathnames.map((value, index) => {
          const isId = /^\d+$/.test(value); // Check if the value is a number
          const label =
            isId && productNames[value] ? productNames[value] : value; // Use product name if available

          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to}>
              <span>/</span>
              {index === pathnames.length - 1 ? (
                <span>{label}</span>
              ) : (
                <Link to={to}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>

      {/* Welcome Message */}
      {userName && (
        <div>
          Welcome <span>{userName}</span>
        </div>
      )}
    </nav>
  );
};

Breadcrumb.propTypes = {
  userName: PropTypes.string,
};

export default Breadcrumb;
