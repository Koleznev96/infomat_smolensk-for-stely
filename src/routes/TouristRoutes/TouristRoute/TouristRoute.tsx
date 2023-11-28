import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Tag, Title } from "src/components";
import { useAppDispatch } from "src/hooks";
import { useGetRoutesIdQuery } from "src/api/main";
import {
  updateCurrentIndexRoutePlacemark,
  updateRoutesAndCenter,
} from "src/store/slices";
import { TOURIST_ROUTES_ID_VIEW } from "src/conts/routes";

import styles from "./TouristRoute.module.scss";

const TouristRoute = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { data: response } = useGetRoutesIdQuery(params.id || "");

  useEffect(() => {
    if (!response?.data?.id) {
      return;
    }

    dispatch(
      updateRoutesAndCenter({
        routes: [response?.data],
        center: response?.data,
      }),
    );
  }, [dispatch, response]);

  const setIndexStop = (index: number) => {
    dispatch(updateCurrentIndexRoutePlacemark(index));
  };

  if (!response?.data?.id) {
    return <></>;
  }

  return (
    <div className={styles.touristRoute}>
      <Title
        text={response.data.title}
        image={response.data.icon?.url}
        bgColor={response.data.backgroundColor}
      >
        <Tag
          icon={{ name: "geo", color: response.data.routeColor }}
          text={`Протяженность: ${response.data.length}`}
          color={{
            bg: response.data.backgroundColor,
            text: response.data.routeColor,
          }}
        />
        <Tag
          icon={{ name: "time", color: response.data.routeColor }}
          text={`Время: ${response.data.duration}`}
          color={{
            bg: response.data.backgroundColor,
            text: response.data.routeColor,
          }}
        />
        <Tag
          icon={{ name: "route", color: response.data.routeColor }}
          text={`Тип маршрута: ${response.data.type}`}
          color={{
            bg: response.data.backgroundColor,
            text: response.data.routeColor,
          }}
        />
      </Title>
      <div className={styles.description}>
        <h5>Описание</h5>
        <p>{response.data.description}</p>
      </div>
      <div className={styles.touristObjects}>
        <h5>Объекты на маршруте</h5>
        {response.data.stops?.map((stop, index) => (
          <Link
            onClick={() => setIndexStop(index)}
            to={TOURIST_ROUTES_ID_VIEW(params.id, stop.place?.id)}
            key={stop.id}
          >
            <div className={styles.object}>
              <div className={styles.image}>
                <img src={stop.place?.cover?.url} alt="" />
                <div className={styles.number}>{index + 1}</div>
              </div>
              <div className={styles.info}>
                <h6>{stop.place?.title}</h6>
                <p>{stop.place?.address?.address}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TouristRoute;
