import clsx from "clsx";
import css from "./FriendListItem.module.css"

const FriendListItem = ({ variant, avatar, name, isOnline }) => {
  return (
    <div class="item">
      <span class={clsx(css[variant], {
        [css.green]: isOnline,
        [css.red]: false,
      })}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
    </div>
  ) 
}

export { FriendListItem };