import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { searchContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const getFilter = state => state.filter.filter;
