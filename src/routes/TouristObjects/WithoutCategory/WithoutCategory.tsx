import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, Title } from "src/components";
import { useAppDispatch } from "src/hooks";
import { TOURIST_OBJECTS_ID_ENTITY } from "src/conts/routes";
import { updatePlaceMarksAndCenter } from "src/store/slices";
import { useGetPlacesSubcategoryQuery } from "src/api/main";

import styles from "./WithoutCategory.module.scss";

const WithoutCategory = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { data: response } = useGetPlacesSubcategoryQuery(params.id || "");

  useEffect(() => {
    if (!response?.rows?.length) {
      return;
    }

    dispatch(
      updatePlaceMarksAndCenter({
        marks: response.rows,
        center: response.rows[0],
      }),
    );
  }, [dispatch, response]);

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
