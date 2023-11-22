import React from "react";

import { TOURIST_OBJECTS_ID_ENTITY } from "src/conts/routes";

import { Card } from "src/components";

import styles from "./WithoutCategory.module.scss";

const WithoutCategory = () => {
  return (
    <div className={styles.withoutCategory}>
      <Card
        title="Заседание комиссии по делам несовершеннолетних и защите их прав"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные решения, подчёркивающие гармонию формы и содержания. Месторасположение отеля уникально: он находится в самом центре города, на..."
        href={TOURIST_OBJECTS_ID_ENTITY(1, 1)}
      />
      <Card
        title="Заседание комиссии по делам несовершеннолетних и защите их прав"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные решения, подчёркивающие гармонию формы и содержания. Месторасположение отеля уникально: он находится в самом центре города, на..."
        href={TOURIST_OBJECTS_ID_ENTITY(1, 1)}
      />
      <Card
        title="Заседание комиссии по делам несовершеннолетних и защите их прав"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные решения, подчёркивающие гармонию формы и содержания. Месторасположение отеля уникально: он находится в самом центре города, на..."
        href={TOURIST_OBJECTS_ID_ENTITY(1, 1)}
      />
      <Card
        title="Заседание комиссии по делам несовершеннолетних и защите их прав"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные решения, подчёркивающие гармонию формы и содержания. Месторасположение отеля уникально: он находится в самом центре города, на..."
        href={TOURIST_OBJECTS_ID_ENTITY(1, 1)}
      />
    </div>
  );
};

export default WithoutCategory;