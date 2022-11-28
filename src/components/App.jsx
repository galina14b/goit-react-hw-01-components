import Profile from "./Profile/Profile";
import User from "./../user";
import { Statistics } from "./Statistics/Statistics";
import Data from "./../data";
import { FriendList } from "./FriendList/FriendList";
import friendsData from "./../friends";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
      />
      
      <Statistics
        data={Data}
      />

      <FriendList
        friends={friendsData}
      />
    </div>
  );
};
