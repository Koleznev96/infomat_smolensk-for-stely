import React from "react";

import { CardView } from "src/components";

import { useParams } from "react-router-dom";
import { useFetch } from "src/hooks/useFetch";
import { ApiResponsePlaceOut } from "src/api/myApi";

import styles from "./Subject.module.scss";

const Subject = () => {
  const params = useParams();

  const { response } = useFetch<ApiResponsePlaceOut>(
    `places/${params.entityId}`,
  );

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <div className={styles.subject}>
      <CardView
        images={response.data.photos}
        title={response.data.title}
        descriptionTitle="Описание"
        descriptionParagraph={response.data.description}
        tags={[
          String(response.data.address?.address),
          String(response.data.workingHours),
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

export default Subject;
