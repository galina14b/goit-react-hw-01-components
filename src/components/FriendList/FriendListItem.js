import clsx from "clsx";
import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={clsx(css, {
        [css.green]: isOnline,
        [css.red]: !isOnline,
      })}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  ) 
}

FriendListItem.protoTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool 
}

export { FriendListItem };

