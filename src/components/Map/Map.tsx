import React, { useEffect, useState } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);

  const { map } = useAppSelector((state) => state.main);

  useEffect(() => {
    ymaps?.ready(() => {
      setIsLoaded(true);
    });
  }, [ymaps]);

  const placeMarkContent = (url?: string, text?: string, bg?: string) => {
    return `
        <span class="place-mark-content-react-smolensk">
            <div style="background-color: ${bg}">
              <img src="${url}" alt="${text}">
            </div>
            <p>${text}</p>
        </span>
      `;
  };

  const placeMarkEventContent = (text: string) => {
    return `
        <span class="place-mark-event-content-react-smolensk">
            <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1_2213_1512" fill="white">
                  <rect x="2" y="2.89453" width="16" height="16.1055" rx="1"/>
                  </mask>
                  <rect x="2" y="2.89453" width="16" height="16.1055" rx="1" stroke="#5624D3" stroke-width="3" mask="url(#path-1-inside-1_2213_1512)"/>
                  <path d="M6.03125 4.78952V1" stroke="#5624D3" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M14.0889 4.78952V1" stroke="#5624D3" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M9.61884 6.92033C9.74142 6.55785 10.2541 6.55785 10.3767 6.92033L11.068 8.96472C11.123 9.12721 11.2754 9.23658 11.4469 9.23658H13.6491C14.0404 9.23658 14.1989 9.74055 13.878 9.96457L12.1243 11.1888C11.9785 11.2906 11.9174 11.4765 11.9744 11.6449L12.6507 13.6448C12.7743 14.0106 12.3593 14.3219 12.0428 14.101L10.2267 12.8332C10.0892 12.7372 9.90634 12.7372 9.7688 12.8332L7.95275 14.101C7.63618 14.3219 7.22118 14.0106 7.34486 13.6448L8.02115 11.6449C8.07812 11.4765 8.01702 11.2906 7.87119 11.1888L6.11747 9.96457C5.79658 9.74055 5.95509 9.23658 6.34644 9.23658H8.54858C8.72012 9.23658 8.87255 9.12721 8.9275 8.96472L9.61884 6.92033Z" fill="#5624D3"/>
                </svg>
            </div>
            <p>${text}</p>
        </span>
      `;
  };

  const routeContent = (number: number, color: string, bg?: string) => {
    return `
        <p style="color: ${color}; background-color: ${bg}" class="route-content-react-smolensk">
            ${number}
        </p>
      `;
  };

  if (!isLoaded) return <></>;

  return (
    <div id="map" className={styles.mapContainer}>
      <MapY
        style={{ width: "100%", height: "100%", position: "relative" }}
        defaultState={{
          center: map.center || [54.782635, 32.045287],
          zoom: 9,
        }}
        options={{ minZoom: 15 }}
        instanceRef={(mapObj) =>
          mapObj?.panTo(map.center || [54.782635, 32.045287])
        }
      >
        <GeolocationControl options={{ position: { right: 10, top: 570 } }} />
        <ZoomControl options={{ position: { right: 10, top: 350 } }} />
        {map.type === "place-mark" && (
          <React.Fragment>
            {map.placeMarksType.map((cor, index) => (
              <Placemark
                key={index}
                geometry={cor.cords}
                options={{
                  iconLayout: ymaps?.templateLayoutFactory?.createClass(
                    placeMarkContent(cor.url, cor.text, cor.backgroundColor),
                  ),
                }}
              />
            ))}
          </React.Fragment>
        )}
        {map.type === "placemark-event" && (
          <React.Fragment>
            {map.placeMarksEvent.map((cor, index) => (
              <Placemark
                key={index}
                geometry={cor.cords}
                options={{
                  iconLayout: ymaps?.templateLayoutFactory?.createClass(
                    placeMarkEventContent(cor.text),
                  ),
                }}
              />
            ))}
          </React.Fragment>
        )}
        {map.type === "route" && (
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
                {route.cords.map((cord, index) => (
                  <Placemark
                    key={index}
                    geometry={cord}
                    options={{
                      iconLayout: ymaps?.templateLayoutFactory?.createClass(
                        routeContent(index + 1, route.lineColor),
                      ),
                    }}
                  />
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
        {map.type === "route-placemark" && (
          <React.Fragment>
            {map.routeWithPlacemark.map((route, index) => (
              <React.Fragment key={index}>
                <Polyline
                  geometry={route.cords}
                  options={{
                    strokeColor: route.lineColor,
                    strokeWidth: 2,
                  }}
                />
                {route.cords.map((cord, index) => (
                  <Placemark
                    key={index}
                    geometry={cord}
                    options={{
                      iconLayout: ymaps?.templateLayoutFactory?.createClass(
                        map.currentPlacemarkIndex === index
                          ? routeContent(index + 1, route.lineColor, "#ffff00")
                          : routeContent(index + 1, route.lineColor),
                      ),
                    }}
                  />
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
      </MapY>
    </div>
  );
};

export default Map;
