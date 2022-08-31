import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/phonebookSlice';

import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/phonebook/contactApi';

const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      reset();
      return alert(`${name} is already in contacts`);
    }
    if (name && phone) {
      await createContact({ name: name, number: phone }).unwrap();
      reset();
      toast.success('you added a new contact');
    }
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input
        type="text"
        value={name}
        name="name"
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label>
        phone
        <input
          type="tel"
          value={phone}
          name="phone"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button type="submit" disabled={isLoading}>
        add contact
      </button>
    </form>
  );
};
// ContactForm.protoTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

export default ContactForm;
