import css from "./Profile.module.css";

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className={css.text}>{username}</p>
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
