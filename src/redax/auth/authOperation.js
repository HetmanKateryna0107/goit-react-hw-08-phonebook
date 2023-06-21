import { createAsyncThunk } from '@reduxjs/toolkit';
import { privatApi, token } from 'redax/http';
import { selectToken } from './authSelector';

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const response = await privatApi.post('/users/login', body);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);
export const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const response = await privatApi.post('/users/signup', body);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const tokenValue = selectToken(getState());
      if (!tokenValue) {
        return rejectWithValue();
      }
      token.set(tokenValue);

      const response = await privatApi.get('/users/current');
      return response.data;
    } catch (error) {
      token.unset();
      return rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await privatApi.post('/users/logout');
      token.unset();
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);
