import React, { useEffect } from "react";

import { Card, Title } from "src/components";
import { useAppDispatch, useLanguageControl } from "src/hooks";
import { CALENDAR_EVENT_ID } from "src/conts/routes";
import { useGetEventsQuery } from "src/api/main";
import { updatePlaceMarksEvent } from "src/store/slices";

import styles from "./CalendarEvents.module.scss";

const CalendarEvents = () => {
  const dispatch = useAppDispatch();
  const languageControl = useLanguageControl();
  const { data: response } = useGetEventsQuery(undefined);

  useEffect(() => {
    if (!response?.rows?.length) {
      return;
    }

    dispatch(
      updatePlaceMarksEvent({
        marks: response?.rows,
        center: response?.rows[0],
      }),
    );
  }, [dispatch, response]);

  if (!response?.rows?.length) {
    return <></>;
  }

  return (
    <div className={styles.calendarEvents}>
      <Title
        text={languageControl("Календарь событий", "Calendar events")}
        svg={
          <>
            <svg
              width="26"
              height="28"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.25 11.5H1.75M18 1.5V6.5M8 1.5V6.5M7.75 26.5H18.25C20.3502 26.5 21.4003 26.5 22.2025 26.0913C22.9081 25.7317 23.4817 25.1581 23.8413 24.4525C24.25 23.6503 24.25 22.6002 24.25 20.5V10C24.25 7.8998 24.25 6.8497 23.8413 6.04754C23.4817 5.34193 22.9081 4.76825 22.2025 4.40873C21.4003 4 20.3502 4 18.25 4H7.75C5.6498 4 4.5997 4 3.79754 4.40873C3.09193 4.76825 2.51825 5.34193 2.15873 6.04754C1.75 6.8497 1.75 7.8998 1.75 10V20.5C1.75 22.6002 1.75 23.6503 2.15873 24.4525C2.51825 25.1581 3.09193 25.7317 3.79754 26.0913C4.5997 26.5 5.6498 26.5 7.75 26.5Z"
                stroke="#C63927"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        }
      />
      {response.rows.map((row) => (
        <Card
          key={row.id}
          cover={row.cover}
          type="full"
          tags={{
            date: row.startDate || "",
            time: `${row.startTime || ""}-${row.endTime || ""}`,
            size: "large",
          }}
          title={languageControl(row.title, row.titleEn)}
          paragraph={languageControl(row.description, row.descriptionEn)}
          href={CALENDAR_EVENT_ID(row.id)}
        />
      ))}
    </div>
  );
};

export default CalendarEvents;
