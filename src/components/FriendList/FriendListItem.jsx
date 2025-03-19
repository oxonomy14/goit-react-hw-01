import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend }) {
  return (
    <li className={css["friend-item"]}>
      <img src={friend.avatar} alt={friend.name} width="48" />
      <p>{friend.name}</p>
      <p className={friend.isOnline ? "online" : "offline"}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
}
