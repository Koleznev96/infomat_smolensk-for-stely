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
    <>
      <CardView
        id={params.id}
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
        tags={[`Адрес: ${response?.data?.address?.address}`]}
        buttons={["Показать на карте"]}
      />
    </>
  );
};

export default SuggestCard;
