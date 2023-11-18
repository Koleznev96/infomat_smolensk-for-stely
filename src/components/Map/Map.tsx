import React from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import { Map as YMap } from "@pbe/react-yandex-maps";

import styles from "./Map.module.scss";

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <YMaps>
        <YMap
          className={styles.map}
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        />
      </YMaps>
    </div>
  );
};

export default Map;
