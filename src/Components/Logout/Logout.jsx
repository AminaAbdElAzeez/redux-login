import React from "react";
import styles from "./Logout.module.css";

function Logout({ email, handleLogout }) {
  return (
    <div className={styles.logout}>
      <button className={styles.check}>
        <i className="bi bi-check-lg"></i>
      </button>
      <h2 className={styles.title}>Welcome, {email} 🌹🤝</h2>
      <button onClick={handleLogout} className={styles.btn}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
