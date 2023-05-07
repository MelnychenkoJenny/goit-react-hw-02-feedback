import styled from 'styled-components';

export const OptionList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;

export const OptionBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  min-width: 70px;
  cursor: pointer;
  text-transform: capitalize;
  background-color: transparent;
  border: 1px solid ${({ theme: { colors } }) => colors.textTitle};
  padding: 7px;
  border-radius: 5px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    outline: none;
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
    background-color: ${({ typeName, theme: { colors } }) => {
      switch (typeName) {
        case 'good':
          return colors.lightGreen;
        case 'neutral':
          return colors.lightYellow;
        case 'bad':
          return colors.lightRed;
        default:
          return colors.lightYellow;
      }
    }};
    color: ${({ typeName, theme: { colors } }) => {
      switch (typeName) {
        case 'good':
          return colors.green;
        case 'neutral':
          return colors.yellow;
        case 'bad':
          return colors.red;
        default:
          return colors.textTitle;
      }
    }};
  }
  :hover svg,
  :focus svg {
    scale: 1.25;
  }

  svg {
    width: 20px;
    height: 20px;
    transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
