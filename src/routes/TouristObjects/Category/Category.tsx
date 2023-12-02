import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Loader, Title } from "src/components";
import { useGetCategoryIdQuery, useGetPlacesCategoryQuery } from "src/api/main";
import { updatePlaceMarksAndCenter } from "src/store/slices";
import { TOURIST_OBJECTS_CATEGORY_ID } from "src/conts/routes";
import { useAppDispatch, useLanguageControl } from "src/hooks";

import styles from "./Category.module.scss";

const Category = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const languageControl = useLanguageControl();

  const { data: response } = useGetCategoryIdQuery(params.categoryId || "");
  const { data: places } = useGetPlacesCategoryQuery(params.categoryId || "");

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

  if (!response?.data?.subcategories?.length) {
    return <Loader />;
  }

  return (
    <>
      <Title
        text={languageControl(response?.data?.title, response?.data?.titleEn)}
        image={response?.data?.icon?.url}
        bgColor={response?.data.backgroundColor}
      />
      <div className={styles.categoryList}>
        {response?.data?.subcategories?.map((subCat) => (
          <Link
            key={subCat.id}
            className={styles.link}
            to={TOURIST_OBJECTS_CATEGORY_ID(params.categoryId, subCat.id)}
          >
            <img src={subCat?.icon?.url} alt="" />
            <span>{languageControl(subCat.title, subCat.titleEn)}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
