import { PropTypes } from 'prop-types';
import { Friend } from 'components/Friend/Friend';
import { List, Items } from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((friend, id) => (
        <Items key={id}>
          <Friend friend={friend} />
        </Items>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
