import React from "react";
import { Link, useParams } from "react-router-dom";

import { Title } from "src/components";
import { useFetch } from "src/hooks/useFetch";
import { ApiResponsePlaceCategoryOut } from "src/api/myApi";
import { TOURIST_OBJECTS_CATEGORY_ID } from "src/conts/routes";

import styles from "./Category.module.scss";

const Category = () => {
  const params = useParams();

  const { response } = useFetch<ApiResponsePlaceCategoryOut>(
    `categories/${params.categoryId}`,
  );

  if (!response?.data?.subcategories?.length) {
    return <></>;
  }

  return (
    <>
      <Title text={response?.data?.title} image={response?.data?.icon?.url} />
      <div className={styles.categoryList}>
        {response?.data?.subcategories?.map((subCat) => (
          <Link
            key={subCat.id}
            className={styles.link}
            to={TOURIST_OBJECTS_CATEGORY_ID(params.categoryId, subCat.id)}
          >
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.16957 0.25H11.8304C12.3646 0.24999 12.8104 0.249981 13.1747 0.27974C13.5546 0.310778 13.9112 0.377889 14.2485 0.549733C14.7659 0.813385 15.1866 1.23408 15.4503 1.75153C15.6221 2.08879 15.6892 2.44545 15.7203 2.82533C15.75 3.18956 15.75 3.6354 15.75 4.16955V18.25H17C17.4142 18.25 17.75 18.5858 17.75 19C17.75 19.4142 17.4142 19.75 17 19.75H1C0.585786 19.75 0.25 19.4142 0.25 19C0.25 18.5858 0.585786 18.25 1 18.25H2.25L2.25 4.16957C2.24999 3.63541 2.24998 3.18956 2.27974 2.82533C2.31078 2.44545 2.37789 2.08879 2.54973 1.75153C2.81338 1.23408 3.23408 0.813385 3.75153 0.549733C4.08879 0.377889 4.44545 0.310778 4.82533 0.27974C5.18956 0.249981 5.63541 0.24999 6.16957 0.25ZM3.75 18.25H14.25V4.2C14.25 3.62757 14.2494 3.24336 14.2252 2.94748C14.2018 2.66036 14.1599 2.52307 14.1138 2.43251C13.9939 2.19731 13.8027 2.00608 13.5675 1.88624C13.4769 1.8401 13.3396 1.79822 13.0525 1.77476C12.7566 1.75058 12.3724 1.75 11.8 1.75H6.2C5.62757 1.75 5.24336 1.75058 4.94748 1.77476C4.66035 1.79822 4.52307 1.8401 4.43251 1.88624C4.19731 2.00608 4.00608 2.19731 3.88624 2.43251C3.8401 2.52307 3.79822 2.66036 3.77476 2.94748C3.75058 3.24336 3.75 3.62757 3.75 4.2V18.25Z"
                fill="#AE4408"
              />
            </svg>
            <span>{subCat.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
