import React from "react";

import { CardView } from "src/components";
import { useParams } from "react-router-dom";
import { useLanguageControl } from "src/hooks";
import { useGetEventsIdQuery } from "src/api/main";

const CalendarCard = () => {
  const params = useParams();
  const languageControl = useLanguageControl();

  const { data: response } = useGetEventsIdQuery(params.entityId || "");

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <CardView
      eventId={params.entityId || ""}
      title={languageControl(response.data.title, response.data.titleEn)}
      images={response.data.photos}
      descriptionParagraph={languageControl(
        response.data.description,
        response.data.descriptionEn,
      )}
      buttons={{
        showOnMapLink: true,
      }}
    />
  );
};

export default CalendarCard;
