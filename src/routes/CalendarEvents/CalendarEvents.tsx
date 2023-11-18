import React from "react";

import img from "./Image.png";

import { Tag, Title } from "src/components";

import styles from "./CalendarEvents.module.scss";

const CalendarEvents = () => {
  return (
    <div className={styles.calendarEvents}>
      <Title text="Календарь мероприятий" />
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={img} alt="news" />
        </div>
        <div className={styles.info}>
          <div className={styles.date}>
            <Tag text="10.10.2023" />
            <Tag text="09:30-11:30" />
          </div>
          <h4>
            Заседание комиссии по делам несовершеннолетних и защите их прав
          </h4>
          <p>
            «Мегаполис» – это безупречно стильные интерьеры, инновационные
            технологии, лаконичные архитектурные решения, подчёркивающие
            гармонию формы и содержания. Месторасположение отеля уникально: он
            находится в самом центре города, на...
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={img} alt="news" />
        </div>
        <div className={styles.info}>
          <div className={styles.date}>
            <Tag text="10.10.2023" />
            <Tag text="09:30-11:30" />
          </div>
          <h4>
            Заседание комиссии по делам несовершеннолетних и защите их прав
          </h4>
          <p>
            «Мегаполис» – это безупречно стильные интерьеры, инновационные
            технологии, лаконичные архитектурные решения, подчёркивающие
            гармонию формы и содержания. Месторасположение отеля уникально: он
            находится в самом центре города, на...
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={img} alt="news" />
        </div>
        <div className={styles.info}>
          <div className={styles.date}>
            <Tag text="10.10.2023" />
            <Tag text="09:30-11:30" />
          </div>
          <h4>
            Заседание комиссии по делам несовершеннолетних и защите их прав
          </h4>
          <p>
            «Мегаполис» – это безупречно стильные интерьеры, инновационные
            технологии, лаконичные архитектурные решения, подчёркивающие
            гармонию формы и содержания. Месторасположение отеля уникально: он
            находится в самом центре города, на...
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={img} alt="news" />
        </div>
        <div className={styles.info}>
          <div className={styles.date}>
            <Tag text="10.10.2023" />
            <Tag text="09:30-11:30" />
          </div>
          <h4>
            Заседание комиссии по делам несовершеннолетних и защите их прав
          </h4>
          <p>
            «Мегаполис» – это безупречно стильные интерьеры, инновационные
            технологии, лаконичные архитектурные решения, подчёркивающие
            гармонию формы и содержания. Месторасположение отеля уникально: он
            находится в самом центре города, на...
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={img} alt="news" />
        </div>
        <div className={styles.info}>
          <div className={styles.date}>
            <Tag text="10.10.2023" />
            <Tag text="09:30-11:30" />
          </div>
          <h4>
            Заседание комиссии по делам несовершеннолетних и защите их прав
          </h4>
          <p>
            «Мегаполис» – это безупречно стильные интерьеры, инновационные
            технологии, лаконичные архитектурные решения, подчёркивающие
            гармонию формы и содержания. Месторасположение отеля уникально: он
            находится в самом центре города, на...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarEvents;
