import React from "react";
import { Link } from "react-router-dom";

import Image from "./Image.png";

import { Tag } from "src/components";

import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  paragraph: string;
  href: string;
  type?: "full" | "flex";
  tags?: string[];
}

const Card = ({ title, paragraph, href, type = "flex", tags }: CardProps) => {
  return (
    <>
      {type === "flex" ? (
        <Link to={href} className={styles.cardFlex}>
          <img src={Image} alt="hotel" />
          <div className={styles.info}>
            <h6>{title}</h6>
            <p>{paragraph}</p>
          </div>
        </Link>
      ) : (
        <Link to={href} className={styles.cardFull}>
          <div className={styles.image}>
            <img width={360} height={240} src={Image} alt="news" />
          </div>
          <div className={styles.info}>
            <div className={styles.date}>
              <Tag text="10.10.2023" />
              <Tag text="09:30-11:30" />
            </div>
            <h4>{title}</h4>
            <p>{paragraph}</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
