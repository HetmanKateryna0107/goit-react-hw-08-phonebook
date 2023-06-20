import { createSlice } from '@reduxjs/toolkit';
import { addContacts, fetchContacts, removeContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'tasks',

  initialState: { items: [] },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContacts.pending]: handlePending,
    [removeContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContacts.rejected]: handleRejected,
    [removeContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [removeContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      const filterAddItems = state.items.filter(el => {
        return action.payload.id !== el.id;
      });
      state.items = filterAddItems;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
