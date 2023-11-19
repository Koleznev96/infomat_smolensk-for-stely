import React from "react";

import { TOURIST_OBJECTS_CATEGORY_ID_ENTITY } from "src/conts/routes";

import { Card } from "src/components";

import styles from "./CategoryId.module.scss";

const CategoryId = () => {
  return (
    <div className={styles.categoryId}>
      <Card
        title="Гранд-отель «Мегаполис»"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные реш..."
        href={TOURIST_OBJECTS_CATEGORY_ID_ENTITY(1, 1)}
      />
      <Card
        title="Гранд-отель «Мегаполис»"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные реш..."
        href={TOURIST_OBJECTS_CATEGORY_ID_ENTITY(1, 1)}
      />
      <Card
        title="Гранд-отель «Мегаполис»"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные реш..."
        href={TOURIST_OBJECTS_CATEGORY_ID_ENTITY(1, 1)}
      />
    </div>
  );
};

export default CategoryId;
