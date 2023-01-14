import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendListItem = ({ elem }) => {
    return (<li className={css.item} key={elem.id}>
        {elem.isOnline ? (
            <span className={css.status}></span>
        ) : (<span className={css.statusOffline}></span>)}
        <img className={css.avatar} src={elem.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{elem.name ? elem.name : "No data"}</p>
    </li>);
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};