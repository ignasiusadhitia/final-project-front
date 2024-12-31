import React from 'react';

import PropTypes from 'prop-types';

const FeatureCard = ({ data }) => {
  return (
    <a className="relative h-full w-full overflow-hidden" href={data.url}>
      <img
        className={`object-cover h-full w-full group-hover:scale-95 transition-all duration-500'}`}
        src={data.image}
      />

      <div className="absolute p-5 grid gap-1 md:gap-3 bottom-1 left-2 z-10">
        <p className="text-text-1 text-[12px] md:text-2xl">{data.title}</p>
        <p className="text-text-1 text-[8px] md:text-sm">{data.desc}</p>
      </div>
    </a>
  );
};

FeatureCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default FeatureCard;
