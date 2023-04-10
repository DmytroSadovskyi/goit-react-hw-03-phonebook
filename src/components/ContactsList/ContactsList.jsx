import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { ContactItem } from './ContactsList.styled';
const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <ContactItem key={id}>
        <span>{name}</span>
        <span>{number}</span>

        <FaTrashAlt
          style={{
            cursor: 'pointer',
            color: 'crimson',
          }}
          onClick={() => {
            onDeleteContact(id);
          }}
        />
      </ContactItem>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
