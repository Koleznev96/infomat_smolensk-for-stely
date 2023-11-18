import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  image?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, image, onClick }: ButtonProps) => {
  return (
    <div className={styles.button}>
      {image}
      <div onClick={onClick}>{children}</div>
    </div>
  );
};

export default Button;
