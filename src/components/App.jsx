import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() =>
    localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = () => {
    const normaliseLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseLowerCase)
    );
  };

  const deliteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const addContact = newContact => {
    if (
      contacts.some(contact => {
        return (
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
        );
      })
    ) {
      return alert(`this name or number is already in contacts`);
    }
    setContacts(prevContacts => {
      return [newContact, ...prevContacts];
    });
  };
  const setFilterValue = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm newContact={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={setFilterValue} />
        {contacts.length ? (
          <ContactList contacts={visibleContacts()} delite={deliteContact} />
        ) : (
          <h2>Your phonebook is empty !!!</h2>
        )}
      </Container>
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default App;
