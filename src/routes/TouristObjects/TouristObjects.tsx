import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Loader, Title } from "src/components";
import { useAppDispatch, useLanguageControl } from "src/hooks";
import { updatePlaceMarksAndCenter } from "src/store/slices";
import { useGetCategoriesQuery, useGetPlacesQuery } from "src/api/main";
import { TOURIST_OBJECTS_CATEGORY, TOURIST_OBJECTS_ID } from "src/conts/routes";

import styles from "./TouristObjects.module.scss";

const TouristObjects = () => {
  const dispatch = useAppDispatch();
  const languageControl = useLanguageControl();

  const { data: response } = useGetCategoriesQuery(undefined);
  const { data: places } = useGetPlacesQuery({ page: 1 });

  useEffect(() => {
    if (!places?.rows?.length) {
      return;
    }

    dispatch(
      updatePlaceMarksAndCenter({
        marks: places?.rows,
        center: places?.rows[0],
      }),
    );
  }, [dispatch, places]);

  if (!response?.rows?.length) {
    return <Loader />;
  }

  return (
    <div className={styles.touristsContent}>
      <Title
        text={languageControl(
          "Туристские объекты на карте города",
          "Tourist objects on the map of the city",
        )}
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
      <div className={styles.touristElems}>
        {response?.rows?.map((row) => {
          const isSubCategory = row.subcategories?.length !== 1;

          return (
            <React.Fragment key={row.id}>
              {isSubCategory ? (
                <Link to={TOURIST_OBJECTS_CATEGORY(row.id)}>
                  <div className={styles.touristElem}>
                    <div
                      className={styles.image}
                      style={{ backgroundColor: row.backgroundColor }}
                    >
                      <img src={row.icon?.url} alt="icon" />
                    </div>
                    <div className={styles.info}>
                      <h5>{languageControl(row.title, row.titleEn)}</h5>
                      <p>
                        {languageControl(row.description, row.descriptionEn)}
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link to={TOURIST_OBJECTS_ID(row.subcategories?.[0].id)}>
                  <div className={styles.touristElem}>
                    <div
                      className={styles.image}
                      style={{ backgroundColor: row.backgroundColor }}
                    >
                      <img src={row.icon?.url} alt="icon" />
                    </div>
                    <div className={styles.info}>
                      <h5>{languageControl(row.title, row.titleEn)}</h5>
                    </div>
                  </div>
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TouristObjects;
