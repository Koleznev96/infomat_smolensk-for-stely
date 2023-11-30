import React from "react";

import Link from "./Link";
import {
  CALENDAR_EVENT,
  SUGGEST_VISIT,
  TOURIST_OBJECTS,
  TOURIST_ROUTES,
} from "src/conts/routes";
import { useLanguageControl } from "src/hooks";

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
  const languageControl = useLanguageControl();

  return (
    <div className={styles.links}>
      <Link
        BgSVG={BookBg}
        MainSvg={Book}
        text={languageControl(
          "Туристские объекты на карте города",
          "Tourist objects on the city map",
        )}
        href={TOURIST_OBJECTS}
      />
      <Link
        BgSVG={MapBg}
        MainSvg={Map}
        text={languageControl(
          "Туристские маршруты",
          "Tourist objects on the city map",
        )}
        href={TOURIST_ROUTES}
      />
      <Link
        BgSVG={HomeBg}
        MainSvg={Home}
        text={languageControl("Рекомендуем", "Suggest visit")}
        href={SUGGEST_VISIT}
      />
      <Link
        BgSVG={CalendarBg}
        MainSvg={Calendar}
        text={languageControl("Календарь мероприятий", "Calendar of events")}
        href={CALENDAR_EVENT}
      />
    </div>
  );
};

export default Links;
