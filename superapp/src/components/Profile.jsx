import css from "../css/Profile.module.css";
import User from "./User";
import userImage from "../assets/user.png";
import SelectedGenere from "./SelectedGenere";
const Profile = () => {
  return (
    <div className={css.ProfileInfo}>
      <div className={css.leftCard}>
        <img src={userImage} alt="logo" className={css.logo} />
      </div>
      <div className={css.rightCard}>
        <div className={css.userInfo}>
          <User />
        </div>
        <div className={css.category}>
          <SelectedGenere />
        </div>
      </div>
    </div>
  );
};

export default Profile;
