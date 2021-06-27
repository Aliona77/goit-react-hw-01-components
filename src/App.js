//======COMPONENTS=======

import Profile from './components/socialProfile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

//==========JSON==============
import user from './components/socialProfile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friendList/friends.json';
import transactions from './components/transactionHistory/transactions.json';

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
