import React from "react";

import { Card, Title } from "src/components";

import { CALENDAR_EVENT_ID } from "src/conts/routes";

import styles from "./CalendarEvents.module.scss";

const CalendarEvents = () => {
  return (
    <div className={styles.calendarEvents}>
      <Title text="Календарь мероприятий" />
      <Card
        type="full"
        title="Заседание комиссии по делам несовершеннолетних и защите их прав"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные решения, подчёркивающие гармонию формы и содержания. Месторасположение отеля уникально: он находится в самом центре города, на..."
        tags={["10.10.2023", "09:30-11:30"]}
        href={CALENDAR_EVENT_ID(1)}
      />
      <Card
        type="full"
        title="Заседание комиссии по делам несовершеннолетних и защите их прав"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные решения, подчёркивающие гармонию формы и содержания. Месторасположение отеля уникально: он находится в самом центре города, на..."
        tags={["10.10.2023", "09:30-11:30"]}
        href={CALENDAR_EVENT_ID(2)}
      />
      <Card
        type="full"
        title="Заседание комиссии по делам несовершеннолетних и защите их прав"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные решения, подчёркивающие гармонию формы и содержания. Месторасположение отеля уникально: он находится в самом центре города, на..."
        tags={["10.10.2023", "09:30-11:30"]}
        href={CALENDAR_EVENT_ID(3)}
      />
      <Card
        type="full"
        title="Заседание комиссии по делам несовершеннолетних и защите их прав"
        paragraph="«Мегаполис» – это безупречно стильные интерьеры, инновационные технологии, лаконичные архитектурные решения, подчёркивающие гармонию формы и содержания. Месторасположение отеля уникально: он находится в самом центре города, на..."
        tags={["10.10.2023", "09:30-11:30"]}
        href={CALENDAR_EVENT_ID(4)}
      />
    </div>
  );
};

export default CalendarEvents;