import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './products/productsCategoriesSlice';
import { cartReducer } from './cart/cartSlice';
import { userReducer } from './user/userSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const cartPersistConfig = {
  key: 'cart',
  storage,
};
const userPersistConfig = {
  key: 'user',
  storage,
  whiteList: ['isLoggedIn'],
};
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: persistedCartReducer,
    user: persistedUserReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});
export const persistor = persistStore(store);
