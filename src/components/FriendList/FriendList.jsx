import { PropTypes } from 'prop-types';
import { List, Items, CheckOnline, Avatar, Name } from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((friend, id) => (
        <Items key={id}>
          <CheckOnline selected={friend.isOnline}></CheckOnline>
          <Avatar src={friend.avatar} alt={friend.name} width={48} />
          <Name>{friend.name}</Name>
        </Items>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })
};
