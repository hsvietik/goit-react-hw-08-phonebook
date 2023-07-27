import { createSlice } from '@reduxjs/toolkit';
import { createUser, logIn, logOut } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleAuthUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const handleLogOut = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(createUser.fulfilled, handleAuthUser)
      .addCase(logIn.fulfilled, handleAuthUser)
      .addCase(logOut.fulfilled, handleLogOut),
});

export const authReducer = authSlice.reducer;
