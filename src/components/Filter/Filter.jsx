import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Find contact
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
