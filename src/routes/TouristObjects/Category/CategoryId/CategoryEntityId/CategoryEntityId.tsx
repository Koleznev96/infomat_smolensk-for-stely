import React from "react";
import { useParams } from "react-router-dom";

import { CardView } from "src/components";
import { useFetch } from "src/hooks/useFetch";
import { ApiResponsePlaceOut } from "src/api/myApi";

const CategoryEntityId = () => {
  const params = useParams();

  const { response } = useFetch<ApiResponsePlaceOut>(
    `places/${params.entityId}`,
  );

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <div>
      <CardView
        title={response.data.title}
        descriptionTitle="Описание"
        descriptionParagraph={response.data.description}
        images={response.data.photos}
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
    </div>
  );
};

export default CategoryEntityId;
