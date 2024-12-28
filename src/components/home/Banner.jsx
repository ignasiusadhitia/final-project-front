import React from 'react';

import PropTypes, { string } from 'prop-types';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const Banner = ({ height, data = [] }) => {
  return (
    <>
      <Swiper
        autoplay={{ delay: 3000 }}
        className="swiper-cstm banner"
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={height}>
              <a href={item.url}>
                <img
                  alt={item.title}
                  className="w-full h-full object-cover"
                  src={item.imageUrl}
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

Banner.propTypes = {
  height: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  //   ).isRequired,
};

export default Banner;
