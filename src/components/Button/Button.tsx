import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  image?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  classNameButtonContent?: string;
  noPadding?: boolean;
}

const Button = ({
  children,
  image,
  onClick,
  className,
  noPadding,
  classNameButtonContent,
}: ButtonProps) => {
  return (
    <div
      style={{ padding: noPadding ? 0 : "12px 20px" }}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {image}
      <div className={classNameButtonContent}>{children}</div>
    </div>
  );
};

export default Button;
