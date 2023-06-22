import React, { useState } from "react";

import styles from "./Toggle.module.scss";

import { ToggleProps } from "./types";

export const Toggle: React.FC<ToggleProps> = ({ option, onClick }) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prev) => !prev);
    onClick(isOn);
  };

  return (
    <div className={styles.toggle}>
      <span>{option}</span>
      <button
        onClick={handleClick}
        className={isOn ? styles.activeButton : styles.notActiveButton}
      >
        <svg width="33" height="20" viewBox="0 0 33 20">
          <circle
            cx={isOn ? "22" : "11"}
            cy="10"
            r="6.5"
            fill={isOn ? "#000000" : "#ffffff"}
          />
        </svg>
      </button>
    </div>
  );
};
