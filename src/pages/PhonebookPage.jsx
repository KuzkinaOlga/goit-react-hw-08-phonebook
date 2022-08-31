import ContactForm from '../components/ContactForm/ContactForm';
import Contacts from '../components/Contacts/Contacts';
import { Container } from '../components/Container/Container';
import Filter from '../components/Filter/Filter';

const PhonebookPage = () => {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </Container>
    </>
  );
};

export default PhonebookPage;
