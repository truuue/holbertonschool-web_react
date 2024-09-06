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
        <button type="button" className={css(styles.button)}>
          Ok
        </button>
      </form>
    </>
  );
}

const styles = StyleSheet.create({
  login: {
    display: "flex",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },
  label: {
    display: "inline-flex",
    alignItems: "center",
    "@media (max-width: 900px)": {
      marginBottom: ".25rem",
    },
  },
  input: {
    margin: "0 .5rem",
    flexGrow: 1,
  },
  button: {
    width: "fit-content",
  },
});

export default Login;
