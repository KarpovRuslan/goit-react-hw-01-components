import Profile from "./components/Profile/Profile";
import user from "./components/Profile/profile.json";
import Statistics from "./components/Statistics/Statistics";
import dataStat from "./components/Statistics/dataStat.json";
import { FriendList } from "components/FriendList/FriendList";
import friends from "./components/FriendList/friends.json";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
    return (
        <>
        <div>
            <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats} 
            />
        </div>

            <div>
                <Statistics title="Upload stats" stats={dataStat} />
            </div>

            <div><FriendList friends={friends} /></div>
            
            <div><TransactionHistory items={transactions} /></div>
            </>
    );
};
