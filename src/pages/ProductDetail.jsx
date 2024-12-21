import React, { useState } from 'react';

import ReactStars from 'react-rating-stars-component';

import { ProductsCard, SectionTitle } from '@components';
import { DeliveryPlain, Minus, Plus, Return, WishList } from '@icons';
import { productImg1, productImg2, productImg3, productImg5 } from '@images';

const product = {
  images: [productImg1, productImg2, productImg3, productImg5],
  name: 'Havic HV G-92 Gamepad',
  price: 1200,
  desc: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  variant: { size: ['XS', 'S', 'M', 'L', 'XL'] },
  rating: 4.7,
  ratingCount: 65,
  categoryId: 1,
  category: 'Electronics',
  stock: 10,
};

// TODO: Replace with actual data from the backend
const relatedProducts = [
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

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variant.size[0]
  );

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <main className="container mt-[33px] mb-[140px]">
      {/* Main Product Section */}
      <section className="flex gap-[37px]">
        {/* Product Image */}

        <div className="grow">
          <div className="w-full h-[496px] flex justify-center items-center bg-secondary-1 rounded">
            <img
              alt="product-image"
              className="h-[315px]"
              src={selectedImage}
            />
          </div>

          <div className="mt-5 grid grid-cols-4 gap-[23px]">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="w-full h-[138px] flex justify-center items-center cursor-pointer rounded bg-secondary-1"
                onClick={() => handleImageClick(image)}
              >
                <img
                  alt="product-image"
                  className="h-[114px] p-3"
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="w-[405px] mt-[47px]">
          <h1 className="text-2xl leading-6 font-semibold">{product.name}</h1>
          <div className="mt-4 flex items-center gap-2">
            <ReactStars
              activeColor="#FBBF24"
              count={5}
              edit={false}
              isHalf={true}
              size={24}
              value={product.rating}
            />
            <div className="flex items-center gap-4">
              <span className="block text-black opacity-50 text-sm">
                ({product.ratingCount} Reviews)
              </span>

              <span className="block">|</span>
              <span
                className={`block text-sm ${product.stock > 0 ? 'text-button-1' : 'text-button-2'}`}
              >
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
          <h2 className="mt-4 text-2xl">${product.price}</h2>
          <p className="mt-6 mb-6 text-sm">{product.desc}</p>
          <hr className="border-t-[1px] border-black opacity-50" />

          {product.variant && (
            <div className="mt-6 flex items-center gap-6">
              <h3 className="text-xl font-normal">Size:</h3>
              <div className="flex items-center gap-3">
                {product.variant.size.map((size, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 flex justify-center items-center border-[1px] border-black border-opacity-50 rounded hover:bg-button-2 hover:text-text-1 hover:border-none ${selectedVariant === size ? 'bg-button-2 text-text-1 border-none' : ''}`}
                    onClick={() => handleVariantClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-[68px] flex items-center gap-[13px]">
            <div className="flex items-center">
              <button
                className="flex justify-center items-center w-10 h-11 border-[1px] border-black border-opacity-50 rounded-tl rounded-bl hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
                // onClick={() => setQuantity('dec')}
              >
                <Minus />
              </button>
              <input
                className="w-20 h-11 text-center border-y-[1px] border-black border-opacity-50"
                id="quantity"
                name="quantity"
                type="text"
                // value={item.qty}
                // onChange={handleInputChange}
              />
              <button
                className="flex justify-center items-center w-10 h-11 border-[1px] border-black border-opacity-50 rounded-tr rounded-br hover:bg-button-2 text-primary-2 hover:text-white hover:border-none"
                // onClick={() => setQuantity('inc')}
              >
                <Plus />
              </button>
            </div>
            <div className="flex items-center gap-[2px]">
              <button className="py-[10px] px-12 text-text-1 bg-button-2 hover:bg-button-hover-1 rounded">
                Add to Cart
              </button>
              <button className="w-10 h-10 flex justify-center items-center border-[1px] border-black border-opacity-50 rounded">
                <WishList />
              </button>
            </div>
          </div>

          <div className="border-[1px] border-black border-opacity-50 mt-[58px] rounded">
            <div className="mt-6 mb-4 mx-4 flex items-center gap-4 ">
              <div>
                <DeliveryPlain />
              </div>
              <div>
                <h3 className="font-medium">Free Delivery</h3>
                <p className="mt-2 text-xs underline cursor-pointer">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="border-b-[1px] border-black border-opacity-50"></div>
            <div className="mt-4 mb-6 mx-4 flex items-center gap-4">
              <div>
                <Return />
              </div>
              <div>
                <h3 className="font-medium">Return Delivery</h3>
                <p className="mt-2 text-xs">
                  Free 30 Days Delivery Returns.{' '}
                  <span className="underline cursor-pointer">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Product Section */}
      <section className="mt-[133px]">
        <SectionTitle hideTitle subTitle="Related Item" />
        <div className="grid grid-cols-4 gap-[30px] mt-[60px]">
          {relatedProducts?.map((product) => (
            <ProductsCard
              key={product.id}
              showFavoriteButton
              showRating
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
