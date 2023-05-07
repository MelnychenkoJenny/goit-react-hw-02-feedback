import PropTypes from 'prop-types';
import { SiCoffeescript } from 'react-icons/si';
import { MessageText } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <MessageText>
      {message}
      <SiCoffeescript />
    </MessageText>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
