import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  user: {},
  isAuthorized: false,
  store: {},
  is_store_owner: false,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setIsAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
    },
    setStore: (state, action) => {
      state.store = action.payload;
    },
    setIsStoreOwner: (state, action) => {
      state.is_store_owner = action.payload;
    },
    clearState: (state) => {
      state.user = {};
      state.userId = '';
      state.isAuthorized = false;
    },
  },
});

// actions
export const {
  setUser,
  setUserId,
  setIsAuthorized,
  setStore,
  setIsStoreOwner,
  clearState,
} = authSlice.actions;

// reducer
export const authReducer = authSlice.reducer;

// selectors
export const getIsAuthorizedSelector = (state) => state?.auth?.isAuthorized;
export const getCurrentUser = (state) => state?.user?.user;
export const getStoreOwner = (state) => state?.user?.is_store_owner;
export const getUserStore = (state) => state?.user?.store;
