import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

import { Image } from "src/api/myApi";
import { useAppDispatch, useLanguageControl } from "src/hooks";
import { Button, ImageSlider, Modal, Tag } from "src/components";
import {
  useGetEventsIdQuery,
  useGetPlaceIdQuery,
  useGetRoutesIdQuery,
} from "src/api/main";
import {
  updatePlaceMarksAndCenter,
  updatePlaceMarksEvent,
  updateRoutesWithPlaceAndCenter,
} from "src/store/slices";

import styles from "./CardView.module.scss";

interface Contacts {
  phone?: string;
  website?: string;
  email?: string;
  workTime?: string;
}

interface CardViewProps {
  routeId?: string;
  placeId?: string;
  eventId?: string;
  title?: string;
  descriptionTitle?: string;
  descriptionParagraph?: string;
  images?: Image[];
  buttons?: {
    showOnMapLink?: boolean;
    showRoute?: boolean;
    QRCodeLink?: string;
  };
  contacts?: Contacts;
}

const CardView = ({
  routeId,
  placeId,
  eventId,
  title = "",
  descriptionParagraph = "",
  images = [],
  buttons = {},
  contacts,
}: CardViewProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const languageControl = useLanguageControl();
  const [showQRCode, setShowQRCode] = useState(false);

  const { data: place } = useGetPlaceIdQuery(placeId || "", {
    skip: !!eventId,
  });

  const { data: event } = useGetEventsIdQuery(eventId || "", {
    skip: !eventId,
  });

  const { data: route } = useGetRoutesIdQuery(routeId || "", {
    skip: !routeId,
  });

  useEffect(() => {
    if (route?.data?.id && routeId) {
      dispatch(
        updateRoutesWithPlaceAndCenter({
          routes: [route?.data],
          center: route?.data,
        }),
      );
      return;
    }

    if (place?.data?.id && placeId) {
      dispatch(
        updatePlaceMarksAndCenter({
          marks: [place?.data],
          center: place?.data,
        }),
      );
      return;
    }

    if (event?.data?.id && eventId) {
      dispatch(
        updatePlaceMarksEvent({
          marks: [event?.data],
          center: event?.data,
        }),
      );
      return;
    }
  }, [dispatch, place, route, event, placeId, routeId, eventId]);

  const handleClickShowOnMap = () => {
    console.log("show");
  };

  const handleClickShowRoute = () => {
    navigate(-1);
  };

  const handleClickShowQRCode = () => {
    setShowQRCode(true);
  };

  return (
    <div className={styles.cardView}>
      <ImageSlider images={images} />
      <Modal
        type="qrcode"
        visible={showQRCode}
        onClose={() => setShowQRCode(false)}
      >
        <QRCode
          level="Q"
          size={338}
          value={buttons?.QRCodeLink || "Not Found"}
        />
      </Modal>
      <div>
        <h4>{title}</h4>
        <div className={styles.tags}>
          {place?.data?.address?.address && (
            <Tag
              text={`${languageControl("Адрес", "Address")}:${languageControl(
                place?.data?.address?.address,
                place?.data?.address?.addressEn,
              )}`}
              icon={{
                name: "geo",
                color: place?.data?.subcategory?.category?.color,
              }}
              color={{
                bg: place?.data?.subcategory?.category?.backgroundColor,
                text: place?.data?.subcategory?.category?.color,
              }}
            />
          )}
          {place?.data?.workingHours && (
            <Tag
              text={`${languageControl(
                "Режим работы",
                "Working hours",
              )}: ${languageControl(
                place?.data?.workingHours,
                place?.data?.workingHoursEn,
              )}`}
              icon={{
                name: "time",
                color: place?.data?.subcategory?.category?.color,
                size: "small",
              }}
              color={{
                bg: place?.data?.subcategory?.category?.backgroundColor,
                text: place?.data?.subcategory?.category?.color,
              }}
            />
          )}
          {routeId && (
            <>
              <Tag
                text={`${languageControl(
                  "Маршрут",
                  "Route",
                )}: ${languageControl(
                  route?.data?.title,
                  route?.data?.titleEn,
                )}`}
                icon={{
                  name: "route",
                  color: route?.data?.routeColor,
                }}
                color={{
                  bg: route?.data?.backgroundColor,
                  text: route?.data?.routeColor,
                }}
              />
            </>
          )}
          {eventId && (
            <>
              <Tag
                text={`${languageControl("Дата", "Date")}: ${event?.data
                  ?.startDate}`}
                icon={{
                  name: "cal",
                  color: "#5624D3",
                  size: "small",
                }}
                color={{
                  bg: "#EDE9F9",
                  text: "#5624D3",
                }}
              />
              <Tag
                text={`${languageControl("Время", "Time")}: ${event?.data
                  ?.startTime}`}
                icon={{
                  name: "time",
                  color: "#5624D3",
                  size: "small",
                }}
                color={{
                  bg: "#EDE9F9",
                  text: "#5624D3",
                }}
              />
              <Tag
                text={`${languageControl("Адрес", "Address")}: ${event?.data
                  ?.address?.address}`}
                icon={{
                  name: "geo",
                  color: "#5624D3",
                }}
                color={{
                  bg: "#EDE9F9",
                  text: "#5624D3",
                }}
              />
            </>
          )}
        </div>
        <div className={styles.description}>
          <h5>{languageControl("Описание", "Description")}</h5>
          <p>{descriptionParagraph}</p>
        </div>
        {contacts?.workTime ||
        contacts?.phone ||
        contacts?.email ||
        contacts?.website ? (
          <div className={styles.contacts}>
            <h3>{languageControl("Контакты", "Contacts")}</h3>
            <div className={styles.contactsList}>
              {contacts.phone && (
                <div>
                  <h6>{languageControl("Телефон", "Phone")}</h6>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z"
                        stroke="#101828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {contacts?.phone}
                  </span>
                </div>
              )}
              {contacts.website && (
                <div>
                  <h6>{languageControl("Сайт", "Website")}</h6>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66699 10.0003H18.3337M1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337M1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337M18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699M10.0003 1.66699C12.0847 3.94895 13.2693 6.91035 13.3337 10.0003C13.2693 13.0903 12.0847 16.0517 10.0003 18.3337M10.0003 1.66699C7.91593 3.94895 6.73137 6.91035 6.66699 10.0003C6.73137 13.0903 7.91593 16.0517 10.0003 18.3337"
                        stroke="#101828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {contacts?.website}
                  </span>
                </div>
              )}
              {contacts.email && (
                <div>
                  <h6>{languageControl("Почта", "Email")}</h6>
                  <span>
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66699 3.83301L8.47109 8.59588C9.02207 8.98156 9.29756 9.1744 9.59721 9.2491C9.8619 9.31508 10.1387 9.31508 10.4034 9.2491C10.7031 9.1744 10.9786 8.98156 11.5296 8.59588L18.3337 3.83301M5.66699 14.6663H14.3337C15.7338 14.6663 16.4339 14.6663 16.9686 14.3939C17.439 14.1542 17.8215 13.7717 18.0612 13.3013C18.3337 12.7665 18.3337 12.0665 18.3337 10.6663V5.33301C18.3337 3.93288 18.3337 3.23281 18.0612 2.69803C17.8215 2.22763 17.439 1.84517 16.9686 1.60549C16.4339 1.33301 15.7338 1.33301 14.3337 1.33301H5.66699C4.26686 1.33301 3.5668 1.33301 3.03202 1.60549C2.56161 1.84517 2.17916 2.22763 1.93948 2.69803C1.66699 3.23281 1.66699 3.93288 1.66699 5.33301V10.6663C1.66699 12.0665 1.66699 12.7665 1.93948 13.3013C2.17916 13.7717 2.56161 14.1542 3.03202 14.3939C3.5668 14.6663 4.26686 14.6663 5.66699 14.6663Z"
                        stroke="#101828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {contacts?.email}
                  </span>
                </div>
              )}
              {contacts.workTime && (
                <div>
                  <h6>{languageControl("Режим работы", "Work hours")}</h6>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z"
                        stroke="#101828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {contacts?.workTime}
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={styles.buttons}>
          {buttons?.showOnMapLink && (
            <Button onClick={handleClickShowOnMap}>
              {languageControl("Показать на карте", "Show on map")}
            </Button>
          )}
          {buttons?.showRoute && (
            <Button onClick={handleClickShowRoute}>
              {languageControl("Посмотреть маршрут", "Show route")}
            </Button>
          )}
          {buttons?.QRCodeLink && (
            <Button onClick={handleClickShowQRCode}>
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 6.5H6.51M17.5 6.5H17.51M6.5 17.5H6.51M13 13H13.01M17.5 17.5H17.51M17 21H21V17M14 16.5V21M21 14H16.5M15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10ZM4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10ZM4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21Z"
                    stroke="#344054"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
              {languageControl(
                "«Мой Смоленск» об объекте",
                "«My Smolensk» about object",
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardView;
