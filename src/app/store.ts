import { configureStore } from '@reduxjs/toolkit';
import { concernSliceReducer } from '../model/concernSlice';
import { appSliceReducer } from './model/appSlice';

export const store = configureStore({
  reducer: {
    concern: concernSliceReducer,
    app: appSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
