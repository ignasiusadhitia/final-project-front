import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { addToWishlist } from '@store/features/authSlice';
import { addToCart } from '@store/features/productSlice';

import {
  BottomSheet,
  ProductDetailDesktop,
  ProductDetailMobile,
  ProductsCard,
  SectionTitle,
  SEO,
} from '@components';
import { WishList } from '@icons';
import {
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
} from '@images';

import 'swiper/css';

const product = {
  images: [productImg1, productImg2, productImg3, productImg4, productImg5],
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
];

const ProductDetail = () => {
  const { product: selectedProduct } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  const [selectedImage, setSelectedImage] = useState(selectedProduct.imageUrl);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variant.size[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  const handleBottomSheetOpen = () => {
    setBottomSheetOpen((prev) => !prev);
  };

  const handleQuantityInputChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSetQuantity = (type) => {
    if (type === 'inc') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'dec') {
      setQuantity((prev) => prev - 1);
    } else {
      return;
    }
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      return navigate('/login');
    } else {
      dispatch(addToCart({ product: selectedProduct, quantity }));
      navigate('/cart');
    }
  };

  const handleAddToWishlist = () => {
    if (!isAuthenticated) {
      return navigate('/login');
    } else {
      dispatch(addToWishlist(selectedProduct));

      navigate('/wishlist');
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images[0],
    description: product.description,
    sku: id,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price,
      availability: 'https://schema.org/InStock',
      url: `https://exclusive-store-front.vercel.app/products/${id}`,
    },
  };

  useEffect(() => {
    setSelectedImage(selectedProduct.imageUrl);
  }, [selectedProduct]);

  return (
    <>
      <SEO
        description={product.description}
        image={product.images[0]}
        jsonLd={jsonLd}
        keywords={`${product.name}, exclusive, limited edition`}
        title={`${product.name} - Exclusive`}
        url={`https://exclusive-store-front.vercel.app/products/${id}`}
      />
      <main className="container mt-6 md:mt-[33px] mb-6 md:mb-[140px]">
        {/* Main Product Section */}
        <div className="block md:hidden">
          <Swiper
            className="mySwiper"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[240px] flex justify-center cursor-pointer rounded bg-secondary-1">
                  <img
                    alt="product-image"
                    className="h[114px] py-6"
                    src={selectedProduct.imageUrl}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute flex justify-center items-center w-8 h-4 mx-6 mt-[-24px] text-[8px] border-[1px] border-black border-opacity-50 rounded-sm z-10">
            <span className="block mt-[2.5px]">
              {activeSlide}/{product?.images.length}
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <ProductDetailDesktop
            product={product}
            quantity={quantity}
            selectedImage={selectedImage}
            selectedVariant={selectedVariant}
            onAddToCartHandler={handleAddToCart}
            onAddToWishlistHandler={handleAddToWishlist}
            onImageClickHandler={handleImageClick}
            onQuantityInputChangeHandler={handleQuantityInputChange}
            onSetQuantityHandler={handleSetQuantity}
            onVariantClickHandler={handleVariantClick}
          />
        </div>

        <div className="block md:hidden">
          <ProductDetailMobile
            product={selectedProduct}
            selectedImage={selectedImage}
            selectedVariant={selectedVariant}
            onBottomSheetOpenHandler={handleBottomSheetOpen}
            onImageClickHandler={handleImageClick}
            onVariantClickHandler={handleVariantClick}
          />
        </div>

        {/* Related Product Section */}
        <section className="mt-20 px-6 md:px-0">
          <SectionTitle
            hideTitle
            subTitle="Related Items"
            title="Related Items"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[26px] md:gap-30 mt-10">
            {relatedProducts.map((product) => (
              <ProductsCard
                key={product.id}
                showFavoriteButton
                showRating
                product={product}
              />
            ))}
          </div>
        </section>
        <div className="w-full px-6 py-4 mt-[58px] fixed bottom-0 bg-white flex md:hidden items-center gap-[13px] z-10">
          <div className="w-full flex items-center gap-3">
            <button
              className="w-10 h-10 flex justify-center items-center border-[1px] border-black border-opacity-50 rounded"
              onClick={handleAddToWishlist}
            >
              <WishList />
            </button>
            <button
              className="grow py-[10px] px-12 text-text-1 bg-button-2 hover:bg-button-hover-1 rounded disabled:bg-[#7d8184] disabled:border-none disabled:text-white"
              disabled={selectedProduct.stock === 0}
              onClick={handleBottomSheetOpen}
            >
              Add to Cart
            </button>
          </div>
        </div>
        {bottomSheetOpen && (
          <BottomSheet
            product={selectedProduct}
            quantity={quantity}
            selectedVariant={selectedVariant}
            onAddToCartHandler={handleAddToCart}
            onBottomSheetOpenHandler={handleBottomSheetOpen}
            onQuantityInputChangeHandler={handleQuantityInputChange}
            onSetQuantityHandler={handleSetQuantity}
            onVariantClickHandler={handleVariantClick}
          />
        )}
      </main>
    </>
  );
};

export default ProductDetail;
