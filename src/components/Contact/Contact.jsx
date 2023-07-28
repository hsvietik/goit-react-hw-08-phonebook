import { useDispatch } from 'react-redux';
import { Item, ContactName, DeleteButton, DeleteIcon } from './Contact.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  return (
    <Item>
      <ContactName>
        {name}: {number}
      </ContactName>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        <DeleteIcon />
      </DeleteButton>
    </Item>
  );
};
