import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  color: ${({ theme: { colors } }) => colors.text};
`;

export const MainTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 30px;
  padding: 0;
  font-family: 'StyleScript-Regular';
  font-size: 66px;
  color: ${({ theme: { colors } }) => colors.textTitle};
  text-shadow: ${({ theme: { colors } }) => colors.textShadow};
  transition: scale 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.25;
  }
`;
