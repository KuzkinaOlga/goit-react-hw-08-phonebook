import { Button } from '@mui/material';
import { useDeleteContactMutation } from 'redux/phonebook/contactApi';
import { Delete } from '@mui/icons-material';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li>
      {name}: {number}{' '}
      <Button
        variant="outlined"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
        startIcon={<Delete />}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </li>
  );
};

export default ContactListItem;
