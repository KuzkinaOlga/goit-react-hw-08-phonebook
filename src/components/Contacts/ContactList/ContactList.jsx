// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/phonebook/contactApi';
import { getFilter } from 'redux/phonebook/phonebookSelectors';
import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <ul>
        {contacts && visibleContacts.length > 0 ? (
          visibleContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))
        ) : (
          <h2>phonebook is empty!</h2>
        )}
      </ul>
    </div>
  );
};
export default ContactList;

