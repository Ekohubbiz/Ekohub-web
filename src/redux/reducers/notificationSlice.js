import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

// actions
export const { setNotifications } = notificationSlice.actions;

// reducer
export const notificationReducer = notificationSlice.reducer;

// selectors
export const getNotifications = (state) => state?.notifications?.notifications;
