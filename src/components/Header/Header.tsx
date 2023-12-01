import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import yandexRU from "src/icons/header/yandexRU.svg";
import yandexEN from "src/icons/header/yandexEN.svg";
import logo from "src/icons/header/logo.png";
import headBG from "src/icons/header/head-bg.png";

import { ReactComponent as RU } from "src/icons/header/ru.svg";
import { ReactComponent as GB } from "src/icons/header/gb.svg";

import { Part } from "src/api/weather";

import {
  CALENDAR_EVENT,
  CALENDAR_EVENT_ID,
  SUGGEST_VISIT,
  TOURIST_OBJECTS,
  TOURIST_ROUTES,
} from "src/conts/routes";

import { SVGIcon } from "src/components";

import { updateLanguage } from "src/store/slices";

import {
  useGetGeneralQuery,
  useGetWeatherQuery,
  useLazyGetEventsQuery,
  useLazyGetPlacesQuery,
} from "src/api/main";

import {
  useAppDispatch,
  useAppSelector,
  useDebounce,
  useLanguageControl,
} from "src/hooks";

import styles from "./Header.module.scss";

type Type = "events" | "places";

interface SearchObjects {
  type?: Type;
  image?: string;
  title?: string;
  titleEn?: string;
  description?: string;
  descriptionEn?: string;
  link?: string;
}

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const languageControl = useLanguageControl();

  const [date, setDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [searchObjects, setSearchObjects] = useState<SearchObjects[]>([]);
  const debounceValue = useDebounce(inputValue, 500);

  const { data: response } = useGetGeneralQuery(undefined);
  const { data: weather } = useGetWeatherQuery(undefined);
  const [events, { data: eventsData }] = useLazyGetEventsQuery();
  const [places, { data: placesData }] = useLazyGetPlacesQuery();

  const { language } = useAppSelector((state) => state.main);

  const moscowTime = useMemo(
    () =>
      new Date().toLocaleTimeString(language.replace("_", "-"), {
        timeZone: "Europe/Moscow",
        hour: "numeric",
        minute: "numeric",
      }),
    [language],
  );

  const title = useMemo(() => {
    const path = location.pathname;

    switch (true) {
      case path.includes(TOURIST_OBJECTS):
        return languageControl(
          "Туристские объекты на карте города",
          "Tourist objects on the map of the city",
        );
      case path.includes(SUGGEST_VISIT):
        return languageControl("Рекомендуем", "Recommended");
      case path.includes(CALENDAR_EVENT):
        return languageControl("Календарь мероприятий", "Calendar of events");
      case path.includes(TOURIST_ROUTES):
        return languageControl("Туристские маршруты", "Tourist routes");
      default:
        return languageControl("Интерактивный туристский гид", "Tourist guide");
    }
  }, [location.pathname, languageControl]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (debounceValue) {
      const getData = async () => {
        await events({ search: debounceValue });
        await places({ search: debounceValue });
      };

      void getData();

      const dataEvents =
        eventsData?.rows?.map((event) => ({
          type: "events" as const,
          image: event.cover?.url3x2Original || "",
          title: event.title,
          titleEn: event.titleEn,
          description: event.description,
          descriptionEn: event.descriptionEn,
          link: CALENDAR_EVENT_ID(event.id),
        })) || [];

      const dataPlaces =
        placesData?.rows?.map((place) => ({
          type: "places" as const,
          image: place.cover?.url3x2Original || "",
          title: place.title,
          titleEn: place.titleEn,
          description: place.description,
          descriptionEn: place.descriptionEn,
          link: `${TOURIST_OBJECTS}/${place.subcategory?.id}/${place.id}`,
        })) || [];

      setSearchObjects([...dataEvents, ...dataPlaces]);
    } else {
      setSearchObjects([]);
    }
  }, [debounceValue, events, eventsData?.rows, places, placesData?.rows]);

  const changeLanguage = (lang: "ru_RU" | "en_US") => {
    dispatch(updateLanguage(lang));
  };

  const goToObject = (link: string) => {
    navigate(link);
    setInputValue("");
    setSearchObjects([]);
  };

  const currentTimeOfDay = (currentTime?: Part) => {
    switch (currentTime?.part_name) {
      case "morning":
        return (
          <>
            {languageControl("Утром", "Morning")} {currentTime?.temp_max || 0}
          </>
        );
      case "day":
        return (
          <>
            {languageControl("Днем", "Day")} {currentTime?.temp_max || 0}
          </>
        );
      case "evening":
        return (
          <>
            {languageControl("Вечером", "Evening")} {currentTime?.temp_max || 0}
          </>
        );
    }
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
            <img
              src={language === "ru_RU" ? yandexRU : yandexEN}
              width={127}
              height={34}
              alt="yandex-weather"
            />
            <span className={styles.info}>
              <span>
                {languageControl("Смоленск", "Smolensk")}
                {weather?.fact?.icon && <SVGIcon path={weather?.fact?.icon} />}
                {weather?.fact?.temp || 0}°C
              </span>
              <span className={styles.blur}>
                {currentTimeOfDay(weather?.forecast?.parts[0])}°C
              </span>
              <span className={styles.blur}>
                {currentTimeOfDay(weather?.forecast?.parts[1])}°C
              </span>
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
          <h3>
            {languageControl(response?.data?.title, response?.data?.titleEn)}
          </h3>
          <p>{title}</p>
        </div>
        <img className={styles.backgroundImage} src={headBG} alt="head-bg" />
      </div>
      <div className={styles.headerBottom}>
        <div
          className={styles.content}
          style={{
            boxShadow:
              searchObjects?.length >= 1
                ? "0 0 0 6px #edeff2, 0 1px 2px 0 rgba(16, 24, 40, 0.05)"
                : "",
          }}
        >
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
          <input
            type="text"
            placeholder={languageControl("Поиск", "Search")}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {searchObjects?.length >= 1 ? (
            <div className={styles.resultSection}>
              {searchObjects.map((object, index) => (
                <div
                  onClick={() => goToObject(object.link || "#")}
                  className={styles.card}
                  key={index}
                >
                  <img src={object.image} alt={object.image} />
                  <div className={styles.text}>
                    <h4>{languageControl(object.title, object.titleEn)}</h4>
                    <p>
                      {languageControl(
                        object.description,
                        object.descriptionEn,
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
