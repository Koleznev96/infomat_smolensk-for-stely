import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  image?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, image, onClick, className }: ButtonProps) => {
  return (
    <div className={`${styles.button} ${className}`} onClick={onClick}>
      {image}
      <div>{children}</div>
    </div>
  );
};

export default Button;
