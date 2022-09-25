import { Transaction } from 'components/Transaction/Transaction';
import { PropTypes } from 'prop-types';
import {
  Table,
  Heading,
  HeadingList,
  HeadingItems,
  Body,
  BodyList,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Heading>
        <HeadingList>
          <HeadingItems>Type</HeadingItems>
          <HeadingItems>Amount</HeadingItems>
          <HeadingItems>Currency</HeadingItems>
        </HeadingList>
      </Heading>

      <Body>
        {items.map((item, id) => (
          <BodyList key={id}>
            <Transaction odd={true} item={item} />
          </BodyList>
        ))}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
