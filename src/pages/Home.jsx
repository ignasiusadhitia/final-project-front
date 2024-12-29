import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigation, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';

import {
  SectionTitle,
  ProductsCard,
  Guarantee,
  Banner,
  CategoryCard,
  FeatureCard,
  SEO,
} from '@components';
import { Arrow, Love } from '@icons';

const Home = () => {
  const lang = useSelector((state) => state.lang.lang);

  const translations = {
    en: {
      category: 'Category',
      thisMonth: 'This Month',
      viewAll: 'View All',
      viewAllProducts: 'View All Products',
      featured: 'Featured',
      recommend: 'Recommend',
      ourProduct: 'Our Products',
      bestSelling: 'Best Selling Products',
      exploreProduct: 'Explore Our Products',
      browseByCategory: 'Browse By Category',
    },
    id: {
      category: 'Kategori',
      thisMonth: 'Bulan Ini',
      viewAll: 'Lihat Semua',
      viewAllProducts: 'Lihat Semua Produk',
      featured: 'Unggulan',
      recommend: 'Rekomendasi',
      ourProduct: 'Produk Kami',
      bestSelling: 'Produk Terlaris',
      exploreProduct: 'Jelajahi Produk Kami',
      browseByCategory: 'Telusuri Kategori',
    },
  };

  const text = translations[lang];

  const bestSellingProducts = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'ASUS FHD Gaming Laptop',
      description:
        'Powerful gaming laptop with high-performance specs for a smooth gaming experience.',
      price: '960',
      originalPrice: '1160',
      discount: '-35%',
      rating: 4.7,
      ratingCount: 65,
      categoryId: 1,
      category: 'Electronics',
      stock: 0,
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'IPS LCD Gaming Monitor',
      description:
        'Stunning visuals and crisp images with a high refresh rate for gaming and professional use.',
      price: '160',
      originalPrice: '200',
      discount: '-20%',
      rating: 4.5,
      ratingCount: 55,
      categoryId: 1,
      category: 'Electronics',
      stock: 20,
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'HAVIT HV-G92 Gamepad',
      description:
        'Ergonomic gamepad with high precision controls and vibration feedback for immersive gaming.',
      price: '56',
      originalPrice: '70',
      discount: '-20%',
      rating: 4.4,
      ratingCount: 30,
      categoryId: 1,
      category: 'Electronics',
      stock: 30,
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Modern Sofa Set',
      description:
        'Comfortable and stylish sofa set perfect for your living room.',
      price: '899',
      originalPrice: '999',
      discount: '-10%',
      rating: 4.6,
      ratingCount: 42,
      categoryId: 2,
      category: 'Home & Lifestyle',
      stock: 8,
    },
    {
      id: 5,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'ASUS FHD Gaming Laptop',
      description:
        'Powerful gaming laptop with high-performance specs for a smooth gaming experience.',
      price: '960',
      originalPrice: '1160',
      discount: '-35%',
      rating: 4.7,
      ratingCount: 65,
      categoryId: 1,
      category: 'Electronics',
      stock: 0,
    },
  ];
  const exploreOurProducts = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'ASUS FHD Gaming Laptop',
      description:
        'Powerful gaming laptop with high-performance specs for a smooth gaming experience.',
      price: '960',
      originalPrice: '1160',
      discount: '-35%',
      rating: 4.7,
      ratingCount: 65,
      categoryId: 1,
      category: 'Electronics',
      stock: 0,
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'IPS LCD Gaming Monitor',
      description:
        'Stunning visuals and crisp images with a high refresh rate for gaming and professional use.',
      price: '160',
      originalPrice: '200',
      discount: '-20%',
      rating: 4.5,
      ratingCount: 55,
      categoryId: 1,
      category: 'Electronics',
      stock: 20,
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'HAVIT HV-G92 Gamepad',
      description:
        'Ergonomic gamepad with high precision controls and vibration feedback for immersive gaming.',
      price: '56',
      originalPrice: '70',
      discount: '-20%',
      rating: 4.4,
      ratingCount: 30,
      categoryId: 1,
      category: 'Electronics',
      stock: 30,
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Modern Sofa Set',
      description:
        'Comfortable and stylish sofa set perfect for your living room.',
      price: '899',
      originalPrice: '999',
      discount: '-10%',
      rating: 4.6,
      ratingCount: 42,
      categoryId: 2,
      category: 'Home & Lifestyle',
      stock: 8,
    },
    {
      id: 5,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Kitchen Blender Pro',
      description: 'High-powered blender for all your kitchen needs.',
      price: '79',
      originalPrice: '99',
      discount: '-20%',
      rating: 4.3,
      ratingCount: 28,
      categoryId: 2,
      category: 'Home & Lifestyle',
      stock: 25,
    },
    {
      id: 6,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Smart LED Lamp',
      description: 'WiFi-enabled LED lamp with multiple color options.',
      price: '45',
      originalPrice: '60',
      discount: '-25%',
      rating: 4.8,
      ratingCount: 50,
      categoryId: 2,
      category: 'Home & Lifestyle',
      stock: 40,
    },
    {
      id: 7,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Professional Tennis Racket',
      description: 'Tournament-grade tennis racket for serious players.',
      price: '120',
      originalPrice: '150',
      discount: '-20%',
      rating: 4.7,
      ratingCount: 35,
      categoryId: 3,
      category: 'Sports & Outdoor',
      stock: 18,
    },
    {
      id: 8,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Mountain Bike Pro',
      description: 'Durable mountain bike for adventure enthusiasts.',
      price: '499',
      originalPrice: '599',
      discount: '-17%',
      rating: 4.9,
      ratingCount: 45,
      categoryId: 3,
      category: 'Sports & Outdoor',
      stock: 12,
    },
    {
      id: 9,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Camping Tent XL',
      description: 'Spacious waterproof tent for family camping trips.',
      price: '199',
      originalPrice: '249',
      discount: '-20%',
      rating: 4.6,
      ratingCount: 38,
      categoryId: 3,
      category: 'Sports & Outdoor',
      stock: 22,
    },
  ];
  const banner1 = [
    {
      imageUrl: 'https://picsum.photos/300/200',
      url: '#1',
      title: 'example 1',
    },
    {
      imageUrl: 'https://picsum.photos/300/200',
      url: '#2',
      title: 'example 2',
    },
    {
      imageUrl: 'https://picsum.photos/300/200',
      url: '#3',
      title: 'example 3',
    },
  ];
  const banner2 = [
    {
      imageUrl: 'https://picsum.photos/300/200',
      url: '#1',
      title: 'example 1',
    },
    {
      imageUrl: 'https://picsum.photos/300/200',
      url: '#2',
      title: 'example 2',
    },
    {
      imageUrl: 'https://picsum.photos/300/200',
      url: '#3',
      title: 'example 3',
    },
  ];
  const category = [
    {
      id: 1,
      name: 'Phone',
      imageUrl: 'https://picsum.photos/300/200',
    },
    {
      id: 2,
      name: 'Computer',
      imageUrl: 'https://picsum.photos/300/200',
      url: '#',
    },
    {
      id: 3,
      name: 'SmartWatch',
      imageUrl: 'https://picsum.photos/300/200',
      url: '#',
    },
    {
      id: 4,
      name: 'Camera',
      imageUrl: 'https://picsum.photos/300/200',
      url: '#',
    },
    {
      id: 5,
      name: 'Headphone',
      imageUrl: 'https://picsum.photos/300/200',
      url: '#',
    },
    {
      id: 6,
      name: 'Gaming',
      imageUrl: 'https://picsum.photos/300/200',
      url: '#',
    },
    {
      id: 7,
      name: 'Fashion',
      imageUrl: 'https://picsum.photos/300/200',
      url: '#',
    },
  ];
  const featuredProducts = [
    {
      url: '#1',
      image: 'https://picsum.photos/100/200',
      title: 'Play Station 5',
      desc: 'Black and White version of the PS5 coming out on sale.',
    },
    {
      url: '#2',
      image:
        'https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg',
      title: 'Woman Collections',
      desc: 'Featured woman collections that give you another vibe.',
    },
    {
      url: '#3',
      image:
        'https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg',
      title: 'Speakers',
      desc: 'Amazon wireless speakers',
    },
    {
      url: '#4',
      image:
        'https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg',
      title: 'Perfume',
      desc: 'Perfume for you',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'Exclusive - Limited Edition Store',
    description:
      'Discover exclusive and limited edition items including electronics, fashion, collectibles, and more.',
    url: 'https://exclusive-store-front.vercel.app',
    logo: 'https://exclusive-store-front.vercel.app/favicon.ico',
    sameAs: [
      'https://www.facebook.com',
      'https://twitter.com',
      'https://www.instagram.com',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '21:00',
    },
  };

  return (
    <>
      <SEO
        description="Discover exclusive and limited edition items including electronics, fashion, collectibles, and more."
        image="https://exclusive-store-front.vercel.app/favicon.ico"
        jsonLd={jsonLd}
        keywords="exclusive, limited edition, electronics, fashion, collectibles"
        title="Exclusive - Limited Edition Store"
        url="https://exclusive-store-front.vercel.app"
      />

      <main className="container lg:space-y-32 lg:my-6 md:my-[3.75rem]">
        {/* HERO SECTION */}
        <section>
          <Banner data={banner1} height={'h-[220px] lg:h-[344px]'} />
        </section>

        {/* CATEGORY SECTION */}
        <section className="space-y-3 px-5 py-3 lg:p-0 md:space-y-20">
          <header className="flex justify-between">
            <SectionTitle
              subTitle={text.category}
              title={text.browseByCategory}
            />
            <div className="hidden md:flex gap-2 self-end">
              <button
                className="w-12 h-12 rounded-full bg-secondary-1 flex justify-center items-center"
                id="prev-category"
              >
                <Arrow />
              </button>
              <button
                className="w-12 h-12 rounded-full bg-secondary-1 flex justify-center items-center rotate-180"
                id="next-category"
              >
                <Arrow />
              </button>
            </div>
          </header>
          <div>
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 4.2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: '#prev-category',
                nextEl: '#next-category',
              }}
            >
              {category.map((item) => (
                <SwiperSlide key={item.id}>
                  <CategoryCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* BEST SELLING PRODUCT SECTION */}
        <section className="space-y-3 mb-5 md:space-y-20 px-5 lg:p-0">
          <header className="flex justify-between items-center">
            <SectionTitle subTitle={text.thisMonth} title={text.bestSelling} />

            <div className="flex gap-5 lg:self-end">
              <Link
                className="text-xs md:text-base lg:py-3 lg:px-10 text-button-2 md:text-white md:bg-button-2 md:hover:bg-button-hover-1 rounded-md"
                to={'/products'}
              >
                {text.viewAll}
              </Link>
            </div>
          </header>
          <div>
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {bestSellingProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="relative">
                    <ProductsCard product={product} showRating={true} />
                    <button className="flex justify-center items-center absolute right-2 top-2 lg:right-5 lg:top-5 bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                      <Love className="block md:hidden" />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* BANNER SECTION */}
        <section>
          <Banner data={banner2} height={'h-[180px] lg:h-[500px]'} />
        </section>

        {/* EXPLORE OUR PRODUCT SECTION */}
        <section className="space-y-5 md:space-y-20 p-5 lg:p-0">
          {/* HEADER */}
          <header className="flex justify-between">
            <SectionTitle
              subTitle={text.ourProduct}
              title={text.exploreProduct}
            />
            <div className="flex gap-2 self-end">
              <button
                className="hidden w-12 h-12 rounded-full bg-secondary-1 md:flex justify-center items-center"
                id="prev-our-product"
              >
                <Arrow />
              </button>
              <button
                className="hidden w-12 h-12 rounded-full bg-secondary-1 md:flex justify-center items-center rotate-180"
                id="next-our-product"
              >
                <Arrow />
              </button>
              <Link
                className="text-button-2 text-xs md:hidden"
                to={'/products'}
              >
                {text.viewAll}
              </Link>
            </div>
          </header>
          {/* PRODUCTS */}
          <div>
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              grid={{
                rows: 2,
                fill: 'row',
              }}
              modules={[Navigation, Grid]}
              navigation={{
                prevEl: '#prev-our-product',
                nextEl: '#next-our-product',
              }}
            >
              {exploreOurProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="relative">
                    <ProductsCard product={product} showRating={true} />
                    <button className="flex justify-center items-center absolute right-2 top-2 lg:right-5 lg:top-5 bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                      <Love className="block md:hidden" />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* BUTTON */}
          <div className="hidden md:flex">
            <Link
              className="hidden bg-button-2 hover:bg-button-hover-1 transition-colors text-white py-3 px-10 rounded-md mx-auto md:block"
              to={'/products'}
            >
              {text.viewAllProducts}
            </Link>
          </div>
        </section>

        {/* FEATURED PRODUCT SECTION */}
        <section className="space-y-5 md:space-y-20 p-5 lg:p-0">
          <header className="flex justify-between">
            <SectionTitle subTitle={text.featured} title={text.recommend} />
          </header>
          <div className="grid grid-cols-12 gap-1 border">
            {featuredProducts.map((item, index) => (
              <div
                key={index}
                // onClick={() => navigate(`/post/${item.slug}`)}
                className={`group ${index === 0 ? 'lg:row-span-2 col-span-6' : index === 1 ? 'col-span-6' : 'col-span-6 lg:col-span-3'}`}
              >
                <FeatureCard data={item} />
              </div>
            ))}
          </div>
        </section>

        {/* GUARANTEE SECTION */}
        <section className="space-y-5 md:space-y-20 p-5 lg:p-0">
          <Guarantee />
        </section>
      </main>
    </>
  );
};

export default Home;
