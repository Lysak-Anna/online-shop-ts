import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  email: null,
  token: null,
  id: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
      state.isLoggedIn = true;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.isLoggedIn = false;
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
