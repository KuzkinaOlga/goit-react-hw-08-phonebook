// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Container } from './Container/Container';
import Filter from './Filter/Filter';

const App = () => {
  const addContact = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = filter
    ? addContact.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : addContact;
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm newContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} />
        <ContactList contacts={visibleContacts} />
      </Container>
    </>
  );
};

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
export default App;
