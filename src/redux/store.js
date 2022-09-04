import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import authSlice from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { contactApi } from './phonebook/contactApi';
import { filterReducer } from './phonebook/phonebookSlice';
// import persistReducer from 'redux-persist/es/persistReducer';

const userPersist = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(userPersist, authSlice),
    filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
    // [contactApi.reducerPath]: contactApi.reducer,
    // filter: filterReducer,
    // auth: authSlice,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
