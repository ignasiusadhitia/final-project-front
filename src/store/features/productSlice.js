import { createSelector, createSlice } from '@reduxjs/toolkit';

export const selectCartSubtotal = createSelector(
  (state) => state.product.cart,
  (cart) =>
    cart.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0)
);

export const selectCartTotalItems = createSelector(
  (state) => state.product.cart,
  (cart) => cart.reduce((totalItems, item) => totalItems + item.quantity, 0)
);

const products = [];

const initialState = {
  products,
  product: null,
  cart: [],
  shipping: 'Free',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },

    getProductById: (state, action) => {
      state.product = action.payload;
    },

    setProduct: (state, action) => {
      state.product = action.payload;
      console.log(state.product);
    },

    getCartItems: (state) => {
      return state.cart;
    },

    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      const validQuantity = Math.min(quantity, product.stock);

      if (existingProduct) {
        const newQuantity = Math.min(
          existingProduct.quantity + validQuantity,
          product.stock
        );
        existingProduct.quantity = newQuantity;
      } else {
        state.cart.push({ ...product, quantity: validQuantity });
      }
    },

    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cart.find((item) => item.id === productId);
      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== productId);
        }
      }
    },

    updateCartItemQuantity: (state, action) => {
      const { productId, quantity, stock } = action.payload;
      const cartItem = state.cart.find((item) => item.id === productId);

      if (cartItem) {
        cartItem.quantity = Math.min(Math.max(quantity, 0), stock);
        if (cartItem.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== productId);
        }
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  getProducts,
  getProductById,
  setProduct,
  addToCart,
  decrementQuantity,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
} = productSlice.actions;
export default productSlice.reducer;
