import React, { useEffect, useRef } from "react";

import styles from "./Map.module.scss";

// @ts-ignore
const ymaps: any = window.ymaps;

const Map = () => {
  const refMap = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    ymaps.ready(() => {
      const myMap = new ymaps.Map(refMap.current, {
        center: [55.751574, 37.573856],
        zoom: 10,
        controls: [],
      });

      const multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
          [55.73447, 37.58],
          [55.734336, 37.51218],
          [55.724102, 37.19912],
        ],
        params: {
          routingMode: "pedestrian",
        },
      });

      myMap.geoObjects.add(multiRoute);
    });
  }, []);

  return (
    <div className={styles.mapContainer}>
      <div ref={refMap} className={styles.map}></div>
    </div>
  );
};

export default Map;
