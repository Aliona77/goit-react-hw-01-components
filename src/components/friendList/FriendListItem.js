import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  const statusClass = isOnline ? css.online : css.offline;
  return (
    <li className={css.item}>
      <span className={statusClass}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
