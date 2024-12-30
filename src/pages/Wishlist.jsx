import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { removeFromWishlist } from '@store/features/authSlice';

import { ProductsCard } from '@components';
import { Love, Trash } from '@icons';

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const { user } = useSelector((state) => state.auth);
  const wishLists = user?.wishlist;

  const translations = {
    en: {
      wishlist: 'Wishlist',
      moveAllToBag: 'Move All To Bag',
      justForYou: 'Just For You',
      seeAll: 'See All',
    },
    id: {
      wishlist: 'Daftar Keinginan',
      moveAllToBag: 'Pindahkan Semua',
      justForYou: 'Hanya Untuk Kamu',
      seeAll: 'Lihat Semua',
    },
  };

  const text = translations[lang];

  // TODO: Replace with actual data from the backend
  const justForYouProducts = [
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
  ];

  const [cart, setCart] = useState([]);
  // TODO: Replace with actual process
  const handleMoveAllToCart = () => {
    setCart(wishLists);
    console.log(cart);
    alert('All products moved to cart (console log)');
  };

  const handleRemoveWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
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
            {text.moveAllToBag}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8 mt-5">
          {wishLists &&
            wishLists.map((product) => (
              <div key={product.id} className="relative">
                <ProductsCard product={product} />
                <button className="flex justify-center items-center absolute right-2 top-2 lg:right-5 lg:top-5 bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                  <Trash
                    className="hidden md:block"
                    onClick={() => handleRemoveWishlist(product.id)}
                  />
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
                {text.justForYou}
              </h2>
            </div>
          </div>
          <button
            className="text-xs lg:text-base py-3 lg:px-10 text-secondary-3 lg:text-black rounded lg:border border-black/50 lg:hover:bg-black lg:hover:text-white transition-colors"
            onClick={() => navigate('/products')}
          >
            {text.seeAll}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8 mt-5">
          {justForYouProducts.map((product) => (
            <ProductsCard
              key={product.id}
              product={product}
              showRating={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
