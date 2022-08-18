import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { searchContact } from 'redux/phonebookSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFiltr = event => dispatch(searchContact(event.target.value));

  return (
    <label>
      Please, find contact.
      <input type="text" onChange={onChangeFiltr} />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };
export default Filter;
