import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  mode: 'select' | 'show';
};

const initialState: AppState = {
  mode: 'select',
};

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    selectMode: (state, payload: PayloadAction<AppState['mode']>) => {
      const { payload: mode } = payload;

      state.mode = mode;
    },
  },
});

export const appSliceActions = appSlice.actions;

export const appSliceReducer = appSlice.reducer;
