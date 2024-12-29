import React from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { SectionTitle } from '@components';

const FeatureCard = ({ data }) => {
  const lang = useSelector((state) => state.lang.lang);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        alt={data.title}
        className={`lg:object-cover object-fill w-full h-[175px] md:max-h-[570px] md:h-full filter ${SectionTitle && 'brightness-50 group-hover:scale-110 transition-all duration-500'}`}
        src={data.image}
      />
      <div className="absolute p-5 grid gap-1 md:gap-3 bottom-1 left-2 z-10">
        <p className="text-text-1 text-[12px] md:text-2xl">{data.title}</p>
        <p className="text-text-1 text-[8px] md:text-sm">{data.desc}</p>
        <a
          className="text-text-1 text-[8px] md:text-base cursor-pointer underline"
          href={data.url}
        >
          {lang === 'en' ? 'Shop Now' : 'Beli Sekarang'}
        </a>
      </div>
    </div>
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
