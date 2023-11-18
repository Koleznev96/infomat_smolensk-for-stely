import React from "react";
import { Link, useParams } from "react-router-dom";

import img from "./Image.png";

import { Tag, Title } from "src/components";

import { Params } from "src/types";

import { TOURIST_ROUTES_ID_VIEW } from "src/conts/routes";

import styles from "./TouristRoute.module.scss";

const TouristRoute = () => {
  const { id } = useParams<Params>();

  return (
    <div className={styles.touristRoute}>
      <Title text="Православные святыни и храмы 12 века">
        <Tag text="Протяженность: 5 км" />
        <Tag text="Время: 2-2,5 часа" />
        <Tag text="Тип маршрута: Автомобильный" />
      </Title>
      <div className={styles.description}>
        <h5>Описание</h5>
        <p>
          «Мегаполис» – это безупречно стильные интерьеры, инновационные
          технологии, лаконичные архитектурные решения, подчёркивающие гармонию
          формы и содержания. Месторасположение отеля уникально: он находится в
          самом центре города, на границе двух административных районов, в
          официально-деловой части Смоленска, которую отличают развитая
          инфраструктура и высокая транспортная доступность. В непосредственной
          близости от гранд-отеля расположены здания органов власти ведущие
          учреждения
        </p>
      </div>
      <div className={styles.touristObjects}>
        <h5>Объекты на маршруте</h5>
        <Link to={TOURIST_ROUTES_ID_VIEW(id as string, 1)}>
          <div className={styles.object}>
            <div className={styles.image}>
              <img src={img} alt="" />
              <div className={styles.number}>1</div>
            </div>
            <div className={styles.info}>
              <h6>Церковь святых апостолов Петра и Павла (12 век)</h6>
              <p>ул. Дзержинского, 6</p>
            </div>
          </div>
        </Link>
        <Link to={TOURIST_ROUTES_ID_VIEW(id as string, 2)}>
          <div className={styles.object}>
            <div className={styles.image}>
              <img src={img} alt="" />
              <div className={styles.number}>1</div>
            </div>
            <div className={styles.info}>
              <h6>Церковь святых апостолов Петра и Павла (12 век)</h6>
              <p>ул. Дзержинского, 6</p>
            </div>
          </div>
        </Link>
        <Link to={TOURIST_ROUTES_ID_VIEW(id as string, 3)}>
          <div className={styles.object}>
            <div className={styles.image}>
              <img src={img} alt="" />
              <div className={styles.number}>1</div>
            </div>
            <div className={styles.info}>
              <h6>Церковь святых апостолов Петра и Павла (12 век)</h6>
              <p>ул. Дзержинского, 6</p>
            </div>
          </div>
        </Link>
        <Link to={TOURIST_ROUTES_ID_VIEW(id as string, 4)}>
          <div className={styles.object}>
            <div className={styles.image}>
              <img src={img} alt="" />
              <div className={styles.number}>1</div>
            </div>
            <div className={styles.info}>
              <h6>Церковь святых апостолов Петра и Павла (12 век)</h6>
              <p>ул. Дзержинского, 6</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TouristRoute;
