import React from 'react';

import PropTypes from 'prop-types';

const CheckoutProductCard = ({ product }) => {
  return (
    <div className="flex gap-6">
      <div>
        <img alt="product-image" src={product?.img} />
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
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default CheckoutProductCard;
