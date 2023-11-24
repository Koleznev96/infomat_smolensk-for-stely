import React from "react";
import { Link } from "react-router-dom";

import { Title } from "src/components";
import { useFetch } from "src/hooks/useFetch";
import { ApiPagePlaceCategoryOut } from "src/api/myApi";
import { TOURIST_OBJECTS_CATEGORY, TOURIST_OBJECTS_ID } from "src/conts/routes";

import styles from "./TouristObjects.module.scss";

const TouristObjects = () => {
  const { response } = useFetch<ApiPagePlaceCategoryOut>("categories");

  if (!response?.rows?.length) {
    return <></>;
  }

  return (
    <div className={styles.touristsList}>
      <Title
        text="Туристские объекты на карте города"
        svg={
          <>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.25 21.5L1.5 26.5V6.5L10.25 1.5M10.25 21.5L19 26.5M10.25 21.5V1.5M19 26.5L26.5 21.5V1.5L19 6.5M19 26.5V6.5M19 6.5L10.25 1.5"
                stroke="#C63927"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        }
      />
      {response?.rows?.map((row) => {
        const isSubCategory = row.subcategories?.length !== 1;

        return (
          <React.Fragment key={row.id}>
            {isSubCategory ? (
              <Link to={TOURIST_OBJECTS_CATEGORY(row.id)}>
                <div className={styles.touristElem}>
                  <div className={styles.image}>
                    <img src={row.icon?.url} alt="icon" />
                  </div>
                  <div className={styles.info}>
                    <h5>{row.title}</h5>
                    <p>
                      {row.subcategories?.map((sub) => sub.title).join(", ")}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <Link to={TOURIST_OBJECTS_ID(row.subcategories?.[0].id)}>
                <div className={styles.touristElem}>
                  <div className={styles.image}>
                    <img src={row.icon?.url} alt="icon" />
                  </div>
                  <div className={styles.info}>
                    <h5>{row.title}</h5>
                    <p>
                      {row.subcategories?.length !== 1 &&
                        row.subcategories?.map((sub) => sub.title).join(", ")}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TouristObjects;
