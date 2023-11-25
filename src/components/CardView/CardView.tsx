import React from "react";

import { Image } from "src/api/myApi";
import { Button, ImageSlider, Tag } from "src/components";

import styles from "./CardView.module.scss";

interface Contacts {
  phone?: string;
  website?: string;
  email?: string;
  workTime?: string;
}

interface CardViewProps {
  title?: string;
  tags?: string[];
  descriptionTitle?: string;
  descriptionParagraph?: string;
  images?: Image[];
  buttons?: string[];
  contacts?: Contacts;
}

const CardView = ({
  title = "",
  tags = [],
  descriptionTitle = "",
  descriptionParagraph = "",
  images = [],
  buttons = [],
  contacts,
}: CardViewProps) => (
  <>
    <ImageSlider images={images} />
    <div className={styles.cardView}>
      <h4>{title}</h4>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <div className={styles.description}>
        <h5>{descriptionTitle}</h5>
        <p>{descriptionParagraph}</p>
      </div>
      {contacts ? (
        <div className={styles.contacts}>
          <h3>Контакты</h3>
          <div className={styles.contactsList}>
            <div>
              <h6>Телефон</h6>
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
            <div>
              <h6>Сайт</h6>
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
            <div>
              <h6>Почта</h6>
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
            <div>
              <h6>Режим работы</h6>
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
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={styles.buttons}>
        {buttons.map((button) => (
          <Button key={button}>{button}</Button>
        ))}
      </div>
    </div>
  </>
);

export default CardView;
