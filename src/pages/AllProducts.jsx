import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { SectionTitle } from '@components';
import PropTypes from 'prop-types';

const AllProducts = () => {
  const initialProducts = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'ASUS FHD Gaming Laptop',
      description: 'Powerful gaming laptop with high-performance specs for a smooth gaming experience.',
      price: '960',
      originalPrice: '1160',
      discount: '-35%',
      rating: 4.7,
      ratingCount: 65,
      categoryId: 1,
      category: "Electronics",
      stock: 0
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'IPS LCD Gaming Monitor',
      description: 'Stunning visuals and crisp images with a high refresh rate for gaming and professional use.',
      price: '160',
      originalPrice: '200',
      discount: '-20%',
      rating: 4.5,
      ratingCount: 55,
      categoryId: 1,
      category: "Electronics",
      stock: 20
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'HAVIT HV-G92 Gamepad',
      description: 'Ergonomic gamepad with high precision controls and vibration feedback for immersive gaming.',
      price: '56',
      originalPrice: '70',
      discount: '-20%',
      rating: 4.4,
      ratingCount: 30,
      categoryId: 1,
      category: "Electronics",
      stock: 30
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Modern Sofa Set',
      description: 'Comfortable and stylish sofa set perfect for your living room.',
      price: '899',
      originalPrice: '999',
      discount: '-10%',
      rating: 4.6,
      ratingCount: 42,
      categoryId: 2,
      category: "Home & Lifestyle",
      stock: 8
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
      category: "Home & Lifestyle",
      stock: 25
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
      category: "Home & Lifestyle",
      stock: 40
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
      category: "Sports & Outdoor",
      stock: 18
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
      category: "Sports & Outdoor",
      stock: 12
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
      category: "Sports & Outdoor",
      stock: 22
    }
  ];
  const categories = [
    { id: 0, name: "All Products" },
    { id: 1, name: "Electronics" },
    { id: 2, name: "Home & Lifestyle" },
    { id: 3, name: "Sports & Outdoor" }
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

  const filteredProducts = selectedCategory.id === 0
    ? products
    : products.filter(product => product.categoryId === selectedCategory.id);

  return (
    <div className="flex w-full ">
      <div className="w-[30%] h-ful p-5 text-left">
        <ul className="space-y-3 flex flex-col items-center text-left">
          {categories.map(category => (
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
        <SectionTitle title={selectedCategory.name} subTitle={selectedCategory.name} hideTitle/> 
        <ProductGrid products={filteredProducts} gridCols={3} />
        {!showMore && (
          <button 
            onClick={handleShowMore} 
            className="my-20 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded mx-auto block"
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
      stock: PropTypes.number.isRequired
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default AllProducts; 