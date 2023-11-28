import React, { useRef } from "react";

import { Image } from "src/api/myApi";
import { Modal } from "src/components";

import styles from "./ImageSlider.module.scss";

interface ImageSliderProps {
  images?: Image[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const contentRef = useRef<null | HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);
  const [currentImages, setCurrentImages] = React.useState(0);

  const handleMoveLeft = (e: React.MouseEvent<HTMLDivElement>) => {
    contentRef.current?.scrollBy(-100, 0);
  };

  const handleMoveRight = (e: React.MouseEvent<HTMLDivElement>) => {
    contentRef.current?.scrollBy(100, 0);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleOpenModal = (index: number) => {
    setVisible(true);
    setCurrentImages(index);
  };

  return (
    <div className={styles.imageSlider}>
      <Modal
        visible={visible}
        onClose={handleCloseModal}
        setCurrentImages={setCurrentImages}
        imageLength={images?.length || 0}
      >
        <img src={images?.[currentImages]?.urlOriginal} alt="" />
      </Modal>
      <div className={styles.slider} ref={contentRef}>
        {images?.map((image, index) => (
          <img
            key={image.id}
            onClick={() => handleOpenModal(index)}
            src={image.url3x2}
            alt="object"
          />
        ))}
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
