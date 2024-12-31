import React, { useState, useEffect } from 'react';

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
import { Arrow } from '@icons';

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
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473518/product-4_igwvhe.webp',
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
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473528/product-16_ubcw7e.webp',
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
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473526/product-13_r9jkdq.webp',
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
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473519/product-6_jhqlkr.webp',
      name: 'The North Coat',
      description:
        'Warm, durable, and stylish winter coat for outdoor activities.',
      price: '899',
      originalPrice: '999',
      discount: '-10%',
      rating: 4.6,
      ratingCount: 42,
      categoryId: 2,
      category: 'Fashion',
      stock: 8,
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473519/product-7_husrah.webp',
      name: 'Gucci Duffle Bag',
      description:
        'Luxury duffle bag with premium materials and stylish design.',
      price: '960',
      originalPrice: '1160',
      discount: '-35%',
      rating: 4.7,
      ratingCount: 65,
      categoryId: 2,
      category: 'Fashion',
      stock: 5,
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473526/product-12_fxy9am.webp',
      name: 'RGB Liquid CPU Cooler',
      description:
        'Efficient cooling solution with customizable RGB lighting for high-performance PCs.',
      price: '120',
      originalPrice: '150',
      discount: '-20%',
      rating: 4.5,
      ratingCount: 45,
      categoryId: 1,
      category: 'Electronics',
      stock: 12,
    },
    {
      id: 7,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473527/product-15_aai15u.webp',
      name: 'Small Bookshelf',
      description:
        'Compact and sturdy bookshelf, ideal for small spaces and organization.',
      price: '60',
      originalPrice: '75',
      discount: '-20%',
      rating: 4.3,
      ratingCount: 28,
      categoryId: 3,
      category: 'Home & Lifestyle',
      stock: 15,
    },
    {
      id: 8,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473519/product-5_ymwkfq.webp',
      name: 'Breed Dry Dog Food',
      description:
        'Nutritious dry dog food for all breeds, promoting health and vitality.',
      price: '25',
      originalPrice: '30',
      discount: '-17%',
      rating: 4.6,
      ratingCount: 50,
      categoryId: 4,
      category: 'Pet Supplies',
      stock: 40,
    },
    {
      id: 9,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473518/product-2_rct6xf.webp',
      name: 'CANON EOS DSLR Camera',
      description:
        'High-quality DSLR camera with advanced features for photography enthusiasts.',
      price: '960',
      originalPrice: '1160',
      discount: '-17%',
      rating: 4.7,
      ratingCount: 85,
      categoryId: 1,
      category: 'Electronics',
      stock: 10,
    },
    {
      id: 10,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473534/product-1_djetbh.webp',
      name: 'Curology Product Set',
      description: 'Complete skincare set tailored for all skin types.',
      price: '50',
      originalPrice: '60',
      discount: '-17%',
      rating: 4.8,
      ratingCount: 150,
      categoryId: 5,
      category: 'Beauty & Personal Care',
      stock: 25,
    },
    {
      id: 11,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473521/product-11_gepaxy.webp',
      name: 'Kids Electric Car',
      description:
        'Fun and safe electric car for kids, with realistic design and features.',
      price: '300',
      originalPrice: '350',
      discount: '-15%',
      rating: 4.5,
      ratingCount: 40,
      categoryId: 6,
      category: 'Toys & Games',
      stock: 8,
    },
    {
      id: 12,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473520/product-8_d3somb.webp',
      name: 'Jr. Zoom Soccer Cleats',
      description:
        'Lightweight and durable soccer cleats designed for young players.',
      price: '45',
      originalPrice: '55',
      discount: '-18%',
      rating: 4.4,
      ratingCount: 25,
      categoryId: 7,
      category: 'Sports & Outdoors',
      stock: 20,
    },
    {
      id: 13,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473520/product-9_fwcsjw.webp',
      name: 'GP11 Shooter USB Gamepad',
      description:
        'Compact USB gamepad with responsive controls for an enhanced gaming experience.',
      price: '35',
      originalPrice: '45',
      discount: '-22%',
      rating: 4.3,
      ratingCount: 30,
      categoryId: 1,
      category: 'Electronics',
      stock: 50,
    },
    {
      id: 14,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473521/product-10_tc4ykt.webp',
      name: 'Quilted Satin Jacket',
      description:
        'Elegant and warm quilted satin jacket, perfect for casual outings.',
      price: '120',
      originalPrice: '150',
      discount: '-20%',
      rating: 4.6,
      ratingCount: 35,
      categoryId: 2,
      category: 'Fashion',
      stock: 10,
    },
  ];
  const category = [
    {
      id: 1,
      name: 'Phone',
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471173/cellphone_remrhe.svg',
    },
    {
      id: 2,
      name: 'Computer',
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471174/computer_g5pzu4.svg',
      url: '#',
    },
    {
      id: 3,
      name: 'SmartWatch',
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471174/smartwatch_dr8dil.svg',
      url: '#',
    },
    {
      id: 4,
      name: 'Camera',
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471174/camera_urfoyt.svg',
      url: '#',
    },
    {
      id: 5,
      name: 'Headphone',
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471208/headphone_cerq9k.svg',
      url: '#',
    },
    {
      id: 6,
      name: 'Gaming',
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471174/gamepad_q8kzm2.svg',
      url: '#',
    },
    {
      id: 7,
      name: 'Fashion',
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735476157/fashion_dhq3id.svg',
      url: '#',
    },
  ];
  const exploreOurProducts = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473518/product-4_igwvhe.webp',
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
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473528/product-16_ubcw7e.webp',
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
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473526/product-13_r9jkdq.webp',
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
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473519/product-6_jhqlkr.webp',
      name: 'The North Coat',
      description:
        'Warm, durable, and stylish winter coat for outdoor activities.',
      price: '899',
      originalPrice: '999',
      discount: '-10%',
      rating: 4.6,
      ratingCount: 42,
      categoryId: 2,
      category: 'Fashion',
      stock: 8,
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473519/product-7_husrah.webp',
      name: 'Gucci Duffle Bag',
      description:
        'Luxury duffle bag with premium materials and stylish design.',
      price: '960',
      originalPrice: '1160',
      discount: '-35%',
      rating: 4.7,
      ratingCount: 65,
      categoryId: 2,
      category: 'Fashion',
      stock: 5,
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473526/product-12_fxy9am.webp',
      name: 'RGB Liquid CPU Cooler',
      description:
        'Efficient cooling solution with customizable RGB lighting for high-performance PCs.',
      price: '120',
      originalPrice: '150',
      discount: '-20%',
      rating: 4.5,
      ratingCount: 45,
      categoryId: 1,
      category: 'Electronics',
      stock: 12,
    },
    {
      id: 7,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473527/product-15_aai15u.webp',
      name: 'Small Bookshelf',
      description:
        'Compact and sturdy bookshelf, ideal for small spaces and organization.',
      price: '60',
      originalPrice: '75',
      discount: '-20%',
      rating: 4.3,
      ratingCount: 28,
      categoryId: 3,
      category: 'Home & Lifestyle',
      stock: 15,
    },
    {
      id: 8,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473519/product-5_ymwkfq.webp',
      name: 'Breed Dry Dog Food',
      description:
        'Nutritious dry dog food for all breeds, promoting health and vitality.',
      price: '25',
      originalPrice: '30',
      discount: '-17%',
      rating: 4.6,
      ratingCount: 50,
      categoryId: 4,
      category: 'Pet Supplies',
      stock: 40,
    },
    {
      id: 9,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473518/product-2_rct6xf.webp',
      name: 'CANON EOS DSLR Camera',
      description:
        'High-quality DSLR camera with advanced features for photography enthusiasts.',
      price: '960',
      originalPrice: '1160',
      discount: '-17%',
      rating: 4.7,
      ratingCount: 85,
      categoryId: 1,
      category: 'Electronics',
      stock: 10,
    },
    {
      id: 10,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473534/product-1_djetbh.webp',
      name: 'Curology Product Set',
      description: 'Complete skincare set tailored for all skin types.',
      price: '50',
      originalPrice: '60',
      discount: '-17%',
      rating: 4.8,
      ratingCount: 150,
      categoryId: 5,
      category: 'Beauty & Personal Care',
      stock: 25,
    },
    {
      id: 11,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473521/product-11_gepaxy.webp',
      name: 'Kids Electric Car',
      description:
        'Fun and safe electric car for kids, with realistic design and features.',
      price: '300',
      originalPrice: '350',
      discount: '-15%',
      rating: 4.5,
      ratingCount: 40,
      categoryId: 6,
      category: 'Toys & Games',
      stock: 8,
    },
    {
      id: 12,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473520/product-8_d3somb.webp',
      name: 'Jr. Zoom Soccer Cleats',
      description:
        'Lightweight and durable soccer cleats designed for young players.',
      price: '45',
      originalPrice: '55',
      discount: '-18%',
      rating: 4.4,
      ratingCount: 25,
      categoryId: 7,
      category: 'Sports & Outdoors',
      stock: 20,
    },
    {
      id: 13,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473520/product-9_fwcsjw.webp',
      name: 'GP11 Shooter USB Gamepad',
      description:
        'Compact USB gamepad with responsive controls for an enhanced gaming experience.',
      price: '35',
      originalPrice: '45',
      discount: '-22%',
      rating: 4.3,
      ratingCount: 30,
      categoryId: 1,
      category: 'Electronics',
      stock: 50,
    },
    {
      id: 14,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473521/product-10_tc4ykt.webp',
      name: 'Quilted Satin Jacket',
      description:
        'Elegant and warm quilted satin jacket, perfect for casual outings.',
      price: '120',
      originalPrice: '150',
      discount: '-20%',
      rating: 4.6,
      ratingCount: 35,
      categoryId: 2,
      category: 'Fashion',
      stock: 10,
    },
  ];
  const topBannerSm = [
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735498054/banner-1-sm_dshnsu.png',
      url: '#1',
      title: 'example 1',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735498054/banner-1-sm_dshnsu.png',
      url: '#2',
      title: 'example 2',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735498054/banner-1-sm_dshnsu.png',
      url: '#3',
      title: 'example 3',
    },
  ];
  const topBannerLg = [
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471956/banner-1_izj8ao.webp',
      url: '#1',
      title: 'example 1',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471956/banner-1_izj8ao.webp',
      url: '#2',
      title: 'example 2',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471956/banner-1_izj8ao.webp',
      url: '#3',
      title: 'example 3',
    },
  ];
  const middleBannerSm = [
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735498054/banner-2-sm_wz9wyr.png',
      url: '#1',
      title: 'example 1',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735498054/banner-2-sm_wz9wyr.png',
      url: '#2',
      title: 'example 2',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735498054/banner-2-sm_wz9wyr.png',
      url: '#3',
      title: 'example 3',
    },
  ];
  const middleBannerLg = [
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471956/banner-2_ezctdq.webp',
      url: '#1',
      title: 'example 1',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471956/banner-2_ezctdq.webp',
      url: '#2',
      title: 'example 2',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735471956/banner-2_ezctdq.webp',
      url: '#3',
      title: 'example 3',
    },
  ];
  const featuredProductsSm = [
    {
      url: '#1',
      image:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735495916/Frame_684_maazev.png',
    },
    {
      url: '#2',
      image:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735495915/Frame_685_gudtoy.png',
    },
    {
      url: '#3',
      image:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735495916/Frame_684-1_kwmqvi.png',
    },
    {
      url: '#4',
      image:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735495916/Frame_685-1_byonmb.png',
    },
  ];
  const featuredProductsLg = [
    {
      url: '#1',
      image:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735495906/recommended-product-1_rfp0wm.webp',
    },
    {
      url: '#2',
      image:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735495906/recommended-product-2_dbumhq.webp',
    },
    {
      url: '#3',
      image:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735495906/recommended-product-3_kmtv7l.webp',
    },
    {
      url: '#4',
      image:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735495906/recommended-product-4_fuzfir.webp',
    },
  ];
  const [featuredProducts, setFeaturedProducts] = useState(featuredProductsLg);

  const [topBanner, setTopBanner] = useState(topBannerSm);
  const [middleBanner, setMiddleBanner] = useState(middleBannerSm);
  useEffect(() => {
    const updateBanner = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setTopBanner(topBannerLg);
        setMiddleBanner(middleBannerLg);
        setFeaturedProducts(featuredProductsLg);
      } else {
        setTopBanner(topBannerSm);
        setMiddleBanner(middleBannerSm);
        setFeaturedProducts(featuredProductsSm);
      }
    };
    updateBanner();
    window.addEventListener('resize', updateBanner);
    return () => window.removeEventListener('resize', updateBanner);
  }, []);

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
          <Banner data={topBanner} />
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
                    <ProductsCard
                      showFavoriteButton
                      showRating
                      product={product}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* BANNER SECTION */}
        <section>
          <Banner data={middleBanner} />
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
                    <ProductsCard
                      showFavoriteButton
                      showRating
                      product={product}
                    />
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
          <div className="grid grid-cols-12 gap-2">
            {featuredProducts.map((item, index) => (
              <div
                key={index}
                // onClick={() => navigate(`/post/${item.slug}`)}
                className={`group h-full rounded-md overflow-hidden ${index === 0 ? 'lg:row-span-2 col-span-6' : index === 1 ? 'col-span-6' : 'col-span-6 lg:col-span-3'}`}
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
