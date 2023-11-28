import React from "react";
import { Link, useParams } from "react-router-dom";

import { Title } from "src/components";
import { useGetCategoryIdQuery } from "src/api/main";
import { TOURIST_OBJECTS_CATEGORY_ID } from "src/conts/routes";

import styles from "./Category.module.scss";

const Category = () => {
  const params = useParams();

  const { data: response } = useGetCategoryIdQuery(params.categoryId || "");

  if (!response?.data?.subcategories?.length) {
    return <></>;
  }

  return (
    <>
      <Title
        text={response?.data?.title}
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
            <span>{subCat.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
