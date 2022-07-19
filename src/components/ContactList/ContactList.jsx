import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, delite }) => (
  <div>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => delite(id)}>
            delite
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  delite: PropTypes.func.isRequired,
};

export default ContactList;
