import React, { useEffect, useState } from "react";

import yandex from "src/icons/header/yandex.png";
import logo from "src/icons/header/logo.png";
import head_bg from "src/icons/header/head-bg.png";

import { ReactComponent as RU } from "src/icons/header/ru.svg";
import { ReactComponent as GB } from "src/icons/header/gb.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const [date, setDate] = useState(new Date());

  const moscowTime = new Date().toLocaleTimeString("ru", {
    timeZone: "Europe/Moscow",
    hour: "numeric",
    minute: "numeric",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.date}>
          <span>
            {date.toLocaleDateString("ru", { weekday: "long" })},
            <span> {date.toLocaleDateString("ru")}</span>
          </span>
          <span>{moscowTime}</span>
        </div>
        <div className={styles.weather}>
          <img src={yandex} alt="yandex" />
          <span className={styles.info}>
            <span>Cмоленск +4°C</span>
            <span className={styles.blur}>Днем +6°C</span>
            <span className={styles.blur}>Вечером +7°C</span>
          </span>
          <div className={styles.language}>
            <span className={styles.active}>
              <RU />
              РУ
            </span>
            <span>
              <GB />
              EN
            </span>
          </div>
        </div>
      </div>
      <div className={styles.headerMiddle}>
        <img src={logo} alt="logo" />
        <div className={styles.info}>
          <h3>Добро пожаловать в город-герой Смоленск!</h3>
          <p>Интерактивный туристский гид</p>
        </div>
        <img className={styles.backgroundImage} src={head_bg} alt="head-bg" />
      </div>
      <div className={styles.headerBottom}>
        <input type="text" placeholder="Поиск" />
      </div>
    </div>
  );
};

export default Header;
