import React from "react";
import { useParams } from "react-router-dom";

import { Card, Title } from "src/components";
import { useFetch } from "src/hooks/useFetch";
import { ApiPagePlaceShortOut } from "src/api/myApi";
import { TOURIST_OBJECTS_ID_ENTITY } from "src/conts/routes";

import styles from "./WithoutCategory.module.scss";

const WithoutCategory = () => {
  const params = useParams();

  const { response } = useFetch<ApiPagePlaceShortOut>(
    `places?status=PUBLISHED&subcategoryId=${params.id}`,
  );

  if (!response?.rows?.length) {
    return <></>;
  }

  return (
    <div>
      <Title
        text={response.rows?.[0].subcategory?.title}
        image={response.rows?.[0].subcategory?.icon?.url}
      />
      <div className={styles.withoutCategoryList}>
        {response.rows.map((row) => (
          <Card
            key={row.id}
            title={row.title}
            paragraph={row.description}
            href={TOURIST_OBJECTS_ID_ENTITY(params.id, row.id)}
            cover={row.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default WithoutCategory;
