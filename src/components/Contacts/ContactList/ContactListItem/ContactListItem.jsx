import { useDeleteContactMutation } from 'redux/contactApi';

const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li>
      {name}: {phone}{' '}
      <button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

export default ContactListItem;
