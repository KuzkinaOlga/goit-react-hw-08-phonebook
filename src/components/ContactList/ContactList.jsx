import React from 'react';

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

export default ContactList;
