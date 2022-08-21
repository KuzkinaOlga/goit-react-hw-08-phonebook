import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { searchContact } from 'redux/phonebookSlice';

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

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };
export default Filter;
