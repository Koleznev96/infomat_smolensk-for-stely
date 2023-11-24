import React from "react";

import { Button } from "src/components";

import styles from "./Modal.module.scss";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  setCurrentImages: React.Dispatch<React.SetStateAction<number>>;
  imageLength: number;
}

const Modal = ({
  visible,
  children,
  onClose,
  setCurrentImages,
  imageLength,
}: ModalProps) => {
  const nextSlide = () => {
    setCurrentImages((prev) => {
      if (prev + 1 !== imageLength) {
        return prev + 1;
      }

      return prev;
    });
  };

  const prevSlide = () => {
    setCurrentImages((prev) => {
      if (prev !== 0) {
        return prev - 1;
      }

      return prev;
    });
  };

  return (
    <>
      {visible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {children}
            <Button className={styles.close} onClick={onClose}>
              Закрыть
            </Button>
            <div className={styles.buttons}>
              <Button onClick={prevSlide} className={styles.left}>
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.24023 13L1.24023 7L7.24023 1"
                    stroke="#344054"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button onClick={nextSlide} className={styles.right}>
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24023 13L7.24023 7L1.24023 1"
                    stroke="#344054"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
