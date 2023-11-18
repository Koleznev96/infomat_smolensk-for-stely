import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  image?: React.ReactNode;
}

const Button = ({ children, image }: ButtonProps) => {
  return (
    <div className={styles.button}>
      {image}
      {children}
    </div>
  );
};

export default Button;
