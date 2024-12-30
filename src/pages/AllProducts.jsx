import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { SectionTitle, SEO } from '@components';

import ProductGrid from '../components/ProductGrid';

const AllProducts = () => {
  const lang = useSelector((state) => state.lang.lang);

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
      discount: '35',
      rating: 4.7,
      ratingCount: 65,
      categoryId: 3,
      category: 'Electronics',
      stock: 0,
      isNew: true,
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
      discount: '20',
      rating: 4.5,
      ratingCount: 55,
      categoryId: 3,
      category: 'Electronics',
      stock: 20,
      isNew: true,
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
      discount: '20',
      rating: 4.4,
      ratingCount: 30,
      categoryId: 3,
      category: 'Electronics',
      stock: 30,
      isNew: true,
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
      discount: '10',
      rating: 4.6,
      ratingCount: 42,
      categoryId: 1,
      category: "Woman's Fashion",
      stock: 8,
      isNew: false,
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
      discount: '35',
      rating: 4.7,
      ratingCount: 65,
      categoryId: 1,
      category: "Woman's Fashion",
      stock: 5,
      isNew: false,
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
      discount: '20',
      rating: 4.5,
      ratingCount: 45,
      categoryId: 3,
      category: 'Electronics',
      stock: 12,
      isNew: false,
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
      discount: '20',
      rating: 4.3,
      ratingCount: 28,
      categoryId: 4,
      category: 'Home & Lifestyle',
      stock: 15,
      isNew: false,
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
      discount: '17',
      rating: 4.6,
      ratingCount: 50,
      categoryId: 8,
      category: 'Groceries & Pets',
      stock: 40,
      isNew: false,
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
      discount: '17',
      rating: 4.7,
      ratingCount: 85,
      categoryId: 3,
      category: 'Electronics',
      stock: 10,
      isNew: false,
    },
    {
      id: 10,
      imageUrl:
        'https://res.cloudinary.com/dfcpbiabw/image/upload/v1735473534/product-1_djetbh.webp',
      name: 'Curology Product Set',
      description: 'Complete skincare set tailored for all skin types.',
      price: '50',
      originalPrice: '60',
      discount: '17',
      rating: 4.8,
      ratingCount: 150,
      categoryId: 9,
      category: 'Health & Beauty',
      stock: 25,
      isNew: false,
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
      discount: '15',
      rating: 4.5,
      ratingCount: 40,
      categoryId: 7,
      category: "Baby's & Toys",
      stock: 8,
      isNew: false,
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
      discount: '18',
      rating: 4.4,
      ratingCount: 25,
      categoryId: 6,
      category: 'Sports & Outdoors',
      stock: 20,
      isNew: false,
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
      categoryId: 3,
      category: 'Electronics',
      stock: 50,
      isNew: false,
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
      discount: '20',
      rating: 4.6,
      ratingCount: 35,
      categoryId: 2,
      category: "Man's Fashion",
      stock: 10,
      isNew: false,
    },
  ].map((product) => {
    if (product.discount && product.originalPrice) {
      const discountAmount =
        (parseFloat(product.originalPrice) * parseFloat(product.discount)) /
        100;
      return {
        ...product,
        price: (parseFloat(product.originalPrice) - discountAmount).toFixed(2),
        discount: `-${product.discount}%`, // Add % symbol for display
      };
    }
    return {
      ...product,
      price: product.originalPrice,
    };
  });

  const categories = [
    { id: 0, name: lang === 'id' ? 'Semua Produk' : 'All Products' },
    { id: 1, name: lang === 'id' ? 'Fesyen Wanita' : 'Woman’s Fashion' },
    { id: 2, name: lang === 'id' ? 'Fesyen Pria' : 'Men’s Fashion' },
    { id: 3, name: lang === 'id' ? 'Elektronik' : 'Electronics' },
    { id: 4, name: lang === 'id' ? 'Rumah & Gaya Hidup' : 'Home & Lifestyle' },
    { id: 5, name: lang === 'id' ? 'Obat-obatan' : 'Medicine' },
    {
      id: 6,
      name: lang === 'id' ? 'Olahraga & Luar Ruangan' : 'Sports & Outdoor',
    },
    { id: 7, name: lang === 'id' ? 'Mainan & Bayi' : 'Baby’s & Toys' },
    {
      id: 8,
      name: lang === 'id' ? 'Groceries & Hewan Peliharaan' : 'Groceries & Pets',
    },
    {
      id: 9,
      name: lang === 'id' ? 'Kesehatan & Kecantikan' : 'Health & Beauty',
    },
  ];

  // eslint-disable-next-line
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [showMore, setShowMore] = useState(false);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const filteredProducts =
    selectedCategory.id === 0
      ? products
      : products.filter(
          (product) => product.categoryId === selectedCategory.id
        );
  console.log(filteredProducts);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Exclusive Products',
    url: 'https://exclusive-store-front.vercel.app/products',
    description:
      'Browse exclusive and limited edition products across categories such as electronics, fashion, and collectibles.',
    mainEntityOfPage: 'https://exclusive-store-front.vercel.app/products',
  };

  return (
    <>
      <SEO
        description="Explore our exclusive collection of limited edition products including electronics, fashion, and collectibles."
        image="https://exclusive-store-front.vercel.app/favicon.ico"
        jsonLd={jsonLd}
        keywords="exclusive products, limited edition electronics, fashion, collectibles"
        title="Exclusive Products - Limited Edition Electronics, Fashion, and More"
        url="https://exclusive-store-front.vercel.app/products"
      />

      <div className="flex px-5 pb-10 lg:px-0 justify-start lg:justify-start lg:gap-14 container lg:mt-10">
        <div
          className={`h-full py-5 text-left ${filteredProducts.length !== 0 && 'lg:flex-1'}`}
        >
          <ul className="hidden lg:flex flex-col gap-4 justify-start">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`cursor-pointer hover:text-secondary-3 text-left w-full flex justify-start ${selectedCategory?.id === category.id ? 'text-secondary-3' : ''}`}
                onClick={() => handleSelectCategory(category)}
              >
                <span className="text-left text-base font-normal">
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-4">
          <SectionTitle
            hideTitle
            subTitle={selectedCategory.name}
            title={selectedCategory.name}
          />
          <ProductGrid showRating gridCols={3} products={filteredProducts} />

          {!showMore && filteredProducts.length !== 0 && (
            <button
              className="my-20 bg-secondary-3 hover:opacity-85 text-white font-medium text-base w-[184px] h-[56px] rounded mx-auto block"
              onClick={handleShowMore}
            >
              {lang === 'id' ? 'Lebih Banyak' : 'Show More'}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

AllProducts.propTypes = {
  initialProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      originalPrice: PropTypes.string,
      discount: PropTypes.string,
      rating: PropTypes.number,
      ratingCount: PropTypes.number,
      categoryId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default AllProducts;
