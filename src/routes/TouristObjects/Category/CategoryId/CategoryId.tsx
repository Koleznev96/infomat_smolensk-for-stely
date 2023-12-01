import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, Title } from "src/components";
import { useAppDispatch, useLanguageControl } from "src/hooks";
import { updatePlaceMarksAndCenter } from "src/store/slices";
import { useGetPlacesSubcategoryQuery } from "src/api/main";
import { TOURIST_OBJECTS_CATEGORY_ID_ENTITY } from "src/conts/routes";

import styles from "./CategoryId.module.scss";

const CategoryId = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const languageControl = useLanguageControl();

  const { data: response } = useGetPlacesSubcategoryQuery(params.id || "");
  const { data: places } = useGetPlacesSubcategoryQuery(params.id || "");

  useEffect(() => {
    if (!places?.rows?.length) {
      return;
    }

    dispatch(
      updatePlaceMarksAndCenter({
        marks: places.rows,
        center: places.rows[0],
      }),
    );
  }, [dispatch, places]);

  if (!response?.rows?.length) {
    return <></>;
  }

  return (
    <div className={styles.categoryId}>
      <Title
        text={languageControl(
          response?.rows?.[0]?.subcategory?.title,
          response?.rows?.[0]?.subcategory?.titleEn,
        )}
        bgColor={response.rows?.[0].subcategory?.backgroundColor}
        image={response.rows?.[0].subcategory?.icon?.url}
      />
      <div className={styles.categoryIdList}>
        {response.rows.map((row) => (
          <Card
            key={row.id}
            title={languageControl(row.title, row.titleEn)}
            paragraph={languageControl(row.description, row.descriptionEn)}
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
