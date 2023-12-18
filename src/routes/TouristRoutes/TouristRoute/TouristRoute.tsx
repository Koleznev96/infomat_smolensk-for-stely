import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Loader, Tag, Title } from "src/components";
import { useAppDispatch, useLanguageControl } from "src/hooks";
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
  const languageControl = useLanguageControl();

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

  const setIdStop = (id: number) => {
    dispatch(updateCurrentIndexRoutePlacemark(id));
  };

  if (!response?.data?.id) {
    return <Loader />;
  }

  return (
    <div className={styles.touristRoute}>
      <Title
        text={languageControl(response.data.title, response.data.titleEn)}
        image={response.data.icon?.url}
        bgColor={response.data.backgroundColor}
      >
        <Tag
          icon={{ name: "geo", color: response.data.routeColor }}
          text={`${languageControl(
            "Протяжённость",
            "Length",
          )}: ${languageControl(response.data.length, response.data.lengthEn)}`}
          color={{
            bg: response.data.backgroundColor,
            text: response.data.routeColor,
          }}
        />
        <Tag
          icon={{
            name: "time",
            color: response.data.routeColor,
            size: "small",
          }}
          text={`${languageControl("Время", "Duration")}: ${languageControl(
            response.data.duration,
            response.data.durationEn,
          )}`}
          color={{
            bg: response.data.backgroundColor,
            text: response.data.routeColor,
          }}
        />
        <Tag
          icon={{ name: "route", color: response.data.routeColor }}
          text={`${languageControl(
            "Тип маршрута",
            "Route type",
          )}: ${languageControl(response.data.type, response.data.typeEn)}`}
          color={{
            bg: response.data.backgroundColor,
            text: response.data.routeColor,
          }}
        />
      </Title>
      <div className={styles.description}>
        <h5>{languageControl("Описание", "Description")}</h5>
        <p>
          {languageControl(
            response.data.description,
            response.data.descriptionEn,
          )}
        </p>
      </div>
      <div className={styles.touristObjects}>
        <h5>
          {languageControl("Объекты на маршруте", "Tourist objects on route")}
        </h5>
        {response.data.stops
          ?.filter(
            (stop) => !!stop?.place?.id && stop?.place?.status !== "DRAFT",
          )
          ?.map((stop, index) => (
            <Link
              key={index}
              onClick={() => setIdStop(stop?.place?.id || 0)}
              to={TOURIST_ROUTES_ID_VIEW(params.id, stop.place?.id)}
            >
              <div className={styles.object}>
                <div className={styles.image}>
                  <img src={stop.place?.cover?.url3x2Original} alt="" />
                  <div className={styles.number}>{index + 1}</div>
                </div>
                <div className={styles.info}>
                  <h6>
                    {languageControl(stop?.place?.title, stop?.place?.titleEn)}
                  </h6>
                  <p>
                    {languageControl(
                      stop?.place?.address?.address,
                      stop?.place?.address?.addressEn,
                    )}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TouristRoute;
