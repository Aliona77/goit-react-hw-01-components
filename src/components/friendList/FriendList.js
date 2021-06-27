import FriendListItem from './FriendListItem';
import css from './FriendListItem.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
