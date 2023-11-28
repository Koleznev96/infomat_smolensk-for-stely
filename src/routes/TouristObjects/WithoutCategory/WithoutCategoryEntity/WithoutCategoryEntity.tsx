import React from "react";
import { useParams } from "react-router-dom";

import { CardView } from "src/components";
import { useGetPlaceIdQuery } from "src/api/main";

const WithoutCategoryEntity = () => {
  const params = useParams();

  const { data: response } = useGetPlaceIdQuery(params.entityId || "");

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <CardView
      id={params.entityId || ""}
      title={response.data.title}
      images={response.data.photos}
      descriptionTitle="Описание"
      descriptionParagraph={response.data.title}
      tags={[
        "Протяженность: 5 км",
        "Время: 2-2,5 часа",
        "Тип маршрута: Автомобильный",
      ]}
    />
  );
};

export default WithoutCategoryEntity;
