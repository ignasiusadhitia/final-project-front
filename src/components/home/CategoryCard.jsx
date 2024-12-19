import React from 'react';

import PropTypes from 'prop-types';

const CategoryCard = ({ data }) => {
  return (
    <div className="space-y-5 border border-black/30 max-w-40 max-h-36 rounded  flex flex-col justify-centr items-center py-5 cursor-pointer">
      <div className="w-full flex flex-col justify-centr items-center">
        <img alt={data.name} className="w-14 h-14" src={data.imageUrl} />
      </div>
      <p className="text-center text-[8px] md:text-base">{data.name}</p>
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
