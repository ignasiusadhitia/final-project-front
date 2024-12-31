import React from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Exit, Minus, Plus } from '@icons';

const BottomSheet = ({
  product,
  selectedVariant,
  onVariantClickHandler,
  onBottomSheetOpenHandler,
  quantity,
  onAddToCartHandler,
  onQuantityInputChangeHandler,
  onSetQuantityHandler,
}) => {
  const lang = useSelector((state) => state.lang.lang);
  const { product: selectedProduct } = useSelector((state) => state.product);

  const translations = {
    en: {
      variantProduct: 'Variant Product',
      inStock: 'In Stock',
      outOfStock: 'Out of Stock',
      size: 'Size',
      quantity: 'Quantity',
      cancel: 'Cancel',
      addToCart: 'Add to Cart',
    },
    id: {
      variantProduct: 'Varian Produk',
      inStock: 'Stok Tersedia',
      outOfStock: 'Stok Habis',
      size: 'Ukuran',
      quantity: 'Jumlah',
      cancel: 'Batal',
      addToCart: 'Keranjang',
    },
  };

  const text = translations[lang];

  return (
    <div className="w-full block md:hidden fixed bottom-0 bg-white p-6 z-30 rounded-t-3xl">
      <h3 className="mb-4 text-center font-['Nunito'] font-semibold">
        {text.variantProduct}
      </h3>
      <div className="absolute right-6 top-6">
        <Exit onClick={onBottomSheetOpenHandler} />
      </div>
      <hr />
      <div className="flex gap-6 items-center">
        <div className="mt-4 w-[100px] h-[75px] p-3 rounded bg-secondary-1">
          <img alt="product-image" className="w-full" src={product.imageUrl} />
        </div>
        <div>
          <span className="block font-medium">${product.price}</span>
          <span className="block text-[10px] mt-1">
            {product.stock > 0 ? text.inStock : text.outOfStock}
          </span>
        </div>
      </div>
      {product.variant && (
        <div className="mt-6">
          <h3 className="text-sm font-normal">{text.size}:</h3>
          <div className="flex items-center gap-3 mt-3">
            {product.variant.size.map((size, index) => (
              <button
                key={index}
                className={`w-7 h-7 flex justify-center items-center text-xs border-[1px] border-black border-opacity-50 rounded hover:bg-button-2 hover:text-text-1 hover:border-none ${selectedVariant === size ? 'bg-button-2 text-text-1 border-none' : ''}`}
                onClick={() => onVariantClickHandler(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3">
        <h3 className="text-sm font-normal">{text.quantity}:</h3>
        <div className="flex items-center mt-3">
          <button
            className="flex justify-center items-center w-7 h-7 border-[1px] border-black border-opacity-50 rounded-tl rounded-bl hover:bg-button-2 text-primary-2 hover:text-white hover:border-none  disabled:bg-[#7d8184] disabled:border-none disabled:text-white"
            disabled={quantity === 1}
            onClick={() => onSetQuantityHandler('dec')}
          >
            <Minus height={16} width={16} />
          </button>
          <input
            className="w-12 h-7 text-center border-y-[1px] border-black border-opacity-50"
            disabled={selectedProduct.stock === 0}
            id="quantity"
            maxLength={selectedProduct.stock.toString().length}
            name="quantity"
            type="text"
            value={selectedProduct.stock === 0 ? 0 : quantity}
            onChange={onQuantityInputChangeHandler}
          />
          <button
            className="flex justify-center items-center w-7 h-7 border-[1px] border-black border-opacity-50 rounded-tr rounded-br hover:bg-button-2 text-primary-2 hover:text-white hover:border-none  disabled:bg-[#7d8184] disabled:border-none disabled:text-white"
            disabled={quantity >= selectedProduct.stock}
            onClick={() => onSetQuantityHandler('inc')}
          >
            <Plus height={16} width={16} />
          </button>
        </div>
      </div>

      <div className="w-full mt-8 grid grid-cols-2 gap-3">
        <button
          className="py-[11.5px] text-sm bg-secondary hover:bg-[#7d8184] hover:text-text-1 rounded"
          onClick={onBottomSheetOpenHandler}
        >
          {text.cancel}
        </button>
        <button
          className="py-[11.5px] text-sm text-text-1 bg-button-2 hover:bg-button-hover-1 rounded"
          onClick={onAddToCartHandler}
        >
          {text.addToCart}
        </button>
      </div>
    </div>
  );
};

BottomSheet.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  selectedVariant: PropTypes.string,
  onVariantClickHandler: PropTypes.func,
  onBottomSheetOpenHandler: PropTypes.func,
  onAddToCartHandler: PropTypes.func,
  onQuantityInputChangeHandler: PropTypes.func,
  onSetQuantityHandler: PropTypes.func,
};

export default BottomSheet;
