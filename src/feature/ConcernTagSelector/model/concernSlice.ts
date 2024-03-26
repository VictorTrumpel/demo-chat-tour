import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ConcernState = {
  checkedTags: string[];
};

const initialState: ConcernState = {
  checkedTags: [],
};

export const concernSlice = createSlice({
  name: 'concernSlice',
  initialState,
  reducers: {
    addConcernTag: (state, payload: PayloadAction<string>) => {
      const { payload: concernTag } = payload;

      const concernSet = new Set(state.checkedTags);

      concernSet.add(concernTag);

      state.checkedTags = [...concernSet];
    },

    deleteConcernTag: (state, payload: PayloadAction<string>) => {
      const { payload: concernTag } = payload;

      const concernSet = new Set(state.checkedTags);

      concernSet.delete(concernTag);

      state.checkedTags = [...concernSet];
    },
  },
});

export const concernSliceActions = concernSlice.actions;

export const concernSliceReducer = concernSlice.reducer;
