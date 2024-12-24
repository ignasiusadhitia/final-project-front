import React from 'react';

import PropTypes from 'prop-types';

import { CardTwitter, CardInstagram, CardLinkedin } from '@icons';

const TeamsCard = ({ name, title, image }) => {
  return (
    <div className="w-full rounded-sm space-y-5">
      <div className="w-full bg-gray-100 flex justify-center items-center h-40 md:h-96">
        <img alt={name} className="h-full object-cover" src={image} />
      </div>
      <div className="lg:h-28 flex gap-5 flex-col justify-between">
        <div className="space-y-1">
          <p className="text-sm  md:text-3xl font-medium">{name}</p>
          <p className="text-xs md:text-base">{title}</p>
        </div>
        {/* SOCIAL MEDIA ICONS */}
        <ul className="flex gap-2 lg:gap-7">
          <li>
            <a
              href="https://twitter.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <CardTwitter className="w-3 h-3 md:w-6 md:h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <CardInstagram className="w-3 h-3 md:w-6 md:h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <CardLinkedin className="w-3 h-3 md:w-6 md:h-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

TeamsCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
};
export default TeamsCard;
