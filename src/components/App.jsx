import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;

    const normaliseLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseLowerCase)
    );
  };
  deliteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  newContact = ({ name, number }) => {
    const contact = {
      name,
      number,
    };
    this.setState(({ contacts }) => {
      if (
        contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        ) ||
        contacts.some(contact => contact.number === number)
      ) {
        return alert(`this name or number is already in contacts`);
      }

      return { contacts: [contact, ...contacts] };
    });
  };
  formSubmitFilter = element => {
    this.setState({ filter: element.currentTarget.value });
  };

  render() {
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.newContact} />

          <h2>Contacts</h2>
          <Filter value={this.filter} onChange={this.formSubmitFilter} />
          <ContactList
            contacts={this.visibleContacts()}
            delite={this.deliteContact}
          />
        </Container>
      </>
    );
  }
}

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
