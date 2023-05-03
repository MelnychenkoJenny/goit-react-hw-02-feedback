import {StatisticsList, StatisticsItem} from './Statistics.styled'

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>Good:<span> {good}</span></StatisticsItem>
      <StatisticsItem>Neutral: <span>{neutral}</span></StatisticsItem>
      <StatisticsItem>Bad: <span>{bad}</span></StatisticsItem>
      <StatisticsItem>Total: <span>{total()}</span></StatisticsItem>
      <StatisticsItem>Positive feedback: {positivePercentage()}%</StatisticsItem>
    </StatisticsList>
  );
};
