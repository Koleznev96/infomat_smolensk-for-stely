import React, { useRef } from "react";

import { Image } from "src/api/myApi";
import { Modal } from "src/components";

import styles from "./ImageSlider.module.scss";

interface ImageSliderProps {
  images?: Image[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const contentRef = useRef<null | HTMLDivElement>(null);

  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const [visible, setVisible] = React.useState(false);
  const [isMouseDown, setIsMouseDown] = React.useState(false);
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
      Math.ceil(contentRef.current?.scrollLeft)
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

  const handleDragStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!contentRef.current) return;

    const slider = contentRef.current;
    const startX = e.touches[0].clientX - slider.offsetLeft;
    const startY = e.touches[0].clientY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!contentRef.current) return;
    document.body.style.cursor = "default";
  };

  const handleDrag = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMouseDown || !contentRef.current) return;

    const slider = contentRef.current;
    const x = e.touches[0].clientX - slider.offsetLeft;
    const y = e.touches[0].clientY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
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
      <div
        className={styles.slider}
        ref={contentRef}
        onScroll={scrollCheck}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDrag}
      >
        {images?.map((image, index) => (
          <img
            key={image.id}
            onClick={() => handleOpenModal(index)}
            src={image.url3x2Original}
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
