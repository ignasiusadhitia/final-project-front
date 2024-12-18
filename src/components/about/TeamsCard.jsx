import React from 'react';

import PropTypes from 'prop-types';

import { CardTwitter, CardInstagram, CardLinkedin } from '@icons';

const TeamsCard = ({ name, title, image }) => {
  return (
    <div className="rounded-sm space-y-5">
      <div className="w-full bg-gray-100 flex justify-center items-center h-40 md:h-96">
        <img alt={name} className="h-full object-cover" src={image} />
      </div>
      <div className="h-28 flex flex-col justify-between">
        <div className="space-y-1">
          <p className="text-sm  md:text-3xl font-medium">{name}</p>
          <p className="text-xs md:text-base">{title}</p>
        </div>
        {/* SOCIAL MEDIA ICONS */}
        <ul className="flex gap-2">
          <li>
            <a
              href="https://twitter.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <CardTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <CardInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <CardLinkedin />
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
