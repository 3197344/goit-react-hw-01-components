import PropTypes from 'prop-types';
import s from './friends.module.css';
import FriendListItem from './friendListItem';

export default function FriendList({ friends }) {
        return (
        <ul className={s.friendList}>
        {friends.map(friend => (
            <FriendListItem {...friend} key={friend.id} />
        ))}
        </ul>
    );
    };

    FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        }),
    ).isRequired,
    };

