import React from "react";
import { useParams } from "react-router-dom";

import { CardView } from "src/components";
import { useGetPlaceIdQuery } from "src/api/main";

const Subject = () => {
  const params = useParams();

  const { data: response } = useGetPlaceIdQuery(params.entityId || "");

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <CardView
      placeId={params.entityId}
      routeId={params.id}
      images={[response.data.cover || {}, ...(response?.data?.photos || [])]}
      title={response.data.title}
      descriptionTitle="Описание"
      descriptionParagraph={response.data.description}
      buttons={{ showOnMapLink: "#", showRouteLink: "#", QRCodeLink: "#" }}
    />
  );
};

export default Subject;
