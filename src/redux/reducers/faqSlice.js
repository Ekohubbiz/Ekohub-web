import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faqs: [],
};

export const faqSlice = createSlice({
  name: 'faqs',
  initialState,
  reducers: {
    setFaq: (state, action) => {
      state.faqs = action.payload;
    },
  },
});

// actions
export const { setFaq } = faqSlice.actions;

// reducer
export const faqReducer = faqSlice.reducer;

// selectors
export const getFaqs = (state) => state?.faqs?.faqs;
