import React, { useState, useEffect } from "react";

import styles from "./styles/component.module.css";

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
  };

  useEffect(() => {
    if (currentCount === 10) {
      setCurrentCount(0);
    }
  }, [currentCount]);

  return (
    <>
      <div className={styles.counter}>
        <button className={styles.normalButton} onClick={handleClick}>
          +{props.incrementBy}
        </button>
        <div>Counter: {currentCount}</div>
      </div>
    </>
  );
};

export default CountButton;
