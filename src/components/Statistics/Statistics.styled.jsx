import styled from 'styled-components';

export const StatisticsList = styled.ul`
margin: 0px;
    padding: 0px;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    row-gap: 15px;
    justify-content: space-around;
}
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  :last-child {
    transition: scale 350ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1);

    border-radius: 5px;
    background-color: ${({ children, theme: { colors } }) =>
      children[1] >= 40
        ? colors.lightGreen
        : children[1] < 40 && children[1] >= 18
        ? colors.lightYellow
        : colors.lightRed};
    color: ${({ children, theme: { colors } }) =>
      children[1] >= 40
        ? colors.green
        : children[1] < 40 && children[1] >= 18
        ? colors.yellow
        : colors.red};
  }
  :last-child:hover {
    scale: 1.18;
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
  }
`;
