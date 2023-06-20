import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContacts, deleteContacts } from 'api/api';

export const fetchContacts = createAsyncThunk('get', async () => {
  const response = await getContacts();
  return response;
});
export const addContacts = createAsyncThunk('add', async newContact => {
  const response = await postContacts(newContact);
  return response;
});

export const removeContacts = createAsyncThunk('delite', async contactId => {
  const response = await deleteContacts(contactId);
  return response;
});
