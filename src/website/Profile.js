import { useAuth } from "./contextAPI/AuthContext";

import styles from "./styles/Profile.module.css";
import pfp from "./assets/defaultProfile.jpg";

function Profile() {
  const { username, logout } = useAuth();
  return (
    <div>
      <div className={styles.profile}>
        <h2>Welcome, {username}</h2>
        <img src={pfp} alt="Profile pic" className={styles.pfp} />
      </div>
      <button className={styles.logoutButton} onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
