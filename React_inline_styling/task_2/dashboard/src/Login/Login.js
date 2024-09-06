import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <>
      <form className={css(styles.login)}>
        <label className={css(styles.label)}>
          Email:
          <input
            type="email"
            autoComplete="email"
            className={css(styles.input)}
          />
        </label>
        <label className={css(styles.label)}>
          Password:
          <input type="password" className={css(styles.input)} />
        </label>
        <button type="button">Ok</button>
      </form>
    </>
  );
}

const styles = StyleSheet.create({
  login: {
    display: "flex",
  },
  label: {
    display: "inline-flex",
    alignItems: "center",
  },
  input: {
    margin: "0 .5rem",
  },
});

export default Login;
