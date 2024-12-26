import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { SectionTitle } from '@components';

import ProductGrid from '../components/ProductGrid';
import { useSelector } from 'react-redux';

const AllProducts = () => {
  const lang = useSelector((state) => state.lang.lang);

  const initialProducts = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'ASUS FHD Gaming Laptop',
      description:
        'Powerful gaming laptop with high-performance specs for a smooth gaming experience.',
      originalPrice: '1160',
      categoryId: 1,
      category: 'Electronics',
      stock: 0,
      rating: 4.5,
      ratingCount: 125,
      isNew: true,
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'IPS LCD Gaming Monitor',
      description:
        'Stunning visuals and crisp images with a high refresh rate for gaming and professional use.',
      originalPrice: '200',
      discount: '20',
      categoryId: 1,
      category: 'Electronics',
      stock: 20,
      isNew: true,
      rating: 4.8,
      ratingCount: 89,
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'HAVIT HV-G92 Gamepad',
      description:
        'Ergonomic gamepad with high precision controls and vibration feedback for immersive gaming.',
      originalPrice: '70',
      discount: '20',
      categoryId: 1,
      category: 'Electronics',
      stock: 30,
      rating: 4.2,
      ratingCount: 78,
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Modern Sofa Set',
      description:
        'Comfortable and stylish sofa set perfect for your living room.',
      originalPrice: '999',
      discount: '10',
      categoryId: 2,
      category: 'Home & Lifestyle',
      stock: 8,
      rating: 4.7,
      ratingCount: 45,
    },
    {
      id: 5,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Kitchen Blender Pro',
      description: 'High-powered blender for all your kitchen needs.',
      originalPrice: '99',
      discount: '20',
      categoryId: 2,
      category: 'Home & Lifestyle',
      stock: 25,
      rating: 4.4,
      ratingCount: 156,
    },
    {
      id: 6,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Smart LED Lamp',
      description: 'WiFi-enabled LED lamp with multiple color options.',
      originalPrice: '60',
      discount: '25',
      categoryId: 2,
      category: 'Home & Lifestyle',
      stock: 40,
      rating: 4.3,
      ratingCount: 98,
    },
    {
      id: 7,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Professional Tennis Racket',
      description: 'Tournament-grade tennis racket for serious players.',
      originalPrice: '150',
      discount: '20',
      categoryId: 3,
      category: 'Sports & Outdoor',
      stock: 18,
      rating: 4.6,
      ratingCount: 67,
    },
    {
      id: 8,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Mountain Bike Pro',
      description: 'Durable mountain bike for adventure enthusiasts.',
      originalPrice: '599',
      discount: '17',
      categoryId: 3,
      category: 'Sports & Outdoor',
      stock: 12,
      rating: 4.9,
      ratingCount: 34,
    },
    {
      id: 9,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Camping Tent XL',
      description: 'Spacious waterproof tent for family camping trips.',
      originalPrice: '249',
      discount: '20',
      categoryId: 3,
      category: 'Sports & Outdoor',
      stock: 22,
      rating: 4.5,
      ratingCount: 89,
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
    { id: 6, name: lang === 'id' ? 'Olahraga & Luar Ruangan' : 'Sports & Outdoor' },
    { id: 7, name: lang === 'id' ? 'Mainan & Bayi' : 'Baby’s & Toys' },
    { id: 8, name: lang === 'id' ? 'Groceries & Hewan Peliharaan' : 'Groceries & Pets' },
    { id: 9, name: lang === 'id' ? 'Kesehatan & Kecantikan' : 'Health & Beauty' },
  ];

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

  return (
    <div className="flex px-5 lg:px-0 justify-start lg:justify-between container lg:mt-10">
      <div className="h-full py-5 text-left">
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

        {!showMore && (
          <button
            className="my-20 bg-secondary-3 hover:opacity-85 text-white font-medium text-base w-[184px] h-[56px] rounded mx-auto block"
            onClick={handleShowMore}
          >
            {lang === 'id' ? 'Lebih Banyak' : 'Show More'}
          </button>
        )}
      </div>
    </div>
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
