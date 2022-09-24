import { PropTypes } from 'prop-types'
import { LabelText, PercentageText} from './StatisticsStats.styled'


export const StatisticsStats = ({ stats: { label, percentage} }) => {
  return (
    <>
      <LabelText>{label}</LabelText>
      <PercentageText>{percentage}%</PercentageText>
    </>
  );
};

StatisticsStats.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
};