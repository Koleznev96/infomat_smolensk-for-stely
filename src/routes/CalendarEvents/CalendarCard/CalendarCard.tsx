import React from "react";

import { CardView } from "src/components";
import { useParams } from "react-router-dom";
import { useGetEventsIdQuery } from "src/api/main";

const CalendarCard = () => {
  const params = useParams();

  const { data: response } = useGetEventsIdQuery(params.entityId || "");

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <div>
      <CardView
        eventId={params.entityId || ""}
        title={response.data.title}
        images={response.data.photos}
        descriptionTitle="Описание"
        descriptionParagraph={response.data.description}
        buttons={{
          showOnMapLink: true,
        }}
      />
    </div>
  );
};

export default CalendarCard;
