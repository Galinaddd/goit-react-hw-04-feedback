import PropTypes from 'prop-types';
import { P, Value } from './FeedbackStatistics.styled';
export const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <P>
        Good: <Value>{good}</Value>
      </P>
      <P>
        Neutral:<Value>{neutral}</Value>
      </P>
      <P>
        Bad:<Value>{bad}</Value>{' '}
      </P>

      <P>
        Total: <Value>{total}</Value>{' '}
      </P>
      <P>
        Positive feedback:<Value>{positivePercentage}%</Value>
      </P>
    </>
  );
};

FeedbackStatistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
