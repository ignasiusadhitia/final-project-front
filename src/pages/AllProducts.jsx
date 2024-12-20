import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { SectionTitle } from '@components';

import ProductGrid from '../components/ProductGrid';

const AllProducts = () => {
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
    { id: 0, name: 'All Products' },
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Home & Lifestyle' },
    { id: 3, name: 'Sports & Outdoor' },
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

  return (
    <div className="flex w-full ">
      <div className="w-[30%] h-ful p-5 text-left">
        <ul className="space-y-3 flex flex-col items-center text-left">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`cursor-pointer hover:text-red-500 text-left w-full flex justify-end ${selectedCategory?.id === category.id ? 'text-red-500' : ''}`}
              onClick={() => handleSelectCategory(category)}
            >
              <span className="text-left w-[70%] ">{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow py-4 mx-5">
        <SectionTitle
          hideTitle
          subTitle={selectedCategory.name}
          title={selectedCategory.name}
        />
        <ProductGrid showRating gridCols={3} products={filteredProducts} />

        {!showMore && (
          <button
            className="my-20 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded mx-auto block"
            onClick={handleShowMore}
          >
            Show More
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
