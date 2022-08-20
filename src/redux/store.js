import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { contactApi } from './contactApi';

// const persistConfig = {
//   key: 'phonebook',
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, phonebookSlice);

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
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
// export const persistor = persistStore(store);
