// import PropTypes from 'prop-types';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Container } from './Container/Container';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
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
