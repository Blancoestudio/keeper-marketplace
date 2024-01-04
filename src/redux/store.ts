// store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import storeReducer from './storeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    store: storeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;