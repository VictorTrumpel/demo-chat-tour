import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export type ConcernStateType = {
  currentStep: 'select-tag' | 'select-date';
  interestPromt: string;
  checkedTags: string[];
  date: string;
  datePromt: string;
};

const initialState: ConcernStateType = {
  currentStep: 'select-tag',
  interestPromt: '',
  checkedTags: [],
  date: dayjs(new Date()).format('MM.DD.YYYY'),
  datePromt: '',
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

    setInterestPromt: (state, payload: PayloadAction<string>) => {
      state.interestPromt = payload.payload;
    },

    setDate: (state, payload: PayloadAction<string>) => {
      state.date = payload.payload;
    },

    setDatePromt: (state, payload: PayloadAction<string>) => {
      state.datePromt = payload.payload;
    },
  },
});

export const concernSliceActions = concernSlice.actions;

export const concernSliceReducer = concernSlice.reducer;
