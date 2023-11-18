import React from "react";

import Image from "./Image.png";

import { Title } from "src/components";

import styles from "./SuggestVisit.module.scss";

const SuggestVisit = () => {
  return (
    <div className={styles.suggestVisit}>
      <Title text="Рекомендуем" />
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={Image} alt="hotel" />
          <div className={styles.info}>
            <h6>Гранд-отель «Мегаполис»</h6>
            <p>
              «Мегаполис» – это безупречно стильные интерьеры, инновационные
              технологии, лаконичные архитектурные реш...
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={Image} alt="hotel" />
          <div className={styles.info}>
            <h6>Гранд-отель «Мегаполис»</h6>
            <p>
              «Мегаполис» – это безупречно стильные интерьеры, инновационные
              технологии, лаконичные архитектурные реш...
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={Image} alt="hotel" />
          <div className={styles.info}>
            <h6>Гранд-отель «Мегаполис»</h6>
            <p>
              «Мегаполис» – это безупречно стильные интерьеры, инновационные
              технологии, лаконичные архитектурные реш...
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={Image} alt="hotel" />
          <div className={styles.info}>
            <h6>Гранд-отель «Мегаполис»</h6>
            <p>
              «Мегаполис» – это безупречно стильные интерьеры, инновационные
              технологии, лаконичные архитектурные реш...
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={Image} alt="hotel" />
          <div className={styles.info}>
            <h6>Гранд-отель «Мегаполис»</h6>
            <p>
              «Мегаполис» – это безупречно стильные интерьеры, инновационные
              технологии, лаконичные архитектурные реш...
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={Image} alt="hotel" />
          <div className={styles.info}>
            <h6>Гранд-отель «Мегаполис»</h6>
            <p>
              «Мегаполис» – это безупречно стильные интерьеры, инновационные
              технологии, лаконичные архитектурные реш...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestVisit;
