import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stores: [],
  store: {},
  reviews: [],
  searchStores: [],
};

export const storesSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    setStores: (state, action) => {
      state.stores = action.payload;
    },
    setSingleStores: (state, action) => {
      state.store = action.payload;
    },
    setStoreReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setSearchStores: (state, action) => {
      state.searchStores = action.payload;
    },
  },
});

// actions
export const { setStores, setSingleStores, setStoreReviews, setSearchStores } =
  storesSlice.actions;

// reducer
export const storesReducer = storesSlice.reducer;

// selectors
export const getStores = (state) => state?.stores?.stores;
export const getSearchStores = (state) => state?.stores?.searchStores;
export const getSingleStores = (state) => state?.stores?.store;
export const getStoreReviews = (state) => state?.stores?.reviews;
