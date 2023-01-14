import { FriendListItem } from "./FriendListItem";
import PropTypes from 'prop-types'; 
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList} >
            {friends.map((elem) => (<FriendListItem key={elem.id} elem={elem}/>))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};
