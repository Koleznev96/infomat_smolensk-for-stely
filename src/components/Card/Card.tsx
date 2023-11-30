import React from "react";
import { Link } from "react-router-dom";

import { Tag } from "src/components";
import { Image } from "src/api/myApi";

import styles from "./Card.module.scss";

interface CardProps {
  title?: string;
  paragraph?: string;
  href?: string;
  type?: "full" | "flex";
  cover?: Image;
}

const Card = ({ title, paragraph, href, type = "flex", cover }: CardProps) => {
  return (
    <>
      {type === "flex" ? (
        <Link to={href || ""} className={styles.cardFlex}>
          <img src={cover?.url3x2Original} alt="hotel" />
          <div className={styles.info}>
            <h6>{title}</h6>
            <p>{paragraph}</p>
          </div>
        </Link>
      ) : (
        <Link to={href || ""} className={styles.cardFull}>
          <div className={styles.image}>
            <img
              width={360}
              height={240}
              src={cover?.url3x2Original}
              alt="news"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.date}>
              <Tag text="10.10.2023" padding="2px 8px 2px 4px" size="large" />
              <Tag text="09:30-11:30" padding="2px 8px 2px 4px" size="large" />
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
