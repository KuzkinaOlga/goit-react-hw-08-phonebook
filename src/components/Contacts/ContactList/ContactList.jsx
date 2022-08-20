// import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => {
  // const dispatch = useDispatch();

  // const addContact = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);

  // const contacts = addContact.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
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
