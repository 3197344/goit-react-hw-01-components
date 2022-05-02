import PropTypes from 'prop-types';
import s from './friends.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    const isOnlineStyle = isOnline ? s.online : s.offline;
    return (
        <li className={s.item}>
            <div className={s.span}>
                <span className={isOnlineStyle}></span>
                <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={s.name}>{name}</p>
            </div>
            </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};