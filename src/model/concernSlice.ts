import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type ConcernStateType = {
  currentStep: 'select-tag' | 'select-date';
  checkedTags: string[];
};

const initialState: ConcernStateType = {
  currentStep: 'select-tag',
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

    setCurrentStep: (state, payload: PayloadAction<ConcernStateType['currentStep']>) => {
      const { payload: step } = payload;
      state.currentStep = step;
    },
  },
});

export const concernSliceActions = concernSlice.actions;

export const concernSliceReducer = concernSlice.reducer;
