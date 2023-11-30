import React from "react";
import { Link, useParams } from "react-router-dom";

import { Title } from "src/components";
import { useLanguageControl } from "src/hooks";
import { useGetCategoryIdQuery } from "src/api/main";
import { TOURIST_OBJECTS_CATEGORY_ID } from "src/conts/routes";

import styles from "./Category.module.scss";

const Category = () => {
  const params = useParams();
  const languageControl = useLanguageControl();

  const { data: response } = useGetCategoryIdQuery(params.categoryId || "");

  if (!response?.data?.subcategories?.length) {
    return <></>;
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
