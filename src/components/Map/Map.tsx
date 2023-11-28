import React from "react";
import {
  Map as MapY,
  Polyline,
  ZoomControl,
  GeolocationControl,
  Placemark,
  useYMaps,
} from "@pbe/react-yandex-maps";

import { useAppSelector } from "src/hooks";

import styles from "./Map.module.scss";

const Map = () => {
  const ymaps = useYMaps(["templateLayoutFactory"]);

  const { map } = useAppSelector((state) => state.main);

  const content = (url?: string, text?: string, bg?: string) => {
    return `
        <span class="person-react-icon-api">
            <div style="background-color: ${bg}">
              <img src="${url}" alt="${text}">
            </div>
            <p>${text}</p>
        </span>
      `;
  };

  return (
    <div className={styles.mapContainer}>
      <MapY
        style={{ width: "100%", height: "100%", position: "relative" }}
        defaultState={{
          center: map.center || [54.782635, 32.045287],
          zoom: 9,
        }}
      >
        <GeolocationControl options={{ position: { right: 10, top: 570 } }} />
        <ZoomControl options={{ position: { right: 10, top: 350 } }} />
        {map.type === "route" ? (
          <React.Fragment>
            {map.routes.map((route, index) => (
              <React.Fragment key={index}>
                <Polyline
                  geometry={route.cords}
                  options={{
                    strokeColor: route.lineColor,
                    strokeWidth: 2,
                  }}
                />
                <Placemark geometry={route.cords} />
              </React.Fragment>
            ))}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {map.placeMarksType.map((cor, index) => (
              <Placemark
                key={index}
                geometry={cor.cords}
                options={{
                  iconLayout: ymaps?.templateLayoutFactory?.createClass(
                    content(cor.url, cor.text, cor.backgroundColor),
                  ),
                }}
              />
            ))}
          </React.Fragment>
        )}
      </MapY>
    </div>
  );
};

export default Map;
