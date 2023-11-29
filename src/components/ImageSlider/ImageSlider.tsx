import React, { useRef } from "react";

import { Cover, Image } from "src/api/myApi";
import { Modal } from "src/components";

import styles from "./ImageSlider.module.scss";

type Images = Image & Cover;

interface ImageSliderProps {
  images?: Images[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const contentRef = useRef<null | HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);
  const [currentImages, setCurrentImages] = React.useState(0);
  const [isShowArrows, setIsShowArrows] = React.useState({
    left: false,
    right: true,
  });

  const handleMoveLeft = () => {
    contentRef.current?.scrollBy({
      left: -384,
      behavior: "smooth",
    });
  };

  const handleMoveRight = () => {
    contentRef.current?.scrollBy({
      left: 384,
      behavior: "smooth",
    });
  };

  const scrollCheck = () => {
    if (!contentRef.current) return;

    if (contentRef.current?.scrollLeft <= 0) {
      setIsShowArrows({
        left: false,
        right: true,
      });
    } else {
      setIsShowArrows({
        left: true,
        right: true,
      });
    }

    if (
      contentRef.current.scrollWidth - contentRef.current.clientWidth ===
      contentRef.current?.scrollLeft
    ) {
      setIsShowArrows({
        left: true,
        right: false,
      });
    }
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
        <img
          src={
            images?.[currentImages]?.urlOriginal ?? images?.[currentImages]?.url
          }
          alt=""
        />
      </Modal>
      <div className={styles.slider} ref={contentRef} onScroll={scrollCheck}>
        {images?.map((image, index) => (
          <img
            key={image.id}
            onClick={() => handleOpenModal(index)}
            src={image.url3x2 ?? image.url}
            alt="object"
          />
        ))}
      </div>
      {isShowArrows.left && images!?.length > 2 && (
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
      )}
      {isShowArrows.right && images!?.length > 2 && (
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
      )}
    </div>
  );
};

export default ImageSlider;
