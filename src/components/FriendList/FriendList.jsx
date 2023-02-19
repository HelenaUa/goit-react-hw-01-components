import PropTypes from 'prop-types';
import css from './FriendList.module.css';


export const FriendListItem = ({id, avatar, name, isOnline}) => {
    return (
        <li className={css.item} key={id}>
            < span className={`${ css.status } ${css[isOnline]}`} >{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    )
}


// FriendListItem.propTypes = {
//     id: PropTypes.number.isRequired,
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// }

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.number.isRequired,
       avatar: PropTypes.string.isRequired,
       name: PropTypes.string.isRequired,
       isOnline: PropTypes.bool.isRequired,
})),
}


