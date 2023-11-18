import React, { useRef } from "react";

import img from "./Image.png";

import styles from "./ImageSlider.module.scss";

interface ImageSliderProps {
  images?: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const contentRef = useRef<null | HTMLDivElement>(null);

  const handleMoveLeft = (e: React.MouseEvent<HTMLDivElement>) => {
    contentRef.current?.scrollBy(-100, 0);
  };

  const handleMoveRight = (e: React.MouseEvent<HTMLDivElement>) => {
    contentRef.current?.scrollBy(100, 0);
  };

  return (
    <div className={styles.imageSlider}>
      <div className={styles.slider} ref={contentRef}>
        <img src={img} alt="object" />
        <img src={img} alt="object" />
        <img src={img} alt="object" />
        <img src={img} alt="object" />
        <img src={img} alt="object" />
      </div>
      <div className={styles.left} onClick={handleMoveLeft}>
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 7L7 1"
            stroke="#344054"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.right} onClick={handleMoveRight}>
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13L7 7L1 1"
            stroke="#344054"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ImageSlider;
