import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import yandex from "src/icons/header/yandex.png";
import logo from "src/icons/header/logo.png";
import head_bg from "src/icons/header/head-bg.png";

import { ReactComponent as RU } from "src/icons/header/ru.svg";
import { ReactComponent as GB } from "src/icons/header/gb.svg";

import {
  CALENDAR_EVENT,
  SUGGEST_VISIT,
  TOURIST_OBJECTS,
  TOURIST_ROUTES,
} from "src/conts/routes";
import { updateLanguage } from "src/store/slices";
import { useAppDispatch, useAppSelector } from "src/hooks";

import styles from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [date, setDate] = useState(new Date());

  const { language } = useAppSelector((state) => state.main);

  const moscowTime = new Date().toLocaleTimeString(language.replace("_", "-"), {
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

  const title = useMemo(() => {
    const path = location.pathname;

    switch (true) {
      case path.includes(TOURIST_OBJECTS):
        return "Туристские объекты на карте города";
      case path.includes(SUGGEST_VISIT):
        return "Рекомендуем";
      case path.includes(CALENDAR_EVENT):
        return "Календарь мероприятий";
      case path.includes(TOURIST_ROUTES):
        return "Туристские маршруты";
      default:
        return "Интерактивный туристский гид";
    }
  }, [location.pathname]);

  const changeLanguage = (lang: "ru_RU" | "en_US") => {
    dispatch(updateLanguage(lang));
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.date}>
          <span>
            {date.toLocaleDateString(language.replace("_", "-"), {
              weekday: "long",
            })}
            ,<span> {date.toLocaleDateString(language.replace("_", "-"))}</span>
          </span>
          <span>{moscowTime}</span>
        </div>
        <div className={styles.top}>
          <div className={styles.weather}>
            <img src={yandex} alt="yandex" />
            <span className={styles.info}>
              <span>Cмоленск +4°C</span>
              <span className={styles.blur}>Днем +6°C</span>
              <span className={styles.blur}>Вечером +7°C</span>
            </span>
          </div>
          <div className={styles.language}>
            <span
              onClick={() => changeLanguage("ru_RU")}
              className={language === "ru_RU" ? styles.active : ""}
            >
              <RU />
              РУ
            </span>
            <span
              onClick={() => changeLanguage("en_US")}
              className={language === "en_US" ? styles.active : ""}
            >
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
          <p>{title}</p>
        </div>
        <img className={styles.backgroundImage} src={head_bg} alt="head-bg" />
      </div>
      <div className={styles.headerBottom}>
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
              stroke="#667085"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input type="text" placeholder="Поиск" />
      </div>
    </div>
  );
};

export default Header;
