import React from "react";

import { useFetch } from "src/hooks/useFetch";
import { Card, Title } from "src/components";
import { SUGGEST_VISIT_ID } from "src/conts/routes";
import { ApiPagePlaceShortOut } from "src/api/myApi";

import styles from "./SuggestVisit.module.scss";

const SuggestVisit = () => {
  const { response } = useFetch<ApiPagePlaceShortOut>(
    "places?recommendedOnly=true&status=PUBLISHED",
  );

  if (!response?.rows?.length) {
    return <></>;
  }

  return (
    <>
      <Title
        text="Рекомендуем"
        svg={
          <>
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9914 4.41977C11.4922 1.498 7.32468 0.712053 4.19337 3.38752C1.06205 6.06298 0.62121 10.5362 3.08025 13.7005C5.12477 16.3314 11.3122 21.8801 13.3401 23.676C13.567 23.877 13.6804 23.9774 13.8128 24.0169C13.9283 24.0514 14.0546 24.0514 14.1701 24.0169C14.3024 23.9774 14.4159 23.877 14.6428 23.676C16.6707 21.8801 22.8581 16.3314 24.9026 13.7005C27.3617 10.5362 26.9746 6.03484 23.7895 3.38752C20.6044 0.740196 16.4906 1.498 13.9914 4.41977Z"
                stroke="#C63927"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        }
      />
      <div className={styles.cards}>
        {response?.rows?.map((row) => (
          <Card
            key={row.id}
            title={row.title}
            cover={row.cover}
            paragraph={row.description}
            href={SUGGEST_VISIT_ID(row.id)}
          />
        ))}
      </div>
    </>
  );
};

export default SuggestVisit;
