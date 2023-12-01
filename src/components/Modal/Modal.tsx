import React, { useRef } from "react";

import { Button } from "src/components";
import { useLanguageControl } from "src/hooks";

import styles from "./Modal.module.scss";

interface ModalProps {
  type: "image" | "qrcode";
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  setCurrentImages?: React.Dispatch<React.SetStateAction<number>>;
  imageLength?: number;
}

const Modal = ({
  type = "image",
  visible,
  children,
  onClose,
  setCurrentImages,
  imageLength,
}: ModalProps) => {
  const languageControl = useLanguageControl();
  const outsideRef = useRef<null | HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentImages?.((prev) => {
      if (prev + 1 !== imageLength) {
        return prev + 1;
      }

      return prev;
    });
  };

  const prevSlide = () => {
    setCurrentImages?.((prev) => {
      if (prev !== 0) {
        return prev - 1;
      }

      return prev;
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      outsideRef.current &&
      !outsideRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  return (
    <>
      {visible && (
        <div className={styles.modal} onClick={handleClick}>
          {type === "image" ? (
            <div className={styles.modalContent} ref={outsideRef}>
              {children}
              <Button className={styles.close} onClick={onClose}>
                {languageControl("Закрыть", "Close")}
              </Button>
              <div className={styles.buttons}>
                <Button
                  onClick={prevSlide}
                  noPadding={true}
                  classNameButtonContent={styles.button}
                >
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
                <Button
                  onClick={nextSlide}
                  noPadding={true}
                  classNameButtonContent={styles.button}
                >
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
          ) : (
            <div className={styles.modalContentQRCode} ref={outsideRef}>
              <div>
                {children}
                <span>
                  Отсканировав данный QR-код Вы сможете получить дополнительную
                  информацию о данном объекте в приложении «Мой Смоленск»
                </span>
              </div>
              <Button className={styles.button} onClick={onClose}>
                Закрыть
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
