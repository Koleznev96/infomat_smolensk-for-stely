import React from "react";

import { Card, Title } from "src/components";

import { SUGGEST_VISIT_ID } from "src/conts/routes";

import styles from "./SuggestVisit.module.scss";

const SuggestVisit = () => {
  return (
    <>
      <Title text="Рекомендуем" />
      <div className={styles.cards}>
        <Card
          title="Гранд-отель «Мегаполис»"
          paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные реш..."
          href={SUGGEST_VISIT_ID(1)}
        />
        <Card
          title="Гранд-отель «Мегаполис»"
          paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные реш..."
          href={SUGGEST_VISIT_ID(2)}
        />
        <Card
          title="Гранд-отель «Мегаполис»"
          paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные реш..."
          href={SUGGEST_VISIT_ID(3)}
        />
        <Card
          title="Гранд-отель «Мегаполис»"
          paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные реш..."
          href={SUGGEST_VISIT_ID(4)}
        />
      </div>
    </>
  );
};

export default SuggestVisit;
