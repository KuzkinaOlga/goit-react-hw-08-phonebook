import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliteContact } from 'redux/phonebookSlice';

// import PropTypes from 'prop-types';

const ContactList = () => {
  const dispatch = useDispatch();

  const addContact = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const contacts = addContact.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {contacts.length ? (
          contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button type="button" onClick={() => dispatch(deliteContact(id))}>
                delite
              </button>
            </li>
          ))
        ) : (
          <h2>Your phonebook is empty !!!</h2>
        )}
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   delite: PropTypes.func.isRequired,
// };

export default ContactList;
