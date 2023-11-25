import React from "react";

import { useFetch } from "src/hooks/useFetch";
import { CardView } from "src/components";
import { useParams } from "react-router-dom";
import { ApiResponseEventOut } from "src/api/myApi";

const CalendarCard = () => {
  const params = useParams();

  const { response } = useFetch<ApiResponseEventOut>(`events/${params.id}`);

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <div>
      <CardView
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
