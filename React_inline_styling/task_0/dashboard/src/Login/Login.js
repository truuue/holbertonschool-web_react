import "./Login.css";

function Login() {
  return (
    <>
      <form className="Login">
        <label>
          Email:
          <input type="email" autoComplete="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="button">Ok</button>
      </form>
    </>
  );
}

export default Login;
