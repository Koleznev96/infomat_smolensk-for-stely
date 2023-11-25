import React from "react";

import { CardView } from "src/components";
import { useParams } from "react-router-dom";
import { useFetch } from "src/hooks/useFetch";
import { ApiResponsePlaceOut } from "src/api/myApi";

const SuggestCard = () => {
  const params = useParams();

  const { response } = useFetch<ApiResponsePlaceOut>(`places/${params.id}`);

  return (
    <>
      <CardView
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
