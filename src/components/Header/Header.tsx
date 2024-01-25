import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import yandexRU from "src/icons/header/yandexRU.svg";
import yandexEN from "src/icons/header/yandexEN.svg";
import logo from "src/icons/header/logo.png";
import headBG from "src/icons/header/head-bg.png";

import { ReactComponent as RU } from "src/icons/header/ru.svg";
import { ReactComponent as GB } from "src/icons/header/gb.svg";

import { Part } from "src/api/weather";

import KeyboardWrapper from "src/components/Header/KeyboardWrapper";

import {
  CALENDAR_EVENT,
  CALENDAR_EVENT_ID,
  SUGGEST_VISIT,
  TOURIST_OBJECTS,
  TOURIST_OBJECTS_ID_ENTITY,
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

  const keyboardRef = useRef<any | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const outsideRef = useRef<null | HTMLDivElement>(null);

  const [date, setDate] = useState(new Date());
  const [moscowTime, setMoscowTime] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [searchObjects, setSearchObjects] = useState<SearchObjects[]>([]);
  const [toggleShowKeyboard, setToggleShowKeyboard] = useState(false);
  const debounceValue = useDebounce(inputValue, 500);

  const { data: response } = useGetGeneralQuery(undefined);
  const { data: weather, refetch } = useGetWeatherQuery(undefined);
  const [events, { data: eventsData }] = useLazyGetEventsQuery();
  const [places, { data: placesData }] = useLazyGetPlacesQuery();

  const { language } = useAppSelector((state) => state.main);

  const title = useMemo(() => {
    const path = location.pathname;

    switch (true) {
      case path.includes(TOURIST_OBJECTS):
        return languageControl(
          "Туристские объекты на карте города",
          "Tourist objects on the map of the city"
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
      setMoscowTime(new Date());
    }, 1000);

    const weatherIntervalId = setInterval(
      () => {
        refetch();
      },
      1000 * 60 * 30
    );

    return () => {
      clearInterval(intervalId);
      clearInterval(weatherIntervalId);
    };
  }, []);

  useEffect(() => {
    const checkClickOutSide = (event: MouseEvent) => {
      if (
        outsideRef.current &&
        !outsideRef.current.contains(event.target as Node)
      ) {
        setSearchObjects([]);
        setInputValue("");
        setToggleShowKeyboard(false);
      }
    };

    window.addEventListener("click", checkClickOutSide);

    return () => window.removeEventListener("click", checkClickOutSide);
  }, []);

  useEffect(() => {
    if (debounceValue) {
      const getData = async () => {
        await events({ search: debounceValue });

        await places({ search: debounceValue });
      };

      void getData();
    } else {
      setSearchObjects([]);
    }
  }, [debounceValue, events, places]);

  useEffect(() => {
    if (response?.data?.yandexMetricCode) {
      const script = document.createElement("script");
      const scriptBody = document.createTextNode(`
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym",
      );

      window.ym(${response?.data?.yandexMetricCode}, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    `);

      script.appendChild(scriptBody);

      document.head.append(script);
    }
  }, [response?.data?.yandexMetricCode]);

  useEffect(() => {
    if (!debounceValue) {
      setSearchObjects([]);
      return;
    }

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
        link: TOURIST_OBJECTS_ID_ENTITY(place.subcategory?.id, place?.id),
      })) || [];

    setSearchObjects([...dataEvents, ...dataPlaces]);
  }, [debounceValue, eventsData, placesData]);

  const changeLanguage = (lang: "ru_RU" | "en_US") => {
    dispatch(updateLanguage(lang));
  };

  const goToObject = (link: string) => {
    navigate(link);
    setInputValue("");
    setSearchObjects([]);
  };

  const currentWeather = useMemo(() => {
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
              {languageControl("Днем", "Afternoon")}{" "}
              {currentTime?.temp_max || 0}
            </>
          );
        case "evening":
          return (
            <>
              {languageControl("Вечером", "Evening")}{" "}
              {currentTime?.temp_max || 0}
            </>
          );
        case "night":
          return (
            <>
              {languageControl("Ночью", "Night")} {currentTime?.temp_max || 0}
            </>
          );
      }
    };

    return (
      <>
        <span className={styles.blur}>
          {currentTimeOfDay(weather?.forecast?.parts[0])}°C
        </span>
        <span className={styles.blur}>
          {currentTimeOfDay(weather?.forecast?.parts[1])}°C
        </span>
      </>
    );
  }, [languageControl, weather?.forecast?.parts]);

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.date}>
          <span>
            {date.toLocaleDateString(language.replace("_", "-"), {
              timeZone: "Europe/Moscow",
              weekday: "long",
            })}
            ,{" "}
            <span>
              {date.toLocaleDateString(language.replace("_", "-"), {
                timeZone: "Europe/Moscow",
              })}
            </span>
          </span>
          <span>
            {moscowTime.toLocaleTimeString(language.replace("_", "-"), {
              timeZone: "Europe/Moscow",
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
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
              {currentWeather}
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
      <div className={styles.headerBottom} ref={outsideRef}>
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
            ref={inputRef}
            placeholder={languageControl("Поиск", "Search")}
            value={inputValue}
            onChange={(e) => {
              const value = e.target.value;
              setInputValue(value);
              keyboardRef.current?.setInput(value);
            }}
            onFocus={() => setToggleShowKeyboard(true)}
          />
          {searchObjects?.length >= 1 && (
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
                        object.descriptionEn
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!searchObjects?.length && inputValue && (
            <p className={styles.nothing}>
              {languageControl("Ничего не найдено", "Nothing found")}
            </p>
          )}
        </div>
        {toggleShowKeyboard && (
          <div className={styles.keyboard}>
            <KeyboardWrapper
              onChange={setInputValue}
              language={language}
              keyboardRef={keyboardRef}
              inputRef={inputRef}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
