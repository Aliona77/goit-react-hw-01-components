//======COMPONENTS=======

import Profile from './components/SocialProfile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

//==========JSON==============
import user from './components/Data/user.json';
import statisticalData from './components/Data/statistical-data.json';
import friends from './components/Data/friends.json';
import transactions from './components/Data/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
