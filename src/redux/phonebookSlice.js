import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    searchContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { searchContact } = filterSlice.actions;
