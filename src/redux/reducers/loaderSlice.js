import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  open: false,
  searchString: '',
  modalAuth: false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    setIsOpen: (state, action) => {
      state.open = action.payload;
    },
    setModalAuth: (state, action) => {
      state.modalAuth = action.payload;
    },
  },
});

// actions
export const { setLoading, setSearchString, setIsOpen, setModalAuth } =
  loaderSlice.actions;

// reducer
export const loaderReducer = loaderSlice.reducer;

// selectors
export const getIsLoading = (state) => state?.loader?.isLoading;
export const getSearchString = (state) => state?.loader?.searchString;
export const getIsOpen = (state) => state?.loader?.open;
export const getModal = (state) => state?.loader?.modalAuth;
