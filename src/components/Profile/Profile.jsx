import { PropTypes } from 'prop-types';
import {
  ProfileCont,
  Avatar,
  Description,
  Label,
  Quantity,
  Location,
  Stats,
  Tag,
  UserName,
  StatsItems,
} from './Profile.styled';

//  import { } from 'components/Profile/profile.styled'

export const Profile = ({
  user: {
    avatar,
    tag,
    username,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileCont>
      <Description>
        <Avatar src={avatar} alt={username} width={150} />
        <UserName>{username}</UserName>
        <Tag> {tag}</Tag>
        <Location> {location}</Location>
      </Description>
      <Stats>
        <StatsItems>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItems>
        <StatsItems>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItems>
        <StatsItems>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItems>
      </Stats>
    </ProfileCont>
  );
};

Profile.propTypes = {
  stats: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    view: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
