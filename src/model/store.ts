import { configureStore } from '@reduxjs/toolkit';
import { concernSliceReducer } from './concernSlice';

export const store = configureStore({
  reducer: {
    concern: concernSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
