import React from "react";
import { Link } from "react-router-dom";

import { Title } from "src/components";

import styles from "./TouristObjects.module.scss";

const TouristObjects = () => {
  return (
    <div className={styles.touristsList}>
      <Title text="Туристские объекты на карте города" />
      <Link to="#">
        <div className={styles.touristElem}>
          <div className={styles.image}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0208 4.78139C15.007 4.78023 14.993 4.78023 14.9792 4.78139C14.9763 4.78178 14.9678 4.78309 14.95 4.78656C14.915 4.7934 14.8688 4.80358 14.7831 4.82263L5.53307 6.87818C5.23947 6.94343 5.07175 6.98134 4.94924 7.01816C4.88751 7.03671 4.85852 7.0491 4.84858 7.05382C4.81605 7.07858 4.79009 7.11094 4.77297 7.14807C4.77053 7.1588 4.76472 7.18978 4.76 7.25408C4.75063 7.38165 4.75 7.55361 4.75 7.85437V9.25002C4.75 9.61656 4.75078 9.83132 4.76371 9.98959C4.77026 10.0697 4.77837 10.1084 4.78183 10.1221C4.80437 10.1624 4.83764 10.1957 4.87794 10.2182C4.89161 10.2217 4.93037 10.2298 5.01044 10.2363C5.16871 10.2492 5.38347 10.25 5.75 10.25H24.25C24.6165 10.25 24.8313 10.2492 24.9896 10.2363C25.0696 10.2298 25.1084 10.2217 25.1221 10.2182C25.1624 10.1957 25.1956 10.1624 25.2182 10.1221C25.2216 10.1084 25.2298 10.0697 25.2363 9.98959C25.2492 9.83132 25.25 9.61656 25.25 9.25003V7.85437C25.25 7.55361 25.2494 7.38165 25.24 7.25408C25.2353 7.18979 25.2295 7.1588 25.227 7.14808C25.2099 7.11094 25.184 7.07858 25.1514 7.05382C25.1415 7.0491 25.1125 7.03671 25.0508 7.01816C24.9283 6.98134 24.7605 6.94343 24.4669 6.87818L15.2169 4.82263C15.1312 4.80358 15.0851 4.7934 15.05 4.78656C15.0322 4.78309 15.0237 4.78178 15.0208 4.78139ZM25.1556 7.05594C25.1556 7.05595 25.1551 7.05568 25.1541 7.05513L25.1556 7.05594ZM25.2259 7.14354C25.2259 7.1435 25.2261 7.14405 25.2264 7.14528L25.2259 7.14354ZM25.2165 10.1281C25.2165 10.1281 25.2166 10.1276 25.2169 10.1267L25.2165 10.1281ZM24.75 12.2474C24.8939 12.2448 25.029 12.2398 25.1524 12.2297C25.4227 12.2076 25.7233 12.1567 26.0215 12.0048C26.4448 11.7891 26.7891 11.4449 27.0048 11.0215C27.1567 10.7233 27.2076 10.4227 27.2297 10.1525C27.2501 9.90274 27.25 9.60484 27.25 9.28435V7.82487C27.25 7.56406 27.25 7.31739 27.2346 7.10758C27.2177 6.87729 27.1789 6.62452 27.0674 6.36488C26.9064 5.98987 26.6464 5.66573 26.3152 5.42716C26.0859 5.26199 25.8476 5.16928 25.6265 5.10281C25.425 5.04225 25.1842 4.98876 24.9296 4.9322L15.6508 2.87025C15.6402 2.8679 15.6295 2.86551 15.6187 2.8631C15.4895 2.83424 15.3462 2.80225 15.1966 2.78912C15.0658 2.77765 14.9342 2.77765 14.8035 2.78912C14.6538 2.80225 14.5105 2.83424 14.3813 2.8631C14.3705 2.86551 14.3598 2.8679 14.3492 2.87025L5.09921 4.92581C5.0896 4.92794 5.08 4.93008 5.07042 4.9322C4.81581 4.98876 4.57501 5.04225 4.37354 5.10281C4.1524 5.16928 3.91407 5.26199 3.6848 5.42716C3.35366 5.66573 3.09364 5.98987 2.93259 6.36488C2.82109 6.62452 2.78228 6.87729 2.76537 7.10758C2.74996 7.31739 2.74998 7.56406 2.75 7.82487C2.75 7.83468 2.75 7.84452 2.75 7.85437L2.75 9.28433C2.74998 9.60482 2.74995 9.90273 2.77035 10.1525C2.79244 10.4227 2.84332 10.7233 2.99524 11.0215C3.21095 11.4449 3.55516 11.7891 3.97852 12.0048C4.27669 12.1567 4.57729 12.2076 4.84757 12.2297C4.97098 12.2398 5.10615 12.2448 5.25 12.2474V20.2526C5.10615 20.2552 4.97098 20.2603 4.84757 20.2704C4.57729 20.2925 4.27669 20.3433 3.97853 20.4953C3.55516 20.711 3.21095 21.0552 2.99524 21.4785C2.84332 21.7767 2.79244 22.0773 2.77036 22.3476C2.74995 22.5973 2.74998 22.8952 2.75 23.2157L2.75 24.2843C2.74998 24.6048 2.74995 24.9027 2.77035 25.1525C2.79244 25.4227 2.84332 25.7233 2.99524 26.0215C3.21095 26.4449 3.55516 26.7891 3.97852 27.0048C4.27669 27.1567 4.57729 27.2076 4.84757 27.2297C5.09729 27.2501 5.39519 27.25 5.71567 27.25L24.2843 27.25C24.6048 27.2501 24.9027 27.2501 25.1524 27.2297C25.4227 27.2076 25.7233 27.1567 26.0215 27.0048C26.4449 26.7891 26.7891 26.4449 27.0048 26.0215C27.1567 25.7233 27.2076 25.4227 27.2297 25.1525C27.2501 24.9027 27.25 24.6048 27.25 24.2844V23.2157C27.25 22.8952 27.2501 22.5973 27.2297 22.3476C27.2076 22.0773 27.1567 21.7767 27.0048 21.4785C26.7891 21.0552 26.4448 20.711 26.0215 20.4953C25.7233 20.3433 25.4227 20.2925 25.1524 20.2704C25.029 20.2603 24.8939 20.2552 24.75 20.2526V12.2474ZM22.75 12.25H19.125V20.25H22.75V12.25ZM5.75 22.25C5.38347 22.25 5.16871 22.2508 5.01044 22.2637C4.93037 22.2703 4.89161 22.2784 4.87794 22.2818C4.83764 22.3044 4.80437 22.3377 4.78183 22.378C4.77837 22.3916 4.77026 22.4304 4.76371 22.5105C4.75078 22.6687 4.75 22.8835 4.75 23.25V24.25C4.75 24.6166 4.75078 24.8313 4.76371 24.9896C4.77026 25.0697 4.77837 25.1084 4.78183 25.1221C4.80437 25.1624 4.83764 25.1957 4.87794 25.2182C4.89161 25.2217 4.93037 25.2298 5.01044 25.2363C5.16871 25.2492 5.38347 25.25 5.75 25.25H24.25C24.6165 25.25 24.8313 25.2492 24.9896 25.2363C25.0696 25.2298 25.1084 25.2217 25.1221 25.2182C25.1624 25.1957 25.1956 25.1624 25.2182 25.1221C25.2216 25.1084 25.2298 25.0697 25.2363 24.9896C25.2492 24.8313 25.25 24.6166 25.25 24.25V23.25C25.25 22.8835 25.2492 22.6687 25.2363 22.5105C25.2298 22.4304 25.2216 22.3916 25.2182 22.378C25.1956 22.3377 25.1624 22.3044 25.1221 22.2818C25.1084 22.2784 25.0696 22.2703 24.9896 22.2637C24.8313 22.2508 24.6165 22.25 24.25 22.25H5.75ZM25.128 22.2835C25.128 22.2835 25.1276 22.2834 25.1267 22.2831L25.128 22.2835ZM4.87197 25.2165C4.87199 25.2165 4.87245 25.2166 4.87329 25.2169L4.87197 25.2165ZM4.78352 22.372C4.78353 22.372 4.78339 22.3725 4.78309 22.3733L4.78352 22.372ZM7.25 20.25H10.875V12.25H7.25V20.25ZM12.875 12.25V20.25H17.125V12.25H12.875ZM4.87197 10.2165C4.87199 10.2165 4.87245 10.2166 4.87329 10.2169L4.87197 10.2165ZM4.77414 7.14354C4.77415 7.14356 4.77399 7.14416 4.77365 7.14525L4.77414 7.14354ZM4.8444 7.05594C4.84437 7.05594 4.84487 7.05565 4.846 7.05508L4.8444 7.05594Z"
                fill="#AE4408"
              />
            </svg>
          </div>
          <div className={styles.info}>
            <h5>Достопримечательности</h5>
            <p>Памятники, парки / скверы, храмы, церкви, архитектура</p>
          </div>
        </div>
      </Link>
      <Link to="#">
        <div className={styles.touristElem}>
          <div className={styles.image}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0208 4.78139C15.007 4.78023 14.993 4.78023 14.9792 4.78139C14.9763 4.78178 14.9678 4.78309 14.95 4.78656C14.915 4.7934 14.8688 4.80358 14.7831 4.82263L5.53307 6.87818C5.23947 6.94343 5.07175 6.98134 4.94924 7.01816C4.88751 7.03671 4.85852 7.0491 4.84858 7.05382C4.81605 7.07858 4.79009 7.11094 4.77297 7.14807C4.77053 7.1588 4.76472 7.18978 4.76 7.25408C4.75063 7.38165 4.75 7.55361 4.75 7.85437V9.25002C4.75 9.61656 4.75078 9.83132 4.76371 9.98959C4.77026 10.0697 4.77837 10.1084 4.78183 10.1221C4.80437 10.1624 4.83764 10.1957 4.87794 10.2182C4.89161 10.2217 4.93037 10.2298 5.01044 10.2363C5.16871 10.2492 5.38347 10.25 5.75 10.25H24.25C24.6165 10.25 24.8313 10.2492 24.9896 10.2363C25.0696 10.2298 25.1084 10.2217 25.1221 10.2182C25.1624 10.1957 25.1956 10.1624 25.2182 10.1221C25.2216 10.1084 25.2298 10.0697 25.2363 9.98959C25.2492 9.83132 25.25 9.61656 25.25 9.25003V7.85437C25.25 7.55361 25.2494 7.38165 25.24 7.25408C25.2353 7.18979 25.2295 7.1588 25.227 7.14808C25.2099 7.11094 25.184 7.07858 25.1514 7.05382C25.1415 7.0491 25.1125 7.03671 25.0508 7.01816C24.9283 6.98134 24.7605 6.94343 24.4669 6.87818L15.2169 4.82263C15.1312 4.80358 15.0851 4.7934 15.05 4.78656C15.0322 4.78309 15.0237 4.78178 15.0208 4.78139ZM25.1556 7.05594C25.1556 7.05595 25.1551 7.05568 25.1541 7.05513L25.1556 7.05594ZM25.2259 7.14354C25.2259 7.1435 25.2261 7.14405 25.2264 7.14528L25.2259 7.14354ZM25.2165 10.1281C25.2165 10.1281 25.2166 10.1276 25.2169 10.1267L25.2165 10.1281ZM24.75 12.2474C24.8939 12.2448 25.029 12.2398 25.1524 12.2297C25.4227 12.2076 25.7233 12.1567 26.0215 12.0048C26.4448 11.7891 26.7891 11.4449 27.0048 11.0215C27.1567 10.7233 27.2076 10.4227 27.2297 10.1525C27.2501 9.90274 27.25 9.60484 27.25 9.28435V7.82487C27.25 7.56406 27.25 7.31739 27.2346 7.10758C27.2177 6.87729 27.1789 6.62452 27.0674 6.36488C26.9064 5.98987 26.6464 5.66573 26.3152 5.42716C26.0859 5.26199 25.8476 5.16928 25.6265 5.10281C25.425 5.04225 25.1842 4.98876 24.9296 4.9322L15.6508 2.87025C15.6402 2.8679 15.6295 2.86551 15.6187 2.8631C15.4895 2.83424 15.3462 2.80225 15.1966 2.78912C15.0658 2.77765 14.9342 2.77765 14.8035 2.78912C14.6538 2.80225 14.5105 2.83424 14.3813 2.8631C14.3705 2.86551 14.3598 2.8679 14.3492 2.87025L5.09921 4.92581C5.0896 4.92794 5.08 4.93008 5.07042 4.9322C4.81581 4.98876 4.57501 5.04225 4.37354 5.10281C4.1524 5.16928 3.91407 5.26199 3.6848 5.42716C3.35366 5.66573 3.09364 5.98987 2.93259 6.36488C2.82109 6.62452 2.78228 6.87729 2.76537 7.10758C2.74996 7.31739 2.74998 7.56406 2.75 7.82487C2.75 7.83468 2.75 7.84452 2.75 7.85437L2.75 9.28433C2.74998 9.60482 2.74995 9.90273 2.77035 10.1525C2.79244 10.4227 2.84332 10.7233 2.99524 11.0215C3.21095 11.4449 3.55516 11.7891 3.97852 12.0048C4.27669 12.1567 4.57729 12.2076 4.84757 12.2297C4.97098 12.2398 5.10615 12.2448 5.25 12.2474V20.2526C5.10615 20.2552 4.97098 20.2603 4.84757 20.2704C4.57729 20.2925 4.27669 20.3433 3.97853 20.4953C3.55516 20.711 3.21095 21.0552 2.99524 21.4785C2.84332 21.7767 2.79244 22.0773 2.77036 22.3476C2.74995 22.5973 2.74998 22.8952 2.75 23.2157L2.75 24.2843C2.74998 24.6048 2.74995 24.9027 2.77035 25.1525C2.79244 25.4227 2.84332 25.7233 2.99524 26.0215C3.21095 26.4449 3.55516 26.7891 3.97852 27.0048C4.27669 27.1567 4.57729 27.2076 4.84757 27.2297C5.09729 27.2501 5.39519 27.25 5.71567 27.25L24.2843 27.25C24.6048 27.2501 24.9027 27.2501 25.1524 27.2297C25.4227 27.2076 25.7233 27.1567 26.0215 27.0048C26.4449 26.7891 26.7891 26.4449 27.0048 26.0215C27.1567 25.7233 27.2076 25.4227 27.2297 25.1525C27.2501 24.9027 27.25 24.6048 27.25 24.2844V23.2157C27.25 22.8952 27.2501 22.5973 27.2297 22.3476C27.2076 22.0773 27.1567 21.7767 27.0048 21.4785C26.7891 21.0552 26.4448 20.711 26.0215 20.4953C25.7233 20.3433 25.4227 20.2925 25.1524 20.2704C25.029 20.2603 24.8939 20.2552 24.75 20.2526V12.2474ZM22.75 12.25H19.125V20.25H22.75V12.25ZM5.75 22.25C5.38347 22.25 5.16871 22.2508 5.01044 22.2637C4.93037 22.2703 4.89161 22.2784 4.87794 22.2818C4.83764 22.3044 4.80437 22.3377 4.78183 22.378C4.77837 22.3916 4.77026 22.4304 4.76371 22.5105C4.75078 22.6687 4.75 22.8835 4.75 23.25V24.25C4.75 24.6166 4.75078 24.8313 4.76371 24.9896C4.77026 25.0697 4.77837 25.1084 4.78183 25.1221C4.80437 25.1624 4.83764 25.1957 4.87794 25.2182C4.89161 25.2217 4.93037 25.2298 5.01044 25.2363C5.16871 25.2492 5.38347 25.25 5.75 25.25H24.25C24.6165 25.25 24.8313 25.2492 24.9896 25.2363C25.0696 25.2298 25.1084 25.2217 25.1221 25.2182C25.1624 25.1957 25.1956 25.1624 25.2182 25.1221C25.2216 25.1084 25.2298 25.0697 25.2363 24.9896C25.2492 24.8313 25.25 24.6166 25.25 24.25V23.25C25.25 22.8835 25.2492 22.6687 25.2363 22.5105C25.2298 22.4304 25.2216 22.3916 25.2182 22.378C25.1956 22.3377 25.1624 22.3044 25.1221 22.2818C25.1084 22.2784 25.0696 22.2703 24.9896 22.2637C24.8313 22.2508 24.6165 22.25 24.25 22.25H5.75ZM25.128 22.2835C25.128 22.2835 25.1276 22.2834 25.1267 22.2831L25.128 22.2835ZM4.87197 25.2165C4.87199 25.2165 4.87245 25.2166 4.87329 25.2169L4.87197 25.2165ZM4.78352 22.372C4.78353 22.372 4.78339 22.3725 4.78309 22.3733L4.78352 22.372ZM7.25 20.25H10.875V12.25H7.25V20.25ZM12.875 12.25V20.25H17.125V12.25H12.875ZM4.87197 10.2165C4.87199 10.2165 4.87245 10.2166 4.87329 10.2169L4.87197 10.2165ZM4.77414 7.14354C4.77415 7.14356 4.77399 7.14416 4.77365 7.14525L4.77414 7.14354ZM4.8444 7.05594C4.84437 7.05594 4.84487 7.05565 4.846 7.05508L4.8444 7.05594Z"
                fill="#AE4408"
              />
            </svg>
          </div>
          <div className={styles.info}>
            <h5>Достопримечательности</h5>
            <p>Памятники, парки / скверы, храмы, церкви, архитектура</p>
          </div>
        </div>
      </Link>
      <Link to="#">
        <div className={styles.touristElem}>
          <div className={styles.image}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0208 4.78139C15.007 4.78023 14.993 4.78023 14.9792 4.78139C14.9763 4.78178 14.9678 4.78309 14.95 4.78656C14.915 4.7934 14.8688 4.80358 14.7831 4.82263L5.53307 6.87818C5.23947 6.94343 5.07175 6.98134 4.94924 7.01816C4.88751 7.03671 4.85852 7.0491 4.84858 7.05382C4.81605 7.07858 4.79009 7.11094 4.77297 7.14807C4.77053 7.1588 4.76472 7.18978 4.76 7.25408C4.75063 7.38165 4.75 7.55361 4.75 7.85437V9.25002C4.75 9.61656 4.75078 9.83132 4.76371 9.98959C4.77026 10.0697 4.77837 10.1084 4.78183 10.1221C4.80437 10.1624 4.83764 10.1957 4.87794 10.2182C4.89161 10.2217 4.93037 10.2298 5.01044 10.2363C5.16871 10.2492 5.38347 10.25 5.75 10.25H24.25C24.6165 10.25 24.8313 10.2492 24.9896 10.2363C25.0696 10.2298 25.1084 10.2217 25.1221 10.2182C25.1624 10.1957 25.1956 10.1624 25.2182 10.1221C25.2216 10.1084 25.2298 10.0697 25.2363 9.98959C25.2492 9.83132 25.25 9.61656 25.25 9.25003V7.85437C25.25 7.55361 25.2494 7.38165 25.24 7.25408C25.2353 7.18979 25.2295 7.1588 25.227 7.14808C25.2099 7.11094 25.184 7.07858 25.1514 7.05382C25.1415 7.0491 25.1125 7.03671 25.0508 7.01816C24.9283 6.98134 24.7605 6.94343 24.4669 6.87818L15.2169 4.82263C15.1312 4.80358 15.0851 4.7934 15.05 4.78656C15.0322 4.78309 15.0237 4.78178 15.0208 4.78139ZM25.1556 7.05594C25.1556 7.05595 25.1551 7.05568 25.1541 7.05513L25.1556 7.05594ZM25.2259 7.14354C25.2259 7.1435 25.2261 7.14405 25.2264 7.14528L25.2259 7.14354ZM25.2165 10.1281C25.2165 10.1281 25.2166 10.1276 25.2169 10.1267L25.2165 10.1281ZM24.75 12.2474C24.8939 12.2448 25.029 12.2398 25.1524 12.2297C25.4227 12.2076 25.7233 12.1567 26.0215 12.0048C26.4448 11.7891 26.7891 11.4449 27.0048 11.0215C27.1567 10.7233 27.2076 10.4227 27.2297 10.1525C27.2501 9.90274 27.25 9.60484 27.25 9.28435V7.82487C27.25 7.56406 27.25 7.31739 27.2346 7.10758C27.2177 6.87729 27.1789 6.62452 27.0674 6.36488C26.9064 5.98987 26.6464 5.66573 26.3152 5.42716C26.0859 5.26199 25.8476 5.16928 25.6265 5.10281C25.425 5.04225 25.1842 4.98876 24.9296 4.9322L15.6508 2.87025C15.6402 2.8679 15.6295 2.86551 15.6187 2.8631C15.4895 2.83424 15.3462 2.80225 15.1966 2.78912C15.0658 2.77765 14.9342 2.77765 14.8035 2.78912C14.6538 2.80225 14.5105 2.83424 14.3813 2.8631C14.3705 2.86551 14.3598 2.8679 14.3492 2.87025L5.09921 4.92581C5.0896 4.92794 5.08 4.93008 5.07042 4.9322C4.81581 4.98876 4.57501 5.04225 4.37354 5.10281C4.1524 5.16928 3.91407 5.26199 3.6848 5.42716C3.35366 5.66573 3.09364 5.98987 2.93259 6.36488C2.82109 6.62452 2.78228 6.87729 2.76537 7.10758C2.74996 7.31739 2.74998 7.56406 2.75 7.82487C2.75 7.83468 2.75 7.84452 2.75 7.85437L2.75 9.28433C2.74998 9.60482 2.74995 9.90273 2.77035 10.1525C2.79244 10.4227 2.84332 10.7233 2.99524 11.0215C3.21095 11.4449 3.55516 11.7891 3.97852 12.0048C4.27669 12.1567 4.57729 12.2076 4.84757 12.2297C4.97098 12.2398 5.10615 12.2448 5.25 12.2474V20.2526C5.10615 20.2552 4.97098 20.2603 4.84757 20.2704C4.57729 20.2925 4.27669 20.3433 3.97853 20.4953C3.55516 20.711 3.21095 21.0552 2.99524 21.4785C2.84332 21.7767 2.79244 22.0773 2.77036 22.3476C2.74995 22.5973 2.74998 22.8952 2.75 23.2157L2.75 24.2843C2.74998 24.6048 2.74995 24.9027 2.77035 25.1525C2.79244 25.4227 2.84332 25.7233 2.99524 26.0215C3.21095 26.4449 3.55516 26.7891 3.97852 27.0048C4.27669 27.1567 4.57729 27.2076 4.84757 27.2297C5.09729 27.2501 5.39519 27.25 5.71567 27.25L24.2843 27.25C24.6048 27.2501 24.9027 27.2501 25.1524 27.2297C25.4227 27.2076 25.7233 27.1567 26.0215 27.0048C26.4449 26.7891 26.7891 26.4449 27.0048 26.0215C27.1567 25.7233 27.2076 25.4227 27.2297 25.1525C27.2501 24.9027 27.25 24.6048 27.25 24.2844V23.2157C27.25 22.8952 27.2501 22.5973 27.2297 22.3476C27.2076 22.0773 27.1567 21.7767 27.0048 21.4785C26.7891 21.0552 26.4448 20.711 26.0215 20.4953C25.7233 20.3433 25.4227 20.2925 25.1524 20.2704C25.029 20.2603 24.8939 20.2552 24.75 20.2526V12.2474ZM22.75 12.25H19.125V20.25H22.75V12.25ZM5.75 22.25C5.38347 22.25 5.16871 22.2508 5.01044 22.2637C4.93037 22.2703 4.89161 22.2784 4.87794 22.2818C4.83764 22.3044 4.80437 22.3377 4.78183 22.378C4.77837 22.3916 4.77026 22.4304 4.76371 22.5105C4.75078 22.6687 4.75 22.8835 4.75 23.25V24.25C4.75 24.6166 4.75078 24.8313 4.76371 24.9896C4.77026 25.0697 4.77837 25.1084 4.78183 25.1221C4.80437 25.1624 4.83764 25.1957 4.87794 25.2182C4.89161 25.2217 4.93037 25.2298 5.01044 25.2363C5.16871 25.2492 5.38347 25.25 5.75 25.25H24.25C24.6165 25.25 24.8313 25.2492 24.9896 25.2363C25.0696 25.2298 25.1084 25.2217 25.1221 25.2182C25.1624 25.1957 25.1956 25.1624 25.2182 25.1221C25.2216 25.1084 25.2298 25.0697 25.2363 24.9896C25.2492 24.8313 25.25 24.6166 25.25 24.25V23.25C25.25 22.8835 25.2492 22.6687 25.2363 22.5105C25.2298 22.4304 25.2216 22.3916 25.2182 22.378C25.1956 22.3377 25.1624 22.3044 25.1221 22.2818C25.1084 22.2784 25.0696 22.2703 24.9896 22.2637C24.8313 22.2508 24.6165 22.25 24.25 22.25H5.75ZM25.128 22.2835C25.128 22.2835 25.1276 22.2834 25.1267 22.2831L25.128 22.2835ZM4.87197 25.2165C4.87199 25.2165 4.87245 25.2166 4.87329 25.2169L4.87197 25.2165ZM4.78352 22.372C4.78353 22.372 4.78339 22.3725 4.78309 22.3733L4.78352 22.372ZM7.25 20.25H10.875V12.25H7.25V20.25ZM12.875 12.25V20.25H17.125V12.25H12.875ZM4.87197 10.2165C4.87199 10.2165 4.87245 10.2166 4.87329 10.2169L4.87197 10.2165ZM4.77414 7.14354C4.77415 7.14356 4.77399 7.14416 4.77365 7.14525L4.77414 7.14354ZM4.8444 7.05594C4.84437 7.05594 4.84487 7.05565 4.846 7.05508L4.8444 7.05594Z"
                fill="#AE4408"
              />
            </svg>
          </div>
          <div className={styles.info}>
            <h5>Достопримечательности</h5>
            <p>Памятники, парки / скверы, храмы, церкви, архитектура</p>
          </div>
        </div>
      </Link>
      <Link to="#">
        <div className={styles.touristElem}>
          <div className={styles.image}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0208 4.78139C15.007 4.78023 14.993 4.78023 14.9792 4.78139C14.9763 4.78178 14.9678 4.78309 14.95 4.78656C14.915 4.7934 14.8688 4.80358 14.7831 4.82263L5.53307 6.87818C5.23947 6.94343 5.07175 6.98134 4.94924 7.01816C4.88751 7.03671 4.85852 7.0491 4.84858 7.05382C4.81605 7.07858 4.79009 7.11094 4.77297 7.14807C4.77053 7.1588 4.76472 7.18978 4.76 7.25408C4.75063 7.38165 4.75 7.55361 4.75 7.85437V9.25002C4.75 9.61656 4.75078 9.83132 4.76371 9.98959C4.77026 10.0697 4.77837 10.1084 4.78183 10.1221C4.80437 10.1624 4.83764 10.1957 4.87794 10.2182C4.89161 10.2217 4.93037 10.2298 5.01044 10.2363C5.16871 10.2492 5.38347 10.25 5.75 10.25H24.25C24.6165 10.25 24.8313 10.2492 24.9896 10.2363C25.0696 10.2298 25.1084 10.2217 25.1221 10.2182C25.1624 10.1957 25.1956 10.1624 25.2182 10.1221C25.2216 10.1084 25.2298 10.0697 25.2363 9.98959C25.2492 9.83132 25.25 9.61656 25.25 9.25003V7.85437C25.25 7.55361 25.2494 7.38165 25.24 7.25408C25.2353 7.18979 25.2295 7.1588 25.227 7.14808C25.2099 7.11094 25.184 7.07858 25.1514 7.05382C25.1415 7.0491 25.1125 7.03671 25.0508 7.01816C24.9283 6.98134 24.7605 6.94343 24.4669 6.87818L15.2169 4.82263C15.1312 4.80358 15.0851 4.7934 15.05 4.78656C15.0322 4.78309 15.0237 4.78178 15.0208 4.78139ZM25.1556 7.05594C25.1556 7.05595 25.1551 7.05568 25.1541 7.05513L25.1556 7.05594ZM25.2259 7.14354C25.2259 7.1435 25.2261 7.14405 25.2264 7.14528L25.2259 7.14354ZM25.2165 10.1281C25.2165 10.1281 25.2166 10.1276 25.2169 10.1267L25.2165 10.1281ZM24.75 12.2474C24.8939 12.2448 25.029 12.2398 25.1524 12.2297C25.4227 12.2076 25.7233 12.1567 26.0215 12.0048C26.4448 11.7891 26.7891 11.4449 27.0048 11.0215C27.1567 10.7233 27.2076 10.4227 27.2297 10.1525C27.2501 9.90274 27.25 9.60484 27.25 9.28435V7.82487C27.25 7.56406 27.25 7.31739 27.2346 7.10758C27.2177 6.87729 27.1789 6.62452 27.0674 6.36488C26.9064 5.98987 26.6464 5.66573 26.3152 5.42716C26.0859 5.26199 25.8476 5.16928 25.6265 5.10281C25.425 5.04225 25.1842 4.98876 24.9296 4.9322L15.6508 2.87025C15.6402 2.8679 15.6295 2.86551 15.6187 2.8631C15.4895 2.83424 15.3462 2.80225 15.1966 2.78912C15.0658 2.77765 14.9342 2.77765 14.8035 2.78912C14.6538 2.80225 14.5105 2.83424 14.3813 2.8631C14.3705 2.86551 14.3598 2.8679 14.3492 2.87025L5.09921 4.92581C5.0896 4.92794 5.08 4.93008 5.07042 4.9322C4.81581 4.98876 4.57501 5.04225 4.37354 5.10281C4.1524 5.16928 3.91407 5.26199 3.6848 5.42716C3.35366 5.66573 3.09364 5.98987 2.93259 6.36488C2.82109 6.62452 2.78228 6.87729 2.76537 7.10758C2.74996 7.31739 2.74998 7.56406 2.75 7.82487C2.75 7.83468 2.75 7.84452 2.75 7.85437L2.75 9.28433C2.74998 9.60482 2.74995 9.90273 2.77035 10.1525C2.79244 10.4227 2.84332 10.7233 2.99524 11.0215C3.21095 11.4449 3.55516 11.7891 3.97852 12.0048C4.27669 12.1567 4.57729 12.2076 4.84757 12.2297C4.97098 12.2398 5.10615 12.2448 5.25 12.2474V20.2526C5.10615 20.2552 4.97098 20.2603 4.84757 20.2704C4.57729 20.2925 4.27669 20.3433 3.97853 20.4953C3.55516 20.711 3.21095 21.0552 2.99524 21.4785C2.84332 21.7767 2.79244 22.0773 2.77036 22.3476C2.74995 22.5973 2.74998 22.8952 2.75 23.2157L2.75 24.2843C2.74998 24.6048 2.74995 24.9027 2.77035 25.1525C2.79244 25.4227 2.84332 25.7233 2.99524 26.0215C3.21095 26.4449 3.55516 26.7891 3.97852 27.0048C4.27669 27.1567 4.57729 27.2076 4.84757 27.2297C5.09729 27.2501 5.39519 27.25 5.71567 27.25L24.2843 27.25C24.6048 27.2501 24.9027 27.2501 25.1524 27.2297C25.4227 27.2076 25.7233 27.1567 26.0215 27.0048C26.4449 26.7891 26.7891 26.4449 27.0048 26.0215C27.1567 25.7233 27.2076 25.4227 27.2297 25.1525C27.2501 24.9027 27.25 24.6048 27.25 24.2844V23.2157C27.25 22.8952 27.2501 22.5973 27.2297 22.3476C27.2076 22.0773 27.1567 21.7767 27.0048 21.4785C26.7891 21.0552 26.4448 20.711 26.0215 20.4953C25.7233 20.3433 25.4227 20.2925 25.1524 20.2704C25.029 20.2603 24.8939 20.2552 24.75 20.2526V12.2474ZM22.75 12.25H19.125V20.25H22.75V12.25ZM5.75 22.25C5.38347 22.25 5.16871 22.2508 5.01044 22.2637C4.93037 22.2703 4.89161 22.2784 4.87794 22.2818C4.83764 22.3044 4.80437 22.3377 4.78183 22.378C4.77837 22.3916 4.77026 22.4304 4.76371 22.5105C4.75078 22.6687 4.75 22.8835 4.75 23.25V24.25C4.75 24.6166 4.75078 24.8313 4.76371 24.9896C4.77026 25.0697 4.77837 25.1084 4.78183 25.1221C4.80437 25.1624 4.83764 25.1957 4.87794 25.2182C4.89161 25.2217 4.93037 25.2298 5.01044 25.2363C5.16871 25.2492 5.38347 25.25 5.75 25.25H24.25C24.6165 25.25 24.8313 25.2492 24.9896 25.2363C25.0696 25.2298 25.1084 25.2217 25.1221 25.2182C25.1624 25.1957 25.1956 25.1624 25.2182 25.1221C25.2216 25.1084 25.2298 25.0697 25.2363 24.9896C25.2492 24.8313 25.25 24.6166 25.25 24.25V23.25C25.25 22.8835 25.2492 22.6687 25.2363 22.5105C25.2298 22.4304 25.2216 22.3916 25.2182 22.378C25.1956 22.3377 25.1624 22.3044 25.1221 22.2818C25.1084 22.2784 25.0696 22.2703 24.9896 22.2637C24.8313 22.2508 24.6165 22.25 24.25 22.25H5.75ZM25.128 22.2835C25.128 22.2835 25.1276 22.2834 25.1267 22.2831L25.128 22.2835ZM4.87197 25.2165C4.87199 25.2165 4.87245 25.2166 4.87329 25.2169L4.87197 25.2165ZM4.78352 22.372C4.78353 22.372 4.78339 22.3725 4.78309 22.3733L4.78352 22.372ZM7.25 20.25H10.875V12.25H7.25V20.25ZM12.875 12.25V20.25H17.125V12.25H12.875ZM4.87197 10.2165C4.87199 10.2165 4.87245 10.2166 4.87329 10.2169L4.87197 10.2165ZM4.77414 7.14354C4.77415 7.14356 4.77399 7.14416 4.77365 7.14525L4.77414 7.14354ZM4.8444 7.05594C4.84437 7.05594 4.84487 7.05565 4.846 7.05508L4.8444 7.05594Z"
                fill="#AE4408"
              />
            </svg>
          </div>
          <div className={styles.info}>
            <h5>Достопримечательности</h5>
            <p>Памятники, парки / скверы, храмы, церкви, архитектура</p>
          </div>
        </div>
      </Link>
      <Link to="#">
        <div className={styles.touristElem}>
          <div className={styles.image}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0208 4.78139C15.007 4.78023 14.993 4.78023 14.9792 4.78139C14.9763 4.78178 14.9678 4.78309 14.95 4.78656C14.915 4.7934 14.8688 4.80358 14.7831 4.82263L5.53307 6.87818C5.23947 6.94343 5.07175 6.98134 4.94924 7.01816C4.88751 7.03671 4.85852 7.0491 4.84858 7.05382C4.81605 7.07858 4.79009 7.11094 4.77297 7.14807C4.77053 7.1588 4.76472 7.18978 4.76 7.25408C4.75063 7.38165 4.75 7.55361 4.75 7.85437V9.25002C4.75 9.61656 4.75078 9.83132 4.76371 9.98959C4.77026 10.0697 4.77837 10.1084 4.78183 10.1221C4.80437 10.1624 4.83764 10.1957 4.87794 10.2182C4.89161 10.2217 4.93037 10.2298 5.01044 10.2363C5.16871 10.2492 5.38347 10.25 5.75 10.25H24.25C24.6165 10.25 24.8313 10.2492 24.9896 10.2363C25.0696 10.2298 25.1084 10.2217 25.1221 10.2182C25.1624 10.1957 25.1956 10.1624 25.2182 10.1221C25.2216 10.1084 25.2298 10.0697 25.2363 9.98959C25.2492 9.83132 25.25 9.61656 25.25 9.25003V7.85437C25.25 7.55361 25.2494 7.38165 25.24 7.25408C25.2353 7.18979 25.2295 7.1588 25.227 7.14808C25.2099 7.11094 25.184 7.07858 25.1514 7.05382C25.1415 7.0491 25.1125 7.03671 25.0508 7.01816C24.9283 6.98134 24.7605 6.94343 24.4669 6.87818L15.2169 4.82263C15.1312 4.80358 15.0851 4.7934 15.05 4.78656C15.0322 4.78309 15.0237 4.78178 15.0208 4.78139ZM25.1556 7.05594C25.1556 7.05595 25.1551 7.05568 25.1541 7.05513L25.1556 7.05594ZM25.2259 7.14354C25.2259 7.1435 25.2261 7.14405 25.2264 7.14528L25.2259 7.14354ZM25.2165 10.1281C25.2165 10.1281 25.2166 10.1276 25.2169 10.1267L25.2165 10.1281ZM24.75 12.2474C24.8939 12.2448 25.029 12.2398 25.1524 12.2297C25.4227 12.2076 25.7233 12.1567 26.0215 12.0048C26.4448 11.7891 26.7891 11.4449 27.0048 11.0215C27.1567 10.7233 27.2076 10.4227 27.2297 10.1525C27.2501 9.90274 27.25 9.60484 27.25 9.28435V7.82487C27.25 7.56406 27.25 7.31739 27.2346 7.10758C27.2177 6.87729 27.1789 6.62452 27.0674 6.36488C26.9064 5.98987 26.6464 5.66573 26.3152 5.42716C26.0859 5.26199 25.8476 5.16928 25.6265 5.10281C25.425 5.04225 25.1842 4.98876 24.9296 4.9322L15.6508 2.87025C15.6402 2.8679 15.6295 2.86551 15.6187 2.8631C15.4895 2.83424 15.3462 2.80225 15.1966 2.78912C15.0658 2.77765 14.9342 2.77765 14.8035 2.78912C14.6538 2.80225 14.5105 2.83424 14.3813 2.8631C14.3705 2.86551 14.3598 2.8679 14.3492 2.87025L5.09921 4.92581C5.0896 4.92794 5.08 4.93008 5.07042 4.9322C4.81581 4.98876 4.57501 5.04225 4.37354 5.10281C4.1524 5.16928 3.91407 5.26199 3.6848 5.42716C3.35366 5.66573 3.09364 5.98987 2.93259 6.36488C2.82109 6.62452 2.78228 6.87729 2.76537 7.10758C2.74996 7.31739 2.74998 7.56406 2.75 7.82487C2.75 7.83468 2.75 7.84452 2.75 7.85437L2.75 9.28433C2.74998 9.60482 2.74995 9.90273 2.77035 10.1525C2.79244 10.4227 2.84332 10.7233 2.99524 11.0215C3.21095 11.4449 3.55516 11.7891 3.97852 12.0048C4.27669 12.1567 4.57729 12.2076 4.84757 12.2297C4.97098 12.2398 5.10615 12.2448 5.25 12.2474V20.2526C5.10615 20.2552 4.97098 20.2603 4.84757 20.2704C4.57729 20.2925 4.27669 20.3433 3.97853 20.4953C3.55516 20.711 3.21095 21.0552 2.99524 21.4785C2.84332 21.7767 2.79244 22.0773 2.77036 22.3476C2.74995 22.5973 2.74998 22.8952 2.75 23.2157L2.75 24.2843C2.74998 24.6048 2.74995 24.9027 2.77035 25.1525C2.79244 25.4227 2.84332 25.7233 2.99524 26.0215C3.21095 26.4449 3.55516 26.7891 3.97852 27.0048C4.27669 27.1567 4.57729 27.2076 4.84757 27.2297C5.09729 27.2501 5.39519 27.25 5.71567 27.25L24.2843 27.25C24.6048 27.2501 24.9027 27.2501 25.1524 27.2297C25.4227 27.2076 25.7233 27.1567 26.0215 27.0048C26.4449 26.7891 26.7891 26.4449 27.0048 26.0215C27.1567 25.7233 27.2076 25.4227 27.2297 25.1525C27.2501 24.9027 27.25 24.6048 27.25 24.2844V23.2157C27.25 22.8952 27.2501 22.5973 27.2297 22.3476C27.2076 22.0773 27.1567 21.7767 27.0048 21.4785C26.7891 21.0552 26.4448 20.711 26.0215 20.4953C25.7233 20.3433 25.4227 20.2925 25.1524 20.2704C25.029 20.2603 24.8939 20.2552 24.75 20.2526V12.2474ZM22.75 12.25H19.125V20.25H22.75V12.25ZM5.75 22.25C5.38347 22.25 5.16871 22.2508 5.01044 22.2637C4.93037 22.2703 4.89161 22.2784 4.87794 22.2818C4.83764 22.3044 4.80437 22.3377 4.78183 22.378C4.77837 22.3916 4.77026 22.4304 4.76371 22.5105C4.75078 22.6687 4.75 22.8835 4.75 23.25V24.25C4.75 24.6166 4.75078 24.8313 4.76371 24.9896C4.77026 25.0697 4.77837 25.1084 4.78183 25.1221C4.80437 25.1624 4.83764 25.1957 4.87794 25.2182C4.89161 25.2217 4.93037 25.2298 5.01044 25.2363C5.16871 25.2492 5.38347 25.25 5.75 25.25H24.25C24.6165 25.25 24.8313 25.2492 24.9896 25.2363C25.0696 25.2298 25.1084 25.2217 25.1221 25.2182C25.1624 25.1957 25.1956 25.1624 25.2182 25.1221C25.2216 25.1084 25.2298 25.0697 25.2363 24.9896C25.2492 24.8313 25.25 24.6166 25.25 24.25V23.25C25.25 22.8835 25.2492 22.6687 25.2363 22.5105C25.2298 22.4304 25.2216 22.3916 25.2182 22.378C25.1956 22.3377 25.1624 22.3044 25.1221 22.2818C25.1084 22.2784 25.0696 22.2703 24.9896 22.2637C24.8313 22.2508 24.6165 22.25 24.25 22.25H5.75ZM25.128 22.2835C25.128 22.2835 25.1276 22.2834 25.1267 22.2831L25.128 22.2835ZM4.87197 25.2165C4.87199 25.2165 4.87245 25.2166 4.87329 25.2169L4.87197 25.2165ZM4.78352 22.372C4.78353 22.372 4.78339 22.3725 4.78309 22.3733L4.78352 22.372ZM7.25 20.25H10.875V12.25H7.25V20.25ZM12.875 12.25V20.25H17.125V12.25H12.875ZM4.87197 10.2165C4.87199 10.2165 4.87245 10.2166 4.87329 10.2169L4.87197 10.2165ZM4.77414 7.14354C4.77415 7.14356 4.77399 7.14416 4.77365 7.14525L4.77414 7.14354ZM4.8444 7.05594C4.84437 7.05594 4.84487 7.05565 4.846 7.05508L4.8444 7.05594Z"
                fill="#AE4408"
              />
            </svg>
          </div>
          <div className={styles.info}>
            <h5>Достопримечательности</h5>
            <p>Памятники, парки / скверы, храмы, церкви, архитектура</p>
          </div>
        </div>
      </Link>
      <Link to="#">
        <div className={styles.touristElem}>
          <div className={styles.image}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0208 4.78139C15.007 4.78023 14.993 4.78023 14.9792 4.78139C14.9763 4.78178 14.9678 4.78309 14.95 4.78656C14.915 4.7934 14.8688 4.80358 14.7831 4.82263L5.53307 6.87818C5.23947 6.94343 5.07175 6.98134 4.94924 7.01816C4.88751 7.03671 4.85852 7.0491 4.84858 7.05382C4.81605 7.07858 4.79009 7.11094 4.77297 7.14807C4.77053 7.1588 4.76472 7.18978 4.76 7.25408C4.75063 7.38165 4.75 7.55361 4.75 7.85437V9.25002C4.75 9.61656 4.75078 9.83132 4.76371 9.98959C4.77026 10.0697 4.77837 10.1084 4.78183 10.1221C4.80437 10.1624 4.83764 10.1957 4.87794 10.2182C4.89161 10.2217 4.93037 10.2298 5.01044 10.2363C5.16871 10.2492 5.38347 10.25 5.75 10.25H24.25C24.6165 10.25 24.8313 10.2492 24.9896 10.2363C25.0696 10.2298 25.1084 10.2217 25.1221 10.2182C25.1624 10.1957 25.1956 10.1624 25.2182 10.1221C25.2216 10.1084 25.2298 10.0697 25.2363 9.98959C25.2492 9.83132 25.25 9.61656 25.25 9.25003V7.85437C25.25 7.55361 25.2494 7.38165 25.24 7.25408C25.2353 7.18979 25.2295 7.1588 25.227 7.14808C25.2099 7.11094 25.184 7.07858 25.1514 7.05382C25.1415 7.0491 25.1125 7.03671 25.0508 7.01816C24.9283 6.98134 24.7605 6.94343 24.4669 6.87818L15.2169 4.82263C15.1312 4.80358 15.0851 4.7934 15.05 4.78656C15.0322 4.78309 15.0237 4.78178 15.0208 4.78139ZM25.1556 7.05594C25.1556 7.05595 25.1551 7.05568 25.1541 7.05513L25.1556 7.05594ZM25.2259 7.14354C25.2259 7.1435 25.2261 7.14405 25.2264 7.14528L25.2259 7.14354ZM25.2165 10.1281C25.2165 10.1281 25.2166 10.1276 25.2169 10.1267L25.2165 10.1281ZM24.75 12.2474C24.8939 12.2448 25.029 12.2398 25.1524 12.2297C25.4227 12.2076 25.7233 12.1567 26.0215 12.0048C26.4448 11.7891 26.7891 11.4449 27.0048 11.0215C27.1567 10.7233 27.2076 10.4227 27.2297 10.1525C27.2501 9.90274 27.25 9.60484 27.25 9.28435V7.82487C27.25 7.56406 27.25 7.31739 27.2346 7.10758C27.2177 6.87729 27.1789 6.62452 27.0674 6.36488C26.9064 5.98987 26.6464 5.66573 26.3152 5.42716C26.0859 5.26199 25.8476 5.16928 25.6265 5.10281C25.425 5.04225 25.1842 4.98876 24.9296 4.9322L15.6508 2.87025C15.6402 2.8679 15.6295 2.86551 15.6187 2.8631C15.4895 2.83424 15.3462 2.80225 15.1966 2.78912C15.0658 2.77765 14.9342 2.77765 14.8035 2.78912C14.6538 2.80225 14.5105 2.83424 14.3813 2.8631C14.3705 2.86551 14.3598 2.8679 14.3492 2.87025L5.09921 4.92581C5.0896 4.92794 5.08 4.93008 5.07042 4.9322C4.81581 4.98876 4.57501 5.04225 4.37354 5.10281C4.1524 5.16928 3.91407 5.26199 3.6848 5.42716C3.35366 5.66573 3.09364 5.98987 2.93259 6.36488C2.82109 6.62452 2.78228 6.87729 2.76537 7.10758C2.74996 7.31739 2.74998 7.56406 2.75 7.82487C2.75 7.83468 2.75 7.84452 2.75 7.85437L2.75 9.28433C2.74998 9.60482 2.74995 9.90273 2.77035 10.1525C2.79244 10.4227 2.84332 10.7233 2.99524 11.0215C3.21095 11.4449 3.55516 11.7891 3.97852 12.0048C4.27669 12.1567 4.57729 12.2076 4.84757 12.2297C4.97098 12.2398 5.10615 12.2448 5.25 12.2474V20.2526C5.10615 20.2552 4.97098 20.2603 4.84757 20.2704C4.57729 20.2925 4.27669 20.3433 3.97853 20.4953C3.55516 20.711 3.21095 21.0552 2.99524 21.4785C2.84332 21.7767 2.79244 22.0773 2.77036 22.3476C2.74995 22.5973 2.74998 22.8952 2.75 23.2157L2.75 24.2843C2.74998 24.6048 2.74995 24.9027 2.77035 25.1525C2.79244 25.4227 2.84332 25.7233 2.99524 26.0215C3.21095 26.4449 3.55516 26.7891 3.97852 27.0048C4.27669 27.1567 4.57729 27.2076 4.84757 27.2297C5.09729 27.2501 5.39519 27.25 5.71567 27.25L24.2843 27.25C24.6048 27.2501 24.9027 27.2501 25.1524 27.2297C25.4227 27.2076 25.7233 27.1567 26.0215 27.0048C26.4449 26.7891 26.7891 26.4449 27.0048 26.0215C27.1567 25.7233 27.2076 25.4227 27.2297 25.1525C27.2501 24.9027 27.25 24.6048 27.25 24.2844V23.2157C27.25 22.8952 27.2501 22.5973 27.2297 22.3476C27.2076 22.0773 27.1567 21.7767 27.0048 21.4785C26.7891 21.0552 26.4448 20.711 26.0215 20.4953C25.7233 20.3433 25.4227 20.2925 25.1524 20.2704C25.029 20.2603 24.8939 20.2552 24.75 20.2526V12.2474ZM22.75 12.25H19.125V20.25H22.75V12.25ZM5.75 22.25C5.38347 22.25 5.16871 22.2508 5.01044 22.2637C4.93037 22.2703 4.89161 22.2784 4.87794 22.2818C4.83764 22.3044 4.80437 22.3377 4.78183 22.378C4.77837 22.3916 4.77026 22.4304 4.76371 22.5105C4.75078 22.6687 4.75 22.8835 4.75 23.25V24.25C4.75 24.6166 4.75078 24.8313 4.76371 24.9896C4.77026 25.0697 4.77837 25.1084 4.78183 25.1221C4.80437 25.1624 4.83764 25.1957 4.87794 25.2182C4.89161 25.2217 4.93037 25.2298 5.01044 25.2363C5.16871 25.2492 5.38347 25.25 5.75 25.25H24.25C24.6165 25.25 24.8313 25.2492 24.9896 25.2363C25.0696 25.2298 25.1084 25.2217 25.1221 25.2182C25.1624 25.1957 25.1956 25.1624 25.2182 25.1221C25.2216 25.1084 25.2298 25.0697 25.2363 24.9896C25.2492 24.8313 25.25 24.6166 25.25 24.25V23.25C25.25 22.8835 25.2492 22.6687 25.2363 22.5105C25.2298 22.4304 25.2216 22.3916 25.2182 22.378C25.1956 22.3377 25.1624 22.3044 25.1221 22.2818C25.1084 22.2784 25.0696 22.2703 24.9896 22.2637C24.8313 22.2508 24.6165 22.25 24.25 22.25H5.75ZM25.128 22.2835C25.128 22.2835 25.1276 22.2834 25.1267 22.2831L25.128 22.2835ZM4.87197 25.2165C4.87199 25.2165 4.87245 25.2166 4.87329 25.2169L4.87197 25.2165ZM4.78352 22.372C4.78353 22.372 4.78339 22.3725 4.78309 22.3733L4.78352 22.372ZM7.25 20.25H10.875V12.25H7.25V20.25ZM12.875 12.25V20.25H17.125V12.25H12.875ZM4.87197 10.2165C4.87199 10.2165 4.87245 10.2166 4.87329 10.2169L4.87197 10.2165ZM4.77414 7.14354C4.77415 7.14356 4.77399 7.14416 4.77365 7.14525L4.77414 7.14354ZM4.8444 7.05594C4.84437 7.05594 4.84487 7.05565 4.846 7.05508L4.8444 7.05594Z"
                fill="#AE4408"
              />
            </svg>
          </div>
          <div className={styles.info}>
            <h5>Достопримечательности</h5>
            <p>Памятники, парки / скверы, храмы, церкви, архитектура</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TouristObjects;
