import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  business_categories: [],
  categoryFields: [],
  subCategories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setBusinessCategories: (state, action) => {
      state.business_categories = action.payload;
    },
    setCategoryFields: (state, action) => {
      state.categoryFields = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subCategories = action.payload;
    },
  },
});

// actions
export const {
  setCategories,
  setBusinessCategories,
  setCategoryFields,
  setSubCategory,
} = categoriesSlice.actions;

// reducer
export const categoriesReducer = categoriesSlice.reducer;

// selectors
export const getCategories = (state) => state?.categories?.categories;
export const getBusinessCategories = (state) =>
  state?.categories?.business_categories;
export const getCategoryFields = (state) => state?.categories?.categoryFields;
export const getSubCategory = (state) => state?.categories?.subCategories;
