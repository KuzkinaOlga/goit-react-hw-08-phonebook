import Loader from 'components/Loader/Loader';
import { useFetchContactsQuery } from 'redux/phonebook/contactApi';
import ContactList from './ContactList/ContactList';

const Contacts = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <div>
      {isFetching && <Loader />}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  );
};

export default Contacts;
