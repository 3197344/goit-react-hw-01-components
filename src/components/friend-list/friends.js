import PropTypes from 'prop-types';
import s from './friends.module.css';
import FriendListItem from './friendListItem';

export default function FriendList({ friends }) {
    return (
    <ul className={s.friendList}>
        {friends.map(friend => (
        <li className={s.item} key={friend.id}>
            <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
        </li>
        ))}
    </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array,
};
