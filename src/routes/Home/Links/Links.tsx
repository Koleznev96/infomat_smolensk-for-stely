import React from "react";

import Link from "./Link";

import { ReactComponent as Book } from "src/icons/links/book.svg";
import { ReactComponent as BookBg } from "src/icons/links/book-bg.svg";
import { ReactComponent as Home } from "src/icons/links/love.svg";
import { ReactComponent as HomeBg } from "src/icons/links/love-bg.svg";
import { ReactComponent as Map } from "src/icons/links/map.svg";
import { ReactComponent as MapBg } from "src/icons/links/map-bg.svg";
import { ReactComponent as Calendar } from "src/icons/links/calendar.svg";
import { ReactComponent as CalendarBg } from "src/icons/links/calendar-bg.svg";

import {
  CALENDAR_EVENT,
  SUGGEST_VISIT,
  TOURIST_OBJECTS,
  TOURIST_ROUTES,
} from "src/conts/routes";

import styles from "./Link.module.scss";

const Links = () => {
  return (
    <div className={styles.links}>
      <Link
        BgSVG={BookBg}
        MainSvg={Book}
        text="Туристские объекты на карте города"
        href={TOURIST_OBJECTS}
      />
      <Link
        BgSVG={MapBg}
        MainSvg={Map}
        text="Туристские маршруты"
        href={TOURIST_ROUTES}
      />
      <Link
        BgSVG={HomeBg}
        MainSvg={Home}
        text="Рекомендуем"
        href={SUGGEST_VISIT}
      />
      <Link
        BgSVG={CalendarBg}
        MainSvg={Calendar}
        text="Календарь мероприятий"
        href={CALENDAR_EVENT}
      />
    </div>
  );
};

export default Links;
