import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Form,
  FormField,
  Wrapper,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  nameInput = nanoid();
  telInput = nanoid();

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form action="" onSubmit={this.handleSubmit}>
          <FormField>
            <FormLabel htmlFor={this.nameInput}>Name</FormLabel>
            <Wrapper>
              <FormInput
                type="text"
                name="name"
                id={this.nameInput}
                value={name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />{' '}
              <BsFillPersonFill
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                }}
              />
            </Wrapper>
          </FormField>
          <FormField>
            <FormLabel htmlFor={this.telInput}>Number</FormLabel>
            <Wrapper>
              <FormInput
                type="tel"
                name="number"
                id={this.telInput}
                value={number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <GiSmartphone
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                }}
              />
            </Wrapper>
          </FormField>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
