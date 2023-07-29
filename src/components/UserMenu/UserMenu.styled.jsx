import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Colors } from '../../helpers/colors';

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ContactsLink = styled(Link)`
  padding: 8px;
  border-radius: 6px;
  font-size: 16px;
  background-color: ${Colors.blue};
  &:focus,
  &:hover {
    background-color: ${Colors.blueHover};
  }
`;
export const LogOutButton = styled.button`
  color: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background-color: ${Colors.yellow};
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: ${Colors.yellowHover};
  }
`;
