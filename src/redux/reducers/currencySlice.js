import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: [],
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

// actions
export const { setCurrency } = currencySlice.actions;

// reducer
export const currencyReducer = currencySlice.reducer;

// selectors
export const getCurrency = (state) => state?.currency?.currency;
