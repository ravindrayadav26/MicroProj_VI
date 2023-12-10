import { LocalStorage } from "./LocalStorage";
import css from "../css/User.module.css";

const User = () => {
  const info = LocalStorage("registrationData");
  console.log("User Info:", info);
  return (
    <div className={css.container}>
      {info && (
        <ul className={css.infoBox}>
          <li className={css.name}>{info.name}</li>
          <li className={css.email}>{info.email}</li>
          <li className={css.username}>{info.username}</li>
        </ul>
      )}
    </div>
  );
};

export default User;
