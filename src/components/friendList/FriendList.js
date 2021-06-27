import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendListItem.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
