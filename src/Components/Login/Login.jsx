import { useState } from "react";
import styles from "./Login.module.css";

function Login({ username, setUsername, password, setPassword, handleLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <label className={styles.label} htmlFor="userName">
        username :
      </label>
      <input
        className={styles.input}
        id="userName"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className={styles.label} htmlFor="password">
        password :
      </label>
      <div className={styles.passwordContainer}>
        <input
          className={styles.input}
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className={styles.eyeBtn}
          onClick={() => setShowPassword(!showPassword)}
        >
          <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
        </button>
      </div>
      <button type="submit" className={styles.btn}>
        Login
      </button>
    </form>
  );
}

export default Login;
