import React from 'react';
import { useDispatch } from 'react-redux';
import { searchContact } from 'redux/phonebook/phonebookSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = event =>
    dispatch(searchContact(event.currentTarget.value));

  return (
    <label>
      Please, find contact: <input type="text" onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
