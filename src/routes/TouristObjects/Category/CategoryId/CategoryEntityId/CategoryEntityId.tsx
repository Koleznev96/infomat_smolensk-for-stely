import React from "react";
import { useParams } from "react-router-dom";

import { CardView } from "src/components";
import { useGetPlaceIdQuery } from "src/api/main";

const CategoryEntityId = () => {
  const params = useParams();
  const { data: response } = useGetPlaceIdQuery(params.id || "");

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
