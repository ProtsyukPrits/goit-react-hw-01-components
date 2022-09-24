import { PropTypes } from 'prop-types'
import { CheckOnline, Avatar,  Name } from './Friend.styled';


export const Friend = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <>
      <CheckOnline selected={isOnline}></CheckOnline>
      <Avatar src={avatar} alt={name} width={48} />
      <Name>{name}</Name>
    </>
  );
};


Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })
}