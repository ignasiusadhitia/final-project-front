import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.error = null;
      state.user = { ...state.user, ...action.payload };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.error = null;
      if (state.user) {
        delete state.user.email;
        delete state.user.password;
      }
    },
    addToWishlist: (state, action) => {
      if (!state.user) {
        state.user = { wishlist: [action.payload] };
      } else if (!state.user.wishlist) {
        state.user = { ...state.user, wishlist: [action.payload] };
      } else {
        const isAlreadyInWishlist = state.user.wishlist.some(
          (item) => item.id === action.payload.id
        );
        if (!isAlreadyInWishlist) {
          state.user.wishlist.push(action.payload);
        }
      }
    },
    removeFromWishlist: (state, action) => {
      if (state.user && state.user.wishlist) {
        state.user.wishlist = state.user.wishlist.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    updateProfile: (state, action) => {
      state.user.profile = action.payload;
    },
    errorLogin: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logout,
  addToWishlist,
  removeFromWishlist,
  updateProfile,
  errorLogin,
} = authSlice.actions;
export default authSlice.reducer;
