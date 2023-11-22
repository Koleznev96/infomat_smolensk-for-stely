import React from "react";

import styles from "./Title.module.scss";

interface TitleProps {
  text: string;
  image?: string;
  children?: React.ReactNode;
}

const Title = ({ text, children }: TitleProps) => {
  return (
    <div className={styles.title}>
      <div className={styles.image}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.9914 6.41977C12.4922 3.498 8.32468 2.71205 5.19337 5.38752C2.06205 8.06298 1.62121 12.5362 4.08025 15.7005C6.12477 18.3314 12.3122 23.8801 14.3401 25.676C14.567 25.877 14.6804 25.9774 14.8128 26.0169C14.9283 26.0514 15.0546 26.0514 15.1701 26.0169C15.3024 25.9774 15.4159 25.877 15.6428 25.676C17.6707 23.8801 23.8581 18.3314 25.9026 15.7005C28.3617 12.5362 27.9746 8.03484 24.7895 5.38752C21.6044 2.7402 17.4906 3.498 14.9914 6.41977Z"
            stroke="#C63927"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {children ? (
        <div className={styles.info}>
          <h6>{text}</h6>
          <div>{children}</div>
        </div>
      ) : (
        <div className={styles.info}>
          <h6>{text}</h6>
        </div>
      )}
    </div>
  );
};

export default Title;