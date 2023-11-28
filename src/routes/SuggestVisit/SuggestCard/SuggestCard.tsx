import React from "react";

import { CardView } from "src/components";
import { useParams } from "react-router-dom";
import { useGetPlaceIdQuery } from "src/api/main";

const SuggestCard = () => {
  const params = useParams();

  const { data: response } = useGetPlaceIdQuery(params.id || "");

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <CardView
      placeId={params.id}
      title={response?.data?.title}
      descriptionTitle="Описание"
      contacts={{
        phone: response?.data?.phone,
        website: response?.data?.website,
        email: response?.data?.email,
        workTime: response?.data?.workingHours,
      }}
      images={response?.data?.photos}
      descriptionParagraph={response?.data?.description}
    />
  );
};

export default SuggestCard;
