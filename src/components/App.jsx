import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const getStorage = JSON.parse(localStorage.getItem('contacts'));

    if (getStorage) {
      return this.setState({
        contacts: getStorage,
      });
    } else {
      return this.setState({
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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

  newContact = contact => {
    this.setState(({ contacts }) => {
      const { name, number } = contact;

      if (
        contacts.some(
          contact =>
            contact.name.toLowerCase() === name.toLowerCase() ||
            contact.number === number
        )
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
          <ContactForm newContact={this.newContact} />

          <h2>Contacts</h2>
          <Filter value={this.filter} onChange={this.formSubmitFilter} />
          {this.state.contacts.length ? (
            <ContactList
              contacts={this.visibleContacts()}
              delite={this.deliteContact}
            />
          ) : (
            <h2>Your phonebook is empty !!!</h2>
          )}
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
