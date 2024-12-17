import React from 'react';

import PropTypes from 'prop-types';

const SectionTitle = ({
  title = 'Title',
  subTitle = 'Sub Title',
  hideTitle,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="hidden md:flex gap-4 items-center">
        <div className="w-5 h-10 bg-secondary-3 rounded"></div>
        <h3 className="text-base text-secondary-3 font-semibold">{subTitle}</h3>
      </div>
      <h2
        className={`text-sm md:text-4xl font-semibold leading-[3rem] font-['Inter'] ${hideTitle ? 'block md:hidden' : ''}`}
      >
        {title}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  hideTitle: PropTypes.bool,
};

export default SectionTitle;
