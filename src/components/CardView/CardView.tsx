import React from "react";

import { Image } from "src/api/myApi";
import { Button, ImageSlider, Tag } from "src/components";

import styles from "./CardView.module.scss";

interface CardViewProps {
  title?: string;
  tags?: string[];
  descriptionTitle?: string;
  descriptionParagraph?: string;
  images?: Image[];
  buttons?: string[];
}

const CardView = ({
  title = "",
  tags = [],
  descriptionTitle = "",
  descriptionParagraph = "",
  images = [],
  buttons = [],
}: CardViewProps) => (
  <>
    <ImageSlider images={images} />
    <div className={styles.cardView}>
      <h4>{title}</h4>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <div className={styles.description}>
        <h5>{descriptionTitle}</h5>
        <p>{descriptionParagraph}</p>
      </div>
      <div className={styles.buttons}>
        {buttons.map((button) => (
          <Button key={button}>{button}</Button>
        ))}
      </div>
    </div>
  </>
);

export default CardView;
