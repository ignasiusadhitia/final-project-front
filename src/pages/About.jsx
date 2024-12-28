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
import { useSelector } from 'react-redux';

const About = () => {
  const lang = useSelector((state) => state.lang.lang);

  const translations = {
    en: {
      heroTitle: 'Our Story',
      heroDescription1:
        'Launched in 2015, Exclusive is South Asia\'s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.',
      heroDescription2:
        'Exclusive has more than 1 million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer goods.',
      sellerActiveLabel: 'Sellers active our site',
      monthlySalesLabel: 'Monthly product sales',
      customerActiveLabel: 'Customers active in our site',
      annualGrossLabel: 'Annual gross sales in our site',
      teamSectionTitle: 'Meet Our Team',
      guaranteeSectionTitle: 'Our Guarantee',
      submitButton: 'Send Message',
    },
    id: {
      heroTitle: 'Kisah Kami',
      heroDescription1:
        'Didirikan pada 2015, Exclusive adalah pasar belanja online terkemuka di Asia Selatan dengan kehadiran aktif di Bangladesh. Didukung oleh berbagai solusi pemasaran, data, dan layanan yang disesuaikan, Exclusive memiliki 10.500 penjual dan 300 merek, serta melayani 3 juta pelanggan di seluruh wilayah.',
      heroDescription2:
        'Exclusive memiliki lebih dari 1 juta produk yang ditawarkan, berkembang dengan sangat cepat. Exclusive menawarkan berbagai pilihan dalam kategori barang konsumen.',
      sellerActiveLabel: 'Penjual aktif di situs kami',
      monthlySalesLabel: 'Penjualan produk bulanan',
      customerActiveLabel: 'Pelanggan aktif di situs kami',
      annualGrossLabel: 'Penjualan kotor tahunan di situs kami',
      teamSectionTitle: 'Temui Tim Kami',
      guaranteeSectionTitle: 'Jaminan Kami',
      submitButton: 'Kirim Pesan',
    },
  };

  return (
    <div className="overflow-hidden lg:mt-12 md:mt-[3.75rem]">
      <div>
        {/* HERO SECTION */}
        <div className="flex justify-start">
          <div className="flex container flex-col justify-center h-full lg:h-[609px] gap-5 md:gap-20 p-10 lg:p-0">
            {/* DESCRIPTIONS */}
            <div className="w-full lg:w-[525px] flex flex-col justify-center items-start gap-4 lg:gap-10">
              <h1 className="text-2xl md:text-5xl text-center md:text-left font-semibold w-full">
                {translations[lang].heroTitle}
              </h1>
              <p className="text-[8px] lg:text-base font-normal">
                {translations[lang].heroDescription1}
              </p>
              <p className="text-[8px] lg:text-base">
                {translations[lang].heroDescription2}
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
        <div className="container p-5 lg:p-0 grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-40">
          <div className="text-center border rounded-lg flex flex-col justify-center items-center p-5 gap-5">
            <SellersActive className="w-[50px] h-[50px] lg:w-20 lg:h-20" />
            <p className="text-base font-semibold lg:text-3xl lg:font-bold">
              10.5k
            </p>
            <p className="text-xs font-normal lg:text-base">
              {translations[lang].sellerActiveLabel}
            </p>
          </div>
          <div className="text-center border rounded-lg flex flex-col justify-center items-center p-5 gap-5 bg-secondary-3 text-white">
            <MonthlyProductSales className="w-[50px] h-[50px] lg:w-20 lg:h-20" />
            <p className="text-base font-semibold lg:text-3xl lg:font-bold">
              33k
            </p>
            <p className="text-xs font-normal lg:text-base">
              {translations[lang].monthlySalesLabel}
            </p>
          </div>
          <div className="text-center border rounded-lg flex flex-col justify-center items-center p-5 gap-5">
            <CustomersActive className="w-[50px] h-[50px] lg:w-20 lg:h-20" />
            <p className="text-base font-semibold lg:text-3xl lg:font-bold">
              45.5k
            </p>
            <p className="text-xs font-normal lg:text-base">
              {translations[lang].customerActiveLabel}
            </p>
          </div>
          <div className="text-center border rounded-lg flex flex-col justify-center items-center p-5 gap-5">
            <AnualGross className="w-[50px] h-[50px] lg:w-20 lg:h-20" />
            <p className="text-base font-semibold lg:text-3xl lg:font-bold">
              25k
            </p>
            <p className="text-xs font-normal lg:text-base">
              {translations[lang].annualGrossLabel}
            </p>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="container p-5 lg:p-0 gap-5 mt-10 md:mt-40">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">
            {translations[lang].teamSectionTitle}
          </h2>
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
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">
            {translations[lang].guaranteeSectionTitle}
          </h2>
          <Guarantee />
        </div>
      </div>
    </div>
  );
};

export default About;
