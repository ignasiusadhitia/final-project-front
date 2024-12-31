import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { SectionTitle, SEO } from '@components';

import ProductCard from '../components/ProductsCard';

const initialProducts = [
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
    description: 'Luxury duffle bag with premium materials and stylish design.',
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
];

const anotherProducts = [
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

const BestSelling = () => {
  const [products, setProducts] = useState(initialProducts);
  const lang = useSelector((state) => state.lang.lang);

  const handleShowMore = () => {
    setProducts((prevProducts) => [...prevProducts, ...anotherProducts]);
  };

  const translations = {
    en: {
      bestSelling: 'Best Selling Products',
      showMore: 'Show More',
    },
    id: {
      bestSelling: 'Produk Terlaris',
      showMore: 'Lebih Banyak',
    },
  };

  const text = translations[lang];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best Selling Products - Exclusive Store',
    url: 'https://exclusive-store-front.vercel.app/best-selling',
    description:
      'Shop our best selling products, from electronics to fashion and collectibles, all available in limited editions.',
    mainEntityOfPage: 'https://exclusive-store-front.vercel.app/best-selling',
  };

  return (
    <>
      <SEO
        description="Explore the best selling limited edition products at Exclusive, including top electronics, fashion, and collectibles."
        image="https://exclusive-store-front.vercel.app/favicon.ico"
        jsonLd={jsonLd}
        keywords="best selling products, exclusive best sellers, limited edition electronics, fashion"
        title="Best Selling Products - Exclusive Limited Edition Store"
        url="https://exclusive-store-front.vercel.app/best-selling"
      />

      <div className="container px-5 lg:mb-12 md:mt-16">
        <h3 className="md:hidden block text-sm text-black font-semibold">
          {text.bestSelling}
        </h3>
        <SectionTitle subTitle="Products" title={text.bestSelling} />
        <div className="lg:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 lg:mt-16">
          {products.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard showFavoriteButton showRating product={product} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center my-5 md:my-24">
          <button
            className="bg-secondary-3 w-[125px] hover:opacity-85 h-[45px] text-sm md:text-base lg:w-[184px] lg:h-[56px] text-text-1 rounded-md"
            onClick={handleShowMore}
          >
            {text.showMore}
          </button>
        </div>
      </div>
    </>
  );
};

export default BestSelling;
