import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, Title } from "src/components";
import { useAppDispatch, useLanguageControl } from "src/hooks";
import { TOURIST_OBJECTS_ID_ENTITY } from "src/conts/routes";
import { updatePlaceMarksAndCenter } from "src/store/slices";
import { useGetPlacesSubcategoryQuery } from "src/api/main";

import styles from "./WithoutCategory.module.scss";

const WithoutCategory = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const languageControl = useLanguageControl();

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
        text={languageControl(
          response.rows?.[0].subcategory?.title,
          response.rows?.[0].subcategory?.titleEn,
        )}
        image={response.rows?.[0].subcategory?.icon?.url}
        bgColor={response.rows?.[0].subcategory?.backgroundColor}
      />
      <div className={styles.withoutCategoryList}>
        {response.rows.map((row) => (
          <Card
            key={row.id}
            title={languageControl(row.title, row.titleEn)}
            paragraph={languageControl(row.description, row.descriptionEn)}
            href={TOURIST_OBJECTS_ID_ENTITY(params.id, row.id)}
            cover={row.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default WithoutCategory;
