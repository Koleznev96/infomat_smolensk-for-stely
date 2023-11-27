import React from "react";

import { CardView } from "src/components";
import { useParams } from "react-router-dom";
import { useGetEventsIdQuery } from "src/api/main";

const CalendarCard = () => {
  const params = useParams();

  const { data: response } = useGetEventsIdQuery(params.id || "");

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <div>
      <CardView
        id={params.id || ""}
        title={response.data.title}
        images={response.data.photos}
        descriptionTitle="Описание"
        descriptionParagraph={response.data.description}
        tags={[
          `Дата: ${response.data.startDate}`,
          `Время: ${response.data.startTime}`,
        ]}
        buttons={["Показать на карте"]}
      />
    </div>
  );
};

export default CalendarCard;
