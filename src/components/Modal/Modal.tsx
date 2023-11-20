import React from "react";

import { Button } from "src/components";

import styles from "./Modal.module.scss";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ visible, children, onClose }: ModalProps) => {
  return (
    <>
      {visible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {children}
            <Button className={styles.close} onClick={onClose}>
              Закрыть
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
