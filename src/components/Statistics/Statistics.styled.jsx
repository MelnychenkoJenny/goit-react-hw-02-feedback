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
    border-radius: 5px;
    background-color: ${({ children, theme: { colors } }) =>
      children[1] >= 40
        ? colors.lightGreen
        : children[1] < 39 && children[1] >= 18
        ? colors.lightYellow
        : children[1] < 18 && children[1] !== 0
        ? colors.lightRed
        : colors.sectionCard};
    color: ${({ children, theme: { colors } }) =>
      children[1] >= 40
        ? colors.green
        : children[1] < 39 && children[1] >= 18
        ? colors.yellow
        : children[1] < 18 && children[1] !== 0
        ? colors.red
        : colors.text};
  }
`;
