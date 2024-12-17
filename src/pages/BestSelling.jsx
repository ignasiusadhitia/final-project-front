import { SectionTitle } from '@components';
import React from 'react';
import ProductCard from '../components/ProductsCard';

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
];

const BestSelling = () => {
  return (
    <div className='container mt-16'>
      <SectionTitle title='Best Selling Products' subTitle='Products' />
      <div className='grid grid-cols-4 gap-5 mt-16'>
          {initialProducts.map((product) => (
            <ProductCard product={product} />
          ))}
      </div>

      <div className='flex items-center justify-center my-24'>
        <button className='bg-secondary-3 w-[184px] h-[56px] text-text-1 rounded-md'>Show More</button>
      </div>
    </div>
  );
};

export default BestSelling;
