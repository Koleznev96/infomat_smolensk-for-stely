import React from "react";

import styles from "./Title.module.scss";

interface TitleProps {
  text?: string;
  image?: string;
  children?: React.ReactNode;
  svg?: React.ReactNode;
}

const Title = ({ text, children, image, svg }: TitleProps) => {
  return (
    <div className={styles.title}>
      <div className={styles.image}>
        {svg ? svg : <img src={image} alt="icon" />}
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
