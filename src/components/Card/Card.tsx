import React from "react";
import { Link } from "react-router-dom";

import { Tag } from "src/components";
import { Image } from "src/api/myApi";

import styles from "./Card.module.scss";

interface CardProps {
  title?: string;
  paragraph?: string;
  href?: string;
  tags?: {
    date?: string;
    time?: string;
  };
  type?: "full" | "flex";
  cover?: Image;
}

const Card = ({
  title,
  paragraph,
  href,
  type = "flex",
  cover,
  tags,
}: CardProps) => {
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
              <Tag
                icon={{
                  name: "cal",
                  color: "#C63927",
                }}
                text={tags?.date}
                color={{
                  text: "#C63927",
                  bg: "#FFEDEC",
                }}
                padding="7px"
                size="large"
              />
              <Tag
                icon={{
                  name: "time",
                  color: "#C63927",
                }}
                text={tags?.time}
                color={{
                  text: "#C63927",
                  bg: "#FFEDEC",
                }}
                padding="7px"
                size="large"
              />
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
