import React, { useState } from 'react';

import { SectionTitle } from '@components';
import { Love } from '@icons';

import ProductCard from '../components/ProductsCard';

const initialProducts = [
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
];

const anotherProducts = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/400/300',
    name: 'HP Spectre x360 Laptop',
    description:
      'Premium convertible laptop with sleek design and exceptional performance for work and play.',
    price: '1200',
    originalPrice: '1400',
    discount: '-15%',
    rating: 4.8,
    ratingCount: 120,
    categoryId: 1,
    category: 'Electronics',
    stock: 10,
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/400/300',
    name: 'Samsung QLED 4K Smart TV',
    description:
      'Stunning 4K resolution with a rich color experience for an immersive viewing experience.',
    price: '850',
    originalPrice: '1100',
    discount: '-23%',
    rating: 4.7,
    ratingCount: 95,
    categoryId: 1,
    category: 'Electronics',
    stock: 5,
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/400/300',
    name: 'Razer Kraken Gaming Headset',
    description:
      'High-quality gaming headset with surround sound and a comfortable fit for long gaming sessions.',
    price: '80',
    originalPrice: '100',
    discount: '-20%',
    rating: 4.6,
    ratingCount: 80,
    categoryId: 1,
    category: 'Electronics',
    stock: 50,
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/400/300',
    name: 'Leather Reclining Sofa',
    description:
      'Luxurious leather recliner for maximum comfort and relaxation.',
    price: '1250',
    originalPrice: '1500',
    discount: '-17%',
    rating: 4.5,
    ratingCount: 60,
    categoryId: 2,
    category: 'Home & Lifestyle',
    stock: 15,
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/400/300',
    name: 'Vitamix Professional Blender',
    description:
      'Powerful blender designed for quick and efficient blending, ideal for smoothies and soups.',
    price: '150',
    originalPrice: '200',
    discount: '-25%',
    rating: 4.9,
    ratingCount: 40,
    categoryId: 2,
    category: 'Home & Lifestyle',
    stock: 30,
  },
  {
    id: 6,
    imageUrl: 'https://picsum.photos/400/300',
    name: 'Philips Hue Smart Bulb',
    description:
      'Smart lighting with adjustable brightness and a range of colors to set the perfect ambiance.',
    price: '35',
    originalPrice: '45',
    discount: '-22%',
    rating: 4.8,
    ratingCount: 70,
    categoryId: 2,
    category: 'Home & Lifestyle',
    stock: 60,
  },
  {
    id: 7,
    imageUrl: 'https://picsum.photos/400/300',
    name: 'Wilson Ultra Tennis Racket',
    description:
      'High-performance racket designed for intermediate to advanced players looking to elevate their game.',
    price: '150',
    originalPrice: '180',
    discount: '-17%',
    rating: 4.6,
    ratingCount: 50,
    categoryId: 3,
    category: 'Sports & Outdoor',
    stock: 20,
  },
  {
    id: 8,
    imageUrl: 'https://picsum.photos/400/300',
    name: 'Schwinn Mountain Bike',
    description:
      'Durable and reliable mountain bike built for all-terrain riding and outdoor adventures.',
    price: '550',
    originalPrice: '650',
    discount: '-15%',
    rating: 4.7,
    ratingCount: 55,
    categoryId: 3,
    category: 'Sports & Outdoor',
    stock: 10,
  },
];

const BestSelling = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleShowMore = () => {
    setProducts((prevProducts) => [...prevProducts, ...anotherProducts]);
  };

  return (
    <div className="container px-5 lg:mb-12 md:mt-16">
      <h3 className="md:hidden block text-sm text-black font-semibold">
        Best Selling Product
      </h3>
      <SectionTitle subTitle="Products" title="Best Selling Products" />
      <div className="lg:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 lg:mt-16">
        {products.map((product) => (
          <div className="relative">
            <ProductCard key={product.id} product={product} showRating={true} />
            <button className="flex justify-center items-center absolute right-2 top-2 lg:right-5 lg:top-5 bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
              <Love className="block md:hidden" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center my-5 md:my-24">
        <button
          className="bg-secondary-3 w-[125px] hover:opacity-85 h-[45px] text-sm md:text-base lg:w-[184px] lg:h-[56px] text-text-1 rounded-md"
          onClick={handleShowMore}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default BestSelling;
