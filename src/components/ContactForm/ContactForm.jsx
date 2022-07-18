import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  idUser = nanoid(5);
  idName = nanoid(5);
  idNumber = nanoid(5);

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ id: this.idUser, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.idName}>
          name
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            key={this.idName}
            required
          />
        </label>
        <label htmlFor={this.idNumber}>
          phone
          <input
            type="tel"
            value={this.state.number}
            name="number"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            key={this.idNumber}
            required
          />
        </label>
        <br />
        <button type="submit">add contact</button>
      </form>
    );
  }
}

export default ContactForm;
