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
        placeId={params.id || ""}
        title={response.data.title}
        images={response.data.photos}
        descriptionTitle="Описание"
        descriptionParagraph={response.data.description}
      />
    </div>
  );
};

export default CalendarCard;
