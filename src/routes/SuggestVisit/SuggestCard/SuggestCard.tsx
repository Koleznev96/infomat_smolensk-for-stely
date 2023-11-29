import React from "react";

import { CardView } from "src/components";
import { useParams } from "react-router-dom";
import { useGetPlaceIdQuery } from "src/api/main";

const SuggestCard = () => {
  const params = useParams();

  const { data: response } = useGetPlaceIdQuery(params.entityId || "");

  if (!response?.data?.id) {
    return <></>;
  }
  return (
    <CardView
      placeId={params.entityId}
      title={response?.data?.title}
      descriptionTitle="Описание"
      images={[response.data.cover || {}, ...(response?.data?.photos || [])]}
      descriptionParagraph={response?.data?.description}
      buttons={{ showOnMapLink: "#", QRCodeLink: "#" }}
    />
  );
};

export default SuggestCard;
