"use client";

import React from "react";
import { useNotification } from "@/context/NotificationContext";
import styles from "./Notification.module.css";

const Notification = () => {
  const { notifications, removeNotification, clearAllNotifications } = useNotification();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      clearAllNotifications();
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return "fa-solid fa-check-circle";
      case "error":
        return "fa-solid fa-exclamation-circle";
      case "warning":
        return "fa-solid fa-exclamation-triangle";
      case "info":
      default:
        return "fa-solid fa-info-circle";
    }
  };

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className={styles.notificationContainer} onClick={handleBackdropClick}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`${styles.notification} ${styles[notification.type]}`}
          onClick={(e) => {
            e.stopPropagation();
            removeNotification(notification.id);
          }}
        >
          <div className={styles.notificationContent}>
            <i className={`${getIcon(notification.type)} ${styles.icon}`}></i>
            <span className={styles.message}>{notification.message}</span>
            <button
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                removeNotification(notification.id);
              }}
            >
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                animationDuration: `${notification.duration}ms`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
