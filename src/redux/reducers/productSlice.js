import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  storeOwnerProduct: [],
  product: {},
  favourites: [],
  similar: [],
  discover: [],
  searchProducts: [],
  reviews: [],
  pagination: {},
  discoverOne: {},
  merchantProduct: [],
  related: [],
  recentlyViewed: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setOwnerStoreProducts: (state, action) => {
      state.storeOwnerProduct = action.payload;
    },
    setMerchantProducts: (state, action) => {
      state.merchantProduct = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setSimilar: (state, action) => {
      state.similar = action.payload;
    },
    setDiscover: (state, action) => {
      state.discover = action.payload;
    },
    setDiscoverOne: (state, action) => {
      state.discoverOne = action.payload;
    },
    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },
    setCategoryProducts: (state, action) => {
      state.categoryProducts = action.payload;
    },
    setSearchProducts: (state, action) => {
      state.searchProducts = action.payload;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    setRelated: (state, action) => {
      state.related = action.payload;
    },
    setRecentlyViewed: (state, action) => {
      state.recentlyViewed = action.payload;
    },
  },
});

// actions
export const {
  setProducts,
  setOwnerStoreProducts,
  setMerchantProducts,
  setProduct,
  setFavourites,
  setCategoryProducts,
  setSimilar,
  setDiscover,
  setDiscoverOne,
  setSearchProducts,
  setReviews,
  setPagination,
  setRelated,
  setRecentlyViewed,
} = productsSlice.actions;

// reducer
export const productsReducer = productsSlice.reducer;

// selectors
export const getProducts = (state) => state?.products?.products;
export const getProduct = (state) => state?.products?.product;
export const getFavourites = (state) => state?.products?.favourites;
export const getCategoryProducts = (state) => state?.products?.categoryProducts;
export const getStoreOwnerProducts = (state) =>
  state?.products?.storeOwnerProduct;
export const getSimilarProducts = (state) => state?.products?.similar;
export const getDiscoverProducts = (state) => state?.products?.discover;
export const getDiscover = (state) => state?.products?.discoverOne;
export const getSearchProducts = (state) => state?.products?.searchProducts;
export const getReviews = (state) => state?.products?.reviews;
export const getPagination = (state) => state?.products?.pagination;
export const getMerchantProduct = (state) => state?.products?.merchantProduct;
export const getRelated = (state) => state?.products?.related;
export const getRecentlyViewed = (state) => state?.products?.recentlyViewed;
