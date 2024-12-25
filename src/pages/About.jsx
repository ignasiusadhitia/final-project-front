import React from 'react';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Guarantee, TeamsCard } from '@components';
import {
  SellersActive,
  MonthlyProductSales,
  CustomersActive,
  AnualGross,
} from '@icons';
import { aboutHero, member1, member2, member3, member4 } from '@images';

const About = () => {
  return (
    <div className="overflow-hidden lg:mt-12 md:mt-[3.75rem]">
      <div>
        {/* HERO SECTION */}
        <div className="flex justify-start">
          <div className="flex container flex-col justify-center h-full lg:h-[609px] gap-5 md:gap-20 p-10 lg:p-0">
            {/* DESCRIPTIONS */}
            <div className="w-full lg:w-[525px] flex flex-col justify-center items-start gap-4 lg:gap-10">
              <h1 className="text-2xl md:text-5xl text-center md:text-left font-semibold w-full">
                Our Story
              </h1>
              <p className="text-[8px] lg:text-base font-normal">
                Launced in 2015, Exclusive is South Asia&apos;s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p className="text-[8px] lg:text-base">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden mt-4 lg:mt-0 rounded-xl lg:absolute right-0 flex justify-end items-center">
              <img
                alt="About's hero image"
                className="h-full w-full lg:w-[705px] lg:h-[609px] lg:object-cover rounded-xl md:rounded-sm md:object-cover"
                src={aboutHero}
              />
            </div>
          </div>
        </div>

        {/* SERVICE SECTION */}
        <div className=" container p-5 lg:p-0 grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-40">
          <div className="text-center border rounded-lg flex flex-col justify-center items-center p-5 gap-5">
            <SellersActive className="w-[50px] h-[50px] lg:w-20 lg:h-20" />
            <p className="text-base font-semibold lg:text-3xl lg:font-bold">
              10.5k
            </p>
            <p className="text-xs font-normal lg:text-base">
              Sellers active our site
            </p>
          </div>
          <div className="text-center border rounded-lg flex flex-col justify-center items-center p-5 gap-5 bg-secondary-3 text-white">
            <MonthlyProductSales className="w-[50px] h-[50px] lg:w-20 lg:h-20" />
            <p className="text-base font-semibold lg:text-3xl lg:font-bold">
              33k
            </p>
            <p className="text-xs font-normal lg:text-base">
              Monthly Product Sale
            </p>
          </div>
          <div className="text-center border rounded-lg flex flex-col justify-center items-center p-5 gap-5">
            <CustomersActive className="w-[50px] h-[50px] lg:w-20 lg:h-20" />
            <p className="text-base font-semibold lg:text-3xl lg:font-bold">
              45.5k
            </p>
            <p className="text-xs font-normal lg:text-base">
              Customers active in our site
            </p>
          </div>
          <div className="text-center border rounded-lg flex flex-col justify-center items-center p-5 gap-5">
            <AnualGross className="w-[50px] h-[50px] lg:w-20 lg:h-20" />
            <p className="text-base font-semibold lg:text-3xl lg:font-bold">
              25k
            </p>
            <p className="text-xs font-normal lg:text-base">
              Anual gross sale in our site
            </p>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="container p-5 lg:p-0 gap-5 mt-10 md:mt-40">
          <Swiper
            className="swiper-cstm about"
            loop={true}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={3}
            spaceBetween={50}
          >
            <SwiperSlide>
              {/* MEMBER 1 */}
              <TeamsCard
                image={member1}
                name="Tom Cruise"
                title="Founder & Chairman"
              />
            </SwiperSlide>

            <SwiperSlide>
              {/* MEMBER 2 */}
              <TeamsCard
                image={member2}
                name="Emma Watson"
                title="Managing Director"
              />
            </SwiperSlide>

            <SwiperSlide>
              {/* MEMBER 3 */}
              <TeamsCard
                image={member3}
                name="Will Smith"
                title="Product Designer"
              />
            </SwiperSlide>

            <SwiperSlide>
              {/* MEMBER 4 */}
              <TeamsCard
                image={member4}
                name="Joana Doe"
                title="Product Designer"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Guarantee */}
        <div className="container p-5 md:p-0 mt-10 md:my-40">
          <Guarantee />
        </div>
      </div>
    </div>
  );
};

export default About;
