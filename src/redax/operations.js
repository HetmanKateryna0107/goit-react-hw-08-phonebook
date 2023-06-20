import { createAsyncThunk } from '@reduxjs/toolkit';
import { privatApi } from './http';

export const fetchContacts = createAsyncThunk('get', async () => {
  const response = await privatApi.get('/contacts');
  return response.data;
});
export const addContacts = createAsyncThunk('add', async newContact => {
  const response = await privatApi.post('/contacts', newContact);
  return response.data;
});

export const removeContacts = createAsyncThunk('delite', async contactId => {
  const response = await privatApi.delete('/contacts/' + contactId);
  return response.data;
});
