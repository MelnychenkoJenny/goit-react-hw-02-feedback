import styled from 'styled-components';

export const SectionContainer = styled.section`
  max-width: 370px;
  padding: 20px;
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.sectionCard};
  border-radius: 10px;
  box-shadow: ${({ shadow, theme: { colors } }) =>
    shadow ? colors.shadow : 'none'};
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
`;
