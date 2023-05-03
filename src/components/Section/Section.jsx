import {SectionContainer, Title} from './Section.styled';

export const Section = ({ title, children, shadow }) => {
  return (
    <SectionContainer shadow={shadow}>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};
