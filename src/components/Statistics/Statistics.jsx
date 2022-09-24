import { StatisticsStats } from 'components/StatisticsStats/StatisticsStats';
import { PropTypes } from 'prop-types';
import { StatisticSection, Title, ItemsList, Items } from './Statistics.styled';

export const Statistics = ({ data, title = 'OnLoad stats' }) => {
  return (
    <StatisticSection>
      <Title>{title}</Title>

      <ItemsList>
        {data.map((stats, id) => (
          <Items key={id}>
            <StatisticsStats stats={stats} />
          </Items>
        ))}
      </ItemsList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
};
