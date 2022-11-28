import { FriendListItem } from "./FriendListItem";
// import css from './FriendList.module.css'

function FriendList({ friends }) {
  <ul>
    {friends.map(friend => {
      return (
        <li key={friend.name}>
          <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          />
        </li>
        )
    })}
  </ul>
}

export { FriendList };