import { combineReducers } from 'redux';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';

import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';
import langReducer from './features/languageSlice';

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_ENCRYPT_KEY,
  onError: (error) => {
    console.error('Error while encrypting', error);
  },
});

const rootReducer = combineReducers({
  // Add your reducers here
  auth: authReducer,
  lang: langReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'lang'],
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
