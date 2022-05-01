import PropTypes from 'prop-types';
import s from './friends.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
    <div className={s.span}>
        {isOnline ? (
        <span className={s.online}>{isOnline}</span>
        ) : (
        <span className={s.offline}>{isOnline}</span>
        )}
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
    </div>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};