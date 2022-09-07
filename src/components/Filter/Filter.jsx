import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/phonebook/phonebookSelectors';
import { searchContact } from 'redux/phonebook/phonebookSlice';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event =>
    dispatch(searchContact(event.currentTarget.value));

  return (
    <>
      {/* <label>
        Please, find contact:{' '}
        <input value={filter} type="text" onChange={onChangeFilter} />
      </label> */}
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-filter">Filter:</InputLabel>
        <OutlinedInput
          id="outlined-adornment-filter"
          // type={values.showPassword ? 'text' : 'password'}
          value={filter}
          onChange={onChangeFilter}
          label="filter"
        />
      </FormControl>
    </>
  );
};

export default Filter;
