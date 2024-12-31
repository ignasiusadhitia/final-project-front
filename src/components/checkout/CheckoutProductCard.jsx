import React from 'react';

import PropTypes from 'prop-types';

const CheckoutProductCard = ({ product }) => {
  return (
    <div className="flex gap-6">
      <div className="w-[3.375rem] h-[3.375rem]">
        <img
          alt="product-image"
          className="w-full h-full object-contain"
          src={product?.imageUrl}
        />
      </div>
      <div className="w-full flex items-center justify-between py-[0.938]">
        <span className="block">{product?.name}</span>
        <span className="block">${product?.price}</span>
      </div>
    </div>
  );
};

CheckoutProductCard.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default CheckoutProductCard;
