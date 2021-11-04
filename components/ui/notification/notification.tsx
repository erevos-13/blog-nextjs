import React from "react";
import ReactDOM from "react-dom";
import styles from "./notification.module.css";

const Notification: React.FC<{ title: string; message: string, status?: string }> = ({
  title,
  message,
}) => {

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }
  const cssClasses = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")!
  );
};

export default Notification;
