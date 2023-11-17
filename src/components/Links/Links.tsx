import React from "react";

import { Link } from "src/components";

import { ReactComponent as Book } from "src/icons/links/book.svg";
import { ReactComponent as BookBg } from "src/icons/links/book-bg.svg";
import { ReactComponent as Home } from "src/icons/links/love.svg";
import { ReactComponent as HomeBg } from "src/icons/links/love-bg.svg";
import { ReactComponent as Map } from "src/icons/links/map.svg";
import { ReactComponent as MapBg } from "src/icons/links/map-bg.svg";
import { ReactComponent as Calendar } from "src/icons/links/calendar.svg";
import { ReactComponent as CalendarBg } from "src/icons/links/calendar-bg.svg";

import styles from "./Link.module.scss";

const Links = () => {
  return (
    <div className={styles.links}>
      <Link
        BgSVG={BookBg}
        MainSvg={Book}
        text="Туристские объекты на карте города"
      />
      <Link BgSVG={MapBg} MainSvg={Map} text="Туристские маршруты" />
      <Link BgSVG={HomeBg} MainSvg={Home} text="Рекомендуем" />
      <Link
        BgSVG={CalendarBg}
        MainSvg={Calendar}
        text="Календарь мероприятий"
      />
    </div>
  );
};

export default Links;
