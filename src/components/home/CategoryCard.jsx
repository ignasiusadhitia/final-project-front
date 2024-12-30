import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryCard = ({ data }) => {
  return (
    <div className="space-y-5 border border-black/30 max-w-40 w-20 h-20 md:w-[170px] md:h-[145px] rounded  flex justify-center items-center py-5 cursor-pointer">
      <Link
        className="w-full flex flex-col justify-center gap-2 lg:gap-4 items-center"
        to={'/products'}
      >
        <img
          alt={data.name}
          className="w-8 h-8 lg:w-14 lg:h-14"
          src={data.imageUrl}
        />
        <p className="text-center text-[8px] md:text-base" to={'/products'}>
          {data.name}
        </p>
      </Link>
    </div>
  );
};

CategoryCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};
export default CategoryCard;
