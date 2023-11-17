import React from "react";

import yandex from "src/icons/header/yandex.png";
import logo from "src/icons/header/logo.png";
import head_bg from "src/icons/header/head-bg.png";

import { ReactComponent as RU } from "src/icons/header/ru.svg";
import { ReactComponent as GB } from "src/icons/header/gb.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content_top}>
        <span className={styles.date}>Вторник, 17.10.2023, 12:00</span>
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
      <div className={styles.header_content_middle}>
        <img src={logo} alt="logo" />
        <div className={styles.info}>
          <h3>Добро пожаловать в город-герой Смоленск!</h3>
          <p>Интерактивный туристский гид</p>
        </div>
        <img className={styles.background_image} src={head_bg} alt="head-bg" />
      </div>
      <div className={styles.header_content_bottom}>
        <input type="text" placeholder="Поиск" />
      </div>
    </div>
  );
};

export default Header;
