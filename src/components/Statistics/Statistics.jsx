import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        Good:<span> {good}</span>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <span>{neutral}</span>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <span>{bad}</span>
      </StatisticsItem>
      <StatisticsItem>
        Total: <span>{total()}</span>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback: {positivePercentage()}%
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
