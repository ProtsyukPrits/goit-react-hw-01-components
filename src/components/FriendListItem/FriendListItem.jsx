import { PropTypes} from 'prop-types'
import { CheckOnline, Avatar, Name, Items } from './FriendListItem.styled';


export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    
      <Items>
        <CheckOnline selected={isOnline}></CheckOnline>
        <Avatar src={avatar} alt={name} width={48} />
        <Name>{name}</Name>
      </Items>
   
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })
};