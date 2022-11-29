import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return <ul className={css['friend-list']}>
    {friends.map(friend => (
      <li className={css.item} key={friend.name}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
      )
    )}
  </ul>
}

FriendList.propTypes = {
  friends: PropTypes.array
}

export { FriendList };