import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="1.5"
              floodColor="#1C1B22"
            />
          </filter>
        </defs>
        <circle className={styles.spinner} cx="50" cy="50" r="45" />
      </svg>
    </div>
  );
};

export default Spinner;
