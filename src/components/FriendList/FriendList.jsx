import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { PropTypes } from 'prop-types';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((friend) => (
        
          <FriendListItem 
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        
          />
       
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}
