import React from "react";
import { useParams } from "react-router-dom";

import { CardView } from "src/components";
import { useLanguageControl } from "src/hooks";
import { useGetPlaceIdQuery } from "src/api/main";

const Subject = () => {
  const params = useParams();
  const languageControl = useLanguageControl();

  const { data: response } = useGetPlaceIdQuery(params.entityId || "");

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <CardView
      placeId={params.entityId}
      routeId={params.id}
      images={[response.data.cover || {}, ...(response?.data?.photos || [])]}
      title={languageControl(response.data.title, response.data.titleEn)}
      descriptionParagraph={languageControl(
        response.data.description,
        response.data.descriptionEn,
      )}
      buttons={{ showOnMapLink: true, showRoute: true, QRCodeLink: "#" }}
    />
  );
};

export default Subject;
