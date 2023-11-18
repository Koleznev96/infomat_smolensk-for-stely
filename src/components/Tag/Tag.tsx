import React from "react";

import styles from "./Tag.module.scss";

interface TagProps {
  text: string;
  icon?: React.ReactNode;
  color?: {
    bg: string;
    text: string;
  };
}

const Tag = ({ text, color, icon }: TagProps) => {
  return (
    <div className={styles.tag}>
      <div>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00033 8.66671C8.10489 8.66671 9.00033 7.77128 9.00033 6.66671C9.00033 5.56214 8.10489 4.66671 7.00033 4.66671C5.89576 4.66671 5.00033 5.56214 5.00033 6.66671C5.00033 7.77128 5.89576 8.66671 7.00033 8.66671Z"
            stroke="#FB6514"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.00033 14.6667C9.66699 12 12.3337 9.61223 12.3337 6.66671C12.3337 3.72119 9.94584 1.33337 7.00033 1.33337C4.05481 1.33337 1.66699 3.72119 1.66699 6.66671C1.66699 9.61223 4.33366 12 7.00033 14.6667Z"
            stroke="#FB6514"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Tag;
