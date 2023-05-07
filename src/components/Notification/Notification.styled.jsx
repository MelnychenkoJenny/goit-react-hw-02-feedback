import styled, { keyframes } from 'styled-components';

const heartbeat = keyframes`
0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.25);
  }
  40% {
    transform: scale(1.5);
  }
`;

export const MessageText = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  svg {
    width: 40px;
    height: 40px;
    fill: ${({ theme: { colors } }) => colors.textTitle};
    animation: ${heartbeat} 1s infinite;
  }
`;
