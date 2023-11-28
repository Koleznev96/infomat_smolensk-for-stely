import React from "react";
import { useParams } from "react-router-dom";

import { CardView } from "src/components";
import { useGetPlaceIdQuery, useGetRoutesIdQuery } from "src/api/main";

const Subject = () => {
  const params = useParams();

  const { data: response } = useGetPlaceIdQuery(params.entityId || "");
  const { data: route } = useGetRoutesIdQuery(params.id || "");

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <CardView
      routeId={params.id}
      images={response.data.photos}
      title={response.data.title}
      descriptionTitle="Описание"
      descriptionParagraph={response.data.description}
      tags={[
        {
          name: "geo",
          color: route?.data?.routeColor,
          text: `Адрес: ${String(response.data.address?.address)}`,
        },
        {
          name: "time",
          color: route?.data?.routeColor,
          text: `Режим работы: ${String(response.data.workingHours)}`,
        },
        {
          name: "route",
          color: route?.data?.routeColor,
          text: `Маршрут: ${String(route?.data?.title)}`,
        },
      ]}
      buttons={{ showOnMapLink: "#", showRouteLink: "#", QRCodeLink: "#" }}
    />
  );
};

export default Subject;
