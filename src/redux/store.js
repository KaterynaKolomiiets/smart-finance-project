import { configureStore } from '@reduxjs/toolkit';
import authReduser from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import { combinedTransactionsReducer, isSystemStartedReducer } from './reducers';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReduser),
    transactions: combinedTransactionsReducer,
    isSystemStarted: isSystemStartedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
