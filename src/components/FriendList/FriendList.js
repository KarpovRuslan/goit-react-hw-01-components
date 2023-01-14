import { FriendListItem } from "./FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList} >
            {friends.map((elem) => (<FriendListItem key={elem.id} elem={elem}/>))}
        </ul>
    );
};


