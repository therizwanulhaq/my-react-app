import "./Login.css";
function Login() {
  return (
    <div className="center">
      <form>
        <h4>Login</h4>
        <input type="text" placeholder="username" id="username" />
        <input type="password" placeholder="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
