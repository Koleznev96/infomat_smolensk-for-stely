import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Tag, Title } from "src/components";
import { useAppDispatch } from "src/hooks";
import { useGetRoutesQuery } from "src/api/main";
import { TOURIST_ROUTES_ID } from "src/conts/routes";
import { updateRoutesAndCenter } from "src/store/slices";

import styles from "./TouristRoutes.module.scss";

const TouristRoutes = () => {
  const dispatch = useAppDispatch();

  const { data: response } = useGetRoutesQuery(undefined);
  const { data: routes } = useGetRoutesQuery(undefined);

  useEffect(() => {
    if (!routes?.rows?.length) {
      return;
    }

    dispatch(
      updateRoutesAndCenter({
        routes: routes?.rows,
        center: routes?.rows[0],
      }),
    );
  }, [dispatch, routes]);

  if (!response?.rows?.length) {
    return <></>;
  }

  return (
    <div className={styles.touristRoutes}>
      <Title
        text="Туристические маршруты"
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
                d="M13.375 5.25H13.918C17.7271 5.25 19.6316 5.25 20.3545 5.93411C20.9795 6.52546 21.2564 7.3966 21.0877 8.24026C20.8925 9.21627 19.3376 10.3161 16.2279 12.5157L11.1471 16.1093C8.03738 18.3089 6.48248 19.4087 6.28729 20.3847C6.11857 21.2284 6.39552 22.0995 7.02045 22.6909C7.74342 23.375 9.64795 23.375 13.457 23.375H14.625M9 5.25C9 7.32107 7.32107 9 5.25 9C3.17893 9 1.5 7.32107 1.5 5.25C1.5 3.17893 3.17893 1.5 5.25 1.5C7.32107 1.5 9 3.17893 9 5.25ZM26.5 22.75C26.5 24.8211 24.8211 26.5 22.75 26.5C20.6789 26.5 19 24.8211 19 22.75C19 20.6789 20.6789 19 22.75 19C24.8211 19 26.5 20.6789 26.5 22.75Z"
                stroke="#C63927"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        }
      />
      {response.rows.map((row) => (
        <Link to={TOURIST_ROUTES_ID(row.id)} key={row.id}>
          <div className={styles.route}>
            <div
              className={styles.image}
              style={{ backgroundColor: row.backgroundColor }}
            >
              <img src={row.icon?.url} alt="" />
            </div>
            <div className={styles.info}>
              <h5>{row.title}</h5>
              <div className={styles.tags}>
                <Tag
                  text={row.length}
                  color={{ bg: row.backgroundColor, text: row.routeColor }}
                />
                <Tag
                  text={row.duration}
                  color={{ bg: row.backgroundColor, text: row.routeColor }}
                />
                <Tag
                  text={row.type}
                  color={{ bg: row.backgroundColor, text: row.routeColor }}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TouristRoutes;
