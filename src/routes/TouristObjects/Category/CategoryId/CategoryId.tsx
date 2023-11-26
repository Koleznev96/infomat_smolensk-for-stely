import React from "react";
import { useParams } from "react-router-dom";

import { Card, Title } from "src/components";
import { useGetPlacesSubcategoryQuery } from "src/api/main";
import { TOURIST_OBJECTS_CATEGORY_ID_ENTITY } from "src/conts/routes";

import styles from "./CategoryId.module.scss";

const CategoryId = () => {
  const params = useParams();

  const { data: response } = useGetPlacesSubcategoryQuery(params.id || "");

  if (!response?.rows?.length) {
    return <></>;
  }

  return (
    <div className={styles.categoryId}>
      <Title
        text={response.rows?.[0].subcategory?.title}
        image={response.rows?.[0].subcategory?.icon?.url}
      />
      <div className={styles.categoryIdList}>
        {response.rows.map((row) => (
          <Card
            key={row.id}
            title={row.title}
            paragraph={row.description}
            cover={row.cover}
            href={TOURIST_OBJECTS_CATEGORY_ID_ENTITY(
              params.categoryId,
              params.id,
              row.id,
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryId;
