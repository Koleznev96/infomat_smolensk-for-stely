import React from "react";
import { useParams } from "react-router-dom";

import { CardView } from "src/components";
import { useFetch } from "src/hooks/useFetch";
import { ApiResponsePlaceOut } from "src/api/myApi";

const WithoutCategoryEntity = () => {
  const params = useParams();

  const { response } = useFetch<ApiResponsePlaceOut>(
    `places/${params.entityId}`,
  );

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <CardView
      title={response.data.title}
      images={response.data.photos}
      descriptionTitle="Описание"
      descriptionParagraph={response.data.title}
      tags={[
        "Протяженность: 5 км",
        "Время: 2-2,5 часа",
        "Тип маршрута: Автомобильный",
      ]}
      buttons={[
        "Показать на карте",
        "Посмотреть маршрут",
        "«Мой Смоленск» об объекте",
      ]}
    />
  );
};

export default WithoutCategoryEntity;
