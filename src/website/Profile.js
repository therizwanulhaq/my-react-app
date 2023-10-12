import { useAuth } from "./contextAPI/AuthContext";

function Profile() {
  const { isLoggedIn, username, logout } = useAuth();
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Profile</h2>
          <h3>Welcome, {username}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please Login</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
