import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ProductsCard } from '@components';
import { Favorite, Love, Trash } from '@icons';

const Wishlist = () => {
  const navigate = useNavigate();

  // TODO: Replace with actual data from the backend
  const wishLists = [
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
  ];
  const justForYouProducts = [
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

  const [cart, setCart] = useState([]);
  // TODO: Replace with actual process
  const handleMoveAllToCart = () => {
    setCart(wishLists);
    console.log(cart);
    alert('All products moved to cart (console log)');
  };

  return (
    <div className="container mb-4 lg:mb-32 px-5 lg:p-0 lg:my-6 md:my-[3.75rem] space-y-10">
      {/* WISHLIST SECCTION */}
      <section>
        <div className="flex justify-between items-center">
          <h1 className="text-sm font-semibold lg:text-xl lg:font-medium">{`WishList (${wishLists.length})`}</h1>
          <button
            className="text-xs lg:text-base py-3 lg:px-10 text-secondary-3 lg:text-black rounded lg:border border-black/50 lg:hover:bg-black lg:hover:text-white transition-colors"
            onClick={handleMoveAllToCart}
          >
            Move All To Bag
          </button>
        </div>
        <div className="grid grid-cols-2 md:flex flex-wrap justify-between gap-5 mt-5">
          {wishLists.map((product) => (
              <div className='relative'>
                <ProductsCard key={product.id} product={product} />
                <button className='flex justify-center items-center absolute right-2 top-2 lg:right-5 lg:top-5 bg-white rounded-full w-6 h-6 md:w-8 md:h-8'>
                  <Trash className="hidden md:block" />
                  <Love className="block md:hidden" />
                </button>
              </div>
          ))}
        </div>
      </section>

      {/* JUST FOR YOU SECTION */}
      <section>
        <div className="flex justify-between items-center">
          {/* CUSTOM SECTION TITLE */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 items-center">
              <div className="w-5 h-10 hidden md:block bg-secondary-3 rounded"></div>
              <h2 className="text-sm md:text-xl text-black font-semibold">
                Just For You
              </h2>
            </div>
          </div>
          <button
            className="text-xs lg:text-base py-3 lg:px-10 text-secondary-3 lg:text-black rounded lg:border border-black/50 lg:hover:bg-black lg:hover:text-white transition-colors"
            onClick={() => navigate('/products')}
          >
            See All
          </button>
        </div>
        <div className="grid grid-cols-2 md:flex flex-wrap justify-between gap-5 mt-5">
          {justForYouProducts.map((product) => (
              <ProductsCard key={product.id} showRating={true} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
