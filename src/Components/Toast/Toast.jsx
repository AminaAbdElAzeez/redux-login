import React, { useEffect } from "react";
import styles from "./Toast.module.css";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className={styles.toast}>
      <p>{message}</p>
      <button onClick={onClose} className={styles.toastClose}>
        X
      </button>
    </div>
  );
};

export default Toast;
