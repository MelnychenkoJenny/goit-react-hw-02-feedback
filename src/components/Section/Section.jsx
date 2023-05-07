import PropTypes from 'prop-types';
import { SectionContainer, Title } from './Section.styled';

export const Section = ({ title, children, shadow }) => {
  return (
    <SectionContainer shadow={shadow}>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  shadow: PropTypes.string,
};
