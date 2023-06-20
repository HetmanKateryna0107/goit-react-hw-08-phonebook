import { createSlice } from '@reduxjs/toolkit';
import { getUser, logOut, login, register } from './authOperation';

const initialState = {
  token: '',
  isLoading: false,
  isError: false,
  isAuth: false,
  user: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.isAuth = true;
        state.user = payload.user;
      })
      .addCase(login.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.isAuth = true;
        state.user = payload.user;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.user = payload.user;
      })
      .addCase(getUser.rejected, () => initialState)
      .addCase(logOut.fulfilled, () => initialState);
  },
});

export const authReduser = authSlice.reducer;
